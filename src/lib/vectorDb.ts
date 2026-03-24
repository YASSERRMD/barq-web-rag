/**
 * vectorDb.ts — High-performance RAG pipeline leveraging the barq-mesh-web AiMesh.
 *
 * This version uses the official barq-mesh-web parallel ingestion (Rust-side SIMD + Workers)
 * rather than manual JS workers, ensuring maximum embedding speed.
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

// While barq-vweb stores the vectors, we keep a text mapping for RAG context
const metadataStore = new Map<number, ChunkMeta & { vector: Float32Array }>();
let nextId = 0;

/**
 * Initialise the WASM compute mesh.
 */
export async function initDb(): Promise<void> {
    if (isInitialised) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising barq-mesh-web (Native Parallel Edition)...');
        
        const initTimeout = setTimeout(() => {
            if (!isInitialised) console.warn('[vectorDb] Mesh initialisation taking longer than 10s...');
        }, 10000);

        try {
            // CRITICAL: Initialize base WASM modules FIRST
            const vwebMod = await import('barq-vweb');
            await (vwebMod as any).default();
            
            const wasmMod = await import('barq-wasm');
            await (wasmMod as any).default();

            const mod = await import('barq-mesh-web');
            await (mod as any).default();
            
            // Use the Parallel AiMesh instead of lower-level storage
            const numWorkers = Math.min(navigator.hardwareConcurrency || 4, 8);
            meshStore = mod.AiMesh.create(numWorkers, 'rag-session', EMBED_DIM);
            
            console.log('[vectorDb] AiMesh Ready. Backend:', meshStore.backend(), '| Workers:', numWorkers);
            
            // Warm up primary embedder (for queries)
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
 * Unified ingestion using barq-mesh-web's native parallel worker pool.
 */
export async function insertChunksParallel(
    metas: ChunkMeta[],
    onProgress: (p: number) => void
): Promise<number> {
    ensureInit();
    if (metas.length === 0) return getCount();

    const texts = metas.map((m) => {
        // Ensure string is well-formed to prevent Rust JSON parse errors (lone surrogates)
        // especially common when parsing raw PDF segments.
        if (typeof (m.text as any).toWellFormed === 'function') {
            return m.text.toWellFormed();
        }
        // Fallback for older environments: strip unpaired surrogates
        return m.text.replace(/[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/g, '');
    });
    console.log(`[vectorDb] Starting NATIVE parallel ingestion for ${texts.length} chunks.`);

    try {
        // Step 1: Use the mesh's built-in parallel ingestion
        onProgress(0.1); 
        
        const textsJson = JSON.stringify(texts);
        await meshStore.ingest_texts(textsJson);
        
        onProgress(0.9); // Nearly done

        // Step 2: Sync metadata store for retrieval (we need text lookup)
        // Since ingest_texts inserts into the DB, we need to manually track IDs if we want local metadataStore sync
        // However, for pure RAG we just need to know how many vectors we have.
        // We simulate the ID sync here for our Local Map.
        const currentCount = meshStore.vector_count();
        const added = texts.length;
        
        // Note: ingest_texts usually assigns serial IDs 0, 1, 2...
        // We keep our metadataStore in sync
        for (let i = 0; i < metas.length; i++) {
            const id = nextId + i;
            // We store the text. Vector retrieval from WASM is expensive, so we'll 
            // rely on the DB for search and the metadataStore for content display.
            metadataStore.set(id, { ...metas[i], vector: new Float32Array(EMBED_DIM) });
        }
        
        nextId += added;
        onProgress(1.0);
        console.log(`[vectorDb] Ingestion complete. Store total: ${currentCount}`);
    } catch (err) {
        console.error('[vectorDb] Native ingestion failed:', err);
        throw err;
    }

    return getCount();
}

/** Legacy/Serial fallback */
export async function insertChunks(metas: ChunkMeta[]): Promise<number> {
    return insertChunksParallel(metas, () => {});
}

/** Semantic Search using AiMesh's hybrid retrieval */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    ensureInit();
    if (metadataStore.size === 0) return [];

    console.log(`[vectorDb] RAG Search: "${query}" (topK=${topK})`);
    
    // Use retrieve_hybrid for best keywords + semantic balance
    // returns JSON string of [{id, score}]
    const resultsJson = await meshStore.retrieve_hybrid(query, topK);
    let topResults: Array<{ id: number; score: number }> = [];
    try { topResults = JSON.parse(resultsJson); } catch { topResults = []; }

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
    nextId = 0;
}

export function getCount(): number {
    return meshStore?.vector_count() ?? 0;
}

export function getBackendInfo(): string {
    return meshStore?.backend() ?? 'Inactive';
}
