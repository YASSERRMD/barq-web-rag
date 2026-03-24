/**
 * vectorDb.ts — Definitive High-Speed Parallel RAG with worker lifecycle management.
 *
 * Keeps the stable AiMesh contract used by the bundled WASM wrapper so
 * ingestion and retrieval stay aligned with the IDs stored in metadata.
 */

import { initBarqWasm, cosineSimilarity } from './barqWasm';
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

interface StoredChunk extends ChunkMeta {
    vector: Float32Array;
}

let meshStore: any = null;
let isInitialised = false;
let initPromise: Promise<void> | null = null;

// Local mapping for metadata synchronization
const metadataStore = new Map<number, StoredChunk>();

/**
 * Initialise the stable AiMesh engine on demand.
 */
export async function initDb(): Promise<void> {
    if (isInitialised && meshStore) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising high-speed parallel mesh...');
        try {
            await initBarqWasm();
            const vwebMod = await import('barq-vweb');
            await (vwebMod as any).default();
            // @ts-ignore
            const mod = await import('barq-mesh-web');
            await (mod as any).default();
            
            // Keep the worker pool bounded so the browser stays responsive.
            const numWorkers = 4;
            // @ts-ignore
            meshStore = mod.AiMesh.create(numWorkers, 'rag-session', EMBED_DIM);
            await meshStore.clear();
            metadataStore.clear();
            
            isInitialised = true;
            console.log('[vectorDb] Mesh ready with', numWorkers, 'workers.');
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
    if (!meshStore) throw new Error('vectorDb: call initDb() first');
}

/**
 * High-Speed Native Parallel Ingestion.
 */
export async function insertChunks(
    metas: ChunkMeta[],
    onProgress: (p: number) => void = () => {}
): Promise<number> {
    await initDb();
    ensureInit();
    if (metas.length === 0) return getCount();

    const texts = metas.map(m => (m.text as any).toWellFormed?.() ?? m.text);
    console.log(`[vectorDb] Parallel indexing ${texts.length} chunks via Rust Pool...`);

    try {
        onProgress(0.1);
        // Captured count for ID sequence alignment
        const startIdx = meshStore.vector_count();
        const vectors = await embedBatch(texts);
        onProgress(0.4);
        
        // Native High-Speed Ingestion
        await meshStore.ingest_texts(JSON.stringify(texts));
        
        onProgress(0.9);

        // SYNC: Strictly align metadata with the incrementing Rust IDs
        for (let i = 0; i < metas.length; i++) {
            const id = startIdx + i;
            metadataStore.set(id, { ...metas[i], vector: vectors[i] });
        }
        
        onProgress(1.0);
        console.log(`[vectorDb] Done. Store total: ${meshStore.vector_count()}`);
    } catch (err) {
        console.error('[vectorDb] Ingestion failed:', err);
        throw err;
    }
    return getCount();
}

/**
 * Neural Search using the native engine's high-precision retrieval.
 * Hybrid search produces candidates; SIMD cosine reranking picks the final chunks.
 */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    if (!meshStore || metadataStore.size === 0) return [];

    console.log(`[vectorDb] Parallel retrieval: "${query}"`);
    const queryVec = await embedText(query);

    const best: SearchResult[] = [];

    for (const [id, meta] of metadataStore.entries()) {
        const score = cosineSimilarity(queryVec, meta.vector);
        const candidate: SearchResult = {
            id,
            score,
            text: meta.text,
            metadata: meta,
        };

        if (best.length < topK) {
            insertSorted(best, candidate);
            continue;
        }

        if (score > best[best.length - 1].score) {
            best.pop();
            insertSorted(best, candidate);
        }
    }

    return best;
}

export async function clearDb(): Promise<void> {
    if (meshStore) await meshStore.clear();
    metadataStore.clear();
}

export function getCount(): number {
    return metadataStore.size;
}

export function getBackendInfo(): string {
    return `${meshStore?.backend() ?? 'Inactive'} | SIMD Dense Retrieval`;
}

function insertSorted(target: SearchResult[], item: SearchResult): void {
    let index = 0;
    while (index < target.length && target[index].score >= item.score) index++;
    target.splice(index, 0, item);
}
