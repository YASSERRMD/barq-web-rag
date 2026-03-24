/**
 * vectorDb.ts — Definitive High-Speed Parallel RAG.
 * 
 * Implements the full barq-mesh-browser Parallel AI Mesh architecture:
 * - Rust-native Parallel Ingestion (AiMesh.ingest_texts)
 * - Parallel Hybrid Retrieval candidates (AiMesh.retrieve_hybrid)
 * - SIMD Cosine Re-ranking (barq-wasm) for maximum accuracy.
 */

import { initBarqWasm, cosineSimilarity } from './barqWasm';
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
const metadataStore = new Map<number, ChunkMeta & { vector?: Float32Array }>();

/**
 * Initialise the Parallel AiMesh engine.
 */
export async function initDb(): Promise<void> {
    if (isInitialised) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising Native Parallel AiMesh...');
        
        try {
            await initBarqWasm(); // Init SIMD compute layer
            
            // Order of WASM initialization
            const vwebMod = await import('barq-vweb');
            await (vwebMod as any).default();
            
            const wasmMod = await import('barq-wasm');
            await (wasmMod as any).default();

            // @ts-ignore
            const mod = await import('barq-mesh-web');
            await (mod as any).default();
            
            // Limit to 2–4 workers to keep CPU headroom for the LLM (TPS boost)
            const numWorkers = 4;
            // @ts-ignore
            meshStore = mod.AiMesh.create(numWorkers, 'rag-session', EMBED_DIM);
            
            console.log('[vectorDb] Mesh Ready. Backend:', meshStore.backend(), '| Workers:', numWorkers);
            
            // Load JS embedder for re-ranking and query path
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
 * Parallel Rust-Side Ingestion.
 * High-speed multi-threaded embedding and indexing using barq-mesh-browser.
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

    console.log(`[vectorDb] Native Parallel Ingest: ${texts.length} chunks...`);

    try {
        onProgress(0.1);
        const startIdx = meshStore.vector_count();
        
        // Native High-Speed parallel ingestion
        await meshStore.ingest_texts(JSON.stringify(texts));
        
        onProgress(0.9);

        // Map local metadata to the engine's sequential IDs
        for (let i = 0; i < metas.length; i++) {
            const id = startIdx + i;
            metadataStore.set(id, metas[i]);
        }
        
        onProgress(1.0);
        console.log(`[vectorDb] Parallel indexing complete. Total: ${meshStore.vector_count()}`);
    } catch (err) {
        console.error('[vectorDb] Native ingestion failed:', err);
        throw err;
    }

    return getCount();
}

/**
 * Neural Retrieval with Hybrid Candidates + SIMD Re-ranking.
 * Parallel search in Rust, Precise sorting in JS.
 */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    ensureInit();
    if (metadataStore.size === 0) return [];

    console.log(`[vectorDb] Neural Retrieval: "${query}"`);
    const queryVec = await embedText(query);

    // Fetch hybrid candidates (Parallel BM25 + Vector Search) from Rust
    // Get 30 candidates for high-quality re-ranking
    const resultsJson = await meshStore.retrieve_hybrid(query, 30);
    let candidates: Array<{ id: number; score: number }> = [];
    try { candidates = JSON.parse(resultsJson); } catch { candidates = []; }

    // Map candidates to metadata and re-index them if we have text but no vector
    // Or just rely on the hybrid scores if vector accuracy in Rust is what they want.
    // However, the user said "retrieval is bad" (low scores), so we re-rank here.
    const reRanked = [];
    for (const r of candidates) {
        const meta = metadataStore.get(r.id);
        if (!meta) continue;

        // Embedding on the fly for the top-k candidates to ensure 100% accuracy 
        // with the JS model if the Rust embeddings were shifted.
        const chunkVec = await embedText(meta.text);
        const score = cosineSimilarity(queryVec, chunkVec);
        
        reRanked.push({
            id: r.id,
            score,
            text: meta.text,
            metadata: meta
        });
    }

    // Sort by true cosine score descending and take topK
    return reRanked
        .sort((a, b) => b.score - a.score)
        .slice(0, topK);
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
    return `${meshStore?.backend() ?? 'Inactive'} | Native Parallel Mesh`;
}
