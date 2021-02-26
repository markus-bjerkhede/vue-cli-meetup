<template>
  <article class="meetup-container">
    <div class="flex-container">
      <h1 class="name">{{ meetup.name }}</h1>
      <img class="img" :src="meetup.img" alt="" />
      <h1 class="place">{{ meetup.place }}</h1>
      <p class="description">{{ meetup.description }}</p>
      <h3 class="date">{{ meetup.date }}</h3>
    </div>
    <article>
      <button @click="review()">Review</button>
      <input v-model="reviewText" type="text" />
    </article>
  </article>
</template>

<script>
import meetupsFile from "../assets/meetups";
export default {
  beforeMount() {
    let meetupId = this.$route.query.meetupId;
    this.meetup = meetupsFile.find((x) => x.id === Number(meetupId));
  },
  data() {
    return {
      reviewText: String,
      hasReviewed: false,
      reviews: Array,
      username: String,
      meetup: Object,
    };
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
    review() {
      this.setUsername();
      let reviews = this.reviews;
      if (reviews === null) {
        reviews = [];
      }
      let review = {
        username: this.username,
        meetupId: this.meetupId,
        text: this.reviewText,
      };
      this.reviews = reviews;
      reviews.push(review);
      localStorage.setItem("reviews", JSON.stringify(reviews));
      this.hasReviewed = true;
    },
    fetchReview() {
      this.reviews = JSON.parse(localStorage.getItem("reviews"));
    },
  },
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