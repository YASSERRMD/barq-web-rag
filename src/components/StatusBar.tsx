/**
 * StatusBar.tsx — Shows LLM load progress, tps, and backend info.
 */

import { useRAGChat } from '../hooks/useRAGChat';
import { getBackendInfo } from '../lib/vectorDb';

export function StatusBar() {
    const { status, tps } = useRAGChat();
    const backend = getBackendInfo();

    if (status.state === 'idle') return null;

    if (status.state === 'loading') {
        return (
            <div className="status-bar glass-card animate-fade-in" style={{ padding: '0.75rem 1rem', marginBottom: '0.5rem' }}>
                <div className="flex items-center gap-2" style={{ marginBottom: status.progress != null ? '0.5rem' : 0 }}>
                    <span className="dot-pulse dot-amber" />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {status.message ?? 'Loading model…'}
                    </span>
                </div>
                {status.progress != null && (
                    <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${status.progress}%` }} />
                    </div>
                )}
            </div>
        );
    }

    if (status.state === 'error') {
        return (
            <div className="glass-card animate-fade-in" style={{ padding: '0.6rem 1rem', marginBottom: '0.5rem', borderColor: 'rgba(239,68,68,0.3)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--red)' }}>⚠ {status.error}</span>
            </div>
        );
    }

    if (status.state === 'ready') {
        return (
            <div className="flex items-center gap-2" style={{ justifyContent: 'center', padding: '0.25rem 0', marginBottom: '0.25rem' }}>
                <span className="dot-pulse dot-green" />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {backend || 'WebGPU'}
                    {tps > 0 && ` · ${tps} tok/s`}
                </span>
            </div>
        );
    }

    return null;
}
