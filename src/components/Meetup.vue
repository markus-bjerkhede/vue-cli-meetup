<template>
<article class="meetup-container">
  <h1 class="name">{{ meetup.name }}</h1>
  <img class="img" :src="meetup.img" alt="" />
  <h1 class="place">{{ meetup.place }}</h1>
  <Signup :meetupId="meetup.id" />
  </article>
</template>

<script>
import Signup from '@/components/SignUp.vue'
export default {
  components: { Signup },
   props: {
    meetup: Object
  },
}
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