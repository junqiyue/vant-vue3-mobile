import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import { vitePluginVersionMark } from 'vite-plugin-version-mark';

import { dateFormat } from './src/utils/date.js';

// eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
    vitePluginVersionMark({
      version: dateFormat(Date.now(), 'Y年m月d日 H时i分'),
      ifLog: isProd,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
