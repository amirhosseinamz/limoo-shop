<template>
  <div v-show="isSelected && !disabled">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabContent",
  props: {
    isSelected: {
      type: Boolean,
      require: true
    },
    disabled: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  mounted () {
    this.isActive = this.selected
  }
};
</script>

<style scoped>

</style>
