import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    plugins: [react(), svgr()],
    resolve: {
      alias: {
        '@styles': path.join(__dirname, './src/assets/styles'),
        '~features': path.join(__dirname, './src/features'),
        '~core': path.join(__dirname, './src/core'),
        '~pages': path.join(__dirname, './src/pages'),
      },
    },
    css: {
      modules: {
        // If environment is not Prod include the name of the component for stylesheets.
        generateScopedName: isProd ? `[hash:base64:8]` : `[name]_[local]_[hash:base64:5]`,
      },
    },
  };
});
