<template>
  <div  :class="{'product--description':descriptionShow}" class="w-100 productContent__sliderWrapper">

        <div class="w-100 productContent__catTop">
            <div class="productContent__topRight">
                <h3 class="w-100 productContent__catTitle">موبایل اندرویدی</h3>
                <h3 class="productContent__titleVisit w-100">{{title.titleVisit}}</h3>
            </div>

        </div>

        <div class="main-carousel w-100 productContent__vertical productContent__mainSlider">
              <div  v-for="data in allDesktopSplitTwice" :key="data.id" class="carousel-cell productContent__carousel ">
                  <div @click="switchLink($event,contentChildren)" v-if="contentChildren.mobileShow" v-for="contentChildren in data.children" :key="contentChildren.id" class="productContent__carouselContent w-100">
                      <!-- <NuxtLink
                      class="w-100 productContent__carousel-link"
                      :to=" '/' + title.sliderItemHref + '/' + contentChildren.id "
                      target="_blank"
                      :data-id="contentChildren.id"
                      >
                    </NuxtLink> -->

                        <div class="productContent__carouselRight">
                          <img class="productContent__carouselImgItem" :src="contentChildren.image" alt="">
                        </div>

                          <div class="productContent__carouselLeft">
                              <span class="productContent__carouselLine"></span>
                                  <div class="productContent__carouselData">
                                    <div class="w-100">
                                      <h3 class="productContent__carouselDataTitle">
                                        {{contentChildren.title}}
                                      </h3>
                                    </div>

                                      <div class="w-100 productContent__carouselPriceMain" :class="{'productContent__haveDiscount':contentChildren.discount != ''}">
                                            <div class="productContent__discount">

                                                  <div class="product__discount-content">
                                                        <div class="productContent__pricePercent">
                                                          <h3 class="productContent__percentTitle">{{contentChildren.precentDiscount}}%</h3>
                                                        </div>

                                                        <div class="productContent__priceDiscount">
                                                          <h3 class="productContent__discountTitle">
                                                            {{contentChildren.addCamaDiscount}}
                                                            <span class="productContent__discountLine"></span>
                                                          </h3>
                                                        </div>
                                                  </div>

                                                <div class="productContent__priceMain">
                                                    <h3 class="productContent__priceTitle">
                                                      {{contentChildren.addCamaRealPrice}}
                                                      <span>تومان</span>
                                                    </h3>
                                                </div>

                                            </div>

                                            <div class="product__descrption-main w-100">
                                                <span class="product__descrption-title" v-if="contentChildren.showLimitDescription">{{contentChildren.description}}</span>
                                                <span v-else class="product__descrption-title">
                                                  {{contentChildren.limitedDescription}}
                                                  <span class="productContent__circle">
                                                    ...
                                                  </span>
                                                </span>
                                            </div>


                                      </div>

                                  </div>
                          </div>

                </div>
              </div>
        </div>

        <div class=" productContent__sliderMore productContent__topLeft w-100">
          <nuxt-link class="productContent__moreItem" to="/">
            لیست کامل محصولات
            <span class=" productContent__moreIcon mobile-inprogress__arrow"></span>
          </nuxt-link>
        </div>




  </div>
</template>

<script>


export default {
    components: {
    },

    props: {
      products          : { type: [Object,Array], default: [] },
      title             : { type: Object, default: [] },
      descriptionShow   : { type: Boolean, default: false },
    },

    data() {
      return {
        allDesktopSplitTwice : [],
        flkty                : {},
        allProducts          : [],
      }
    },

    mounted() {
      const width      = window.innerWidth;
      this.allProducts = this.products;
      this.itemCategorySplitTwice();
      this.detectedResizeBrowser()
    },

    computed: {

    },

    methods: {
      itemCategorySplitTwice(){
        let counterTwice          = 0;
        let contentTwiceSplit     = [];
        let levelSplit            = 0;
        const width               = window.innerWidth;
        let productLimited        = [];
        this.allDesktopSplitTwice = [];


        // دوتا دوتا جدا سازی آیتم ها در موبایل //
        this.products.map((content,index)=>{
            counterTwice++;

            // محدود کردن تعداد نمایش محصولات //
          if (485 >= width) {
              if (index <= 3) {
                content.mobileShow = true;
              }
              else {
                content.mobileShow = false;
              }
          }
          else {
            if (index < 3) {
              content.mobileShow = true;
            }
            else {
              content.mobileShow = false;
            }
          }

          if (counterTwice <= 2) {
            contentTwiceSplit = [...contentTwiceSplit,content];
          }

          if (counterTwice >= 2) {
            counterTwice                     = 0;
            this.allDesktopSplitTwice.push({children:contentTwiceSplit});
            contentTwiceSplit                = [];
            levelSplit                       +=2;
          }

        });

        // پیدا کردن آیتم ای که در جدا سازی دوتایی آیتم ها اضافه آماده است //
        if (this.products.length != levelSplit) {
          const lastFindCatOutSideTwice = this.products[levelSplit];
          this.allDesktopSplitTwice.push( { children: [lastFindCatOutSideTwice] } );
        }

      },

      detectedResizeBrowser(){
        // آپدیت محدود کردن تعداد نمایش در موبایل و دیسکتاپ //
        window.addEventListener("resize", ()=>{
            this.itemCategorySplitTwice();
          }, true);
      },

      switchLink(event,data){
          const width   = window.innerWidth;
          event.preventDefault();

          if (485 > width) {
            this.$router.push(`/${this.title.sliderItemHref}/${data.id}`);
          }
      }


    },

};
</script>

<style lang="scss" scoped>
.productContent__carousel{
  width: 100%;
  background: $white;
  height: auto;
}
.carousel-cell:last-of-type .productContent__carouselContent:last-of-type{
  border-bottom: none;
}
.productContent__carouselContent{
  align-items:center;
  flex-wrap: wrap;
  @include display-flex();
  cursor: pointer;
  height: 170px;
  border-bottom: solid 1px $gray-border;
  padding-right: 14px;
  padding-left: 14px;
  align-items: center;
  position: relative;
}
.productContent__carouselDataTitle{
  font-size: 16px;
  line-height: 2.2em;
  color: $color_product_vertical;
  font-weight: 500;
  overflow: hidden;
  height: 61px;
  text-align: right;
}
.productContent__carouselImgMain{
  @include display-flex();
  flex-wrap: wrap;
  justify-content: center;
}
.productContent__carouselImgItem{
  width: 120px;
  height: 120px;
}
.productContent__carouselData{
  width: 100%;
  padding-top: 3px;
}
.productContent__carouselPriceMain{
  margin-top: 26px;
  @include display-flex();
  flex-wrap: wrap;
  align-items: center;
  flex-flow: column;
}
.productContent__percentTitle{
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
.productContent__discountTitle{
  font-family: inherit;
  @include display-flex();
  font-size: 16px;
  font-weight: 400;
  color: $color-gray;
  position: relative;
}
.productContent__discountLine{
  @include display-flex();
  width: 100%;
  background: $color-gray;
  position: absolute;
  top: 9px;
  right: 0;
  height: 1px;
}
.productContent__discount{
  margin-left: auto;
  @include display-flex();
  flex-wrap: wrap;
  align-items: center;
}
.productContent__priceTitle{
  font-size: 16px;
  color: $color-price;
  font-weight: 500;
}
.productContent__carouselLine{
  @include display-flex();
  background: $border-gray-bg;
  width: 1px;
  height: 98%;
  position: absolute;
  right: 0;
  border-radius: 8px;
  top: 0;
  display: none;
}
.productContent__priceUnit{
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  padding-right: 4px;
}
.productContent__line{
  position: absolute;
  left: 0;
  top: 0;
  width: 54px;
  height: 316px;
  background: linear-gradient(90deg, $white -41.48%, rgba(255, 255, 255, 0) 151.7%);
  opacity: 0.9;
}
.productContent__sliderWrapper{
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  position:relative;
}
.productContent__carouselLeft{
  width: 69%;
  padding-right: 9px;
}
.productContent__carouselRight{
  width: 120px;
  height: 120px;
  @include display-flex();
  align-items: center;
  justify-content: center;
}
.productContent__priceMain{
  margin-right: 0px;
}
// .productContent__haveDiscount .productContent__priceTitle{
//   color: $red-color;
// }
.productContent__haveDiscount .productContent__priceMain{
  margin-right: 23px;
}
.productContent__catRight{
  justify-content: flex-start;
  @include display-flex();
  margin-right: 8px;
  margin-left: 8px;
}
.productContent__catLeft{
  flex-grow: 1;
  @include display-flex();
  width: 264px;
}
.productContent__catTitle{
  color: $black;
  font-size: 18px;
  font-weight: 500;
}
.productContent__catTop{
  @include display-flex();
  flex-wrap: wrap;
  padding-right: 24px;
  padding-left: 24px;
  align-items: flex-start;
  margin-bottom: 4px;
}
.productContent__sliderMore{
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-left: 13px;
}
.productContent__moreItem{
  font-size: 16px;
  color: $gray;
  border-bottom: none;
  text-decoration: none;
  @include display-flex();
  align-items: center;
}
.productContent__moreIcon{
  @include display-flex();
  margin-right: 11px;
}
.mobile-inprogress__arrow::after {
    content: "\e801";
    @include font-icon__limoo();
    font-size: 14px;
    margin-top: 1px;
}
.productContent__topRight{
  flex-grow: 1;
  @include display-flex();
  flex-wrap: wrap;
}
.productContent__link{
  flex-wrap: wrap;
  align-items: flex-start;
  @include display-flex();
  text-decoration: none;
}
.productContent__carousel-link{
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.productContent__titleVisit{
  margin-top: 13px;
  color: $gray;
  font-size: 17px;
  font-weight: 300;
}
.productContent__percentTitle{
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
.productContent__priceDiscount{
  margin-right: 8px;
}
.product__discount-content{
  align-items: center;
  display: none;
}
.productContent__haveDiscount .product__discount-content{
  @include display-flex();
}
.productContent__topLeft{
  justify-content:center;
  margin-top: 18px;
}
.product__descrption-title{
  font-size: 14px;
  color: $gray;
  line-height: 2.4em;
}
.product--description .product__descrption-main{
  @include display-flex();
}
.product__descrption-main{
  display: none;
}
.product--description .productContent__discount{
  display: none;
}
.product--description .productContent__carouselPriceMain{
  margin-top: 9px;
}
.product--description .productContent__catTop{
  margin-bottom: 21px;
}
.productContent__circle{
  display: inline-flex;
}



@media (max-width: 1200px) {
  .productContent__sliderMore{
    width: 100%;
  }
}

@media (max-width: 960px) {
  .productContent__sliderMore{
    justify-content: flex-end;
  }
}

@media (max-width: 860px) {

}

@media (max-width: 600px) {
  .productContent__catTitle{
    font-size: 16px;
  }
  .productContent__moreItem{
    font-size: 14px;
  }
  .productContent__topRight{
    width: 100%;
  }
  .productContent__topLeft{
    justify-content: flex-end;
    width: 100%;
  }
  .productContent__titleVisit{
    font-size: 15px;
  }
}


@media (max-width: 485px) {
  .productContent__catTitle{
    font-size: 14px;
  }
  .productContent__carousel{
    width: 100%;
    height: auto;
    padding-top: 0;
  }
  .productContent__catTop{
    margin-bottom: 9px;
    padding-right: 11px;
    padding-left: 11px;
  }
  .productContent__carouselContent{
    border-left: none;
    height: 113px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: solid 1px $border-gray-bg;
    padding-right: 11px;
    padding-left: 11px;
  }
  .productContent__priceTitle{
    font-size: 14px;
  }
  .productContent__discountTitle{
    font-size: 13px;
  }
  .productContent__carouselDataTitle{
    font-size: 14px;
    width: 100%;
    line-height: 1.9em;
    height: 50px;
  }
  .productContent__carouselPriceMain{
    margin-top: 8px;
  }
  .productContent__carouselRight{
    width: 24%;
    height: 80px;
  }
  .productContent__carouselImgItem{
    width: 80px;
    height: 80px;
  }

  .productContent__carouselData{
    padding-top: 0;
  }

  .productContent__carouselLeft{
    width: 76%;
  }
  .productContent__sliderMore{
    display: none;
  }
  .productContent__titleVisit{
    font-size: 13px;
  }
  .productContent__pricePercent{
    display: none;
  }
  .productContent__haveDiscount .productContent__priceMain{
    margin-right: 15px;
  }


}

@media (max-width: 320px) {

}

@media (max-width: 280px) {
  .productContent__carouselLeft{
    padding-right: 12px;
  }
}



</style>
