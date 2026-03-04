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
const metadataStore = new Map<number, ChunkMeta>();
let nextVectorId = 0;

/** Initialise the barq-vweb WASM module. Safe to call multiple times. */
export async function initDb(): Promise<void> {
    if (isInitialised) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        // @ts-ignore
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

    try {
        const result = await wasmInstance.insert_texts(texts, metaPayloads);

        // Store metadata locally in JS mapping since WASM currently discards the JSON payload
        for (let i = 0; i < metas.length; i++) {
            metadataStore.set(nextVectorId + i, metas[i]);
        }
        nextVectorId += metas.length;

        // The Rust WASM bindings return the number of inserted texts as an f64
        if (typeof result === 'number') {
            return wasmInstance.count();
        }
    } catch (e) {
        console.error('[vectorDb] Failed to insert chunks:', e);
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

    return results.map((r: any) => {
        const id = r.id ?? 0;
        const meta = metadataStore.get(id);

        return {
            id,
            score: r.score ?? 0,
            text: meta?.text ?? '',
            metadata: meta,
        };
    });
}

/** Clear all stored vectors. Returns the new count (always 0). */
export async function clearDb(): Promise<void> {
    ensureInit();
    await wasmInstance.clear();
    metadataStore.clear();
    nextVectorId = 0;
}

/** Number of vectors currently stored. */
export function getCount(): number {
    return wasmInstance?.count() ?? 0;
}

/** Hardware backend string (e.g. "WebGPU / Metal"). */
export function getBackendInfo(): string {
    return wasmInstance?.backend_info() ?? 'not initialised';
}
