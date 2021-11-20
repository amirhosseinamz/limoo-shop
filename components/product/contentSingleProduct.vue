<template>
  <div class="product__single w-100">
    <div class="product__single-category w-100">

    </div>

    <div class="product__single-content w-100">

      <div class="product__single-right">
        <div class="product--single__right-content">
          <productPic @active-item-slider-nav="activeItemSliderNav" :product-slider="productSlider"></productPic>
        </div>
      </div>

      <div class="product__single-left">

        <div class="product__data-content w-100">
          <div class="product__single-top w-100">
            <h3 class="product__top-title">مک بوک پرو 16 اینچ با تاچ بار مدل 9102 مک بوک پرو 16 اینچ رتینا با تاچ بار
              مدل 2019 طرح جدید</h3>
            <h3 class="product__top-brand">Apple AirPods Max- Sliver - MGYJ3</h3>
          </div>
          <product-actions v-if="shareModalMode === 'form'" :share-modal-mode="shareModalMode" class="product-actions desktop"></product-actions>

<!--          <sliderSingleProduct :products="productSliderMobile"></sliderSingleProduct>-->
          <productDetail :product-data="productData"></productDetail>
          <product-colors class="product-colors w-100"></product-colors>
          <product-warranty class="product-warranty w-100"></product-warranty>
          <product-specification></product-specification>
          <product-seller class="mobile-product-seller"></product-seller>
          <product-actions class="product-actions mobile" :share-modal-mode="shareModalMode" v-if="shareModalMode === 'full-screen'"></product-actions>
          <full-presentation class="mobile product-presentation"></full-presentation>

        </div>
      </div>
    </div>
    <div class="product-seller">
      <product-seller></product-seller>
    </div>
    <div class="product-similar-carousel-container">
      <div class="carousel-title">
        <div class="name desktop">
          محصولات مشابه
        </div>
        <div class="name mobile">
          محصولات پیشنهادی
        </div>
        <div class="complete-list desktop">
          لیست کامل محصولات
          <span class="icon"></span>
        </div>
      </div>
      <div class="carousel-subtitle">
        پیشنهاد به شما
      </div>
      <base-carousel
        ondragstart="return false"
        ondrag="return false"
        class="product-similar-carousel"
        :items-to-slide="1"
        :items-to-show="carouselItemsToShow"
        :wheel-control="false"
        ref="carousel
        ">
        <template #default="slotProps">
          <slide :slide-width="slotProps.slideWidth" class="similar-products-carousel-item" v-for="item in similarProductsCarouselData" :key="item.id">
            <div class="similar-products-carousel-item-image-wrapper">
              <img :src="item.image" alt="Image" draggable="false">
            </div>
            <div class="similar-products-carousel-item-name">
              {{ item.title }}
            </div>
            <div class="similar-products-carousel-item-price">
              {{ item.realPrice }}
              تومان
            </div>
          </slide>
        </template>
      </base-carousel>
      <div class="complete-list mobile">
        لیست کامل محصولات
        <span class="icon"></span>
      </div>
      <div class="shadow">

      </div>
    </div>
    <div class="tab--content product__single-content w-100">
      <base-tabs
        :tabs="tabsNames"
        :selected="selected"
        @change-tab="tabChanged"
        class="tabs w-100"
        tabs-item-class="tabs__item tabs__item-title"
        tabs-class="tabs-navigator tabs__main"
      >
        <tab-content :name="tabsNames[0]" :isSelected="selected === tabsNames[0]">
          <full-presentation class="show--tab product-presentation desktop"></full-presentation>
        </tab-content>

        <tab-content :name="tabsNames[1]" :isSelected="selected === tabsNames[1]">
          <detail-technical
            :product-data="productDetailTechnical"
          ></detail-technical>
        </tab-content>
      </base-tabs>


    </div>


    <div class="tab--content product__single-content w-100 tab--comment">
      <comment-question-main
        :comment-data="commentData"
        :product-data="productData"
        @more-comment="moreComment"
        @more-comment-mobile="moreCommentMobile"
        @submit-data="submitData"
      ></comment-question-main>
    </div>


  </div>
</template>
<script>
import productPic from "./productPic";
import productDetail from "./productDetail";
import sliderSingleProduct from "./sliderSingleProduct";
import commentQuestionMain from "./commentQuestionMain";
import FullPresentation from "./fullPresentation";
import DetailTechnical from "./detailTechnical";
import ProductColors from "./ProductColors";
import ProductWarranty from "./ProductWarranty";
import ProductSpecification from "./ProductSpecification";
import ProductActions from "./ProductActions";
import ProductSeller from "./ProductSeller";
import BaseCarousel from "../UI/BaseCarousel/BaseCarousel";
import Slide from "../UI/BaseCarousel/Slide"

export default {
  props: {
    productData: { type: [Object, Array], default: [] },
    productSliderMobile: { type: [Object, Array], default: [] },
    productSlider: { type: [Object, Array], default: [] },
    productDetailTechnical: { type: [Object, Array], default: [] },
    commentData: { type: [Object, Array], default: [] },

  },

  components: {
    BaseCarousel,
    ProductSeller,
    ProductActions,
    ProductSpecification,
    ProductWarranty,
    ProductColors,
    DetailTechnical,
    FullPresentation,
    productPic,
    productDetail,
    sliderSingleProduct,
    commentQuestionMain,
    Slide,
  },

  data() {
    return {
      tabsNames: ["معرفی کامل محصول", "مشخصات فنی محصول"],
      selected: "معرفی کامل محصول",
      windowWidth: 0,
      carouselSetting: {
        breakpoints: {
          800: {
            itemsToShow: 2,
          },
          1200: {
            itemsToShow: 4,
          }
        }
      },
    };
  },
  computed: {
    shareModalMode() {
      if (this.windowWidth > 520) {
        return "form";
      } else {
        return "full-screen";
      }
    },
    similarProductsCarouselData() {
      return this.$store.getters["comparison/comparison/sliderProductsData"];
    },
    carouselItemsToShow() {
      if (this.windowWidth > 1366) {
        return 5.5;
      } else if (this.windowWidth > 1024 && this.windowWidth <= 1366) {
        return 4.5;
      } else if (this.windowWidth > 960 && this.windowWidth <= 1024) {
        return 3.5;
      } else if (this.windowWidth > 600 && this.windowWidth <= 960) {
        return 2.5;
      } else if (this.windowWidth > 520 && this.windowWidth <= 600) {
        return 2.2;
      } else if (this.windowWidth > 380 && this.windowWidth <= 520) {
        return 1.5;
      } else if (this.windowWidth > 280 && this.windowWidth <= 380) {
        return 1.2;
      }
    }
  },
  methods: {
    tabChanged(val) {
      this.selected = val;
    },
    dragImage() {
      return false;
    },
    activeItemSliderNav(data) {
      this.$emit("active-item-slider-nav", data);
    },

    moreComment(page) {
      this.$emit("more-comment", page);
    },

    moreCommentMobile() {
      this.$emit("more-comment-mobile");
    },

    submitData(data) {
      this.$emit("submit-data", data);
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
};
</script>

<style lang="scss" scoped>
.tabs__main {
  width: 100%;
  @include display-flex();
  align-items: flex-start;
  border-bottom: solid toRem(1) $gray-border;
}
.tabs__item {
  margin-left: toRem(70);
}
.tabs__item-title {
  font-size: toRem(18);
}

.product__single {
  margin-top: toRem(160);
}

.product__single-category {
  @include display-flex();
  align-items: flex-start;
}

.product__single-content {
  @include display-flex();
  align-items: flex-start;
  background: $white;
  padding-bottom: toRem(22);
  padding-top: toRem(22);
  margin-bottom: toRem(19);
  flex-wrap: wrap;
  padding-right: toRem(16);
  border-radius: toRem(10);
  box-shadow: 0 toRem(8) toRem(16) rgba(17, 17, 17, 0.03);
}

.product__single-right {
  width: 39.6%;
  @include display-flex();
  align-items: flex-start;
}

.product__single-left {
  width: 60%;
  @include display-flex();
  align-items: flex-start;
}

.product__top-title {
  margin-bottom: toRem(8);
  font-size: toRem(24);
  line-height: toRem(42.75);
  color: $black;
  font-weight: 400;
  width: 95%;
}

.product__top-brand {
  color: $gray;
  font-weight: 400;
  font-size: toRem(13);
}

.product__data-content {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: toRem(30);
  padding-right: toRem(24);
  padding-left: toRem(24);
  @include xs {
    margin: 0;
  }
}

.product__single-top {
  width: 100%;
}

.product--single__right-content {
  width: 100%;
  border: solid toRem(1) $gray-border;
  border-radius: toRem(10);
}
.tab--content::v-deep {
  padding: 0 toRem(24);
  .tabs-navigator {
    height: toRem(70);
  }
  .tabs__content {
    position: static;
  }
}

.tab--content:first-child {
  padding: 0 toRem(24);
}
.tab--content:nth-child(2) {
  padding: toRem(24) 0;
}
.product-actions {
  &.desktop {
    margin-top: toRem(38);
    margin-bottom: toRem(45);
    @include md {
      margin-top: toRem(8);
    }
    @include xs {
      display: none;
    }
  }
  &.mobile {
    display: none;
    @include xs {
      @include display-flex();
    }
  }

}
.product-presentation {
  &.desktop {
    @include xs {
      display: none;
    }
  }
  &.mobile {
    display: none;
    @include xs {
      @include display-flex();
    }
  }
}
.product-colors {
  margin-bottom: toRem(24);
}
.product-warranty {
  margin-bottom: toRem(40);
}
.product-seller {
  @include display-flex();
  background: $white;
  margin-top: toRem(19);
  margin-bottom: toRem(24);
  flex-wrap: wrap;
  border-radius: toRem(10);
  box-shadow: 0 toRem(8) toRem(16) rgba(17, 17, 17, 0.03);
  @include xs {
    display: none;
  }
}
.mobile-product-seller {
  display: none;
  @include xs {
    display: block;
  }
}
.product-similar-carousel-container::v-deep {
  height: toRem(419);
  @extend .d-flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: toRem(10);
  background-color: $white;
  margin: toRem(24) 0;
  box-shadow: 0 toRem(8) toRem(16) 0 $color-box-shadow;
  position: relative;
  @include xs {
    height: auto;
  }

  .next-btn {
    &.is-disabled {
      display: none;
    }
  }
  .previous-btn {
    &.is-disabled {
      display: none;
    }
  }

  .carousel-title {
    @extend .align-center;
    justify-content: space-between;
    height: toRem(87);
    padding: 0 toRem(24);
    @include xs {
      height: toRem(60);
    }
    .name {
      font-size: toRem(18);
      color: $black;
      @include sm {
        font-size: toRem(16);
      }
      &.desktop {
        @include xs {
          display: none;
        }
      }
      &.mobile {
        display: none;
        @include xs {
          display: block;
        }
      }
    }
    .complete-list {
      &.desktop {
        @include xs {
          display: none;
        }
        font-size: toRem(16);
        color: $gray-3;
        @extend .align-center;
        @include sm {
          font-size: toRem(14);
          .icon {
            &::before {
              font-size: toRem(12);
            }
          }
        }

        .icon {
          margin-right: toRem(8);
          &::before {
            content: "\e801";
            @include font-icon__limoo();
            color: $gray-3;
            font-size: toRem(13);
          }
        }
      }
    }
  }
  .carousel-subtitle {
    display: none;
    @include xs {
      display: block;
      font-size: toRem(13);
      color: $gray-3;
      padding: 0 toRem(24);
      margin-top: toRem(-10);
      margin-bottom: toRem(8);
    }
  }

  .product-similar-carousel {
    height: toRem(303);
    @include xs {
      height: toRem(233);
    }
    .similar-products-carousel-item {
      @extend .align-center;
      justify-content: space-between;
      padding: 0 toRem(8);
      border-left: toRem(1) solid $gray-6;
      flex-direction: column;
      height: 100%;

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
          @include xs {
            max-height: toRem(120);
          }
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

  .complete-list {
      &.mobile {
        display: none;
        @include xs {
          display: block;
          font-size: toRem(13);
          color: $gray-3;
          @include display-flex();
          align-items: center;
          margin-top: toRem(38);
          margin-bottom: toRem(16);
          padding-left: toRem(16);
          justify-content: end;

          .icon {
            margin-right: toRem(8);
            &::before {
              content: "\e801";
              @include font-icon__limoo();
              color: $gray-3;
              font-size: toRem(12);
            }
          }
        }
      }
  }
  .shadow {
    position: absolute;
    height: 100%;
    width: toRem(54);
    background: linear-gradient(
        90deg, $white -11.48%, rgba(255, 255, 255, 0) 107.7%);
    opacity: 0.8;
    left: 0;
    border-top-left-radius: toRem(10);
    border-bottom-left-radius: toRem(10);

  }
}

@include lg {
  .product__top-title {
    font-size: toRem(17);
  }
  .product__single-right {
    width: 30%;
  }
  .product__single-left {
    width: 70%;
  }
}

@include md {
  .product__single {
    margin-top: toRem(8);
  }
  .product__top-title {
    font-size: toRem(14);
  }
}

@include sm {
  .tab--content::v-deep {
    .tabs__main {
      display: none;
    }
  }
  .product__single-right {
    display: none;
  }
  .product__single-left {
    width: 100%;
  }
  .product__data-content {
    padding-right: 0;
    padding-left: 0;
    display: inline;
  }
  .product__single-content {
    padding: toRem(8) toRem(11);
    margin-bottom: 0;
  }
  .product__top-title {
    line-height: toRem(28);
    margin-bottom: toRem(2);
  }
  .tab--content {
    padding: 0 toRem(24);
    margin-bottom: toRem(8);
  }
  .tab--content:last-of-type {
    margin-bottom: 0;
  }
  .tab--comment {
    padding-right: 0;
    padding-left: 0;
  }
}
@include xs {
  .product-warranty {
    margin-bottom: toRem(16);
  }
}

</style>
