<div align="center">

<img src="assets/logo.png" alt="barq-mesh-web logo" width="180"/>
<br>

# barq-mesh-web

**Browser Native Distributed AI Agent Mesh**
<br>

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)](#)
[![WASM](https://img.shields.io/badge/Target-WebAssembly-blue?logo=webassembly&style=flat-square)](#)
[![Rust](https://img.shields.io/badge/Language-Rust-orange?logo=rust&style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple?style=flat-square)](#)

</div>

## Overview

**barq-mesh-web** is a high-performance, purely browser-native distributed compute and execution layer. Built on WebAssembly (SIMD) and Web Workers, it empowers decentralized, zero-server autonomous task routing, executing, and vector-based semantic retrieval within the browser.

By pushing dense computation and AI loops natively to the network edge (the client tab), it effectively minimizes backend infrastructure dependence.

### Key Capabilities

* **Web Worker Pooling**: Distributes dense execution across multiple isolated Web Workers via ChannelBundle and MessageChannel for optimal non-blocking performance.
* **In-Browser RAG Engine**: Incorporates barq-vweb to deploy an optimized HNSW kNN + BM25 Hybrid index entirely in WASM, executing responsive chunking and document retrieval locally.
* **SIMD Accelerated Verifications**: Every task output undergoes local semantic verification using robust cosine similarity evaluation natively powered by barq-wasm SIMD bindings.
* **Cross-Tab Topologies**: Utilizes BroadcastChannel to connect tabs into peer computing nodes, enforcing master/follower topologies to prevent OPFS (Origin Private File System) sync deadlocks.
* **MCP Integration**: Implements a native embedded Model Context Protocol (MCP) JSON-RPC server. Easily maps external IDE requests (e.g., VSCode, Cursor) directly to your local browser execution loop.

## Architecture

The project maps complex backend LLM execution infrastructures into a lightweight edge agent structure over 7 distinct modules:

1. **Core Foundation and OPFS Storage**
   Utilizes wasm-pack bridging barq-wasm (SIMD math) and barq-vweb into the central BarqMeshWeb rust interface.

2. **Mesh Queue and Worker Pool**
   Orchestration layer combining an intelligent MeshQueue capable of deduplication and a heavily parallelized WorkerPool.

3. **Text Ingestion and Hybrid Search**
   Advanced offline retrieval implementing ONNX MiniLM v6 dense embeddings and BM25 sparse hybrid merging inside WASM memory boundaries.

4. **Agent Execution Loop**
   Executes autonomous logic locally: Planner to Executor to Verifier to Critic. Requires a guaranteed >0.85 SIMD evaluation threshold.

5. **LLM Router and Integrations**
   Interfaces contexts natively with in-browser offline engines (WebLLM - Phi-3/Qwen) and elegantly dynamically falls back to Cloud APIs (OpenRouter).

6. **Cross-Tab Mesh Computations**
   Orchestrates local tabs into unified distributed topologies utilizing reliable Browser Broadcast algorithms.

7. **MCP Server Mode**
   An embedded tunnel serving tools/list and tools/call parsing direct TCP requests over the standard browser-native MCP protocol.

## Running Locally

barq-mesh-web necessitates standard Rust WebAssembly toolchains for builds.

You can compile the library using the standard build script:

```bash
bash build.sh
```

### Demos and UI Interfaces

A suite of interactive native web applications have been provided. Serve the repository root over a standard localized web server (using python3 -m http.server) to access the testing views:

* `examples/phase1_store/index.html` : HNSW embedding logic.
* `examples/phase2_mesh/index.html` : Worker pipeline deduplications.
* `examples/phase3_search/index.html` : Hybrid search validation matrices.
* `examples/phase4_agents/index.html` : The native autonomous execution sequence.
* `examples/phase5_llm/index.html` : Offline/Online prompt RAG simulations.
* `examples/phase6_crosstab/index.html` : Multi-tab election logic testbed.
* `examples/phase7_mcp/index.html` : Embedded MCP JSON-RPC routing loop.

**Note**: For WebWorker shared memory boundaries, ensure proper Cross-Origin-Opener-Policy same-origin restrictions are enabled on your test server to utilize SharedArrayBuffer correctly.

<div align="center">
<i>Open Source under the MIT License</i>
</div>
