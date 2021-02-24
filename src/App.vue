<template>
    <router-link to="/">Home</router-link>
    <login />
    <router-view :meetups="meetups" />
</template>
<script>
import meetups from "@/assets/meetups.json";
import Login from './components/Login.vue';
export default {
  name: "App",
  data() {
    return {
      meetups: meetups,
    };
  },

  components: {Login},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
