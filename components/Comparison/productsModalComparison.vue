<template>
  <div class=" main-carousel w-100 d-rtl ">
    <div
      v-for="data in products"
      :key="data.id"
      class="carousel-cell productContent__carousel "
    >
      <div class="productContent__carouselContent w-100">
        <div class="productContent__carouselImgMain w-100">
          <img
            class="productContent__carouselImgItem"
            :src="data.image"
            alt=""
          />
        </div>
        <div class="productContent__carouselData">
          <div class="w-100">
            <h3 class="productContent__carouselDataTitle">
              {{ data.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: { type: [Object, Array], default: [] },
  },

  components: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.main-carousel {
  @include display-flex();
  overflow-x: auto;
}
.main-carousel .productContent__carousel {
  width: toRem(206);
  height: toRem(264);
  margin-left: toRem(15);
  border-radius: toRem(22);
}
.productContent__carousel:nth-child(4n) {
  width: toRem(206);
  margin-left: 0;
}
.productContent__carousel {
  border: solid toRem(1) $light-gray;
  border-radius: toRem(10);
  margin-bottom: toRem(24);
}
.productContent__carouselData {
  width: auto;
}
.productContent__carouselContent {
  padding-right: toRem(14);
  padding-left: toRem(14);
}
.productContent__carouselImgItem {
  height: toRem(141);
}
.productContent__carouselImgMain {
  padding: toRem(8) toRem(19);
}
.productContent__carouselDataTitle {
  height: toRem(90);
  line-height: 2.3em;
}

.productContent__carousel {
  width: 276px;
  height: 264px;
  background: $white;
}
.productContent__mainSlider {
  position: relative;
}
.productContent__carouselContent {
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
  flex-flow: column;
  // border-right: solid 2px $gray-border;
  // padding-right: 11px;
  // padding-left: 11px;
  cursor: pointer;
}
.productContent__carouselDataTitle {
  font-size: 14px;
  line-height: 1.9em;
  color: $black-topic;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  overflow: hidden;
  height: 49px;
}
.productContent__carouselImgMain {
  @include display-flex();
  flex-wrap: wrap;
  justify-content: center;
}
.productContent__carouselImgItem {
  height: toRem(159);
}
.productContent__carouselData {
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
}
.productContent__carouselPriceMain {
  padding-right: toRem(3);
  padding-left: toRem(3);
  margin-top: toRem(16);
  @include display-flex();
  flex-wrap: wrap;
  align-items: center;
  flex-flow: column;
}
.productContent__percentTitle {
  font-family: inherit;
  font-size: toRem(14);
  color: $color_discount;
  width: toRem(44);
  height: toRem(29);
  background: $yellow;
  border-radius: toRem(15);
  @include display-flex();
  align-items: center;
  justify-content: center;
  font-weight: 400;
}
.productContent__discountTitle {
  font-family: inherit;
  @include display-flex();
  font-size: toRem(16);
  font-weight: 400;
  margin-right: 8px;
  color: $color-gray;
  position: relative;
}
.productContent__discountLine {
  @include display-flex();
  width: 100%;
  background: $color-gray;
  position: absolute;
  top: 9px;
  right: 0;
  height: 1px;
}
.productContent__discount {
  margin-left: auto;
  @include display-flex();
  flex-wrap: wrap;
  align-items: center;
  height: 29px;
}
.productContent__priceTitle {
  font-size: 16px;
  color: $color-price;
  font-weight: 500;
  margin-top: 11px;
}
.productContent__carouselLine {
  @include display-flex();
  background: $border-gray-bg;
  width: 1px;
  height: 98%;
  position: absolute;
  left: 0;
  border-radius: 8px;
  top: 0;
}
.productContent__noneDiscount .productContent__discount {
  opacity: 0;
  pointer-events: none;
}
.productContent__priceUnit {
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  padding-right: 4px;
  justify-content: center;
}
.productContent__line {
  position: absolute;
  left: 0;
  top: 0;
  width: 54px;
  height: 316px;
  background: linear-gradient(
      90deg,
      #ffffff -41.48%,
      rgba(255, 255, 255, 0) 151.7%
  );
  opacity: 0.9;
}
.productContent__sliderWrapper {
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  position: relative;
}
.productContent__catTitle {
  color: $black;
  font-size: 18px;
  font-weight: 500;
}
.productContent__catTop {
  @include display-flex();
  flex-wrap: wrap;
  padding-right: 24px;
  padding-left: 24px;
  align-items: flex-start;
  margin-bottom: 22px;
}
.productContent__sliderMore {
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-left: 13px;
}
.productContent__moreItem {
  font-size: 16px;
  color: $gray;
  border-bottom: none;
  text-decoration: none;
  @include display-flex();
  align-items: center;
}
.productContent__moreIcon {
  @include display-flex();
  margin-right: toRem(11);
}
.mobile-inprogress__arrow::after {
  content: "\e801";
  @include font-icon__limoo();
  font-size: toRem(14);
  margin-top: toRem(1);
}
.productContent__topRight {
  flex-grow: 1;
  @include display-flex();
  flex-flow: column;
}
.productContent__link {
  flex-wrap: wrap;
  align-items: flex-start;
  @include display-flex();
  text-decoration: none;
}
.productContent__titleVisit {
  margin-top: toRem(13);
  color: $gray;
  font-size: toRem(17);
  font-weight: 300;
  // display: none;
}
.productContent__carousel-link {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

@include md {
  .productContent__carousel:first-child .productContent__carouselLine {
    display: none;
  }
}

@media (max-width: 600px) {
  .productContent__catTitle {
    font-size: 16px;
  }
  .productContent__moreItem {
    font-size: 14px;
  }
  .productContent__topRight {
    width: 100%;
  }
  .productContent__topLeft {
    justify-content: flex-end;
    width: 100%;
  }
  .productContent__titleVisit {
    font-size: 15px;
  }
}

@include xs {
  .productContent__titleVisit {
    @include display-flex();
    font-size: 13px;
  }
  .productContent__catTop {
    margin-bottom: 14px;
    padding-right: 11px;
    padding-left: 11px;
  }
  .productContent__catTitle {
    font-size: 14px;
  }
  .productContent__carouselData {
    width: 182px;
    margin-top: 8px;
    margin-left: auto;
    margin-right: inherit;
    padding-right: 16px;
  }
  .productContent__carouselImgItem {
    height: 102px;
  }
  .productContent__carousel {
    width: 223px;
    height: 220px;
  }
  .productContent__priceTitle {
    margin-top: 7px;
    font-size: 13px;
  }
  .productContent__carouselLine {
    width: 2px;
  }
  .productContent__discountTitle {
    font-size: 13px;
  }
  .productContent__carouselDataTitle {
    line-height: 22.69px;
    height: 40px;
    text-align: right;
  }
  .productContent__line {
    height: 242px;
    width: 44px;
  }
  .productContent__carouselPriceMain {
    padding-right: 0;
    padding-left: 0;
  }
  .productContent__topLeft {
    display: none;
  }
}

</style>
