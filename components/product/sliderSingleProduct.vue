<template>
  <div id="singleProduct--slider" class=" page__home-introduction-items ">
          <img  ref="imgCheckHieghtSlider" class="page__home__introduction__slider-pic img--display" :src="products[0].image" alt="">

              <div :style="heightSliderImg" class="page__home__introduction-slider-main main-carousel w-100">
                      <div :style="heightSliderImg" @click="switchLink($event,data)" v-for="data in products" :key="data.id" class="carousel-cell w-100">
                                <div class="page__home__introduction__slider w-100">
                                      <img  ref="imgCarouselCellSlider" class="page__home__introduction__slider-pic " :src="data.image" alt="">
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
      products  : { type: [Object,Array], default: [] },
    },

    data() {
      return {
        slider              : {},
        heightSliderImg     : {height:''},
        updateSlider        : 0,
        sliderLastUpdateImg : [
          {
            extraLarg      : '',
            larg           : '',
            medium         : '',
            small          : '',
            exteraSmall    : '',
            mobile         : '',
            id             : 1,
          },
          {
            extraLarg      : '',
            larg           : '',
            medium         : '',
            small          : '',
            exteraSmall    : '',
            mobile         : '',
            id             : 2,
          },
          {
            extraLarg      : '',
            larg           : '',
            medium         : '',
            small          : '',
            exteraSmall    : '',
            mobile         : '',
            id             : 3,
          },
        ],

      }
    },

    mounted() {
      this.getOptionSLider();


      this.detectedResizeBrowser();
      this.updateSliderImg();

      if (this.products.length !== 0) {
        setTimeout( () =>{
          this.updateHightSlider();
        }, 1000);
      }

    },

    watch: {
      introductionProduct(data) {
        console.log(data);
      },
    },

    computed: {

    },

    methods: {
      getOptionSLider(){
        let Flickity       = require("flickity-fade")
        let sliderOptions  = new Flickity( '.main-carousel', {
          accessibility   : true,
          adaptiveHeight  : true,
          autoPlay        : false,
          // rightToLeft     : true,
          cellAlign       : 'right',
          prevNextButtons : false,
          imagesLoaded    : true,
          fade            : true,
        });

        this.slider       = sliderOptions;
      },

      switchLink(event,data){
        event.preventDefault();
      },

      detectedResizeBrowser(){
        window.addEventListener("resize", ()=>{
            const width                 = window.innerWidth;

            this.updateSliderImg();
            this.updateHightSlider();

            setTimeout( () =>{
              this.updateSliderImg();
              this.updateHightSlider();
            }, 1000);

          }, true);
      },

      updateHightSlider(){
        const imgCheckHieghtSlider  = this.$refs.imgCheckHieghtSlider.clientHeight;
        const imgCarouselCellSlider = this.$refs.imgCarouselCellSlider;

        this.heightSliderImg.height = `${imgCheckHieghtSlider}px`;
        this.slider.resize();
      },

      updateSliderImg(){
          const getWindowWidth = window.innerWidth;


          const getImg    = (width,height,getSizeUpdate) => {
              this.sliderLastUpdateImg.map((content,index)=>{

                if (content[getSizeUpdate] === '') {
                    for (let key in content) {
                        if (key === getSizeUpdate) {
                          // فقط یک بار اجرا شده و پس از گرفتن عکس مورد نظر اجرا نخواهد شد //

                          if (index === 0) {
                            content[key] = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/single_product_img2.jpg`;
                          }

                          if (index === 1) {
                            content[key]   = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/apple-watch-series-6-gps-cellurar2%20.png`;
                          }

                          if (index === 2) {
                            content[key]   = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/apple-watch-series-6-gps-cellurar2%20.png`;
                          }


                        }
                    }
                }


              })
          }

          const updateImg = (getSizeUpdate) => {
            this.sliderLastUpdateImg.map((contentLastGetImg,indexGetImg)=>{
                  const getCurrentSizeImg = contentLastGetImg[getSizeUpdate];
                  this.products.map((contentSlider,indexSlider)=>{
                      if (contentLastGetImg.id === contentSlider.id ) {
                        contentSlider.image = getCurrentSizeImg;
                      }
                  })
            })

          }

          if (485 >= getWindowWidth) {
            getImg(328,328,'mobile');
            updateImg('mobile');
          }




      },


    },

};
</script>

<style lang="scss" scoped>
  .page__home-introduction-items{
    @include display-flex();
    align-items: flex-start;
    position: relative;
    width: 100%;
    margin-top: toRem(8);
  }
  .page__home__introduction__slider{
    border-radius: toRem(12);
    width: 100%;
    cursor: pointer;
    height: toRem(457);
  }
  .page__home__introduction__slider-pic{
    height: 100%;
    border-radius: toRem(12);
    pointer-events: none;
    object-position: 50% 50%;
    object-fit: cover;
  }
  .page__home__introduction-item-slider-content {
    height: toRem(460);
    grid-column: 1/span 2;
    grid-row: 1/span 2;
    position: relative;
  }
  .introduction__left{
    @include display-flex();
    align-items: flex-start;
    width: 514px;
    flex-flow: column;
    margin-right: toRem(19);
  }
  .introduction__leftimg{
    border-radius: 12px;
    height: 100%;
    width: 100%;
  }
  .carousel-cell {
    width: 100%;
  }
  .pageHome__Slider-link{
    height: 100%;
    @include display-flex();
    align-items: flex-start;
  }
  .introduction--link{
    @include display-flex();
    position: relative;
    align-items: flex-start;
  }
  .img--display{
    opacity: 0;
    pointer-events: none;
    position: absolute;
    height: 100%;
    right: 0;
    left:0;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
  .page__home-introduction-items{
    display: none;
  }

  @media (max-width: 1220px) {
    .page__home-introduction-items{
      height: toRem(336);
    }
    .page__home__introduction-item-slider-content{
      height: toRem(336);
    }
    .page__home__introduction__slider{
      height: toRem(336);
    }
  }

  @include md {
    .page__home-introduction-items{
      height: auto;
    }
    .page__home__introduction-item-slider-content{
      height: auto;
    }
    .introduction__left{
      display: none;
    }
    .carousel-cell{
      width: 100%;
    }
    .page__home__introduction__slider-pic{
      height: 100%;
      width: 100%;
    }
    .introduction--link{
      display: none;
    }
    .page__home__introduction__slider{
      height: auto;
    }
    .page__home__introduction-item-slider-content{
      width: 100%;
      height: auto;
    }
    .img--display{
      height: auto;
    }

  }

  @include sm {
    .page__home-introduction-items{
      @include display-flex();
      width: toRem(328);
      margin-right: auto;
      margin-left: auto;
    }

  }
  @include xs {
    .page__home__introduction__slider{
      height: auto;
    }
    .page__home-introduction-items{
      width: 100%;
    }
  }

  @media (max-width: 420px) {

  }

  @media (max-width: 280px) {

  }







</style>
