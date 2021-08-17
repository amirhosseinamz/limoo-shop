<template>
  <div class="w-100 productContent__sliderWrapper">
        <div class="w-100 productContent__brandItems">
                <div :class="data.nameClass" v-for="data in products" :key="data.id" class="carousel-cell productContent__carousel ">
                    <div class="productContent__carouselContent w-100">
                            <span class="productContent__carouselLine"></span>
                            <div class="productContent__carouselImgMain w-100">
                              <img class="productContent__carouselImgItem" :src="data.image" alt="">
                            </div>
                            <div class="productContent__carouselData">
                            <div class="w-100">

                              <h3 v-if="data.id === 1" class="productContent__carouselDataTitle">
                                {{getTextByTextKey('home_quality_guarantee')}}
                              </h3>

                               <h3 v-if="data.id === 2" class="productContent__carouselDataTitle">
                                 {{getTextByTextKey('home_immediate_sending')}}
                              </h3>


                              <h3 v-if="data.id === 3" class="productContent__carouselDataTitle">
                                {{getTextByTextKey('home_24_hour_support')}}
                              </h3>


                              <h3 v-if="data.id === 4" class="productContent__carouselDataTitle">
                                {{getTextByTextKey('home_7_days_warranty')}}
                              </h3>

                            </div>
                        </div>
                    </div>
            </div>
        </div>

  </div>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";



export default {
    computed: {
      products() {
        return this.$store.getters["home/home/brandIntroduction"];
      }
    },

    methods: {
      getTextByTextKey,
    },

};
</script>

<style lang="scss" scoped>
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
.productContent__carousel{
  width: 25%;
  height: 158px;
  background: $white;
  margin-right: auto;
  margin-left: auto;
}
.productContent__mainSlider{
  position: relative;
}
.productContent__carouselContent{
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
  flex-flow: column;
  cursor: pointer;
  position: relative;
  height: 100%;
}
.productContent__carouselDataTitle{
  font-size: 14px;
  line-height: 1.9em;
  color: $black-topic;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  overflow: hidden;
}
.productContent__carouselImgMain{
  @include display-flex();
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
}
.productContent__carouselImgItem{
  height: 73px;
  width: 73px;
}
.productContent__carouselData{
  margin-top: 30px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
.productContent__carouselLine{
  @include display-flex();
  background: $border-gray-bg;
  width: 2px;
  height: 100%;
  position: absolute;
  left: 0;
  border-radius: 8px;
  top: 0;
}
.productContent__brandItems{
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}
.productContent__carousel:last-of-type .productContent__carouselLine{
  display: none;
}
.startup .productContent__carouselImgItem{
  height: 82px;
  width: auto;
}
.startup .productContent__carouselData{
  margin-top: 21px;
}


@media (max-width: 760px) {
  .productContent__carousel{
    width: 50%;
  }
  .productContent__carousel:nth-child(1){
    margin-bottom: 64px;
  }
  .productContent__carousel:nth-child(2n) .productContent__carouselLine{
    display: none;
  }
  .productContent__carouselData{
    margin-bottom: 18px;
  }

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
}

@media (max-width: 485px) {
  .productContent__carouselImgItem{
    width: 49px;
    height: 49px;
  }
  .productContent__carouselData{
    margin-top: 18px;
  }
  .productContent__carousel{
    height: 109px;
  }
  .productContent__catTitle{
    font-size: 14px;
  }
  .productContent__topLeft{
    display: none;
  }
  .startup .productContent__carouselImgItem{
    height: 56px;
  }
  .startup .productContent__carouselData{
    margin-top: 12px;
  }

}

@media (max-width: 485px) {
  .productContent__carouselDataTitle{
    font-size: 12px;
  }
}



</style>
