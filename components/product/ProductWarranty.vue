<template>
  <div class="product-warranty-container">
    <span class="title">
      گارانتی:
    </span>
    <warranty-dropdown></warranty-dropdown>
  </div>
</template>

<script>
import WarrantyDropdown from "./WarrantyDropdown";
export default {
  name: "ProductWarranty",
  components: { WarrantyDropdown },
};
</script>

<style lang="scss" scoped>
  .product-warranty-container {
    @extend .d-flex;
    max-height: toRem(45);
    align-items: flex-start;
    .title {
      font-size: toRem(16);
      margin-left: toRem(13);
      color: $gray-2;
      height: toRem(45);
      @extend .align-center;
    }
  }
  @include xs {
    .product-warranty-container {
      display: block;
    }
  }
</style>
