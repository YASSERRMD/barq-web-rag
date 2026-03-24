/**
 * vectorDb.ts — Extreme Performance RAG Engine.
 * 
 * Optimized for peak LLM throughput (60 TPS) and rapid document ingestion.
 * Uses a balanced 2-core parallel embedding strategy and ultra-fast SIMD search.
 */

import { initBarqWasm, cosineSimilarity } from './barqWasm';
import { initEmbedder, embedText } from './embedder';

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

// ── Ultra-Lean Persistent Pool (2 Workers) ──────────────────────────────────
// We limit to 2 workers to ensure zero interference with the WebGPU LLM.

class LeanPool {
    private workers: Worker[] = [];
    private isReady = false;

    async init() {
        if (this.isReady) return;
        this.workers = [
            new Worker(new URL('../workers/embed.worker.ts', import.meta.url), { type: 'module' }),
            new Worker(new URL('../workers/embed.worker.ts', import.meta.url), { type: 'module' })
        ];
        
        await Promise.all(this.workers.map((w, i) => new Promise(res => {
            const h = (e: MessageEvent) => { if (e.data.type === 'ready') { w.removeEventListener('message', h); res(true); } };
            w.addEventListener('message', h);
            w.postMessage({ type: 'init', id: `lean-${i}` });
        })));
        this.isReady = true;
    }

    async embed(texts: string[], onProgress: (p: number) => void): Promise<Float32Array[]> {
        const mid = Math.ceil(texts.length / 2);
        let completed = 0;

        const tasks = this.workers.map((w, i) => new Promise<Float32Array[]>((res, rej) => {
            const batch = i === 0 ? texts.slice(0, mid) : texts.slice(mid);
            if (batch.length === 0) return res([]);

            const h = (e: MessageEvent) => {
                if (e.data.type === 'progress') { completed++; onProgress(completed/texts.length); }
                else if (e.data.type === 'done') { w.removeEventListener('message', h); res(e.data.results); }
                else if (e.data.type === 'error') rej(new Error(e.data.error));
            };
            w.addEventListener('message', h);
            w.postMessage({ id: `t-${i}`, texts: batch });
        }));

        const r = await Promise.all(tasks);
        return r.flat();
    }
}

const pool = new LeanPool();

// ── Vector Memory Store ──────────────────────────────────────────────────────

let isInitialised = false;
let initPromise: Promise<void> | null = null;
const metadataStore = new Map<number, ChunkMeta & { vector: Float32Array }>();
let nextId = 0;

export async function initDb(): Promise<void> {
    if (isInitialised) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        console.log('[vectorDb] Initialising Lean RAG Engine (60 TPS Mode)...');
        await initBarqWasm();
        await pool.init();
        initEmbedder().catch(() => {});
        isInitialised = true;
    })();
    return initPromise;
}

/**
 * Rapid Document Ingestion.
 * Parallel embedding across 2 cores, then purely CPU/WASM storage.
 */
export async function insertChunks(
    metas: ChunkMeta[],
    onProgress: (p: number) => void = () => {}
): Promise<number> {
    if (!isInitialised) await initDb();
    if (metas.length === 0) return nextId;

    const texts = metas.map(m => (m.text as any).toWellFormed?.() ?? m.text);

    try {
        const embeddings = await pool.embed(texts, onProgress);
        
        for (let i = 0; i < embeddings.length; i++) {
            const id = nextId++;
            metadataStore.set(id, { ...metas[i], vector: embeddings[i] });
        }
        
        console.log(`[vectorDb] Indexed ${metas.length} chunks. Total: ${nextId}`);
    } catch (err) {
        console.error('[vectorDb] Ingestion failed:', err);
    }
    return nextId;
}

/**
 * High-Precision Neural Search.
 * Uses Direct SIMD Vector Comparison (Fastest & Most Accurate).
 */
export async function searchSimilar(query: string, topK = 5): Promise<SearchResult[]> {
    if (metadataStore.size === 0) return [];

    const queryVec = await embedText(query);
    const results: SearchResult[] = [];

    // Brute-force SIMD search is atomically fast for thousands of vectors
    // and eliminates all HNSW/Index complexity and bugs.
    for (const [id, meta] of metadataStore.entries()) {
        const score = cosineSimilarity(queryVec, meta.vector);
        results.push({ id, score, text: meta.text, metadata: meta });
    }

    return results
        .sort((a, b) => b.score - a.score)
        .slice(0, topK);
}

export async function clearDb(): Promise<void> {
    metadataStore.clear();
    nextId = 0;
}

export function getCount(): number {
    return metadataStore.size;
}

export function getBackendInfo(): string {
    return 'SIMD High-Precision | 60-TPS Optimized';
}
