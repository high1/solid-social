import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import ts from 'rollup-plugin-ts';

export default defineConfig({
  plugins: [solid(), tsconfigPaths(), ts({ transpileOnly: true })],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'solid-social',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['solid-js', 'solid-js/web', 'solid-js/store'],
    },
    target: 'esnext',
  },
});
