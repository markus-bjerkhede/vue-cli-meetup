<template>
  <p>{{review.username}}</p>
  <p>{{review.text}}</p>
</template>

<script>
export default {
props: {
    review: Object
}

}
</script>

<style>

</style>