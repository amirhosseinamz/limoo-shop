<template>
  <div class="slider-wrapper">
    <input
      v-model="rangeValue"
      @input="rangeChanged"
      type="range"
      class="slider"
      :min="minValue"
      :max="maxValue"
      ref="slider"
    >
    <div class="selector" @mousedown="selectorMouseDown"
         :style="{ right: valuePercent }" :class="selectorClass"></div>
    <div class="progress" :style="{ width: valuePercent }"></div>
  </div>
</template>

<script>
export default {
  name: "BaseRangeSlider",
  props: {
    minValue: {
      type: String,
      require: true,
    },
    maxValue: {
      type: String,
      require: true,
    },
    value: {
      type: Number,
      require: true,
    },
    selectorClass: {
      type: String,
      require: false,
      default: "",
    },
  },
  data() {
    return {
      rangeValue: 0,
    };
  },
  watch: {
    value(val) {
      this.rangeValue = val;
    },
  },
  computed: {
    valuePercent() {
      return (this.rangeValue / this.maxValue) * 100 + "%";
    },
  },
  methods: {
    rangeChanged() {
      this.$emit("range-changed", this.rangeValue);
    },
    selectorMouseDown() {
    },
  },
};

</script>

<style lang="scss" scoped>
.slider-wrapper {
  position: relative;
  @include display-flex();
  align-items: center;
  width: toRem(372);
  height: toRem(8.5);
  border-radius: toRem(40);
  background-color: $gray-5;

  .slider {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: inherit;
    height: inherit;
    background-color: transparent;
    border-radius: toRem(40);
    outline: none;
    padding: 0;
    margin: 0;
    transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    z-index: 100;

    &::-webkit-slider-thumb {
      z-index: 10;
      position: relative;
      width: toRem(30);
      height: toRem(25);
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      opacity: 0;

    }

    &::-moz-range-thumb {
      position: relative;
      width: toRem(30);
      height: toRem(25);
      cursor: pointer;
      -moz-appearance: none;
      appearance: none;
      opacity: 0;
    }
  }

  .selector {
    width: toRem(22);
    height: toRem(22);
    border: toRem(2) solid $orange;
    box-shadow: 0 0 0 toRem(5.2) rgba(255, 204, 64, 0.3);
    background-color: $white;
    position: absolute;
    border-radius: 50%;
    z-index: 5;
    transform: translateX(50%);
    cursor: pointer;
  }

  .progress {
    height: 100%;
    background-color: $yellow;
    position: absolute;
    top: 0;
    border-radius: toRem(10);
    right: toRem(-1);
    z-index: 1;
  }
}
</style>
