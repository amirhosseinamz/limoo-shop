<template>
  <div class="card">
    <div class="auth-next-btn">
      <slot name="top-icon"></slot>
    </div>
    <div class="main-icon" v-if="hasMainIcon">
      <slot name="main-icon"></slot>
    </div>
    <div>
      <p class="card-title" :class="{ 'lower-margin': hasMainIcon }">
        <slot name="card-title"></slot>
      </p>
      <div class="card-body">
        <slot name="card-body">

        </slot>
      </div>
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
  position: relative;
  .auth-next-btn {
    @include display-flex();
    justify-content: flex-start;
    position: absolute;
    top: toRem(24);
    left: toRem(24);
  }
  .card-title {
    font-size: toRem(24);
    line-height: toRem(33.75);
    font-weight: 400;
    text-align: right;
    margin: toRem(77) toRem(90) toRem(33) 0;
    @include sm {
      margin-right: toRem(26);
    }
    @include xs {
      font-size: toRem(20);
      line-height: 140.62%;
      margin: toRem(128) toRem(28) toRem(24) toRem(16);
    }
    @include xxs {
      margin-right: 0;
    }
    &.lower-margin {
      margin-top: toRem(35);
    }

    @include xs {
      margin-top: toRem(132);
    }
    @include xxs {
      font-size: toRem(20);
    }
  }
}
</style>
