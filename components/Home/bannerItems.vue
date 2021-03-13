<template>
  <div class="w-100 bannerItems">
      <div class="bannerItems__item">
        <NuxtLink class="w-100 h-100 d-flex" to="/profile"  >
          <img class="bannerItems__itemPic h-100" :src="bannerCategory[0].image" alt="">
        </NuxtLink>
      </div>
      <div class="bannerItems__item">
        <NuxtLink class="w-100 h-100 d-flex" to="/profile"  >
          <img class="bannerItems__itemPic h-100" :src="bannerCategory[1].image" alt="">
        </NuxtLink>
      </div>
      <div class="bannerItems__item">
        <NuxtLink class="w-100 h-100 d-flex" to="/profile"  >
          <img class="bannerItems__itemPic h-100" :src="bannerCategory[2].image" alt="">
        </NuxtLink>
      </div>
  </div>
</template>

<script>


export default {
    components: {
    },

    props: {
      bannerCategory           : { type: [Object,Array], default: [] },
    },

    data() {
      return {
        banners   : [
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
              }
          ]
      }
    },

    mounted() {
      this.updateSizeImg();
      this.detectedResizeBrowser();
    },

    computed: {

    },

    methods: {
      updateSizeImg(){
        const getWindowWidth = window.innerWidth;


        const getImg    = (getSizeImg,getSizeUpdate) => {
            this.banners.map((content,index)=>{
              if (content[getSizeUpdate] == '') {
                  for (let key in content) {
                      if (key == getSizeUpdate) {
                        // فقط یک بار اجرا شده و پس از گرفتن عکس مورد نظر اجرا نخواهد شد //

                        if (index == 0) {
                          const pic2Size   = getSizeImg.pic1;
                          const width      = pic2Size.width;
                          const height     = pic2Size.height;

                          const url        = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/apple-watch-series-4-gps-cellurar2%20.png`;
                          content[key]     = url;
                        }

                        if (index == 1) {
                          const pic2Size   = getSizeImg.pic2;
                          const width      = pic2Size.width;
                          const height     = pic2Size.height;

                          const url      = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/new-baner-web4.jpg`;
                          content[key]     = url;
                        }

                        if (index == 2) {
                          const pic2Size   = getSizeImg.pic3;
                          const width      = pic2Size.width;
                          const height     = pic2Size.height;

                          const url      = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/apple-watch-series-6-gps-cellurar2%20.png`;
                          content[key]     = url;
                        }


                      }
                  }
              }


            })
        }

        const updateImg = (getSizeUpdate) => {
          this.banners.map((contentLastGetImg)=>{
              const getCurrentSizeImg = contentLastGetImg[getSizeUpdate];
              this.bannerCategory.map((contentOriginal)=>{
                if (contentOriginal.id == contentLastGetImg.id) {

                  contentOriginal.image = getCurrentSizeImg;
                }
              })
          })

        }

        if (1380 <= getWindowWidth) {
          const sizeImg = {
            pic1 : {
              width  : 449,
              height : 244,
            },
            pic2 : {
              width  : 449,
              height : 244,
            },
            pic3 : {
              width  : 449,
              height : 244,
            },
          }

          getImg(sizeImg,'extraLarg');
          updateImg('extraLarg');
        }


        if (1024 >= getWindowWidth) {
          const sizeImg = {
            pic1 : {
              width  : 316,
              height : 193,
            },
            pic2 : {
              width  : 316,
              height : 193,
            },
            pic3 : {
              width  : 316,
              height : 193,
            },
          }

          getImg(sizeImg,'larg');
          updateImg('larg');
        }

        if (960 >= getWindowWidth) {
          const sizeImg = {
            pic1 : {
              width  : 445,
              height : 233,
            },
            pic2 : {
              width  : 445,
              height : 233,
            },
            pic3 : {
              width  : 445,
              height : 233,
            },
          }

          getImg(sizeImg,'medium');
          updateImg('medium');
        }

        if (768 >= getWindowWidth) {
          const sizeImg = {
            pic1 : {
              width  : 351,
              height : 169,
            },
            pic2 : {
              width  : 351,
              height : 169,
            },
            pic3 : {
              width  : 351,
              height : 169,
            },
          }

          getImg(sizeImg,'small');
          updateImg('small');
        }

        if (485 >= getWindowWidth) {
          const sizeImg = {
            pic1 : {
              width  : 465,
              height : 317,
            },
            pic2 : {
              width  : 465,
              height : 317,
            },
            pic3 : {
              width  : 465,
              height : 317,
            },
          }

          getImg(sizeImg,'exteraSmall');
          updateImg('exteraSmall');
        }





      },

      detectedResizeBrowser(){
        window.addEventListener("resize", ()=>{
            const width                 = window.innerWidth;

            this.updateSizeImg();
           setTimeout( () =>{
              this.updateSizeImg()
            }, 1000);

          }, true);
      },

    },

};
</script>

<style lang="scss" scoped>
  .d-flex{
    display: flex;
  }
  .bannerItems{
    width: 100%;
    @include display-flex();
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 40px;
  }
  .bannerItems__item{
    margin-left: 1.1%;
    width: 32.5%;
    height: 244px;
    @include display-flex();
  }
  .bannerItems__item:last-of-type{
    margin-left: 0;
  }
  .bannerItems__itemPic{
    width: 100%;
    height: 100%;
    border-radius: 14px;
  }


  @media (max-width: 1280px) {
    .bannerItems__item{
      height: auto;
    }
    .bannerItems{
      margin-right: auto;
      margin-left: auto;
    }

  }

  @media (max-width: 960px) {
    .bannerItems__item:last-of-type{
      display: none;
    }
    .bannerItems__item{
      width: 49%;
    }
    .bannerItems__item:nth-child(2){
      margin-left: 0;
    }
  }


  @media (max-width: 768px) {
    // .bannerItems{
    //   max-width: 540px;
    // }
  }

  @media (max-width: 600px) {
    .bannerItems__item{
      width: 100%;
      margin-left: 0;
      display: none;
    }
    .bannerItems__item:nth-child(1){
      display: flex;
    }
    .bannerItems{
      // max-width: 320px;
    }

  }

  @media (max-width: 485px) {
      .bannerItems__item{
        display: none;
        width: 100%;
        margin-left: 0;
      }
      .bannerItems__item:first-child{
        display: flex;
      }
      .bannerItems{
        margin-top: 8px;
        margin-bottom: 8px;
      }
  }

  @media (max-width: 360px) {
    .bannerItems{
      width: 100%;
      max-width: 100%;
    }
  }




  // @media (max-width: 420px) {
  //   .bannerItems__item{
  //     max-height: 180px;
  //   }
  // }
  //
  // @media (max-width: 360px) {
  //   .bannerItems__item{
  //     max-height: 184px;
  //   }
  // }




</style>
