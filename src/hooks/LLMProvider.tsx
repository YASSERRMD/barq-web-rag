/**
 * LLMProvider.tsx — React context provider for LFM2.5-1.2B-Thinking-ONNX.
 * Adapted from LFM2.5-1.2B-Thinking-WebGPU (MIT licence).
 * Modified to support RAG: `send()` accepts a pre-built messages array.
 */

import { useRef, useState, useCallback, type ReactNode } from 'react';
import {
    pipeline,
    TextStreamer,
    InterruptableStoppingCriteria,
    env,
    type TextGenerationPipeline,
} from '@huggingface/transformers';

// Configure ONNX WASM settings to allow larger memory allocations.
// This prevents the '10787880' memory error on Chrome for some WebGPU buffers.
env.allowLocalModels = false;
if (env.backends.onnx.wasm) {
    env.backends.onnx.wasm.numThreads = 1;
    env.backends.onnx.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/';
}

import { ThinkStreamParser, type ThinkDelta } from '../lib/thinkParser';
import {
    LLMContext,
    createMessageId,
    type ChatMessage,
    type LoadingStatus,
    type SourceChunk,
} from './LLMContext';

const MODEL_ID = 'LiquidAI/LFM2.5-1.2B-Thinking-ONNX';
const DTYPE = 'q4';

function applyDeltas(msg: ChatMessage, deltas: ThinkDelta[]): ChatMessage {
    let { content, reasoning = '' } = msg;
    for (const delta of deltas) {
        if (delta.type === 'reasoning') reasoning += delta.textDelta;
        else content += delta.textDelta;
    }
    return { ...msg, content, reasoning };
}

export function LLMProvider({ children }: { children: ReactNode }) {
    const generatorRef = useRef<Promise<TextGenerationPipeline> | null>(null);
    const stoppingCriteria = useRef(new InterruptableStoppingCriteria());

    const [status, setStatus] = useState<LoadingStatus>({ state: 'idle' });
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const messagesRef = useRef<ChatMessage[]>([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const isGeneratingRef = useRef(false);
    const [tps, setTps] = useState(0);

    messagesRef.current = messages;
    isGeneratingRef.current = isGenerating;

    const loadModel = useCallback(() => {
        if (generatorRef.current) return;
        generatorRef.current = (async () => {
            setStatus({ state: 'loading', message: 'Downloading model…' });
            try {
                const gen = await pipeline('text-generation', MODEL_ID, {
                    dtype: DTYPE,
                    device: 'webgpu',
                    progress_callback: (p: any) => {
                        if (p.status !== 'progress' || !p.file?.endsWith('.onnx_data')) return;
                        setStatus({
                            state: 'loading',
                            progress: p.progress,
                            message: `Downloading model… ${Math.round(p.progress)}%`,
                        });
                    },
                });
                setStatus({ state: 'ready' });
                return gen;
            } catch (err) {
                const msg = err instanceof Error ? err.message : String(err);
                setStatus({ state: 'error', error: msg });
                generatorRef.current = null;
                throw err;
            }
        })();
    }, []);

    /**
     * Core generation function. Takes the visible chat history and
     * an optional sources list for attaching to the new assistant message.
     */
    const runGeneration = useCallback(
        async (chatHistory: ChatMessage[], sources?: SourceChunk[]) => {
            const generator = await generatorRef.current!;
            setIsGenerating(true);
            setTps(0);
            stoppingCriteria.current.reset();

            const parser = new ThinkStreamParser();
            let tokenCount = 0;
            let firstTokenTime = 0;

            const assistantId = createMessageId();
            setMessages((prev) => [
                ...prev,
                { id: assistantId, role: 'assistant', content: '', reasoning: '', sources },
            ]);

            const streamer = new TextStreamer((generator as any).tokenizer, {
                skip_prompt: true,
                skip_special_tokens: false,
                callback_function: (output: string) => {
                    const cleaned = output.replace(/<\|im_end\|>/g, '');
                    if (!cleaned) return;
                    const deltas = parser.push(cleaned);
                    if (deltas.length === 0) return;
                    setMessages((prev) => {
                        const updated = [...prev];
                        const idx = updated.findIndex(m => m.id === assistantId);
                        if (idx !== -1) {
                            updated[idx] = applyDeltas(updated[idx], deltas);
                        }
                        return updated;
                    });
                },
                token_callback_function: () => {
                    tokenCount++;
                    if (tokenCount === 1) {
                        firstTokenTime = performance.now();
                    } else {
                        const elapsed = (performance.now() - firstTokenTime) / 1000;
                        if (elapsed > 0) setTps(Math.round(((tokenCount - 1) / elapsed) * 10) / 10);
                    }
                },
            });

            const apiMessages = chatHistory.map((m) => ({ role: m.role, content: m.content }));

            try {
                await (generator as any)(apiMessages, {
                    max_new_tokens: 32768,
                    streamer,
                    stopping_criteria: stoppingCriteria.current,
                    do_sample: false,
                });
            } catch (err) {
                console.error('[LLM] Generation error:', err);
            }

            const remaining = parser.flush();
            if (remaining.length > 0) {
                setMessages((prev) => {
                    const updated = [...prev];
                    const idx = updated.findIndex(m => m.id === assistantId);
                    if (idx !== -1) {
                        updated[idx] = applyDeltas(updated[idx], remaining);
                    }
                    return updated;
                });
            }

            setMessages((prev) => {
                const updated = [...prev];
                const idx = updated.findIndex(m => m.id === assistantId);
                if (idx !== -1) {
                    updated[idx] = {
                        ...updated[idx],
                        content: parser.content.trim() || updated[idx].content,
                        reasoning: parser.reasoning.trim() || updated[idx].reasoning,
                    };
                }
                return updated;
            });

            setIsGenerating(false);
        },
        [],
    );

    /**
     * send() — called by the RAG chat hook with an already-augmented message list.
     * The `userMessage` is the original user text (added to visible history).
     * `augmentedHistory` is what's passed to the LLM (includes system context).
     * `sources` are the RAG chunks shown in the UI.
     */
    const send = useCallback(
        (userMessage: string, augmentedHistory?: ChatMessage[], sources?: SourceChunk[]) => {
            if (!generatorRef.current || isGeneratingRef.current) return;

            const userMsg: ChatMessage = {
                id: createMessageId(),
                role: 'user',
                content: userMessage,
            };

            setMessages((prev) => [...prev, userMsg]);

            const history = augmentedHistory ?? [...messagesRef.current, userMsg];
            runGeneration(history, sources);
        },
        [runGeneration],
    );

    const stop = useCallback(() => {
        stoppingCriteria.current.interrupt();
    }, []);

    const clearChat = useCallback(() => {
        if (isGeneratingRef.current) return;
        setMessages([]);
    }, []);

    return (
        <LLMContext.Provider
            value={{ status, messages, isGenerating, tps, loadModel, send, stop, clearChat }}
        >
            {children}
        </LLMContext.Provider>
    );
}
