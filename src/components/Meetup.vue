<template>
  <article class="meetup-container">
    <div @click="navigate()">
      <h1 class="name">{{ meetup.name }}</h1>
      <img class="img" :src="meetup.img" alt="" />
      <h1 class="place">{{ meetup.place }}</h1>
    </div>
    <SignUp :meetupId="meetup.id" />
  </article>
</template>

<script>
  import SignUp from "./SignUp.vue";
  export default {
    components: { SignUp },
    props: {
      meetup: Object,
    },
    methods: {
      navigate() {
        this.$router.push({ name: 'meetupDetails', query: {meetupId: this.meetup.id}})
      },
    },
  };
</script>

<style scoped>
  .meetup-container {
    display: inline-block;
    margin: 2rem;
    padding: 0.75rem;
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