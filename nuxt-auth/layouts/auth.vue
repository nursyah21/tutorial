<template>
    <div class="flex relative min-h-screen lg:flex">
        <aside
            class="sm:flex flex-col w-[12em] h-screen px-5 py-8 overflow-y-auto  border-r  dark:border-gray-700 hidden">
            <div class="mt-6">
                <nav class="-mx-3 space-y-6 ">
                    <div class="space-y-3 ">
                        <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Menu</label>
                        <template v-for="i in items">
                            <ULink
                                class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-[.3s] transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                activeClass="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-700" :to="i.to">
                                <UIcon :name="i.icon" dynamic />
                                <span class="mx-2 text-sm font-medium">{{ i.label }}</span>
                            </ULink>
                        </template>
                    </div>
                </nav>
            </div>
        </aside>

        <USlideover v-model="isOpen" side="left" class="max-w-xs sm:hidden">
            <div class="p-4">
                <div class="space-y-3 ">
                    <label class="px-3 text-xs text-gray-500 uppercase">Menu</label>
                    <template v-for="i in items">
                        <ULink
                            class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-[.3s] transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                            activeClass="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-700" :to="i.to">
                            <UIcon :name="i.icon" dynamic />
                            <span class="mx-2 text-sm font-medium">{{ i.label }}</span>
                        </ULink>
                    </template>
                </div>
            </div>
        </USlideover>

        <main class="flex-1 pb-12 space-y-6 overflow-y-auto lg:h-screen md:space-y-8">

            <header class="flex items-center justify-between sm:justify-end h-20 px-6 border-b w-full ">


                <UButton variant="link" :padding="false" color="white" icon="i-material-symbols:menu"
                    @click="isOpen = true" class="sm:hidden flex">
                </UButton>


                <UDropdown :items="account" :popper="{ placement: 'bottom-start' }">
                    <UChip :show="notification.show" :text="notification.count" size="2xl">
                        <UAvatar src="https://randomuser.me/api/portraits/men/1.jpg" alt="Avatar" />
                    </UChip>
                    <template #account="{ item }">
                        <div class="text-left cursor-default">
                            <p>Signed in as</p>
                            <p class="truncate font-medium text-gray-900 dark:text-white cursor-default">
                                {{ item.label }}
                            </p>
                        </div>
                    </template>
                </UDropdown>



            </header>
            <UContainer>
                <slot></slot>
            </UContainer>

        </main>

    </div>
</template>

<script setup lang="ts">

const notification = {
    show: false,
    count: 0
}

const isOpen = ref(false)


interface dataAuth {
    role: string
    nama: string
    email: string
}

// @ts-ignore
const data: dataAuth = await $fetch("/api/auth/auth", {
    method: "post",
    body: { token: useStore().getToken() },
})

const items = [
    {
        label: 'Dashboard',
        icon: 'i-material-symbols:dashboard',
        to: '/dashboard'
    },
    {
        label: 'Users',
        icon: 'i-flowbite:users-solid',
        to: '/dashboard/users'
    },
]

const account = [
    [{
        slot: 'account',
        label: data?.email || '',
        disabled: true
    },
    {
        label: 'Settings',
        icon: 'i-material-symbols:settings',
        click: () => {
            navigateTo('/settings')
        }
    },
    {
        label: 'Logout',
        icon: 'i-material-symbols:logout',
        click: () => {
            navigateTo('/logout')
        }
    },
    ],
]

</script>