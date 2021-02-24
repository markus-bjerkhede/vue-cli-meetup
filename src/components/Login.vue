<template>
  <div class="login-view" v-if="isLoggedIn">
    <p>User: {{ username }}</p>
  </div>
  <div class="login-form" v-else>
    <button @click="login()">Login</button>
    <input v-model="username" placeholder="Enter valid username" />
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

<style>
</style>