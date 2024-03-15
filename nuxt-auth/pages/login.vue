<template>
    <div class="h-screen flex items-center justify-center overlay">
        <UCard class="w-full max-w-sm">
            <h1 class="text-4xl font-bold text-center mb-2">Login</h1>
            <ClientOnly>
                <UForm :state="state" class="space-y-4" @submit="onSubmit">
    
                    <UFormGroup label="Email" name="email">
                        <UInput v-model="state.email" type="email" required />
                    </UFormGroup>
    
                    <UFormGroup label="Password" name="password">
                        <UInput v-model="state.password" type="password" required />
                    </UFormGroup>
    
                    <UButton type="submit" class="w-full justify-center">
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
                </UForm>
                <template #fallback>
                    <USkeleton class="w-full h-[200px]"/>
                </template>
            </ClientOnly>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types'
const state = reactive({
    email: '',
    password: ''
})
const isSubmit = ref(false)
async function onSubmit(event: FormSubmitEvent<any>) {

    const submitData = event.data
    isSubmit.value = true
    $fetch('/api/auth/login', {
        method: 'post',
        body: submitData
    }).then(async e => {
        // useStore().setToken(e)
    }).catch(e => {
        toastError(e?.response?.statusText)
    }).finally(() => {
        isSubmit.value = false
    })


}
</script>