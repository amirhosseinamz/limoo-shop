<template>
  <div class="backdrop-wrapper" @click="onClick"></div>
</template>

<script>
export default {
  name: "BaseBackdrop",
  methods: {
    onClick() {
      this.$emit('on-click');
    }
  }
};
</script>

<style lang="scss" scoped>
.backdrop-wrapper {
  @extend .modal-backdrop;
}
</style>
