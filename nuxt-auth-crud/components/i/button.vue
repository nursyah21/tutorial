<template>
    <UButton :color="color">
        <template #default>
            <slot></slot>
        </template>
    </UButton>
</template>

<script setup>

const checkColor = () => {
    const theme = useColorMode()
    return theme.value == 'dark' ? 'green' : 'blue'
}
const color = ref(checkColor())

watch(useColorMode(), () => {
    color.value = checkColor()
})
</script>