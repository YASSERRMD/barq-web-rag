/**
 * vectorDb.ts — Full RAG pipeline integrating barq-wasm SIMD + barq-vweb vector storage.
 *
 * Pipeline:
 *   text → transformers.js MiniLM embed → barq-wasm normalize → barq-vweb insert_vectors
 *   query → barq-wasm normalize → barq-vweb search_vector → barq-wasm cosine re-rank
 */

import { initBarqWasm, cosineSimilarity } from './barqWasm';
import { initEmbedder, embedText, embedBatch, EMBED_DIM } from './embedder';

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

let wasmInstance: any = null;
let isInitialised = false;
let initPromise: Promise<void> | null = null;

// Local JS store: maps sequential id → ChunkMeta (barq-vweb only returns ids on search)
const metadataStore = new Map<number, ChunkMeta & { vector: Float32Array }>();
let nextId = 0;

/**
 * Initialise barq-vweb, barq-wasm, and the embedder. Safe to call multiple times.
 */
export async function initDb(): Promise<void> {
    if (isInitialised) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        // 1. barq-wasm SIMD compute layer
        await initBarqWasm();

        // 2. barq-vweb vector database
        const mod = await import('barq-vweb');
        await (mod as any).default();
        wasmInstance = new (mod as any).BarqVWeb('rag-session', null);
        console.log('[barq-vweb] initialised —', wasmInstance.backend_info());

        // 3. MiniLM embedder (lazy — will load on first use to not block LLM load)
        // Don't await here to avoid blocking LLM; it will init on first ingestFiles call
        initEmbedder().catch((e) => console.warn('[embedder] warm-up failed:', e));

        isInitialised = true;
    })();

    return initPromise;
}

function ensureInit() {
    if (!wasmInstance) throw new Error('vectorDb: call initDb() first');
}

/**
 * Insert chunks into the vector database.
 * Embeds via MiniLM → normalizes via barq-wasm → stores via barq-vweb insert_vectors.
 */
export async function insertChunks(metas: ChunkMeta[]): Promise<number> {
    ensureInit();
    if (metas.length === 0) return getCount();

    const texts = metas.map((m) => m.text);

    // Embed all texts using real MiniLM model
    const embeddings = await embedBatch(texts);

    // Build flat Float32Array for barq-vweb insert_vectors
    const flatVec = new Float32Array(metas.length * EMBED_DIM);
    const ids = new Uint32Array(metas.length);

    for (let i = 0; i < embeddings.length; i++) {
        const id = nextId + i;
        ids[i] = id;
        // Each embedding is already barq-wasm normalized (unit length)
        flatVec.set(embeddings[i], i * EMBED_DIM);

        // Store metadata + vector locally for lookup
        metadataStore.set(id, { ...metas[i], vector: embeddings[i] });
    }

    try {
        await wasmInstance.insert_vectors(flatVec, ids, EMBED_DIM);
        nextId += metas.length;
    } catch (e) {
        console.error('[vectorDb] insert_vectors failed:', e);
    }

    return getCount();
}

/**
 * Semantic search using barq-vweb + barq-wasm cosine re-rank.
 * query → embed → normalize → barq-vweb search_vector → re-rank top results.
 */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    ensureInit();
    if (metadataStore.size === 0) return [];

    // Embed and normalize the query
    const queryVec = await embedText(query);

    // barq-vweb vector search
    const raw = await wasmInstance.search_vector(queryVec, topK);

    let results: Array<{ id: number; score: number }> = [];
    if (Array.isArray(raw)) {
        results = raw;
    } else if (typeof raw === 'string') {
        try { results = JSON.parse(raw); } catch { results = []; }
    }

    // Map ids → ChunkMeta, re-rank with barq-wasm cosine similarity
    const mapped = results
        .map((r: any) => {
            const id = r.id ?? 0;
            const meta = metadataStore.get(id);
            if (!meta) return null;
            // Re-rank using barq-wasm SIMD cosine similarity for accuracy
            const score = cosineSimilarity(queryVec, meta.vector);
            return { id, score, text: meta.text, metadata: meta };
        })
        .filter(Boolean) as SearchResult[];

    // Sort by re-ranked score descending
    mapped.sort((a, b) => b.score - a.score);

    return mapped;
}

/** Clear all stored vectors and metadata. */
export async function clearDb(): Promise<void> {
    ensureInit();
    await wasmInstance.clear();
    metadataStore.clear();
    nextId = 0;
}

/** Number of vectors currently stored. */
export function getCount(): number {
    return metadataStore.size;
}

/** Hardware backend string from barq-vweb. */
export function getBackendInfo(): string {
    return wasmInstance?.backend_info() ?? 'not initialised';
}
