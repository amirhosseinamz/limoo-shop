<template>
  <div class="sign-container">
    <span class="sign-icon" :class="type"></span>
    <span class="sign-title">
      {{ signTitle }}
    </span>
  </div>
</template>

<script>
import { getTextByTextKey } from "../../modules/splitPartJsonResource";

export default {
  name: "BaseSigns",
  props: {
    type: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: false,
      default: ""
    }
  },
  computed: {
    signTitle () {
      if (this.type === 'confirmed') {
        if (this.title) {
          return this.title
        } else {
          return this.getTextByTextKey("comments_confirmation")
        }
      } else if (this.type === 'waiting') {
        if (this.title) {
          return this.title
        } else {
          return this.getTextByTextKey("comments_awaiting_approval")
        }
      }
    }
  },
  methods: {
    getTextByTextKey
  }
};
</script>

<style lang="scss" scoped>

  .sign-container {
    @extend .align-center;

    .sign-icon {
      @extend .centered;
      width: toRem(18);
      height: toRem(18);
      border-radius: 50%;

      &.confirmed {
        border: toRem(3) solid $light__blue;
        background-color: $code-request;
        padding-right: toRem(1);
        padding-top: toRem(1);
        &::before {
          @include font-icon__limoo();
          font-size: toRem(6);
          content: "\e82b";
          color: $white;
        }
      }
      &.waiting {
        border: toRem(3) solid $border__yellow;
        background-color: $orange;
      }
    }
    .sign-title {
      color: $gray;
      font-size: toRem(14);
      margin-right: toRem(10);
    }
  }
  @media (max-width: 601px) {
    .sign-container {
      .sign-title {
        font-size: toRem(13);
        margin-right: toRem(5);
      }
    }
  }
</style>
