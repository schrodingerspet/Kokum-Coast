import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-router-dom'], // Force Vite to pre-optimize react-router-dom
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});