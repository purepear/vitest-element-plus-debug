import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default {
  resolve: {
    alias: [
      { find: /^@\//, replacement: '/' },
    ]
  },
  plugins: [
    vue(),
  ],
  test: {
    globals: true,
    maxThreads: process.env.CI ? 2 : undefined,
    minThreads: process.env.CI ? 2 : undefined,
    alias: [
      {
        find: /^element-plus$/,
        replacement: resolve(
          __dirname,
          'node_modules',
          'element-plus/dist/index.full.mjs'
        ),
      },
    ],
  },
}
