<template>
  <div class="specification-container" ref="specificationContainer">
    <div class="previous-btn" @click="previousSlide" v-show="showPrevButton">
      <span class="icon"></span>
    </div>
    <div class="title">
      مشخصات کالا
    </div>
    <div class="wrapper" :class="'wrapper-'+ wrapperUUID">
      <div class="specification-line">
        <div class="specification-name">
          حافظه رم
        </div>
        <div class="specification-slider">
          <ul class="slider-list" :class="'slider-'+sliderUUID" ref="sliderList_1">
            <li class="item">8</li>
            <li class="item">16</li>
            <li class="item">16</li>
            <li class="item">8</li>
            <li class="item">32</li>
            <li class="item">64</li>
            <li class="item">32</li>
          </ul>
        </div>
        <div class="specification-empty-space"></div>
      </div>
      <div class="specification-line">
        <div class="specification-name">
          هارد
        </div>
        <div class="specification-slider">
          <ul class="slider-list" :class="'slider-'+sliderUUID" ref="sliderList_2">
            <li class="item">1TB HDD</li>
            <li class="item">2TB HDD</li>
            <li class="item">512GB SSD</li>
            <li class="item">1TB HDD+ 128GB SSD</li>
            <li class="item">1TB HDD</li>
            <li class="item">2TB HDD</li>
            <li class="item">512GB SSD</li>
          </ul>
        </div>
      </div>
      <div class="specification-line">
        <div class="specification-name">
          هارد
        </div>
        <div class="specification-slider">
          <ul class="slider-list" :class="'slider-'+sliderUUID" ref="sliderList_2">
            <li class="item">1TB HDD</li>
            <li class="item">2TB HDD</li>
            <li class="item">512GB SSD</li>
            <li class="item">1TB HDD+ 128GB SSD</li>
            <li class="item">1TB HDD</li>
            <li class="item">2TB HDD</li>
            <li class="item">512GB SSD</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="title">
      مشخصات کالا
    </div>
    <div class="wrapper" :class="'wrapper-'+ wrapperUUID">
      <div class="specification-line">
        <div class="specification-name">
          فرکانس پردازنده مرکزی
        </div>
        <div class="specification-slider">
          <ul class="slider-list" :class="'slider-'+sliderUUID" ref="sliderList_1">
            <li class="item">8</li>
            <li class="item">16</li>
            <li class="item">16</li>
            <li class="item">8</li>
            <li class="item">32</li>
            <li class="item">64</li>
            <li class="item">32</li>
          </ul>
        </div>
        <div class="specification-empty-space"></div>
      </div>
      <div class="specification-line">
        <div class="specification-name">
          هارد
        </div>
        <div class="specification-slider">
          <ul class="slider-list" :class="'slider-'+sliderUUID" ref="sliderList_2">
            <li class="item">1TB HDD</li>
            <li class="item">2TB HDD</li>
            <li class="item">512GB SSD</li>
            <li class="item">1TB HDD+ 128GB SSD</li>
            <li class="item">1TB HDD</li>
            <li class="item">2TB HDD</li>
            <li class="item">512GB SSD</li>
          </ul>
        </div>
      </div>
      <div class="specification-line">
        <div class="specification-name">
          هارد
        </div>
        <div class="specification-slider">
          <ul class="slider-list" :class="'slider-'+sliderUUID" ref="sliderList_2">
            <li class="item">1TB HDD</li>
            <li class="item">2TB HDD</li>
            <li class="item">512GB SSD</li>
            <li class="item">1TB HDD+ 128GB SSD</li>
            <li class="item">1TB HDD</li>
            <li class="item">2TB HDD</li>
            <li class="item">512GB SSD</li>
          </ul>
        </div>
      </div>
    </div>
<div class="title">
      مشخصات کالا
    </div>
    <div class="wrapper" :class="'wrapper-'+ wrapperUUID">
      <div class="specification-line">
        <div class="specification-name">
          فرکانس پردازنده مرکزی
        </div>
        <div class="specification-slider">
          <ul class="slider-list" :class="'slider-'+sliderUUID" ref="sliderList_1">
            <li class="item">8</li>
            <li class="item">16</li>
            <li class="item">16</li>
            <li class="item">8</li>
            <li class="item">32</li>
            <li class="item">64</li>
            <li class="item">32</li>
          </ul>
        </div>
        <div class="specification-empty-space"></div>
      </div>
      <div class="specification-line">
        <div class="specification-name">
          هارد
        </div>
        <div class="specification-slider">
          <ul class="slider-list" :class="'slider-'+sliderUUID" ref="sliderList_2">
            <li class="item">1TB HDD</li>
            <li class="item">2TB HDD</li>
            <li class="item">512GB SSD</li>
            <li class="item">1TB HDD+ 128GB SSD</li>
            <li class="item">1TB HDD</li>
            <li class="item">2TB HDD</li>
            <li class="item">512GB SSD</li>
          </ul>
        </div>
      </div>
      <div class="specification-line">
        <div class="specification-name">
          هارد
        </div>
        <div class="specification-slider">
          <ul class="slider-list" :class="'slider-'+sliderUUID" ref="sliderList_2">
            <li class="item">1TB HDD</li>
            <li class="item">2TB HDD</li>
            <li class="item">512GB SSD</li>
            <li class="item">1TB HDD+ 128GB SSD</li>
            <li class="item">1TB HDD</li>
            <li class="item">2TB HDD</li>
            <li class="item">512GB SSD</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="next-btn" v-show="showNextButton" @click="nextSlide">
      <span class="icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSpecification",
  props: {
    moveDirection: {
      type: String,
      require: false,
    },
    anotherSliderCounter: {
      type: Number,
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
      previousMovePercent: 0,
      movePercent: 33.333,
      sliderUUID: "606d0ab0-b206-4dcb-8ef4-63965d867696",
      wrapperUUID: "bb70a447-c360-4154-bf55-41be259d3146",
    };
  },
  computed: {
    sliderProductsData() {
      return this.$store.getters["comparison/comparison/sliderProductsData"];
    },

  },
  methods: {
    nextSlide(e, fromAnotherSlider) {
      this.showPrevButton = true;
      const sliderLists = document.querySelectorAll(".slider-" + this.sliderUUID);
      let previousLeftPercentNumber = +sliderLists[0].style.left.split("%")[0];
      this.currentSlide++;
      //this.calculateMovePercent();
      for (let i = 0; i < sliderLists.length; i++) {
        sliderLists[i].style.left = (previousLeftPercentNumber + this.movePercent).toString() + "%";
      }
      this.previousMovePercent = this.movePercent;
      this.checkNextButton();
      let sliderData = {
        direction: "next",
      };
      if (!fromAnotherSlider) {
        this.$emit("slider-changed", sliderData);
      }
    },
    previousSlide(e, fromAnotherSlider) {
      this.showNextButton = true;
      const sliderLists = document.querySelectorAll(".slider-" + this.sliderUUID);
      let _movePercent;
      //in the last slide, if slider only slides one item, then user pressed previous button, it should go back
      // as much as previous value. and if there is no previous value, go back completely 3 Items.
      // if (this.previousMovePercent) {
      //   _movePercent = this.previousMovePercent;
      // } else {
      //   _movePercent = 100;
      // }
      let previousLeftPercentNumber = +sliderLists[0].style.left.split("%")[0];
      this.currentSlide--;
      for (let i = 0; i < sliderLists.length; i++) {
        sliderLists[i].style.left = (previousLeftPercentNumber - this.movePercent).toString() + "%";
      }
      this.previousMovePercent = 0;
      this.checkPrevButton();
      let sliderData = {
        direction: "previous",
      };
      if (!fromAnotherSlider) {
        this.$emit("slider-changed", sliderData);
      }
    },
    // calculateMovePercent() {
    //   if (this.windowWidth > 1366) {
    //     let remainder = (this.sliderItemsLength % this.showedItemsPerSlide);
    //     if (this.currentSlide === this.sliderSlidesLength) {
    //       switch (remainder) {
    //         case 0:
    //           this.movePercent = 100;
    //           break;
    //         case 1:
    //           this.movePercent = 33.333;
    //           break;
    //         case 2:
    //           this.movePercent = 66.666;
    //           break;
    //       }
    //     } else {
    //       this.movePercent = 100;// It's not last slide
    //     }
    //
    //   } else {
    //     let remainder = (this.sliderItemsLength % this.showedItemsPerSlide);
    //     if (this.currentSlide === this.sliderSlidesLength) {
    //       switch (remainder) {
    //         case 0:
    //           this.movePercent = 100;
    //           break;
    //         case 1:
    //           this.movePercent = 50;
    //           break;
    //       }
    //     } else {
    //       this.movePercent = 100; // It's not last slide
    //     }
    //   }
    // },
    checkPrevButton() {
      const sliderLists = document.querySelectorAll(".slider-" + this.sliderUUID);
      if (!sliderLists[0].style.left || sliderLists[0].style.left === "0%" || +sliderLists[0].style.left.split("%")[0] < 0) {
        this.showPrevButton = false;
      }
    },
    checkNextButton() {
      console.log(this.currentSlide, this.sliderSlidesLength);
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
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.sliderItemsLength = this.sliderProductsData.length;
    // this.sliderSlidesLength = Math.ceil(this.sliderItemsLength / this.showedItemsPerSlide);
    this.sliderSlidesLength = this.sliderItemsLength - this.showedItemsPerSlide + 1;
    this.checkPrevButton();
    this.checkNextButton();
    let container = this.$refs.specificationContainer;
    container.querySelectorAll('.title')[0].classList.add('first-title');

  },
  watch: {
    windowWidth(val) {
      if (val > 1366) {
        this.movePercent = 33.333;
        this.showedItemsPerSlide = 3;
      } else {
        this.movePercent = 50;
        this.showedItemsPerSlide = 2;
      }
      // this.sliderSlidesLength = Math.ceil(this.sliderItemsLength / this.showedItemsPerSlide);
      this.sliderSlidesLength = this.sliderItemsLength - this.showedItemsPerSlide + 1;
    },
    anotherSliderCounter() {
      switch (this.moveDirection) {
        case "next":
          this.nextSlide(null, "fromAnotherSlider");
          break;
        case "previous":
          this.previousSlide(null, "fromAnotherSlider");
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.specification-container {
  width: 100%;
  position: relative;

  .title {
    margin-bottom: toRem(16);
    padding-top: toRem(38);
    border-top: toRem(2) solid $gray-6;

    &.first-title {
      padding: 0;
      border: none;
    }

  }

  .wrapper {
    width: 100%;
    position: relative;
    @extend .justify-center;
    flex-direction: column;

    .specification-line {
      width: 100%;
      height: toRem(53);
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      color: $gray-2;


      &:nth-child(even) {
        background-color: rgba(242, 242, 242, 0.4);
      }

      &:nth-child(odd) {
        background-color: $white;
      }

      .specification {
        &-name {
          grid-column: 1/2;
          @extend .centered;
          height: 100%;
          position: relative;
          z-index: 1;
          border-left: toRem(1) solid $gray-6;
          justify-content: flex-start;
          padding-right: toRem(18);
        }

        &-slider {
          grid-column: 2/3;
          @extend .align-center;
          overflow-x: hidden;
          position: relative;
          z-index: 0;

          .slider-list {
            @extend .align-center;
            position: relative;
            height: 100%;
            width: 100%;
            left: 0;
            transition: all 0.5s ease;
            -webkit-transition: all 0.5s ease;

            .item {
              @extend .centered;
              min-width: 33.333%;
              height: 100%;
              transition: all 0.5s ease;
              -webkit-transition: all 0.5s ease;
              border-left: toRem(1) solid $gray-6;

              @include xl {
                min-width: 50%;
              }
            }
          }

        }

        &-empty-space {
          grid-column: 3/4;
        }
      }
    }


  }
  .previous-btn {
    position: sticky;
    z-index: 4;
    cursor: pointer;
    width: 0;
    height: 0;
    right: 16%;
    top: 50%;

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
    position: sticky;
    z-index: 4;
    cursor: pointer;
    width: 0;
    height: 0;
    right: 86%;
    bottom: 50%;

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
