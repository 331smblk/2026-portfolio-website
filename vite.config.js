import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensures client-side routing works correctly on Vercel
  // (handled by vercel.json rewrites, but also good locally)
  server: {
    port: 3000,
  },
  build: {
    // Generate source maps for easier debugging in production
    sourcemap: false,
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
