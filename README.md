# Barq RAG

A high-performance, browser-native Retrieval-Augmented Generation (RAG) platform. This application enables local document processing and private AI interaction without external API dependencies or data exfiltration.

## Core Technology Stack

The platform utilizes a multi-layered WASM and WebGPU architecture for client-side inference:

- **RAG Engine**: [barq-mesh-browser](https://github.com/YASSERRMD/barq-mesh-browser) – Native WebAssembly mesh orchestrating parallel workers for high-speed document ingestion and hybrid retrieval.
- **Vector Storage**: [barq-vweb](https://github.com/YASSERRMD/barq-vweb) – High-performance HNSW and BM25 indexing with local persistence.
- **Compute Runtime**: [barq-wasm](https://github.com/YASSERRMD/barq-wasm) – SIMD-accelerated compute kernels for vector operations and similarity search.
- **AI Inference**: [transformers.js](https://huggingface.co/docs/transformers.js) / WebGPU – Running local LLMs (e.g., LFM2.5) directly on the client hardware.

## Features

- **Private & Local**: 100% of data processing, embedding, and inference occurs on-device.
- **Hybrid Search**: Unified BM25 and semantic search with RRF reranking for superior context relevance.
- **Universal Ingestion**: Parallel processing of PDF, DOCX, Markdown, and TXT files.
- **State-of-the-Art Retrieval**: Leverages `barq-mesh-browser` for near-instantaneous indexing of large document sets.

## Getting Started

1. **Install dependencies**: `npm install`
2. **Launch development server**: `npm run dev`
3. **Build for production**: `npm run build`

## Prerequisites

- Modern browser with **WebGPU** and **WebAssembly Threading** support (Chrome/Edge 113+, Safari 17+).

---
*Powered by the Barq Mesh ecosystem.*
