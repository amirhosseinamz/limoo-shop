<template>
  <div class="slider-wrapper">
    <input @input="sliderChanged" v-model="value" type="range" class="slider" :min="minValue" :max="maxValue">
    <div class="value-background" :style="{width: widthValue+2+'%'}"></div>
    <span>{{ value }}</span>
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
      widthValue: 0,
    }
  },
  methods: {
    sliderChanged () {
      this.widthValue = (this.value / this.maxValue) * 100
    }
  }
};
</script>

<style lang="scss" scoped>
  .slider-wrapper {
    position: relative;
    width: 400px;
    height: 20px;
    margin-right: 50rem;

    .slider {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: inherit;
      height: inherit;
      background-color: blue;
      border-radius: 10px;
      transition: all 0.3s ease-in;
      -webkit-transition: all 0.3s ease-in;

      &::-webkit-slider-thumb{
        position: relative;
        z-index: 10;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: red;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        transition: all 0.3s ease-in;
        -webkit-transition: all 0.3s ease-in;

      }

      & + .value-background {
        position: absolute;
        top: 0;
        right: -1px;
        height: inherit;
        background-color: yellow;
        border-radius: 10px;
        z-index: 2;
      }
    }
  }
</style>
