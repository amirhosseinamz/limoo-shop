<template>
  <div class="chosen-seller-badge">
    <span class="icon"></span>
    <div class="title">
      {{ chosenSellerText }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ChosenSellerBadge",
  data() {
    return {
      chosenSellerText: "فروشنده برگزیده"
    };
  }

};
</script>

<style lang="scss" scoped>
  .chosen-seller-badge {
    padding: toRem(8);
    background-color: $color-blue_10p;
    width: fit-content;
    border-radius: toRem(16.5);
    @extend .align-center;
    .icon {
      margin-left: toRem(8);
      &::before {
        content: "\e842";
        color: $color-blue;
        font-size: toRem(16);
        @include font-icon__limoo();
      }
    }
    .title {
      color: $color-blue;
      font-size: toRem(14);
    }
  }
</style>
