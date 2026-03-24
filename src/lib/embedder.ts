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
const EMBED_BATCH_SIZE = 32;

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

function tensorToEmbeddings(output: any, batchSize: number): Float32Array[] {
    const dims: number[] = Array.isArray(output?.dims) ? output.dims : [];
    const rawData = output?.data;

    if (!dims.length || rawData == null) {
        throw new Error('embedder: unexpected tensor output from feature-extraction pipeline');
    }

    const data =
        rawData instanceof Float32Array
            ? rawData
            : Float32Array.from(rawData as ArrayLike<number>);
    const rowSize = dims[dims.length - 1] ?? EMBED_DIM;
    const rows = dims[0] ?? batchSize;

    if (rows !== batchSize) {
        throw new Error(`embedder: batch size mismatch (${rows} !== ${batchSize})`);
    }

    if (rowSize !== EMBED_DIM) {
        throw new Error(`embedder: expected ${EMBED_DIM}-dim embeddings, got ${rowSize}`);
    }

    const embeddings: Float32Array[] = new Array(batchSize);
    for (let i = 0; i < batchSize; i++) {
        const start = i * rowSize;
        const end = start + rowSize;
        embeddings[i] = normalizeVector(data.slice(start, end));
    }

    return embeddings;
}

/**
 * Embed a batch of texts. Returns normalized Float32Array[] (384-dim each).
 */
export async function embedBatch(texts: string[]): Promise<Float32Array[]> {
    if (texts.length === 0) return [];
    if (!embedPipeline) await initEmbedder();

    const results: Float32Array[] = [];
    for (let i = 0; i < texts.length; i += EMBED_BATCH_SIZE) {
        const chunk = texts.slice(i, i + EMBED_BATCH_SIZE);
        const output = await embedPipeline(chunk, { pooling: 'mean', normalize: false });
        results.push(...tensorToEmbeddings(output, chunk.length));
    }
    return results;
}

export function isEmbedderReady(): boolean {
    return embedPipeline !== null;
}
