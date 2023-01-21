import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
  resolve: {
    alias: [
      { find: /^@\//, replacement: '/' },
    ]
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: [],
      resolvers: [ElementPlusResolver()],
    }),
  ],
  test: {
    reporter: 'dot',
    environment: 'jsdom',
    deps: {
      inline: ['element-plus'],
    },
  },
}
