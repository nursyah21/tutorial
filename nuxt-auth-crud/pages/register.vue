<template>
    <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
        <h1 class="text-4xl font-bold text-center mb-2">Register</h1>
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

            <UButton type="submit" class="w-full justify-center">
                Register
            </UButton>

        </UForm>
    </UCard>
</template>

<script setup lang="ts">
import z from 'zod'
import type { FormSubmitEvent } from '#ui/types'

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


async function onSubmit(event: FormSubmitEvent<any>) {
    // Do something with event.data
    console.log(event.data)
}
</script>