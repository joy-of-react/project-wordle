import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './',
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '$': path.resolve(__dirname, './'),
        },
    },
    server: {
        host: true,
        port: 3000,
        open: false,
        strictPort: true,
        cors: true,
    },
    build: {
        outDir: 'dist',
        target: 'esnext',
        assetsInlineLimit: 4096,
        chunkSizeWarningLimit: 1000,
    },
});
