<template>
    <div class="page__wrapper w-100 d-rtl flex-column">

        <content-category
          :category="category"
          :category-suggestion="categorySuggestion"
          :default-selected-suggestion="defaultSelectedSuggestion"
          :category-products="categoryProducts"
          :category-product-mobile="categoryProductMobile"

          @active-cat-suggestion="activeCatSuggestion"
          @update-infinite-cat-mobile="updateInfiniteCatMobile"
        >
        </content-category>

    </div>
</template>
<script>
import contentCategory from "~/components/Category/contentCategory.vue";
import addCamaPrice from "~/modules/addCamaPrice.js";


export default {
    components: {
      contentCategory,
    },

    data() {
        return {
          categoryProducts                  : [
            {
              id        : 1,
              title     : 'حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت',
              discount  : '10000',
              realPrice : '50000',
              image     : '/img/sony_pic_1.svg',
            },
            {
              id        : 2,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '10000',
              image     : '/img/sony_pic_3.svg',
            },
            {
              id        : 3,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '625000',
              image     : '/img/pic_phone_3.svg',
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
              image     : '/img/pic_phone_4.svg',
            },
            {
              id        : 6,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '120000',
              image     : '/img/phoneAndroid.svg',
            },
            {
              id        : 7,
              title     : 'حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت',
              discount  : '10000',
              realPrice : '50000',
              image     : '/img/sony_pic_1.svg',
            },
            {
              id        : 8,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '10000',
              image     : '/img/sony_pic_3.svg',
            },
            {
              id        : 9,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '625000',
              image     : '/img/pic_phone_3.svg',
            },
            {
              id        : 10,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '120000',
              image     : '/img/phoneAndroid.svg',
            },
            {
              id        : 11,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '70000',
              realPrice : '120000',
              image     : '/img/pic_phone_4.svg',
            },
            {
              id        : 12,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '120000',
              image     : '/img/phoneAndroid.svg',
            },
          ],
          category                          : [
            {
              id        : 1,
              title     : 'لیمو',
            },
            {
              id        : 2,
              title     : 'دسته کالاها',
            },
            {
              id        : 3,
              title     : 'لوازم جانبی موبایل',
            },
          ],
          categorySuggestion                : [
            {
              id        : 1,
              title     : 'قاب موبایل',
            },
            {
              id        : 2,
              title     : 'محافظ صفحه',
            },
            {
              id        : 3,
              title     : 'تمیز کننده صفحه',
            },
            {
              id        : 4,
              title     : 'قاب موبایل',
            },
            {
              id        : 5,
              title     : 'محافظ صفحه',
            },
            {
              id        : 6,
              title     : 'تمیز کننده صفحه',
            },
            {
              id        : 7,
              title     : 'قاب موبایل',
            },
            // {
            //   id        : 16,
            //   title     : 'محافظ صفحه',
            // },
            // {
            //   id        : 17,
            //   title     : 'تمیز کننده صفحه',
            // },
            // {
            //   id        : 18,
            //   title     : 'قاب موبایل',
            // },
            // {
            //   id        : 19,
            //   title     : 'محافظ صفحه',
            // },
            // {
            //   id        : 20,
            //   title     : 'تمیز کننده صفحه',
            // },
          ],
          defaultSelectedSuggestion         : {},
          categoryProductMobile             : [
            {
              id        : 1,
              title     : 'حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت',
              discount  : '10000',
              realPrice : '50000',
              image     : '/img/sony_pic_1.svg',
            },
            {
              id        : 2,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '10000',
              image     : '/img/sony_pic_3.svg',
            },
            {
              id        : 3,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '625000',
              image     : '/img/pic_phone_3.svg',
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
              image     : '/img/pic_phone_4.svg',
            },
            {
              id        : 6,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '120000',
              image     : '/img/phoneAndroid.svg',
            },
            {
              id        : 7,
              title     : 'حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت',
              discount  : '10000',
              realPrice : '50000',
              image     : '/img/sony_pic_1.svg',
            },
            {
              id        : 8,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '10000',
              image     : '/img/sony_pic_3.svg',
            },
            {
              id        : 9,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '625000',
              image     : '/img/pic_phone_3.svg',
            },
            {
              id        : 10,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '120000',
              image     : '/img/phoneAndroid.svg',
            },
            {
              id        : 11,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '70000',
              realPrice : '120000',
              image     : '/img/pic_phone_4.svg',
            },
            {
              id        : 12,
              title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
              discount  : '',
              realPrice : '120000',
              image     : '/img/phoneAndroid.svg',
            },
          ],

        };
    },

    // async asyncData (context) {
      // const query_params = context.route.query;
      // const post         = await context.$axios.$get(`https://api.nuxtjs.dev/posts`);
      //   console.log('asyncData');
      // return { posts:post,id:query_params.id }
    // },

    watch: {
      '$route'(data){ // last update route //
        // this.$router.push({ query: {id :10}})
      }
    },

    created() {
      this.addCamaProduct();
    },

    mounted() {
    },

    methods: {
      addCamaProduct(){
        this.categoryProducts.map((content)=>{
          content.addCamaRealPrice = addCamaPrice(content.realPrice);
          content.addCamaDiscount  = addCamaPrice(content.discount);
        })

        this.categoryProductMobile.map((content)=>{
          content.addCamaRealPrice = addCamaPrice(content.realPrice);
          content.addCamaDiscount  = addCamaPrice(content.discount);
        })
      },

      activeCatSuggestion(data){
        console.log(data);
      },

      updateInfiniteCatMobile(data){
        console.log(data,'updateInfiniteCatMobile');
      }


    }

};
</script>

<style lang="scss" scoped>
.mobile-screen {
    display: none;
    direction: ltr;
}
.page__home-introduction-main{
  @include display-flex();
  align-items: flex-start;
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
.page__wrapper{
  @include display-flex();
  align-items: flex-start;
  width: 1381px;
  margin-right: auto;
  margin-left: auto;
}


@media (max-width: 1450px) {
  .page__wrapper{
    padding-right: 30px;
    padding-left: 30px;
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
  .page__wrapper {
    padding-right: 5px;
    padding-left: 5px;
  }
}

@media (max-width: 350px) {

}

@media (max-width: 320px) {

}

</style>
