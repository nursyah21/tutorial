<template>
    <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
        <h1 class="text-4xl font-bold text-center mb-2">Login</h1>
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
            <ClientOnly>
                <UFormGroup label="Email" name="email">
                    <UInput v-model="state.email" />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <UInput v-model="state.password" type="password" />
                </UFormGroup>

                <UButton type="submit" class="w-full justify-center" :color="useColorPrimary()">
                    <template v-if="isSubmit">
                        <UIcon name="i-eos-icons-loading" /> Please wait...
                    </template>
                    <template v-else>
                        Login
                    </template>
                </UButton>
                <div class="mt-1 flex justify-center">
                    <ULink to="/register" class="text-sm underline hover:no-underline">create an account </ULink>
                </div>
                <template #fallback>
                    <Skeleton />
                </template>
            </ClientOnly>
        </UForm>
    </UCard>
</template>

<script setup lang="ts">
import z from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import axios from 'axios';

definePageMeta({
    layout: 'auth'
})
useSeoMeta({
    title: 'login'
})

const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive({
    email: undefined,
    password: undefined
})
const isSubmit = ref(false)
// @ts-ignore
const userStore = useStoreUser()

async function onSubmit(event: FormSubmitEvent<any>) {
    const data = event.data
    isSubmit.value = true
    const submitData = event.data

    axios.post('/api/login', submitData).then(e => e.data)
        .then(async e => {
            userStore.setToken(e as string);
            await new Promise(r => setTimeout(r, 1500))
            navigateTo({ path: '/dashboard', replace: true })

        })
        .catch(e => {
            console.log(e)
            const error = e?.response?.data?.message ?? 'An unknown error occurred.'
            useToastError(error)
        }).finally(() => { isSubmit.value = false })
}
</script>