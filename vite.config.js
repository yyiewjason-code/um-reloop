import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'um-reloop' with whatever you name your GitHub repository
export default defineConfig({
  plugins: [react()],
  base: '/um-reloop/',
})