<template>
    <h1 class="text-2xl font-bold">
        Users
    </h1>
    <UBreadcrumb divider="/" :links="[{ label: 'Home', to: '/dashboard' },{ label: 'Users', to: '/dashboard/users' }]" />
</template>

<script setup>
definePageMeta({
    layout: 'dashboard'
})
useHead({
    title: 'users'
})
</script>