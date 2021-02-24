<template>
  <button v-if="this.isSignedUp" class="sign-up-button"></button>
</template>

<script>
export default {
  props: {
    meetupId: Number,
    isSignedUp: Boolean,
    userName: String
  },
  methods: {
    isSignedUp() {
      let signedUp = JSON.parse(localStorage.getItem("signedUp"));
    },
  },
};
</script>

<style>
</style>