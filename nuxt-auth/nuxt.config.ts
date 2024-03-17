// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt"
  ],
  colorMode: {
    preference: 'light'
  },
  runtimeConfig: {
    mongodbUri: 'uri',
    secretAuth: 'secret',
    brevoKeys: 'brevo',
    imagekitPrivate: 'imagekit',
    midtransClient: '',
    midtransServer: '',
    public:{
      ablyKey: '',
    }
  }
})