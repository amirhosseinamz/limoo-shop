<template>
  <div class="skeleton-box" :class="shape" style="width: 200px; height: 200px"></div>
</template>

<script>
export default {
  name: "BaseSkeleton",
  props: {
    shape: {
      type: String,
      require: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.skeleton-box {
  display: inline-block;
  position: relative;
  overflow: hidden;
  background-color: #DDDBDD;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
        90deg,
        rgba($white, 0) 0,
        rgba($white, 0.2) 20%,
        rgba($white, 0.5) 60%,
        rgba($white, 0)
    );
    animation: shimmer 2s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  &.circle {
      border-radius: 100%;
  }
}


</style>
