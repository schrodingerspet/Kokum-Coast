import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react()],
  devToolbar: {
    enabled: false
  },
  vite: {
    ssr: {
      noExternal: ["react-router-dom", "react-router"],
      external: [],
    },
    resolve: {
      conditions: ['import', 'module', 'browser', 'default'],
      mainFields: ['module', 'main'],
    },
    optimizeDeps: {
      include: ['react-router-dom', 'react-router'],
    },
  },
});