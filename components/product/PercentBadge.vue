<template>
  <div class="percent-badge">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PercentBadge",
};
</script>

<style lang="scss" scoped>
  .percent-badge {
    @extend .centered;
    width: toRem(54);
    height: toRem(52);
    font-size: toRem(18);
    color: $gray-2;
    background-color: $orange_btn_filter;
    border-radius: toRem(10);
  }
</style>
