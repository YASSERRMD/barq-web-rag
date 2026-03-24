import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [wasm(), topLevelAwait(), react()],
    resolve: {
        alias: {
            // Map the submodule to the local public folder for easier browser detection
            'barq-mesh-web': resolve(__dirname, 'public/barq-mesh-web-pkg'),
            'barq-vweb': resolve(__dirname, 'public/barq-vweb-pkg'),
            'barq-wasm': resolve(__dirname, 'public/barq-wasm-pkg'),
        },
    },
    server: {
        headers: {
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp',
        },
    },
    preview: {
        headers: {
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp',
        },
    },
    optimizeDeps: {
        // Exclude WASM from optimization (they are already binary assets)
        // But NOT transformers (Vite should bundle it for workers)
        exclude: ['barq-vweb', 'barq-wasm', 'barq-mesh-web'],
    },
})
