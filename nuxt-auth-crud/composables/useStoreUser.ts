export const useStoreUser = defineStore("user", {
  state: () => ({ token: "" }),
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
