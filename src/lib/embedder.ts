/**
 * embedder.ts - Main-thread MiniLM embeddings for barq-mesh-web.
 *
 * This keeps the semantic embedding model compatible with static hosting
 * environments like Hugging Face Pages, while still batching requests so
 * ingestion remains reasonably fast.
 */

import { pipeline, env } from '@huggingface/transformers';

export const EMBED_DIM = 384;
const MODEL_ID = 'Xenova/all-MiniLM-L6-v2';
const EMBED_BATCH_SIZE = 16;

// Match the LLM provider's ONNX runtime setup so static deployments use a
// predictable WASM backend and shared cache path.
env.allowLocalModels = false;
if (env.backends.onnx.wasm) {
    env.backends.onnx.wasm.numThreads = 1;
    env.backends.onnx.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/';
}

export type EmbedProgressHandler = (
    progress: number,
    info?: { phase: 'warmup' | 'batch'; worker: string; file?: string }
) => void;

type FeatureExtractionPipeline = any;

let embedPipeline: FeatureExtractionPipeline | null = null;
let initPromise: Promise<void> | null = null;
let embedReady = false;

function toWellFormedText(text: string): string {
    return (text as any).toWellFormed?.() ?? text;
}

function toVectors(output: any): Float32Array[] {
    const data = output?.data as Float32Array;
    const dims = output?.dims as number[] | undefined;

    if (!data || !dims || dims.length === 0) return [];

    const batchSize = dims[0] ?? 1;
    const embeddingDim = dims[dims.length - 1] ?? EMBED_DIM;
    const results: Float32Array[] = new Array(batchSize);

    for (let i = 0; i < batchSize; i++) {
        const start = i * embeddingDim;
        const end = start + embeddingDim;
        results[i] = new Float32Array(data.slice(start, end));
    }

    return results;
}

async function ensurePipeline(onProgress?: EmbedProgressHandler): Promise<void> {
    if (embedReady && embedPipeline) {
        onProgress?.(1, { phase: 'warmup', worker: 'main', file: 'ready' });
        return;
    }

    if (initPromise) {
        await initPromise;
        onProgress?.(1, { phase: 'warmup', worker: 'main', file: 'ready' });
        return;
    }

    initPromise = (async () => {
        const progress_callback = onProgress
            ? (p: any) => {
                if (p?.status !== 'progress') return;
                onProgress(Math.max(0, Math.min(p.progress ?? 0, 1)), {
                    phase: 'warmup',
                    worker: 'main',
                    file: p.file ?? MODEL_ID,
                });
            }
            : undefined;

        embedPipeline = await pipeline('feature-extraction', MODEL_ID, {
            dtype: 'q8',
            device: 'wasm',
            progress_callback,
        });

        embedReady = true;
        onProgress?.(1, { phase: 'warmup', worker: 'main', file: 'ready' });
        console.log('[embedder] MiniLM embeddings ready');
    })();

    try {
        await initPromise;
    } catch (error) {
        embedPipeline = null;
        embedReady = false;
        throw error;
    } finally {
        initPromise = null;
    }
}

function splitIntoBatches(texts: string[]): string[][] {
    if (texts.length <= EMBED_BATCH_SIZE) return [texts];

    const batches: string[][] = [];
    for (let i = 0; i < texts.length; i += EMBED_BATCH_SIZE) {
        batches.push(texts.slice(i, i + EMBED_BATCH_SIZE));
    }
    return batches;
}

export async function initEmbedder(): Promise<void> {
    await ensurePipeline();
}

export async function initEmbedderWithProgress(onProgress?: EmbedProgressHandler): Promise<void> {
    await ensurePipeline(onProgress);
}

/**
 * Embed a single text string. Returns a 384-dim vector.
 */
export async function embedText(text: string): Promise<Float32Array> {
    const results = await embedBatch([text]);
    const first = results[0];
    if (!first) throw new Error('embedder: failed to embed text');
    return first;
}

/**
 * Embed a batch of texts using the MiniLM pipeline.
 */
export async function embedBatch(texts: string[]): Promise<Float32Array[]> {
    if (texts.length === 0) return [];
    await ensurePipeline();
    if (!embedPipeline) return [];

    const batches = splitIntoBatches(texts.map(toWellFormedText));
    const results: Float32Array[] = [];

    for (const batch of batches) {
        const output = await embedPipeline(batch, {
            pooling: 'mean',
            normalize: true,
        });
        results.push(...toVectors(output));

        // Let the browser paint between batches so indexing stays responsive.
        await new Promise((resolve) => setTimeout(resolve, 0));
    }

    return results;
}

export function isEmbedderReady(): boolean {
    return embedReady;
}

export async function disposeEmbedder(): Promise<void> {
    if (embedPipeline?.dispose) {
        await embedPipeline.dispose();
    }
    embedPipeline = null;
    embedReady = false;
    initPromise = null;
}
