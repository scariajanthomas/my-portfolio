import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'my-portfolio' with your actual repo name if different
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
})