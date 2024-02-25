import { useStoreUser } from "~/composables/useStoreUser";

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useStoreUser();
  const token = userStore.getToken();
  
  let redirectLogin = ['/', '/dashboard', '/dashboard/settings','/dashboard/users']

  if(!token && redirectLogin.includes(to.path)){
    return navigateTo('/login')
  }

  let redirectDashboard = ['/', '/login']
  if(token && redirectDashboard.includes(to.path)){
    return navigateTo('/dashboard')
  }

//   if(to.path == '/logout'){
//     userStore.resetToken()
//     return navigateTo('/')
//   }
});
