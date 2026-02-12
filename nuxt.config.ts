// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  plugins: ['./app/plugins/iconify.ts'],
  css: ['./app/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  devtools: { enabled: false }
})
