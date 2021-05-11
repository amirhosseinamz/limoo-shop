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
            :class="{ productContent__noneDiscount: data.discount == '' }"
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
            if (index == cellIndex) {
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
@import "~/assets/styles/components/_products.scss";
</style>
