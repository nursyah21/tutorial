<template>
    <div class="flex relative min-h-screen lg:flex dark:bg-gray-900">
        <SideNav />
        <main class="flex-1 pb-12 space-y-6 overflow-y-auto lg:h-screen md:space-y-8">
            <DashboardHeader />
            <UContainer>
                <slot></slot>
            </UContainer>

        </main>


        <DashboardFooter />
    </div>
</template>