// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// 
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), cloudflare()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return
        warn(warning)
      }
    }
  }
})