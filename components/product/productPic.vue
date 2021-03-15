<template>
  <div class="w-100 product__pic">
      <div class="w-100 product__pic-main">
        <img class="product__pic-item" src="/img/single_product_img.jpg" alt="">
      </div>

      <span class="product__line"></span>

      <div class="product__pic-content w-100">
            <div class="product__pic-items">
                <div class="product__pic-box">
                  <img class="product__pic-data" src="/img/slider_img_bottom.jpg" alt="">
                </div>
                <span class="product--pic_data-line"></span>
            </div>

            <div class="product__pic-items">
                <div class="product__pic-box">
                  <img class="product__pic-data" src="/img/slider_img_bottom.jpg" alt="">
                </div>
                <span class="product--pic_data-line"></span>
            </div>

            <div class="product__pic-items">
                <div class="product__pic-box">
                  <img class="product__pic-data" src="/img/slider_img_bottom.jpg" alt="">
                </div>
                <span class="product--pic_data-line"></span>
            </div>

            <div class="product__pic-items">
                <div class="product__pic-box">
                  <img class="product__pic-data" src="/img/slider_img_bottom.jpg" alt="">
                </div>
                <span class="product--pic_data-line"></span>
            </div>

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
    padding-top: 16px;
    flex-wrap: wrap;
  }
  .product__pic-main{
    width: 514px;
    height: 514px;
    @include display-flex();
  }
  .product__line{
    width: 100%;
    height: 1px;
    background: $gray-border;
    margin-top: 16px;
    margin-right: 8px;
    margin-left: 8px;
  }
  .product__pic-item{
    width: 514px;
    height: 514px;
    border-radius: 15px;
    @include display-flex();
  }
  .product__pic-content{
    @include display-flex();
    align-items: flex-start;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 16px;
    padding-left: 16px;
  }
  .product__pic-box{
    border:solid 1px $gray-border;
    width: 122px;
    height: 122px;
    border-radius: 10px;
    @include display-flex();
    align-items: flex-start;
  }
  .product__pic-data{
    width: 100%;
    padding: 4px;
  }
  .product--pic_data-line{
    margin-left: 4.5px;
    margin-right: 4.5px;
    background: $gray-border;
    border-radius: 8px;
    height: 83px;
    width: 1px;
    @include display-flex();
  }
  .product__pic-items{
    @include display-flex();
    align-items: center;
  }
  .product__pic-items:last-of-type .product--pic_data-line{
    display: none;
  }



</style>
