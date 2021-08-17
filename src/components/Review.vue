<template>
      <div class="review">
      <p>User: {{ review.username }}</p>
      <p>{{ review.text }}</p>
      </div>
   
</template>

<script>
export default {
  props: {
    review: Object,
  },
};
</script>

<style>
.review {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;  
  border: 1px solid black;
  box-sizing: border-box;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  width: 50%;
  }

</style>