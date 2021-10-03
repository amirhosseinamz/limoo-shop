<template>
  <div class="compare-slider-container">
    <div class="right-content">
      <div class="title">
        مقایسه محصولات
      </div>
      <div class="description">
        محصولات مورد نظرتان را اضافه کنید و به مقایسه بپردازید.
      </div>
    </div>
    <div class="previous-btn" @click="previousSlide" v-if="showPrevButton">
      <span class="icon"></span>
    </div>
    <div class="slider-wrapper" ref="sliderWrapper">
      <ul class="slider-list" ref="sliderList" @dragstart="dragStart" @touchstart="dragAction" draggable="true">
          <li class="item" v-for="item in sliderProductsData" :key="item.id">
            <div class="item-image-wrapper">
              <img :src="item.image" alt="Image">
            </div>
            <div class="item-name">
              {{ item.title }}
            </div>
            <div class="item-price">
              {{ item.realPrice }}
              تومان
            </div>
          </li>
      </ul>
    </div>

    <div class="next-btn" @click="nextSlide" v-if="showNextButton">
      <span class="icon"></span>
    </div>
    <div class="left-content">
      <span class="add-icon"></span>
      <span class="add-txt">
        افزودن محصول دیگر
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompareSlider",
  props: {
    leftValue: {
      type: String,
      require: false
    },
    moveDirection: {
      type: String,
      require: false,
    },
    previousLeft: {
      type: Number,
      require: false,
    },
    nextButtonShow: {
      type: Boolean,
      require: false
    },
    previousButtonShow: {
      type: Boolean,
      require: false,
    },
  },
  data() {
    return {
      windowWidth: 0,
      showPrevButton: true,
      showNextButton: true,
      sliderItemsLength: 0,
      showedItemsPerSlide: 0,
      sliderSlidesLength: 0,
      currentSlide: 1,
      movePercent: 0,
      previousMovePercent: 0,
      posInitial: 0,
      posX1: 0,
      posX2: 0,
    };
  },
  computed: {
    sliderProductsData() {
      return this.$store.getters["comparison/comparison/sliderProductsData"];
    },
  },
  methods: {
    nextSlide() {
      this.showPrevButton = true;
      const sliderList = this.$refs.sliderList;
      let previousLeftPercentNumber = +sliderList.style.left.split("%")[0];
      this.currentSlide++;
      this.calculateMovePercent();
      sliderList.style.left = (previousLeftPercentNumber + this.movePercent).toString() + "%";
      this.previousMovePercent = this.movePercent;
      this.checkNextButton();
      let sliderData = {
        left: sliderList.style.left,
        direction: 'next',
        previousLeft: this.previousMovePercent,
        nextButtonDisplay: this.showNextButton,
        previousButtonDisplay: this.showPrevButton,
        movePercent: this.movePercent
      }
      this.$emit('slider-changed', sliderData);
    },
    previousSlide() {
      this.showNextButton = true;
      const sliderList = this.$refs.sliderList;
      //in the last slide, if slider only slides one item, then user pressed previous button, it should go back
      // as much as previous value. and if there is no previous value, go back completely 3 Items.
      let _movePercent;
      if (this.previousMovePercent) {
        _movePercent = this.previousMovePercent;
      } else {
        _movePercent = 100;
      }
      let previousLeftPercentNumber = +sliderList.style.left.split("%")[0];
      this.currentSlide--;
      sliderList.style.left = (previousLeftPercentNumber - _movePercent).toString() + "%";
      this.previousMovePercent = 0;
      this.checkPrevButton();
      let sliderData = {
        left: sliderList.style.left,
        direction: 'previous',
        previousLeft: null,
        nextButtonDisplay: this.showNextButton,
        previousButtonDisplay: this.showPrevButton,
        movePercent: null
      }

      this.$emit('slider-changed', sliderData);

    },
    calculateMovePercent() {
      if (this.windowWidth > 1366) {
        let remainder = (this.sliderItemsLength % this.showedItemsPerSlide);
        if (this.currentSlide === this.sliderSlidesLength) {
          switch (remainder) {
            case 0:
              this.movePercent = 100;
              break;
            case 1:
              this.movePercent = 33.333;
              break;
            case 2:
              this.movePercent = 66.666;
              break;
          }
        } else {
          this.movePercent = 100;// It's not last slide
        }

      } else {
        let remainder = (this.sliderItemsLength % this.showedItemsPerSlide);
        if (this.currentSlide === this.sliderSlidesLength) {
          switch (remainder) {
            case 0:
              this.movePercent = 100;
              break;
            case 1:
              this.movePercent = 50;
              break;
          }
        } else {
          this.movePercent = 100; // It's not last slide
        }
      }
    },
    checkPrevButton() {
      const sliderList = this.$refs.sliderList;
      if (!sliderList.style.left || sliderList.style.left === '0%') {
        this.showPrevButton = false;
      }
    },
    checkNextButton() {
      if (this.currentSlide === this.sliderSlidesLength) {
        this.showNextButton = false;
      }
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 1366) {
        this.showedItemsPerSlide = 3;
      } else {
        this.showedItemsPerSlide = 2;
      }
    },
    dragStart (e) {
      console.log(e);
      e = e || window.event;
      const sliderList = this.$refs.sliderList;
      e.preventDefault();
       this.posInitial = sliderList.offsetLeft;

      if (e.type === 'touchstart') {
        this.posX1 = e.touches[0].clientX;
      } else {
        this.posX1 = e.clientX;
        // sliderList.onmouseup = dragEnd;
        // document.onmousemove = dragAction;
      }
    },
    dragAction (e) {
      e = e || window.event;
      console.log(e);
      const sliderList = this.$refs.sliderList;
      if (e.type === 'touchmove') {
        this.posX2 = this.posX1 - e.touches[0].clientX;
        this.posX1 = e.touches[0].clientX;
      } else {
        this.posX2 = this.posX1 - e.clientX;
        this.posX1 = e.clientX;
      }
      sliderList.style.left = (sliderList.offsetLeft - this.posX2) + "px";
    },
    // dragEnd (e) {
    //   posFinal = items.offsetLeft;
    //   if (posFinal - posInitial < -threshold) {
    //     shiftSlide(1, 'drag');
    //   } else if (posFinal - posInitial > threshold) {
    //     shiftSlide(-1, 'drag');
    //   } else {
    //     items.style.left = (posInitial) + "px";
    //   }
    //
    //   document.onmouseup = null;
    //   document.onmousemove = null;
    // }

  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.sliderItemsLength = this.sliderProductsData.length
    this.sliderSlidesLength = Math.ceil(this.sliderItemsLength / this.showedItemsPerSlide);
    this.checkPrevButton();
    this.checkNextButton();
  },
  watch: {
    windowWidth(val) {
      if (val > 1366) {
        this.showedItemsPerSlide = 3;
      } else {
        this.showedItemsPerSlide = 2;
      }
      this.sliderSlidesLength = Math.ceil(this.sliderItemsLength / this.showedItemsPerSlide);
    },
    leftValue(val) {
      let slider = this.$refs.sliderList;
      slider.style.left = val;
    },
    moveDirection(val) {
      if (val === 'next') {
        this.currentSlide++;
      } else if (val === 'previous') {
        this.currentSlide--;
      }
    },
    previousLeft(val) {
      this.previousMovePercent = val;
    },
    nextButtonShow(val) {
      this.showNextButton = val;
    },
    previousButtonShow(val) {
      this.showPrevButton = val;
    },
  }
};
</script>

<style lang="scss" scoped>
.compare-slider-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  height: toRem(340);
  min-width: toRem(965);
  position: relative;

  .right-content {
    grid-column: 1/2;
    @extend .justify-center;
    height: 100%;
    flex-direction: column;
    padding-right: toRem(24);
    padding-left: toRem(31);
    position: relative;
    z-index: 1;
    border-left: toRem(1) solid $gray-6;

    .title {
      font-size: toRem(18);
      color: $black;
      margin-bottom: toRem(16);
    }

    .description {
      font-size: toRem(14);
      color: $gray-2;
      line-height: toRem(35);
    }
  }

  .slider-wrapper {
    grid-column: 2/3;
    @extend .align-center;
    position: relative;
    z-index: 0;
    height: 100%;
    overflow-x: hidden;


    .slider-list {
      @extend .d-flex;
      width: 100%;
      left: 0;
      position: relative;
      transition: all 0.5s ease;
      -webkit-transition: all 0.5s ease;

      .item {
        @extend .align-center;
        justify-content: space-between;
        padding: 0 toRem(8);
        border-left: toRem(1) solid $gray-6;
        flex-direction: column;
        min-width: 33.333%;
        height: toRem(264);
        transition: all 0.5s ease;
        -webkit-transition: all 0.5s ease;



        @include xl {
          min-width: 50%;
        }

        &-image-wrapper {
          width: 100%;
          @extend .justify-center;
          margin-bottom: toRem(8);

          img {
            max-height: toRem(164);
          }
        }

        &-name {
          max-width: 70%;
          font-size: toRem(14);
          color: $black-topic;
          margin: 0 auto toRem(16) auto;
          text-align: center;
        }

        &-price {
          font-size: toRem(16);
          color: $gray-2;
          text-align: center;
        }
      }
    }
  }

  .left-content {
    grid-column: 3/4;
    @extend .centered;
    height: 100%;
    flex-direction: column;
    position: relative;
    z-index: 1;

    .add-icon {
      margin-bottom: toRem(16);

      &::before {
        content: "\e86b";
        font-size: toRem(52);
        @include font-icon__limoo();
        color: $color-blue;
      }
    }

    .add-txt {
      font-size: toRem(14);
      color: $color-blue;
    }
  }

  .previous-btn {
    position: absolute;
    margin: auto 0;
    right: toRem(290);
    z-index: 1;
    cursor: pointer;

    .icon {
      width: toRem(40);
      height: toRem(40);
      border-radius: 50%;
      background-color: $gray-3;
      @extend .centered;

      &::before {
        content: "\e801";
        @include font-icon__limoo();
        width: 100%;
        height: 100%;
        @extend .centered;
        padding-right: toRem(2);
        font-size: toRem(18);
        color: $white;
        transform: rotate(180deg);
      }
    }
  }

  .next-btn {
    position: absolute;
    margin: auto 0;
    left: toRem(290);
    z-index: 1;
    cursor: pointer;

    .icon {
      width: toRem(40);
      height: toRem(40);
      border-radius: 50%;
      background-color: $gray-3;
      @extend .centered;

      &::before {
        content: "\e801";
        @include font-icon__limoo();
        font-size: toRem(18);
        width: 100%;
        height: 100%;
        @extend .centered;
        padding-right: toRem(2);
        color: $white;
      }
    }
  }
}
</style>
