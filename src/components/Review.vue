<template>
  <div class="flex-wrapper">
      <div class="review">
      <p>User: {{ review.username }}</p>
      <p>{{ review.text }}</p>
      </div>
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
.flex-wrapper {
  display: flex;
  flex-direction: column;  
  border: 1px solid black;
  box-sizing: border-box;
  margin: 5px;
}

</style>