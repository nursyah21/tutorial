<template>
    <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
        <h1 class="text-4xl font-bold text-center mb-2">Register</h1>
        <ClientOnly>
            <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                <UFormGroup label="Email" name="email">
                    <UInput v-model="state.email" />
                </UFormGroup>

                <UFormGroup label="Password" name="password">
                    <UInput v-model="state.password" type="password" />
                </UFormGroup>

                <UFormGroup label="Confirm  Password" name="confirm_password">
                    <UInput v-model="state.confirm_password" type="password" />
                </UFormGroup>

                <IButton :disabled="isSubmit" type="submit" class="w-full justify-center">
                    <template v-if="isSubmit">
                        <UIcon name="i-eos-icons-loading" /> Please wait...
                    </template>
                    <template v-else>
                        Register
                    </template>
                </IButton>

            </UForm>
            <template #fallback>
                <Skeleton />
            </template>
        </ClientOnly>
    </UCard>
</template>

<script setup lang="ts">
import z from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import axios from 'axios'

definePageMeta({
    layout: 'auth'
})
useSeoMeta({
    title: 'register'
})

const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters'),
    confirm_password: z.string().min(8, 'Must be at least 8 characters')
}).refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password'], // Optional: Specify the path for the error message
})

type Schema = z.output<typeof schema>

const state = reactive({
    email: undefined,
    password: undefined,
    confirm_password: undefined
})

const isSubmit = ref(false)
async function onSubmit(event: FormSubmitEvent<any>) {
    isSubmit.value = true
    const submitData = event.data

    axios.post('/api/register', submitData).then(e => e.data)
        .then(async e => {
            useToastSuccess('success create account')
            await new Promise(r => setTimeout(r, 1500))
            navigateTo({path: '/login', replace: true})
        })
        .catch(e => {
            console.log(e)
            const error = e?.response?.data?.message ?? 'An unknown error occurred.'
            useToastError(error)
        }).finally(() => { isSubmit.value = false })

}
</script>