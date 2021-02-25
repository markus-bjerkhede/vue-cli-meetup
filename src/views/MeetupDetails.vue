<template>
  <article class="meetup-container"> 
      <h1 class="name">{{ meetup.name }}</h1>
      <img class="img" :src="meetup.img" alt="" />
      <h1 class="place">{{ meetup.place }}</h1>
  </article>
</template>

<script>
export default {
    props: {
    meetup: Object,
    meetups: Array
  },
  beforeMount() {
    console.log("hej")
    // let meetup = meetups.find(m => m.id === this.$route.params.meetupId);
    // this.meetup = meetup
  }
}
</script>

<style>

</style>