import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command }) => {
    // 開発環境では base を / に、本番環境では /first-class_LP/ に
    const base = command === 'serve' ? '/' : '/first-class_LP/';
    
    return {
        base,
        plugins: [react()],
        server: {
            port: 3000,
            host: '0.0.0.0', // すべてのネットワークインターフェースでリッスン
            open: true, // 自動的にブラウザを開く
        },
    define: {
        'process.env.API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || ''),
        'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || '')
    },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '.'),
            }
        }
    };
});
