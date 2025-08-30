import { defineConfig } from 'vite'
import { resolve } from 'path'
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        getStarted: resolve(__dirname, 'get-started.html'),
        features: resolve(__dirname, 'features.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        docs: resolve(__dirname, 'docs.html'),
        app: resolve(__dirname, 'app/index.html'),
      }
    }
  }
})
