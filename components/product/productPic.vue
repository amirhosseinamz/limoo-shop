<template>
  <div class="w-100 product__pic">
      <div class="w-100 product__pic-main">
        <img class="product__pic-item" src="/img/single_product_img.jpg" alt="">
      </div>

      <span class="product__line"></span>

      <div class="product__pic-content w-100">
            <div @click="showModal(data)" v-for="data in productLimitedShow" :key="data.id" class="product__pic-items">
                <div class="product__pic-box">
                  <img class="product__pic-data" :src="data.image" alt="">
                </div>
                <span class="product--pic_data-line"></span>
            </div>

      </div>

      <modal-pic-product
      :active.sync="showModalPicProduct"
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
          showModalPicProduct : false,
          productLimitedShow  : [],
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
              if (index <= 3) {
                this.productLimitedShow = [...this.productLimitedShow,content];
              }
          })
      },

      showModal(data){
        this.showModalPicProduct = true;
      },


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
    border:solid 1px $gray-border;
    width: 122px;
    height: 122px;
    border-radius: 10px;
    @include display-flex();
    align-items: flex-start;
    cursor: pointer;
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
  }




</style>
