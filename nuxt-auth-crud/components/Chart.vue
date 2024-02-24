<template>
    <ClientOnly>
        <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
    </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()
const isLoading = ref(true)

const options = ref({
    chart: {
        id: 'vuechart-example'
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
})
const series = ref([{
    name: 'series-1',
    data: [30, 40, 45, 50, 49, 60, 70, 91]
}])
function updateColorMode() {
    console.log(colorMode)
    options.value = {
        ...options.value,
        // @ts-ignore
        theme: {
            mode: colorMode.value
        }
    }
    isLoading.value = false
}
watch(colorMode, () => {
    updateColorMode()
})
updateColorMode()
</script>
  