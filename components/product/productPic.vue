<template>
  <div class="w-100 product__pic">
      <div class="w-100 product__pic-main">
        <img class="product__pic-item" src="https://statics-develop.diver.ir/1/fill/380/411/sm/true/plain/s3://limoo/product/apple-watch-series-4-gps-cellurar2%20.png" alt="">
      </div>

      <span class="product__line"></span>

      <div class="product__pic-content">

      </div>

  </div>
</template>
<script>
// import contentHome from "~/components/Home/contentHome.vue";


export default {
    components: {
      // contentHome,
    },

    data() {
        return {

        };
    },

    watch: {

    },

    created() {

    },

    mounted() {
    },

    methods: {

    }
};
</script>

<style lang="scss" scoped>
  .product__pic{
    @include display-flex();
    align-items: flex-start;
    justify-content: center;
    padding-top: 53px;
    padding-bottom: 33px;
    flex-wrap: wrap;
  }
  .product__pic-main{
    width: 380px;
    height: 514px;
    @include display-flex();
  }
  .product__line{
    width: 100%;
    height: 1px;
    background: $gray-border;
    margin-top: 50px;
    margin-right: 8px;
    margin-left: 8px;
  }
  .product__pic-item{
    width: 100%;
  }



</style>
