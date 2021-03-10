<template>
  <div class="w-100 page__home-introduction-items">

        <div class="w-100 page__home__introduction-item-slider-content home__item">
          <img ref="imgCheckHieghtSlider" class="page__home__introduction__slider-pic img--display" :src="introductionProduct[0].image" alt="">

              <div  class="page__home__introduction-slider-main main-carousel w-100">
                      <div :style="heightSliderImg" @click="switchLink($event,data)" v-for="data in introductionProduct" :key="data.id" class="carousel-cell w-100">
                                <div class="page__home__introduction__slider w-100">
                                    <NuxtLink
                                    class="w-100 pageHome__Slider-link"
                                    :to=" '/' + title.sliderItemHref + '/' + data.id"
                                    target="_blank"
                                    >
                                      <img  ref="imgCarouselCellSlider" class="page__home__introduction__slider-pic " :src="data.image" alt="">
                                    </NuxtLink>
                                </div>
                      </div>
              </div>
        </div>

        <NuxtLink class="w-100 h-100 introduction--link" to="/profile"  >
          <img class="introduction__leftimg h-100" src="/img/apple-watch-series-3-gps-cellurar1.svg" alt="">
        </NuxtLink>
        <NuxtLink class="w-100 h-100 introduction--link" to="/profile"  >
          <img class="introduction__leftimg h-100" src="/img/apple-watch-series-6-desktop-min1.svg" alt="">
        </NuxtLink>
        <!-- <div class="introduction__left home__item">
            <div class="introduction__leftitem w-100 ">
            </div>
            <div class="introduction__leftitem2 w-100">
            </div>
        </div> -->
  </div>
</template>

<script>


export default {
    components: {
    },

    props: {
      introductionProduct    : { type: [Object,Array], default: [] },
      title                  : { type: Object, default: {} },
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
          },
          {
            extraLarg      : '',
            larg           : '',
            medium         : '',
            small          : '',
            exteraSmall    : '',
            mobile         : '',
          },
        ],

      }
    },

    mounted() {
      this.getOptionSLider();

      this.slider.on( 'staticClick', ( event, pointer, cellElement, cellIndex ) =>{
          this.introductionProduct.map((content,indexSlider)=>{
              if (indexSlider == cellIndex) {
                  this.$router.push(`/${this.title.sliderItemHref}/${content.id}`);
              }
          })
      });

      this.detectedResizeBrowser();
      this.updateSliderImg()

      if (this.introductionProduct.length != 0) {
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
        let sliderOptions  = new Flickity( '.page__home__introduction-slider-main', {
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
            this.updateHightSlider()
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

                if (content[getSizeUpdate] == '') {
                    for (let key in content) {
                        if (key == getSizeUpdate) {
                          // فقط یک بار اجرا شده و پس از گرفتن عکس مورد نظر اجرا نخواهد شد //

                          if (index == 0) {
                            const url    = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/picTest1.jpg`;
                            content[key] = url;
                          }

                          if (index == 1) {
                            const url      = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/picTest1.jpg`;
                            content[key]   = url;
                          }

                        }
                    }
                }


              })
          }

          const updateImg = (getSizeUpdate) => {
            this.sliderLastUpdateImg.map((contentLastGetImg,indexGetImg)=>{
                const getCurrentSizeImg = contentLastGetImg[getSizeUpdate];
                this.introductionProduct.map((contentSlider,indexSlider)=>{
                  contentSlider.image = getCurrentSizeImg;
                })
            })

          }


          if (1380 >= getWindowWidth) {
            getImg(915,460,'extraLarg');
            updateImg('extraLarg');
          }


          // if (1400 < getWindowWidth) {
              if (1380 >= getWindowWidth) {
                getImg(866,477,'larg');
                updateImg('larg');
              }
          // }



          // if (1200 < getWindowWidth) {
              if (1300 >= getWindowWidth) {
                getImg(826,477,'medium');
                updateImg('medium');
              }
          // }


          if (1200 >= getWindowWidth) {
            getImg(760,477,'small');
            updateImg('small');
          }

          if (960 >= getWindowWidth) {
            getImg(960,300,'exteraSmall');
            updateImg('exteraSmall');
          }

          if (485 >= getWindowWidth) {
            getImg(485,200,'mobile');
            updateImg('mobile');
          }


      }

    },

};
</script>

<style lang="scss" scoped>
  .page__home-introduction-items{
    @include display-flex();
    align-items: flex-start;
    max-height: 457px;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    grid-template-rows: repeat(1,1fr);
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
  }
  .page__home__introduction__slider{
    border-radius: 12px;
    width: 100%;
    cursor: pointer;
    height: 457px;
  }
  .page__home__introduction__slider-pic{
    // height: 457px;
    border-radius: 12px;
    pointer-events: none;
    object-position: 50% 50%;
    object-fit: cover;
  }
  .page__home__introduction-item-slider-content {
    // width: 61.7%;
    height: 460px;
    grid-column: 1/span 2;
    grid-row: 1/span 2;
    position: relative;
  }
  .introduction__left{
    @include display-flex();
    align-items: flex-start;
    width: 514px;
    flex-flow: column;
    margin-right: 19px;
  }
  .introduction__leftitem2{
    // height: 294px;
  }
  .introduction__leftitem{
    // height: 150px;
    // margin-bottom: 16px;
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





  @media (max-width: 1328px) {

  }

  @media (max-width: 1220px) {
    // .introduction__leftitem2{
    //   height: 267px;
    // }
    // .page__home__introduction__slider-pic{
    //   height: 431px;
    // }

    .introduction__leftimg{
      object-position: 50% 50%;
      object-fit: cover;
    }
  }


  @media (max-width: 1100px) {
    .page__home__introduction__slider-pic{
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 1024px) {

    // .introduction__leftitem2{
    //   height: 248px;
    // }
  }

  @media (max-width: 960px) {
    .introduction__left{
      display: none;
    }
    .carousel-cell{
      width: 100%;
    }
    .page__home__introduction__slider-pic{
      // height: auto;
      width: 100%;
    }
    .introduction--link{
      display: none;
    }
    .page__home-introduction-items{
      display: grid;
      grid-auto-rows: 1fr;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(1,1fr);
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

  @media (max-width: 600px) {
    // .page__home__introduction__slider-pic{
    //   height: 220px;
    // }
  }

  @media (max-width: 460px) {
    // .page__home__introduction__slider-pic{
    //   height: 180px;
    // }
    // .page__home__introduction__slider-pic{
    //   height: 200px;
    // }
    .page__home__introduction__slider{
      height: auto;
    }
  }

  @media (max-width: 420px) {
    // .page__home__introduction__slider-pic{
    //   max-height: 185px;
    // }
  }

  @media (max-width: 280px) {
    // .page__home__introduction__slider-pic{
    //   height: 141px;
    // }
  }







</style>
