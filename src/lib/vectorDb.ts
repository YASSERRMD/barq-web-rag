/**
 * vectorDb.ts — Definitive Unified Parallel RAG Engine.
 * 
 * Synchronized Rust-side embedding for both Ingestion and Retrieval.
 * Ensures 100% architectural consistency and maximum performance.
 */

import { EMBED_DIM } from './embedder';

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

// Local mapping for metadata synchronization
const metadataStore = new Map<number, ChunkMeta>();

/**
 * Initialise the parallel barq-mesh-web engine.
 */
export async function initDb(): Promise<void> {
    if (isInitialised && meshStore) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising Synchronized Parallel Mesh...');
        try {
            const vwebMod = await import('barq-vweb');
            await (vwebMod as any).default();
            const wasmMod = await import('barq-wasm');
            await (wasmMod as any).default();
            // @ts-ignore
            const mod = await import('barq-mesh-web');
            await (mod as any).default();
            
            // Limit background workers to 4 to balance Parallel Speed and LLM TPS (60 t/s)
            const numWorkers = 4;
            // @ts-ignore
            meshStore = mod.AiMesh.create(numWorkers, 'rag-session', EMBED_DIM);
            
            isInitialised = true;
            console.log('[vectorDb] Mesh ready with internal Rust-side embedder.');
        } catch (e) {
            console.error('[vectorDb] Init failed:', e);
            throw e;
        } finally {
            initPromise = null;
        }
    })();
    return initPromise;
}

function ensureInit() {
    if (!meshStore) throw new Error('vectorDb: call initDb() first');
}

/**
 * Native Parallel Ingestion.
 * Uses the internal Rust embedder (MiniLM-L6-v2) for maximum alignment.
 */
export async function insertChunks(
    metas: ChunkMeta[],
    onProgress: (p: number) => void = () => {}
): Promise<number> {
    await initDb();
    ensureInit();
    if (metas.length === 0) return getCount();

    const texts = metas.map(m => (m.text as any).toWellFormed?.() ?? m.text);
    console.log(`[vectorDb] Indexing ${texts.length} chunks via Rust-native Parallel Pool...`);

    try {
        onProgress(0.1);
        const startIdx = meshStore.vector_count();
        
        // Native High-Speed Ingestion (Embedded in Rust)
        await meshStore.ingest_texts(JSON.stringify(texts));
        
        onProgress(0.9);

        // SYNC: Align local metadata with engine sequence
        for (let i = 0; i < metas.length; i++) {
            const id = startIdx + i;
            metadataStore.set(id, metas[i]);
        }
        
        onProgress(1.0);
        console.log(`[vectorDb] Parallel indexing complete. Total: ${meshStore.vector_count()}`);
    } catch (err) {
        console.error('[vectorDb] Ingestion failed:', err);
    }
    return getCount();
}

/**
 * Neural Retrieval using Synchronized Internal Embeddings.
 * Passes raw text to Rust to ensure query embedding perfectly matches document embeddings.
 */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    if (!meshStore || metadataStore.size === 0) return [];

    console.log(`[vectorDb] Parallel Hybrid search for: "${query}"`);
    
    // CRITICAL: We use retrieve_hybrid(string) so the RUST layer embeds the query.
    // This fixes the "wrong retrieval" by ensuring query and doc embeddings are identical.
    const resultsJson = await meshStore.retrieve_hybrid(query, topK);
    
    let results: Array<{ id: number; score: number }> = [];
    try { results = JSON.parse(resultsJson); } catch { results = []; }

    return results.map((r: any) => {
        const meta = metadataStore.get(r.id);
        if (!meta) return null;

        // remap RRF score (0.016 range) to display score (normalized)
        const displayScore = Math.min(r.score * 60, 0.99);

        return { 
            id: r.id, 
            score: displayScore, 
            text: meta.text, 
            metadata: meta 
        };
    }).filter(Boolean) as SearchResult[];
}

export async function clearDb(): Promise<void> {
    if (meshStore) await meshStore.clear();
    metadataStore.clear();
}

export function getCount(): number {
    return meshStore?.vector_count() ?? 0;
}

export function getBackendInfo(): string {
    return `${meshStore?.backend() ?? 'Inactive'} | Unified Parallel Engine`;
}
