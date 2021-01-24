<template>
  <div class="w-100 page__home-introduction-items">
        <div class="w-100 page__home__introduction-item-slider-content">
              <div class="page__home__introduction-slider-main main-carousel w-100">
                      <div class="carousel-cell w-100">
                            <div class="page__home__introduction__slider w-100">
                                <img class="page__home__introduction__slider-pic w-100" src="/img/apple-watch-series-4-hermes-double1.svg" alt="">
                            </div>
                      </div>
                      <div class="carousel-cell w-100">
                            <div class="page__home__introduction__slider w-100">
                                <img class="page__home__introduction__slider-pic w-100" src="/img/apple-watch-series-4-hermes-double1.svg" alt="">
                            </div>
                      </div>
              </div>
        </div>

        <div class="w-100 page__home__introduction-item-pic-main">

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
        cellAlign       : 'center',
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
    flex-flow: column;
  }
  .page__home__introduction__slider{
    border-radius: 12px;
    height: 462px;
  }
  .page__home__introduction__slider-pic{
    height: 100%;
    border-radius: 12px;
  }
  .page__home__introduction-item-slider-content {
    width: 846px;
  }
  


</style>
