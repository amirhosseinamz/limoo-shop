<template>
  <div class="product__pic-container w-100">
    <transition name="backdrop-scale">
      <div class="backdrop" v-if="showModalPic" @click="modalClose"></div>
    </transition>
    <transition :name="modalAnimation">
        <modal-pic-product
          v-if="showModalPic"
          :show-modal="showModalPic"
          :product-slider="productSlider"
          :image-selected="imageSelected"
          @active-item-slider-nav="activeItemSliderNav"
          @close-modal="modalClose"
        ></modal-pic-product>
    </transition>
    <div class="w-100 product__pic desktop">
      <div class="w-100 product__pic-main">
<!--        <img-->
<!--          @click="showModal(productSlider[0])"-->
<!--          class="product__pic-item"-->
<!--          :src="productSlider[0].image"-->
<!--          alt=""-->
<!--        />-->
        <image-magnifier
          :src="productSlider[0].image"
          @clicked="showModal(productSlider[0])"
          image-class="product__pic-item"
        >
        </image-magnifier>
      </div>

      <span class="product__line"></span>

      <div class="product__pic-content w-100" :key="updateLimitedProduct">
        <div
          @click="showModal(data)"
          :class="{ 'active--pic': data.lastItemLimitedProduct }"
          v-for="(data, index) in productSlider"
          v-if="data.show && index !== 0"
          :key="data.id"
          class="product__pic-items"
        >
          <div class="product__pic-box">
            <img class="product__pic-data" :src="data.image" alt="" />

            <div class="w-100 product--pic__circle-main">
              <span class="product__pic-circle"></span>
              <span class="product__pic-circle"></span>
              <span class="product__pic-circle"></span>
            </div>
          </div>
          <span class="product--pic_data-line"></span>
        </div>
      </div>

      <!--    Pics Modal-->

    </div>
    <div class="w-100 product__pic mobile">
      <base-carousel
        ondragstart="return false"
        ondrag="return false"
        class="product__pic-carousel"
        :items-to-slide="1"
        :items-to-show="1"
        :wheel-control="false"
        ref="productCarousel"
        :pagination="true"
        pagination-class="product__pic-carousel-pagination"
        indicator-class="product__pic-carousel-pagination-indicator"
      >
        <template #default="slotProps">
          <slide :slide-width="slotProps.slideWidth" class="product__pic-carousel-item" v-for="item in productSlider" :key="item.id">
            <div class="product__pic-carousel-item-image-wrapper">
              <img :src="item.image" alt="Image" draggable="false">
            </div>
          </slide>
        </template>
      </base-carousel>
    </div>
  </div>

</template>
<script>
import modalPicProduct from "./modalPicProduct";
import ImageMagnifier from "./ImageMagnifier";

export default {
  props: {
    productSlider: { type: [Object, Array], default: [] },
    commentData: { type: [Object, Array], default: {} },
  },
  components: {
    ImageMagnifier,
    modalPicProduct,
  },
  computed: {
    modalAnimation() {
      return "scale";
    },
  },
  data() {
    return {
      showModalPic: false,
      productLimitedShow: [],
      imageSelected: {},
      updateLimitedProduct: 0,
      windowWidth: 0
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.limitedProduct();
  },
  watch: {
    showModalPic(val) {
      this.$emit('toggle-modal', val);
    }
  },

  methods: {
    modalClose() {
      this.showModalPic = false;
    },
    limitedProduct() {
      this.productSlider.map((content, index) => {
        content.show = false;
        content.lastItemLimitedProduct = false;

        if (index <= 3) {
          content.show = true;
        }

        if (index === 3) {
          content.lastItemLimitedProduct = true;
        }
      });

      this.updateLimitedProduct++;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    showModal(data) {
      this.imageSelected = data;
      this.showModalPic = true;
    },

    activeItemSliderNav(data) {
      this.imageSelected = data;
      this.$emit("active-item-slider-nav", data);
    },
  },
};
</script>

<style lang="scss" scoped>
@include scale-modal-animation();
@include backdrop-scale-animation();

.backdrop {
  @extend .modal-backdrop;
  background-color: $overlay--profile;
}
.product__pic-container {
  .product__pic {
    &.desktop {
      @include display-flex();
      align-items: flex-start;
      justify-content: center;
      padding-top: toRem(16);
      flex-wrap: wrap;
      @include sm {
        display: none;
      }
      .product__pic-main {
        @include display-flex();
      }
      .product__line {
        width: 100%;
        height: 1px;
        background: $gray-border;
        margin-top: toRem(16);
        margin-right: 8px;
        margin-left: 8px;
      }
      .product__pic-main::v-deep {
        .product__pic-item {
          width: 100%;
          border-radius: 15px;
          @include display-flex();
          cursor: pointer;
        }
      }

      .product__pic-content {
        @include display-flex();
        align-items: flex-start;
        padding: toRem(16);
        justify-content: center;
      }
      .product__pic-box {
        border: solid 1px $white;
        border-radius: 10px;
        @include display-flex();
        align-items: flex-start;
        cursor: pointer;
        position: relative;
      }
      .active--pic .product__pic-box {
        border-color: $gray-border;
      }
      .active--pic .product__pic-data {
        filter: blur(4px);
      }
      .product__pic-data {
        width: 100%;
        padding: 4px;
      }
      .product--pic_data-line {
        margin-left: 4.5px;
        margin-right: 4.5px;
        background: $gray-border;
        border-radius: 8px;
        width: 1px;
        @include display-flex();
        right: -9px;
        position: absolute;
        top: 16%;
        height: 74%;
      }
      .product__pic-items {
        @include display-flex();
        align-items: center;
        position: relative;
        margin-left: 9px;
      }
      .product__pic-items:last-of-type {
        margin-left: 0;
      }
      .product__pic-items:nth-child(1) .product--pic_data-line {
        opacity: 0;
        pointer-events: none;
      }
      .product--pic__circle-main {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        align-items: center;
        justify-content: center;
        display: none;
      }
      .product__pic-circle {
        width: 7px;
        height: 7px;
        background: $white;
        @include display-flex();
        border-radius: 1000px;
        margin-left: 7px;
      }
      .active--pic .product--pic__circle-main {
        @include display-flex();
      }

      @include xl {
        .product__pic-item {
          height: auto;
          width: 100%;
        }
        .product__pic-box {
          width: auto;
          height: auto;
        }
        .product__pic-main {
          width: auto;
          height: auto;
        }
        .product__pic-data {
          height: auto;
        }
      }
    }
    &.mobile {
      display: none;
      @include sm {
        display: block;
      }
      .product__pic-carousel {
        height: toRem(328);
        @include xs {
          height: toRem(300);
        }
        @include xxs {
          height: toRem(230);
        }
        &-item-image-wrapper {
          height: 100%;
          text-align: center;
          img {
            height: 100%;
          }
        }

      }
    }
  }
}
.product__pic-carousel::v-deep {
  width: 100%;
  .product__pic-carousel-pagination {
    width: 100%;
    position: absolute;
    bottom: toRem(-35);
    &-indicator {
      width: toRem(8);
      height: toRem(8);
      margin-left: toRem(8);
      background-color: $gray-5;
      border-radius: 50%;
      border: none;
      &.is-active {
        background-color: $gray-3;
        transform: scale(1.4);
      }
    }
  }
}

</style>
