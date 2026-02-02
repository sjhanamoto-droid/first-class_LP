import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command }) => {
    // 環境変数 DEPLOY_TARGET で base を切り替え
    // DEPLOY_TARGET === "gh" のときだけ "/first-class_LP/", それ以外は "/"
    const deployTarget = process.env.DEPLOY_TARGET || '';
    const base = command === 'serve' 
        ? '/' 
        : deployTarget === 'gh' 
            ? '/first-class_LP/' 
            : '/';
    
    // manifest.json を動的に生成するプラグイン
    const manifestPlugin = (basePath: string) => {
        return {
            name: 'generate-manifest',
            writeBundle() {
                const manifestPath = path.resolve(__dirname, 'public/manifest.json');
                const manifestContent = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
                
                // base に応じて start_url と icons のパスを更新
                manifestContent.start_url = basePath;
                manifestContent.icons = manifestContent.icons.map((icon: any) => ({
                    ...icon,
                    src: `${basePath}${icon.src.replace(/^\//, '')}`
                }));
                
                // dist に manifest.json を書き出し
                const distManifestPath = path.resolve(__dirname, 'dist/manifest.json');
                fs.writeFileSync(distManifestPath, JSON.stringify(manifestContent, null, 2));
            }
        };
    };
    
    return {
        base,
        plugins: [react(), manifestPlugin(base)],
        server: {
            port: 3000,
            host: 'localhost',
            open: true,
            watch: {
                usePolling: false,
            },
            hmr: {
                overlay: true,
            },
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
