/**
 * vectorDb.ts — High-performance RAG pipeline using barq-mesh-browser.
 *
 * This version uses a JS Worker Pool for parallel transformers.js embedding
 * combined with the barq-mesh-browser's AiMesh for storage and search.
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
        console.log('[vectorDb] Initialising barq-mesh-browser...');
        
        try {
            // CRITICAL: Initialize base WASM modules FIRST
            const vwebMod = await import('barq-vweb');
            await (vwebMod as any).default();
            
            const wasmMod = await import('barq-wasm');
            await (wasmMod as any).default();

            // @ts-ignore
            const mod = await import('barq-mesh-web');
            await (mod as any).default();
            
            // Use the AiMesh for storage (provides BM25 + HNSW)
            const numWorkers = Math.min(navigator.hardwareConcurrency || 4, 8);
            // @ts-ignore
            meshStore = mod.AiMesh.create(numWorkers, 'rag-session', EMBED_DIM);
            
            console.log('[vectorDb] Mesh Store ready. Backend:', meshStore.backend());
            
            // Warm up main embedder
            initEmbedder().catch(() => {});
            isInitialised = true;
        } catch (e) {
            console.error('[vectorDb] Mesh initialisation failed:', e);
            throw e;
        }
    })();

    return initPromise;
}

function ensureInit() {
    if (!meshStore) throw new Error('vectorDb: call initDb() first');
}

/**
 * Parallel embedding using a dynamic worker pool in JS.
 * This ensures we use the correct transformers.js models and explicit ID control.
 */
export async function insertChunksParallel(
    metas: ChunkMeta[],
    onProgress: (p: number) => void
): Promise<number> {
    ensureInit();
    if (metas.length === 0) return getCount();

    const texts = metas.map((m) => {
        // @ts-ignore
        return typeof m.text.toWellFormed === 'function' ? m.text.toWellFormed() : m.text;
    });

    const numWorkers = Math.min(navigator.hardwareConcurrency || 4, 8);
    const chunksPerWorker = Math.ceil(texts.length / numWorkers);

    console.log(`[vectorDb] Starting parallel JS ingestion for ${texts.length} chunks.`);

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

            const worker = new Worker(
                new URL('../workers/embed.worker.ts', import.meta.url),
                { type: 'module' }
            );

            worker.onmessage = (e) => {
                const data = e.data;
                if (data.type === 'progress') {
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

            // High-speed batch upsert to WASM layer
            // We use the BarqMeshWeb inner store upsert if available or the AiMesh equivalent
            // AiMesh doesn't have upsert_vectors, so we should have kept the BarqMeshWeb instance too?
            // Actually, we can just use search_vector and pass our embeddings.
            
            // Wait, I need to pass the vectors to the mesh!
            // I'll search for 'upsert_vectors' in AiMesh. It doesn't have it.
            // But BarqMeshWeb does! 
            // I'll create a BarqMeshWeb instance INSTEAD of AiMesh since we're doing parallel JS.
            
            // Re-evaluating: The user wants parallel stuff using barq-mesh-browser.
            // If AiMesh.ingest_texts failed, maybe it's because I didn't provide the model path?
            
            // I'll switch back to BarqMeshWeb for the vector storage part 
            // because it handles explicit ID insertion which is crucial for RAG consistency.
            
            // @ts-ignore
            const mod = await import('barq-mesh-web');
            const store = new mod.BarqMeshWeb('rag-session', EMBED_DIM);
            await store.upsert_vectors(flatVec, ids);
            meshStore = store; // Store it for search
            
            nextId += allEmbeddings.length;
        }
    } catch (err) {
        console.error('[vectorDb] Ingestion failed:', err);
        throw err;
    }

    return getCount();
}

/** Legacy/Serial fallback */
export async function insertChunks(metas: ChunkMeta[]): Promise<number> {
    return insertChunksParallel(metas, () => {});
}

/** Semantic Search using mesh search_vector + local metadata */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    ensureInit();
    if (metadataStore.size === 0) return [];

    const queryVec = await embedText(query);
    
    // search_vector returns JSON string of [{id, score}]
    const rawIds = await meshStore.search_vector(queryVec, topK);
    let topResults: Array<{ id: number; score: number }> = [];
    try { topResults = JSON.parse(rawIds); } catch { topResults = []; }

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
    return meshStore?.backend_info?.() ?? meshStore?.backend?.() ?? 'Inactive';
}
