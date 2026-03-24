/* @ts-self-types="./barq_mesh_web.d.ts" */
import { BarqVWeb } from 'barq-vweb';

export class AiMesh {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(AiMesh.prototype);
        obj.__wbg_ptr = ptr;
        AiMeshFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        AiMeshFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_aimesh_free(ptr, 0);
    }
    /**
     * @returns {string}
     */
    backend() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.aimesh_backend(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Wipe index memory
     * @returns {Promise<void>}
     */
    clear() {
        const ret = wasm.aimesh_clear(this.__wbg_ptr);
        return ret;
    }
    /**
     * Create the full standalone Mesh (pool + store).
     * @param {number} workers
     * @param {string} collection_name
     * @param {number} dim
     * @returns {AiMesh}
     */
    static create(workers, collection_name, dim) {
        const ptr0 = passStringToWasm0(collection_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.aimesh_create(workers, ptr0, len0, dim);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return AiMesh.__wrap(ret[0]);
    }
    /**
     * Pass dispatch explicitly directly through to WorkerPool
     * @param {string} task_json
     * @returns {Promise<void>}
     */
    dispatch_task(task_json) {
        const ptr0 = passStringToWasm0(task_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.aimesh_dispatch_task(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * Ingest full text strings. Embeddings map automatically via barq-vweb (using its ONNX MiniLM layer).
     * @param {string} texts_json
     * @returns {Promise<number>}
     */
    ingest_texts(texts_json) {
        const ptr0 = passStringToWasm0(texts_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.aimesh_ingest_texts(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * Save the underlying index to OPFS
     * @returns {Promise<string>}
     */
    persist() {
        const ret = wasm.aimesh_persist(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {string}
     */
    pool_stats() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.aimesh_pool_stats(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Load the underlying index from OPFS
     * @returns {Promise<string>}
     */
    restore() {
        const ret = wasm.aimesh_restore(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {string} query_vec_json
     * @param {number} top_k
     * @returns {Promise<string>}
     */
    retrieve(query_vec_json, top_k) {
        const ptr0 = passStringToWasm0(query_vec_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.aimesh_retrieve(this.__wbg_ptr, ptr0, len0, top_k);
        return ret;
    }
    /**
     * Perform a hybrid search combining BM25 keyword matching + HNSW kNN. Results reranked via RRF.
     * @param {string} query
     * @param {number} top_k
     * @returns {Promise<string>}
     */
    retrieve_hybrid(query, top_k) {
        const ptr0 = passStringToWasm0(query, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.aimesh_retrieve_hybrid(this.__wbg_ptr, ptr0, len0, top_k);
        return ret;
    }
    /**
     * Run the Antigravity Agent loop (Planner -> Executor -> Verifier -> Critic)
     * @param {string} prompt
     * @returns {Promise<string>}
     */
    run_pipeline(prompt) {
        const ptr0 = passStringToWasm0(prompt, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.aimesh_run_pipeline(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * @returns {Promise<void>}
     */
    shutdown() {
        const ret = wasm.aimesh_shutdown(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    vector_count() {
        const ret = wasm.aimesh_vector_count(this.__wbg_ptr);
        return ret >>> 0;
    }
}
if (Symbol.dispose) AiMesh.prototype[Symbol.dispose] = AiMesh.prototype.free;

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
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        BarqMeshWebFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_barqmeshweb_free(ptr, 0);
    }
    /**
     * Active compute backend + SIMD tier string from barq-vweb.
     * @returns {string}
     */
    backend_info() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.barqmeshweb_backend_info(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Wipe the in-memory collection.
     * @returns {Promise<void>}
     */
    clear() {
        const ret = wasm.barqmeshweb_clear(this.__wbg_ptr);
        return ret;
    }
    /**
     * Name of the current collection.
     * @returns {string}
     */
    collection_name() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.barqmeshweb_collection_name(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Number of vectors currently indexed.
     * @returns {number}
     */
    count() {
        const ret = wasm.barqmeshweb_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Configured embedding dimension.
     * @returns {number}
     */
    dim() {
        const ret = wasm.barqmeshweb_dim(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * Compute embedding quality stats for `raw_vec` using barq-wasm.
     *
     * Returns `{ mean, std_dev, norm, dim }` as a JSON string.
     * @param {Float32Array} raw_vec
     * @returns {string}
     */
    embedding_stats(raw_vec) {
        let deferred2_0;
        let deferred2_1;
        try {
            const ptr0 = passArrayF32ToWasm0(raw_vec, wasm.__wbindgen_malloc);
            const len0 = WASM_VECTOR_LEN;
            const ret = wasm.barqmeshweb_embedding_stats(this.__wbg_ptr, ptr0, len0);
            deferred2_0 = ret[0];
            deferred2_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * Insert texts into barq-vweb, automatically computing MiniLM embeddings + BM25 index.
     * @param {string[]} texts
     * @returns {Promise<number>}
     */
    ingest_texts(texts) {
        const ptr0 = passArrayJsValueToWasm0(texts, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.barqmeshweb_ingest_texts(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * Restore the HNSW index from OPFS.
     * @returns {Promise<string>}
     */
    load() {
        const ret = wasm.barqmeshweb_load(this.__wbg_ptr);
        return ret;
    }
    /**
     * Create a new mesh instance backed by `barq-vweb`.
     *
     * - `collection_name`: name of the HNSW collection.
     * - `dim`: embedding dimension (must match inserted vectors).
     * @param {string} collection_name
     * @param {number} dim
     */
    constructor(collection_name, dim) {
        const ptr0 = passStringToWasm0(collection_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.barqmeshweb_new(ptr0, len0, dim);
        this.__wbg_ptr = ret >>> 0;
        BarqMeshWebFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Hybrid or dense text search via barq-vweb.
     * @param {string} query
     * @param {number} top_k
     * @returns {Promise<string>}
     */
    retrieve_hybrid(query, top_k) {
        const ptr0 = passStringToWasm0(query, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.barqmeshweb_retrieve_hybrid(this.__wbg_ptr, ptr0, len0, top_k);
        return ret;
    }
    /**
     * Persist the HNSW index to OPFS.
     * @returns {Promise<string>}
     */
    save() {
        const ret = wasm.barqmeshweb_save(this.__wbg_ptr);
        return ret;
    }
    /**
     * Normalise `query_vec` then run kNN search via barq-vweb.
     *
     * Returns a JSON string of `[{ id, score }]`.
     * @param {Float32Array} query_vec
     * @param {number} top_k
     * @returns {Promise<string>}
     */
    search_vector(query_vec, top_k) {
        const ptr0 = passArrayF32ToWasm0(query_vec, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.barqmeshweb_search_vector(this.__wbg_ptr, ptr0, len0, top_k);
        return ret;
    }
    /**
     * Normalise `raw_vec` with barq-wasm SIMD, then insert into barq-vweb HNSW.
     *
     * Returns the new total vector count.
     * @param {Float32Array} raw_vec
     * @param {number} id
     * @returns {Promise<number>}
     */
    upsert_vector(raw_vec, id) {
        const ptr0 = passArrayF32ToWasm0(raw_vec, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.barqmeshweb_upsert_vector(this.__wbg_ptr, ptr0, len0, id);
        return ret;
    }
    /**
     * Batch insert: normalise each vector, then call barq-vweb once.
     *
     * - `flat_vecs`: all vectors packed flat (length = n × dim)
     * - `ids`      : u32 ID for each vector (length = n)
     *
     * Returns the new total vector count.
     * @param {Float32Array} flat_vecs
     * @param {Uint32Array} ids
     * @returns {Promise<number>}
     */
    upsert_vectors(flat_vecs, ids) {
        const ptr0 = passArrayF32ToWasm0(flat_vecs, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray32ToWasm0(ids, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.barqmeshweb_upsert_vectors(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        return ret;
    }
}
if (Symbol.dispose) BarqMeshWeb.prototype[Symbol.dispose] = BarqMeshWeb.prototype.free;

/**
 * @enum {0 | 1}
 */
export const LlmProvider = Object.freeze({
    WebLlm: 0, "0": "WebLlm",
    OpenRouter: 1, "1": "OpenRouter",
});

export class LlmRouter {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        LlmRouterFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_llmrouter_free(ptr, 0);
    }
    /**
     * @param {string} provider_str
     */
    constructor(provider_str) {
        const ptr0 = passStringToWasm0(provider_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.llmrouter_new(ptr0, len0);
        this.__wbg_ptr = ret >>> 0;
        LlmRouterFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Prepares an LLM request by augmenting the prompt with RAG context if enabled.
     * The actual model execution happens in JavaScript due to WebGPU / Fetch API ease.
     * @param {AiMesh} mesh
     * @param {string} prompt
     * @returns {Promise<string>}
     */
    prepare_rag_prompt(mesh, prompt) {
        _assertClass(mesh, AiMesh);
        const ptr0 = passStringToWasm0(prompt, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.llmrouter_prepare_rag_prompt(this.__wbg_ptr, mesh.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * Semantic Verification of LLM Output via barq-wasm
     * @param {string} expected_embedding_json
     * @param {string} actual_embedding_json
     * @returns {number}
     */
    verify_output_semantically(expected_embedding_json, actual_embedding_json) {
        const ptr0 = passStringToWasm0(expected_embedding_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(actual_embedding_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.llmrouter_verify_output_semantically(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        return ret;
    }
}
if (Symbol.dispose) LlmRouter.prototype[Symbol.dispose] = LlmRouter.prototype.free;

export class McpServer {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        McpServerFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_mcpserver_free(ptr, 0);
    }
    /**
     * Handles incoming MCP JSON-RPC payload asynchronously
     * @param {string} request_json
     * @returns {Promise<string>}
     */
    handle_request(request_json) {
        const ptr0 = passStringToWasm0(request_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.mcpserver_handle_request(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * @param {AiMesh} mesh
     */
    constructor(mesh) {
        _assertClass(mesh, AiMesh);
        var ptr0 = mesh.__destroy_into_raw();
        const ret = wasm.mcpserver_new(ptr0);
        this.__wbg_ptr = ret >>> 0;
        McpServerFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
}
if (Symbol.dispose) McpServer.prototype[Symbol.dispose] = McpServer.prototype.free;

export class TopologyManager {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        TopologyManagerFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_topologymanager_free(ptr, 0);
    }
    /**
     * Claim leadership over OPFS persisting.
     */
    claim_leadership() {
        const ret = wasm.topologymanager_claim_leadership(this.__wbg_ptr);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * Retrieve local leadership status
     * @returns {boolean}
     */
    is_leader() {
        const ret = wasm.topologymanager_is_leader(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @param {string} id
     */
    constructor(id) {
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.topologymanager_new(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        TopologyManagerFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
}
if (Symbol.dispose) TopologyManager.prototype[Symbol.dispose] = TopologyManager.prototype.free;

export class WorkerPool {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WorkerPoolFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_workerpool_free(ptr, 0);
    }
    /**
     * @param {string} task_json
     * @param {BarqMeshWeb} store
     * @returns {Promise<void>}
     */
    dispatch_js(task_json, store) {
        const ptr0 = passStringToWasm0(task_json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        _assertClass(store, BarqMeshWeb);
        const ret = wasm.workerpool_dispatch_js(this.__wbg_ptr, ptr0, len0, store.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {string}
     */
    get_stats() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.workerpool_get_stats(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @param {number} count
     */
    constructor(count) {
        const ret = wasm.workerpool_new_js(count);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        WorkerPoolFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
}
if (Symbol.dispose) WorkerPool.prototype[Symbol.dispose] = WorkerPool.prototype.free;

export class WorkerStats {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WorkerStatsFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_workerstats_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get busy() {
        const ret = wasm.__wbg_get_workerstats_busy(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get completed() {
        const ret = wasm.__wbg_get_workerstats_completed(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get queued() {
        const ret = wasm.__wbg_get_workerstats_queued(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get workers() {
        const ret = wasm.__wbg_get_workerstats_workers(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} arg0
     */
    set busy(arg0) {
        wasm.__wbg_set_workerstats_busy(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set completed(arg0) {
        wasm.__wbg_set_workerstats_completed(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set queued(arg0) {
        wasm.__wbg_set_workerstats_queued(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set workers(arg0) {
        wasm.__wbg_set_workerstats_workers(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) WorkerStats.prototype[Symbol.dispose] = WorkerStats.prototype.free;

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

/**
 * Called automatically when the WASM module is instantiated.
 * Sets up the panic hook so Rust panics surface in the browser console.
 */
export function wasm_start() {
    wasm.wasm_start();
}

/**
 * @param {number} worker_id
 * @param {MessagePort} port
 */
export function worker_entry_point(worker_id, port) {
    const ret = wasm.worker_entry_point(worker_id, port);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_debug_string_5398f5bb970e0daa: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_is_function_3c846841762788c1: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_undefined_52709e72fb9f179c: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_string_get_395e606bd0ee4427: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_6ddd609b62940d55: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_6b5b6b8576d35cb1: function(arg0) {
            arg0._wbg_cb_unref();
        },
        __wbg_backend_info_fdb17cee94540389: function(arg0, arg1) {
            const ret = arg1.backend_info();
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_call_2d781c1f4d5c0ef8: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_clear_a5d76b803b4255c8: function(arg0) {
            const ret = arg0.clear();
            return ret;
        },
        __wbg_count_d1a31c33b2e6b40a: function(arg0) {
            const ret = arg0.count();
            return ret;
        },
        __wbg_data_a3d9ff9cdd801002: function(arg0) {
            const ret = arg0.data;
            return ret;
        },
        __wbg_error_a6fa202b58aa1cd3: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_insert_texts_36a5c5373105d96a: function(arg0, arg1, arg2) {
            const ret = arg0.insert_texts(arg1, arg2);
            return ret;
        },
        __wbg_insert_vectors_8068863f08238089: function(arg0, arg1, arg2, arg3) {
            const ret = arg0.insert_vectors(arg1, arg2, arg3 >>> 0);
            return ret;
        },
        __wbg_instanceof_DedicatedWorkerGlobalScope_c50082d7f5e65939: function(arg0) {
            let result;
            try {
                result = arg0 instanceof DedicatedWorkerGlobalScope;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_load_493e687e1fec3ad3: function(arg0) {
            const ret = arg0.load();
            return ret;
        },
        __wbg_new_227d7c05414eb861: function() {
            const ret = new Error();
            return ret;
        },
        __wbg_new_58457a061ec7cfeb: function(arg0, arg1, arg2) {
            const ret = new BarqVWeb(getStringFromWasm0(arg0, arg1), arg2);
            return ret;
        },
        __wbg_new_7beff0cea022eabb: function() { return handleError(function (arg0, arg1) {
            const ret = new BroadcastChannel(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_new_a70fbab9066b301f: function() {
            const ret = new Array();
            return ret;
        },
        __wbg_new_ab79df5bd7c26067: function() {
            const ret = new Object();
            return ret;
        },
        __wbg_new_f7708ba82c4c12f6: function() { return handleError(function () {
            const ret = new MessageChannel();
            return ret;
        }, arguments); },
        __wbg_new_from_slice_898ac63cbd46f332: function(arg0, arg1) {
            const ret = new Uint32Array(getArrayU32FromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_from_slice_ff2c15e8e05ffdfc: function(arg0, arg1) {
            const ret = new Float32Array(getArrayF32FromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_typed_aaaeaf29cf802876: function(arg0, arg1) {
            try {
                var state0 = {a: arg0, b: arg1};
                var cb0 = (arg0, arg1) => {
                    const a = state0.a;
                    state0.a = 0;
                    try {
                        return wasm_bindgen__convert__closures_____invoke__ha1907031a984f678(a, state0.b, arg0, arg1);
                    } finally {
                        state0.a = a;
                    }
                };
                const ret = new Promise(cb0);
                return ret;
            } finally {
                state0.a = state0.b = 0;
            }
        },
        __wbg_new_with_options_4eec6fc3e29de99c: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = new Worker(getStringFromWasm0(arg0, arg1), arg2);
            return ret;
        }, arguments); },
        __wbg_now_16f0c993d5dd6c27: function() {
            const ret = Date.now();
            return ret;
        },
        __wbg_port1_869a7ef90538dbdf: function(arg0) {
            const ret = arg0.port1;
            return ret;
        },
        __wbg_port2_947a51b8ba00adc9: function(arg0) {
            const ret = arg0.port2;
            return ret;
        },
        __wbg_postMessage_01834073e06a5a1c: function() { return handleError(function (arg0, arg1) {
            arg0.postMessage(arg1);
        }, arguments); },
        __wbg_postMessage_5ed5275983f7dad2: function() { return handleError(function (arg0, arg1, arg2) {
            arg0.postMessage(arg1, arg2);
        }, arguments); },
        __wbg_postMessage_c89a8b5edbf59ad0: function() { return handleError(function (arg0, arg1) {
            arg0.postMessage(arg1);
        }, arguments); },
        __wbg_push_e87b0e732085a946: function(arg0, arg1) {
            const ret = arg0.push(arg1);
            return ret;
        },
        __wbg_queueMicrotask_0c399741342fb10f: function(arg0) {
            const ret = arg0.queueMicrotask;
            return ret;
        },
        __wbg_queueMicrotask_a082d78ce798393e: function(arg0) {
            queueMicrotask(arg0);
        },
        __wbg_resolve_ae8d83246e5bcc12: function(arg0) {
            const ret = Promise.resolve(arg0);
            return ret;
        },
        __wbg_save_06af0d3814301780: function(arg0) {
            const ret = arg0.save();
            return ret;
        },
        __wbg_search_99ad0eaa60839d09: function(arg0, arg1, arg2, arg3, arg4) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg1;
                deferred0_1 = arg2;
                const ret = arg0.search(getStringFromWasm0(arg1, arg2), arg3 >>> 0, arg4 !== 0);
                return ret;
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_search_vector_edef126b4ca034af: function(arg0, arg1, arg2) {
            const ret = arg0.search_vector(arg1, arg2 >>> 0);
            return ret;
        },
        __wbg_set_7eaa4f96924fd6b3: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Reflect.set(arg0, arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_set_onmessage_59fc1df5e83ed05e: function(arg0, arg1) {
            arg0.onmessage = arg1;
        },
        __wbg_set_onmessage_f939f8b6d08ca76b: function(arg0, arg1) {
            arg0.onmessage = arg1;
        },
        __wbg_set_type_c96ec5d2b134f310: function(arg0, arg1) {
            arg0.type = __wbindgen_enum_WorkerType[arg1];
        },
        __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_f207c857566db248: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_stringify_5ae93966a84901ac: function() { return handleError(function (arg0) {
            const ret = JSON.stringify(arg0);
            return ret;
        }, arguments); },
        __wbg_then_098abe61755d12f6: function(arg0, arg1) {
            const ret = arg0.then(arg1);
            return ret;
        },
        __wbg_then_9e335f6dd892bc11: function(arg0, arg1, arg2) {
            const ret = arg0.then(arg1, arg2);
            return ret;
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 127, function: Function { arguments: [NamedExternref("MessageEvent")], shim_idx: 128, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h1d445af615150f9b, wasm_bindgen__convert__closures_____invoke__h9c8bf75437b40c01);
            return ret;
        },
        __wbindgen_cast_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 171, function: Function { arguments: [Externref], shim_idx: 172, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h9f3f5407e05f3b9c, wasm_bindgen__convert__closures_____invoke__h82cd9d64b5eba286);
            return ret;
        },
        __wbindgen_cast_0000000000000003: function(arg0) {
            // Cast intrinsic for `F64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_cast_0000000000000004: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
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
        "./barq_mesh_web_bg.js": import0,
    };
}

function wasm_bindgen__convert__closures_____invoke__h9c8bf75437b40c01(arg0, arg1, arg2) {
    wasm.wasm_bindgen__convert__closures_____invoke__h9c8bf75437b40c01(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h82cd9d64b5eba286(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen__convert__closures_____invoke__h82cd9d64b5eba286(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen__convert__closures_____invoke__ha1907031a984f678(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures_____invoke__ha1907031a984f678(arg0, arg1, arg2, arg3);
}


const __wbindgen_enum_WorkerType = ["classic", "module"];
const AiMeshFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_aimesh_free(ptr >>> 0, 1));
const BarqMeshWebFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_barqmeshweb_free(ptr >>> 0, 1));
const LlmRouterFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_llmrouter_free(ptr >>> 0, 1));
const McpServerFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_mcpserver_free(ptr >>> 0, 1));
const TopologyManagerFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_topologymanager_free(ptr >>> 0, 1));
const WorkerPoolFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_workerpool_free(ptr >>> 0, 1));
const WorkerStatsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_workerstats_free(ptr >>> 0, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => state.dtor(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
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

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            state.dtor(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4, 4) >>> 0;
    getUint32ArrayMemory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
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

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4, 4) >>> 0;
    for (let i = 0; i < array.length; i++) {
        const add = addToExternrefTable0(array[i]);
        getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedFloat32ArrayMemory0 = null;
    cachedInt8ArrayMemory0 = null;
    cachedUint32ArrayMemory0 = null;
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
        module_or_path = new URL('barq_mesh_web_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
