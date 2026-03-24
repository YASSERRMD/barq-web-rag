/**
 * vectorDb.ts — High-speed Parallel RAG using barq-mesh-browser AiMesh.
 * 
 * Optimized for Parallelism in both Ingestion and Retrieval.
 */

import { initEmbedder, EMBED_DIM } from './embedder';

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

// Local mapping for metadata (filenames, etc)
// We sync this with the native IDs via current stack count
const metadataStore = new Map<number, ChunkMeta>();

/**
 * Initialise the Parallel AiMesh engine.
 */
export async function initDb(): Promise<void> {
    if (isInitialised) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising Parallel AiMesh Engine...');
        
        try {
            // CRITICAL: Order of WASM init
            const vwebMod = await import('barq-vweb');
            await (vwebMod as any).default();
            
            const wasmMod = await import('barq-wasm');
            await (wasmMod as any).default();

            // @ts-ignore
            const mod = await import('barq-mesh-web');
            await (mod as any).default();
            
            // Spawn the NATIVE worker pool for parallel processing
            const numWorkers = Math.min(navigator.hardwareConcurrency || 4, 8);
            // @ts-ignore
            meshStore = mod.AiMesh.create(numWorkers, 'rag-session', EMBED_DIM);
            
            console.log('[vectorDb] AiMesh Parallel Engine Ready. Backend:', meshStore.backend());
            
            // Warm up JS embedder for query path (if needed)
            initEmbedder().catch(() => {});
            isInitialised = true;
        } catch (e) {
            console.error('[vectorDb] Engine initialisation failed:', e);
            throw e;
        }
    })();

    return initPromise;
}

function ensureInit() {
    if (!meshStore) throw new Error('vectorDb: call initDb() first');
}

/**
 * Parallel document ingestion using the AiMesh native WorkerPool.
 */
export async function insertChunks(
    metas: ChunkMeta[],
    onProgress: (p: number) => void = () => {}
): Promise<number> {
    ensureInit();
    if (metas.length === 0) return getCount();

    const texts = metas.map((m) => {
        // Sanitise for Rust JSON parser (lone surrogates)
        const t = m.text as any;
        return typeof t.toWellFormed === 'function' ? t.toWellFormed() : t;
    });

    console.log(`[vectorDb] Dispatching ${texts.length} chunks to Parallel Ingestion Engine...`);

    try {
        onProgress(0.1);
        
        // Track ID sequence before and after
        const startIdx = meshStore.vector_count();
        
        // This is the High-Speed Native Parallel Ingestion call.
        // It uses the underlying WorkerPool to embed and index chunks simultaneously.
        await meshStore.ingest_texts(JSON.stringify(texts));
        
        onProgress(0.8);

        // Sync metadata with the sequential IDs assigned by the engine
        for (let i = 0; i < metas.length; i++) {
            const id = startIdx + i;
            metadataStore.set(id, metas[i]);
        }
        
        onProgress(1.0);
        console.log(`[vectorDb] Parallel indexing complete. Total: ${meshStore.vector_count()}`);
    } catch (err) {
        console.error('[vectorDb] Parallel ingestion failed:', err);
        throw err;
    }

    return getCount();
}

/**
 * Parallelized Hybrid Search using the AiMesh native retrieval system.
 * Combining keywords (BM25) and semantics (HNSW) in parallel.
 */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    ensureInit();
    if (metadataStore.size === 0) return [];

    console.log(`[vectorDb] Parallel Retrieval: "${query}"`);
    
    // AI Mesh retrieve_hybrid handles both query embedding and keyword search in parallel
    const resultsJson = await meshStore.retrieve_hybrid(query, topK);
    let topResults: Array<{ id: number; score: number }> = [];
    try { topResults = JSON.parse(resultsJson); } catch { topResults = []; }

    // RRF scores are smaller, so we rely on the caller's threshold adjustment
    return topResults.map((r: any) => {
        const id = r.id;
        const meta = metadataStore.get(id);
        
        return {
            id,
            score: r.score,
            text: meta?.text || `[Chunk ${id}]`,
            metadata: meta
        };
    });
}

export async function clearDb(): Promise<void> {
    ensureInit();
    await meshStore.clear();
    metadataStore.clear();
}

export function getCount(): number {
    return meshStore?.vector_count() ?? 0;
}

export function getBackendInfo(): string {
    const b = meshStore?.backend?.() || 'Inactive';
    return `${b} (Parallel Hybrid Mode)`;
}
