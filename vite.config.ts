import { defineConfig } from 'vite';
import path from 'node:path';
import url from 'node:url';
import solid from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import ts from 'rollup-plugin-ts';

export default defineConfig({
  plugins: [solid(), tsconfigPaths(), ts({ transpileOnly: true })],
  build: {
    lib: {
      entry: path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), 'src/index.ts'),
      name: 'solid-social',
      fileName: (format: string) => `solid-social.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['solid-js', '@solid-primitives/intersection-observer'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'solid-js': 'SolidJS',
          '@solid-primitives/intersection-observer': 'SolidPrimitivesIntersectionObserver',
        },
      },
    },
  },
});
