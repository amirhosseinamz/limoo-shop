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
      <ul class="slider-list" ref="sliderList" @mousedown="dragStart" @mousemove="dragAction" @mouseup="dragEnd" draggable="true">
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
      <span class="add-icon" @click="openAddProductModal"></span>
      <span class="add-txt">
        افزودن محصول دیگر
      </span>
    </div>
    <transition name="backdrop-delete">
      <div class="backdrop" v-if="showModalAddProduct" @click="closeAddProductModal"></div>
    </transition>
    <transition name="delete">
      <modal-add-product-comparison
        v-if="showModalAddProduct"
        @close-modal="closeAddProductModal"
        modal-mode="delete"
        :products="modalProducts"
      ></modal-add-product-comparison>
    </transition>
  </div>
</template>

<script>
import ModalAddProductComparison from "./modalAddProductComparison";
export default {
  name: "CompareSlider",
  components: { ModalAddProductComparison },
  props: {
    moveDirection: {
      type: String,
      require: false,
    },
    anotherSliderCounter: {
      type: Number,
      require: false,
    },
    modalProducts: { type: [Object, Array], default: [] },
  },
  data() {
    return {
      windowWidth: 0,
      showModalAddProduct: false,
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
      posFinal: 0,
      threshold: 100,
      sliderPressed: false,
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
      const sliderList = this.$refs.sliderList;
      let previousLeftPercentNumber = +sliderList.style.left.split("%")[0];
      this.currentSlide++;
      this.calculateMovePercent();
      sliderList.style.left = (previousLeftPercentNumber + this.movePercent).toString() + "%";
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
        direction: "previous",
      };
      if (!fromAnotherSlider) {
        this.$emit("slider-changed", sliderData);
      }

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
      if (!sliderList.style.left || sliderList.style.left === "0%") {
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
    closeAddProductModal() {
      this.showModalAddProduct = false;
    },
    openAddProductModal() {
      this.showModalAddProduct = true;
    },
    dragStart(e) {
      e = e || window.event;
      this.sliderPressed = true;
      const sliderList = this.$refs.sliderList;
      let sliderWidth = sliderList.clientWidth;

      e.preventDefault();
      this.posInitial = sliderList.offsetLeft;

      if (e.type === "touchstart") {
        this.posX1 = e.touches[0].clientX;
      } else {
        console.log(e.offsetX);
        this.posX1 = ((e.offsetX - sliderList.offsetLeft) / sliderWidth) * 100;
        window.addEventListener('mouseup', () => {
          this.sliderPressed = false;
        })
        // sliderList.addEventListener("mousemove", this.dragAction);
        // sliderList.addEventListener("mouseup", this.dragEnd);
      }
    },
    dragAction(e) {
      const sliderList = this.$refs.sliderList;
      if (!this.sliderPressed) {
        sliderList.style.cursor = "pointer";
        return;
      }
      e.preventDefault();
      let sliderWidth = sliderList.clientWidth;
      sliderList.style.cursor = "grabbing";
      let x = (e.offsetX / sliderWidth) * 100;
      sliderList.style.left = `${ (x - this.posX1).toString() }%`;
      //console.log(sliderList.style.left);
    },
    // dragAction(e) {
    //   if (!this.sliderPressed) {
    //     return;
    //   }
    //   e = e || window.event;
    //   const sliderList = this.$refs.sliderList;
    //   let sliderWidth = sliderList.clientWidth;
    //   if (e.type === "touchmove") {
    //     this.posX2 = this.posX1 - e.touches[0].clientX;
    //     this.posX1 = e.touches[0].clientX;
    //   } else {
    //     this.posX2 = this.posX1 - e.clientX;
    //     this.posX1 = e.clientX;
    //   }
    //   sliderList.style.left = (sliderList.offsetLeft - this.posX2) + "px";
    //
    // },
    dragEnd(e) {
      this.sliderPressed = false;
      const sliderList = this.$refs.sliderList;
      this.posFinal = sliderList.offsetLeft;
      if (this.posFinal - this.posInitial < -this.threshold) {
        this.nextSlide();
      } else if (this.posFinal - this.posInitial > this.threshold) {
        this.previousSlide();
      } else {
        sliderList.style.left = (this.posInitial) + "px";
      }

      sliderList.addEventListener("mousemove", null);
      sliderList.addEventListener("mouseup", null);
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.sliderItemsLength = this.sliderProductsData.length;
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
@include backdrop-delete-modal-animation();
@include delete-modal-animation();
.backdrop {
  @extend .modal-backdrop;
  background-color: $overlay--profile;
}
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
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;
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
      cursor: pointer;

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
    top: toRem(145);
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
    top: toRem(145);
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
