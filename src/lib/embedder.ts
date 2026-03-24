/**
 * embedder.ts — Lightweight query-time MiniLM embeddings.
 *
 * Document ingestion stays inside barq-mesh-web. This module is only used to
 * turn the user query into a vector so retrieval can use fast native HNSW
 * search via `BarqMeshWeb.search_vector()`.
 */

import { env, pipeline } from '@huggingface/transformers';

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
        console.log('[embedder] Query MiniLM ready');
    })();

    try {
        await initPromise;
    } catch (error) {
        embedPipeline = null;
        throw error;
    } finally {
        initPromise = null;
    }
}

export async function warmQueryEmbedder(): Promise<void> {
    await ensurePipeline();
}

export async function embedText(text: string): Promise<Float32Array> {
    await ensurePipeline();
    if (!embedPipeline) throw new Error('embedder: pipeline not ready');

    const output = await embedPipeline(toWellFormedText(text), {
        pooling: 'mean',
        normalize: true,
    });

    const data = output?.data as Float32Array | undefined;
    const dims = output?.dims as number[] | undefined;
    if (!data || !dims || dims.length === 0) {
        throw new Error('embedder: invalid embedding output');
    }

    const vectorSize = dims[dims.length - 1] ?? EMBED_DIM;
    return new Float32Array(data.slice(0, vectorSize));
}
