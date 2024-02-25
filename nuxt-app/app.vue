<template>
  <div>
    <input type="text" v-model="text">
    <input type="button" value="点击我" @click="handleClick">
  </div>
</template>

<script setup>
let text = ''

const user = useUserStore()

if(user.getUser()){
  text = user.getUser()
}
console.log('1',user.getUser())
function handleClick(){
  // console.log(text)
  user.setUser(text)
  window.location.reload()
  // user.name_ = text
  // pinia.state._raw
  // useNavigation('/', replace)
  // console.log('pinia',pinia)
}

</script>

<style>
body{
  background-color: #202020;
}
</style>