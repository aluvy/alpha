import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    asyncEntry: false,
    payloadExtraction: true,
    renderJsonPayloads: true,
    crossOriginPrefetch: true
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
  ],
  plugins: [
    // '@/assets/js/front.js'
  ],
  css: [
    // '@/assets/css/style.css'
  ],

  app: {
    head: {
      title: "vue 3 + Nuxt 3 Starter",
      link: [
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' },
      ]
    },
  }
})
