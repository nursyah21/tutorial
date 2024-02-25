<script setup>
import * as i from './stores/user'
const j = i.userStore()
// const user = useUserStore()
// console.log('user', user.$state.user)
</script>

<template>
  test
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
