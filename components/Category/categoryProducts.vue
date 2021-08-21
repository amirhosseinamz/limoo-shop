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
              :class="{ productContent__noneDiscount: data.discount == '' }"
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
              :class="{ productContent__noneDiscount: data.discount == '' }"
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
    };
  },

  mounted() {
    const width = window.innerWidth;

    if (485 < width) {
      this.scrollDataCategoryProduct = this.categoryProductMobile;
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
            if (typeof this.categoryProductMobile[i] !== "undefined") {
              this.scrollDataCategoryProduct.push(this.categoryProductMobile[i]);
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

          if (485 < width) {
            this.scrollDataCategoryProduct = this.categoryProductMobile;
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
  width: 260px;
  height: 374px;
  background: $white;
  position: relative;
  margin-left: 8px;
  margin-bottom: 8px;
}
.productContent__carousel:nth-child(5n) {
  margin-left: 0;
}
.productContent__mainSlider {
  position: relative;
  @include display-flex();
  flex-wrap: wrap;
  min-height: 400px;
}
.productContent__carouselContent {
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
  flex-flow: column;
  cursor: pointer;
  border: solid 1px $light-gray;
  border-radius: 10px;
  height: 100%;
}
.productContent__carouselDataTitle {
  font-size: 14px;
  line-height: 2.4em;
  color: $black-topic;
  font-size: 14px;
  text-align: right;
  font-weight: 500;
  overflow: hidden;
  height: 58px;
}
.productContent__carouselImgMain {
  @include display-flex();
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
}
.productContent__carouselImgItem {
  height: 170px;
  width: 170px;
}
.productContent__carouselData {
  margin-top: 25px;
  width: 228px;
  margin-right: auto;
  margin-left: auto;
}
.productContent__carouselPriceMain {
  padding-right: 3px;
  padding-left: 3px;
  margin-top: 25px;
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
  right: 0;
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
  margin-top: 34px;
}
.productContent__sliderWrapper .infinite-loading-container {
  width: 100%;
  margin-bottom: 10px;
  display: none;
  justify-content: center;
  text-align: center;
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
  margin-bottom: 31px;
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
.product__content-mobile {
  display: none;
}

@media (max-width: 1500px) {
  .productContent__carousel {
    margin-left: 0.6%;
    width: 19.52%;
  }
  .productContent__carouselData {
    width: 88.5%;
  }
}

@media (max-width: 1300px) {
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

@media (max-width: 1024px) {
}

@media (max-width: 960px) {
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

@media (max-width: 760px) {
  .productContent__carouselImgItem {
    height: 148px;
  }
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

@media (max-width: 600px) {
}

@media (max-width: 485px) {
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
    width: 60%;
    margin-top: 0px;
    margin-left: auto;
    margin-right: inherit;
    padding-right: 16px;
    padding-left: 0px;
    flex-grow: 1;
  }
  .productContent__carouselImgItem {
    height: 80px;
    width: 80px;
    // margin-top: 2px;
    margin-right: auto;
    margin-left: auto;
  }
  .productContent__carousel {
    width: 100%;
    height: 134px;
    margin-left: 0;
  }
  .productContent__priceTitle {
    margin-top: 8px;
    font-size: 14px;
    color: $red-color;
  }
  .productContent__carouselLine {
    width: 2px;
  }
  .productContent__discountTitle {
    font-size: 13px;
  }
  .productContent__carouselDataTitle {
    line-height: 26.69px;
    height: 50px;
    text-align: right;
  }
  .productContent__line {
    height: 242px;
    width: 44px;
  }
  .productContent__carouselPriceMain {
    padding-right: 0;
    padding-left: 0;
    margin-top: 8px;
    position: relative;
  }
  .productContent__topLeft {
    display: none;
  }
  .productContent__carouselImgMain {
    width: 80px;
    margin-top: 0;
  }
  .productContent__carouselContent {
    flex-flow: inherit;
    padding-top: 16px;
    padding-right: 8px;
    padding-left: 20px;
  }
  .productContent__pricePercent {
    position: absolute;
    left: 0;
    top: 8px;
  }
  .productContent__discount {
    height: 14px;
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

@media (max-width: 280px) {
  .productContent__carouselImgMain {
    width: 70px;
    height: 70px;
  }
  .productContent__carouselImgItem {
    width: 70px;
    height: 70px;
  }
  // .productContent__carouselContent{
  //   padding-left: 8px;
  // }
  .productContent__carouselDataTitle {
    font-size: 13px;
  }
}
</style>
