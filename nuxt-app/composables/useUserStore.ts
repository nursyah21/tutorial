// import { defineStore } from "pinia";

export const useUserStore = defineStore("user-store", {
  state: () => ({
    user: 'default',
  }),
  actions: {
    getUser(){
        return this.user
    },
    setUser(value:string){
        this.user= value;
    }
  },
  persist: true
});
