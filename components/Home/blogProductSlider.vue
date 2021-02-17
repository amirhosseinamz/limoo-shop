<template>
  <div class="w-100 productContent__sliderWrapper">
      <div v-if="title.title != '' " class="w-100 productContent__catTop">
          <div class="productContent__topRight ">
              <h3 class="w-100 productContent__catTitle">{{title.title}}</h3>
              <h3 class="productContent__titleVisit w-100">{{title.titleVisit}}</h3>
          </div>

          <div class=" productContent__sliderMore productContent__topLeft">
              <nuxt-link class="productContent__moreItem" :to="title.href">
                مطالب بیشتر
                <span class=" productContent__moreIcon mobile-inprogress__arrow"></span>
              </nuxt-link>
          </div>
      </div>

        <div :class="nameElementFindSlider" class=" main-carousel w-100 productContent__mainSlider">
            <div @click="switchLink($event)" v-for="data in products" :key="data.id" class="carousel-cell productContent__carousel ">
                <NuxtLink
                class="w-100 productContent__carousel-link"
                :to=" '/' + title.sliderItemHref + '/' + data.id "
                target="_blank"
                :data-id="data.id"
                >
              </NuxtLink>
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
                        <div class="w-100 productContent__carouselDescription w-100" >
                          <p class="productContent__carouselText">
                            <span v-if="data.showLimitDescription">{{data.description}}</span>
                            <span v-else class="h-100 d-flex">
                                <span>
                                  {{data.limitedDescription}}
                                  <span class="productContent__circle">...</span>
                                </span>

                            </span>

                          </p>
                        </div>
                        <div class="w-100 productContent__carouselMore w-100" >
                            <div class=" productContent__moreBtn">
                                <div class="w-100">
                                  <NuxtLink
                                      class=" productContent__moreLink"
                                      :to=" '/' + title.sliderItemHref + '/' + data.id "
                                      >
                                      <img src="/icons/arrow-blog.svg" alt="">
                                      <h3 class="productContent__moreSingle">ادامه...</h3>
                                    </NuxtLink>


                                </div>
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
      products                 : { type: [Object,Array], default: [] },
      nameElementFindSlider    : { type: String, default: '' },
      title                    : { type: Object, default: {} },
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
        let sliderOptions  = new Flickity( `.${this.nameElementFindSlider}`, {
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


        sliderOptions.on( 'staticClick', ( event, pointer, cellElement, cellIndex ) =>{
          const currentId    = parseInt(event.target.getAttribute('data-id'));
          this.$router.push(`/${this.title.sliderItemHref}/${currentId}`);
        });

      },

      switchLink(event){
          event.preventDefault();
      }


    },

};
</script>

<style lang="scss" scoped>
.d-flex{
  @include display-flex();
}
.productContent__carousel{
  width: 341px;
  height: 355px;
  background: $white;
}
// .productContent__carousel:nth-child(4n) .productContent__carouselLine{
//   display: none;
// }
.productContent__mainSlider{
  position: relative;
}
.productContent__carouselContent{
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
  flex-flow: column;
  cursor: pointer;
}
.productContent__carouselDataTitle{
  font-size: 14px;
  line-height: 1.9em;
  color: $black-topic;
  font-size: 14px;
  text-align: right;
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
  height: 175px;
  width: 290px;
  border-radius: 10px;
}
.productContent__carouselData{
  margin-top: 25px;
  width: 288px;
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
  height: 100%;
  position: absolute;
  left: 0;
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
  left: -24px;
  top: 42px;
  width: 59px;
  height: 361px;
  background: linear-gradient(90deg, #FFFFFF -41.48%, rgba(255, 255, 255, 0) 100%);
  opacity: 0.9;
  display: none;
}
.productContent__sliderWrapper{
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  position:relative;
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
  margin-bottom: 31px;
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
  flex-flow: column;
}
.productContent__link{
  flex-wrap: wrap;
  align-items: flex-start;
  @include display-flex();
  text-decoration: none;
}
.productContent__titleVisit{
  margin-top: 13px;
  color: $gray;
  font-size: 17px;
  font-weight: 300;
  // display: none;
}
.productContent__carouselDescription{
  margin-top: 24px;
}
.productContent__carouselText{
  font-size: 14px;
  color: $gray;
  height: 75px;
  line-height: 2.1em;
}
.productContent__moreArrow{
  width: 24.5px;
  height: 24.5px;
  background: $yellow;
  color: $white;
  @include display-flex();
}
.productContent__carouselMore {
  margin-top: 8px;
}
.productContent__moreBtn{
  @include display-flex();
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
}
.productContent__moreSingle{
  margin-right: 7px;
  font-size: 13px;
  font-weight: 500;
  color: $gray;
}
.productContent__circle{
  display: inline-flex;
}
.productContent__moreLink{
  @include display-flex();
  align-items: center;
  text-decoration: none;
}
.productContent__carousel-link{
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}



@media (max-width: 960px) {

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
  .productContent__line{
    display: flex;
  }
  .productContent__titleVisit{
    @include display-flex();
    font-size: 13px;
  }
  .productContent__catTop{
    margin-bottom: 24px;
    padding-right: 11px;
    padding-left: 11px;
  }
  .productContent__catTitle{
    font-size: 14px;
  }
  .productContent__carouselData{
    width: 100%;
    margin-top: 11px;
    margin-left: auto;
    margin-right: inherit;
    padding-right: 17px;
    padding-left: 14px;
  }
  .productContent__carouselImgItem{
    height: 143px;
    width: 232px;
    margin-right: 19px;
  }
  .productContent__carousel.is-selected .productContent__carouselImgItem{
    margin-right: 11px;
  }
  .productContent__carousel{
    width: 262px;
    height: 326px;
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
  .productContent__carouselPriceMain{
    padding-right: 0;
    padding-left: 0;
  }
  .productContent__topLeft{
    display: none;
  }
  .productContent__carouselDescription{
    margin-top: 14px;
  }
  .productContent__carouselText{
    height: 82px;
    overflow: hidden;
    line-height: 26px;
  }
  .productContent__carouselImgMain{
    justify-content: flex-start;
  }



}


</style>
