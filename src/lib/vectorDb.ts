/**
 * vectorDb.ts — High-speed Parallel RAG powered by barq-mesh-browser (AiMesh).
 * 
 * This version leverages Rust-native parallel ingestion and retrieval for maximum speed.
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

// Local JS store for metadata (filenames, original text)
// We sync this with the native IDs assigned by the engine.
const metadataStore = new Map<number, ChunkMeta>();

/**
 * Initialise the WASM compute mesh.
 */
export async function initDb(): Promise<void> {
    if (isInitialised) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising Parallel AiMesh Engine...');
        
        try {
            // CRITICAL: Initialize base WASM modules FIRST
            const vwebMod = await import('barq-vweb');
            await (vwebMod as any).default();
            
            const wasmMod = await import('barq-wasm');
            await (wasmMod as any).default();

            // @ts-ignore
            const mod = await import('barq-mesh-web');
            await (mod as any).default();
            
            // Spawn the NATIVE worker pool (Rust threads) for parallel processing
            const numWorkers = Math.min(navigator.hardwareConcurrency || 4, 8);
            // @ts-ignore
            meshStore = mod.AiMesh.create(numWorkers, 'rag-session', EMBED_DIM);
            
            console.log('[vectorDb] AiMesh Ready. Backend:', meshStore.backend(), '| Workers:', numWorkers);
            
            // Warm up primary embedder (for queries)
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
 * Native Parallel Ingestion:
 * Dispatches chunks to the Rust WorkerPool for SIMD-accelerated embedding.
 */
export async function insertChunks(
    metas: ChunkMeta[],
    onProgress: (p: number) => void = () => {}
): Promise<number> {
    ensureInit();
    if (metas.length === 0) return getCount();

    const texts = metas.map((m) => {
        // Sanitise for Rust JSON parser
        const t = m.text as any;
        return typeof t.toWellFormed === 'function' ? t.toWellFormed() : t;
    });

    console.log(`[vectorDb] Native Parallel Ingest: ${texts.length} chunks...`);

    try {
        onProgress(0.1);

        // Sequence Alignment: Capture starting ID from the engine
        const startIdx = meshStore.vector_count();
        
        // Native High-Speed Ingestion (Parallel Rust Workers)
        await meshStore.ingest_texts(JSON.stringify(texts));
        
        onProgress(0.9);

        // Sync local metadata store with the sequential IDs assigned by the engine
        for (let i = 0; i < metas.length; i++) {
            const id = startIdx + i;
            metadataStore.set(id, metas[i]);
        }
        
        onProgress(1.0);
        console.log(`[vectorDb] Parallel Indexing Complete. Store total: ${meshStore.vector_count()}`);
    } catch (err) {
        console.error('[vectorDb] Native ingestion failed:', err);
        throw err;
    }

    return getCount();
}

/**
 * Parallel Retrieval using AiMesh:
 * Uses pure vector search for high precision (cosine similarity).
 */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    ensureInit();
    if (metadataStore.size === 0) return [];

    console.log(`[vectorDb] Parallel Search: "${query}"`);
    
    // Step 1: Embed query in JS (proven reliable model)
    const queryVec = await embedText(query);
    const queryJson = JSON.stringify(Array.from(queryVec));

    // Step 2: Native Parallel Search (Vector Only for High Precision scores)
    // retrieve() returns JSON string of [{ id, score }]
    const resultsJson = await meshStore.retrieve(queryJson, topK);
    
    let topResults: Array<{ id: number; score: number }> = [];
    try { topResults = JSON.parse(resultsJson); } catch { topResults = []; }

    // Step 3: Map results to stable metadata
    return topResults.map((r: any) => {
        const id = r.id;
        const meta = metadataStore.get(id);
        
        return {
            id,
            score: r.score,
            text: meta?.text || `[Chunk ${id}]`,
            metadata: meta
        };
    }).filter((r) => r.metadata !== undefined);
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
    return meshStore?.backend() ?? 'Inactive';
}
