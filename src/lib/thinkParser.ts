/**
 * think-parser.ts — Incremental streaming parser for <think>...</think> tags.
 * Adapted from LFM2.5-1.2B-Thinking-WebGPU (MIT licence).
 */

export interface ThinkDelta {
    type: 'reasoning' | 'content';
    textDelta: string;
}

export class ThinkStreamParser {
    reasoning = '';
    content = '';
    private _inThink = false;
    private _buf = '';

    private static readonly OPEN_TAG = '<think>';
    private static readonly CLOSE_TAG = '</think>';

    reset(): void {
        this.reasoning = '';
        this.content = '';
        this._inThink = false;
        this._buf = '';
    }

    push(text: string): ThinkDelta[] {
        const deltas: ThinkDelta[] = [];
        this._buf += text;
        while (this._buf.length > 0) {
            if (this._inThink) {
                const closeIdx = this._buf.indexOf(ThinkStreamParser.CLOSE_TAG);
                if (closeIdx !== -1) {
                    const before = this._buf.slice(0, closeIdx);
                    if (before) { this.reasoning += before; deltas.push({ type: 'reasoning', textDelta: before }); }
                    this._buf = this._buf.slice(closeIdx + ThinkStreamParser.CLOSE_TAG.length);
                    this._inThink = false;
                    continue;
                }
                const safeLen = this._safeFlushLength(this._buf, ThinkStreamParser.CLOSE_TAG);
                if (safeLen > 0) {
                    const chunk = this._buf.slice(0, safeLen);
                    this.reasoning += chunk;
                    deltas.push({ type: 'reasoning', textDelta: chunk });
                    this._buf = this._buf.slice(safeLen);
                }
                break;
            } else {
                const openIdx = this._buf.indexOf(ThinkStreamParser.OPEN_TAG);
                if (openIdx !== -1) {
                    const before = this._buf.slice(0, openIdx);
                    if (before) { this.content += before; deltas.push({ type: 'content', textDelta: before }); }
                    this._buf = this._buf.slice(openIdx + ThinkStreamParser.OPEN_TAG.length);
                    this._inThink = true;
                    continue;
                }
                const safeLen = this._safeFlushLength(this._buf, ThinkStreamParser.OPEN_TAG);
                if (safeLen > 0) {
                    const chunk = this._buf.slice(0, safeLen);
                    this.content += chunk;
                    deltas.push({ type: 'content', textDelta: chunk });
                    this._buf = this._buf.slice(safeLen);
                }
                break;
            }
        }
        return deltas;
    }

    flush(): ThinkDelta[] {
        if (!this._buf) return [];
        const deltas: ThinkDelta[] = [];
        if (this._inThink) {
            this.reasoning += this._buf;
            deltas.push({ type: 'reasoning', textDelta: this._buf });
        } else {
            this.content += this._buf;
            deltas.push({ type: 'content', textDelta: this._buf });
        }
        this._buf = '';
        return deltas;
    }

    private _safeFlushLength(buf: string, tag: string): number {
        for (let overlap = Math.min(buf.length, tag.length - 1); overlap > 0; overlap--) {
            if (buf.endsWith(tag.slice(0, overlap))) return buf.length - overlap;
        }
        return buf.length;
    }
}
