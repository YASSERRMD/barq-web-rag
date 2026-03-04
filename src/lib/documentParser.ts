/**
 * documentParser.ts — Extracts plain text from TXT, PDF, and DOCX files.
 * Uses pdfjs-dist for PDF and mammoth for DOCX.
 */

export async function parseFile(file: File): Promise<string> {
    const ext = file.name.split('.').pop()?.toLowerCase() ?? '';

    if (ext === 'txt' || ext === 'md') {
        return readAsText(file);
    }

    if (ext === 'pdf') {
        return parsePdf(file);
    }

    if (ext === 'docx') {
        return parseDocx(file);
    }

    // Fallback: try reading as text
    try {
        return await readAsText(file);
    } catch {
        throw new Error(`Unsupported file type: .${ext}`);
    }
}

function readAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(new Error('Failed to read file as text'));
        reader.readAsText(file, 'utf-8');
    });
}

async function parsePdf(file: File): Promise<string> {
    // Dynamic import to keep initial bundle small
    const pdfjsLib = await import('pdfjs-dist');
    // Point to the PDF.js worker bundled with pdfjs-dist
    pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.mjs',
        import.meta.url
    ).toString();

    const arrayBuf = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(arrayBuf) }).promise;

    const pageTexts: string[] = [];
    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items
            .map((item: any) => ('str' in item ? item.str : ''))
            .join(' ');
        pageTexts.push(pageText);
    }

    return pageTexts.join('\n\n');
}

async function parseDocx(file: File): Promise<string> {
    const mammoth = await import('mammoth');
    const arrayBuf = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer: arrayBuf });
    return result.value;
}
