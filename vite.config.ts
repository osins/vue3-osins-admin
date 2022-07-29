import path from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vueI18n } from "@intlify/vite-plugin-vue-i18n"
import Components from "unplugin-vue-components/vite"
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from "unplugin-vue-components/resolvers"
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: "index.html",
    port: 3200,
    host: "0.0.0.0",
    watch: { usePolling: true },
  },
  preview: {
    port: 3200,
    host: "0.0.0.0",
  },
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, './**/locales/**'),
      compositionOnly: true
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/components', 'src/layouts'],
      resolvers: [ElementPlusResolver(), VantResolver()],
    }),]
})
