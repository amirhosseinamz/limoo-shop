<template>
  <div class="w-100 bannerItems">
      <div class="bannerItems__item">
        <NuxtLink class="w-100 h-100  d-flex" to="/profile"  >
          <img class="bannerItems__itemPic h-100" :src="bannerCategory2[0].image" alt="">
        </NuxtLink class="w-100 h-100" to="/profile"  >
      </div>
      <div class="bannerItems__item">
        <NuxtLink class="w-100 h-100 d-flex" to="/profile"  >
          <img class="bannerItems__itemPic h-100" :src="bannerCategory2[1].image" alt="">
        </NuxtLink class="w-100 h-100" to="/profile"  >
      </div>
  </div>
</template>

<script>


export default {
    components: {
    },

    props: {
      bannerCategory2      : { type: [Object,Array], default: [] },
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
              this.bannerCategory2.map((contentOriginal)=>{
                if (contentOriginal.id == contentLastGetImg.id) {

                  contentOriginal.image = getCurrentSizeImg;
                }
              })
          })

        }

        if (1380 <= getWindowWidth) {
          const sizeImg = {
            pic1 : {
              width  : 675,
              height : 368,
            },
            pic2 : {
              width  : 675,
              height : 368,
            },
            pic3 : {
              width  : 675,
              height : 368,
            },
          }

          getImg(sizeImg,'extraLarg');
          updateImg('extraLarg');
        }


        if (1024 >= getWindowWidth) {
          const sizeImg = {
            pic1 : {
              width  : 476,
              height : 291,
            },
            pic2 : {
              width  : 476,
              height : 291,
            },
            pic3 : {
              width  : 476,
              height : 291,
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
    margin-bottom: 40px;
  }
  .bannerItems__item{
    margin-left: 2%;
    width: 49%;
    height: 368px;
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

  @media (max-width: 1220px) {
    .introduction__leftitem2{
      height: 267px;
    }
    .bannerItems__item{
      max-height: 368px;
      height: auto;
    }
  }

  @media (max-width: 960px) {


  }

  @media (max-width: 485px) {
    .bannerItems{
      margin-bottom: 0;
      margin-top: 8px;
    }
    .bannerItems__item{
      display: none;
      width: 100%;
      margin-left: 0;
      max-height: auto;
    }
    .bannerItems__item:first-child{
      display: flex;
    }
    .bannerItems{
      margin-top: 8px;
    }
  }


  // @media (max-width: 420px) {
  //   .bannerItems__item{
  //     height: 180px;
  //   }
  // }




</style>
