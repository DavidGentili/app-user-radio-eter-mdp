import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@helpers': '/src/helpers',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@services': '/src/services',
      '@assets': '/assets',
      '@hooks': '/src/hooks',

    }
  },
  define: {
    "process.env": process.env,
    VITE_API_URL: process.env.VITE_API_URL
  }
})
