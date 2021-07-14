<template>
  <div class="middle" :style="{ width: width + 'px' }">
    <div class="multi-range-slider">
      <input @input="setRightValue" type="range" class="input-right" :min="min" :max="max" v-model="rightValue">
      <input @input="setLeftValue" type="range" class="input-left" :min="min" :max="max" v-model="leftValue">

      <div class="slider">
        <div class="track" @click="moveSelector"></div>
        <div class="range" @click="moveSelector" :style="{ right: rightPercentComputed, left: leftPercentComputed }"></div>
        <div class="thumb left-slider" ref="left-thumb" :style="{ left: (100 - leftPercent)+'%' }"></div>
        <div class="thumb right-slider" ref="right-thumb" :style="{right: rightPercent + '%'}"></div>
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
      require: true,
    },
    max: {
      type: String,
      require: true,
    },
    firstValue: {
      type: Number,
      require: false,
    },
    secondValue: {
      type: Number,
      require: false,
    },
  },
  data() {
    return {
      rightPercent: null,
      leftPercent: null,
      rightValue: 20000,
      leftValue: 70000,
      width: "",
      isChanged: false,
    };
  },
  computed: {
    rightPercentComputed () {
      if (this.isChanged) {
        return this.leftPercent + '%'
      } else {
        return this.rightPercent + '%'
      }
    },
    leftPercentComputed () {
      if (this.isChanged) {
        return 100 - this.rightPercent + '%'
      } else {
        return 100 - this.leftPercent + '%'
      }
    }
  },
  watch: {
    firstValue(val) {
      this.rightValue = val;
    },
    secondValue(val) {
      this.leftValue = val;
    },
    rightValue(val) {
      this.rightPercent = (val * 100) / this.max;
    },
    leftValue(val) {
      this.leftPercent = (val * 100) / this.max;
    },
    rightPercent(val) {
      this.rightValue = (val * this.max) / 100;
    },
    leftPercent(val) {
      this.leftValue = (val * this.max) / 100;
    },
  },
  methods: {
    setRightValue() {
      this.isChanged = this.leftValue < this.rightValue;
      if (this.isChanged) {
        this.leftPercent = ((+this.leftValue - +this.min) / (+this.max - +this.min)) * 100;
        this.$emit("selector-changed", [this.leftValue, this.rightValue]);
        return;
      }

      this.rightPercent = ((+this.rightValue - +this.min) / (+this.max - +this.min)) * 100;
      this.$emit("selector-changed", [this.rightValue, this.leftValue]);
    },
    setLeftValue() {
      this.isChanged = this.leftValue < this.rightValue;
      if (this.isChanged) {
        this.rightPercent = ((+this.rightValue - +this.min) / (+this.max - +this.min)) * 100;
        this.$emit("selector-changed", [this.leftValue, this.rightValue]);
        return;
      }
      this.leftPercent = ((+this.leftValue - +this.min) / (+this.max - +this.min)) * 100;
      this.$emit("selector-changed", [this.rightValue, this.leftValue]);
    },
    moveSelector(e) {
      let rightDot = this.$refs["right-thumb"];
      let leftDot = this.$refs["left-thumb"];
      const distanceRight = Math.abs(this.getDistanceBetweenElements(e, rightDot));
      const distanceLeft = Math.abs(this.getDistanceBetweenElements(e, leftDot));
      const rightPosition = this.getPositionAtCenter(rightDot).x;
      const leftPosition = this.getPositionAtCenter(leftDot).x;

      if (distanceRight < distanceLeft) {
        const moveDistanceValue = Math.ceil(((e.clientX - rightPosition) * this.max) / this.width);
        const moveDistanceValuePlus = Math.ceil(Math.abs((e.clientX - rightPosition) * this.max) / this.width);
        if (moveDistanceValue > 0) {
          this.rightValue -= moveDistanceValuePlus;
        } else {
          this.rightValue += moveDistanceValuePlus;
        }
        this.$emit("selector-moved", [this.rightValue, this.leftValue]);
      } else {
        const moveDistanceValue = Math.ceil(((e.clientX - leftPosition) * this.max) / this.width);
        const moveDistanceValuePlus = Math.ceil(Math.abs((e.clientX - leftPosition) * this.max) / this.width);

        if (moveDistanceValue > 0) {
          this.leftValue -= moveDistanceValuePlus;
        } else {
          this.leftValue += moveDistanceValuePlus;
        }
        this.$emit("selector-moved", [this.rightValue, this.leftValue]);
      }
    },
    getPositionAtCenter(element) {
      const { top, left, width, height } = element.getBoundingClientRect();
      return {
        x: left + width / 2,
        y: top + height / 2,
      };
    },

    getDistanceBetweenElements(a, b) {
      const aPosition = a.clientX;
      const bPosition = this.getPositionAtCenter(b);
      return aPosition - bPosition.x;
    },
  },
  mounted() {
    if (this.firstValue) {
      this.rightValue = this.firstValue;
    }
    if (this.secondValue) {
      this.leftValue = this.secondValue;
    }
    this.setRightValue();
    this.setLeftValue();
    const _middle = document.querySelector(".middle");
    this.width = _middle.parentElement.clientWidth;
  },
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
      transition: all 0.1s ease-out;
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
      transition: all 0.1s ease-out;

      &#left-slider {
        left: 25%;
        transform: translateX(-40%);
      }

      &#right-slider {
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
