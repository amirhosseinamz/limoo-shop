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
        const detailProduct = data.response_value[0].values.attribute_groups[0].group_attribute.top.data;
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
        if (this.detailProduct.length !== levelSplit) {
          const lastFindCatOutSideTwice = this.detailProduct[levelSplit];
          this.resultSeparate.push( { children: [lastFindCatOutSideTwice] } );
        }


      },
    }

};
</script>

<style lang="scss" scoped>
  .product__property{
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
    border-left: solid toRem(1) $gray-border;
    padding: toRem(11) toRem(28);
  }
  .product__property-item:nth-child(1){
    padding-right: 0;
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
    margin-bottom: toRem(22);
  }
  .product__property-content:last-of-type{
    margin-bottom: 0;
  }
  .product__property-detail{
    font-size: toRem(14);
    font-weight: 400;
    margin-right: toRem(6);
    color: $color_discount;
  }
  .product__property-title{
    font-size: toRem(14);
    font-weight: 400;
    color: $gray;
  }
  .product__line{
    width: 100%;
    height: toRem(1);
    background: $gray-border;
    margin-top: toRem(50);
    margin-bottom: toRem(30);
  }

  @include xl {
    .product__property-title{
      font-size: toRem(13);
    }
    .product__property-detail{
      font-size: toRem(13);
    }
    .product__property-item{
      padding-right: toRem(14);
      padding-left: toRem(14);
    }

  }

  @include sm {
    .product__property{
      display: none;
    }
  }



</style>
