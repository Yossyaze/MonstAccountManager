import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 相対パスを使用することでGitHub Pagesなどのサブディレクトリでも動作するようにします
})
