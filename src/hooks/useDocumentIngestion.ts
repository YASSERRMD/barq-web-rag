/**
 * useDocumentIngestion.ts — File → parse → chunk → fast embed → barq-mesh-web store.
 */

import { useState, useCallback, useContext, useEffect } from 'react';
import { parseFile } from '../lib/documentParser';
import { chunkText } from '../lib/chunker';
import { initDb, insertChunks, clearDb, getCount, getBackendInfo } from '../lib/vectorDb';
import { LLMContext } from './LLMContext';

export type IngestionStatus =
    | { state: 'idle' }
    | { state: 'initialising'; progress?: number }
    | { state: 'parsing'; fileName: string }
    | { state: 'embedding'; fileName: string; progress: number }
    | { state: 'done' }
    | { state: 'error'; error: string };

export interface IngestionFile {
    name: string;
    size: number;
    chunks: number;
    status: 'pending' | 'processing' | 'done' | 'error';
    error?: string;
}

export function useDocumentIngestion() {
    const [status, setStatus] = useState<IngestionStatus>({ state: 'idle' });
    const [files, setFiles] = useState<IngestionFile[]>([]);
    const [chunkCount, setChunkCount] = useState(0);
    const [backendInfo, setBackendInfo] = useState('');
    const [dbReady, setDbReady] = useState(false);

    const ctx = useContext(LLMContext);

    // Sync local count to global context so Chat can detect RAG documents
    useEffect(() => {
        if (ctx && ctx.indexedChunks !== chunkCount) {
            ctx.setIndexedChunks(chunkCount);
        }
    }, [chunkCount, ctx]);

    const ensureDb = useCallback(async () => {
        if (dbReady) return;
        setStatus({ state: 'initialising', progress: 0 });
        await initDb((progress) => {
            setStatus((prev) => {
                if (prev.state !== 'initialising') return prev;
                const nextProgress = Math.max(prev.progress ?? 0, Math.round(progress * 100));
                return { state: 'initialising', progress: nextProgress };
            });
        });
        // backendInfo shows the mesh store and the semantic embedding path.
        setBackendInfo(getBackendInfo());
        setDbReady(true);
    }, [dbReady]);

    const ingestFiles = useCallback(async (newFiles: FileList | File[]) => {
        const fileArray = Array.from(newFiles);
        if (fileArray.length === 0) return;

        // Add files to the list with "pending" status IMMEDIATELY for feedback
        setFiles((prev) => [
            ...prev,
            ...fileArray.map((f) => ({
                name: f.name,
                size: f.size,
                chunks: 0,
                status: 'pending' as const,
            })),
        ]);

        try {
            await ensureDb();
        } catch (e: any) {
            const errorMsg = `DB init failed: ${e?.message ?? e}`;
            setStatus({ state: 'error', error: errorMsg });
            // Mark all pending files as error
            setFiles((prev) => 
                prev.map(f => f.status === 'pending' ? { ...f, status: 'error', error: errorMsg } : f)
            );
            return;
        }

        for (const file of fileArray) {
            // Mark as processing
            setFiles((prev) =>
                prev.map((f) => (f.name === file.name ? { ...f, status: 'processing' } : f))
            );

            try {
                // Step 1: Parse
                setStatus({ state: 'parsing', fileName: file.name });
                const text = await parseFile(file);
                console.log(`[Ingestion] Parsed ${file.name}, text length: ${text.length}`);

                // Step 2: Chunk
                const chunks = chunkText(text, file.name);
                console.log(`[Ingestion] Chunked into ${chunks.length} chunks.`);

                // Step 3: Batch embed and insert through the mesh backend.
                setStatus({ state: 'embedding', fileName: file.name, progress: 0 });
                console.log(`[Ingestion] Indexing ${chunks.length} chunks via barq-mesh-web...`);
                await insertChunks(chunks, (progress) => {
                    setStatus({
                        state: 'embedding',
                        fileName: file.name,
                        progress: Math.round(progress * 100),
                    });
                });
                
                const newCount = getCount();
                setChunkCount(newCount);

                setFiles((prev) =>
                    prev.map((f) =>
                        f.name === file.name ? { ...f, status: 'done', chunks: chunks.length } : f
                    )
                );
            } catch (e: any) {
                const errorMsg = e?.message ?? String(e);
                setFiles((prev) =>
                    prev.map((f) =>
                        f.name === file.name ? { ...f, status: 'error', error: errorMsg } : f
                    )
                );
            }
        }

        setStatus({ state: 'done' });
    }, [ensureDb]);

    const clearAll = useCallback(async () => {
        try {
            await ensureDb();
            await clearDb();
            setFiles([]);
            setChunkCount(0);
            setStatus({ state: 'idle' });
        } catch (e: any) {
            setStatus({ state: 'error', error: e?.message ?? String(e) });
        }
    }, [ensureDb]);

    return {
        status,
        files,
        chunkCount,
        backendInfo,
        dbReady,
        ingestFiles,
        clearAll,
    };
}
