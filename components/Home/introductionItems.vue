<template>
  <div class=" page__home-introduction-items">
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

    <hooper ref="carousel" :auto-play="true" :play-speed="5000" :infiniteScroll="true" :vertical="false" :items-to-show="2" :center-mode="true" :rtl="true" :wheel-control="false">
      <slide class="introduction-carousel-item" v-for="item in introductionCarouselData" :key="item.id">
        <img :src="item.img" alt="" draggable="false">
      </slide>
      <hooper-pagination v-if="windowWidth < 520" slot="hooper-addons"></hooper-pagination>
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
      if (this.windowWidth > 520) {
        return 2;
      } else {
        return 1.25;
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  methods: {
    slideCarousel(e) {
      e.preventDefault();
    },
     handleResize() {
        this.windowWidth = window.innerWidth;
     }
  },

};
</script>

<style lang="scss" scoped>

.page__home-introduction-items{
  @include display-flex();
  align-items: flex-start;
  position: relative;
  margin-left: -5%;
  margin-right: -5.2%;
  height: auto;
  @include xs {
    margin-left: -5.7%;
    margin-right: -5.9%;
  }

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
      bottom: toRem(15);
      @include xs {
        bottom: toRem(20);
      }
      .hooper-indicators {
        .hooper-indicator {
          width: toRem(10);
          height: toRem(10);
          border-radius: 50%;
          background-color: $gray-6;
          border: toRem(1) solid $gray-4;
          @extend .centered;
          &.is-active {
            &::before {
              content: " ";
              position: absolute;
              width: toRem(6);
              height: toRem(6);
              background-color: $gray-4;
              border-radius: 50%;
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
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
}


</style>
