/**
 * chunker.ts — Sliding-window text chunker.
 * Splits text into overlapping chunks suitable for embedding.
 */

import type { ChunkMeta } from './vectorDb';

const DEFAULT_CHUNK_SIZE = 512;     // characters
const DEFAULT_OVERLAP = 64;         // characters of overlap between chunks

/**
 * Split a string into overlapping chunks.
 * Tries to split on sentence / word boundaries where possible.
 */
export function chunkText(
    text: string,
    sourceFile: string,
    chunkSize = DEFAULT_CHUNK_SIZE,
    overlap = DEFAULT_OVERLAP,
): ChunkMeta[] {
    // Normalise whitespace
    const normalised = text.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();

    if (normalised.length === 0) return [];

    const chunks: ChunkMeta[] = [];
    let start = 0;
    let chunkIndex = 0;

    while (start < normalised.length) {
        let end = Math.min(start + chunkSize, normalised.length);

        // Try to end on a sentence boundary (. ! ? \n) within the last 20% of the chunk
        if (end < normalised.length) {
            const lookback = Math.floor(chunkSize * 0.2);
            const boundary = findLastBoundary(normalised, Math.max(start + chunkSize - lookback, start + 1), end);
            if (boundary !== -1) end = boundary;
        }

        const chunkText = normalised.slice(start, end).trim();

        if (chunkText.length > 0) {
            chunks.push({ text: chunkText, sourceFile, chunkIndex });
            chunkIndex++;
        }

        // Advance with overlap
        start = end - overlap;
        if (start >= normalised.length) break;
        if (end === normalised.length) break;
    }

    return chunks;
}

/** Find the last sentence-boundary character position in [from, to). Returns -1 if not found. */
function findLastBoundary(text: string, from: number, to: number): number {
    for (let i = to - 1; i >= from; i--) {
        const ch = text[i];
        if (ch === '.' || ch === '!' || ch === '?' || ch === '\n') {
            return i + 1; // include the boundary char
        }
    }
    // Fall back to last whitespace
    for (let i = to - 1; i >= from; i--) {
        if (text[i] === ' ') return i + 1;
    }
    return -1;
}
