import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa"

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    registerType: "autoUpdate",
    devOptions: {
      enabled: true,
    },
    manifest: {
      name: "Music App",
      short_name: 'MyApp',
      description: 'enjoy listening to great music!',
      theme_color: "#ff5e3e",
      icon: [
        {
          source: "assets/img/pwa-192x192.png",
          size: "192x192",
          type: "image/png",
        }
      ]
    },
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
