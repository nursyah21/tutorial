<template>
    <div class="relative min-h-screen lg:flex">

        <DashboardHeader />


        <SideNav />
        <main class="px-6">
            <slot></slot>
        </main>

        <DashboardFooter />
    </div>
</template>