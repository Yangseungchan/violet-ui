import { resolve } from 'node:path'

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import * as pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vanillaExtractPlugin({ identifiers: 'short' }), react(), tsconfigPaths()],
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
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
      external: [...Object.keys(pkg.peerDependencies)],
      output: {
        globals: {
          react: 'React',
          classnames: 'classNames',
        },
      },
    },
  },
  server: {
    port: 3000,
  },
})
