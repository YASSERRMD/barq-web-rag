import { createContext } from 'react';

let nextMessageId = 0;
export function createMessageId(): number { return nextMessageId++; }

export interface ChatMessage {
    id: number;
    role: 'user' | 'assistant' | 'system';
    content: string;
    reasoning?: string;
    /** Source chunks used for RAG context, for display in UI */
    sources?: SourceChunk[];
}

export interface SourceChunk {
    text: string;
    sourceFile: string;
    score: number;
}

export type LoadingStatus =
    | { state: 'idle' }
    | { state: 'loading'; progress?: number; message?: string }
    | { state: 'ready' }
    | { state: 'error'; error: string };

export interface LLMContextValue {
    status: LoadingStatus;
    messages: ChatMessage[];
    isGenerating: boolean;
    tps: number;
    loadModel: () => void;
    send: (text: string, augmentedHistory?: ChatMessage[], sources?: SourceChunk[]) => void;
    stop: () => void;
    clearChat: () => void;
}

export const LLMContext = createContext<LLMContextValue | null>(null);
