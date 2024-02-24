<template>
    <h1 class="text-2xl font-bold">
        Dashboard
    </h1>
    <UBreadcrumb divider="/" :links="[{ label: 'Home', to: '/dashboard' }]" />
    <div>

        <div class="my-4">
            <div class="flex items-center justify-center" v-if="isLoading">
                <UProgress animation="carousel" class="max-w-64" />
            </div>
            <ClientOnly v-else>
                <apexchart width="100%" height="400" type="bar" :options="options" :series="series"
                    class="bg-transparent max-w-[54em]"></apexchart>
            </ClientOnly>
        </div>
    </div>
</template>
  
<script setup>

definePageMeta({
    layout: 'dashboard'
})
useHead({
    title: 'dashboard'
})

const colorMode = useColorMode()
const isLoading = ref(true)
const options = ref({
    chart: {
        id: 'vuechart-example',
        theme: {
            mode: 'light'
        }
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
    options.value = {
        ...options.value,
        // @ts-ignore
        theme: {
            mode: colorMode.value
        }
    }
    options.value = {
        ...options.value,
        chart: {
            id: 'vuechart-example',
            background: '#ffffff0'
        }
    }
    isLoading.value = false
}


watch(colorMode, () => {
    updateChartMode()
    isLoading.value = false
})

onMounted(() => {
    updateChartMode()
})
</script>