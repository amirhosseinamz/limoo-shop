<template>
  <div v-show="isSelected">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ButtonTabContent",
  props: {
    isSelected: {
      type: Boolean,
      require: true
    }
  }
};
</script>

<style scoped>

</style>
