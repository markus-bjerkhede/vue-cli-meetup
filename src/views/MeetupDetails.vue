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
      </div>
    </div>
    <article>
      <textarea style="resize: none;" rows="10" cols="70" class="review-text" v-model="reviewText" />
    </article>
    <button class="review-button" @click="review()">Submit Review</button>
    <Review v-for="review in meetupReviews" :key="review.meetupId" :review="review"/>
  </article>
  
</template>

<script>
import meetupsFile from "../assets/meetups";
import Review from "../components/Review.vue";
export default {
  components: { Review },
  beforeMount() {
    const meetupId = Number(this.$route.query.meetupId);
    this.meetup = meetupsFile.find((x) => x.id === meetupId);
    this.fetchReviews();
    this.fetchMeetupReviews();
    console.log(this.meetupId)
  },
  data() {
    return {
      meetupId: "",
      reviewText: "",
      hasReviewed: false,
      reviews: Array,
      username: String,
      meetup: Object,
      meetupReviews: Array
    };
  },
  methods: {
    fetchMeetupReviews() {
      let reviews = [];
      if (this.reviews) {
        reviews = this.reviews.filter((x) => x.id === this.meetup.Id);
      }
      this.meetupReviews = reviews;
    },
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
        meetupId: this.meetup.id,
        text: this.reviewText,
      };

      reviews.push(review);
      this.reviews = reviews;
      localStorage.setItem("reviews", JSON.stringify(reviews));
      this.hasReviewed = true;
      this.fetchMeetupReviews();
    },
    fetchReviews() {
      this.reviews = JSON.parse(localStorage.getItem("reviews"));
    },
  },
};
</script>

<style scoped>
.grid-container-media{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  margin: 2, 0, 2, 0;
  border-radius: 3%;
}
.review-button {
  margin: 1rem;
  font-weight: bold;
  color: black;
  background-color: #ddddddea;
  padding: 0.4rem;
  border-style: none;
  border-radius: 0.5rem;
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
  .grid-container-media,
  .grid-container {
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