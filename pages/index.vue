<template>
    <div class="page-home w-100 d-rtl flex-column">
      <div class="mobile-screen w-100">
          <div class="mobile-screen__holder">
              <div class="w-100 screen__holder-data">
                <span class="mobile-screen__holder-txt">آدرس های شما</span>
                <span class="icon-location"></span>
              </div>
              <!-- <img
                  class="mobile-screen__holder-arrow"
                  src="/icons/arrow-left.svg"
              /> -->
          </div>
      </div>
      <content-home
        :key="updateProduct"
        :banner-category="bannerCategory"
        :banner-vertical-product="bannerVerticalProduct"
        :banner-blog="bannerBlog"

       ></content-home>
    </div>
</template>
<script>
import contentHome from "~/components/Home/contentHome.vue";
import '~/assets/styles/plugins/flickity.min.css';
import '~/assets/styles/_slider_home.scss';
import addCommaPrice from "~/modules/addCamaPrice.js";


export default {
    components: {
      contentHome,
    },

    data() {
        return {
          updateProduct                  : 0,
          bannerCategory                 : [
              {
                image : '',
                id    : 1,
              },
              {
                image : '',
                id    : 2,
              },
              {
                image : '',
                id    : 3,
              },
          ],
          bannerVerticalProduct          : [
              {
                image : '',
                id    : 1,
              },
              {
                image : '',
                id    : 2,
              },
              {
                image : '',
                id    : 3,
              },
          ],
          bannerBlog                     : [
              {
                image : '',
                id    : 1,
              }
          ],

        };
    },

    computed: {
      allBlogProduct() {
        return this.$store.getters["home/home/allBlogProduct"];
      },
      allProductVerticalDescription() {
        return this.$store.getters["home/home/allProductVerticalDescription"];
      }
    },

    mounted() {
      // پس از اتصال به سرور فانکشن مورد نظر بعد رسپانس ریکوئست صدا زده شود //
      const width     = window.innerWidth;

      this.addCommaProduct();
      this.addCommaProductVertical();
      this.addCommaProductMultiVertical();



      // detected add circle //
      this.detectedResizeBrowser()

      // add circle blog //
      if (485 < width) {
        this.checkAddCircleBlogPorduct('desktop');
      }
      else {
        this.checkAddCircleBlogPorduct('mobile')
      }

      if (1300 == width) {
        this.checkAddCircleVerticalProductDescription('desktop',50);
      }
      else {
        this.checkAddCircleVerticalProductDescription('desktop',118);
      }


    },

    methods: {
      addCommaProduct(){
        this.$store.dispatch("home/home/addCommaProduct", "products");
      },

      addCommaProductVertical(){
        this.$store.dispatch("home/home/addCommaProduct", "allProductVertical");
      },

      addCommaProductMultiVertical(){
          this.$store.dispatch("home/home/addCommaProduct", "allProductMultiVertical");
      },

      addCircleText(
        stateChangeNumberLimit,
        data,
        numberCircleDesktopLimited,
        nameObjectFindCircle
      ){
        let NUMBERLIMIT     = -1;
        NUMBERLIMIT         = numberCircleDesktopLimited;

        if (stateChangeNumberLimit == 'mobile') {
          // mobile limit //
          NUMBERLIMIT  = 94;
        }
        else {
          NUMBERLIMIT   = numberCircleDesktopLimited;
          //  desktop limit //
        }

        const integratedWordDescription = (splitedDescription) => {
          let concatStr = '';
          splitedDescription.map((content,index)=>{
            if (NUMBERLIMIT > index) {
              concatStr+= content;
            }
          })
          return concatStr;
        }


        data.map((content,index)=>{
          const description         = content[nameObjectFindCircle];
          const checkLenDescription = description.length;
          const splitDescription    = description.split('');

          if (checkLenDescription > NUMBERLIMIT) {
            const resultIntegrated       = integratedWordDescription(splitDescription);
            content.limitedDescription   = resultIntegrated;
            content.showLimitDescription = false;
          }
          else {
            content.limitedDescription   = '';
            content.showLimitDescription = true;
          }

        })

      },

      checkAddCircleBlogPorduct(stateChangeNumberLimit){
        this.addCircleText(stateChangeNumberLimit,this.allBlogProduct,135,'description');
      },

      checkAddCircleVerticalProductDescription(stateChangeNumberLimit,numberLimited){
        this.addCircleText(stateChangeNumberLimit,this.allProductVerticalDescription,numberLimited,'description');
      },

      detectedResizeBrowser(){
        window.addEventListener("resize", ()=>{
            const width   = window.innerWidth;

            if (485 >= width) {
              this.checkAddCircleBlogPorduct('mobile')
            }
            else {
              this.checkAddCircleBlogPorduct('desktop')
            }

            if (1300 >= width) {
              this.checkAddCircleVerticalProductDescription('desktop',50);
            }
            else {
              this.checkAddCircleVerticalProductDescription('desktop',118);
            }

          }, true);
      }


    }
};
</script>

<style lang="scss" scoped>
.mobile-screen {
    display: none;
    direction: ltr;
}
.profile-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    min-height: 100vh;
    display: flex;
    flex-direction: row-reverse;
}
.page__home-introduction-main{
  @include display-flex();
  align-items: flex-start;
}
.page-home{
  @include display-flex();
  align-items: flex-start;
  width: 1381px;
  margin-right: auto;
  margin-left: auto;
}
.icon-location::after {
    content: '\e817';
    @include font-icon__limoo();
    font-size: 16px;
    margin-top: 1px;
    color: $color_festival;
}
.screen__holder-data{
  @include display-flex();
  justify-content: flex-end;
  padding-right: 18.5px;
  padding-left: 18.5px;
  align-items: center;
  height: 100%;
}


@media (max-width: 1450px) {
  .page-home{
    // padding-right: 26px;
    // padding-left: 26px;
    width: 100%;
  }
  .page__home-wrapper-main{
    padding-right: 26px;
    padding-left: 26px;
  }

}

@media (max-width: 1220px) {

}

@media (max-width: 960px) {
    .desktop-screen {
        display: none;
    }
    .mobile-screen {
        display: block;
        &__holder {
            @include display-flex();
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            height: 33px;
            background: $white;
            margin-top: 47px;
            &-txt {
                font-size: 13px;
                line-height: 140.62%;
                margin-right: 6.5px;
                color: $black-topic;
            }
            &-arrow {
                margin-left: 16px;
            }
        }
    }
    .profile-container {
        @include display-flex();
        flex-direction: column;
        margin-bottom: 58px;
    }
    .user-profile__holder {
        margin: 8px 0;
        padding: 0 5px;
    }
    .user-profile {
        &__topic {
            display: none;
        }
    }
    .mobile-screen__holder-arrow{
      display: none;
    }

}

@media (max-width: 600px) {

}

@media (max-width: 485px) {
  .page__home-wrapper-main{
    padding-right: 10px;
    padding-left: 10px;
  }
}

@media (max-width: 350px) {

}

@media (max-width: 320px) {

}

</style>
