<template>
    <div>
        apex chart

        <div class="h-screen flex items-center justify-center" v-if="isLoading">
            <UProgress animation="carousel" class="max-w-64"/>
        </div>
        <ClientOnly>
            <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
        </ClientOnly>
    </div>
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

const updateChartMode = () => {
    // console.log(colorMode.value)
    options.value = {
        ...options.value,
        theme: {
            mode: colorMode.value
        }
    }
}


watch(colorMode, () => {
    updateChartMode()
    isLoading.value = false
})


</script>