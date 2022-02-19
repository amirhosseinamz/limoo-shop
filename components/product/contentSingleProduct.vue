<template>
  <div class="product__single w-100">
<!--    <base-breadcrumb class="breadcrumb" :breadcrumb-data="productBreadcrumb"></base-breadcrumb>-->
    <div class="product__single-content product_detail w-100">
      <div class="product_detail-image">
        <div class="product--single__right-content" ref="picSection">
          <productPic class="product-pic desktop" @toggle-modal="picModalToggle" :comment-data="commentData" @active-item-slider-nav="activeItemSliderNav" :product-slider="productSlider"></productPic>
        </div>
      </div>

      <div class="product_detail-info">
        <div class="product_detail-info-content w-100">
          <div class="product_detail-info-content-top w-100">
            <h3 class="title">
<!--              {{ productTitle }}-->
              گوشی اپل
            </h3>
            <h3 class="product__top-brand">Apple AirPods Max- Sliver - MGYJ3</h3>
            <div class="product_detail-info-content-top-rating">
              <div class="stars-outer">
                <div class="stars-inner" :style="{ width: (4.5 * 100) / 5 + '%' }"
                ></div>
              </div>
              <span class="rate-counter"> 4.5 </span>
              <span class="rate-count">
                        {{ getTextByTextKey("commnets_star_from_text") }} 5
              </span>
            </div>
          </div>
          <productPic class="product-pic mobile" :comment-data="commentData" @active-item-slider-nav="activeItemSliderNav" :product-slider="productSlider"></productPic>

          <product-price class="product-price mobile"></product-price>
          <product-colors class="product-colors w-100"></product-colors>
<!--          <product-warranty class="product-warranty w-100"></product-warranty>-->
          <div class="product-properties w-100">
            <product-property v-for="property in propertyData" :key="property.id" :property-data="property"></product-property>
          </div>
          <product-actions v-if="shareModalMode === 'form'" :share-modal-mode="shareModalMode" class="product-actions desktop"></product-actions>
          <product-seller class="mobile-product-seller"></product-seller>
          <product-actions class="product-actions mobile" :share-modal-mode="shareModalMode" v-if="shareModalMode === 'full-screen'"></product-actions>
          <full-presentation class="mobile product-presentation"></full-presentation>

        </div>
      </div>
      <div class="product_detail-seller">
        <seller-box :share-modal-mode="shareModalMode"></seller-box>
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
        ref="carousel"
        prev-button-class="prev-arrow"
        next-button-class="next-arrow"
      >
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
        <template #previousButton="{ slidePrev }">
            <span class="icon"></span>
        </template>
        <template #nextButton>
            <span class="icon"></span>
        </template>
      </base-carousel>
      <div class="complete-list mobile">
        لیست کامل محصولات
        <span class="icon"></span>
      </div>
      <div class="shadow">

      </div>
    </div>
    <div class="tab--content product--tab-wrapper product__single-content w-100">
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


    <div class="tab--content comment--tab-wrapper product__single-content w-100 tab--comment">
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
import { getTextByTextKey } from "~/modules/splitPartJsonResource";
import ProductProperty from "./ProductProperty";
import ChosenSellerBadge from "./ChosenSellerBadge";
import ProductPrice from "./ProductPrice";
import SellerBox from "./SellerBox";
import ImageMagnifier from "./ImageMagnifier";

export default {
  props: {
    productData: { type: [Object, Array], default: [] },
    productSliderMobile: { type: [Object, Array], default: [] },
    productSlider: { type: [Object, Array], default: [] },
    productDetailTechnical: { type: [Object, Array], default: [] },
    commentData: { type: [Object, Array], default: [] },

  },

  components: {
    ImageMagnifier,
    SellerBox,
    ProductPrice,
    ProductProperty,
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
      tabsNames: ["معرفی کامل محصول", "مشخصات فنی محصول",],
      selected: "معرفی کامل محصول",
      propertyData: [
        {
          id: 1,
          propName: "سایز",
          propValues: ["پرو معمولی", "پرو مکس"]
        },
        {
          id: 2,
          propName: "حافظه",
          propValues: ["125 گیگ", "512 گیگ"]
        }
      ],
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
    // productTitle() {
    //   return this.$store.getters["product/single/single/productTitle"];
    // },
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
    },
    // breadcrumbData() {
    //   return this.$store.getters["product/single/single/productBreadcrumb"];
    // },
    // productBreadcrumb() {
    //   let _data = [];
    //   for (let i = this.breadcrumbData.length - 1; i >= 0; i--) {
    //     let _obj = {};
    //     _obj.id = this.breadcrumbData[i].product_group_uuid;
    //     _obj.pathName = this.breadcrumbData[i].product_group_title;
    //     _data.push(_obj);
    //   }
    //   return _data;
    // }
  },
  methods: {
    getTextByTextKey,
    tabChanged(val) {
      this.selected = val;
    },
    dragImage() {
      return false;
    },
    activeItemSliderNav(data) {
      this.$emit("active-item-slider-nav", data);
    },
    picModalToggle(modalIsOpen) {
      let picSectionZIndex;
      if (modalIsOpen) {
        picSectionZIndex = "2000";
      } else {
        picSectionZIndex = "1";
      }
      this.$refs.picSection.style.zIndex = picSectionZIndex;
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
  background-color: red;
}
.tabs__item {
  margin-left: toRem(70);
}
.tabs__item-title {
  font-size: toRem(18);
  white-space: nowrap;
}
.product__single {
  margin-top: toRem(152);
}
.breadcrumb {
  margin-bottom: toRem(16);
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
.product_detail {
  padding: toRem(24) toRem(16) toRem(24) toRem(24);
  display: grid;
  grid-template-columns: 25% 42% 33%;
  @include md {
    grid-template-columns: 35% 65%;
    grid-template-rows: auto auto;
  }
  @include sm {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
  }

  &-image {
    grid-column: 1/2;
    @include display-flex();
    align-items: flex-start;
    position: relative;
    height: 100%;
    @include lg {
      grid-row: 1/3;
    }
    @include sm {
      grid-column: 1/2;
      grid-row: 1/2;
    }
  }
  &-info {
    grid-column: 2/3;
    @include display-flex();
    align-items: flex-start;
    @include lg {
      grid-column: 2/4;
      grid-row: 1/2;
    }
    @include sm {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    &-content {
      @include display-flex();
      align-items: flex-start;
      flex-wrap: wrap;
      margin-bottom: toRem(30);
      padding-right: toRem(24);
      padding-left: toRem(24);
      @include md {
        margin-bottom: toRem(0);
      }
      @include xs {
        margin: 0;
        padding-right: toRem(8);
        padding-left: toRem(8);
      }
      @include sm {
        padding: 0;
      }
        &-top {
          .title {
            margin-bottom: toRem(8);
            font-size: toRem(20);
            line-height: toRem(42.75);
            color: $black;
            font-weight: 400;
            width: 95%;
            @include lg {
              font-size: toRem(17);
            }
            @include md {
              font-size: toRem(14);
              width: 85%;
            }
          }
          &-rating {
            margin-top: toRem(8);
            .stars-outer {
              position: relative;
              display: inline-block;
              margin-left: toRem(8);
              &::before {
                content: "\e825 \e825 \e825 \e825 \e825";
                @include font-icon__limoo();
                font-weight: 400;
                font-size: toRem(16);
                color: $light-gray;
                letter-spacing: toRem(2);
              }
              .stars-inner {
                position: absolute;
                bottom: toRem(4.7);
                left: 0;
                white-space: nowrap;
                overflow: hidden;
                width: 0;
                @include display-flex();
                flex-direction: row-reverse;
                &::before {
                  content: "\e825 \e825 \e825 \e825 \e825";
                  @include font-icon__limoo();
                  font-weight: 400;
                  font-size: toRem(16);
                  color: $yellow;
                  letter-spacing: toRem(2);
                }
              }
            }
            .rate-count,
            .rate-counter {
              color: $gray;
              font-size: toRem(14);
            }
          }
        }
      .product-properties {
        @extend .d-flex;
        flex-direction: column;
      }
    }
  }
  &-seller {
    grid-column: 3/4;
    @include lg {
      grid-column: 2/4;
      grid-row: 2/3;
      max-width: 75%;
    }
    @include sm {
      max-width: 100%;
      grid-column: 1/2;
      grid-row: 3/4;
    }
    @include xs {
      display: none;
    }
  }
}


.product__top-brand {
  color: $gray;
  font-weight: 400;
  font-size: toRem(13);
}

.product--single__right-content {
  width: 100%;
  border: solid toRem(1) $gray-border;
  border-radius: toRem(10);
  position: sticky;
  top: toRem(140);
  z-index: 1;
  @include md {
    top: toRem(48);
  }
  @include sm {
    display: none;
  }
}
.tab--content::v-deep {
  padding: 0 toRem(24);
  .tabs-navigator {
    height: toRem(75);
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
    margin-top: toRem(16);
    @include md {
      display: none;
    }
  }
  &.tablet {
    display: none;
    @include md {
      display: flex;
      width: 130%;
    }
    @include sm {
      width: 100%;
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
  margin-top: toRem(24);
  @include xs {
    margin-top: toRem(18);
  }
}
.product-pic {
  &.desktop {
    @include sm {
      display: none;
    }
  }
  &.mobile {
    display: none;
    @include sm {
      display: block;
      margin-bottom: toRem(47);
      margin-top: toRem(8);
    }
  }
}
.product-price {
  &.mobile {
    display: none;
    @include xs {
      display: block;
      margin-top: toRem(24);
      padding-bottom: toRem(18);
      border-bottom: toRem(2) solid $gray-6;
      width: 100%;
    }
  }
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
  .prev-arrow {
    position: absolute;
    top: toRem(145);
    right: toRem(20);
    z-index: 1;
    cursor: pointer;

    @include xs {
      display: none;
    }

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
    &:hover {
      .icon {
        background-color: $gray-5;
        &::before {
          color: $gray-3;
        }
      }
    }
  }

  .next-arrow {
    position: absolute;
    top: toRem(145);
    left: toRem(20);
    z-index: 1;
    cursor: pointer;
    @include xs {
      display: none;
    }

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
    &:hover {
      .icon {
        background-color: $gray-5;
        &::before {
          color: $gray-3;
        }
      }
    }
  }

  .next-arrow {
    &.is-disabled {
      display: none;
    }
  }
  .prev-arrow {
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
}

@include sm {
  .product--tab-wrapper::v-deep {
    .tabs__main {
      display: none;
    }
  }
  .comment--tab-wrapper::v-deep {
    .tabs__main {
      @include display-flex();
      height: toRem(60);
      // justify-content: space-around;
    }
    .tabs__item{

      font-size: toRem(14);
    }
  }
  .product__single-right {
    display: none;
  }
  .product__single-left {
    width: 100%;
  }
  .product__single-content {
    padding: toRem(8) toRem(8);
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
  .comment--tab-wrapper::v-deep {
    .tabs__main {
      display: flex;
      justify-content: space-around;
    }
    .tabs__item-title{
      margin: 0;
      padding: 0 toRem(16);
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      @include xxs{
        padding: 0 toRem(10);
      }
    }
  }
  .product-warranty {
    margin-bottom: toRem(16);
  }
}

</style>
