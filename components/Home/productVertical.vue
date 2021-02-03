<template>
  <div class="w-100 productContent__sliderWrapper">

        <div class="w-100 productContent__catTop">
            <div class="productContent__topRight">
                <h3 class="w-100 productContent__catTitle">دسته بندی محصولات پرفروش</h3>
            </div>

            <div class=" productContent__sliderMore productContent__topLeft">
                <nuxt-link class="productContent__moreItem" to="/">
                  لیست کامل دسته بندی
                  <span class=" productContent__moreIcon mobile-inprogress__arrow"></span>
                </nuxt-link>
            </div>

        </div>

        <div class="productContent__mainSlider main-carousel w-100">

                  <div v-for="data in products" :key="data.id" class="carousel-cell productContent__carousel ">

                      <div class="productContent__carouselContent w-100">
                          <div class="productContent__carouselRight">
                            <img class="productContent__carouselImgItem" :src="data.image" alt="">
                          </div>

                          <div class="productContent__carouselLeft">
                                <span class="productContent__carouselLine"></span>

                                <div class="productContent__carouselData">
                                        <div class="w-100">
                                            <h3 class="productContent__carouselDataTitle">
                                              {{data.title}}
                                            </h3>
                                        </div>

                                        <div class="w-100 productContent__carouselPriceMain" :class="{'productContent__haveDiscount':data.discount != ''}">
                                              <div class="productContent__discount">
                                                      <div class="productContent__priceDiscount">
                                                          <h3 class="productContent__discountTitle">
                                                            {{data.addCamaDiscount}}
                                                            <span class="productContent__discountLine"></span>
                                                          </h3>
                                                      </div>

                                                      <div class="productContent__priceMain">
                                                            <h3 class="productContent__priceTitle">
                                                              {{data.addCamaRealPrice}}
                                                              <span>تومان</span>
                                                            </h3>
                                                      </div>
                                              </div>

                                        </div>
                                </div>
                          </div>

                      </div>

                </div>

        </div>
  </div>
</template>

<script>


export default {
    components: {
    },

    props: {
      products   : { type: [Object,Array], default: [] },
    },

    data() {
      return {
      }
    },

    mounted() {
    },

    computed: {

    },

    methods: {

    },

};
</script>

<style lang="scss" scoped>
.productContent__carousel{
  // width: 460.5px;
  width: 33.3%;
  background: $white;
}
.productContent__mainSlider{
  position: relative;
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
}
.productContent__carouselContent{
  align-items:center;
  flex-wrap: wrap;
  @include display-flex();
  cursor: pointer;
  border-left: solid 1px $gray-border;
  height: 145px;
  border-bottom: solid 1px $gray-border;
  padding-right: 14px;
  align-items: flex-start;
}
.productContent__carousel:nth-child(3n) .productContent__carouselContent{
  border-left: none;
}
.productContent__carousel:nth-child(3n+1) .productContent__carouselContent{
  padding-right: 24px;
}
.productContent__carousel:nth-child(n+4) .productContent__carouselContent{
  border-bottom: none;
  padding-top: 28px;
}

.productContent__carouselDataTitle{
  font-size: 16px;
  line-height: 2.2em;
  color: $black-topic;
  font-weight: 500;
  overflow: hidden;
  height: 60px;
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
  width: 275px;
  margin-right: 9px;
}
.productContent__carouselRight{
  width: 120px;
  height: 120px;
  @include display-flex();
  align-items: center;
  justify-content: center;
}
.productContent__priceMain{
  margin-right: 11px;
}
.productContent__haveDiscount .productContent__priceTitle{
  color: $red-color;
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
  align-items: center;
  margin-bottom: 38px;
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
}


@media (max-width: 1200px) {
  .productContent__carouselLeft{
    width: 206px;
  }
}

@media (max-width: 1024px) {
  .productContent__carousel{
    width: 50%;
  }
  .productContent__carouselLeft{
    width: 280px;
  }
  .productContent__carousel:nth-child(3n) .productContent__carouselContent{
    border-left: solid 1px $border-gray-bg;
    padding-top: 10px;
  }
  .productContent__carousel:nth-child(n+4) .productContent__carouselContent{
    border-bottom: solid 1px $border-gray-bg;
    padding-top: 10px;
  }
  .productContent__carouselContent{
    height: auto;
    padding-bottom: 10px;
  }
  // .productContent__carousel:nth-child(n+5) .productContent__carouselContent{
  //   border-bottom: none;
  // }
  // .productContent__carousel:nth-last-child(1) .productContent__carouselContent{
  //   border-bottom: none;
  //   border-left: none;
  // }

}

@media (max-width: 960px) {
}

@media (max-width: 860px) {
  .productContent__carousel:nth-child(3n+1) .productContent__carouselContent{
    padding-right: 11px;
    padding-left: 11px;
  }
  .productContent__carousel:nth-child(3n) .productContent__carouselContent{
    padding-top: 16px;
  }
  .productContent__carousel:nth-child(n+4) .productContent__carouselContent{
    padding-top: 16px;
  }
  .productContent__carousel{
    width: 100%;
  }
  .productContent__catTop{
    margin-bottom: 8px;
    padding-right: 11px;
    padding-left: 11px;
  }
  // .productContent__carousel:nth-child(n+2) .productContent__carouselContent{
  //   padding-top: 16px;
  // }
  .productContent__carouselContent{
    border-left: none;
    padding-bottom: 0;
    height: 113px;
    padding-top: 16px;
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
    width: 80px;
    height: 80px;
  }
  .productContent__carouselImgItem{
    width: 80px;
    height: 80px;
  }
  .productContent__catTitle{
    font-size: 14px;
  }
  .productContent__carouselData{
    padding-top: 0;
  }
  .productContent__carousel:nth-child(n+5) .productContent__carouselContent{
    border-bottom: solid 1px $border-gray-bg;
  }
  .productContent__carousel:last-of-type .productContent__carouselContent{
    border-bottom: none;
  }
  .productContent__carouselLeft{
    width: 237px;
  }
  .productContent__sliderMore{
    display: none;
  }
}

@media (max-width: 485px) {
  .productContent__carouselLeft{
    width: 221px;
  }
}

@media (max-width: 320px) {
  .productContent__carouselLeft{
    width: 180px;
  }
}

@media (max-width: 280px) {
  .productContent__carouselLeft{
    width:134px;
  }
}



</style>
