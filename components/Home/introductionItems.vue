<template>
  <div class=" page__home-introduction-items">

        <div class="w-100 page__home__introduction-item-slider-content home__item">
          <img @load="complateLoadedImg()"  ref="imgCheckHieghtSlider" class="page__home__introduction__slider-pic img--display" :src="introductionProduct[0].image" alt="">

              <div :style="heightSliderImg" class="page__home__introduction-slider-main main-carousel w-100">
                      <div :style="heightSliderImg" @click="switchLink($event,data)" v-for="data in introductionProduct" :key="data.id" class="carousel-cell w-100">
                                <div class="page__home__introduction__slider w-100">
                                  <!-- برای دیدن لینک ها توسط کاربر گذاشته شده و در صورتی که کاربر نیاز به تغییر تب به واسطه آدرس آیتم باشد می تواند تب خود را تغییر دهد -->
                                    <NuxtLink
                                    class="w-100 pageHome__Slider-link"
                                    :to=" '/' + title.sliderItemHref + '/' + data.id"
                                    target="_blank"
                                    >
                                      <img  ref="imgCarouselCellSlider" class="page__home__introduction__slider-pic " :src="data.image" alt="">
                                    </NuxtLink>
                                </div>

                                <!-- دلیل ساخت دوتا لینک فهم گوگل برای سئو  هستش -->

                                <NuxtLink
                                class="w-100 d-none"
                                :to=" '/' + title.sliderItemHref + '/' + data.id"
                                :id="'link--introduction' + data.id"
                                >
                                </NuxtLink>
                      </div>
              </div>
        </div>

        <NuxtLink class="w-100 h-100 introduction--link" to="/profile"  >
          <img class="introduction__leftimg h-100" :src="leftSliderHeaderImg[0].image" alt="">
        </NuxtLink>
        <NuxtLink class="w-100 h-100 introduction--link" to="/profile"  >
          <img class="introduction__leftimg h-100" :src="leftSliderHeaderImg[1].image" alt="">
        </NuxtLink>


  </div>
</template>

<script>


export default {
    components: {
    },

    props: {
      title                  : { type: Object, default: {} },
      leftSliderHeaderImg    : { type: [Object,Array], default: [] },
    },

    data() {
      return {
        slider                   : {},
        heightSliderImg          : {height:''},
        updateSlider             : 0,
        sizeImg                  : {
            extraLarg      : '',
            larg           : '',
            medium         : '',
            small          : '',
            exteraSmall    : '',
            mobile         : '',
         },
        sliderLastUpdateImg      : [

        ],
        coverLeftLastUpdateImg   : [
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
              }
          ]

      }
    },
    computed: {
      introductionProduct() {
        return this.$store.getters["home/home/introductionProduct"];
      }
    },

    mounted() {
      this.createSizeImg();
      this.getOptionSLider();

      this.slider.on( 'staticClick', ( event, pointer, cellElement, cellIndex ) =>{
          this.introductionProduct.map((content,indexSlider)=>{
              if (indexSlider === cellIndex) {
                  const linkCurrentItem = document.getElementById(`link--introduction${content.id}`);
                  linkCurrentItem.click();
                  // دلیل تغییر این قسمت به خاطر فهم گوگل برای سئو هستش //
              }
          })
      });

      // this.detectedResizeBrowser();
      // this.updateSliderImg();
      // this.updateSliderLeftTopImg();
      //
      // if (this.introductionProduct.length != 0) {
      //   setTimeout( () =>{
      //     this.updateHightSlider();
      //   }, 1000);
      // }
    },

    methods: {
     createSizeImg(){
        this.introductionProduct.map((content)=>{
          this.sliderLastUpdateImg = [...this.sliderLastUpdateImg,content];
        });

        this.sliderLastUpdateImg.map((content)=>{
          for (let key in this.sizeImg) {
             content[key] = this.sizeImg[key];
          }
        });

      },

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
            this.updateHightSlider();
            this.updateSliderLeftTopImg();

            setTimeout( () =>{
              this.updateSliderImg();
              this.updateHightSlider();
              this.updateSliderLeftTopImg()
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

                if (content[getSizeUpdate] == '') {
                    for (let key in content) {
                        if (key == getSizeUpdate) {
                          // فقط یک بار اجرا شده و پس از گرفتن عکس مورد نظر اجرا نخواهد شد //

                          if (index == 0) {
                            const url    = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/picTest1.jpg`;
                            content[key] = url;
                          }

                          if (index == 1) {
                            const url      = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/apple-watch-series-6-gps-cellurar2%20.png`;
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
              this.$store.dispatch("home/home/updateImg",  { contentLastGetImg, getCurrentSizeImg })
            })

          }

          // if (1300 <= getWindowWidth) {
            getImg(915,460,'extraLarg');
            updateImg('extraLarg');
          // }



          if (1220 >= getWindowWidth) {
            getImg(772,336,'small');
            updateImg('small');
          }

          if (1024 >= getWindowWidth) {
            getImg(642,336,'exteraSmall');
            updateImg('exteraSmall');
          }


          //
          // if (960 >= getWindowWidth) {
          //   getImg(960,300,'exteraSmall');
          //   updateImg('exteraSmall');
          // }
          //
          // if (485 >= getWindowWidth) {
          //   getImg(485,200,'mobile');
          //   updateImg('mobile');
          // }


      },

      updateSliderLeftTopImg(){
        const getWindowWidth = window.innerWidth;


        const getImg    = (getSizeImg,getSizeUpdate) => {
            this.coverLeftLastUpdateImg.map((content,index)=>{
              if (content[getSizeUpdate] == '') {
                  for (let key in content) {
                      if (key == getSizeUpdate) {
                        // فقط یک بار اجرا شده و پس از گرفتن عکس مورد نظر اجرا نخواهد شد //

                        if (index == 0) {
                          const pic1Size   = getSizeImg.pic1;
                          const url        = `https://statics-develop.diver.ir/1/fill/${pic1Size.width}/${pic1Size.height}/sm/true/plain/s3://limoo/product/bahare web.jpg`;
                          content[key]     = url;
                        }

                        if (index == 1) {
                          const pic2Size   = getSizeImg.pic2;
                          const width      = pic2Size.width;
                          const height     = pic2Size.height;

                          const url      = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/new-baner-web4.jpg`;
                          content[key]     = url;
                        }


                      }
                  }
              }


            })
        }

        const updateImg = (getSizeUpdate) => {
          this.coverLeftLastUpdateImg.map((contentLastGetImg)=>{
              const getCurrentSizeImg = contentLastGetImg[getSizeUpdate];
              this.leftSliderHeaderImg.map((contentOriginal)=>{
                if (contentOriginal.id == contentLastGetImg.id) {

                  contentOriginal.image = getCurrentSizeImg;
                }
              })
          })

        }

        // if (1380 <= getWindowWidth) {
          const sizeImg = {
            pic1 : {
              width  : 449,
              height : 150,
            },
            pic2 : {
              width  : 449,
              height : 294,
            },
          }

          getImg(sizeImg,'extraLarg');
          updateImg('extraLarg');
        // }


        if (1330 >= getWindowWidth) {
          // getImg(866,477,'larg');

          const sizeImg = {
            pic1 : {
              width  : 360,
              height : 150,
            },
            pic2 : {
              width  : 369,
              height : 230,
            },
          }

          getImg(sizeImg,'larg');
          updateImg('larg');
        }

        if (1220 >= getWindowWidth) {
          const sizeImg = {
            pic1 : {
              width  : 326,
              height : 120,
            },
            pic2 : {
              width  : 326,
              height : 150,
            },
          }

          getImg(sizeImg,'medium');
          updateImg('medium');
        }

        if (1024 >= getWindowWidth) {
          // getImg(866,477,'larg');

          const sizeImg = {
            pic1 : {
              width  : 360,
              height : 150,
            },
            pic2 : {
              width  : 369,
              height : 220,
            },
          }

          getImg(sizeImg,'small');
          updateImg('small');
        }



      },

      complateLoadedImg(){
        this.detectedResizeBrowser();
        this.updateSliderImg();
        this.updateSliderLeftTopImg();

        if (this.introductionProduct.length !== 0) {
          setTimeout( () =>{
            this.updateHightSlider();
          }, 1000);
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
    width: 100%;
  }
  .page__home__introduction__slider{
    border-radius: 12px;
    width: 100%;
    cursor: pointer;
    height: 457px;
    // height: 100%;
  }
  .page__home__introduction__slider-pic{
    height: 100%;
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
    // object-position: 50% 50%;
    // object-fit: cover;
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

  @media (max-width: 1330px) {

  }

  @media (max-width: 1220px) {
    .page__home-introduction-items{
      height: 336px;
    }
    .page__home__introduction-item-slider-content{
      height: 336px;
    }
    .page__home__introduction__slider{
      height: 336px;
    }
    .page__home-introduction-items{
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 960px) {
    .page__home-introduction-items{
      max-width: auto;
      height: auto;
    }
    .page__home__introduction-item-slider-content{
      max-width: auto;
      height: auto;
    }

  }


  @media (max-width: 960px) {
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

  }

  @media (max-width: 460px) {
    .page__home__introduction__slider{
      height: auto;
    }
  }

  @media (max-width: 420px) {

  }

  @media (max-width: 280px) {

  }







</style>
