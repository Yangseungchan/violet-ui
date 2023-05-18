import { resolve } from 'node:path'

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

import * as pkg from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'violet-ui',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        if (format === 'es') {
          return `violet-ui.js`
        } else {
          return `violet-ui.${format}`
        }
      },
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      output: {
        globals: {
          react: 'React',
          classnames: 'classNames',
        },
      },
    },
  },
  plugins: [
    vanillaExtractPlugin({ identifiers: 'short' }),
    react(),
    tsconfigPaths(),
    dts({
      exclude: ['src/**/*.stories.mdx', 'src/**/*.stories.tsx', 'src/**/*.test.ts*'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@/styles',
        replacement: resolve(__dirname, './src/styles'),
      },
      {
        find: '@/components',
        replacement: resolve(__dirname, 'src/components'),
      },
    ],
  },
})
