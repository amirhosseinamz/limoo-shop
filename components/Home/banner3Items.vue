<template>
  <div class="w-100 bannerItems">
      <div class="bannerItems__item">
        <NuxtLink class="w-100 h-100 d-flex" to="/profile"  >
          <img class="bannerItems__itemPic h-100" :src="bannerBlog[0].image" alt="">
        </NuxtLink>
      </div>
  </div>
</template>

<script>


export default {
    components: {
    },

    props: {
      bannerBlog           : { type: [Object,Array], default: [] },
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

                          const url        = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/WHM_Books_LP_Banner.jpg`;
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
              this.bannerBlog.map((contentOriginal)=>{
                if (contentOriginal.id == contentLastGetImg.id) {

                  contentOriginal.image = getCurrentSizeImg;
                }
              })
          })

        }

        if (1380 <= getWindowWidth) {
          const sizeImg = {
            pic1 : {
              width  : 1380,
              height : 200,
            },
          }

          getImg(sizeImg,'extraLarg');
          updateImg('extraLarg');
        }


        if (1024 >= getWindowWidth) {
          const sizeImg = {
            pic1 : {
              width  : 876,
              height : 200,
            },
          }

          getImg(sizeImg,'larg');
          updateImg('larg');
        }

        // if (960 >= getWindowWidth) {
        //   const sizeImg = {
        //     pic1 : {
        //       width  : 445,
        //       height : 233,
        //     },
        //     pic2 : {
        //       width  : 445,
        //       height : 233,
        //     },
        //     pic3 : {
        //       width  : 445,
        //       height : 233,
        //     },
        //   }
        //
        //   getImg(sizeImg,'medium');
        //   updateImg('medium');
        // }

        if (768 >= getWindowWidth) {
          const sizeImg = {
            pic1 : {
              width  : 736,
              height : 200,
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
    margin-bottom: 36px;
  }
  .bannerItems__item{
    width: 100%;
    height: 200px;
    @include display-flex();
  }
  .bannerItems__itemPic{
    width: 100%;
    height: 100%;
    border-radius: 14px;

  }

  @media (max-width: 960px) {
    .bannerItems{
      margin-bottom:40px;
      margin-top: 40px;
    }
  }

  @media (max-width: 485px) {
    .bannerItems{
      margin-bottom: 0;
      margin-top: 0;
    }
    .bannerItems{
      display: none;
    }
  }





</style>
