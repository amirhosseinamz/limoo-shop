<template>
  <div class="stepper-container" :class="[{'bordered': bordered}, usage]">
    <base-button
      base-color="light"
      mode="stepper"
      classes="plus"
      @button-clicked="increment"
      :disabled="plusDisabled"
    ></base-button>
    <span class="number">
      {{ counter }}
    </span>
    <base-button
      base-color="light"
      mode="stepper"
      classes="minus"
      @button-clicked="decrement"
      :disabled="minusDisabled"
    ></base-button>
  </div>
</template>

<script>
export default {
  name: "BaseStepper",
  props: {
    bordered: {
      type: Boolean,
      require: false,
      default: false
    },
    minValue: {
      type: Number,
      require: true
    },
    maxValue: {
      type: Number,
      require: false,
      default: 0
    },
    usage: {
      type: String,
      require: false,
      default: 'cart'
    }
  },
  data () {
    return {
      number: 0,
      plusDisabled: false,
      minusDisabled: false
    }
  },
  computed: {
    counter () {
      if (this.number < this.minValue) {
        this.minusDisabled = true
        this.number = this.minValue
      } else if (this.maxValue && this.number > this.maxValue) {
        this.plusDisabled = true
        this.number = this.maxValue
      }
      return this.number
    }
  },
  methods: {
    increment () {
      this.plusDisabled = false
      this.minusDisabled = false
      if (this.maxValue && this.number + 1 >= this.maxValue) {
        this.plusDisabled = true
        this.number = this.maxValue
      } else {
        this.number++
      }
      this.$emit('plus-clicked')
    },
    decrement () {
      this.minusDisabled = false
      this.plusDisabled = false
      if (this.number - 1 <= this.minValue) {
        this.minusDisabled = true
        this.number = this.minValue
      } else {
        this.number--
      }
      this.$emit('minus-clicked')
    }
  }
};
</script>

<style lang="scss" scoped>
  .stepper-container {
    display: flex;
    align-items: center;
    width: toRem(120);
    height: toRem(43);

    &.bordered {
      border: toRem(1) solid $gray-6;
      border-radius: toRem(10);
    }
    .plus, .minus {
      width: toRem(43);
      height: toRem(43);
    }
    .plus {
      &::before {
        @include font-icon__limoo();
        content: "\e822";
        font-size: toRem(10);
        font-weight: bold;
      }
    }
    .number {
      width: toRem(32);
      height: toRem(44);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .minus {
        &::before {
          @include font-icon__limoo();
          content: "\e81b";
          font-size: toRem(10);
          font-weight: bold;
        }
    }
  }

  @media (max-width: 960px) {
    .stepper-container {
      &.cart {
        width: toRem(105);
        height: toRem(36);
        .plus,.minus {
          width: toRem(36);
          height: toRem(36);
        }
        .number {
          height: toRem(36);
        }
      }
    }
  }
</style>
