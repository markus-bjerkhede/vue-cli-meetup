<template>
  <article class="meetup-container">
    <!-- <div @click="navigate()"> -->
      <router-link to= "/meetupDetails"> 
      <h1 class="name">{{ meetup.name }}</h1>
      <img class="img" :src="meetup.img" alt="" />
      <h1 class="place">{{ meetup.place }}</h1>
      </router-link>
    <!-- </div> -->

    <Signup :meetupId="meetup.id" />
  </article>
</template>

<script>
import Signup from "./SignUp";
export default {
  components: { Signup },
  props: {
    meetup: Object,
  },
  methods: {
    navigate() {
      //this.$router.push({ name: 'meetupDetails', params: {meetupId: this.meetup.id}})
      this.$router.push({ name: 'meetupDetails'})
    },
  },
};
</script>

<style scoped>
.meetup-container {
  display: inline-block;
  margin: 2rem;
  padding: 0.75rem;
  /* border: 1px solid black; */
  background: lightsteelblue;
  border-radius: 3%;
  box-shadow: 0 0 1px 1px white inset;
}
.img {
  width: 210px;
  height: 150px;
  border-radius: 3%;
}
</style>