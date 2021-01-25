<template>
  <div class="w-100 page__home-introduction-items">
        <div class="w-100 page__home__introduction-item-slider-content">
              <div class="page__home__introduction-slider-main main-carousel w-100">
                      <div class="carousel-cell w-100">
                            <div class="page__home__introduction__slider w-100">
                                <img class="page__home__introduction__slider-pic " src="/img/apple-watch-series-4-hermes-double1.svg" alt="">
                            </div>
                      </div>
                      <div class="carousel-cell w-100">
                            <div class="page__home__introduction__slider w-100">
                                <img class="page__home__introduction__slider-pic " src="/img/apple-watch-series-4-hermes-double1.svg" alt="">
                            </div>
                      </div>
              </div>
        </div>

        <div class="introduction__left">
            <div class="introduction__leftitem w-100 ">
                    <img class="introduction__leftimg h-100" src="/img/apple-watch-series-3-gps-cellurar1.svg" alt="">
            </div>
            <div class="introduction__leftitem2 w-100">
                    <img class="introduction__leftimg h-100" src="/img/apple-watch-series-6-desktop-min1.svg" alt="">
            </div>
        </div>
  </div>
</template>

<script>


export default {
    components: {
    },

    props: {
      // allProvince           : { type: [Object,Array], default: [] },
    },

    data() {
      return {
      }
    },

    mounted() {
      let Flickity       = require("flickity")
      let sliderOptions  = new Flickity( '.page__home__introduction-slider-main', {
        accessibility   : true,
        adaptiveHeight  : false,
        autoPlay        : false,
        // rightToLeft     : true,
        cellAlign       : 'right',
        prevNextButtons : false,
      });
    },

    computed: {

    },

    methods: {

    },

};
</script>

<style lang="scss" scoped>
  .page__home-introduction-items{
    @include display-flex();
    align-items: flex-start;
  }
  .page__home__introduction__slider{
    border-radius: 12px;
    width: 100%;
  }
  .page__home__introduction__slider-pic{
    height: 457px;
    border-radius: 12px;
  }
  .page__home__introduction-item-slider-content {
    width: 61.7%;
    // height: 460px;
  }
  .introduction__left{
    @include display-flex();
    align-items: flex-start;
    width: 514px;
    flex-flow: column;
    margin-right: 19px;
  }
  .introduction__leftitem2{
    height: 294px;
  }
  .introduction__leftitem{
    height: 150px;
    margin-bottom: 16px;
  }
  .introduction__leftimg{
    border-radius: 12px;
    height: 100%;
    width: 100%;
  }
  .carousel-cell {
    width: 850px;
  }



  @media (max-width: 1328px) {

  }

  @media (max-width: 1220px) {
    .introduction__leftitem2{
      height: 267px;
    }
    .page__home__introduction__slider-pic{
      height: 431px;
    }
  }

  @media (max-width: 1024px) {
    .page__home__introduction__slider-pic{
      height: 413px;
    }
    .introduction__leftitem2{
      height: 248px;
    }
  }

  @media (max-width: 960px) {

  }

  @media (max-width: 600px) {

  }






</style>
