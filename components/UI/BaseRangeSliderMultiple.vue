<template>
  <div class="middle" :style="{width: width + '%'}">
    <div class="multi-range-slider">
      <input @input="setRightValue" type="range" class="input-right" :min="min" :max="max" v-model="rightValue">
      <input @input="setLeftValue" type="range" class="input-left" :min="min" :max="max" v-model="leftValue">

      <div class="slider">
        <div class="track" @click="moveSelector"></div>
        <div class="range" @click="moveSelector" :style="{ right: rightPercent + '%', left: (100 - leftPercent) + '%'}"></div>
        <div class="thumb left-slider" :style="{ left: (100 - leftPercent)+'%' }"></div>
        <div class="thumb right-slider" :style="{right: rightPercent + '%'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseRangeSliderMultiple",
  props: {
    min: {
      type: String,
      require: true
    },
    max: {
      type: String,
      require: true
    },
    firstValue: {
      type: String,
      require: false
    },
    secondValue: {
      type: String,
      require: false
    },
    width: {
      type: String,
      require: false
    }
  },
  data () {
    return {
      rightPercent: null,
      leftPercent: null,
      rightValue: 20000,
      leftValue: 70000
    }
  },
  watch: {
    firstValue (val) {
      this.rightValue = val
    },
    secondValue (val) {
      this.leftValue = val
    },
    rightValue (val) {
      this.rightPercent = (val * 100) / this.max
    },
    leftValue (val) {
      this.leftPercent = (val * 100) / this.max
    }
  },
  methods: {
    setRightValue () {
      this.rightValue = Math.min(+this.leftValue, +this.rightValue)
      this.rightPercent = ((+this.rightValue - +this.min) / (+this.max - +this.min)) * 100
      this.$emit('selector-changed', [this.rightValue, this.leftValue])
    },
    setLeftValue () {
      this.leftValue = Math.max(+this.leftValue, +this.rightValue)
      this.leftPercent = ((+this.leftValue - +this.min) / (+this.max - +this.min)) * 100
      this.$emit('selector-changed', [this.rightValue, this.leftValue])
    },
    moveSelector (e) {
      const rightDot = document.querySelector('.right-slider')
      const leftDot = document.querySelector('.left-slider')
      const distanceRight = Math.abs(this.getDistanceBetweenElements(e, rightDot))
      const distanceLeft = Math.abs(this.getDistanceBetweenElements(e, leftDot))
      const rightPosition = this.getPositionAtCenter(rightDot).x
      const leftPosition = this.getPositionAtCenter(leftDot).x
      if (distanceRight < distanceLeft) {
        const moveDistanceValue = Math.ceil(((e.clientX - rightPosition) * this.max ) / this.width)
        const moveDistanceValuePlus = Math.ceil(Math.abs((e.clientX - rightPosition) * this.max ) / this.width)
        if (moveDistanceValue > 0) {
          this.rightValue -= moveDistanceValuePlus
        } else {
          this.rightValue += moveDistanceValuePlus
        }

      } else {
        const moveDistanceValue = Math.ceil(((e.clientX - leftPosition) * this.max ) / this.width)
        const moveDistanceValuePlus = Math.ceil(Math.abs((e.clientX - leftPosition) * this.max ) / this.width)

        if (moveDistanceValue > 0) {
          this.leftValue -= moveDistanceValuePlus
        } else {
          this.leftValue += moveDistanceValuePlus
        }
      }
    },
    getPositionAtCenter (element) {
      const { top, left, width, height } = element.getBoundingClientRect();
      console.log(left);
      return {
        x: left + width / 2,
        y: top + height / 2,
      };
    },

    getDistanceBetweenElements (a, b) {
      const aPosition = a.clientX;
      const bPosition = this.getPositionAtCenter(b);
      return aPosition - bPosition.x
    },
  },
  mounted() {
    if (this.firstValue) {
      this.rightValue = this.firstValue
    }
    if (this.secondValue) {
      this.leftValue = this.secondValue
    }
    this.setRightValue()
    this.setLeftValue()
  }
};
</script>

<style lang="scss" scoped>
.middle {
  position: relative;
  width: 100%;

  .slider {
    position: relative;
    display: flex;
    align-items: center;
    z-index: 1;
    height: toRem(9);

    .track {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: toRem(40);
      background: $gray-5;
    }

    .range {
      position: absolute;
      z-index: 2;
      top: 0;
      bottom: 0;
      border-radius: toRem(40);
      background: $orange;
      transition: all 0.05s ease-out;
    }
    .thumb {
      position: absolute;
      cursor: pointer;
      z-index: 3;
      width: toRem(14);
      height: toRem(14);
      border: toRem(2) solid $orange;
      box-shadow: 0 0 0 toRem(5.2) rgba(255, 204, 64, 0.3);
      background-color: $white;
      border-radius: 50%;
      transition: all 0.05s ease-out;

      &.left-slider {
        left: 25%;
        transform: translateX(-40%);
      }
      &.right-slider {
        right: 25%;
        transform: translateX(40%);
      }
    }
  }

  input {
    position: absolute;
    pointer-events: none;
    -webkit-appearance: none;
    z-index: 2;
    height: 10px;
    width: 100%;
    opacity: 0;
    cursor: pointer;

    &::-webkit-slider-thumb {
      pointer-events: all;
      width: 30px;
      height: 30px;
      border-radius: 0;
      border: none;
      background-color: red;
      -webkit-appearance: none;
    }
  }

}
</style>
