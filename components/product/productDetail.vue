<template>
  <div class="product__property w-100">
        <div class="product__property-items w-100">
                  <div v-for="(data,index) in resultSeparate" :key="index" class="product__property-item">
                          <div v-for="content in data.children" :key="content.AttributeID" class="product__property-content" >
                               <h3 class="product__property-title">{{content.Label}} :</h3>
                               <h3 class="product__property-detail">{{content.AttributeValue}}</h3>
                          </div>
                  </div>

        </div>
        <span class="product__line"></span>
  </div>
</template>

<script>
// import contentHome from "~/components/Home/contentHome.vue";


export default {
    props: {
      productData   : { type: [Object,Array], default: [] },
    },

    components: {
      // contentHome,
    },

    data() {
        return {
          detailProduct        : [],
          resultSeparate : [],
        };
    },

    watch: {
      productData(data){
        const detailProduct = data.response_value.[0].values.attribute_groups[0].group_attribute.top.data;
        this.detailProduct  = detailProduct;
        this.productSeparateThree();
      }
    },

    created() {
    },

    mounted() {
    },

    methods: {
      productSeparateThree(){
        let counterTwice          = 0;
        let contentTwiceSplit     = [];
        let levelSplit            = 0;
        const width               = window.innerWidth;
        let productLimited        = [];
        this.resultSeparate       = [];

        // دوتا دوتا جدا سازی آیتم ها در موبایل //
        this.detailProduct.map((content,index)=>{
            counterTwice++;


          if (counterTwice <= 3) {
            contentTwiceSplit = [...contentTwiceSplit,content];
          }

          if (counterTwice >= 3) {
            counterTwice                     = 0;
            this.resultSeparate.push({children:contentTwiceSplit});
            contentTwiceSplit                = [];
            levelSplit                       +=3;
          }

        });



        // پیدا کردن آیتم ای که در جدا سازی دوتایی آیتم ها اضافه آماده است //
        if (this.detailProduct.length != levelSplit) {
          const lastFindCatOutSideTwice = this.detailProduct[levelSplit];
          this.resultSeparate.push( { children: [lastFindCatOutSideTwice] } );
        }


      },
    }

};
</script>

<style lang="scss" scoped>
  .product__property{
    margin-top: 45px;
    @include display-flex();
    align-items: flex-start;
    flex-flow: column;
  }
  .product__property-items{
    @include display-flex();
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .product__property-item{
    @include display-flex();
    align-items: flex-start;
    flex-flow: column;
    border-left: solid 1px $gray-border;
    padding-right: 28px;
    padding-left: 28px;
    // width: 33%;
    padding-top: 11px;
    padding-bottom: 11px;
  }
  .product__property-item:nth-child(1){
    padding-right: 0px;
  }
  .product__property-item:nth-child(4n){
    padding-right: 0;
  }
  .product__property-item:last-of-type{
    margin-left: 0;
    border-left: none;
  }
  .product__property-content{
    @include display-flex();
    align-items: flex-start;
    width: 100%;
    margin-bottom: 22px;
  }
  .product__property-content:last-of-type{
    margin-bottom: 0;
  }
  .product__property-detail{
    font-size: 14px;
    font-weight: 400;
    margin-right: 6px;
    color: $color_discount;
  }
  .product__property-title{
    font-size: 14px;
    font-weight: 400;
    color: $gray;
  }
  .product__line{
    width: 100%;
    height: 1px;
    background: $gray-border;
    margin-top: 50px;
  }

  @media (max-width: 1300px) {
    .product__property-title{
      font-size: 13px;
    }
    .product__property-detail{
      font-size: 13px;
    }
    .product__property-item{
      padding-right: 14px;
      padding-left: 14px;
    }

  }



  @media (max-width: 760px) {
    .product__property{
      display: none;
    }
  }



</style>
