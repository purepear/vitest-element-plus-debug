import vue from '@vitejs/plugin-vue'

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
    deps: {
      inline: ['element-plus'],
    },
  },
}
