/**
 * vectorDb.ts - High-speed RAG backed by barq-mesh-web.
 *
 * Hot path:
 * - batch embed in JS
 * - insert vectors through barq-mesh-web with explicit IDs
 * - search vectors natively through barq-mesh-web
 */

import { initBarqWasm } from './barqWasm';
import { initEmbedder, embedBatch, embedText, EMBED_DIM } from './embedder';

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

type NativeSearchResult = {
    id: number;
    score: number;
    text?: string;
    metadata?: ChunkMeta;
};

let dbStore: any = null;
let isInitialised = false;
let initPromise: Promise<void> | null = null;

// Local mapping for metadata synchronization.
const metadataStore = new Map<number, ChunkMeta>();

/**
 * Initialise the barq-mesh-web database on demand.
 */
export async function initDb(): Promise<void> {
    if (isInitialised && dbStore) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising barq-mesh-web database...');
        try {
            await initBarqWasm();
            const vwebMod = await import('barq-vweb');
            await (vwebMod as any).default();

            const meshMod = await import('barq-mesh-web');
            await (meshMod as any).default();

            dbStore = new meshMod.BarqMeshWeb('rag-session', EMBED_DIM);
            await dbStore.clear();
            metadataStore.clear();

            isInitialised = true;
            console.log('[vectorDb] barq-mesh-web ready.');
            initEmbedder().catch(() => {});
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
    if (!dbStore) throw new Error('vectorDb: call initDb() first');
}

/**
 * Fast ingestion using precomputed JS embeddings and native barq-mesh-web indexing.
 */
export async function insertChunks(
    metas: ChunkMeta[],
    onProgress: (p: number) => void = () => {}
): Promise<number> {
    await initDb();
    ensureInit();
    if (metas.length === 0) return getCount();

    const texts = metas.map((m) => (m.text as any).toWellFormed?.() ?? m.text);
    console.log(`[vectorDb] Ingesting ${texts.length} chunks into barq-mesh-web...`);

    try {
        onProgress(0.1);
        const vectors = await embedBatch(texts);
        onProgress(0.35);

        const startIdx = dbStore.count();
        const flatVectors = new Float32Array(vectors.length * EMBED_DIM);
        const ids = new Uint32Array(vectors.length);

        for (let i = 0; i < vectors.length; i++) {
            flatVectors.set(vectors[i], i * EMBED_DIM);
            ids[i] = startIdx + i;
        }

        await dbStore.upsert_vectors(flatVectors, ids);
        onProgress(0.9);

        for (let i = 0; i < metas.length; i++) {
            metadataStore.set(ids[i], metas[i]);
        }

        onProgress(1.0);
        console.log(`[vectorDb] barq-mesh-web indexing complete. Total: ${dbStore.count()}`);
    } catch (err) {
        console.error('[vectorDb] Ingestion failed:', err);
        throw err;
    }

    return getCount();
}

/**
 * Fast native vector search using barq-mesh-web's HNSW index.
 */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    if (!dbStore || metadataStore.size === 0) return [];

    console.log(`[vectorDb] barq-mesh-web retrieval: "${query}"`);
    let raw: unknown;

    try {
        const queryVec = await embedText(query);
        raw = await dbStore.search_vector(queryVec, topK);
    } catch (err) {
        console.warn('[vectorDb] Native vector search failed, falling back to hybrid retrieval:', err);
        raw = await dbStore.retrieve_hybrid(query, topK);
    }

    const results = normalizeSearchResults(raw);

    return results
        .map((r) => {
            const meta = r.metadata ?? metadataStore.get(r.id);
            if (!meta) return null;

            return {
                id: r.id,
                score: r.score,
                text: r.text ?? meta.text,
                metadata: meta,
            };
        })
        .filter(Boolean) as SearchResult[];
}

export async function clearDb(): Promise<void> {
    if (dbStore) await dbStore.clear();
    metadataStore.clear();
}

export function getCount(): number {
    return metadataStore.size;
}

export function getBackendInfo(): string {
    return `${dbStore?.backend_info?.() ?? 'Inactive'} | barq-mesh-web native search`;
}

function normalizeSearchResults(raw: unknown): NativeSearchResult[] {
    if (Array.isArray(raw)) return raw as NativeSearchResult[];
    if (typeof raw === 'string') {
        try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) return parsed as NativeSearchResult[];
        } catch {
            return [];
        }
    }
    return [];
}
