<template>
  <div class="signed-up" v-if="isSignedUp">
    <p class="display-username">Signed-up as: {{this.username}}</p>
  </div>
  <div class="not-signed-up" v-if="!isSignedUp">
    <button @click="signUp()" class="sign-up-button">Sign-up</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isSignedUp: false,
        username: String,
        signUps: []
      };
    },
    props: {
      meetupId: Number,
    },
    beforeMount() {
      this.setUsername();
      this.fetchSignUps();
      this.checkIfSignedUp();
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
      checkIfSignedUp() {
        if (this.signUps) {
          this.signUps.forEach((signUp) => {
            if (signUp.meetupId === this.meetupId && signUp.name === this.username) {
              this.isSignedUp = true;
            }
          });
        }
      },
      signUp() {
        this.setUsername();
        let signedUp = this.signUps
        if (signedUp === null) {
          signedUp = [];
        }
        let signUp = { name: this.username, meetupId: this.meetupId };
        this.signUps = signedUp
        signedUp.push(signUp);
        localStorage.setItem("signedUp", JSON.stringify(signedUp));
        this.isSignedUp = true;
      },
      fetchSignUps() {
        this.signUps = JSON.parse(localStorage.getItem("signedUp"));
      },
    },
  };
</script>

<style>
.sign-up-button {
  font-weight: bold;
  color: black;
  background-color: #ddddddea;
  padding: 0.4rem;
  border-style: none;
  border-radius: 0.5rem;
}
</style>