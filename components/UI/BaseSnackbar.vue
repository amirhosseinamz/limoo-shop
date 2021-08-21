<template>
  <div class="snackbar-container" :class="mode">
    <span class="snackbar-icon"></span>
    <p class="snackbar-title">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "BaseSnackbar",
  props: {
    mode: {
      type: String,
      require: true
    },
  }
};
</script>

<style lang="scss" scoped>
  .snackbar-container {
    @extend .align-center;
    padding: toRem(5) toRem(10);
    border-radius: toRem(10);
    direction: rtl;

    .snackbar-icon {
      @extend .centered;
      width: toRem(24);
      height: toRem(24);
      border-radius: toRem(10);
    }
    .snackbar-title {
      font-size: toRem(16);
      margin-right: toRem(20);
    }
    &.success {
      background-color: $alert-massage__green;
      color: $white;

      .snackbar-icon {
        background-color: $white;

        &::before {
          content: "\e806";
          @include font-icon__limoo();
          font-size: toRem(24);
          background-color: $alert-massage__green;
        }
      }
    }
    &.alert {
      background-color: $alert-red;
      color: $white;

      .snackbar-icon {
        background-color: $white;

        &::before {
          content: "\e80f";
          @include font-icon__limoo();
          font-size: toRem(24);
          background-color: $alert-red;
        }
      }
    }
  }
</style>
