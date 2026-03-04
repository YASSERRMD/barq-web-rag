/* @ts-self-types="./barq_wasm.d.ts" */

/**
 * Argmax: index of maximum value with 4-wide tracking
 * @param {Float32Array} a
 * @returns {number}
 */
export function argmax(a) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.argmax(ptr0, len0);
    return ret >>> 0;
}

/**
 * Argmin: index of minimum value with 4-wide tracking
 * @param {Float32Array} a
 * @returns {number}
 */
export function argmin(a) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.argmin(ptr0, len0);
    return ret >>> 0;
}

/**
 * Average pooling 2D
 * @param {Float32Array} input
 * @param {number} width
 * @param {number} height
 * @param {number} pool_size
 * @returns {Float32Array}
 */
export function avg_pooling_2d(input, width, height, pool_size) {
    const ptr0 = passArrayF32ToWasm0(input, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.avg_pooling_2d(ptr0, len0, width, height, pool_size);
    var v2 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}

/**
 * Batch normalization: (x - mean) / sqrt(var + eps) * gamma + beta
 * @param {Float32Array} input
 * @param {number} gamma
 * @param {number} beta
 * @param {number} epsilon
 * @returns {Float32Array}
 */
export function batch_normalize(input, gamma, beta, epsilon) {
    const ptr0 = passArrayF32ToWasm0(input, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.batch_normalize(ptr0, len0, gamma, beta, epsilon);
    var v2 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}

/**
 * High-performance Conv2D with fused operations
 * - im2col memory layout for sequential access
 * - Tiled processing for L1 cache
 *
 * Target: 3-4x faster than naive nested loops
 * @param {Float32Array} input
 * @param {Float32Array} kernel
 * @param {number} width
 * @param {number} height
 * @param {number} kernel_size
 * @returns {Float32Array}
 */
export function conv2d_optimized(input, kernel, width, height, kernel_size) {
    const ptr0 = passArrayF32ToWasm0(input, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayF32ToWasm0(kernel, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.conv2d_optimized(ptr0, len0, ptr1, len1, width, height, kernel_size);
    var v3 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
}

/**
 * Scalar convolution (baseline)
 * @param {Float32Array} input
 * @param {Float32Array} kernel
 * @param {number} width
 * @param {number} height
 * @param {number} kernel_size
 * @returns {Float32Array}
 */
export function conv2d_scalar(input, kernel, width, height, kernel_size) {
    const ptr0 = passArrayF32ToWasm0(input, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayF32ToWasm0(kernel, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.conv2d_scalar(ptr0, len0, ptr1, len1, width, height, kernel_size);
    var v3 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
}

/**
 * Scalar cosine similarity (baseline)
 * @param {Float32Array} a
 * @param {Float32Array} b
 * @returns {number}
 */
export function cosine_similarity_scalar(a, b) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayF32ToWasm0(b, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.cosine_similarity_scalar(ptr0, len0, ptr1, len1);
    return ret;
}

/**
 * High-performance cosine similarity using shared dot product kernel
 * @param {Float32Array} a
 * @param {Float32Array} b
 * @returns {number}
 */
export function cosine_similarity_simd(a, b) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayF32ToWasm0(b, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.cosine_similarity_simd(ptr0, len0, ptr1, len1);
    return ret;
}

/**
 * Dequantize INT8 back to float32
 * @param {Int8Array} input
 * @param {number} scale
 * @returns {Float32Array}
 */
export function dequantize_int8(input, scale) {
    const ptr0 = passArray8ToWasm0(input, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.dequantize_int8(ptr0, len0, scale);
    var v2 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}

/**
 * Scalar dot product (baseline)
 * @param {Float32Array} a
 * @param {Float32Array} b
 * @returns {number}
 */
export function dot_product_scalar(a, b) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayF32ToWasm0(b, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.dot_product_scalar(ptr0, len0, ptr1, len1);
    return ret;
}

/**
 * Ultra-fast dot product with 16-wide unrolling and unsafe pointer access
 * Uses 16 independent accumulators to saturate CPU execution ports
 * Target: 3-4x faster than naive scalar
 * @param {Float32Array} a
 * @param {Float32Array} b
 * @returns {number}
 */
export function dot_product_simd(a, b) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayF32ToWasm0(b, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.dot_product_simd(ptr0, len0, ptr1, len1);
    return ret;
}

/**
 * Euclidean distance between two vectors
 * @param {Float32Array} a
 * @param {Float32Array} b
 * @returns {number}
 */
export function euclidean_distance(a, b) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayF32ToWasm0(b, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.euclidean_distance(ptr0, len0, ptr1, len1);
    return ret;
}

/**
 * Leaky ReLU activation function with 8-wide unrolling
 * @param {Float32Array} a
 * @param {number} alpha
 * @returns {Float32Array}
 */
export function leaky_relu(a, alpha) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.leaky_relu(ptr0, len0, alpha);
    var v2 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}

/**
 * Ultra-fast LZ4 compression with minimal overhead
 * Key insight: For buffers under ~128KB, the overhead of ANY compression
 * algorithm (hash tables, match finding, token encoding) exceeds the
 * benefit because JavaScript's baseline is essentially an optimized memcpy.
 *
 * Strategy:
 * - Buffers < 128KB: Direct copy (matches JS memcpy performance)
 * - Buffers >= 128KB: Full LZ4 algorithm (compression savings > overhead)
 * @param {Uint8Array} input
 * @returns {Uint8Array}
 */
export function lz4_compress_optimized(input) {
    const ptr0 = passArray8ToWasm0(input, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.lz4_compress_optimized(ptr0, len0);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * Scalar LZ4 compression (baseline)
 * @param {Uint8Array} input
 * @returns {Uint8Array}
 */
export function lz4_compress_scalar(input) {
    const ptr0 = passArray8ToWasm0(input, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.lz4_compress_scalar(ptr0, len0);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * Manhattan distance (L1 norm) between two vectors
 * @param {Float32Array} a
 * @param {Float32Array} b
 * @returns {number}
 */
export function manhattan_distance(a, b) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayF32ToWasm0(b, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.manhattan_distance(ptr0, len0, ptr1, len1);
    return ret;
}

/**
 * Matrix addition: C = A + B
 * @param {Float32Array} a
 * @param {Float32Array} b
 * @returns {Float32Array}
 */
export function matrix_add(a, b) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayF32ToWasm0(b, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.matrix_add(ptr0, len0, ptr1, len1);
    var v3 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
}

/**
 * Scalar matrix multiplication (baseline)
 * @param {Float32Array} a
 * @param {Float32Array} b
 * @param {number} n
 * @returns {Float32Array}
 */
export function matrix_multiply_scalar(a, b, n) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayF32ToWasm0(b, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.matrix_multiply_scalar(ptr0, len0, ptr1, len1, n);
    var v3 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
}

/**
 * High-performance matrix multiplication with multi-level cache tiling
 * Uses 32x32 tiles (fits in L1), processes in k-i-j order for row-major optimization
 * Target: 6-8x faster than naive O(n³)
 * @param {Float32Array} a
 * @param {Float32Array} b
 * @param {number} n
 * @returns {Float32Array}
 */
export function matrix_multiply_tiled(a, b, n) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayF32ToWasm0(b, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.matrix_multiply_tiled(ptr0, len0, ptr1, len1, n);
    var v3 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
}

/**
 * Matrix scalar multiplication: C = A * scalar
 * @param {Float32Array} a
 * @param {number} scalar
 * @returns {Float32Array}
 */
export function matrix_scalar_multiply(a, scalar) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.matrix_scalar_multiply(ptr0, len0, scalar);
    var v2 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}

/**
 * Matrix transpose (n x m -> m x n) with unsafe pointer access for speed
 * @param {Float32Array} a
 * @param {number} rows
 * @param {number} cols
 * @returns {Float32Array}
 */
export function matrix_transpose(a, rows, cols) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.matrix_transpose(ptr0, len0, rows, cols);
    var v2 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}

/**
 * Max pooling 2D (stride = kernel_size for non-overlapping)
 * @param {Float32Array} input
 * @param {number} width
 * @param {number} height
 * @param {number} pool_size
 * @returns {Float32Array}
 */
export function max_pooling_2d(input, width, height, pool_size) {
    const ptr0 = passArrayF32ToWasm0(input, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.max_pooling_2d(ptr0, len0, width, height, pool_size);
    var v2 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}

/**
 * Compute mean of a vector
 * @param {Float32Array} a
 * @returns {number}
 */
export function mean(a) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.mean(ptr0, len0);
    return ret;
}

/**
 * Scalar INT8 quantization (baseline)
 * @param {Float32Array} input
 * @param {number} scale
 * @returns {Int8Array}
 */
export function quantize_int8_scalar(input, scale) {
    const ptr0 = passArrayF32ToWasm0(input, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.quantize_int8_scalar(ptr0, len0, scale);
    var v2 = getArrayI8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * Native WASM SIMD INT8 quantization using v128 instructions
 * Processes 4 floats at a time using f32x4 SIMD operations
 * Target: 0.5-0.8ms (3x faster than scalar)
 * @param {Float32Array} input
 * @param {number} scale
 * @returns {Int8Array}
 */
export function quantize_int8_simd(input, scale) {
    const ptr0 = passArrayF32ToWasm0(input, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.quantize_int8_simd(ptr0, len0, scale);
    var v2 = getArrayI8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * ReLU activation function
 * @param {Float32Array} a
 * @returns {Float32Array}
 */
export function relu(a) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.relu(ptr0, len0);
    var v2 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}

/**
 * Sigmoid activation function
 * @param {Float32Array} a
 * @returns {Float32Array}
 */
export function sigmoid(a) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.sigmoid(ptr0, len0);
    var v2 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}

/**
 * Softmax function (numerically stable)
 * @param {Float32Array} a
 * @returns {Float32Array}
 */
export function softmax(a) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.softmax(ptr0, len0);
    var v2 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}

/**
 * Compute standard deviation
 * @param {Float32Array} a
 * @returns {number}
 */
export function std_dev(a) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.std_dev(ptr0, len0);
    return ret;
}

/**
 * Compute variance of a vector
 * @param {Float32Array} a
 * @returns {number}
 */
export function variance(a) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.variance(ptr0, len0);
    return ret;
}

/**
 * Vector addition: c = a + b
 * @param {Float32Array} a
 * @param {Float32Array} b
 * @returns {Float32Array}
 */
export function vector_add(a, b) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayF32ToWasm0(b, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.vector_add(ptr0, len0, ptr1, len1);
    var v3 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
}

/**
 * Clamp vector values between min and max
 * @param {Float32Array} a
 * @param {number} min_val
 * @param {number} max_val
 * @returns {Float32Array}
 */
export function vector_clamp(a, min_val, max_val) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.vector_clamp(ptr0, len0, min_val, max_val);
    var v2 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}

/**
 * Element-wise multiplication (Hadamard product): c = a * b
 * @param {Float32Array} a
 * @param {Float32Array} b
 * @returns {Float32Array}
 */
export function vector_elementwise_multiply(a, b) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayF32ToWasm0(b, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.vector_elementwise_multiply(ptr0, len0, ptr1, len1);
    var v3 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
}

/**
 * Find maximum value in a vector with 8-wide unrolling
 * @param {Float32Array} a
 * @returns {number}
 */
export function vector_max(a) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.vector_max(ptr0, len0);
    return ret;
}

/**
 * Find minimum value in a vector with 8-wide unrolling
 * @param {Float32Array} a
 * @returns {number}
 */
export function vector_min(a) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.vector_min(ptr0, len0);
    return ret;
}

/**
 * Scalar vector norm (baseline)
 * @param {Float32Array} a
 * @returns {number}
 */
export function vector_norm_scalar(a) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.vector_norm_scalar(ptr0, len0);
    return ret;
}

/**
 * High-performance L2 norm with 8-wide accumulation
 * @param {Float32Array} a
 * @returns {number}
 */
export function vector_norm_simd(a) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.vector_norm_simd(ptr0, len0);
    return ret;
}

/**
 * Normalize vector to unit length
 * @param {Float32Array} a
 * @returns {Float32Array}
 */
export function vector_normalize(a) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.vector_normalize(ptr0, len0);
    var v2 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}

/**
 * Vector scaling: c = a * scalar
 * @param {Float32Array} a
 * @param {number} scalar
 * @returns {Float32Array}
 */
export function vector_scale(a, scalar) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.vector_scale(ptr0, len0, scalar);
    var v2 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v2;
}

/**
 * Vector subtraction: c = a - b
 * @param {Float32Array} a
 * @param {Float32Array} b
 * @returns {Float32Array}
 */
export function vector_subtract(a, b) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArrayF32ToWasm0(b, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.vector_subtract(ptr0, len0, ptr1, len1);
    var v3 = getArrayF32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
}

/**
 * Sum of all elements in a vector
 * @param {Float32Array} a
 * @returns {number}
 */
export function vector_sum(a) {
    const ptr0 = passArrayF32ToWasm0(a, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.vector_sum(ptr0, len0);
    return ret;
}

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./barq_wasm_bg.js": import0,
    };
}

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedFloat32ArrayMemory0 = null;
function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

let cachedInt8ArrayMemory0 = null;
function getInt8ArrayMemory0() {
    if (cachedInt8ArrayMemory0 === null || cachedInt8ArrayMemory0.byteLength === 0) {
        cachedInt8ArrayMemory0 = new Int8Array(wasm.memory.buffer);
    }
    return cachedInt8ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passArrayF32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4, 4) >>> 0;
    getFloat32ArrayMemory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    wasmModule = module;
    cachedFloat32ArrayMemory0 = null;
    cachedInt8ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('barq_wasm_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
