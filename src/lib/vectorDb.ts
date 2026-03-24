/**
 * vectorDb.ts — Fully Parallel RAG Pipeline using barq-mesh-browser (AiMesh).
 * 
 * This version uses the native Rust thread pool for both ingestion and hybrid retrieval.
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
const metadataStore = new Map<number, ChunkMeta>();

/**
 * Initialise the Parallel AiMesh engine.
 */
export async function initDb(): Promise<void> {
    if (isInitialised) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising Native Parallel Mesh...');
        
        try {
            // WASM Initialisation Order
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
            
            console.log('[vectorDb] Mesh Ready. Backend:', meshStore.backend());
            
            // Minimal warm-up for secondary tasks
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
 * Native Parallel Ingestion:
 * Utilises the barq-mesh-browser WorkerPool for multi-threaded document indexing.
 */
export async function insertChunks(
    metas: ChunkMeta[],
    onProgress: (p: number) => void = () => {}
): Promise<number> {
    ensureInit();
    if (metas.length === 0) return getCount();

    const texts = metas.map((m) => {
        const t = m.text as any;
        return typeof t.toWellFormed === 'function' ? t.toWellFormed() : t;
    });

    console.log(`[vectorDb] Parallel Indexing: ${texts.length} chunks via Rust WorkerPool...`);

    try {
        onProgress(0.1);
        
        // Sequence Alignment: Synchronise local meta with native sequential IDs
        const startIdx = meshStore.vector_count();
        
        // Parallel Rust Ingestion (High Speed)
        await meshStore.ingest_texts(JSON.stringify(texts));
        
        onProgress(0.9);

        for (let i = 0; i < metas.length; i++) {
            const id = startIdx + i;
            metadataStore.set(id, metas[i]);
        }
        
        onProgress(1.0);
        console.log(`[vectorDb] Parallel indexing complete. Store total: ${meshStore.vector_count()}`);
    } catch (err) {
        console.error('[vectorDb] Parallel ingestion failed:', err);
        throw err;
    }

    return getCount();
}

/**
 * Parallel Hybrid Retrieval:
 * Combines BM25 and Vector search in parallel within the WASM engine.
 */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    ensureInit();
    if (metadataStore.size === 0) return [];

    console.log(`[vectorDb] Parallel Hybrid Retrieval: "${query}"`);
    
    // Native Parallel Search (Keywords + MiniLM Vectors + RRF Reranking)
    const resultsJson = await meshStore.retrieve_hybrid(query, topK);
    
    let topResults: Array<{ id: number; score: number }> = [];
    try { topResults = JSON.parse(resultsJson); } catch { topResults = []; }

    return topResults.map((r: any) => {
        const id = r.id;
        const meta = metadataStore.get(id);
        
        // Normalise RRF score for UI presentation (max possible RRF score is approx 0.033 with 2 rankers)
        // We scale it so 0.016 (Rank 1 in one list) looks like a strong match (~70-80%).
        const displayScore = Math.min((r.score * 50), 0.99);

        return {
            id,
            score: displayScore, // Return the display-friendly score
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
    return `${meshStore?.backend() ?? 'Inactive'} | Parallel Mesh`;
}
