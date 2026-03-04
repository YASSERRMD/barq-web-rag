/**
 * useDocumentIngestion.ts — React hook that manages the full pipeline:
 * File → parse text → chunk → insert into barq-vweb vector DB.
 */

import { useState, useCallback } from 'react';
import { parseFile } from '../lib/documentParser';
import { chunkText } from '../lib/chunker';
import { initDb, insertChunks, clearDb, getCount, getBackendInfo } from '../lib/vectorDb';

export type IngestionStatus =
    | { state: 'idle' }
    | { state: 'initialising' }
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

    const ensureDb = useCallback(async () => {
        if (dbReady) return;
        setStatus({ state: 'initialising' });
        await initDb();
        setBackendInfo(getBackendInfo());
        setDbReady(true);
    }, [dbReady]);

    const ingestFiles = useCallback(async (newFiles: FileList | File[]) => {
        const fileArray = Array.from(newFiles);
        if (fileArray.length === 0) return;

        try {
            await ensureDb();
        } catch (e: any) {
            setStatus({ state: 'error', error: `DB init failed: ${e?.message ?? e}` });
            return;
        }

        // Add files to the list with "pending" status
        setFiles((prev) => [
            ...prev,
            ...fileArray.map((f) => ({
                name: f.name,
                size: f.size,
                chunks: 0,
                status: 'pending' as const,
            })),
        ]);

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

                // Step 3: Embed & insert in batches of 50
                const BATCH = 50;
                let inserted = 0;
                for (let i = 0; i < chunks.length; i += BATCH) {
                    const batch = chunks.slice(i, i + BATCH);
                    console.log(`[Ingestion] Inserting batch ${i} to ${i + batch.length}...`);
                    await insertChunks(batch);
                    console.log(`[Ingestion] Batch inserted.`);
                    inserted += batch.length;
                    setStatus({
                        state: 'embedding',
                        fileName: file.name,
                        progress: Math.round((inserted / chunks.length) * 100),
                    });
                }

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
