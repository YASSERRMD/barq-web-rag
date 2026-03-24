/* tslint:disable */
/* eslint-disable */

export class BarqVWeb {
    free(): void;
    [Symbol.dispose](): void;
    backend_info(): string;
    clear(): Promise<any>;
    count(): number;
    delete(id: number): Promise<any>;
    insert_texts(texts: Array<any>, metadata: Array<any>): Promise<any>;
    insert_vectors(vectors: Float32Array, ids: Uint32Array, dim: number): Promise<any>;
    load(): Promise<any>;
    constructor(collection_name: string, model_url?: string | null);
    save(): Promise<any>;
    search(query: string, top_k: number, hybrid: boolean): Promise<any>;
    search_vector(query_v: Float32Array, top_k: number): Promise<any>;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_barqvweb_free: (a: number, b: number) => void;
    readonly barqvweb_backend_info: (a: number) => [number, number];
    readonly barqvweb_clear: (a: number) => any;
    readonly barqvweb_count: (a: number) => number;
    readonly barqvweb_delete: (a: number, b: number) => any;
    readonly barqvweb_insert_texts: (a: number, b: any, c: any) => any;
    readonly barqvweb_insert_vectors: (a: number, b: any, c: any, d: number) => any;
    readonly barqvweb_load: (a: number) => any;
    readonly barqvweb_new: (a: number, b: number, c: number, d: number) => number;
    readonly barqvweb_save: (a: number) => any;
    readonly barqvweb_search: (a: number, b: number, c: number, d: number, e: number) => any;
    readonly barqvweb_search_vector: (a: number, b: any, c: number) => any;
    readonly wasm_bindgen__closure__destroy__h5fc7b39f71c2d967: (a: number, b: number) => void;
    readonly wasm_bindgen__convert__closures_____invoke__h85e564a221c428e3: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen__convert__closures_____invoke__h14d9ba7aff402d3a: (a: number, b: number, c: any, d: any) => void;
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
