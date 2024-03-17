// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/supabase"],
  colorMode: {
    preference: 'light'
  },
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm'
    }
  }
})