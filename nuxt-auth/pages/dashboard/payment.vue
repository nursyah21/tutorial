<template>
    <div>Hello Home Page</div>
    <ClientOnly>
        <UForm :state="state" @submit="onSubmit">
            <UCard class="my-2 max-w-xs">
                <h1 class="text-xl font-bold">{{ state.item }}</h1>
                <div class="mt-2">
                    <h1>{{ formatNumber(state.price) }}</h1>
                </div>
                <template #footer>
                    <div class="flex justify-between">
                        <UButton type="submit" :disabled="isSubmit">Checkout</UButton>
                        <UInput type="number" class="max-w-[60px]" v-model="state.amount"></UInput>
                    </div>
                </template>
            </UCard>
        </UForm>
        <template #fallback>
            <USkeleton class="w-full h-[100px]" />
        </template>
    </ClientOnly>
</template>
<script lang="ts" setup>
import type { FormSubmitEvent } from '#ui/types'
const state = reactive({
    item: 'Sneaker',
    price: 200000,
    amount: 1
})
const isSubmit = ref(false)
async function onSubmit(event: FormSubmitEvent<any>) {
    const data = event.data

    // prepare Snap API parameter ( refer to: https://snap-docs.midtrans.com ) minimum parameter example:
    const parameter = {
        "transaction_details": {
            "order_id": "order-id-node-" + Math.round((new Date()).getTime() / 1000),
            "gross_amount": data.price * data.amount
        }, "credit_card": {
            "secure": true
        }
    };
    
    $fetch('/api/midtrans/token', {
        method: 'post',
        body: { parameter }
    }).then(e => {
        console.log('success', e)
        navigateTo(e, {external: true})
    }).catch(e => {
        console.log(e)
    }).finally(() => isSubmit.value = false)


}

onMounted(async () => {

})

definePageMeta({
    layout: 'auth'
})
</script>~/utils/realtime