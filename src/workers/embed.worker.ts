/// <reference lib="webworker" />

import { pipeline, env } from '@huggingface/transformers';

// Disable local checks since we run in browser
env.allowLocalModels = false;

const MODEL_ID = 'Xenova/all-MiniLM-L6-v2';

let embedPipeline: any = null;

async function getEmbedder() {
    if (!embedPipeline) {
        embedPipeline = await pipeline('feature-extraction', MODEL_ID, {
            dtype: 'q8',
            device: 'wasm',
        });
    }
    return embedPipeline;
}

self.onmessage = async (e: MessageEvent) => {
    const { id, texts } = e.data as { id: string; texts: string[] };

    try {
        const embedder = await getEmbedder();
        const results: Float32Array[] = [];

        for (let i = 0; i < texts.length; i++) {
            const output = await embedder(texts[i], { pooling: 'mean', normalize: false });
            results.push(new Float32Array(output.data));

            // Optional: send progress for each chunk within this batch
            if (i % 5 === 0) {
                self.postMessage({ id, type: 'progress', progress: (i + 1) / texts.length });
            }
        }

        self.postMessage({ id, type: 'done', results });
    } catch (err: any) {
        self.postMessage({ id, type: 'error', error: err.message });
    }
};
