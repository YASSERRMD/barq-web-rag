/**
 * barqWasm.ts — Singleton wrapper for the barq-wasm SIMD-accelerated compute module.
 * Provides typed wrappers for vector operations used in the embedding pipeline.
 */

let wasmMod: any = null;
let initPromise: Promise<void> | null = null;

export async function initBarqWasm(): Promise<void> {
    if (wasmMod) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        const mod = await import('barq-wasm');
        await (mod as any).default();
        wasmMod = mod;
        console.log('[barq-wasm] SIMD compute module initialised');
    })();

    return initPromise;
}

function assertReady() {
    if (!wasmMod) throw new Error('barq-wasm: call initBarqWasm() first');
}

/**
 * Normalize a Float32Array in-place to unit length (L2 norm = 1).
 * Uses barq-wasm's SIMD-accelerated vector_normalize.
 */
export function normalizeVector(v: Float32Array): Float32Array {
    assertReady();
    const result: Float32Array = wasmMod.vector_normalize(v);
    return result;
}

/**
 * Compute cosine similarity between two unit-normalized vectors.
 * Fast path: uses barq-wasm's 16-wide unrolled dot_product_simd.
 */
export function cosineSimilarity(a: Float32Array, b: Float32Array): number {
    assertReady();
    return wasmMod.cosine_similarity_simd(a, b);
}

/**
 * Compute dot product of two vectors using barq-wasm SIMD.
 */
export function dotProduct(a: Float32Array, b: Float32Array): number {
    assertReady();
    return wasmMod.dot_product_simd(a, b);
}

/**
 * Compute L2 norm of a vector using barq-wasm SIMD.
 */
export function vectorNorm(v: Float32Array): number {
    assertReady();
    return wasmMod.vector_norm_simd(v);
}

export function isBarqWasmReady(): boolean {
    return wasmMod !== null;
}
