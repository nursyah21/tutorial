export default defineNuxtRouteMiddleware(async to=>{
    const data = await $fetch("/api/auth/auth", {
        method: "post",
        body: { token: useStore().getToken() },
    })

    if(to.path === '/') return navigateTo('/dashboard')
    
    if(to.path.startsWith('/dashboard')){
        console.log('path', to.path, 'data:', data)
    }

    // @ts-ignore
    if(to.path.startsWith('/dashboard') && !data?.email){
        return navigateTo('/login')
    }
    
    // @ts-ignore
    if(['/login','/register'].includes(to.path) && data?.email){
        return navigateTo('/')
    }

    // console.log()
})