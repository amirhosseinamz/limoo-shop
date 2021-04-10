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
       :product-detail-technical="detailTechnical"
       :product-slider-mobile="productSliderMobile"
       :introduction-and-detail-technical-tab="introductionAndDetailTechnicalTab"
       :comment-and-answer-question-tab-name="commentAnswerQuestionTabName"
       :comment-data="getComments"

       @active-item-slider-nav="activeItemSliderNav"
       @more-comment="moreComment"
       @more-comment-mobile="moreCommentMobile"
       ></contentSingleProduct>

      



    </div>
</template>
<script>
import contentSingleProduct from "~/components/product/contentSingleProduct.vue";
import productData from "~/modules/single_product_data.json";
// import TimeAgo from 'javascript-time-ago'
const moment = require('moment-jalaali')
moment.loadPersian({usePersianDigits: true})
import timeSince from "~/plugins/calcTimeAgo.js";


export default {
    async asyncData({ params }) {
         const dataProduct = productData.response_value[0].values;

          const detailTechnicalData = () => {
                const detailTechnical = dataProduct.attribute_groups[0].group_attribute.detailTechnical;
                return detailTechnical.map(content => {
                        for (const key in content) {
                            return content[key];
                        }
                    }
                )
          }

          const getComments = () => {
            const comments                = dataProduct.Comments;
            let limitedCommentData        = [];

            comments.map((content,index)=>{
                content.selected = false;

              // در صورتی که وضعیتی برای نمایش برای کاربر نبود زمان برای کاربر نمایش داده می شود //
              if (typeof(content.confirmLeave) == 'undefined') {  
                moment.loadPersian({usePersianDigits: false})
                const getDateTimeEnglish = moment(content.Date,'YYYYMMDDHHmmss').format("YYYY-MM-DDTHH:mm:ss");
                const calcTimeAgo        = timeSince(getDateTimeEnglish);
                const splitTime          = calcTimeAgo.split(' ');
                content.dateConvert      = calcTimeAgo;
                

                switch (splitTime[1]) {
                  case 'days':
                    if (splitTime[0] < 7) {
                         content.dateConvert  = `${splitTime[0]} روز پیش`;
                      }
                    else{
                      moment.loadPersian({usePersianDigits: true})
                      const convertTimeJalali       = moment(content.Date,'YYYYMMDDHHmmss').format('jDD jMMMM jYYYY')
                      content.dateConvert           = convertTimeJalali;
                    }
                 break;

                  case 'day':
                    content.dateConvert  = `دیروز`;
                  break;

                  case 'hours':
                    content.dateConvert  = `${splitTime[0]} ساعت پیش`;
                  break;

                }

              }
              else{
                const convertTimeJalali       = moment(content.Date,'YYYYMMDDHHmmss').format('jDD jMMMM jYYYY')
                content.dateConvert           = convertTimeJalali;
              }
              
              // پس از اتصال به سرور این قسمت پاک شود //
              if (index < 3) {
                  limitedCommentData = [...limitedCommentData,content];
              }
            })

            return limitedCommentData;
           }  



        return { 
          detailTechnical : detailTechnicalData(),
          getComments     : getComments(),
        }

    },

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
        
          introductionAndDetailTechnicalTab    : [
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

          commentAnswerQuestionTabName    : [
            {
              id     : 1,
              title  : 'نظر مشتریان محصول',
              active : true,
            },
             {
              id     : 2,
              title  : "پرسش و پاسخ",
              active : false,
            }
          ],

          commentsData: [
                {
                    id: 1,
                    commentTitle:
                        "این سری از اپل واچ از سری قبلش خیلی بهتر شده!",
                    state: "accepted",
                    idea: "good",
                    productTitle:
                        "اپل واچ سری 6 آتومینیوم آبی بند اسپرت سیلیکون آبی1",
                    img: "/img/apple-watch-1.png",
                    description:
                        "این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت، حتما این کالارو خریداری کنید! این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت حتما این کالا رو خریداری کنید.",
                    commentTime: "1 ساعت پیش",
                    rate: 4.5,

                    "Date": "20210406051422",
                    "Firstname": "محمد ",
                    "Lastname": "احمدی",
                    "Title": "آیفون بی نظیر ",
                    "Body": "یه گوشی فوق العاده عالی اپل جواب خودش رو پس داده گوشی خیلی خوب و روونیه بخاطر پردازنده قویش کلا اپل فوق العادست تنها ایرادش باتریشه که روزی یک و نیم بار تقریبا باید شارژ بشه",
                    "Rate": 3.2,
                    "Suggest": 1
                },
                {
                    id: 2,
                    commentTitle:
                        "واقعا نمیدونم چرا ایده جدید ندارن روی این محصول!",
                    state: "acceptting",
                    idea: "bad",
                    productTitle:
                        "اپل واچ سری 6 آتومینیوم آبی بند اسپرت سیلیکون آبی2",
                    img: "/img/apple-watch-2.png",
                    description:
                        "این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت، حتما این کالارو خریداری کنید! این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت حتما این کالا رو خریداری کنید.",
                    commentTime: "1 روز پیش",
                    rate: 3.6,

                    "Date": "20210406051422",
                    "Firstname": "مهدی",
                    "Lastname": "دادور",
                    "Title": "آیفون بی نظیر ",
                    "Body": "یه گوشی فوق العاده عالی اپل جواب خودش رو پس داده گوشی خیلی خوب و روونیه بخاطر پردازنده قویش کلا اپل فوق العادست تنها ایرادش باتریشه که روزی یک و نیم بار تقریبا باید شارژ بشه",
                    "Rate": 3.2,
                    "Suggest": 1
                }
           ],
           
          pageMoreComment : 1,



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

      moreComment(page){
        // request server get comments //
      },

      moreCommentMobile(){
        this.pageMoreComment++;
        // پس از دریافت رسپانس مقدار صفحه اضافه شود //
        // در صورت مواجه شدن با ارور مقدار مورد نظر اضافه نشود //
        console.log(this.pageMoreComment,'this.pageMoreComment');
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
