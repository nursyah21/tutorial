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
onMounted(async () => {
    const userStore = useStoreUser()
    await new Promise(r => setTimeout(r, 2000))
    userStore.resetToken()
    navigateTo('/')

})

</script>