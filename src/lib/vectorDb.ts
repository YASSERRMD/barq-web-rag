/**
 * vectorDb.ts — Definitive High-Speed Parallel RAG using AiMesh.
 * 
 * This version leverages barq-mesh-browser for speed, but ensures
 * total RAG accuracy and inference performance (60 TPS).
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

// Local mapping for metadata (filenames, text)
const metadataStore = new Map<number, ChunkMeta>();

/**
 * Initialise the Parallel AiMesh engine.
 */
export async function initDb(): Promise<void> {
    if (isInitialised) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising barq-mesh-browser (AiMesh)...');
        
        try {
            const vwebMod = await import('barq-vweb');
            await (vwebMod as any).default();
            const wasmMod = await import('barq-wasm');
            await (wasmMod as any).default();
            // @ts-ignore
            const mod = await import('barq-mesh-web');
            await (mod as any).default();
            
            // Set workers to 2 — Optimal balance for Parallel Speed vs LLM TPS (60 t/s)
            const numWorkers = 2;
            // @ts-ignore
            meshStore = mod.AiMesh.create(numWorkers, 'rag-session', EMBED_DIM);
            
            console.log('[vectorDb] AiMesh Ready. Backend:', meshStore.backend());
            
            // Warm up primary embedder 
            initEmbedder().catch(() => {});
            isInitialised = true;
        } catch (e) {
            console.error('[vectorDb] Mesh initialization failed:', e);
            throw e;
        }
    })();

    return initPromise;
}

function ensureInit() {
    if (!meshStore) throw new Error('vectorDb: call initDb() first');
}

/**
 * Native Parallel Ingestion using barq-mesh-web.
 * Extremely fast Rust-side processing without breaking the UI IDs.
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

    console.log(`[vectorDb] Parallel Indexing ${texts.length} chunks via Rust Pool...`);

    try {
        onProgress(0.1);
        
        // Sequence alignment: Get accurate starting ID
        const startIdx = meshStore.vector_count();
        
        // Call high-speed ingestion API
        await meshStore.ingest_texts(JSON.stringify(texts));
        
        onProgress(0.9);

        // SYNC: Map the sequential IDs used by barq-vweb to our local metadata
        for (let i = 0; i < metas.length; i++) {
            const id = startIdx + i;
            metadataStore.set(id, metas[i]);
        }
        
        onProgress(1.0);
        console.log(`[vectorDb] Indexed. Total vectors: ${meshStore.vector_count()}`);
    } catch (err) {
        console.error('[vectorDb] Ingestion failed:', err);
        throw err;
    }

    return getCount();
}

/**
 * High-Precision Vector Retrieval.
 * Returns 0-1 cosine similarity scores using the native engine.
 */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    ensureInit();
    if (metadataStore.size === 0) return [];

    console.log(`[vectorDb] RAG search: "${query}"`);
    const queryVec = await embedText(query);
    const queryJson = JSON.stringify(Array.from(queryVec));

    // Use retrieve() for pure vector search (returns clean cosine scores)
    const resultsJson = await meshStore.retrieve(queryJson, topK);
    let topResults: Array<{ id: number; score: number }> = [];
    try { topResults = JSON.parse(resultsJson); } catch { topResults = []; }

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
}

export function getCount(): number {
    return meshStore?.vector_count() ?? 0;
}

export function getBackendInfo(): string {
    return `${meshStore?.backend() ?? 'Inactive'} | Native Mesh`;
}
