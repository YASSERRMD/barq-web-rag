/**
 * embedder.ts - Worker-backed semantic embeddings for barq-mesh-web.
 *
 * The app keeps barq-mesh-web as the vector store/search layer, but the actual
 * embeddings come from the real MiniLM model running in a background worker
 * pool. That keeps retrieval semantically correct without putting model
 * inference on the UI thread.
 */

export const EMBED_DIM = 384;

const MAX_BATCH_SIZE = 16;
const WORKER_COUNT = getWorkerCount();

export type EmbedProgressHandler = (
    progress: number,
    info?: { phase: 'warmup' | 'batch'; worker: string; file?: string }
) => void;

type WorkerResponse =
    | { id: number; type: 'ready' }
    | { id: number; type: 'done'; results: Float32Array[] }
    | { id: number; type: 'progress'; progress: number; file?: string }
    | { id: number; type: 'error'; error: string };

type PendingJob = {
    resolve: (vectors: Float32Array[]) => void;
    reject: (error: unknown) => void;
    onProgress?: EmbedProgressHandler;
};

class EmbedWorkerClient {
    private readonly worker: Worker;
    private readonly pending = new Map<number, PendingJob>();
    private readonly readyPromise: Promise<void>;
    private readyResolve: (() => void) | null = null;
    private readyReject: ((error: unknown) => void) | null = null;
    private nextMessageId = 1;
    private tail: Promise<void> = Promise.resolve();

    constructor(private readonly label: string) {
        this.worker = new Worker(new URL('../workers/embed.worker.ts', import.meta.url), { type: 'module' });

        this.readyPromise = new Promise<void>((resolve, reject) => {
            this.readyResolve = resolve;
            this.readyReject = reject;
        });

        this.worker.onmessage = (event: MessageEvent<WorkerResponse>) => {
            const msg = event.data;

            if (msg.type === 'progress') {
                const pending = this.pending.get(msg.id);

                if (msg.id === 0) {
                    warmupProgressCallback?.(msg.progress ?? 0, {
                        phase: 'warmup',
                        worker: this.label,
                        file: msg.file,
                    });
                } else if (pending?.onProgress) {
                    pending.onProgress(msg.progress ?? 0, {
                        phase: 'batch',
                        worker: this.label,
                        file: msg.file,
                    });
                } else {
                    const percent = Math.round((msg.progress ?? 0) * 100);
                    const prefix = msg.file ? ` ${msg.file}` : '';
                    console.log(`[embedder:${this.label}]${prefix} ${percent}%`);
                }
                return;
            }

            if (msg.type === 'error') {
                const error = new Error(msg.error);
                if (msg.id === 0) {
                    this.readyReject?.(error);
                    this.readyResolve = null;
                    this.readyReject = null;
                    return;
                }
            }

            if (msg.type === 'ready') {
                this.readyResolve?.();
                this.readyResolve = null;
                this.readyReject = null;
                return;
            }

            const pending = this.pending.get(msg.id);
            if (!pending) return;
            this.pending.delete(msg.id);

            if (msg.type === 'done') {
                pending.resolve(msg.results);
                return;
            }

            pending.reject(new Error(msg.error));
        };

        this.worker.onerror = (event: ErrorEvent) => {
            const error = event.error ?? new Error(event.message || `Embed worker ${this.label} failed`);
            this.readyReject?.(error);
            this.readyResolve = null;
            this.readyReject = null;

            for (const pending of this.pending.values()) {
                pending.reject(error);
            }
            this.pending.clear();
        };

        this.worker.postMessage({ id: 0, type: 'init' });
    }

    async ready(): Promise<void> {
        await this.readyPromise;
    }

    run(texts: string[], onProgress?: EmbedProgressHandler): Promise<Float32Array[]> {
        const job = async () => {
            await this.ready();
            return new Promise<Float32Array[]>((resolve, reject) => {
                const id = this.nextMessageId++;
                this.pending.set(id, { resolve, reject, onProgress });
                this.worker.postMessage({ id, texts });
            });
        };

        const scheduled = this.tail.then(job, job);
        this.tail = scheduled.then(
            () => undefined,
            () => undefined,
        );
        return scheduled;
    }

    dispose(): void {
        this.worker.terminate();
        this.pending.clear();
        this.readyResolve = null;
        this.readyReject = null;
    }
}

let pool: EmbedWorkerClient[] | null = null;
let initPromise: Promise<void> | null = null;
let ready = false;
let warmupProgressCallback: EmbedProgressHandler | null = null;
let desiredWorkerCount = WORKER_COUNT;

function getWorkerCount(): number {
    if (typeof navigator === 'undefined') return 1;
    const cores = navigator.hardwareConcurrency ?? 4;
    if (cores >= 4) return 2;
    return 1;
}

function buildPool(): EmbedWorkerClient[] {
    const count = desiredWorkerCount;
    const workers: EmbedWorkerClient[] = [];

    for (let i = 0; i < count; i++) {
        workers.push(new EmbedWorkerClient(`w${i + 1}`));
    }

    return workers;
}

async function ensurePool(): Promise<void> {
    if (ready && pool) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        const tryCounts = desiredWorkerCount > 1 ? [desiredWorkerCount, 1] : [1];

        let lastError: unknown = null;

        for (const count of tryCounts) {
            desiredWorkerCount = count;
            pool = buildPool();

            try {
                await Promise.all(pool.map((worker) => worker.ready()));
                ready = true;
                console.log(`[embedder] MiniLM worker pool ready (${pool.length} worker${pool.length === 1 ? '' : 's'})`);
                return;
            } catch (error) {
                lastError = error;
                console.warn(`[embedder] Worker pool warmup failed at size ${count}; retrying smaller pool`, error);
                if (pool) {
                    for (const worker of pool) {
                        worker.dispose();
                    }
                }
                pool = null;
                ready = false;
            }
        }

        throw lastError ?? new Error('embedder: failed to initialise worker pool');
    })();

    try {
        await initPromise;
    } catch (error) {
        pool = null;
        ready = false;
        throw error;
    } finally {
        initPromise = null;
    }
}

function toWellFormedText(text: string): string {
    return (text as any).toWellFormed?.() ?? text;
}

function splitTexts(texts: string[]): string[][] {
    if (texts.length <= MAX_BATCH_SIZE) return [texts];

    const batches: string[][] = [];
    for (let i = 0; i < texts.length; i += MAX_BATCH_SIZE) {
        batches.push(texts.slice(i, i + MAX_BATCH_SIZE));
    }
    return batches;
}

function pickWorker(index: number): EmbedWorkerClient {
    if (!pool || pool.length === 0) {
        throw new Error('embedder: call initEmbedder() first');
    }
    return pool[index % pool.length];
}

export async function initEmbedder(): Promise<void> {
    await ensurePool();
}

export async function initEmbedderWithProgress(onProgress?: EmbedProgressHandler): Promise<void> {
    if (ready && pool) {
        onProgress?.(1, { phase: 'warmup', worker: 'all', file: 'ready' });
        return;
    }

    warmupProgressCallback = onProgress ?? null;

    try {
        await ensurePool();
        onProgress?.(1, { phase: 'warmup', worker: 'all', file: 'ready' });
    } finally {
        warmupProgressCallback = null;
    }
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
 * Embed a batch of texts using the worker pool. Batches are split into small
 * chunks so the underlying transformer can process them efficiently.
 */
export async function embedBatch(texts: string[]): Promise<Float32Array[]> {
    if (texts.length === 0) return [];
    await ensurePool();
    if (!pool || pool.length === 0) return [];

    const safeTexts = texts.map(toWellFormedText);
    const subBatches = splitTexts(safeTexts);

    const jobs = subBatches.map((batch, index) => pickWorker(index).run(batch));
    const results = await Promise.all(jobs);

    const flattened: Float32Array[] = [];
    for (const batchResults of results) {
        flattened.push(...batchResults);
    }

    return flattened;
}

export function isEmbedderReady(): boolean {
    return ready;
}

export async function disposeEmbedder(): Promise<void> {
    if (pool) {
        for (const worker of pool) {
            worker.dispose();
        }
    }
    pool = null;
    ready = false;
    initPromise = null;
    desiredWorkerCount = getWorkerCount();
}
