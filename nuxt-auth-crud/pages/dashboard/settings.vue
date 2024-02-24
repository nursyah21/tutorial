<template>
    <h1 class="text-2xl font-bold">
        Settings
    </h1>
    <UBreadcrumb divider="/" :links="[{ label: 'Home', to: '/dashboard' }, { label: 'Settings', to: '/dashboard/settings' }]" />
</template>

<script setup>
definePageMeta({
    layout: 'dashboard'
})
useHead({
    title: 'settings'
})
</script>