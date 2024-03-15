import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      token: "",
    };

  },
  actions: {
    getToken() {
      return this.token;
    },
    setToken(value: string) {
      this.token = value;
    },
    resetToken(){
      this.token = ''
    }
  },
  persist: true,
});
