import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

function NutUIResolver() {
  return {
    type: 'component' as const,
    resolve: (name: string) => {
      if (name.startsWith('Nut')) {
        const componentName = name.slice(3)
        return {
          importName: componentName,
          name: componentName,
          from: '@nutui/nutui',
          sideEffects: `@nutui/nutui/dist/packages/${componentName.toLowerCase()}/style/css`,
        }
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    vue(),
    vueJsx(),
    vueDevTools(),
    Components({
      resolvers: [NutUIResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
