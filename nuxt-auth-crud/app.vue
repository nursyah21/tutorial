<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: (title) => {
    return title ? `${title} | Nuxt Auth` : 'Nuxt Auth'
  },
})
</script>