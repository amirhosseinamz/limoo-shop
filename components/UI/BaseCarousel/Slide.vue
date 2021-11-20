<template>
  <li :style="{ width: slideWidth+'px' }">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "Slide",
  props: {
    slideWidth: {
      type: Number,
      require: true,
    }
  }
};
</script>

<style scoped>

</style>
