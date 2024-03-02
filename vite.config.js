import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/nvcc-coding-club.github.io/',
  plugins: [react()],
})
