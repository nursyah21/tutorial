<template>
  <NuxtLayout>
    <NuxtPage />
    <UNotifications />
  </NuxtLayout>
</template>

<script setup lang="ts">
import axios from 'axios'
const config = useRuntimeConfig()

useSeoMeta({
  titleTemplate: (title) => {
    return title ? `${title} | Nuxt Auth` : 'Nuxt Auth'
  },
})


axios.defaults.baseURL = config.public.axios
</script>