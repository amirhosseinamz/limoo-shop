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

        :products="products"
        :all-category="allCategory"
        :all-product-vertical="allProductVertical"
        :all-brand="allBrand"
        :brand-introduction="brandIntroduction"
        :all-question="allQuestion"
        :all-blog-product="allBlogProduct"
        :introduction-product="introductionProduct"
        :all-product-multi-vertical="allProductMultiVertical"
        :all-product-vertical-description="allProductVerticalDescription"
        :left-slider-header-img="leftSliderHeaderImg"
        :banner-category="bannerCategory"
        :banner-category2="bannerCategory2"
        :banner-blog="bannerBlog"








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
          products                       : [
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
          allCategory                    : [
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
          allProductVertical             : [
            {
              id               : 1,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '50000',
              image            : '/img/sony_pic_1.svg',
              discount         : '20000',
            },
            {
              id               : 2,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '10',
              image            : '/img/sony_pic_1.svg',
              discount         : '6000',
            },
            {
              id               : 3,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '5',
              image            : '/img/sony_pic_3.svg',
              discount         : '30',
            },
            {
              id               : 4,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '20',
              image            : '/img/sony_pic_1.svg',
              discount         : '30',
            },
            {
              id               : 5,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '10',
              image            : '/img/sony_pic_1.svg',
              discount         : '30',
            },
            {
              id               : 6,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '50000',
              image            : '/img/sony_pic_1.svg',
              discount         : '30',
            },
            {
              id               : 7,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '50000',
              image            : '/img/sony_pic_1.svg',
              discount         : '30',
            },
            {
              id               : 8,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '50000',
              image            : '/img/sony_pic_1.svg',
              discount         : '36000',
            },

          ],
          allBrand                       : [
            {
              id    : 1,
              title : 'موبایل و تبلت',
              count : 'بیش از 220 هزار کالا',
              image : '/img/brand_huawei.svg',
              href  : 'https://www.digikala.com/',
            },
            {
              id    : 2,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/brand-icon-img1.svg',
              href  : 'https://www.huawei.com/en/',
            },
            {
              id    : 3,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/brand_huawei.svg',
              href  : 'https://www.huawei.com/en/',
            },
            {
              id    : 4,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/brand-icon-img1.svg',
              href  : 'https://www.huawei.com/en/',
            },
            {
              id    : 6,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/brand_huawei.svg',
              href  : 'https://www.huawei.com/en/',
            },
            {
              id    : 7,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/brand-icon-img1.svg',
              href  : 'https://www.huawei.com/en/',
            },
            {
              id    : 8,
              title : 'دیتا تستی',
              count : 'بیش از 200 هزار کالا',
              image : '/img/brand_huawei.svg',
              href  : 'https://www.huawei.com/en/',
            },

          ],
          brandIntroduction              : [
            {
              id         : 1,
              title      : 'تضمین کیفیت',
              image      : '/icons/Guarantee.svg',
              nameClass  : 'guarantee1',
            },
            {
              id         : 2,
              title      : 'ارسال فوری',
              image      : '/icons/startup1.svg',
              nameClass  : 'startup',
            },
            {
              id         : 3,
              title      : 'پشتیبانی 24 ساعته',
              image      : '/icons/telemarketer1.svg',
              nameClass  : 'telemarketer',
            },
            {
              id         : 4,
              title      : '7 روز ضمانت ',
              image      : '/icons/guarantee1.svg',
              nameClass  : 'guarantee7',
            },

          ],
          allQuestion                    : [
            {
              id         : 111,
              title      : 'آیا می توانم از کیف پول برای خرید استفاده کنم?',
              active     : false,
            },
            {
              id         : 2,
              title      : 'اگر از خرید ناراضی بودم قابلیت مرجوعی وجود دارد؟',
              active     : false,
            },
            {
              id         : 3,
              title      : 'اگر از خرید ناراضی بودم قابلیت مرجوعی وجود دارد؟',
              active     : false,
            },
            {
              id         : 4,
              title      : 'اگر از خرید ناراضی بودم قابلیت مرجوعی وجود دارد؟',
              active     : false,
            },
          ],
          allBlogProduct                 : [
            {
              id          : 1,
              title       : 'حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت',
              discount    : '10000',
              realPrice   : '50000',
              image       : '/img/picPhone2.svg',
              description : `لحظاتی بیش اپل با رونمایی از لبتاپ سری آلومینیوم با بند اسپرت نسل جدید تحولی عظیم برای تولیدات 11`
            },
            {
              id        : 2,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '10000',
              image     : '/img/picWatch.svg',
              description : `
              لحظاتی بیش اپل با رونمایی از لبتاپ سری آلومینیوم با بند اسپرت نسل جدید تحولی عظیم برای تولیدات قطعات ام وان ایجاد کرد کهssfdsfdsfddfasffdsfsdfd
              لحظاتی بیش اپل با رونمایی از لبتاپ سری آلومینیوم با بند اسپرت نسل جدید تحولی عظیم برای تولیدات قطعات ام وان ایجاد کرد کهssfdsfdsfddfasffdsfsdfd
              `
            },
            {
              id        : 3,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '625000',
              image     : '/img/pic_phone_3.svg',
              description : 'لحظاتی بیش اپل با رونمایی از لبتاپ سری                 آلومینیوم با بند اسپرت نسل جدید تحولی عظیم     برای تولیدات قطعات ام وان ایجاد کرد که',
            },
            {
              id        : 4,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '120000',
              image     : '/img/pic_phone_4.svg',
              description : 'لحظاتی بیش اپل با رونمایی از لبتاپ سری                 آلومینیوم با بند اسپرت نسل جدید تحولی عظیم     برای تولیدات قطعات ام وان ایجاد کرد که',

            },
            {
              id        : 5,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '70000',
              realPrice : '120000',
              image     : '/img/phoneAndroid.svg',
              description : 'dasdasdas M A',

            },
            {
              id        : 6,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '120000',
              image     : '/img/phoneAndroid.svg',
              description : `لحظاتی بیش اپل با رونمایی از لبتاپ سری آلومینیوم با بند اسپرت نسل جدید تحولی عظیم برای تولیدات قطعات ام وان ایجاد کرد که`

            }
          ],
          introductionProduct            : [
            {
              id        : 1,
              title     : 'حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت',
              discount  : '10000',
              realPrice : '50000',
              image     : '/img/picTest1.jpg',
            },
            {
              id        : 2,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '10000',
              image     : '/img/ArEJJ7Elmy2iAF1okIadw53iJdxCqisTJVkXwh1R.jpeg',
            },
            // {
            //   id        : 3,
            //   title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
            //   discount  : '',
            //   realPrice : '625000',
            //   image     : '/img/apple-watch-series-4-hermes-double1.svg',
            // },
            // {
            //   id        : 4,
            //   title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
            //   discount  : '',
            //   realPrice : '120000',
            //   image     : '/img/apple-watch-series-4-hermes-double1.svg',
            // },
          ],
          updateProduct                  : 0,
          allProductMultiVertical        : [
            {
              id               : 1,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '50000',
              image            : '/img/sony_pic_1.svg',
              discount         : '',
              precentDiscount  : '30',
            },
            {
              id               : 2,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '50000',
              image            : '/img/sony_pic_3.svg',
              discount         : '15000',
              precentDiscount  : '30',
            },
            {
              id               : 3,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '50000',
              image            : '/img/sony_pic_1.svg',
              discount         : '45000',
              precentDiscount  : '60',
            },
            {
              id               : 4,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '50000',
              image            : '/img/sony_pic_1.svg',
              discount         : '',
              precentDiscount  : '50',
            },

          ],
          allProductVerticalDescription  : [
            {
              id               : 1,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '50000',
              image            : '/img/sony_pic_1.svg',
              discount         : '',
              precentDiscount  : '30',
              description      :  'مهدی تستی تستی ',
            },
            {
              id               : 2,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '50000',
              image            : '/img/sony_pic_3.svg',
              discount         : '15000',
              precentDiscount  : '30',
              description      : ' لحضاتی پیش اپل با رونمایی از لبتاب سری آلمنیوم با بند اسپرت نسل جدید تحولی عظیم برای تولیدات قطعات ام وان ایجاد کرد که',
            },
            {
              id               : 3,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '50000',
              image            : '/img/sony_pic_1.svg',
              discount         : '45000',
              precentDiscount  : '60',
              description      : ' لحضاتی پیش اپل با رونمایی از لبتاب سری آلمنیوم با بند اسپرت نسل جدید تحولی عظیم برای تولیدات قطعات ام وان ایجاد کرد که',
            },
            {
              id               : 4,
              title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              realPrice        : '50000',
              image            : '/img/sony_pic_1.svg',
              discount         : '',
              precentDiscount  : '50',
              description      :  'dsadasیشخیخشسنسیشمینشسمنیسمشنیسشمنیمنسشمین',
            },

          ],
          leftSliderHeaderImg            : [
              {
                image : '',
                id    : 1,
              },
              {
                image : '',
                id    : 2,
              },
          ],
          bannerCategory  : [
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
          bannerCategory2  : [
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
          bannerBlog  : [
              {
                image : '',
                id    : 1,
              }
          ],



        };
    },

    watch: {

    },

    created() {
      // پس از اتصال به سرور فانکشن مورد نظر بعد رسپانس ریکوئست صدا زده شود //
      const width     = window.innerWidth;

      this.addCamaProduct();
      this.addCamaProductVertical();
      this.addCamaProductMultiVertical();



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

    mounted() {
      // this.updateProduct++;
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

      addCamaProductMultiVertical(){
        this.allProductMultiVertical.map((content)=>{
          content.addCamaRealPrice = addCamaPrice(content.realPrice);
          content.addCamaDiscount  = addCamaPrice(content.discount);
        })
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
