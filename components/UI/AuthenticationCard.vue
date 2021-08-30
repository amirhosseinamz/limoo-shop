<template>
  <div class="card">
    <div class="auth-next-btn">
      <slot name="top-icon"></slot>
    </div>
    <div class="main-icon" v-if="hasMainIcon">
      <slot name="main-icon"></slot>
    </div>
    <p class="card-title">
      <slot name="card-title"></slot>
    </p>
    <div class="card-body">
      <slot name="card-body">

      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthenticationCard",
  props: {
    hasMainIcon: {
      type: Boolean,
      require: false,
      default: false
    },
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: $white;
  box-shadow: 0 toRem(8) toRem(16) $box__shadow;
  border-radius: toRem(15);
  .auth-next-btn {
    @include display-flex();
    justify-content: flex-start;
    margin-top: 8%;

  }
  .card-title {
    width: 100%;
    font-size: toRem(24);
    font-weight: 400;
    text-align: right;
    margin-top: toRem(50);
    margin-bottom: toRem(30);

    @include xs {
      margin-top: toRem(132);
    }
    @include xxs {
      font-size: toRem(20);
    }
  }
}
</style>
