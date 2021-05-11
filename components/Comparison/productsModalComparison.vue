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
@import "~/assets/styles/components/_products.scss";
.main-carousel {
  @include display-flex();
  flex-wrap: wrap;
  padding-right: 32px;
  padding-left: 32px;
}
.main-carousel .productContent__carousel {
  width: 206px;
  height: 264px;
  margin-left: 15px;
  border-radius: 22px;
}
.productContent__carousel:nth-child(4n) {
  width: 206px;
  margin-left: 0;
}
.productContent__carousel {
  border: solid 1px $light-gray;
  border-radius: 10px;
  margin-bottom: 24px;
}
.productContent__carouselData {
  width: auto;
}
.productContent__carouselContent {
  padding-right: 14px;
  padding-left: 14px;
}
.productContent__carouselImgItem {
  height: 141px;
}
.productContent__carouselImgMain {
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 19px;
  padding-left: 19px;
}
.productContent__carouselDataTitle {
  height: 90px;
  line-height: 2.3em;
}
</style>
