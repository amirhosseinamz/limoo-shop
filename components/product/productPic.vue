<template>
  <div class="w-100 product__pic">
      <div class="w-100 product__pic-main">
        <img class="product__pic-item" src="/img/single_product_img.jpg" alt="">
      </div>

      <span class="product__line"></span>

      <div class="product__pic-content w-100" :key="updateLimitedProduct">
            <div @click="showModal(data)" :class="{'active--pic':data.lastItemLimitedProduct}" v-if="data.show" v-for="data in productSlider" :key="data.id" class="product__pic-items">
                <div class="product__pic-box">
                  <img class="product__pic-data" :src="data.image" alt="">

                  <div class="w-100 product--pic__circle-main">
                    <span class="product__pic-circle"></span>
                    <span class="product__pic-circle"></span>
                    <span class="product__pic-circle"></span>
                  </div>
                </div>
                <span class="product--pic_data-line"></span>
            </div>

      </div>

      <modal-pic-product
      :active.sync="showModalPicProduct"
      :product-slider="productSlider"
      :image-selected="imageSelected"

      @active-item-slider-nav="activeItemSliderNav"
      ></modal-pic-product>
      

  </div>
</template>
<script>
import modalPicProduct from "./modalPicProduct";


export default {
    props: {
      productSlider   : { type: [Object,Array], default: [] },
    },
    components: {
      modalPicProduct,
    },
    data() {
        return {
          showModalPicProduct   : false,
          productLimitedShow    : [],
          imageSelected         : {},
          updateLimitedProduct  : 0,
        };
    },

    watch: {

    },

    created() {

    },

    mounted() {
      this.limitedProduct();
    },

    methods: {
      limitedProduct(){
          this.productSlider.map((content,index)=>{
            content.show                   = false;
            content.lastItemLimitedProduct = false;

              if (index <= 3) {
                content.show = true;
              }

              if (index == 3) {
                content.lastItemLimitedProduct = true;
              }
          })

          this.updateLimitedProduct++;
      },

      showModal(data){
        this.imageSelected       = data;
        this.showModalPicProduct = true;
      },

      activeItemSliderNav(data){
        this.imageSelected       = data;
        this.$emit('active-item-slider-nav',data)
      }


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
    width: 100%;
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
    justify-content: center;
  }
  .product__pic-box{
    border:solid 1px $white;
    width: 122px;
    height: 122px;
    border-radius: 10px;
    @include display-flex();
    align-items: flex-start;
    cursor: pointer;
    position: relative;
  }
  .active--pic .product__pic-box{
    border-color:$gray-border;
  }
  .active--pic .product__pic-data{
    filter: blur(4px);
  }
  .product__pic-data{
    width: 100%;
    height: 120px;
    padding: 4px;
  }
  .product--pic_data-line{
    margin-left: 4.5px;
    margin-right: 4.5px;
    background: $gray-border;
    border-radius: 8px;
    width: 1px;
    @include display-flex();
    right: -9px;
    position: absolute;
    top: 16%;
    height: 74%;
  }
  .product__pic-items{
    @include display-flex();
    align-items: center;
    position: relative;
    margin-left: 9px;
  }
  .product__pic-items:last-of-type{
    margin-left: 0;
  }
  .product__pic-items:nth-child(1) .product--pic_data-line{
    opacity: 0;
    pointer-events: none;
  }
  .product--pic__circle-main{
    position: absolute;
    top:0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    align-items: center;
    justify-content: center;
    display: none;
  }
  .product__pic-circle{
    width: 7px;
    height: 7px;
    background: $white;
    @include display-flex();
    border-radius: 1000px;
    margin-left: 7px;
  }
  .active--pic .product--pic__circle-main{
    @include display-flex();
  }


  @media (max-width: 1300px) {
    .product__pic-item{
      height: auto;
      width: 100%;
    }
    .product__pic-box{
      width: auto;
      height: auto;
    }
    .product__pic-main{
      width: auto;
      height: auto;
    }
    .product__pic-data{
      height: auto;
    }
  }




</style>
