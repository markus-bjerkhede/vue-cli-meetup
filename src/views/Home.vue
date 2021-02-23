<template>
<div>
  <Meetup v-for="meetup in meetups" :key="meetup.id" :meetup="meetup" />
  </div>
</template>

<script>
import Meetup from "../components/Meetup.vue";
export default {
  name: "Home",
  components: { Meetup },
  props: {
    meetups: Array,
  },
};

</script>

<style scoped>
</style>