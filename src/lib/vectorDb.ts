/**
 * vectorDb.ts — Native AiMesh RAG with parallel ingestion and hybrid search.
 *
 * Keep the retrieval path inside barq-mesh-web so indexing and search stay on
 * the same store and the browser does not depend on a separate embedder file.
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

function yieldToUi(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 0));
}

function getWorkerCount(): number {
    if (typeof navigator === 'undefined') return 2;
    const cores = navigator.hardwareConcurrency ?? 4;
    if (cores >= 8) return 4;
    if (cores >= 6) return 3;
    return 2;
}

/**
 * Initialise the native AiMesh engine on demand.
 */
export async function initDb(onProgress?: (p: number) => void): Promise<void> {
    if (isInitialised && meshStore) {
        onProgress?.(1);
        return;
    }
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising native AiMesh...');
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

            const workers = getWorkerCount();
            meshStore = meshMod.AiMesh.create(workers, 'rag-session', EMBED_DIM);
            metadataStore.clear();

            isInitialised = true;
            console.log(`[vectorDb] AiMesh ready (${workers} workers). Backend: ${meshStore.backend()}`);
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
 * High-speed ingestion using AiMesh's native worker pool and embedding layer.
 */
export async function insertChunks(
    metas: ChunkMeta[],
    onProgress: (p: number) => void = () => {}
): Promise<number> {
    await initDb();
    ensureInit();
    if (metas.length === 0) return getCount();

    const texts = metas.map((m) => (m.text as any).toWellFormed?.() ?? m.text);
    console.log(`[vectorDb] Ingesting ${texts.length} chunks via AiMesh...`);

    try {
        onProgress(0.1);

        const startIdx = meshStore.vector_count();
        await meshStore.ingest_texts(JSON.stringify(texts));

        for (let i = 0; i < metas.length; i++) {
            metadataStore.set(startIdx + i, metas[i]);
        }

        onProgress(0.9);
        await yieldToUi();
        onProgress(1.0);
        console.log(`[vectorDb] AiMesh indexing complete. Total: ${meshStore.vector_count()}`);
    } catch (err) {
        console.error('[vectorDb] Ingestion failed:', err);
        throw err;
    }

    return getCount();
}

export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    if (!meshStore || metadataStore.size === 0) return [];

    console.log(`[vectorDb] AiMesh retrieval: "${query}"`);

    const raw = await meshStore.retrieve_hybrid(query, topK);
    const results = normalizeSearchResults(raw);
    return mapResults(results, true);
}

export async function clearDb(): Promise<void> {
    if (meshStore) await meshStore.clear();
    metadataStore.clear();
}

export function getCount(): number {
    return meshStore?.vector_count?.() ?? metadataStore.size;
}

export function getBackendInfo(): string {
    return `${meshStore?.backend?.() ?? 'Inactive'} | Parallel Mesh`;
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

function mapResults(results: NativeSearchResult[], hybrid: boolean): SearchResult[] {
    return results
        .map((r, idx) => {
            const meta = r.metadata ?? metadataStore.get(r.id);
            const text = meta?.text ?? r.text ?? '';
            if (!text) return null;

            return {
                id: r.id ?? idx,
                score: hybrid ? Math.min(r.score * 60, 0.99) : r.score,
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
