<template>
    <UContainer class="flex flex-col gap-y-2">

        <h2>Counter Store</h2>

        <p data-testid="counter-values">
            Counter: {{ counter.n }}. Double: {{ counter.double }}
        </p>

        <p>Increment the Store:</p>

        <UButton @click="counter.increment()" data-testid="increment">+1</UButton>
        <UButton @click="counter.increment(10)">+10</UButton>
        <UButton @click="counter.increment(100)">+100</UButton>
        <UButton @click="counter.n++">Direct Increment</UButton>
        <UButton @click="
            counter.$patch((state) => {
                state.n++
                state.incrementedTimes++
            })
            ">direct patch</UButton>
    </UContainer>
</template>

<script setup lang="ts">
// const counter = useCoun
const counter = useCounter()
console.log(counter)
</script>