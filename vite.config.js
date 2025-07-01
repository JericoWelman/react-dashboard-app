import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // เพิ่มบรรทัดนี้

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // เพิ่มส่วนนี้
    alias: {
      "@": path.resolve(__dirname, "./src"), // เพิ่มส่วนนี้
    },
  },
})