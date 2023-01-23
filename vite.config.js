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
    environment: 'jsdom',
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
