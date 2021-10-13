<template>
  <div
    class=" main-carousel w-100 productContent__mainSlider slider-comparison"
  >
    <div
      v-for="data in products"
      :key="data.id"
      class="carousel-cell productContent__carousel "
    >
      <div class="productContent__carouselContent w-100">
        <span class="productContent__carouselLine"></span>
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
          <div
            class="w-100 productContent__carouselPriceMain"
            :class="{ productContent__noneDiscount: data.discount === '' }"
          >
            <div class="w-100 productContent__priceUnit">
              <h3 class="productContent__priceTitle">
                {{ data.addCamaRealPrice }}
                <span>تومان</span>
              </h3>
            </div>
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

  mounted() {
    setTimeout(() => {
      this.flickityOptions();
    });
  },

  methods: {
    flickityOptions() {
      let Flickity = require("flickity-as-nav-for");
      let sliderOptions = new Flickity(`.slider-comparison`, {
        accessibility: true,
        adaptiveHeight: true,
        rightToLeft: true,
        cellAlign: "right",
        imagesLoaded: true,
        wrapAround: false,
        contain: true,
        // prevNextButtons : false,
        // autoPlay        : true, // advance cells every 3 seconds
        // autoPlay: 1500 // {Number}
        // freeScroll      : true,
        pageDots: false,
        groupCells: true,
        fade: false,
      });

      sliderOptions.on(
        "staticClick",
        (event, pointer, cellElement, cellIndex) => {
          this.products.map((content, index) => {
            if (index === cellIndex) {
              // const linkCurrentItem = document.getElementById(
              //   this.nameElementFindSlider + content.id
              // );
              // linkCurrentItem.click();
              // دلیل تغییر این قسمت به خاطر فهم گوگل برای سئو هستش //
            }
          });
        }
      );
    },

    switchLink(event) {
      event.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>

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
  height: 159px;
}
.productContent__carouselData {
  margin-top: 0px;
  width: 214px;
  margin-right: auto;
  margin-left: auto;
}
.productContent__carouselPriceMain {
  padding-right: 3px;
  padding-left: 3px;
  margin-top: 16px;
  @include display-flex();
  flex-wrap: wrap;
  align-items: center;
  flex-flow: column;
}
.productContent__percentTitle {
  font-family: inherit;
  font-size: 14px;
  color: $color_discount;
  width: 44px;
  height: 29px;
  background: $yellow;
  border-radius: 15px;
  @include display-flex();
  align-items: center;
  justify-content: center;
  font-weight: 400;
}
.productContent__discountTitle {
  font-family: inherit;
  @include display-flex();
  font-size: 16px;
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
  margin-right: 11px;
}
.mobile-inprogress__arrow::after {
  content: "\e801";
  @include font-icon__limoo();
  font-size: 14px;
  margin-top: 1px;
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
  margin-top: 13px;
  color: $gray;
  font-size: 17px;
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

@media (max-width: 960px) {
  .productContent__carousel:first-child .productContent__carouselLine {
    display: none;
  }
}


</style>
