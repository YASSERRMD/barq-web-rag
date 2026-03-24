/// <reference lib="webworker" />

import { pipeline, env } from '@huggingface/transformers';

// Disable local checks since we run in browser
env.allowLocalModels = false;

const MODEL_ID = 'Xenova/all-MiniLM-L6-v2';
const WORKER_BATCH_SIZE = 16;

let embedPipeline: any = null;
let activeInitId = 0;

async function getEmbedder() {
    if (!embedPipeline) {
        embedPipeline = await pipeline('feature-extraction', MODEL_ID, {
            dtype: 'q8',
            device: 'wasm',
            progress_callback: (p: any) => {
                if (p?.status !== 'progress') return;
                self.postMessage({
                    id: activeInitId,
                    type: 'progress',
                    progress: p.progress ?? 0,
                    file: p.file ?? MODEL_ID,
                });
            },
        });
    }
    return embedPipeline;
}

self.onmessage = async (e: MessageEvent) => {
    const { id, type, texts } = e.data as { id: number; type?: string; texts?: string[] };

    if (type === 'init') {
        try {
            activeInitId = id;
            await getEmbedder();
            self.postMessage({ id, type: 'ready' });
        } catch (err: any) {
            self.postMessage({ id, type: 'error', error: err?.message ?? String(err) });
        }
        return;
    }

    if (!texts) return;

    try {
        const embedder = await getEmbedder();
        const results: Float32Array[] = [];

        for (let offset = 0; offset < texts.length; offset += WORKER_BATCH_SIZE) {
            const batch = texts.slice(offset, offset + WORKER_BATCH_SIZE);
            const output = await embedder(batch, { pooling: 'mean', normalize: false });
            const data = output.data as Float32Array;
            const dims = output.dims as number[];
            const batchSize = dims[0] ?? batch.length;
            const embeddingDim = dims[dims.length - 1] ?? (data.length / Math.max(batchSize, 1));

            for (let i = 0; i < batchSize; i++) {
                const start = i * embeddingDim;
                const end = start + embeddingDim;
                results.push(new Float32Array(data.slice(start, end)));
            }

            self.postMessage({
                id,
                type: 'progress',
                progress: Math.min((offset + batch.length) / texts.length, 1),
            });
        }

        self.postMessage({ id, type: 'done', results });
    } catch (err: any) {
        self.postMessage({ id, type: 'error', error: err?.message ?? String(err) });
    }
};
