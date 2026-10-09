import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import {ordersApi} from './server/ordersApi';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  for (const key of ['ADMIN_PASSWORD', 'ORDER_STORE_PATH']) {
    if (process.env[key] === undefined && env[key]) process.env[key] = env[key];
  }

  return {
    plugins: [react(), tailwindcss()],
    configureServer(server) {
      server.middlewares.use('/api', ordersApi);
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
