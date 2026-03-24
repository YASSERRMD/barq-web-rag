// worker.js - barq-mesh-web Web Worker bootstrap
// Phase 2 entry point; loaded by WorkerPool for each spawned worker.
// This file is intentionally minimal - all logic lives in Rust (worker/entry.rs).

import init, { worker_entry_point } from "./pkg/barq_mesh_web.js";

self.onmessage = async (ev) => {
    const { workerId, port } = ev.data;
    await init();
    worker_entry_point(workerId, port);
};
