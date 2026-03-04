/**
 * useRAGChat.ts — Hook that wraps useLLM with barq-vweb retrieval.
 * On each send(): retrieves top-k chunks, builds system prompt, calls LLM.
 */

import { useContext, useCallback } from 'react';
import { LLMContext } from './LLMContext';
import { searchSimilar, getCount } from '../lib/vectorDb';
import type { ChatMessage, SourceChunk } from './LLMContext';

const TOP_K = 5;
const MAX_CONTEXT_CHARS = 3000;

function buildSystemPrompt(chunks: SourceChunk[]): string {
    if (chunks.length === 0) {
        return 'You are a helpful assistant. Answer the user\'s questions clearly and concisely.';
    }

    const context = chunks
        .map((c, i) => `[${i + 1}] (${c.sourceFile})\n${c.text}`)
        .join('\n\n')
        .slice(0, MAX_CONTEXT_CHARS);

    return (
        `You are a document assistant. Answer ONLY based on the provided context below.\n` +
        `If the answer is not in the context, say you don't know.\n\n` +
        `Context:\n${context}`
    );
}

export function useRAGChat() {
    const ctx = useContext(LLMContext);
    if (!ctx) throw new Error('useRAGChat must be used within <LLMProvider>');

    const { send: llmSend, messages, isGenerating, status, stop, clearChat, loadModel, tps } = ctx;

    const hasDocuments = getCount() > 0;

    const send = useCallback(
        async (userText: string) => {
            if (!userText.trim() || isGenerating) return;

            let sources: SourceChunk[] = [];
            let augmentedHistory: ChatMessage[] | undefined;

            // Only do RAG retrieval if documents are loaded
            if (hasDocuments) {
                try {
                    const results = await searchSimilar(userText, TOP_K);
                    sources = results
                        .filter((r) => r.score > 0.1)
                        .map((r) => ({
                            text: r.metadata?.text ?? r.text ?? '',
                            sourceFile: r.metadata?.sourceFile ?? 'unknown',
                            score: r.score,
                        }));
                } catch (err) {
                    console.warn('[RAG] search failed, continuing without context:', err);
                }
            }

            // Build augmented history with system prompt
            const systemMsg: ChatMessage = {
                id: -1,
                role: 'system',
                content: buildSystemPrompt(sources),
            };

            const userMsg: ChatMessage = {
                id: -2,
                role: 'user',
                content: userText,
            };

            // Visible history (only user/assistant messages, no system prompt)
            const visibleHistory = messages.filter((m) => m.role !== 'system');

            // LLM sees: system + visible history + new user message
            augmentedHistory = [systemMsg, ...visibleHistory, userMsg];

            llmSend(userText, augmentedHistory, sources.length > 0 ? sources : undefined);
        },
        [llmSend, messages, isGenerating, hasDocuments],
    );

    return {
        messages,
        isGenerating,
        status,
        tps,
        hasDocuments,
        send,
        stop,
        clearChat,
        loadModel,
    };
}
