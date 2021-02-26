<template>
<article>
    <button class="review-button" @click="review()">Review</button>
    <input v-model="reviewText" type="text">
</article>
</template>

<script>
export default {
  props: {
    meetupId: Number,
  },
  data() {
    return {
      reviewText: String,
      hasReviewed: false,
      reviews: Array,
      username: String
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
      let review = { username: this.username, meetupId: this.meetupId, text: this.reviewText };
      this.reviews = reviews;
      reviews.push(review);
      localStorage.setItem("reviews", JSON.stringify(reviews));
      this.isSignedUp = true;
    },
    fetchReview() {
      this.reviews = JSON.parse(localStorage.getItem("reviews"));
    },
  },
};
</script>

<style>
.sign-up-button {
  font-weight: bold;
  color: black;
  background-color: #ddddddea;
  padding: 0.4rem;
  border-style: none;
  border-radius: 0.5rem;
}
</style>