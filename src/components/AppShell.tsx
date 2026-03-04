/**
 * AppShell.tsx — Two-column layout: sidebar (UploadPanel) + main (ChatPanel).
 * Also handles the landing / model-load screen.
 */

import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';
import { useRAGChat } from '../hooks/useRAGChat';
import { useDocumentIngestion } from '../hooks/useDocumentIngestion';
import { UploadPanel } from './UploadPanel';
import { ChatPanel } from './ChatPanel';

function LandingScreen({ onStart, isLoading, progress }: {
    onStart: () => void;
    isLoading: boolean;
    progress?: number;
}) {
    return (
        <div
            className="flex flex-col items-center justify-center h-full animate-fade-in"
            style={{ gap: '2rem', padding: '2rem', textAlign: 'center' }}
        >
            {/* Logo glow */}
            <div style={{ position: 'relative' }}>
                <div
                    style={{
                        position: 'absolute',
                        inset: '-24px',
                        background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
                        borderRadius: '50%',
                    }}
                />
                <div
                    style={{
                        width: '72px',
                        height: '72px',
                        background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                        borderRadius: '1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 40px var(--accent-glow)',
                        position: 'relative',
                    }}
                >
                    <Zap size={32} color="#fff" strokeWidth={2.5} />
                </div>
            </div>

            {/* Headline */}
            <div>
                <h1 className="gradient-text" style={{ marginBottom: '0.5rem' }}>Barq RAG</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '480px', lineHeight: 1.7 }}>
                    Upload documents and chat with them using{' '}
                    <strong style={{ color: 'var(--accent-light)' }}>LiquidAI LFM2.5-1.2B</strong>{' '}
                    — fully local, no server needed.
                </p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-2">
                {['🧠 Runs in browser', '🔒 100% private', '⚡ WebGPU accelerated', '📄 PDF · TXT · DOCX'].map((f) => (
                    <span
                        key={f}
                        style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-md)',
                            padding: '0.35rem 0.8rem',
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                        }}
                    >
                        {f}
                    </span>
                ))}
            </div>

            {/* CTA */}
            {isLoading ? (
                <div className="flex flex-col items-center gap-3" style={{ width: '100%', maxWidth: '280px' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Downloading model…</p>
                    <div className="progress-track w-full">
                        <div className="progress-fill" style={{ width: `${progress ?? 0}%` }} />
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>~800MB · cached after first load</p>
                </div>
            ) : (
                <button id="load-model-btn" className="btn btn-primary" onClick={onStart} style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}>
                    <Zap size={18} />
                    Load Model &amp; Start
                </button>
            )}

            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', maxWidth: '360px' }}>
                Requires a modern browser with WebGPU support (Chrome 113+, Safari 17+).
                First load downloads ~800MB and caches in your browser.
            </p>
        </div>
    );
}

export function AppShell() {
    const { status, loadModel } = useRAGChat();
    const ingestion = useDocumentIngestion();

    const [hasStarted, setHasStarted] = useState(false);
    const [showApp, setShowApp] = useState(false);

    const isLoading = hasStarted && status.state === 'loading';
    const isReady = status.state === 'ready';
    const loadProgress = status.state === 'loading' ? (status.progress ?? 0) : 0;

    useEffect(() => {
        if (isReady && hasStarted) {
            setShowApp(true);
        }
    }, [isReady, hasStarted]);

    const handleStart = () => {
        setHasStarted(true);
        loadModel();
    };

    const handleClearAll = async () => {
        await ingestion.clearAll();
    };

    if (!showApp) {
        return (
            <div style={{ height: '100vh', width: '100vw', background: 'var(--bg-base)' }}>
                <LandingScreen onStart={handleStart} isLoading={isLoading} progress={loadProgress} />
            </div>
        );
    }

    return (
        <div
            className="animate-fade-in"
            style={{
                display: 'grid',
                gridTemplateColumns: '280px 1fr',
                height: '100vh',
                width: '100vw',
                background: 'var(--bg-base)',
                overflow: 'hidden',
            }}
        >
            {/* Sidebar */}
            <aside
                className="glass-card"
                style={{
                    margin: '0.75rem 0 0.75rem 0.75rem',
                    borderRadius: 'var(--radius-xl)',
                    padding: '1rem',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <UploadPanel ingestion={ingestion} onClearAll={handleClearAll} />
            </aside>

            {/* Main chat */}
            <main
                className="glass-card"
                style={{
                    margin: '0.75rem',
                    borderRadius: 'var(--radius-xl)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 0,
                }}
            >
                <ChatPanel />
            </main>
        </div>
    );
}
