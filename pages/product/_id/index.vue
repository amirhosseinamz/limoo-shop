<template>
    <div class="page-wrapper w-100 d-rtl flex-column">
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


      <contentSingleProduct
       :product-data="productData"
       :product-slider="productSlider"
       :product-slider-mobile="productSliderMobile"
       :product-tab="productTab"

       @active-item-slider-nav="activeItemSliderNav"
       ></contentSingleProduct>

    </div>
</template>
<script>
import contentSingleProduct from "~/components/product/contentSingleProduct.vue";
import productData from "~/modules/single_product_data.json";


export default {
    components: {
      contentSingleProduct,
    },

    data() {
        return {
          productData   : [],
         
         productSlider : [
            {
              id    : 1,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/picTest1.jpg',
            },
            {
              id    : 2,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/new-baner-web4.jpg',
            },
            {
              id    : 3,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg',
            },
            {
              id    : 4,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/picTest1.jpg',
            },
            {
              id    : 5,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg',
            },
            {
              id    : 6,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg',
            },
            {
              id    : 7,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg',
            },
            {
              id    : 8,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg',
            },
            {
              id    : 9,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg',
            },
            {
              id    : 10,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg',
            },
            {
              id    : 11,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg',
            },
            {
              id    : 12,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg',
            },
            {
              id    : 13,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg',
            },
            {
              id    : 14,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg',
            },
            {
              id    : 15,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg',
            },
            {
              id    : 16,
              image : 'https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg',
            },
          ],
         
         productSliderMobile : [
            {
              id    : 1,
              image : 'https://statics-develop.diver.ir/1/fill/328/328/sm/true/plain/s3://limoo/product/single_product_img2.jpg',
            },
            {
              id    : 2,
              image : 'https://statics-develop.diver.ir/1/fill/328/328/sm/true/plain/s3://limoo/product/new-baner-web4.jpg',
            },
            {
              id    : 3,
              image : 'https://statics-develop.diver.ir/1/fill/328/328/sm/true/plain/s3://limoo/product/picTest1.jpg',
            },
          ],
        
          productTab    : [
            {
              id     : 1,
              title  : 'معرفی کامل محصول',
              active : true,
              type   : 'fullIntroduction',
            },
             {
              id     : 2,
              title  : "مشخصات فنی محصول",
              active : false,
              type   : 'detailTechnical',
            }
          ],


        };
    },

    watch: {

    },

    created() {
    },

    mounted() {
       this.productData = productData;
    },

    methods: {
      activeItemSliderNav(data){
          let updateSlider = [];
          this.productSlider.map((content,index)=>{
             content.active = false
              if (content.id == data.id) {
                content.active = true
              }
              updateSlider = [...updateSlider,content];
          })

          this.productSlider = updateSlider;
      },

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
.page-wrapper{
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
  .page-wrapper{
    padding-right: 26px;
    padding-left: 26px;
    width: 100%;
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
  .page-wrapper{
    padding-right:11px;
    padding-left:11px;
  }
}

@media (max-width: 350px) {

}

@media (max-width: 320px) {

}

</style>
