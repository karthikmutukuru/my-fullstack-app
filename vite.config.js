import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@mui/material'] // (optional) if you encounter any issues with MUI pre-bundling
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  },
  define: {
    'process.env': {}
  }
});
