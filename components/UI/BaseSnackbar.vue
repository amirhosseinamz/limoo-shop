<template>
  <transition name="snackbar" mode="out-in">
    <div class="snackbar-container" :class="mode" v-if="show">
      <span class="snackbar-icon"></span>
      <p class="snackbar-title">
        <slot></slot>
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BaseSnackbar",
  props: {
    mode: {
      type: String,
      require: true,
    },
    show: {
      type: Boolean,
      require: false,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.snackbar-enter-active {
  animation: snackbarAnimation 0.5s ease-out;
}
.snackbar-leave-active {
  animation: snackbarAnimation 0.5s ease-out reverse;
}
@keyframes snackbarAnimation {
  0% {
    opacity: 0;
    transform: translate(0, -200%);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
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
