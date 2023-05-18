import { resolve } from 'node:path'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vanillaExtractPlugin({ identifiers: 'debug' }), react(), tsconfigPaths()],
  resolve: {
    alias: [
      {
        find: '@/styles',
        replacement: resolve(__dirname, './src/styles'),
      },
      {
        find: '@/components',
        replacement: resolve(__dirname, './src/components'),
      },
    ],
  },
})
