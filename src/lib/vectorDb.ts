/**
 * vectorDb.ts — Native barq-mesh-web RAG with dense-first retrieval.
 *
 * Ingestion stays inside barq-mesh-web. Retrieval uses native vector search as
 * the fast path and only falls back to hybrid text search if dense search fails.
 */

import { EMBED_DIM, embedText, warmQueryEmbedder } from './embedder';

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

let meshStore: any = null;
let isInitialised = false;
let initPromise: Promise<void> | null = null;

// Local mapping for metadata synchronization.
const metadataStore = new Map<number, ChunkMeta>();
const DENSE_CANDIDATE_COUNT = 12;
const MIN_DENSE_SCORE = 0.18;
const MIN_LEXICAL_SCORE = 0.08;

function yieldToUi(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 0));
}

/**
 * Initialise the native barq-mesh-web engine on demand.
 */
export async function initDb(onProgress?: (p: number) => void): Promise<void> {
    if (isInitialised && meshStore) {
        onProgress?.(1);
        return;
    }
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising native barq-mesh-web...');
        try {
            onProgress?.(0.05);

            const [vwebMod, wasmMod, meshMod] = await Promise.all([
                import('barq-vweb'),
                import('barq-wasm'),
                import('barq-mesh-web'),
            ]);

            await (vwebMod as any).default();
            await (wasmMod as any).default();
            await (meshMod as any).default();

            onProgress?.(0.4);

            meshStore = new meshMod.BarqMeshWeb('rag-session', EMBED_DIM);
            await meshStore.clear();
            metadataStore.clear();

            isInitialised = true;
            console.log(`[vectorDb] barq-mesh-web ready. Backend: ${meshStore.backend_info()}`);
            void warmQueryEmbedder().catch((error) => {
                console.warn('[vectorDb] Query embedder warmup failed:', error);
            });
            onProgress?.(1);
        } catch (e) {
            meshStore = null;
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
    if (!meshStore) throw new Error('vectorDb: call initDb() first');
}

/**
 * High-speed ingestion using barq-mesh-web's native worker pool and embedding layer.
 */
export async function insertChunks(
    metas: ChunkMeta[],
    onProgress: (p: number) => void = () => {}
): Promise<number> {
    await initDb();
    ensureInit();
    if (metas.length === 0) return getCount();

    const texts = metas.map((m) => (m.text as any).toWellFormed?.() ?? m.text);
    console.log(`[vectorDb] Ingesting ${texts.length} chunks via barq-mesh-web...`);

    try {
        onProgress(0.1);

        const startIdx = meshStore.count();
        await meshStore.ingest_texts(texts);

        for (let i = 0; i < metas.length; i++) {
            metadataStore.set(startIdx + i, metas[i]);
        }

        onProgress(0.9);
        await yieldToUi();
        onProgress(1.0);
        console.log(`[vectorDb] barq-mesh-web indexing complete. Total: ${meshStore.count()}`);
    } catch (err) {
        console.error('[vectorDb] Ingestion failed:', err);
        throw err;
    }

    return getCount();
}

export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    if (!meshStore || meshStore.count?.() === 0) return [];

    console.log(`[vectorDb] barq-mesh-web retrieval: "${query}"`);
    const queryTokens = tokenize(query);

    try {
        const queryVector = await embedText(query);
        const raw = await meshStore.search_vector(queryVector, Math.max(topK, DENSE_CANDIDATE_COUNT));
        const denseResults = rerankResults(mapResults(normalizeSearchResults(raw), 'dense'), queryTokens, topK);
        if (denseResults.length > 0) return denseResults;
    } catch (error) {
        console.warn('[vectorDb] Dense retrieval failed, falling back to hybrid search:', error);
    }

    const hybridRaw = await meshStore.retrieve_hybrid(query, topK);
    return rerankResults(mapResults(normalizeSearchResults(hybridRaw), 'hybrid'), queryTokens, topK);
}

export async function clearDb(): Promise<void> {
    if (meshStore) await meshStore.clear();
    metadataStore.clear();
}

export function getCount(): number {
    return meshStore?.count?.() ?? metadataStore.size;
}

export function getBackendInfo(): string {
    return `${meshStore?.backend_info?.() ?? 'Inactive'} | barq-mesh-web`;
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

function mapResults(results: NativeSearchResult[], mode: 'dense' | 'hybrid'): SearchResult[] {
    return results
        .map((r, idx) => {
            const id = Number(r.id);
            const meta = r.metadata ?? (Number.isFinite(id) ? metadataStore.get(id) : undefined);
            const text = meta?.text ?? r.text ?? '';
            if (!text) return null;

            return {
                id: Number.isFinite(id) ? id : idx,
                score: normalizeScore(r.score, mode),
                text,
                metadata: meta ?? {
                    sourceFile: 'unknown',
                    chunkIndex: idx,
                    text,
                },
            };
        })
        .filter(Boolean) as SearchResult[];
}

function normalizeScore(score: number, mode: 'dense' | 'hybrid'): number {
    if (!Number.isFinite(score)) return 0;
    if (mode === 'hybrid') return Math.min(score * 60, 0.99);
    return Math.max(0, Math.min(score, 0.99));
}

function rerankResults(results: SearchResult[], queryTokens: string[], topK: number): SearchResult[] {
    const reranked = results
        .map((result) => {
            const lexicalScore = computeLexicalScore(queryTokens, result.text);
            const blendedScore = Math.max(
                result.score * 0.82 + lexicalScore * 0.18,
                lexicalScore * 0.75,
            );

            return {
                ...result,
                score: blendedScore,
            };
        })
        .filter((result) => {
            const lexicalScore = computeLexicalScore(queryTokens, result.text);
            return result.score >= MIN_DENSE_SCORE || lexicalScore >= MIN_LEXICAL_SCORE;
        })
        .sort((a, b) => b.score - a.score);

    return reranked.slice(0, topK);
}

function tokenize(text: string): string[] {
    return text
        .toLowerCase()
        .split(/[^a-z0-9]+/g)
        .filter((token) => token.length >= 3);
}

function computeLexicalScore(queryTokens: string[], text: string): number {
    if (queryTokens.length === 0 || !text) return 0;

    const textLower = text.toLowerCase();
    let matched = 0;

    for (const token of queryTokens) {
        if (textLower.includes(token)) matched++;
    }

    return matched / queryTokens.length;
}
