/**
 * UploadPanel.tsx — File upload, ingestion status, document list, and clear.
 */

import { useRef, useCallback } from 'react';
import { Upload, FileText, CheckCircle, XCircle, Loader2, Trash2, Database } from 'lucide-react';
import { useDocumentIngestion, type IngestionFile } from '../hooks/useDocumentIngestion';
import { useRAGChat } from '../hooks/useRAGChat';

function formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function FileRow({ file }: { file: IngestionFile }) {
    return (
        <div
            className="animate-fade-up"
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.6rem 0.8rem',
                background: 'var(--bg-base)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
                fontSize: '0.8rem',
            }}
        >
            <FileText size={14} style={{ color: 'var(--accent-light)', flexShrink: 0 }} />
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <div className="truncate" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{file.name}</div>
                <div style={{ color: 'var(--text-muted)' }}>
                    {formatBytes(file.size)}
                    {file.chunks > 0 && ` · ${file.chunks} chunks`}
                </div>
            </div>
            <div style={{ flexShrink: 0 }}>
                {file.status === 'processing' && <Loader2 size={14} className="animate-spin" style={{ color: 'var(--amber)' }} />}
                {file.status === 'done' && <CheckCircle size={14} style={{ color: 'var(--green)' }} />}
                {file.status === 'error' && <span title={file.error}><XCircle size={14} style={{ color: 'var(--red)' }} /></span>}
            </div>
        </div>
    );
}

interface UploadPanelProps {
    ingestion: ReturnType<typeof useDocumentIngestion>;
    onClearAll: () => void;
}

export function UploadPanel({ ingestion, onClearAll }: UploadPanelProps) {
    const { status, files, chunkCount, backendInfo, ingestFiles } = ingestion;
    const { clearChat } = useRAGChat();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const isDragging = useRef(false);

    const handleFiles = useCallback(
        (fileList: FileList | File[]) => { ingestFiles(fileList); },
        [ingestFiles],
    );

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        isDragging.current = true;
    };
    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        isDragging.current = false;
        if (e.dataTransfer.files.length > 0) handleFiles(e.dataTransfer.files);
    };

    const isProcessing = status.state === 'parsing' || status.state === 'embedding' || status.state === 'initialising';

    const handleClearAll = async () => {
        await onClearAll();
        clearChat();
    };

    return (
        <div className="flex flex-col gap-4 h-full">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 700 }}>Documents</h2>
                    {chunkCount > 0 && (
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginTop: '0.1rem' }}>
                            {chunkCount} chunks indexed
                        </p>
                    )}
                </div>
                {files.length > 0 && (
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={handleClearAll}
                        disabled={isProcessing}
                        title="Clear all documents and chat"
                    >
                        <Trash2 size={12} />
                        Clear All
                    </button>
                )}
            </div>

            {/* Drop zone */}
            <div
                onDragOver={onDragOver}
                onDrop={onDrop}
                onClick={() => !isProcessing && fileInputRef.current?.click()}
                style={{
                    border: '2px dashed var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem 1rem',
                    textAlign: 'center',
                    cursor: isProcessing ? 'not-allowed' : 'pointer',
                    transition: 'border-color 0.2s, background 0.2s',
                    background: 'transparent',
                    opacity: isProcessing ? 0.6 : 1,
                }}
                onMouseEnter={(e) => { if (!isProcessing) (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'; }}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".txt,.md,.pdf,.docx"
                    multiple
                    style={{ display: 'none' }}
                    onChange={(e) => e.target.files && handleFiles(e.target.files)}
                />
                {isProcessing ? (
                    <div className="flex flex-col items-center gap-2">
                        <Loader2 size={24} className="animate-spin" style={{ color: 'var(--accent-light)' }} />
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                            {status.state === 'initialising' && 'Initialising vector DB…'}
                            {status.state === 'parsing' && `Parsing ${(status as any).fileName}…`}
                            {status.state === 'embedding' && `Embedding ${(status as any).progress ?? 0}%…`}
                        </p>
                        {status.state === 'embedding' && (
                            <div className="progress-track w-full" style={{ maxWidth: '160px' }}>
                                <div className="progress-fill" style={{ width: `${(status as any).progress ?? 0}%` }} />
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-2">
                        <Upload size={24} style={{ color: 'var(--text-muted)' }} />
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                            Drop files or click to browse
                        </p>
                        <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            TXT · MD · PDF · DOCX
                        </p>
                    </div>
                )}
            </div>

            {/* File list */}
            {files.length > 0 && (
                <div className="flex flex-col gap-2 overflow-y-auto" style={{ flex: 1 }}>
                    {files.map((f) => <FileRow key={f.name} file={f} />)}
                </div>
            )}

            {/* Backend badge */}
            {backendInfo && (
                <div className="flex items-center gap-2" style={{ marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                    <Database size={12} style={{ color: 'var(--text-muted)' }} />
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{backendInfo}</span>
                </div>
            )}
        </div>
    );
}
