<template>
  <div class="page__home-introduction-items" ref="sliderContainer">
    <!--    <base-carousel-->
    <!--    :items-to-show="1.25"-->
    <!--    :center-mode="true"-->
    <!--    :infinite-scroll="true"-->
    <!--    class="introduction-carousel"-->
    <!--    >-->
    <!--      <template #slide>-->
    <!--        <li class="introduction-carousel-item" v-for="item in introductionCarouselData" :key="item.id" :style="{ backgroundImage: `url('${item.img}')` }">-->

    <!--        </li>-->
    <!--      </template>-->
    <!--    </base-carousel>-->

    <hooper :settings="carouselSetting" ref="carousel">
      <slide class="introduction-carousel-item" v-for="item in introductionCarouselData" :key="item.id">
        <img :src="item.img" alt="" draggable="false" ondragstart="return false" ondrag="return false">
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>

import {Hooper, Slide, Pagination as HooperPagination} from "hooper";
import 'hooper/dist/hooper.css';

export default {

  components: {
    Hooper,
    Slide,
    HooperPagination
  },

  data() {
    return {
      windowWidth: 0,
      carouselSetting: {
        autoPlay: true,
        playSpeed: 5000,
        infiniteScroll: true,
        vertical: false,
        itemsToShow: 1.25,
        centerMode: true,
        rtl: true,
        hoverPause: false,
        wheelControl: false,
        breakpoints: {
          520: {
            itemsToShow: 2
          },
        }
      }
    }
  },
  computed: {
    introductionProduct() {
      return this.$store.getters["home/home/introductionProduct"];
    },
    introductionCarouselData() {
      return this.$store.getters["home/home/introductionCarouselData"];
    },

    itemsToShow() {
      let windowWidth;
      if (this.windowWidth) {
        windowWidth = this.windowWidth;
      } else {
        windowWidth = window.outerWidth;
      }
      if (windowWidth > 520) {
        return 2;
      } else {
        return 1.15;
      }
    }
  },
  mounted() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
      this.setSliderGap();
  },

  methods: {
    slideCarousel(e) {
      e.preventDefault();
    },
     handleResize() {
        this.windowWidth = window.outerWidth;
     },
    setSliderGap() {
      const sliderContainer = this.$refs.sliderContainer;
      let marginAmount = (this.windowWidth - sliderContainer.parentElement.clientWidth) / 2;
      sliderContainer.style.marginLeft = -1 * marginAmount + 'px';
      sliderContainer.style.marginRight = -1 * marginAmount + 'px';
    }
  },
  watch: {
    windowWidth() {
      this.setSliderGap();
    }
  }

};
</script>

<style lang="scss" scoped>

.page__home-introduction-items{
  @include display-flex();
  align-items: flex-start;
  position: relative;
  height: auto;


  .introduction-carousel {
    width: 100%;
  }

  .hooper::v-deep {
    height: 100%;
    .hooper-list {
      height: 100%;
      .hooper-slide {
        padding: toRem(10);
        @include sm {
          padding: toRem(5);
        }
        @include xs {
          padding: toRem(3);
        }
        @include xxs {
          padding: toRem(2);
        }
      }
    }
    .hooper-track {
      position: relative;
    }
    .hooper-pagination {
      position: absolute;
      bottom: toRem(-5);
      @include sm {
        bottom: toRem(-10);
      }
      @include xs {
        bottom: toRem(20);
      }
      .hooper-indicators {
        .hooper-indicator {
          width: toRem(15);
          height: toRem(15);
          border-radius: 50%;
          background-color: $gray-6;
          border: toRem(1) solid $gray-4;
          @extend .centered;
          &.is-active {
            &::before {
              content: " ";
              width: toRem(10);
              height: toRem(10);
              position: absolute;
              background-color: $gray-4;
              border-radius: 50%;
            }
          }
          @include xs {
            width: toRem(10);
            height: toRem(10);
            &.is-active {
              &::before {
                width: toRem(6);
                height: toRem(6);
              }
            }
          }
        }
      }
    }

  }

  img {
    width: 100%;
    height: 100%;
    border-radius: toRem(15);
    user-drag: none!important;
    -webkit-user-drag: none!important;
    user-select: none!important;
    -moz-user-select: none!important;
    -webkit-user-select: none!important;
    -ms-user-select: none!important;
  }
}

</style>
