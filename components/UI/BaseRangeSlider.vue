<template>
  <div class="slider-wrapper">
    <input @input="sliderChanged"
         v-model="value"
         type="range"
         class="slider"
         :min="minValue"
         :max="maxValue"
    >
    <div id="selector" :style="{right: value+'%'}" ></div>
    <div class="progress" :style="{width: value+'%'}"></div>
  </div>
</template>

<script>
export default {
  name: "BaseRangeSlider",
  props: {
    minValue: {
      type: String,
      require: true
    },
    maxValue: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      value: 0,
    }
  },
  methods: {
    sliderChanged () {
      this.widthValue = (this.value / this.maxValue) * 100
    }
  },
  computed: {
    // background () {
    //   return `background: linear-gradient(270deg, yellow ${this.widthValue-0.3}%, blue ${this.widthValue }%);`
    // }
  }
};

</script>

<style lang="scss" scoped>
  .slider-wrapper {
    position: relative;
    @include display-flex();
    align-items: center;
    width: toRem(372);
    height: toRem(8.5);
    margin-right: 50rem;
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

      &::-webkit-slider-thumb{
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
        z-index: 130;
        position: relative;
        width: toRem(30);
        height: toRem(25);
        cursor: pointer;
        -moz-appearance: none;
        appearance: none;
        background-color: deeppink;
        opacity: 0;
      }
    }
    #selector {
      width: toRem(20);
      height: toRem(20);
      border: toRem(3) solid $orange;
      box-shadow: 0 0 0 toRem(5.2) $orange-5;
      background-color: $white;
      position: absolute;
      border-radius: 50%;
      z-index: 5;
      transform: translateX(50%);
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
