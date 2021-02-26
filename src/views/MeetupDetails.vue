<template>
<article class="grid-container-media">
    <h1 class="name">{{ meetup.name }}</h1>
    <div class="grid-container">
      <div class="left-img">
        <img class="img" :src="meetup.img" alt="" />
      </div>
      <div class="right-column">
        <h1 class="place">{{ meetup.place }}</h1>
        <p class="description">{{ meetup.description }}</p>
        <h3 class="date">{{ meetup.date }}</h3>
        <button @click="review()">Review</button>
      </div>
    </div>
    <article>
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
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  margin: 2, 0, 2, 0;
  border-radius: 3%;
}
.left-img {
  margin-left: 16rem;
  grid-column-start: span 1;
}
.right-column {
  margin-right: 20rem;
  grid-column-start: span 1;
}
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

@media screen and (max-width: 1200px) {
  .grid-container-media, .grid-container{
  display:grid none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  }
  .left-img {
  margin: 0;
  grid-column-start: span 1;
}
.right-column {
  margin: 0;
  grid-column-start: span 1;
}
}
</style>