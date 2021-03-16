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
                            <h3 class="product__top-title">مک بوک پرو 16 اینچ با تاچ بار مدل 9102 مک بوک پرو 16 اینچ رتینا با تاچ بار مدل 2019 طرح جدید</h3>
                            <h3 class="product__top-brand">Apple AirPods Max- Sliver - MGYJ3</h3>
                          </div>

                          <sliderSingleProduct :products="productSliderMobile"></sliderSingleProduct>

                          <!-- <productTools></productTools> -->

                          <productDetail :product-data="productData"></productDetail>

                    </div>


              </div>

        </div>

    </div>

</template>
<script>
import productPic from "./productPic";
import productDetail from './productDetail';
import productTools from './productTools';
import sliderSingleProduct from './sliderSingleProduct';


export default {
    props: {
      productData             : { type: [Object,Array], default: [] },
      productSliderMobile     : { type: [Object,Array], default: [] },
      productSlider           : { type: [Object,Array], default: [] },
    },

    components: {
      productPic,
      productDetail,
      productTools,
      sliderSingleProduct,
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
      activeItemSliderNav(data){
        this.$emit('active-item-slider-nav',data)
      },

    }
};
</script>

<style lang="scss" scoped>
  .product__single{
    margin-top: 160px;
  }
  .product__single-category{
    @include display-flex();
    align-items: flex-start;
  }
  .product__single-content{
    @include display-flex();
    align-items: flex-start;
    background: $white;
    padding-bottom: 22px;
    padding-top: 22px;
    margin-bottom: 19px;
    flex-wrap: wrap;
    padding-right: 16px;
  }
  .product__single-right{
    width: 39.6%;
    @include display-flex();
    align-items: flex-start;
  }
  .product__single-left{
    width: 60%;
    @include display-flex();
    align-items: flex-start;
  }
  .product__top-title{
    margin-bottom: 8px;
    font-size: 24px;
    line-height:42.75px;
    color: $black;
    font-weight: 400;
    width: 80%;
  }
  .product__top-brand{
    color: $gray;
    font-weight: 400;
    font-size: 13px;
  }
  .product__data-content {
    @include display-flex();
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 30px;
    padding-right: 24px;
    padding-left: 24px;
  }
  .product__single-top{
    width: 766px;
  }
  .product--single__right-content{
    width: 100%;
    border:solid 1px $gray-border;
    border-radius: 10px;
  }

  @media (max-width: 1300px) {
    .product__top-title{
      font-size: 17px;
    }
    .product__single-right{
      width:30%;
    }
    .product__single-left{
      width: 70%;
    }
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 960px) {
    .product__single{
      margin-top: 8px;
    }
    .product__top-title{
      font-size: 14px;
      width: 94%;
    }
  }

  @media (max-width: 760px) {
    .product__single-right{
      display: none;
    }
    .product__single-left{
      width: 100%;
    }
    .product__data-content{
      padding-right: 0;
      padding-left: 0;
    }
    .product__single-content{
      padding-right: 11px;
      padding-left: 11px;
      padding-top: 8px;
      padding-bottom: 8px;
    }
    .product__top-title{
      line-height: 28px;
      margin-bottom: 2px;
    }
  }







</style>
