// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  nitro: {
    plugins: ["~/server/plugins/mongodb.ts"],
  },
  runtimeConfig: {
    apiSecret: "secret key",
    mongodbUri: "mongodb uri",
    public: {
      axios: "axios uri",
    },
  },
  imports: {
    dirs: ["./stores"],
  },
  // pinia: {
  //   autoImports: ["defineStore", "acceptHMRUpdate"],
  // },
});
