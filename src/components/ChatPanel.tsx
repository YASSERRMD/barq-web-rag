/**
 * ChatPanel.tsx — Chat message list with streaming, reasoning collapse, and source chips.
 */

import { useRef, useEffect, useState, useCallback } from 'react';
import { Send, Square, Plus, ChevronDown, ChevronUp, BookOpen, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';
import { useRAGChat } from '../hooks/useRAGChat';
import { StatusBar } from './StatusBar';
import type { ChatMessage, SourceChunk } from '../hooks/LLMContext';

/* ===== Reasoning block ===== */
function ReasoningBlock({ text }: { text: string }) {
    const [open, setOpen] = useState(false);
    if (!text) return null;
    return (
        <div style={{ marginBottom: '0.5rem' }}>
            <button
                onClick={() => setOpen((v) => !v)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.3rem 0.7rem',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    color: 'var(--accent-light)',
                    fontWeight: 600,
                }}
            >
                {open ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                Reasoning
            </button>
            {open && (
                <div
                    className="animate-fade-in"
                    style={{
                        marginTop: '0.4rem',
                        background: 'var(--bg-card-hover)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.75rem',
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.7,
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    {text}
                </div>
            )}
        </div>
    );
}

/* ===== Source chips ===== */
function SourceChips({ sources }: { sources: SourceChunk[] }) {
    const [open, setOpen] = useState(false);
    if (!sources.length) return null;
    return (
        <div style={{ marginTop: '0.5rem' }}>
            <button
                onClick={() => setOpen((v) => !v)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.25rem 0.6rem',
                    cursor: 'pointer',
                    fontSize: '0.7rem',
                    color: 'var(--accent-2)',
                    fontWeight: 600,
                }}
            >
                <BookOpen size={10} />
                {sources.length} source{sources.length !== 1 ? 's' : ''}
                {open ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
            </button>
            {open && (
                <div
                    className="animate-fade-in flex flex-col gap-2"
                    style={{ marginTop: '0.4rem' }}
                >
                    {sources.map((s, i) => (
                        <div
                            key={i}
                            style={{
                                background: 'var(--bg-base)',
                                border: '1px solid var(--border)',
                                borderRadius: 'var(--radius-sm)',
                                padding: '0.5rem 0.75rem',
                                fontSize: '0.75rem',
                            }}
                        >
                            <div style={{ color: 'var(--accent-2)', fontWeight: 600, marginBottom: '0.2rem', fontSize: '0.7rem' }}>
                                {s.sourceFile} · {(s.score * 100).toFixed(0)}% match
                            </div>
                            <div style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                {s.text.length > 200 ? s.text.slice(0, 200) + '…' : s.text}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

/* ===== Code block with copy button ===== */
function CodeBlock({ className, children }: { className?: string; children: React.ReactNode }) {
    const [copied, setCopied] = useState(false);
    const code = String(children).replace(/\n$/, '');
    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        });
    };
    return (
        <div style={{ position: 'relative', margin: '0.6rem 0' }}>
            <button
                onClick={handleCopy}
                title="Copy code"
                style={{
                    position: 'absolute',
                    top: '0.45rem',
                    right: '0.5rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.2rem 0.5rem',
                    cursor: 'pointer',
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    zIndex: 1,
                }}
            >
                {copied ? <Check size={11} /> : <Copy size={11} />}
                {copied ? 'Copied!' : 'Copy'}
            </button>
            <pre className={className} style={{
                margin: 0,
                padding: '1rem 1rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                overflowX: 'auto',
                fontSize: '0.8rem',
                lineHeight: 1.6,
                background: 'var(--bg-base)',
                border: '1px solid var(--border)',
            }}>
                <code className={className}>{children}</code>
            </pre>
        </div>
    );
}

/* ===== Message bubble ===== */
function MessageBubble({
    msg,
    isStreaming,
}: {
    msg: ChatMessage;
    isStreaming: boolean;
}) {
    const isUser = msg.role === 'user';

    return (
        <div
            className="animate-fade-up"
            style={{
                display: 'flex',
                justifyContent: isUser ? 'flex-end' : 'flex-start',
            }}
        >
            <div
                style={{
                    maxWidth: '80%',
                    background: isUser
                        ? 'linear-gradient(135deg, var(--accent), var(--accent-2))'
                        : 'var(--bg-card)',
                    border: isUser ? 'none' : '1px solid var(--border)',
                    borderRadius: isUser
                        ? 'var(--radius-lg) var(--radius-lg) var(--radius-sm) var(--radius-lg)'
                        : 'var(--radius-lg) var(--radius-lg) var(--radius-lg) var(--radius-sm)',
                    padding: '0.75rem 1rem',
                    boxShadow: isUser ? '0 0 20px var(--accent-glow)' : 'var(--shadow-card)',
                }}
            >
                {/* Reasoning block for assistant */}
                {!isUser && msg.reasoning && <ReasoningBlock text={msg.reasoning} />}

                {/* Content */}
                <div
                    className={`msg-content${isStreaming && !msg.content ? ' cursor-blink' : ''}`}
                    style={{
                        fontSize: '0.9rem',
                        color: isUser ? '#fff' : 'var(--text-primary)',
                        lineHeight: 1.7,
                    }}
                >
                    {isUser ? (
                        <span style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</span>
                    ) : (
                        <ReactMarkdown
                            rehypePlugins={[rehypeHighlight]}
                            components={{
                                code({ className, children, ...props }: any) {
                                    const isBlock = !!(props.node?.position?.start.line !== props.node?.position?.end.line || String(children).includes('\n'));
                                    if (isBlock) {
                                        return <CodeBlock className={className}>{children}</CodeBlock>;
                                    }
                                    return <code className="inline-code" {...props}>{children}</code>;
                                },
                                pre({ children }: any) {
                                    return <>{children}</>;
                                },
                            }}
                        >
                            {msg.content || (isStreaming ? '…' : '…')}
                        </ReactMarkdown>
                    )}
                    {isStreaming && msg.content && <span className="cursor-blink" />}
                </div>

                {/* Sources */}
                {!isUser && msg.sources && <SourceChips sources={msg.sources} />}
            </div>
        </div>
    );
}

/* ===== Chat input ===== */
function ChatInput() {
    const { send, stop, status, isGenerating, hasDocuments } = useRAGChat();
    const isReady = status.state === 'ready';
    const [input, setInput] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = useCallback(
        async (e?: React.FormEvent) => {
            e?.preventDefault();
            const text = input.trim();
            if (!text || !isReady || isGenerating) return;
            setInput('');
            if (textareaRef.current) textareaRef.current.style.height = '80px';
            await send(text);
        },
        [input, isReady, isGenerating, send],
    );

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit(); }
        },
        [handleSubmit],
    );

    const placeholder = !isReady
        ? 'Load the model to start chatting…'
        : hasDocuments
            ? 'Ask about your documents…'
            : 'Ask anything (no documents loaded)…';

    return (
        <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
            <textarea
                ref={textareaRef}
                id="chat-input"
                className="input"
                style={{ minHeight: '80px', height: '80px', maxHeight: '200px', resize: 'none', paddingBottom: '2.5rem' }}
                placeholder={placeholder}
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                    e.target.style.height = '80px';
                    e.target.style.height = Math.max(e.target.scrollHeight, 80) + 'px';
                }}
                onKeyDown={handleKeyDown}
                disabled={!isReady}
                autoFocus
            />
            <div style={{ position: 'absolute', bottom: '0.6rem', right: '0.75rem' }}>
                {isGenerating ? (
                    <button type="button" onClick={stop} className="btn btn-ghost btn-icon btn-sm" title="Stop">
                        <Square size={14} style={{ fill: 'currentColor' }} />
                    </button>
                ) : (
                    <button
                        type="submit"
                        id="send-button"
                        disabled={!isReady || !input.trim()}
                        className="btn btn-primary btn-sm"
                        title="Send"
                    >
                        <Send size={14} />
                    </button>
                )}
            </div>
        </form>
    );
}

/* ===== ChatPanel ===== */
export function ChatPanel() {
    const { messages, isGenerating, clearChat, status } = useRAGChat();
    const scrollRef = useRef<HTMLElement>(null);
    const isReady = status.state === 'ready';
    const hasMessages = messages.filter((m) => m.role !== 'system').length > 0;
    const showNewChat = isReady && hasMessages && !isGenerating;

    useEffect(() => {
        const el = scrollRef.current;
        if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex flex-col h-full" style={{ minHeight: 0 }}>
            {/* Header */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1.25rem',
                    borderBottom: '1px solid var(--border)',
                    height: '3.25rem',
                    flexShrink: 0,
                }}
            >
                <div className="flex items-center gap-2">
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Chat</span>
                    {isGenerating && <span className="dot-pulse dot-purple" />}
                </div>
                {showNewChat && (
                    <button className="btn btn-ghost btn-sm" onClick={clearChat} title="New chat">
                        <Plus size={14} />
                        New chat
                    </button>
                )}
            </div>

            {/* Messages */}
            <main
                ref={scrollRef}
                className="overflow-y-auto flex-1"
                style={{ padding: '1rem 1.25rem', minHeight: 0 }}
            >
                {!hasMessages && (
                    <div
                        className="flex flex-col items-center justify-center h-full animate-fade-in"
                        style={{ gap: '0.75rem', opacity: 0.5 }}
                    >
                        <div style={{ fontSize: '2rem' }}>💬</div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center' }}>
                            {isReady
                                ? 'Upload a document and start asking questions'
                                : 'Model loading…'}
                        </p>
                    </div>
                )}

                <div className="flex flex-col gap-4">
                    {messages
                        .filter((m) => m.role !== 'system')
                        .map((msg, i, arr) => {
                            const isLast = i === arr.length - 1 && msg.role === 'assistant';
                            return (
                                <MessageBubble
                                    key={msg.id}
                                    msg={msg}
                                    isStreaming={isGenerating && isLast}
                                />
                            );
                        })}
                </div>
            </main>

            {/* Footer */}
            <footer style={{ padding: '0.75rem 1.25rem', borderTop: '1px solid var(--border)', flexShrink: 0 }}>
                <StatusBar />
                <ChatInput />
                <p style={{ textAlign: 'center', fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                    All inference runs locally in your browser · No data sent to servers
                </p>
            </footer>
        </div>
    );
}
