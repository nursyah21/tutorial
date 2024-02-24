<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  titleTemplate: (title) => {
    return title ? 'ApexCharts - ' + title : 'ApexCharts';
  }
})
</script>