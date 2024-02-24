<template>
    <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
        <h1 class="text-2xl font-bold text-center mb-2">Logout</h1>
        <UProgress animation="carousel" />
    </UCard>
</template>

<script setup lang="ts">


definePageMeta({
    layout: 'auth'
})
useSeoMeta({
    title: 'login'
})

</script>