import react from '@vitejs/plugin-react'
import path from 'path';
import {defineConfig} from 'vite'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr()
    ],
    resolve: {
        alias: {
            '@styles': path.join(__dirname, './src/assets/styles'),
            '~features': path.join(__dirname, './src/features'),
            '~core': path.join(__dirname, './src/core'),
            '~pages': path.join(__dirname, './src/pages'),
        }
    }
})
