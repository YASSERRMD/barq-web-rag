/**
 * vectorDb.ts — High-performance RAG pipeline using barq-mesh-web and parallel embedding.
 *
 * This version uses the modern URL approach for workers and fixed relative imports in WASM.
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

let meshStore: any = null;
let isInitialised = false;
let initPromise: Promise<void> | null = null;

const metadataStore = new Map<number, ChunkMeta & { vector: Float32Array }>();
let nextId = 0;

/**
 * Initialise the WASM compute mesh.
 */
export async function initDb(): Promise<void> {
    if (isInitialised) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising barq-mesh-web (Parallel Edition)...');
        
        // Timeout for WASM init to prevent silent hangs
        const initTimeout = setTimeout(() => {
            if (!isInitialised) console.warn('[vectorDb] WASM initialisation is taking a long time (10s+)...');
        }, 10000);

        try {
            // CRITICAL: Initialize base WASM modules FIRST to bind '__wbindgen_malloc' and memory.
            const vwebMod = await import('barq-vweb');
            await (vwebMod as any).default();
            
            const wasmMod = await import('barq-wasm');
            await (wasmMod as any).default();

            // Then point directly to the mesh asset
            const mod = await import('barq-mesh-web');
            await (mod as any).default();
            
            // BarqMeshWeb combines BM25 + HNSW
            meshStore = new mod.BarqMeshWeb('rag-session', EMBED_DIM);
            
            console.log('[vectorDb] Mesh Store ready — backend:', meshStore.backend_info());
            
            // Warm up main embedder
            initEmbedder().catch(() => {});
            isInitialised = true;
        } catch (e) {
            console.error('[vectorDb] FATAL: Mesh initialisation failed:', e);
            throw e;
        } finally {
            clearTimeout(initTimeout);
        }
    })();

    return initPromise;
}

function ensureInit() {
    if (!meshStore) throw new Error('vectorDb: call initDb() first');
}

/**
 * Parallel embedding using a dynamic worker pool.
 */
export async function insertChunksParallel(
    metas: ChunkMeta[],
    onProgress: (p: number) => void
): Promise<number> {
    ensureInit();
    if (metas.length === 0) return getCount();

    const texts = metas.map((m) => m.text);
    // Scale workers but leave room for the main UI and model threads
    const numWorkers = Math.min(navigator.hardwareConcurrency || 4, 8);
    const chunksPerWorker = Math.ceil(texts.length / numWorkers);

    console.log(`[vectorDb] Starting parallel ingestion for ${texts.length} chunks vs ${numWorkers} workers.`);

    let completed = 0;
    const workerPromises = Array.from({ length: numWorkers }).map((_, i) => {
        return new Promise<Float32Array[]>((resolve, reject) => {
            const start = i * chunksPerWorker;
            const end = Math.min(start + chunksPerWorker, texts.length);
            const batch = texts.slice(start, end);

            if (batch.length === 0) {
                resolve([]);
                return;
            }

            // Using the modern 'import.meta.url' pattern for better module worker bundling in Vite
            const worker = new Worker(
                new URL('../workers/embed.worker.ts', import.meta.url),
                { type: 'module' }
            );

            worker.onmessage = (e) => {
                const data = e.data;
                if (data.type === 'progress') {
                    // Each 'progress' msg from worker is one chunk done
                    completed += 1;
                    onProgress(Math.min(completed / texts.length, 1));
                } else if (data.type === 'done') {
                    resolve(data.results);
                    worker.terminate();
                } else if (data.type === 'error') {
                    reject(new Error(data.error));
                    worker.terminate();
                }
            };

            worker.onerror = (err) => {
                console.error(`[vectorDb] Worker ${i} crash:`, err);
                reject(err);
                worker.terminate();
            };

            worker.postMessage({ id: `worker-${i}`, texts: batch });
        });
    });

    try {
        const results = await Promise.all(workerPromises);
        const allEmbeddings = results.flat();

        if (allEmbeddings.length > 0) {
            const flatVec = new Float32Array(allEmbeddings.length * EMBED_DIM);
            const ids = new Uint32Array(allEmbeddings.length);

            for (let i = 0; i < allEmbeddings.length; i++) {
                const id = nextId + i;
                ids[i] = id;
                flatVec.set(allEmbeddings[i], i * EMBED_DIM);
                metadataStore.set(id, { ...metas[i], vector: allEmbeddings[i] });
            }

            // High-speed batch upsert to HNSW layer
            const newCount = await meshStore.upsert_vectors(flatVec, ids);
            nextId += allEmbeddings.length;
            console.log(`[vectorDb] Successfully indexed ${allEmbeddings.length} chunks. Store total: ${newCount}`);
        }
    } catch (err) {
        console.error('[vectorDb] Ingestion was interrupted by a worker error.');
        throw err;
    }

    return getCount();
}

/** Legacy/Serial fallback */
export async function insertChunks(metas: ChunkMeta[]): Promise<number> {
    return insertChunksParallel(metas, () => {});
}

/** Semantic Search using mesh kNN + BM25 intersection logic (simulated in JS for now) */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    ensureInit();
    if (metadataStore.size === 0) return [];

    console.log(`[vectorDb] RAG Search: "${query}" (topK=${topK})`);
    const queryVec = await embedText(query);
    
    // search_vector returns JSON string of [{id, score}]
    const rawIds = await meshStore.search_vector(queryVec, topK);
    let topResults: Array<{ id: number; score: number }> = [];
    try { topResults = JSON.parse(rawIds); } catch { topResults = []; }

    const mod = await import('barq-mesh-web');
    
    const mapped = (topResults
        .map((r: any) => {
            const id = r.id;
            const meta = metadataStore.get(id);
            if (!meta) return null;
            
            // Re-verify with barq-mesh-web's native SIMD for peak precision
            const score = mod.cosine_similarity_simd(queryVec, meta.vector);
            return { id, score, text: meta.text, metadata: meta };
        })
        .filter((res) => res !== null) as SearchResult[]);

    mapped.sort((a, b) => b.score - a.score);
    return mapped;
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
    return meshStore?.backend_info() ?? 'Inactive';
}
