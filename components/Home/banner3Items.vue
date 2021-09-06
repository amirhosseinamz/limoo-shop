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
              if (content[getSizeUpdate] === '') {
                  for (let key in content) {
                      if (key === getSizeUpdate) {
                        // فقط یک بار اجرا شده و پس از گرفتن عکس مورد نظر اجرا نخواهد شد //

                        if (index === 0) {
                          const pic2Size   = getSizeImg.pic1;
                          const width      = pic2Size.width;
                          const height     = pic2Size.height;

                          const url        = `https://statics-develop.diver.ir/1/fill/${width}/${height}/sm/true/plain/s3://limoo/product/92afb0f51f4fc434ae230b5457b14622a397abcb_1615636191.jpg`;
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
                if (contentOriginal.id === contentLastGetImg.id) {

                  contentOriginal.image = getCurrentSizeImg;
                }
              })
          })

        }

          const sizeImg = {
            pic1 : {
              width  : 1500,
              height : 200,
            },
          }

          getImg(sizeImg,'extraLarg');
          updateImg('extraLarg');

          if (1366 >= getWindowWidth) {
            const sizeImg = {
              pic1 : {
                width  : 1314,
                height : 200,
              },
            }

            getImg(sizeImg,'larg');
            updateImg('larg');
          }


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
    margin-bottom: toRem(36);
  }
  .bannerItems__item{
    width: 100%;
    height: toRem(200);
    @include display-flex();
  }
  .bannerItems__itemPic{
    width: 100%;
    height: 100%;
    border-radius: toRem(14);

  }



  @media (max-width: 1200px) {
    .bannerItems__item{
      height: auto;
    }
  }

  @include md {
    .bannerItems{
      margin-bottom:40px;
      margin-top: 40px;
    }
  }

  @include sm {
    .bannerItems{
      display: none;
    }
  }

  @include xs {
    .bannerItems{
      margin-bottom: 0;
      margin-top: 0;
    }
    .bannerItems{
      display: none;
    }
  }





</style>
