import presetIcons from '@unocss/preset-icons'
import presetWind4 from '@unocss/preset-wind4'

import { defineConfig, presetAttributify, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: [
    // {
    //   'bg-base': 'bg-white dark:bg-black',
    //   'border-base': 'border-[#8884]',
    // },
    // [/^btn-(\w+)$/, ([_, color]) => `op50 px2.5 py1 transition-all duration-200 ease-out no-underline! hover:(op100 text-${color} bg-${color}/10) border border-base! rounded`],
  ],
  rules: [
    // [/^slide-enter-(\d+)$/, ([_, n]) => ({
    //   '--enter-stage': n,
    // })],
  ],
  presets: [
    presetIcons({
      scale: 1.2,
    }),
    presetAttributify(),
    presetWind4(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  safelist: [
    'i-ri-menu-2-fill',
  ],
})
