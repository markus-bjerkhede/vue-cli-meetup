<template>
<div class="top-right">
  <div class="login-view" v-if="isLoggedIn">
    <p class="login-name">User: {{ username }}</p>
  </div>
  <div class="login-form" v-else>
    <button class="login-button" @click="login()"> Login </button>
    <input class="input-name" v-model="username" placeholder="Enter valid username" />
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      isLoggedIn: false,
    };
  },
  beforeMount() {
    let user = localStorage.getItem("username");
    if (user === null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.username = user;
    }
  },
  methods: {
    login() {
      localStorage.setItem("username", this.username);
      this.isLoggedIn = true;
    },
  },
};
</script>
  
<style scoped>
.input-name{
  margin: 10px;
  height: 25px;
}
.login-button {
    font-weight: bold;
    color: black;
    background-color: #ddddddea;
    padding: 0.4rem;
    border-style: none;
    border-radius: 0.5rem;
}
</style>