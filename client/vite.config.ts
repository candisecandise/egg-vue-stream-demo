import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: path.resolve(__dirname),
  build: {
    manifest: true,
    emptyOutDir: true,
    outDir: path.resolve(__dirname, '../server/app/public/dist'), // 设置输出目录为 server/public
    rollupOptions: {
      output: {
        // format: 'iife'
      }
    }
  }
})
