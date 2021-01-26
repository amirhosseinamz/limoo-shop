<template>
  <div class="w-100 productContent">

      <div class="productContent__items w-100">
            <div class="productContent__mainSlider main-carousel w-100">

                      <div v-for="data in products" :key="data.id" class="carousel-cell productContent__carousel ">
                            <div class="productContent__carouselContent w-100">
                                  <span class="productContent__carouselLine"></span>

                                    <div class="productContent__carouselImgMain w-100">
                                        <img class="productContent__carouselImgItem" src="/img/phoneAndroid.svg" alt="">
                                    </div>

                                    <div class="productContent__carouselData">
                                          <div class="w-100">
                                              <h3 class="productContent__carouselDataTitle">
                                                اب یبآ موینیمولآ دیدج یرس پاتپل
                                                تیالده اب یبآ نوکیلیس ترپسا دنب
                                              </h3>
                                          </div>
                                          <div class="w-100 productContent__carouselPriceMain">
                                                  <div class="productContent__discount">
                                                        <div class="productContent__pricePercent">
                                                            <h3 class="productContent__percentTitle">30%</h3>
                                                        </div>
                                                        <div class="productContent__priceDiscount">
                                                            <h3 class="productContent__discountTitle">
                                                              123,000,000
                                                              <span class="productContent__discountLine"></span>
                                                            </h3>
                                                        </div>
                                                  </div>
                                                  <div class="w-100 ">
                                                      <h3 class="productContent__priceTitle">
                                                        256,000 تومان
                                                      </h3>
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
      let Flickity       = require("flickity")
      let sliderOptions  = new Flickity( '.productContent__mainSlider', {
        accessibility   : true,
        adaptiveHeight  : true,
        rightToLeft     : true,
        cellAlign       : 'right',
        imagesLoaded    : true,
        wrapAround      : false,
        contain         : true,
        // prevNextButtons : false,
        // autoPlay        : true, // advance cells every 3 seconds
        // autoPlay: 1500 // {Number}
        // freeScroll      : true,
        pageDots        : false,
        groupCells      : true,



      });
    },

    computed: {

    },

    methods: {

    },

};
</script>

<style lang="scss" scoped>
.productContent{
  margin-top: 40px;
  background: $white;
  border-radius: 12px;
  height: 387px;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.productContent__items{
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
  padding-top: 38px;
  padding-bottom: 38px;
}
.productContent__carousel{
  width: 246px;
  height: 319px;
  background: $white;
}
.productContent__carousel:first-child .productContent__carouselLine{
  display: none;
}
.productContent__carouselContent{
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
  flex-flow: column;
  // border-right: solid 2px $gray-border;
  padding-right: 16px;
  padding-left: 16px;
}
.productContent__carouselDataTitle{
  font-size: 14px;
  line-height: 1.9em;
  color: $black-topic;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
}
.productContent__carouselImgMain{
  @include display-flex();
  flex-wrap: wrap;
  justify-content: center;
}
.productContent__carouselImgItem{
  height: 159px;
}
.productContent__carouselData{
  margin-top: 24px;
  width: 214px;
  margin-right: auto;
  margin-left: auto;
}
.productContent__carouselPriceMain{
  padding-right: 3px;
  padding-left: 3px;
  margin-top: 16px;
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
  margin-right: 8px;
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
  margin-top: 11px;
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




</style>
