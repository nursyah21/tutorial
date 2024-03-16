<template>
    <div class="h-screen flex items-center justify-center overlay">
        <UCard class="w-full max-w-sm">
            <h1 class="text-2xl font-bold text-center mb-2">Logout</h1>
            <UProgress />
        </UCard>
    </div>
</template>

<script setup lang="ts">
useStore().resetToken()
new Promise(resolve => setTimeout(resolve, 1000))
navigateTo('/')

// import type { FormSubmitEvent } from '#ui/types'
// const state = reactive({
//     email: '',
//     password: ''
// })
// const isSubmit = ref(false)
// async function onSubmit(event: FormSubmitEvent<any>) {

//     const submitData = event.data
//     isSubmit.value = true
//     $fetch('/api/auth/login', {
//         method: 'post',
//         body: submitData
//     }).then(async e => {
//         // useStore().setToken(e)
//     }).catch(e => {
//         toastError(e?.response?.statusText)
//     }).finally(() => {
//         isSubmit.value = false
//     })
// }
</script>