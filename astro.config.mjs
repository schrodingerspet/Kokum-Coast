import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [react(), tailwind()],
  devToolbar: {
    enabled: false
  },
  vite: {
    ssr: {
      noExternal: [],
      external: ["react-router-dom", "react-router"],
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