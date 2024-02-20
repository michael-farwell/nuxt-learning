// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 5173,
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
});
