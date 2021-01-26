<template>
  <div class="w-100 productContent">

      <div class="productContent__items w-100">
            <div class="productContent__mainSlider main-carousel w-100">
                    <div class="carousel-cell productContent__carousel w-100">
                        <div class="productContent__carouselContent w-100">
                                <div class="productContent__carouselImgMain">
                                    <img class="productContent__carouselImgItem" src="" alt="">
                                </div>

                                <div class="productContent__carouselData">
                                  <h3 class="productContent__carouselDataTitle">لپ تاب سری جدید آلمینیوم آبی با بند</h3>
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
      // allProvince           : { type: [Object,Array], default: [] },
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
        autoPlay        : false,
        // rightToLeft     : true,
        cellAlign       : 'right',
        prevNextButtons : false,
        imagesLoaded    : true,
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
  width: 313px;
  height: 277px;
  background: #ccc;
}
.productContent__carouselContent{
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
  flex-flow: column;
  border-right: solid 1px $gray-border;
}
.productContent__carouselDataTitle{
  font-size: 14px;
  line-height: 1.9em;
}


</style>
