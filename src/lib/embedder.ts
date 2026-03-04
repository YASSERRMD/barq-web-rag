/**
 * embedder.ts — Real text embeddings using Xenova/all-MiniLM-L6-v2 (384-dim).
 * Vectors are L2-normalized using barq-wasm SIMD for fast cosine search.
 */

import { pipeline, env } from '@huggingface/transformers';
import { initBarqWasm, normalizeVector } from './barqWasm';

// Use cached ONNX session for speed; disable local model check
env.allowLocalModels = false;

const MODEL_ID = 'Xenova/all-MiniLM-L6-v2';
export const EMBED_DIM = 384;

let embedPipeline: any = null;
let initPromise: Promise<void> | null = null;

export async function initEmbedder(): Promise<void> {
    if (embedPipeline) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        // Ensure barq-wasm is ready for vector normalization
        await initBarqWasm();

        console.log('[embedder] Loading MiniLM-L6-v2…');
        embedPipeline = await pipeline('feature-extraction', MODEL_ID, {
            dtype: 'q8',            // 8-bit quantized — smaller download, faster inference
            device: 'wasm',         // use ONNX WASM backend (not WebGPU, reserved for LLM)
        });
        console.log('[embedder] MiniLM-L6-v2 ready');
    })();

    return initPromise;
}

/**
 * Embed a single text string. Returns a unit-normalized Float32Array (384-dim).
 */
export async function embedText(text: string): Promise<Float32Array> {
    if (!embedPipeline) await initEmbedder();

    const output = await embedPipeline(text, { pooling: 'mean', normalize: false });
    const raw = new Float32Array(output.data);

    // Use barq-wasm SIMD normalization
    return normalizeVector(raw);
}

/**
 * Embed a batch of texts. Returns normalized Float32Array[] (384-dim each).
 */
export async function embedBatch(texts: string[]): Promise<Float32Array[]> {
    if (texts.length === 0) return [];
    if (!embedPipeline) await initEmbedder();

    const results: Float32Array[] = [];
    for (const text of texts) {
        results.push(await embedText(text));
    }
    return results;
}

export function isEmbedderReady(): boolean {
    return embedPipeline !== null;
}
