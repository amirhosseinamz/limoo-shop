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
        :products="products"
        :all-category="allCategory"
        :all-product-vertical="allProductVertical"
        :all-brand="allBrand"

       ></content-home>
    </div>
</template>
<script>
import contentHome from "~/components/Home/contentHome.vue";
import '~/assets/styles/plugins/flickity.min.css';
import '~/assets/styles/_slider_home.scss';
import addCamaPrice from "~/modules/addCamaPrice.js";


export default {
    components: {
      contentHome,
    },

    data() {
        return {
          products            : [
            {
              id        : 1,
              title     : 'حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت',
              discount  : '10000',
              realPrice : '50000',
              image     : '/img/phoneAndroid.svg',
            },
            {
              id        : 2,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '10000',
              image     : '/img/phoneAndroid.svg',

            },
            {
              id        : 3,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '625000',
              image     : '/img/phoneAndroid.svg',

            },
            {
              id        : 4,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '120000',
              image     : '/img/phoneAndroid.svg',

            },
            {
              id        : 5,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '70000',
              realPrice : '120000',
              image     : '/img/phoneAndroid.svg',
            },
            {
              id        : 6,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '120000',
              image     : '/img/phoneAndroid.svg',
            }
          ],
          allCategory         : [
            {
              id    : 1,
              title : 'موبایل و تبلت',
              count : 'بیش از 220 هزار کالا',
              image : '/img/phoneAndroid.svg',
            },
            {
              id    : 2,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/pic_cat_.svg',
            },
            {
              id    : 3,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/cat_pic2.svg',
            },
            {
              id    : 4,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/pic_cat3.svg',
            },
            // {
            //   id    : 5,
            //   title : 'دیتا تستی',
            //   count : 'بیش از 200 هزار کالا',
            //   image : '/img/2126986.jpg',
            // },
            {
              id    : 6,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/cat_pic2.svg',
            },
            {
              id    : 7,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/pic_cat_4.svg',
            },
            {
              id    : 8,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/cat_pic2.svg',
            },

          ],
          allProductVertical  : [
            {
              id        : 1,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '10000',
              realPrice : '50000',
              image     : '/img/sony_pic_1.svg',
            },
            {
              id        : 2,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '50000',
              image     : '/img/sony_pic_1.svg',
            },
            {
              id        : 3,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '50000',
              image     : '/img/sony_pic_3.svg',
            },
            {
              id        : 4,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '50000',
              image     : '/img/sony_pic_1.svg',
            },
            {
              id        : 5,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '50000',
              image     : '/img/sony_pic_1.svg',
            },
            {
              id        : 6,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '36000',
              realPrice : '50000',
              image     : '/img/sony_pic_1.svg',
            },
            {
              id        : 7,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '50000',
              image     : '/img/sony_pic_1.svg',
            },
            {
              id        : 8,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '36000',
              realPrice : '50000',
              image     : '/img/sony_pic_1.svg',
            },

          ],
          allBrand     : [
            {
              id    : 1,
              title : 'موبایل و تبلت',
              count : 'بیش از 220 هزار کالا',
              image : '/img/brand_huawei.svg',
              href  : 'https://www.huawei.com/en/',
            },
            {
              id    : 2,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/brand1.svg',
              href  : 'https://www.huawei.com/en/',
            },
            {
              id    : 3,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/cat_pic2.svg',
              href  : 'https://www.huawei.com/en/',
            },
            {
              id    : 4,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/pic_cat3.svg',
              href  : 'https://www.huawei.com/en/',
            },
            {
              id    : 6,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/cat_pic2.svg',
              href  : 'https://www.huawei.com/en/',
            },
            {
              id    : 7,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/pic_cat_4.svg',
              href  : 'https://www.huawei.com/en/',
            },
            {
              id    : 8,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/cat_pic2.svg',
              href  : 'https://www.huawei.com/en/',
            },

          ],
        };
    },

    watch: {

    },

    created() {
      // پس از اتصال به سرور فانکشن مورد نظر بعد رسپانس ریکوئست صدا زده شود //
      this.addCamaProduct();
      this.addCamaProductVertical();
    },

    mounted() {

    },

    methods: {
      addCamaProduct(){
        this.products.map((content)=>{
          content.addCamaRealPrice = addCamaPrice(content.realPrice);
          content.addCamaDiscount  = addCamaPrice(content.discount);
        })
      },

      addCamaProductVertical(){
        this.allProductVertical.map((content)=>{
          content.addCamaRealPrice = addCamaPrice(content.realPrice);
          content.addCamaDiscount  = addCamaPrice(content.discount);
        })
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

@media (max-width: 460px) {
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
