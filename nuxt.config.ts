// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/eslint-module",
    "@pinia/nuxt",
    "@formkit/auto-animate",
    "@vueuse/nuxt",
  ],
});