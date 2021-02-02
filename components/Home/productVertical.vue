<template>
  <div class="w-100 productContent__sliderWrapper">
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
  width: 460.5px;
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
  height: 144px;
  border-bottom: solid 1px $gray-border;
  padding-right: 14px;
}
.productContent__carousel:nth-child(3n) .productContent__carouselContent{
  border-left: none;
}
.productContent__carousel:nth-child(3n+1) .productContent__carouselContent{
  padding-right: 24px;
}
.productContent__carousel:nth-child(n+4) .productContent__carouselContent{
  border-bottom: none;
}

.productContent__carouselDataTitle{
  font-size: 16px;
  line-height: 2.2em;
  color: $black-topic;
  text-align: center;
  font-weight: 500;
  overflow: hidden;
  height: 60px;
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
  background: linear-gradient(90deg, #FFFFFF -41.48%, rgba(255, 255, 255, 0) 151.7%);
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



@media (max-width: 960px) {

}

@media (max-width: 485px) {


}


</style>
