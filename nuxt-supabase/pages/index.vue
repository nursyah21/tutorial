<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

const redirectTo = `${useRuntimeConfig().public.baseUrl}/confirm`

watchEffect(() => {
    if (user.value) {
        navigateTo('/tasks')
    }
})
</script>

<template>
    <div class="h-screen flex items-center justify-center overlay">

        <UCard class="w-full max-w-sm text-center">
            <h1 class="">Login With Google</h1>
            <UButton class="mt-3" icon="i-mdi-google" block label="Github" variant="black"
                @click="auth.signInWithOAuth({ provider: 'google', options: { redirectTo } })" />
        </UCard>

    </div>
</template>