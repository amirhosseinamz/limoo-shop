<template>
  <div class="breadcrumb-container">
    <div class="breadcrumb-item" v-for="(item, index) in breadcrumbData" :key="index">
      {{ item.pathName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseBreadcrumb",
  props: {
    breadcrumbData: { type: Array, require: true }
  }
};
</script>

<style lang="scss" scoped>
  .breadcrumb-container {
    @extend .align-center;
    .breadcrumb-item {
      font-size: toRem(12);
      color: $gray-2;
      position: relative;
      margin-left: toRem(20);
      &::before {
        content: "\e801";
        @include font-icon__limoo();
        color: $gray-4;
        font-size: toRem(10);
        position: absolute;
        left: toRem(-14);
        height: 100%;
        @extend .align-center;
      }
      &:last-child {
        margin-left: 0;
        &::before {
          display: none;
        }
      }
    }
  }
</style>
