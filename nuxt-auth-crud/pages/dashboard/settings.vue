<template>
    <h1 class="text-2xl font-bold">
        Settings
    </h1>
    <UBreadcrumb divider="/"
        :links="[{ label: 'Home', to: '/dashboard' }, { label: 'Settings', to: '/dashboard/settings' }]" />

    <div class="my-4 gap-y-4 flex flex-col">
        <UDivider />
        <div>
            <UFormGroup label="Email" name="email">
                <UInput v-model="state.email" placeholder="email" />
            </UFormGroup>
        </div>
        <UDivider />
        <div>
            <UFormGroup label="Password" name="password">
                <UInput v-model="state.password" type="password" placeholder="password" />
            </UFormGroup>
        </div>
        <div>
            <UFormGroup label="Current Password" name="current_password">
                <UInput v-model="state.current_password" type="password" placeholder="current password" />
            </UFormGroup>
        </div>
        <h1 class="text-sm opacity-50">confirm your current password to change password</h1>
        <UDivider />
        <div>
            <UFormGroup label="Avatar" name="password">
                <div class="flex gap-x-4">
                    <UAvatar src="https://randomuser.me/api/portraits/men/1.jpg" alt="Avatar" />
                    <!-- <input type="file" name="asd" id=""> -->
                    <UInput v-model="state.avatar" type="file" accept="image/*" class=" w-full"
                        @change="handleInputAvatar" />
                </div>
            </UFormGroup>
        </div>
        <h1 class="text-sm opacity-50">max size 500kb</h1>
        <UDivider />
        <div>
            <IButton type="submit">
                Save Changes
            </IButton>
        </div>

    </div>
</template>

<script setup lang="ts">
const toast = useToast()
import type { FormSubmitEvent } from '#ui/types'
const isUpdate = ref(false)
definePageMeta({
    layout: 'dashboard'
})
useHead({
    title: 'settings'
})

const state = reactive({
    email: '',
    password: '',
    current_password: '',
    avatar: undefined
})

async function onSubmit(event: FormSubmitEvent<String>) {
    console.log(event.data)
}

onMounted(() => {
    state.email = 'test@example.com'
})

function handleInputAvatar(event: any) {
    const file = event.target.files[0];
    const maxSize = 1024 * 1024 / 2 // 512kb
    if (file.size > maxSize) {
        useToastError('File size exceeds the limit')
        event.target.value = ''
    }
}

onMounted(() => {

})

</script>