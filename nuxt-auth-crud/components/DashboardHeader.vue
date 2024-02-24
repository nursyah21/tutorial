<template>
    <header class="flex items-center justify-between h-20 px-6 border-b w-full dark:border-gray-700">

        <div class="relative flex items-center">
            <UInput icon="i-heroicons-magnifying-glass-20-solid" variant="outline" placeholder="Search..." />
        </div>

        <div class="flex items-center gap-x-4">
            <ULink to="/dashboard/settings">
                <div class="flex items-center gap-x-1 hover:opacity-80 transition-opacity duration-600">
                    <div class="flex flex-col">
                        <span class="font-semibold text-sm">Dhaiflaah</span>
                        <span class="text-xs">Lecturer</span>
                    </div>
                    <UAvatar src="https://randomuser.me/api/portraits/men/1.jpg" alt="Avatar" />
                </div>
            </ULink>



            <UChip :show="notification.show" :text="notification.count" size="2xl">
                <UButton icon="i-heroicons-bell" color="gray" />
            </UChip>

            <UButton color="gray" to="/logout">
                <UIcon name="i-material-symbols:logout" dynamic /> Logout
            </UButton>
        </div>

    </header>
</template>

<script setup>
const notification = {
    show: true,
    count: 3
}

const isOpenExit = ref(false)

function logout() {
    console.log('logout')
}

</script>