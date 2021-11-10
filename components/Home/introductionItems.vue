<template>
  <div class=" page__home-introduction-items">
<!--    <base-carousel-->
<!--    :items-to-show="1.25"-->
<!--    :center-mode="true"-->
<!--    :infinite-scroll="true"-->
<!--    class="introduction-carousel"-->
<!--    >-->
<!--      <template #slide>-->
<!--        <li class="introduction-carousel-item" v-for="item in introductionCarouselData" :key="item.id" :style="{ backgroundImage: `url('${item.img}')` }">-->

<!--        </li>-->
<!--      </template>-->
<!--    </base-carousel>-->

      <hooper ref="carousel" :infiniteScroll="true" :vertical="false" :itemsToShow="3" :center-mode="true" :rtl="true">
        <slide v-for="item in introductionCarouselData" :key="item.id">
          <img :src="item.img" alt="">
<!--          <li class="introduction-carousel-item"  :style="{ backgroundImage: `url('${item.img}')` }">-->

<!--          </li>-->
        </slide>
      </hooper>
  </div>
</template>

<script>

import {Hooper, Slide} from "hooper";
import 'hooper/dist/hooper.css';

export default {

  components: {
    Hooper,
    Slide,
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
      },
      introductionCarouselData() {
        return this.$store.getters["home/home/introductionCarouselData"];
      },
    },

    mounted() {
      this.createSizeImg();
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

                if (content[getSizeUpdate] === '') {
                    for (let key in content) {
                        if (key === getSizeUpdate) {
                          // فقط یک بار اجرا شده و پس از گرفتن عکس مورد نظر اجرا نخواهد شد //

                          if (index === 0) {
                            //let url    = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/picTest1.jpg`;
                            let url = `https://dkstatics-public.digikala.com/digikala-adservice-banners/a6fe0dc88044a86a29bdf15e8712dccd12c96846_1630843228.jpg?x-oss-process=image/quality,q_80`;
                            content[key] = url;
                          }

                          if (index === 1) {
                            //let url      = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/apple-watch-series-6-gps-cellurar2%20.png`;
                            let url = `https://dkstatics-public.digikala.com/digikala-adservice-banners/1abc5cba71e8daf0abbe98f692bb43bca58969c2_1630497108.jpg?x-oss-process=image/quality,q_80`;
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
              if (content[getSizeUpdate] === '') {
                  for (let key in content) {
                      if (key === getSizeUpdate) {
                        // فقط یک بار اجرا شده و پس از گرفتن عکس مورد نظر اجرا نخواهد شد //

                        if (index === 0) {
                          const pic1Size   = getSizeImg.pic1;
                          //const url        = `https://statics-develop.diver.ir/1/fill/${pic1Size.width}/${pic1Size.height}/sm/true/plain/s3://limoo/product/bahare web.jpg`;
                          const url = `https://dkstatics-public.digikala.com/digikala-adservice-banners/cd4bbc9e83e8b4e83d0ce2333b18ffd6a87dbc51_1631276561.jpg?x-oss-process=image/quality,q_80`;
                          content[key]     = url;
                        }

                        if (index === 1) {
                          const pic2Size   = getSizeImg.pic2;
                          const width      = pic2Size.width;
                          const height     = pic2Size.height;

                          //const url      = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/new-baner-web4.jpg`;
                          const url = `https://dkstatics-public.digikala.com/digikala-adservice-banners/d4a5250311c36b764bc76e039d741d832306a1ae_1631272605.jpg?x-oss-process=image/quality,q_80`;
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
    position: relative;
    width: 100%;

    .introduction-carousel {
      height: toRem(300);
      width: 100%;
    }
    .introduction-carousel-item {
      background-size: cover;
      background-repeat: no-repeat;
      width: toRem(600);
      height: toRem(300);
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .hooper-slide {
    padding: 10px;
  }





</style>
