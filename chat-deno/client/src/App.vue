<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'
const PORT = 3001
const myUsername = prompt("Please enter your name") || "Anonymous";

// Get the protocol (http or https) from the current page's URL
const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";

// Construct the WebSocket URL using the current host and the desired path
const socket = new WebSocket(
  `${protocol}//localhost:${PORT}/start_web_socket?username=${myUsername}`
);
let conversation = ref([])
let users = ref([])
let msg = ref('')
let handleSubmit
function addMessage(username, message) {
  // displays new message
  conversation.value.push({ username, message });
}


onMounted(() => {

  function getAll() {
    axios.get('http://localhost:3001/all')
      .then(e => {
        console.log(e.data)
        conversation.value =  e.data
      }).catch(d => {
        console.log('e', d)
      })
  }
  getAll()
})

onMounted(() => {

  socket.onmessage = (m) => {
    const data = JSON.parse(m.data);

    switch (data.event) {
      case "update-users":
        // refresh displayed user list
        let userListHtml = [];
        for (const username of data.usernames) {
          userListHtml.push(username)
        }
        users.value = userListHtml
        break;

      case "send-message":
        // display new chat message
        addMessage(data.username, data.message);
        break;
    }
  };


  handleSubmit = () => {
    socket.send(
      JSON.stringify({
        event: "send-message",
        message: msg.value,
      })
    );
    msg.value = ''
  }
})

</script>

<template>
  <div>
    <div>
      <b>Users</b>
      <hr />
      <csd v-for="user in users">
        {{ user }} <br />
      </csd>
      <hr class="visible-xs visible-sm" />
    </div>
    <div>
      <form action="" @submit.prevent="handleSubmit">
        <input id="data" placeholder="send message" v-model="msg" />
      </form>
      <hr />

      <div class="conversation">
        <csd v-for="msg in conversation" :key="msg.id">
          {{ msg.username ?? 'Anonymous' }}: {{ msg.message }} <br />
        </csd>
      </div>

    </div>
  </div>
</template>

<style scoped>
.conversation {
  text-align: start;
}

input {
  padding: 4px;
  margin-top: 4px;
  margin-bottom: 4px;
}

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
