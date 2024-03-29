// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  devServer: {
    port: 5173,
  },
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  supabase: {
    redirect: false,
  },
});
