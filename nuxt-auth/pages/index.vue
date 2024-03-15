<template>
    <div>Hello Home Page</div>
</template>
<script lang="ts" setup>
// definePageMeta({
//     middleware: 'auth' // this should match the name of the file inside the middleware directory 
// })

$fetch("/api/auth/auth", {
    method: "post",
    body: { token: useStore().getToken() },
}).then(e => {
    console.log(e)
});
</script>