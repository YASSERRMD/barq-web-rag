/**
 * vectorDb.ts — Full RAG pipeline using barq-mesh-web (replaces manual vweb+wasm)
 * and parallel Web Workers for chunking/embedding.
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

let meshStore: any = null; // BarqMeshWeb instance
let isInitialised = false;
let initPromise: Promise<void> | null = null;
let WorkerModule: any = null;

const metadataStore = new Map<number, ChunkMeta & { vector: Float32Array }>();
let nextId = 0;

export async function initDb(): Promise<void> {
    if (isInitialised) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        const mod = await import('barq-mesh-web');
        await (mod as any).default();
        meshStore = new mod.BarqMeshWeb('rag-session', EMBED_DIM);
        
        console.log('[barq-mesh-web] initialised —', meshStore.backend_info());

        // Pre-load worker module
        WorkerModule = await import('../workers/embed.worker?worker');

        // Lazy initialize the main thread embedder for query searching
        initEmbedder().catch((e) => console.warn('[embedder] warm-up failed:', e));

        isInitialised = true;
    })();

    return initPromise;
}

function ensureInit() {
    if (!meshStore) throw new Error('vectorDb: call initDb() first');
}

/**
 * Parallel embedding using a pool of Web Workers.
 * Workers load transformers.js and embed chunks without blocking main thread.
 */
export async function insertChunksParallel(
    metas: ChunkMeta[],
    onProgress: (p: number) => void
): Promise<number> {
    ensureInit();
    if (metas.length === 0) return getCount();

    const texts = metas.map((m) => m.text);
    
    // Create worker pool
    const numWorkers = Math.min(navigator.hardwareConcurrency || 4, 8);
    const workers: Worker[] = [];
    const chunksPerWorker = Math.ceil(texts.length / numWorkers);

    console.log(`[vectorDb] Spinning up ${numWorkers} Web Workers for embedding...`);

    let totalCompleted = 0;

    const workerPromises = Array.from({ length: numWorkers }).map((_, i) => {
        return new Promise<Float32Array[]>((resolve, reject) => {
            // Handle both WorkerModule.default (Vite dynamic import) and WorkerModule
            const WorkerCtor = WorkerModule.default || WorkerModule;
            const worker = new WorkerCtor();
            workers.push(worker);

            const startIdx = i * chunksPerWorker;
            const endIdx = Math.min(startIdx + chunksPerWorker, texts.length);
            const workerTexts = texts.slice(startIdx, endIdx);

            if (workerTexts.length === 0) {
                worker.terminate();
                resolve([]);
                return;
            }

            worker.onmessage = (e: MessageEvent) => {
                const data = e.data;
                if (data.type === 'progress') {
                    // Approximate progress tracking
                    totalCompleted += 1;
                    onProgress(Math.min(totalCompleted / texts.length, 1));
                } else if (data.type === 'done') {
                    resolve(data.results);
                    worker.terminate();
                } else if (data.type === 'error') {
                    reject(new Error(data.error));
                    worker.terminate();
                }
            };

            worker.postMessage({ id: `worker-${i}`, texts: workerTexts });
        });
    });

    let results: Float32Array[][] = [];
    try {
        results = await Promise.all(workerPromises);
    } catch (e: any) {
        console.error('[vectorDb] Worker pool failed:', e);
        workers.forEach(w => w.terminate());
        throw e;
    }
    
    const allEmbeddings = results.flat();
    console.log(`[vectorDb] All workers finished. Total embeddings: ${allEmbeddings.length} / ${metas.length}`);

    if (allEmbeddings.length === 0) return getCount();

    const flatVec = new Float32Array(allEmbeddings.length * EMBED_DIM);
    const ids = new Uint32Array(allEmbeddings.length);

    for (let i = 0; i < allEmbeddings.length; i++) {
        const id = nextId + i;
        ids[i] = id;
        flatVec.set(allEmbeddings[i], i * EMBED_DIM);
        metadataStore.set(id, { ...metas[i], vector: allEmbeddings[i] });
    }

    try {
        // Upsert via barq-mesh-web (handles normalize + vweb indexing in WASM!)
        const updatedCount = await meshStore.upsert_vectors(flatVec, ids);
        console.log(`[vectorDb] Successfully upserted to WASM store. New count: ${updatedCount}`);
        nextId += allEmbeddings.length;
    } catch (e) {
        console.error('[vectorDb] upsert_vectors failed:', e);
    }

    return getCount();
}

/** Backup serial insert fallback if needed */
export async function insertChunks(metas: ChunkMeta[]): Promise<number> {
    return insertChunksParallel(metas, () => {});
}

export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    ensureInit();
    if (metadataStore.size === 0) {
        console.log('[vectorDb] Search skipped: metadataStore is empty.');
        return [];
    }

    // Embed the query in the main thread (fast enough for one sentence)
    const queryVec = await embedText(query);

    // barq-mesh-web handles normalization and the vector search
    const rawStr = await meshStore.search_vector(queryVec, topK);

    let results: Array<{ id: number; score: number }> = [];
    try { 
        results = JSON.parse(rawStr); 
    } catch { 
        console.warn('[vectorDb] Failed to parse search results:', rawStr);
        results = []; 
    }

    const mod = await import('barq-mesh-web');

    // Mapped results with re-rank tracking
    const mapped = results
        .map((r: any) => {
            const id = r.id;
            const meta = metadataStore.get(id);
            if (!meta) return null;
            
            // Re-verify score using barq-mesh-web's native SIMD exported function
            const score = mod.cosine_similarity_simd(queryVec, meta.vector);
            return { id, score, text: meta.text, metadata: meta };
        })
        .filter(Boolean) as SearchResult[];

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
    return meshStore?.backend_info() ?? 'not initialised';
}
