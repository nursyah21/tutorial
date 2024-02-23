<template>
    <div>
        dashboard
    </div>
</template>

<script setup lang="ts">
// import type { BreadcrumbLink } from '#ui/types'

export interface Props {
    links: String[]
}

defineProps<Props>()
</script>