<template>
  <div class="w-100 productContent__sliderWrapper" :key="infiniteStartDetected">
    <!-- در حالت موبایل با توجه به پیج صفحه به صورت هیدن آیتم ها ساخته شده -->
    <div
      class=" main-carousel w-100 productContent__mainSlider product__content-desktop"
    >
      <div
        v-for="data in categoryProducts"
        :key="data.id + 'desktop'"
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
            <div
              class="w-100 productContent__carouselPriceMain"
              :class="{ productContent__noneDiscount: data.discount === '' }"
            >
              <div class="productContent__discount">
                <div class="productContent__pricePercent">
                  <h3 class="productContent__percentTitle">30%</h3>
                </div>
                <div class="productContent__priceDiscount">
                  <h3 class="productContent__discountTitle">
                    {{ data.addCamaDiscount }}
                    <span class="productContent__discountLine"></span>
                  </h3>
                </div>
              </div>
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

      <no-ssr>
        <infinite-loading @infinite="infiniteHandler">
          <div slot="no-more">
            {{ getTextByTextKey("category_finish_product") }}
          </div>
          <div slot="no-results">
            {{ getTextByTextKey("category_no_results_found") }}
          </div>
        </infinite-loading>
      </no-ssr>
    </div>

    <!-- در حالت موبایل بدونه چک کردن پیج صفحه از اولین صفحه شروع می کنیم -->
    <div
      class=" main-carousel w-100 productContent__mainSlider product__content-mobile"
    >
      <div
        v-for="data in scrollDataCategoryProduct"
        :key="data.id + 'mobile'"
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
            <div
              class="w-100 productContent__carouselPriceMain"
              :class="{ productContent__noneDiscount: data.discount === '' }"
            >
              <div class="productContent__discount">
                <div class="productContent__pricePercent">
                  <h3 class="productContent__percentTitle">30%</h3>
                </div>
                <div class="productContent__priceDiscount">
                  <h3 class="productContent__discountTitle">
                    {{ data.addCamaDiscount }}
                    <span class="productContent__discountLine"></span>
                  </h3>
                </div>
              </div>
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

      <no-ssr>
        <infinite-loading @infinite="infiniteHandler">
          <div slot="no-more">
            {{ getTextByTextKey("category_finish_product") }}
          </div>
          <div slot="no-results">
            {{ getTextByTextKey("category_no_results_found") }}
          </div>
        </infinite-loading>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  components: {
    InfiniteLoading,
  },

  props: {
  },

  data() {
    return {
      page: 0,
      list: [],
      scrollDataCategoryProduct: [],
      infiniteStartDetected: 0,
      categoryProductMobileLocal: []
    };
  },
  watch: {
    categoryProductMobile(val) {
      this.categoryProductMobileLocal = val;
    }
  },

  mounted() {
    this.categoryProductMobileLocal = this.categoryProductMobile;
    const width = window.innerWidth;

    if (520 < width) {
      this.scrollDataCategoryProduct = this.categoryProductMobileLocal;
    }

    this.detectedResizeBrowser();
  },

  computed: {
    categoryProducts() {
      return this.$store.getters["category/category/categoryProducts"];
    },
    categoryProductMobile() {
      return this.$store.getters["category/category/categoryProductMobile"];
    }
  },

  methods: {
    switchLink(event) {
      event.preventDefault();
    },

    infiniteHandler($state) {
      if (this.list.length >= 30) {
        $state.complete();
      } else {
        setTimeout(() => {
          let temp = [];
          for (let i = this.list.length; i < this.list.length + 10; i++) {
            temp.push(i);
            if (typeof this.categoryProductMobileLocal[i] !== "undefined") {
              this.scrollDataCategoryProduct.push(this.categoryProductMobileLocal[i]);
            }
          }
          this.list.push(...temp);
          $state.loaded();
          this.$emit(
            "update-infinite-cat-mobile",
            this.scrollDataCategoryProduct
          );
        }, 1000);
      }
    },

    // server request //
    //  infiniteHandler($state) {
    //   axios.get(api, {
    //     params: {
    //       page: this.page,
    //     },
    //   }).then(({ data }) => {
    //     if (data.hits.length) {
    //       this.page += 1;
    //       this.list.push(...data.hits);
    //       $state.loaded();
    //     } else {
    //       $state.complete();
    //     }
    //   });
    // },

    detectedResizeBrowser() {
      window.addEventListener(
        "resize",
        () => {
          const width = window.innerWidth;

          if (520 < width) {
            this.scrollDataCategoryProduct = this.categoryProductMobileLocal;
          } else {
            this.scrollDataCategoryProduct = [];
            this.list = [];
            this.infiniteStartDetected++;
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }
        },
        true
      );
    },

    getTextByTextKey,
  },
};
</script>

<style lang="scss" scoped>
.productContent__carousel {
  height: toRem(374);
  background: $white;
  position: relative;
  margin-bottom: toRem(8);
  margin-left: 0.6%;
  width: 19.52%;
}
.productContent__carousel:nth-child(5n) {
  margin-left: 0;
}
.productContent__mainSlider {
  position: relative;
  @include display-flex();
  flex-wrap: wrap;
  min-height: toRem(400);
}
.productContent__carouselContent {
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
  flex-flow: column;
  cursor: pointer;
  border: solid toRem(1) $light-gray;
  border-radius: toRem(10);
  height: 100%;
}
.productContent__carouselDataTitle {
  font-size: toRem(14);
  line-height: 2.4em;
  color: $black-topic;
  text-align: right;
  font-weight: 500;
  overflow: hidden;
  height: toRem(58);
}
.productContent__carouselImgMain {
  @include display-flex();
  flex-wrap: wrap;
  justify-content: center;
  margin-top: toRem(16);
}
.productContent__carouselImgItem {
  height: toRem(170);
  width: toRem(170);
}
.productContent__carouselData {
  margin-top: toRem(25);
  margin-right: auto;
  margin-left: auto;
  width: 88.5%;
}
.productContent__carouselPriceMain {
  padding-right: toRem(3);
  padding-left: toRem(3);
  margin-top: toRem(25);
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
  margin-right: toRem(8);
  color: $color-gray;
  position: relative;
}
.productContent__discountLine {
  @include display-flex();
  width: 100%;
  background: $color-gray;
  position: absolute;
  top: toRem(9);
  right: 0;
  height: toRem(1);
}
.productContent__discount {
  margin-left: auto;
  @include display-flex();
  flex-wrap: wrap;
  align-items: center;
  height: toRem(29);
}
.productContent__priceTitle {
  font-size: toRem(16);
  color: $color-price;
  font-weight: 500;
  margin-top: toRem(11);
}
.productContent__carouselLine {
  @include display-flex();
  background: $border-gray-bg;
  width: toRem(1);
  height: 98%;
  position: absolute;
  right: 0;
  border-radius: toRem(8);
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
  padding-right: toRem(4);
}
.productContent__line {
  position: absolute;
  left: 0;
  top: 0;
  width: toRem(54);
  height: toRem(316);
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
  margin-top: toRem(34);
}
.productContent__sliderWrapper .infinite-loading-container {
  width: 100%;
  margin-bottom: toRem(10);
  display: none;
  justify-content: center;
  text-align: center;
}
.productContent__catTitle {
  color: $black;
  font-size: toRem(18);
  font-weight: 500;
}
.productContent__catTop {
  @include display-flex();
  flex-wrap: wrap;
  padding-right: toRem(24);
  padding-left: toRem(24);
  align-items: flex-start;
  margin-bottom: toRem(31);
}
.productContent__sliderMore {
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-left: toRem(13);
}
.productContent__moreItem {
  font-size: toRem(16);
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
}
.productContent__carousel-link {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.product__content-mobile {
  display: none;
}

@include xl {
  .productContent__carousel {
    width: 24.5%;
  }
  .productContent__carousel:nth-child(4n) {
    margin-left: 0;
  }
  .productContent__carousel:nth-child(5n) {
    margin-left: 0.6%;
  }
}


@include md {
  .productContent__carousel {
    width: 32.5%;
    margin-left: 1%;
  }
  .productContent__carousel:nth-child(4n) {
    margin-left: 1%;
  }
  .productContent__carousel:nth-child(3n) {
    margin-left: 0;
  }
  .productContent__carousel:nth-child(5n) {
    margin-left: 1%;
  }
}

@include sm {
  .productContent__carouselImgItem {
    height: toRem(148);
  }
  .productContent__catTitle {
    font-size: toRem(16);
  }
  .productContent__moreItem {
    font-size: toRem(14);
  }
  .productContent__topRight {
    width: 100%;
  }
  .productContent__topLeft {
    justify-content: flex-end;
    width: 100%;
  }
  .productContent__titleVisit {
    font-size: toRem(15);
  }
  .productContent__carousel {
    width: 49.5%;
  }
  .productContent__carousel:nth-child(4n) {
    margin-left: 1%;
  }
  .productContent__carousel:nth-child(3n) {
    margin-left: 1%;
  }
  .productContent__carousel:nth-child(5n) {
    margin-left: 1%;
  }
  .productContent__carousel:nth-child(2n) {
    margin-left: 0;
  }
}

@include xs {
  .productContent__titleVisit {
    @include display-flex();
    font-size: toRem(13);
  }
  .productContent__catTop {
    margin-bottom: toRem(14);
    padding-right: toRem(11);
    padding-left: toRem(11);
  }
  .productContent__catTitle {
    font-size: toRem(14);
  }
  .productContent__carouselData {
    width: 60%;
    margin-top: 0;
    margin-left: auto;
    margin-right: inherit;
    padding-right: toRem(16);
    padding-left: 0;
    flex-grow: 1;
  }
  .productContent__carouselImgItem {
    height: toRem(80);
    width: toRem(80);
    margin-right: auto;
    margin-left: auto;
  }
  .productContent__carousel {
    width: 100%;
    height: toRem(134);
    margin-left: 0;
  }
  .productContent__priceTitle {
    margin-top: toRem(8);
    font-size: toRem(14);
    color: $red-color;
  }
  .productContent__carouselLine {
    width: toRem(2);
  }
  .productContent__discountTitle {
    font-size: toRem(13);
  }
  .productContent__carouselDataTitle {
    line-height: toRem(26.69);
    height: toRem(50);
    text-align: right;
  }
  .productContent__line {
    height: toRem(242);
    width: toRem(44);
  }
  .productContent__carouselPriceMain {
    padding-right: 0;
    padding-left: 0;
    margin-top: toRem(8);
    position: relative;
  }
  .productContent__topLeft {
    display: none;
  }
  .productContent__carouselImgMain {
    width: toRem(80);
    margin-top: 0;
  }
  .productContent__carouselContent {
    flex-flow: inherit;
    padding-top: toRem(16);
    padding-right: toRem(8);
    padding-left: toRem(20);
  }
  .productContent__pricePercent {
    position: absolute;
    left: 0;
    top: toRem(8);
  }
  .productContent__discount {
    height: toRem(14);
  }
  .productContent__sliderWrapper .infinite-loading-container {
    @include display-flex();
  }
  .product__content-desktop {
    display: none;
  }
  .product__content-mobile {
    display: flex;
  }
  .productContent__carousel:nth-child(5n) {
    margin-left: 0;
  }
  .productContent__carousel:nth-child(3n) {
    margin-left: 0;
  }
}

@include xxxs {
  .productContent__carouselImgMain {
    width: toRem(70);
    height: toRem(70);
  }
  .productContent__carouselImgItem {
    width: toRem(70);
    height: toRem(70);
  }
  .productContent__carouselDataTitle {
    font-size: toRem(13);
  }
}
</style>
