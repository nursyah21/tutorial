<template>
    <h1 class="text-2xl font-bold">
        Users
    </h1>
    <UBreadcrumb divider="/" :links="[{ label: 'Home', to: '/dashboard' }, { label: 'Users', to: '/dashboard/users' }]" />

    <DashboardUserTable />
</template>

<script setup>
definePageMeta({
    layout: 'dashboard'
})
useHead({
    title: 'users'
})

const columnsTable = [{
    key: 'id',
    label: '#',
    sortable: true
}, {
    key: 'title',
    label: 'Title',
    sortable: true
}, {
    key: 'completed',
    label: 'Status',
    sortable: true
}, {
    key: 'actions',
    label: 'Actions',
    sortable: false
}]
</script>