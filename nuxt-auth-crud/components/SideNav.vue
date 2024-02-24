
<template>
    <aside class="flex flex-col w-[12em] h-screen px-5 py-8 overflow-y-auto  border-r  dark:border-gray-700">
        <a href="#">
            <img class="w-auto h-7" src="https://merakiui.com/images/logo.svg" alt="">
        </a>

        <div class="mt-6">
            <nav class="-mx-3 space-y-6 ">
                <div class="space-y-3 ">
                    <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Menu</label>

                    <ULink
                    
                        class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-[.3s] transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                        activeClass="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-700" 
                        to="/dashboard">
                        <UIcon name="i-material-symbols:dashboard" dynamic />
                        <span class="mx-2 text-sm font-medium">Dashboard</span>
                    </ULink>

                    <ULink
                    
                        class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-[.3s] transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                        activeClass="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-700" 
                        to="/dashboard/users">
                        <UIcon name="i-material-symbols:supervisor-account" dynamic />
                        <span class="mx-2 text-sm font-medium">Users</span>
                    </ULink>

                    <ULink
                    
                        class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-[.3s] transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                        activeClass="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 text-gray-700"
                        to="/dashboard/settings">
                        <UIcon name="i-material-symbols:settings" dynamic />
                        <span class="mx-2 text-sm font-medium">Settings</span>
                    </ULink>
                </div>


            </nav>
        </div>
    </aside>
</template>

<script setup>

</script>

<style scope>
.active {
    color: rgb(229 231 235)
}
</style>