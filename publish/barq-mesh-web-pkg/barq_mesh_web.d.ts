/* tslint:disable */
/* eslint-disable */

export class AiMesh {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    backend(): string;
    /**
     * Wipe index memory
     */
    clear(): Promise<void>;
    /**
     * Create the full standalone Mesh (pool + store).
     */
    static create(workers: number, collection_name: string, dim: number): AiMesh;
    /**
     * Pass dispatch explicitly directly through to WorkerPool
     */
    dispatch_task(task_json: string): Promise<void>;
    /**
     * Ingest full text strings. Embeddings map automatically via barq-vweb (using its ONNX MiniLM layer).
     */
    ingest_texts(texts_json: string): Promise<number>;
    /**
     * Save the underlying index to OPFS
     */
    persist(): Promise<string>;
    pool_stats(): string;
    /**
     * Load the underlying index from OPFS
     */
    restore(): Promise<string>;
    retrieve(query_vec_json: string, top_k: number): Promise<string>;
    /**
     * Perform a hybrid search combining BM25 keyword matching + HNSW kNN. Results reranked via RRF.
     */
    retrieve_hybrid(query: string, top_k: number): Promise<string>;
    /**
     * Run the Antigravity Agent loop (Planner -> Executor -> Verifier -> Critic)
     */
    run_pipeline(prompt: string): Promise<string>;
    shutdown(): Promise<void>;
    vector_count(): number;
}

/**
 * `BarqMeshWeb` is the main entry point for Phase 1.
 *
 * It combines:
 * - **barq-vweb** (HNSW vector DB, browser-native)
 * - **barq-wasm** (SIMD compute kernels - `vector_normalize`, `mean`, `std_dev`)
 *
 * Data flow:
 * ```
 * raw Vec<f32>
 *   → barq-wasm::vector_normalize()   (L2 normalise)
 *   → pack into js_sys::Float32Array
 *   → barq-vweb::insert_vectors()     (HNSW index)
 *
 * query Vec<f32>
 *   → barq-wasm::vector_normalize()
 *   → barq-vweb::search_vector()      (kNN)
 *   → Vec<SearchResult { id, score }>
 * ```
 */
export class BarqMeshWeb {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Active compute backend + SIMD tier string from barq-vweb.
     */
    backend_info(): string;
    /**
     * Wipe the in-memory collection.
     */
    clear(): Promise<void>;
    /**
     * Name of the current collection.
     */
    collection_name(): string;
    /**
     * Number of vectors currently indexed.
     */
    count(): number;
    /**
     * Configured embedding dimension.
     */
    dim(): number;
    /**
     * Compute embedding quality stats for `raw_vec` using barq-wasm.
     *
     * Returns `{ mean, std_dev, norm, dim }` as a JSON string.
     */
    embedding_stats(raw_vec: Float32Array): string;
    /**
     * Insert texts into barq-vweb, automatically computing MiniLM embeddings + BM25 index.
     */
    ingest_texts(texts: string[]): Promise<number>;
    /**
     * Restore the HNSW index from OPFS.
     */
    load(): Promise<string>;
    /**
     * Create a new mesh instance backed by `barq-vweb`.
     *
     * - `collection_name`: name of the HNSW collection.
     * - `dim`: embedding dimension (must match inserted vectors).
     */
    constructor(collection_name: string, dim: number);
    /**
     * Hybrid or dense text search via barq-vweb.
     */
    retrieve_hybrid(query: string, top_k: number): Promise<string>;
    /**
     * Persist the HNSW index to OPFS.
     */
    save(): Promise<string>;
    /**
     * Normalise `query_vec` then run kNN search via barq-vweb.
     *
     * Returns a JSON string of `[{ id, score }]`.
     */
    search_vector(query_vec: Float32Array, top_k: number): Promise<string>;
    /**
     * Normalise `raw_vec` with barq-wasm SIMD, then insert into barq-vweb HNSW.
     *
     * Returns the new total vector count.
     */
    upsert_vector(raw_vec: Float32Array, id: number): Promise<number>;
    /**
     * Batch insert: normalise each vector, then call barq-vweb once.
     *
     * - `flat_vecs`: all vectors packed flat (length = n × dim)
     * - `ids`      : u32 ID for each vector (length = n)
     *
     * Returns the new total vector count.
     */
    upsert_vectors(flat_vecs: Float32Array, ids: Uint32Array): Promise<number>;
}

export enum LlmProvider {
    WebLlm = 0,
    OpenRouter = 1,
}

export class LlmRouter {
    free(): void;
    [Symbol.dispose](): void;
    constructor(provider_str: string);
    /**
     * Prepares an LLM request by augmenting the prompt with RAG context if enabled.
     * The actual model execution happens in JavaScript due to WebGPU / Fetch API ease.
     */
    prepare_rag_prompt(mesh: AiMesh, prompt: string): Promise<string>;
    /**
     * Semantic Verification of LLM Output via barq-wasm
     */
    verify_output_semantically(expected_embedding_json: string, actual_embedding_json: string): number;
}

export class McpServer {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Handles incoming MCP JSON-RPC payload asynchronously
     */
    handle_request(request_json: string): Promise<string>;
    constructor(mesh: AiMesh);
}

export class TopologyManager {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Claim leadership over OPFS persisting.
     */
    claim_leadership(): void;
    /**
     * Retrieve local leadership status
     */
    is_leader(): boolean;
    constructor(id: string);
}

export class WorkerPool {
    free(): void;
    [Symbol.dispose](): void;
    dispatch_js(task_json: string, store: BarqMeshWeb): Promise<void>;
    get_stats(): string;
    constructor(count: number);
}

export class WorkerStats {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    busy: number;
    completed: number;
    queued: number;
    workers: number;
}

/**
 * Argmax: index of maximum value with 4-wide tracking
 */
export function argmax(a: Float32Array): number;

/**
 * Argmin: index of minimum value with 4-wide tracking
 */
export function argmin(a: Float32Array): number;

/**
 * Average pooling 2D
 */
export function avg_pooling_2d(input: Float32Array, width: number, height: number, pool_size: number): Float32Array;

/**
 * Batch normalization: (x - mean) / sqrt(var + eps) * gamma + beta
 */
export function batch_normalize(input: Float32Array, gamma: number, beta: number, epsilon: number): Float32Array;

/**
 * High-performance Conv2D with fused operations
 * - im2col memory layout for sequential access
 * - Tiled processing for L1 cache
 *
 * Target: 3-4x faster than naive nested loops
 */
export function conv2d_optimized(input: Float32Array, kernel: Float32Array, width: number, height: number, kernel_size: number): Float32Array;

/**
 * Scalar convolution (baseline)
 */
export function conv2d_scalar(input: Float32Array, kernel: Float32Array, width: number, height: number, kernel_size: number): Float32Array;

/**
 * Scalar cosine similarity (baseline)
 */
export function cosine_similarity_scalar(a: Float32Array, b: Float32Array): number;

/**
 * High-performance cosine similarity using shared dot product kernel
 */
export function cosine_similarity_simd(a: Float32Array, b: Float32Array): number;

/**
 * Dequantize INT8 back to float32
 */
export function dequantize_int8(input: Int8Array, scale: number): Float32Array;

/**
 * Scalar dot product (baseline)
 */
export function dot_product_scalar(a: Float32Array, b: Float32Array): number;

/**
 * Ultra-fast dot product with 16-wide unrolling and unsafe pointer access
 * Uses 16 independent accumulators to saturate CPU execution ports
 * Target: 3-4x faster than naive scalar
 */
export function dot_product_simd(a: Float32Array, b: Float32Array): number;

/**
 * Euclidean distance between two vectors
 */
export function euclidean_distance(a: Float32Array, b: Float32Array): number;

/**
 * Leaky ReLU activation function with 8-wide unrolling
 */
export function leaky_relu(a: Float32Array, alpha: number): Float32Array;

/**
 * Ultra-fast LZ4 compression with minimal overhead
 * Key insight: For buffers under ~128KB, the overhead of ANY compression
 * algorithm (hash tables, match finding, token encoding) exceeds the
 * benefit because JavaScript's baseline is essentially an optimized memcpy.
 *
 * Strategy:
 * - Buffers < 128KB: Direct copy (matches JS memcpy performance)
 * - Buffers >= 128KB: Full LZ4 algorithm (compression savings > overhead)
 */
export function lz4_compress_optimized(input: Uint8Array): Uint8Array;

/**
 * Scalar LZ4 compression (baseline)
 */
export function lz4_compress_scalar(input: Uint8Array): Uint8Array;

/**
 * Manhattan distance (L1 norm) between two vectors
 */
export function manhattan_distance(a: Float32Array, b: Float32Array): number;

/**
 * Matrix addition: C = A + B
 */
export function matrix_add(a: Float32Array, b: Float32Array): Float32Array;

/**
 * Scalar matrix multiplication (baseline)
 */
export function matrix_multiply_scalar(a: Float32Array, b: Float32Array, n: number): Float32Array;

/**
 * High-performance matrix multiplication with multi-level cache tiling
 * Uses 32x32 tiles (fits in L1), processes in k-i-j order for row-major optimization
 * Target: 6-8x faster than naive O(n³)
 */
export function matrix_multiply_tiled(a: Float32Array, b: Float32Array, n: number): Float32Array;

/**
 * Matrix scalar multiplication: C = A * scalar
 */
export function matrix_scalar_multiply(a: Float32Array, scalar: number): Float32Array;

/**
 * Matrix transpose (n x m -> m x n) with unsafe pointer access for speed
 */
export function matrix_transpose(a: Float32Array, rows: number, cols: number): Float32Array;

/**
 * Max pooling 2D (stride = kernel_size for non-overlapping)
 */
export function max_pooling_2d(input: Float32Array, width: number, height: number, pool_size: number): Float32Array;

/**
 * Compute mean of a vector
 */
export function mean(a: Float32Array): number;

/**
 * Scalar INT8 quantization (baseline)
 */
export function quantize_int8_scalar(input: Float32Array, scale: number): Int8Array;

/**
 * Native WASM SIMD INT8 quantization using v128 instructions
 * Processes 4 floats at a time using f32x4 SIMD operations
 * Target: 0.5-0.8ms (3x faster than scalar)
 */
export function quantize_int8_simd(input: Float32Array, scale: number): Int8Array;

/**
 * ReLU activation function
 */
export function relu(a: Float32Array): Float32Array;

/**
 * Sigmoid activation function
 */
export function sigmoid(a: Float32Array): Float32Array;

/**
 * Softmax function (numerically stable)
 */
export function softmax(a: Float32Array): Float32Array;

/**
 * Compute standard deviation
 */
export function std_dev(a: Float32Array): number;

/**
 * Compute variance of a vector
 */
export function variance(a: Float32Array): number;

/**
 * Vector addition: c = a + b
 */
export function vector_add(a: Float32Array, b: Float32Array): Float32Array;

/**
 * Clamp vector values between min and max
 */
export function vector_clamp(a: Float32Array, min_val: number, max_val: number): Float32Array;

/**
 * Element-wise multiplication (Hadamard product): c = a * b
 */
export function vector_elementwise_multiply(a: Float32Array, b: Float32Array): Float32Array;

/**
 * Find maximum value in a vector with 8-wide unrolling
 */
export function vector_max(a: Float32Array): number;

/**
 * Find minimum value in a vector with 8-wide unrolling
 */
export function vector_min(a: Float32Array): number;

/**
 * Scalar vector norm (baseline)
 */
export function vector_norm_scalar(a: Float32Array): number;

/**
 * High-performance L2 norm with 8-wide accumulation
 */
export function vector_norm_simd(a: Float32Array): number;

/**
 * Normalize vector to unit length
 */
export function vector_normalize(a: Float32Array): Float32Array;

/**
 * Vector scaling: c = a * scalar
 */
export function vector_scale(a: Float32Array, scalar: number): Float32Array;

/**
 * Vector subtraction: c = a - b
 */
export function vector_subtract(a: Float32Array, b: Float32Array): Float32Array;

/**
 * Sum of all elements in a vector
 */
export function vector_sum(a: Float32Array): number;

/**
 * Called automatically when the WASM module is instantiated.
 * Sets up the panic hook so Rust panics surface in the browser console.
 */
export function wasm_start(): void;

export function worker_entry_point(worker_id: number, port: MessagePort): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_aimesh_free: (a: number, b: number) => void;
    readonly aimesh_backend: (a: number) => [number, number];
    readonly aimesh_clear: (a: number) => any;
    readonly aimesh_create: (a: number, b: number, c: number, d: number) => [number, number, number];
    readonly aimesh_dispatch_task: (a: number, b: number, c: number) => any;
    readonly aimesh_ingest_texts: (a: number, b: number, c: number) => any;
    readonly aimesh_persist: (a: number) => any;
    readonly aimesh_pool_stats: (a: number) => [number, number];
    readonly aimesh_restore: (a: number) => any;
    readonly aimesh_retrieve: (a: number, b: number, c: number, d: number) => any;
    readonly aimesh_retrieve_hybrid: (a: number, b: number, c: number, d: number) => any;
    readonly aimesh_run_pipeline: (a: number, b: number, c: number) => any;
    readonly aimesh_shutdown: (a: number) => any;
    readonly aimesh_vector_count: (a: number) => number;
    readonly __wbg_get_workerstats_busy: (a: number) => number;
    readonly __wbg_get_workerstats_completed: (a: number) => number;
    readonly __wbg_get_workerstats_queued: (a: number) => number;
    readonly __wbg_get_workerstats_workers: (a: number) => number;
    readonly __wbg_set_workerstats_busy: (a: number, b: number) => void;
    readonly __wbg_set_workerstats_completed: (a: number, b: number) => void;
    readonly __wbg_set_workerstats_queued: (a: number, b: number) => void;
    readonly __wbg_set_workerstats_workers: (a: number, b: number) => void;
    readonly __wbg_workerpool_free: (a: number, b: number) => void;
    readonly __wbg_workerstats_free: (a: number, b: number) => void;
    readonly workerpool_dispatch_js: (a: number, b: number, c: number, d: number) => any;
    readonly workerpool_get_stats: (a: number) => [number, number];
    readonly workerpool_new_js: (a: number) => [number, number, number];
    readonly __wbg_mcpserver_free: (a: number, b: number) => void;
    readonly mcpserver_handle_request: (a: number, b: number, c: number) => any;
    readonly mcpserver_new: (a: number) => number;
    readonly __wbg_topologymanager_free: (a: number, b: number) => void;
    readonly topologymanager_claim_leadership: (a: number) => [number, number];
    readonly topologymanager_is_leader: (a: number) => number;
    readonly topologymanager_new: (a: number, b: number) => [number, number, number];
    readonly worker_entry_point: (a: number, b: any) => [number, number];
    readonly wasm_start: () => void;
    readonly __wbg_barqmeshweb_free: (a: number, b: number) => void;
    readonly __wbg_llmrouter_free: (a: number, b: number) => void;
    readonly barqmeshweb_backend_info: (a: number) => [number, number];
    readonly barqmeshweb_clear: (a: number) => any;
    readonly barqmeshweb_collection_name: (a: number) => [number, number];
    readonly barqmeshweb_count: (a: number) => number;
    readonly barqmeshweb_dim: (a: number) => number;
    readonly barqmeshweb_embedding_stats: (a: number, b: number, c: number) => [number, number];
    readonly barqmeshweb_ingest_texts: (a: number, b: number, c: number) => any;
    readonly barqmeshweb_load: (a: number) => any;
    readonly barqmeshweb_new: (a: number, b: number, c: number) => number;
    readonly barqmeshweb_retrieve_hybrid: (a: number, b: number, c: number, d: number) => any;
    readonly barqmeshweb_save: (a: number) => any;
    readonly barqmeshweb_search_vector: (a: number, b: number, c: number, d: number) => any;
    readonly barqmeshweb_upsert_vector: (a: number, b: number, c: number, d: number) => any;
    readonly barqmeshweb_upsert_vectors: (a: number, b: number, c: number, d: number, e: number) => any;
    readonly llmrouter_new: (a: number, b: number) => number;
    readonly llmrouter_prepare_rag_prompt: (a: number, b: number, c: number, d: number) => any;
    readonly llmrouter_verify_output_semantically: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly argmax: (a: number, b: number) => number;
    readonly argmin: (a: number, b: number) => number;
    readonly avg_pooling_2d: (a: number, b: number, c: number, d: number, e: number) => [number, number];
    readonly batch_normalize: (a: number, b: number, c: number, d: number, e: number) => [number, number];
    readonly conv2d_optimized: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => [number, number];
    readonly conv2d_scalar: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => [number, number];
    readonly cosine_similarity_scalar: (a: number, b: number, c: number, d: number) => number;
    readonly cosine_similarity_simd: (a: number, b: number, c: number, d: number) => number;
    readonly dequantize_int8: (a: number, b: number, c: number) => [number, number];
    readonly dot_product_scalar: (a: number, b: number, c: number, d: number) => number;
    readonly dot_product_simd: (a: number, b: number, c: number, d: number) => number;
    readonly euclidean_distance: (a: number, b: number, c: number, d: number) => number;
    readonly leaky_relu: (a: number, b: number, c: number) => [number, number];
    readonly lz4_compress_optimized: (a: number, b: number) => [number, number];
    readonly lz4_compress_scalar: (a: number, b: number) => [number, number];
    readonly manhattan_distance: (a: number, b: number, c: number, d: number) => number;
    readonly matrix_add: (a: number, b: number, c: number, d: number) => [number, number];
    readonly matrix_multiply_scalar: (a: number, b: number, c: number, d: number, e: number) => [number, number];
    readonly matrix_multiply_tiled: (a: number, b: number, c: number, d: number, e: number) => [number, number];
    readonly matrix_scalar_multiply: (a: number, b: number, c: number) => [number, number];
    readonly matrix_transpose: (a: number, b: number, c: number, d: number) => [number, number];
    readonly max_pooling_2d: (a: number, b: number, c: number, d: number, e: number) => [number, number];
    readonly mean: (a: number, b: number) => number;
    readonly quantize_int8_scalar: (a: number, b: number, c: number) => [number, number];
    readonly quantize_int8_simd: (a: number, b: number, c: number) => [number, number];
    readonly relu: (a: number, b: number) => [number, number];
    readonly sigmoid: (a: number, b: number) => [number, number];
    readonly softmax: (a: number, b: number) => [number, number];
    readonly std_dev: (a: number, b: number) => number;
    readonly variance: (a: number, b: number) => number;
    readonly vector_clamp: (a: number, b: number, c: number, d: number) => [number, number];
    readonly vector_elementwise_multiply: (a: number, b: number, c: number, d: number) => [number, number];
    readonly vector_max: (a: number, b: number) => number;
    readonly vector_min: (a: number, b: number) => number;
    readonly vector_norm_scalar: (a: number, b: number) => number;
    readonly vector_norm_simd: (a: number, b: number) => number;
    readonly vector_normalize: (a: number, b: number) => [number, number];
    readonly vector_subtract: (a: number, b: number, c: number, d: number) => [number, number];
    readonly vector_sum: (a: number, b: number) => number;
    readonly vector_add: (a: number, b: number, c: number, d: number) => [number, number];
    readonly vector_scale: (a: number, b: number, c: number) => [number, number];
    readonly wasm_bindgen__closure__destroy__h1d445af615150f9b: (a: number, b: number) => void;
    readonly wasm_bindgen__closure__destroy__h9f3f5407e05f3b9c: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h82cd9d64b5eba286: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__ha1907031a984f678: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h9c8bf75437b40c01: (a: number, b: number, c: any) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
