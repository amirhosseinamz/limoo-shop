<template>
  <div class="w-100 productContent__sliderWrapper">
        <div class="productContent__mainSlider main-carousel w-100">
            <div v-for="data in products" :key="data.id" class="carousel-cell productContent__carousel ">
            <div class="productContent__carouselContent w-100">
              <span class="productContent__carouselLine"></span>

              <div class="productContent__carouselImgMain w-100">
                <img class="productContent__carouselImgItem" :src="data.image" alt="">
              </div>

              <div class="productContent__carouselData">
                <div class="w-100">
                  <h3 class="productContent__carouselDataTitle">
                    {{data.title}}
                  </h3>
                </div>
                <div class="w-100 productContent__carouselPriceMain" :class="{'productContent__noneDiscount':data.discount == ''}">
                  <div class="productContent__discount">
                    <div class="productContent__pricePercent">
                      <h3 class="productContent__percentTitle">30%</h3>
                    </div>
                    <div class="productContent__priceDiscount">
                      <h3 class="productContent__discountTitle">
                        {{data.addCamaDiscount}}
                        <span class="productContent__discountLine"></span>
                      </h3>
                    </div>
                  </div>
                  <div class="w-100 productContent__priceUnit">
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
        <div class="productContent__line"></div>
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
      this.flickityOptions();
    },

    computed: {

    },

    methods: {
      flickityOptions(){
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
          fade            : false,
        });

      },
    },

};
</script>

<style lang="scss" scoped>
.productContent__carousel{
  // width: 246px;
  // width: 313px;
  width: 249px;
  height: 319px;
  background: $white;
}
.productContent__mainSlider{
  position: relative;
}
.productContent__carouselContent{
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
  flex-flow: column;
  // border-right: solid 2px $gray-border;
  // padding-right: 11px;
  // padding-left: 11px;
}
.productContent__carouselDataTitle{
  font-size: 14px;
  line-height: 1.9em;
  color: $black-topic;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  overflow: hidden;
  height: 49px;
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
  height: 29px;
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
.productContent__noneDiscount .productContent__discount{
  opacity: 0;
  pointer-events: none;
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

@media (max-width: 960px) {
  .productContent__carousel:first-child .productContent__carouselLine{
    display: none;
  }
}

@media (max-width: 485px) {
  .productContent__carouselData{
    width: 182px;
    margin-top: 8px;
    margin-left: auto;
    margin-right: inherit;
    padding-right: 16px;
  }
  .productContent__carouselImgItem{
    height: 102px;
  }
  .productContent__carousel{
    width: 223px;
    height: 220px;
  }
  .productContent__priceTitle{
    margin-top: 7px;
    font-size: 13px;
  }
  .productContent__carouselLine{
    width: 2px;
  }
  .productContent__discountTitle{
    font-size: 13px;
  }
  .productContent__carouselDataTitle{
    line-height: 22.69px;
    height: 40px;
    text-align: right;
  }
  .productContent__line{
    height: 242px;
    width: 44px;
  }
  .productContent__carouselPriceMain{
    padding-right: 0;
    padding-left: 0;
  }


}


</style>
