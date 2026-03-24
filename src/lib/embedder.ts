/**
 * embedder.ts - Lightweight deterministic embeddings used by barq-mesh-web.
 *
 * This mirrors the native stub embedder used in the mesh/vweb WASM layer so
 * ingestion and retrieval stay fast and consistent without a transformer model
 * on the hot path.
 */

import { initBarqWasm, normalizeVector } from './barqWasm';

export const EMBED_DIM = 384;
const MAX_SEQ_LEN = 128;

const CLS_ID = 101;
const SEP_ID = 102;
const UNK_ID = 100;
const PAD_ID = 0;

const VOCAB = new Map<string, number>();

let embedReady = false;
let initPromise: Promise<void> | null = null;

function buildStubVocab(): void {
    if (VOCAB.size > 0) return;

    for (const [i, c] of Array.from('abcdefghijklmnopqrstuvwxyz').entries()) {
        VOCAB.set(c, i + 1000);
    }

    VOCAB.set('[CLS]', CLS_ID);
    VOCAB.set('[SEP]', SEP_ID);
    VOCAB.set('[UNK]', UNK_ID);
    VOCAB.set('[PAD]', PAD_ID);
}

function tokenize(text: string): number[] {
    const ids = [CLS_ID];
    const words = text.split(/\s+/);

    for (const word of words) {
        if (!word) continue;

        const lower = word.toLowerCase();
        const direct = VOCAB.get(lower);

        if (direct != null) {
            ids.push(direct);
        } else {
            for (const ch of lower.slice(0, 10)) {
                ids.push(VOCAB.get(ch) ?? UNK_ID);
            }
        }

        if (ids.length >= MAX_SEQ_LEN - 1) break;
    }

    ids.push(SEP_ID);
    while (ids.length < MAX_SEQ_LEN) ids.push(PAD_ID);
    return ids;
}

function embedDeterministic(text: string): Float32Array {
    const safeText = (text as any).toWellFormed?.() ?? text;
    const tokenIds = tokenize(safeText);
    const vec = new Float32Array(EMBED_DIM);

    for (let i = 0; i < tokenIds.length; i++) {
        const tid = tokenIds[i];
        const pos = (tid + i) % EMBED_DIM;
        vec[pos] += 1.0;
    }

    return normalizeVector(vec);
}

export async function initEmbedder(): Promise<void> {
    if (embedReady) return;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        await initBarqWasm();
        buildStubVocab();
        embedReady = true;
        console.log('[embedder] Deterministic mesh embedder ready');
    })();

    return initPromise;
}

/**
 * Embed a single text string. Returns a unit-normalized Float32Array (384-dim).
 */
export async function embedText(text: string): Promise<Float32Array> {
    if (!embedReady) await initEmbedder();
    return embedDeterministic(text);
}

/**
 * Embed a batch of texts. Returns normalized Float32Array[] (384-dim each).
 */
export async function embedBatch(texts: string[]): Promise<Float32Array[]> {
    if (texts.length === 0) return [];
    if (!embedReady) await initEmbedder();

    const results: Float32Array[] = new Array(texts.length);
    for (let i = 0; i < texts.length; i++) {
        results[i] = embedDeterministic(texts[i]);
    }

    return results;
}

export function isEmbedderReady(): boolean {
    return embedReady;
}
