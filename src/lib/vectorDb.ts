/**
 * vectorDb.ts — High-performance RAG pipeline for barq-web-rag.
 * 
 * This version uses a Persistent JS Worker Pool for "Proper" transformers.js embedding
 * combined with barq-mesh-browser (WASM) for high-speed vector storage and search.
 */

import { initEmbedder, embedText, EMBED_DIM } from './embedder';

export interface SearchResult {
    id: number;
    score: number;
    text: string;
    metadata?: ChunkMeta;
}

export interface ChunkMeta {
    sourceFile: string;
    chunkIndex: number;
    text: string;
}

// ── Persistent Worker Pool for Speed ──────────────────────────────────────────

class PersistentPool {
    private workers: Worker[] = [];
    private numWorkers = Math.min(navigator.hardwareConcurrency || 4, 8);
    private isInitialised = false;

    async init() {
        if (this.isInitialised) return;
        console.log(`[WorkerPool] Initialising ${this.numWorkers} persistent workers...`);
        
        this.workers = Array.from({ length: this.numWorkers }).map(() => {
            return new Worker(
                new URL('../workers/embed.worker.ts', import.meta.url),
                { type: 'module' }
            );
        });
        
        // Warm up workers (pre-load model)
        const warmups = this.workers.map((w, i) => {
            return new Promise((resolve) => {
                const handler = (e: MessageEvent) => {
                    if (e.data.type === 'ready') {
                        w.removeEventListener('message', handler);
                        resolve(true);
                    }
                };
                w.addEventListener('message', handler);
                w.postMessage({ type: 'init', id: `worker-${i}` });
            });
        });
        
        await Promise.all(warmups);
        this.isInitialised = true;
        console.log('[WorkerPool] All workers ready.');
    }

    async processBatch(texts: string[], onProgress: (p: number) => void): Promise<Float32Array[]> {
        const chunksPerWorker = Math.ceil(texts.length / this.numWorkers);
        let completed = 0;

        const taskPromises = this.workers.map((worker, i) => {
            return new Promise<Float32Array[]>((resolve, reject) => {
                const start = i * chunksPerWorker;
                const end = Math.min(start + chunksPerWorker, texts.length);
                const batch = texts.slice(start, end);

                if (batch.length === 0) {
                    resolve([]);
                    return;
                }

                const msgHandler = (e: MessageEvent) => {
                    const data = e.data;
                    if (data.type === 'progress') {
                        completed += 1;
                        onProgress(completed / texts.length);
                    } else if (data.type === 'done') {
                        worker.removeEventListener('message', msgHandler);
                        worker.removeEventListener('error', errHandler);
                        resolve(data.results);
                    } else if (data.type === 'error') {
                        worker.removeEventListener('message', msgHandler);
                        worker.removeEventListener('error', errHandler);
                        reject(new Error(data.error));
                    }
                };

                const errHandler = (err: ErrorEvent) => {
                    worker.removeEventListener('message', msgHandler);
                    worker.removeEventListener('error', errHandler);
                    reject(err);
                };

                worker.addEventListener('message', msgHandler);
                worker.addEventListener('error', errHandler);
                worker.postMessage({ id: `task-${i}`, texts: batch });
            });
        });

        const results = await Promise.all(taskPromises);
        return results.flat();
    }
}

const pool = new PersistentPool();

// ── Mesh Store ───────────────────────────────────────────────────────────────

let meshStore: any = null;
let isInitialised = false;
let initPromise: Promise<void> | null = null;

const metadataStore = new Map<number, ChunkMeta & { vector: Float32Array }>();
let nextId = 0;

/**
 * Initialise the WASM compute mesh and the worker pool.
 */
export async function initDb(): Promise<void> {
    if (isInitialised) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising Turbo Parallel Engine...');
        
        try {
            // 1. WASM Setup
            const vwebMod = await import('barq-vweb');
            await (vwebMod as any).default();
            const wasmMod = await import('barq-wasm');
            await (wasmMod as any).default();
            // @ts-ignore
            const mod = await import('barq-mesh-web');
            await (mod as any).default();
            
            // We use BarqMeshWeb for storage to maintain explicit ID control for RAG
            // @ts-ignore
            meshStore = new mod.BarqMeshWeb('rag-session', EMBED_DIM);
            
            // 2. Persistent Pool Setup (parallel embedding)
            await pool.init();
            
            // 3. Main thread embedder (for queries)
            initEmbedder().catch(() => {});
            
            isInitialised = true;
        } catch (e) {
            console.error('[vectorDb] FATAL: Mesh initialisation failed:', e);
            throw e;
        }
    })();

    return initPromise;
}

function ensureInit() {
    if (!meshStore) throw new Error('vectorDb: call initDb() first');
}

/**
 * Turbocharged Parallel Ingestion:
 * Persistent Workers + Proper Transformers Embeddings + Explicit ID Mesh Storage.
 */
export async function insertChunks(
    metas: ChunkMeta[],
    onProgress: (p: number) => void = () => {}
): Promise<number> {
    ensureInit();
    if (metas.length === 0) return getCount();

    const texts = metas.map((m) => {
        // @ts-ignore
        return typeof m.text.toWellFormed === 'function' ? m.text.toWellFormed() : m.text;
    });

    console.log(`[vectorDb] Turbo Ingesting ${texts.length} chunks...`);

    try {
        // Step 1: Parallel Embedding in Persistent Pool
        const embeddings = await pool.processBatch(texts, onProgress);

        if (embeddings.length > 0) {
            const flatVec = new Float32Array(embeddings.length * EMBED_DIM);
            const ids = new Uint32Array(embeddings.length);

            // Step 2: Sync Local Metadata & Build Flat Vectors
            for (let i = 0; i < embeddings.length; i++) {
                const id = nextId + i;
                ids[i] = id;
                flatVec.set(embeddings[i], i * EMBED_DIM);
                metadataStore.set(id, { ...metas[i], vector: embeddings[i] });
            }

            // Step 3: Fast Native Storage Ingest
            // Re-using the proved-and-tested BarqMeshWeb storage layer
            await meshStore.upsert_vectors(flatVec, ids);
            nextId += embeddings.length;
            
            console.log(`[vectorDb] Indexed ${embeddings.length} chunks. Total: ${nextId}`);
        }
    } catch (err) {
        console.error('[vectorDb] Turbo Ingestion failed:', err);
        throw err;
    }

    return getCount();
}

/** Semantic Search using mesh kNN + Proven Similarity Relevance */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    ensureInit();
    if (metadataStore.size === 0) return [];

    console.log(`[vectorDb] Neural Retrieval: "${query}"`);
    const queryVec = await embedText(query);
    
    // Use search_vector for high-precision Cosine Similarity (0-1 range)
    const rawIds = await meshStore.search_vector(queryVec, topK);
    let topResults: Array<{ id: number; score: number }> = [];
    try { topResults = JSON.parse(rawIds); } catch { topResults = []; }

    // Map IDs to metadata and return proven scores
    return topResults.map((r: any) => {
        const id = r.id;
        const meta = metadataStore.get(id);
        if (!meta) return null;
        
        return { 
            id, 
            score: r.score, 
            text: meta.text, 
            metadata: meta 
        };
    }).filter(Boolean) as SearchResult[];
}

export async function clearDb(): Promise<void> {
    ensureInit();
    await meshStore.clear();
    metadataStore.clear();
    nextId = 0;
}

export function getCount(): number {
    return metadataStore.size;
}

export function getBackendInfo(): string {
    const b = meshStore?.backend_info?.() || 'Inactive';
    return `${b} | Turbo Parallel Embedder`;
}
