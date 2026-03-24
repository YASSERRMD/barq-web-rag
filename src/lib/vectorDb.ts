/**
 * vectorDb.ts - High-speed RAG backed by barq-mesh-web.
 *
 * Hot path:
 * - real MiniLM embeddings in a worker pool
 * - insert vectors through barq-mesh-web with explicit IDs
 * - search natively through barq-mesh-web
 */

import { initBarqWasm } from './barqWasm';
import { initEmbedder, initEmbedderWithProgress, embedBatch, embedText, EMBED_DIM } from './embedder';

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
const INGEST_BATCH_SIZE = 48;

// Local mapping for metadata synchronization.
const metadataStore = new Map<number, ChunkMeta>();

function yieldToUi(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 0));
}

/**
 * Initialise the barq-mesh-web database on demand.
 */
export async function initDb(onProgress?: (p: number) => void): Promise<void> {
    if (isInitialised && dbStore) {
        onProgress?.(1);
        return;
    }
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising barq-mesh-web database...');
        try {
            const embedInit = onProgress
                ? initEmbedderWithProgress((progress, info) => {
                    onProgress(Math.max(0, Math.min(progress, 1)));
                    if (info?.file) {
                        console.log(`[vectorDb] embedder warmup ${info.worker}: ${info.file}`);
                    }
                })
                : initEmbedder();

            const bootstrapDb = (async () => {
                await initBarqWasm();
                const [vwebMod, meshMod] = await Promise.all([
                    import('barq-vweb'),
                    import('barq-mesh-web'),
                ]);
                await (vwebMod as any).default();
                await (meshMod as any).default();

                dbStore = new meshMod.BarqMeshWeb('rag-session', EMBED_DIM);
                await dbStore.clear();
                metadataStore.clear();
                console.log('[vectorDb] barq-mesh-web ready.');
            })();

            await Promise.all([bootstrapDb, embedInit]);
            isInitialised = true;
        } catch (e) {
            dbStore = null;
            metadataStore.clear();
            isInitialised = false;
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
 * Fast ingestion using worker-backed semantic embeddings and native barq-mesh-web indexing.
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
        onProgress(0.05);

        const total = metas.length;
        let processed = 0;

        for (let offset = 0; offset < metas.length; offset += INGEST_BATCH_SIZE) {
            const batchMetas = metas.slice(offset, offset + INGEST_BATCH_SIZE);
            const batchTexts = batchMetas.map((m) => (m.text as any).toWellFormed?.() ?? m.text);
            const vectors = await embedBatch(batchTexts);

            const startIdx = dbStore.count();
            const flatVectors = new Float32Array(vectors.length * EMBED_DIM);
            const ids = new Uint32Array(vectors.length);

            for (let i = 0; i < vectors.length; i++) {
                flatVectors.set(vectors[i], i * EMBED_DIM);
                ids[i] = startIdx + i;
            }

            await dbStore.upsert_vectors(flatVectors, ids);

            for (let i = 0; i < batchMetas.length; i++) {
                metadataStore.set(ids[i], batchMetas[i]);
            }

            processed += batchMetas.length;
            onProgress(Math.min(0.1 + (processed / total) * 0.85, 0.99));

            if (processed < total) {
                await yieldToUi();
            }
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
 * Semantic retrieval using barq-mesh-web's native vector search.
 */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    if (!dbStore || metadataStore.size === 0) return [];

    console.log(`[vectorDb] barq-mesh-web retrieval: "${query}"`);
    const queryVec = await embedText(query);
    const raw = await dbStore.search_vector(queryVec, topK);

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
    return `${dbStore?.backend_info?.() ?? 'Inactive'} | MiniLM worker pool`;
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
