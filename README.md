# barq-web-rag

A fully browser-native Retrieval-Augmented Generation (RAG) application. This project enables users to upload documents (PDF, DOCX, TXT) and chat with a locally-running Large Language Model directly in the browser, with no backend dependencies or external API calls.

## Architecture & Technologies

The application relies entirely on client-side inference and vector search technologies:

*   **Frontend Framework:** React 19, TypeScript, and Vite
*   **Vector Database:** [barq-vweb](https://github.com/YASSERRMD/barq-vweb) (Browser-native HNSW + BM25 vector database)
*   **WASM Compute Acceleration:** [barq-wasm](https://github.com/YASSERRMD/barq-wasm) (High-performance WebAssembly SIMD runtime powering the vector database)
*   **Local LLM Inference:** `@huggingface/transformers` running via WebGPU
*   **Language Model:** [LiquidAI/LFM2.5-1.2B-Thinking-ONNX](https://huggingface.co/LiquidAI/LFM2.5-1.2B-Thinking-ONNX) (A 1.2B parameter model quantized to 4-bit, optimised for running in the browser)

## Key Features

*   **100% Client-Side:** All document parsing, text chunking, embedding generation, vector search, and LLM inference occur entirely within the user's browser. No data ever leaves the local machine.
*   **Multi-Format Document Parsing:** Supports direct upload and text extraction for `.txt`, `.md`, `.pdf` (via `pdfjs-dist`), and `.docx` (via `mammoth`).
*   **Semantic Search Pipeline:** Utilizes a sliding-window text chunker that respects sentence boundaries, generating chunks that are embedded and queried via `barq-vweb`.
*   **Streaming RAG Generation:** Automatically retrieves the top document chunks based on the user query, injects them into the LLM system context, and streams the reasoning and final answer back to the UI.
*   **WebAssembly & WebGPU:** Leverages modern web standards for native-like performance.

## Prerequisites & Browser Support

This application requires a modern browser with WebGPU and WebAssembly threading support:
*   Chrome 113+
*   Edge 113+
*   Safari 17+ (may require explicit WebGPU enablement in experimental features)
*   Firefox (WebGPU currently in nightly/experimental)

**Note on Initial Load:** The language model requires a one-time download of approximately 800MB. This is cached by the browser for subsequent sessions.

## Local Development Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YASSERRMD/barq-web-rag.git
    cd barq-web-rag
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Production Build:**
    The application relies on `SharedArrayBuffer` for WebAssembly threads, which requires specific security headers (`Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp`). The Vite configuration handles this for local development and preview:
    ```bash
    npm run build
    npm run preview
    ```
    If deploying to production, ensure your hosting provider (Nginx, Vercel, Cloudflare Pages, etc.) is configured to return these headers.

## Licensing
This project is provided as-is. Please refer to the respective licenses of the underlying technologies (`barq-vweb`, `barq-wasm`, `transformers.js`, and the `LFM2.5` model).
