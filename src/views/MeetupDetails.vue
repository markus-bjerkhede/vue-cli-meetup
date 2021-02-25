<template>
  <article class="meetup-container">
    <div class="flex-container">
    <h1 class="name">{{ meetup.name }}</h1>
    <img class="img" :src="meetup.img" alt="" />
    <h1 class="place">{{ meetup.place }}</h1>
    <p class="description">{{ meetup.description }}</p>
    <h3 class="date">{{ meetup.date }}</h3>
    </div>
  </article>
</template>

<script>
  import meetupsFile from '../assets/meetups'
  export default {
    beforeMount() {
      let meetupId = this.$route.query.meetupId;
      this.meetup = meetupsFile.find(x => x.id === Number(meetupId));
    },
    data() {
      return {
        meetup: Object
      }
    }
  };
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
}
img {
  max-height: 300px;
  max-width: 400px;
}

</style>