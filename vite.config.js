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
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
    manifest: {
      name: "Music App",
      short_name: 'MyApp',
      description: 'enjoy listening to great music!',
      theme_color: "#ff5e3e",
      icons: [
        {
          src: 'assets/img/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'assets/img/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,jpg,}"],
    }
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
