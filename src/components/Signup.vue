<template>
  <button @click="signUp()" class="sign-up-button">Signin</button>
</template>

<script>
export default {
  data() {
    return {
      isSignedUp: false,
      username: String,
    };
  },
  props: {
    meetupId: Number,
  },
  beforeMount() {
   this.setUsername()
  },
  methods: {
    setUsername() {
      let username = localStorage.getItem("username");
      if (!username) {
        this.username = "anon";
      } else {
        this.username = username;
      }
    },
    signedUp() {
      let signedUp = this.getSignUps();
      let username = localStorage.getItem("username");
      signedUp.array.forEach((element) => {
        console.log(element.username);
      });
    },
    signUp() {
      this.setUsername()  
      let signedUp = this.getSignUps();
      if (signedUp === null) {
        signedUp = [];
      }
      let signUp = { name: this.username, meetupId: this.meetupId };
      signedUp.push(signUp);
      localStorage.setItem("signedUp", JSON.stringify(signedUp));
    },
    getSignUps() {
      return JSON.parse(localStorage.getItem("signedUp"));
    },
  },
};
</script>

<style>
</style>