/**
 * vectorDb.ts — Singleton wrapper around barq-vweb WASM BarqVWeb.
 * Provides a clean async API for the RAG app.
 */

export interface SearchResult {
    id: number;
    score: number;
    text?: string;
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

/** Initialise the barq-vweb WASM module. Safe to call multiple times. */
export async function initDb(): Promise<void> {
    if (isInitialised) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        // Dynamic import of the WASM module served from /barq-vweb-pkg/
        const mod = await import(/* @vite-ignore */ '/barq-vweb-pkg/barq_vweb.js');
        // Initialise WASM binary
        await mod.default('/barq-vweb-pkg/barq_vweb_bg.wasm');
        // Create the BarqVWeb collection
        wasmInstance = new mod.BarqVWeb('rag-session', null);
        isInitialised = true;
        console.log('[barq-vweb] initialised —', wasmInstance.backend_info());
    })();

    return initPromise;
}

function ensureInit() {
    if (!wasmInstance) throw new Error('vectorDb: call initDb() first');
}

/**
 * Insert an array of text chunks with associated metadata.
 * Returns the total count of vectors stored.
 */
export async function insertChunks(metas: ChunkMeta[]): Promise<number> {
    ensureInit();
    if (metas.length === 0) return wasmInstance.count();

    const texts = metas.map((m) => m.text);
    const metaPayloads = metas.map((m) => ({ sourceFile: m.sourceFile, chunkIndex: m.chunkIndex, text: m.text }));

    const result = await wasmInstance.insert_texts(texts, metaPayloads);
    // Result may be a JSON string or number
    if (typeof result === 'string') {
        try { const parsed = JSON.parse(result); return parsed?.count ?? wasmInstance.count(); } catch { /* ignore */ }
    }
    return wasmInstance.count();
}

/**
 * Semantic search (hybrid BM25 + vector) over the collection.
 * Returns up to `topK` results with score and metadata.
 */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    ensureInit();
    const raw = await wasmInstance.search(query, topK, true);

    let results: any[] = [];
    if (Array.isArray(raw)) {
        results = raw;
    } else if (typeof raw === 'string') {
        try { results = JSON.parse(raw); } catch { results = []; }
    }

    return results.map((r: any) => ({
        id: r.id ?? 0,
        score: r.score ?? 0,
        text: r.text,
        metadata: r.metadata as ChunkMeta | undefined,
    }));
}

/** Clear all stored vectors. Returns the new count (always 0). */
export async function clearDb(): Promise<void> {
    ensureInit();
    await wasmInstance.clear();
}

/** Number of vectors currently stored. */
export function getCount(): number {
    return wasmInstance?.count() ?? 0;
}

/** Hardware backend string (e.g. "WebGPU / Metal"). */
export function getBackendInfo(): string {
    return wasmInstance?.backend_info() ?? 'not initialised';
}
