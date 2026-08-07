import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// GitHub Pages 部署在 https://123wch123.github.io/myPortfolio/
// 若部署到自定义域名或根路径,请将 base 改为 '/'
export default defineConfig({
    plugins: [react()],
    base: '/myPortfolio/',
    resolve: {
        alias: [
            { find: '@/assets', replacement: fileURLToPath(new URL('./assets', import.meta.url)) },
            { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        ],
    },
});