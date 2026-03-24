/**
 * vectorDb.ts — Native barq-mesh-web RAG with hybrid retrieval.
 *
 * Keep retrieval inside the native mesh store and use a cheap JS rerank over
 * the returned candidates so we avoid a second embedding model in the app.
 */

const EMBED_DIM = 384;

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
const HYBRID_CANDIDATE_COUNT = 16;
const MIN_RESULT_SCORE = 0.06;

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
    const candidateCount = Math.max(topK * 4, HYBRID_CANDIDATE_COUNT);
    const hybridRaw = await meshStore.retrieve_hybrid(query, candidateCount);
    return rerankResults(mapResults(normalizeSearchResults(hybridRaw)), queryTokens, topK);
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

function mapResults(results: NativeSearchResult[]): SearchResult[] {
    return results
        .map((r, idx) => {
            const id = Number(r.id);
            const meta = r.metadata ?? (Number.isFinite(id) ? metadataStore.get(id) : undefined);
            const text = meta?.text ?? r.text ?? '';
            if (!text) return null;

            return {
                id: Number.isFinite(id) ? id : idx,
                score: normalizeScore(r.score),
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

function normalizeScore(score: number): number {
    if (!Number.isFinite(score)) return 0;
    return Math.min(score * 60, 0.99);
}

function rerankResults(results: SearchResult[], queryTokens: string[], topK: number): SearchResult[] {
    const reranked = results
        .map((result) => {
            const lexicalScore = computeLexicalScore(queryTokens, result.text);
            const blendedScore = result.score * 0.7 + lexicalScore * 0.3;

            return {
                ...result,
                score: blendedScore,
            };
        })
        .filter((result) => result.score >= MIN_RESULT_SCORE)
        .sort((a, b) => b.score - a.score);

    if (reranked.length > 0) {
        return reranked.slice(0, topK);
    }

    return results.slice(0, topK);
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
