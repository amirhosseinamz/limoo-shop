<template>
    <div class="page-home w-100 d-rtl flex-column">
      <div class="mobile-screen w-100">
          <div class="mobile-screen__holder">
              <span class="mobile-screen__holder-txt">آدرس های شما</span>
              <img
                  class="mobile-screen__holder-arrow"
                  src="/icons/arrow-left.svg"
              />
          </div>
      </div>
      <content-home :products="products"></content-home>
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
          products : [
            {
              id        : 1,
              title     : 'حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت',
              discount  : '10000',
              realPrice : '50000',
              image     : '/img/2126986.jpg',
            },
            {
              id        : 2,
              title     : ' اب یبآ موینیمولآ دیدج یرس پاتپل    تیالده اب یبآ نوکیلیس ترپسا دنب',
              discount  : '10',
              realPrice : '10000',
              image     : '/img/phoneAndroid.svg',

            },
            {
              id        : 3,
              title     : ' اب یبآ موینیمولآ دیدج یرس پاتپل    تیالده اب یبآ نوکیلیس ترپسا دنب',
              discount  : '10',
              realPrice : '625000',
              image     : '/img/phoneAndroid.svg',

            },
            {
              id        : 4,
              title     : ' اب یبآ موینیمولآ دیدج یرس پاتپل    تیالده اب یبآ نوکیلیس ترپسا دنب',
              discount  : '1',
              realPrice : '120000',
              image     : '/img/phoneAndroid.svg',

            },
            {
              id        : 5,
              title     : ' اب یبآ موینیمولآ دیدج یرس پاتپل    تیالده اب یبآ نوکیلیس ترپسا دنب',
              discount  : '70000',
              realPrice : '120000',
              image     : '/img/phoneAndroid.svg',
            },
            {
              id        : 6,
              title     : ' اب یبآ موینیمولآ دیدج یرس پاتپل    تیالده اب یبآ نوکیلیس ترپسا دنب',
              discount  : '5',
              realPrice : '120000',
              image     : '/img/phoneAndroid.svg',
            }
          ]
        };
    },

    watch: {

    },

    created() {
      // پس از اتصال به سرور فانکشن مورد نظر بعد رسپانس ریکوئست صدا زده شود //
      this.addCamaProduct();
    },

    mounted() {

    },

    methods: {
      addCamaProduct(){
        this.products.map((content)=>{
          content.addCamaRealPrice = addCamaPrice(content.realPrice);
          content.addCamaDiscount  = addCamaPrice(content.discount);
        })
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
  width: 72.6%;
  margin-right: auto;
  margin-left: auto;
}





@media (max-width: 1450px) {
  .page-home{
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
            height: 56px;
            background: $white;
            margin-top: 47px;
            &-txt {
                font-size: 14px;
                line-height: 140.62%;
                margin-right: 16px;
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


}

@media (max-width: 600px) {

}

@media (max-width: 460px) {
  .page-home{
    padding-right: 10px;
    padding-left: 10px;
  }
}

@media (max-width: 350px) {

}

@media (max-width: 320px) {

}

</style>
