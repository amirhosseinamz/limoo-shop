<template>
  <div class="situation-badge" :class="situation">
    <span class="shape" :class="situation"></span>
    <div class="title">
      {{ badgeTitle }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SituationBadge",
  props: {
    situation: {
      type: String,
      require: true,
    }
  },
  data() {
    return {
      badgeTitle: null,
    }
  },
  mounted() {
    switch (this.situation) {
      case "ready":
        this.badgeTitle = "آماده ارسال";
        break;

      case "delivered":
        this.badgeTitle = "تحویل";
        break
    }
  }
};
</script>

<style lang="scss" scoped>
  .situation-badge {
    border-radius: toRem(16.5);
    width: toRem(125);
    height: toRem(33);
    @extend .align-center;
    .shape {
      display: inline-block;
      width: toRem(12);
      height: toRem(12);
      border-radius: 50%;
      margin-right: toRem(10);
      margin-left: toRem(5);
      &.ready {
        background-color: $color-blue;
      }
      &.delivered {
        background-color: $green;
      }
      &.checking {
        background-color: $orange;
      }
      &.canceled {
        background-color: $gray-2;
      }
      &.returned {
        background-color: $red-color;
      }

    }
    .title {
      font-size: toRem(14);
      color: $gray-2;
      @include sm {
        font-size: toRem(13);
      }
    }
    &.ready {
      background-color: $blue-2;
    }
    &.delivered {
      background-color: $green-6;
    }
    &.checking {
      background-color: $orange-6;
    }
    &.canceled {
      background-color: $gray-6;
    }
    &.returned {
      background-color: $red-6;
    }
  }
</style>
