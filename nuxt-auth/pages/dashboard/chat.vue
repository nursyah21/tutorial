<template>
    <div>Hello Home Page</div>
    <UCard class="my-2">
        <ClientOnly>
            <UForm :state="state" class="flex" @submit="onSubmit">
                <UInput v-model="state.message" required class="flex-1" :ui="{ icon: { trailing: { pointer: '' } } }">
                    <template #trailing>
                        <!-- <UButton type="submit" variant="link" icon="i-material-symbols:send" @click="console.log(useRuntimeConfig().ablyKey)" /> -->
                        <UButton type="submit" variant="link" icon="i-material-symbols:send" />
                    </template>
                </UInput>
            </UForm>

            <template #fallback>
                <USkeleton class="w-full h-[100px]" />
            </template>
        </ClientOnly>
    </UCard>
</template>
<script lang="ts" setup>
import type { FormSubmitEvent } from '#ui/types'
const state = reactive({
    message: '',
    file: File
})

async function onSubmit(event: FormSubmitEvent<any>) {
    const data = event.data

    const channel = realtime().channels.get('r1')
    await channel.publish('message', data.message)

    console.log('msg', data.message)

}

onMounted(async () => {
    // if (process.client) {
        await realtime().connection.once('connected')
        const channel = realtime().channels.get('r1');      

        await channel.subscribe('message', (message) => {
            console.log('Received a greeting message in realtime: ' + message.data)
        });

        // console.log(useRuntimeConfig().public.ablyKey)
    // }
})

definePageMeta({
    layout: 'auth'
})
</script>~/utils/realtime