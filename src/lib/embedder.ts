/**
 * embedder.ts - Main-thread MiniLM embeddings for query-time retrieval.
 *
 * Indexing now stays inside AiMesh, so this model is only used for a single
 * user query at a time. That keeps retrieval semantic without dragging the
 * indexing path back down.
 */

import { pipeline, env } from '@huggingface/transformers';

export const EMBED_DIM = 384;
const MODEL_ID = 'Xenova/all-MiniLM-L6-v2';

env.allowLocalModels = false;
if (env.backends.onnx.wasm) {
    env.backends.onnx.wasm.numThreads = 1;
    env.backends.onnx.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/';
}

type FeatureExtractionPipeline = any;

let embedPipeline: FeatureExtractionPipeline | null = null;
let initPromise: Promise<void> | null = null;

function toWellFormedText(text: string): string {
    return (text as any).toWellFormed?.() ?? text;
}

async function ensurePipeline(): Promise<void> {
    if (embedPipeline) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        embedPipeline = await pipeline('feature-extraction', MODEL_ID, {
            dtype: 'q8',
            device: 'wasm',
        });
        console.log('[embedder] MiniLM query embedder ready');
    })();

    try {
        await initPromise;
    } finally {
        initPromise = null;
    }
}

export async function initEmbedder(): Promise<void> {
    await ensurePipeline();
}

export async function embedText(text: string): Promise<Float32Array> {
    await ensurePipeline();
    if (!embedPipeline) throw new Error('embedder: failed to initialise');

    const output = await embedPipeline(toWellFormedText(text), {
        pooling: 'mean',
        normalize: true,
    });
    return new Float32Array(output.data);
}

export function isEmbedderReady(): boolean {
    return embedPipeline !== null;
}

export async function disposeEmbedder(): Promise<void> {
    if (embedPipeline?.dispose) {
        await embedPipeline.dispose();
    }
    embedPipeline = null;
    initPromise = null;
}
