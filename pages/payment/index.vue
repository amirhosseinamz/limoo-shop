<template>
    <div class="cart-container d-rtl">
        <div class="user-cart__container">
            <div class="mobile-screen__holder d-rtl">
                <span class="user-shipping__title-mobile-screen"
                    >سبد خرید شما</span
                >
                <span @click="goBack" class="mobile-screen__arrow"></span>
            </div>

            <div class="w-100 payment-content">
                    <div class="user-cart__shipping-holder">
                        <div class="user-cart__shipping-container">
                            <div class="w-100">
                                <div class="payment__header">
                                  <span class="user-shipping__title">انتخاب درگاه پرداخت</span>
                                  <span class="payment__line"></span>
                                  <payment-gateway :key="updatePaymentGateway"></payment-gateway>
                                </div>

                                <div class="w-100 payment__address-main payment--desktop">
                                        <div class="w-100">
                                            <span class="payment__address-text">ارسال کالا به این آدرس</span>
                                        </div>
                                        <div class="w-100 payment__address-item">
                                          <span class="payment__address-place"></span>
                                          <h3 class="payment__address-title">تهران ، خیابان ولیعصر ، تقاطق مطهری ، کوچه حسینی راد</h3>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <The-cart-shipping-detail :detail-price="detailPrice" ></The-cart-shipping-detail>

                        <div class="w-100 payment__address-main payment--mobile">
                                <div class="w-100 payment__address-content">
                                      <div class="w-100 payment__address-line">
                                        <span class="payment__address-text">ارسال کالا به این آدرس</span>
                                      </div>
                                      <div class="w-100 payment__address-item">
                                        <span class="payment__address-place"></span>
                                        <h3 class="payment__address-title">تهران ، خیابان ولیعصر ، تقاطق مطهری ، کوچه حسینی راد</h3>
                                      </div>
                                </div>
                        </div>

                    </div>


            </div>

        </div>
        <nuxt-link to="/shipping" class="user-cart__go-back">بازگشت</nuxt-link>

    </div>
</template>
<script>
import TheCartShippingDetail from "~/components/Payment/TheShippingPayDetail.vue";
import addCommaPrice from "~/modules/addCamaPrice.js";
import paymentGateway from "~/components/Payment/paymentGateway.vue";


export default {
  layout      : "removeFooterCart",
    components: {
        TheCartShippingDetail,
        paymentGateway
    },
    data() {
        return {
            updatePaymentGateway : 0,
        };
    },
  computed: {
    detailPrice() {
      return this.$store.getters["payment/payment/detailPrice"];
    }
  },

    mounted() {
      this.addComma();
    },

    methods: {
        goBack() {
            this.$router.push("/shipping");
        },

        addComma(){
          const getDetailPrice       = this.detailPrice;
          const setUpdateDetailPrice = {
          }

          for (let key in getDetailPrice) {
            setUpdateDetailPrice[key] = getDetailPrice[key];

            if (getDetailPrice[key] !== "رایگان") {
               setUpdateDetailPrice[key] = addCommaPrice(getDetailPrice[key]);
            }
          }
          this.$store.dispatch("payment/payment/updateDetailPrice", setUpdateDetailPrice);
        }

    }
};
</script>
<style lang="scss" scoped>
.card-shape__circle {
    @include display-flex();
    justify-content: center;
    align-items: center;
    width: toRem(19);
    height: toRem(19);
    border-radius: 50%;
    background-color: $yellow;
}
.card-shape__circle-inner {
    width: toRem(9.5);
    height: toRem(9.5);
    border-radius: 50%;
    background-color: $white;
}

.cart-container {
    margin: 0 auto;
    width: 100%;
    max-width: toRem(1920);
    height: fit-content;
}
.user-cart__container {
    padding: toRem(166) toRem(16) 0 toRem(16);
    width: 100%;
    height: fit-content;
    @include display-flex();
    flex-direction: column;
}
.user-cart__shipping-holder {
    @include display-flex();
    flex-direction: row;
    width: 100%;
    height: fit-content;
}
.user-cart__shipping-topic {
    font-size: toRem(18);
    line-height: 140.62%;
    text-align: right;
    margin-bottom: toRem(24);
}
.user-cart__shipping-container {
    @include display-flex();
    flex-direction: column;
    width: 70%;
    margin-left: toRem(30);
    border-radius: toRem(10);
    min-height: toRem(192);
    height: fit-content;
}
.user-shipping__title {
    font-family: inherit;
    font-size: toRem(18);
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
    margin: toRem(38) 0 toRem(38) 0;
    margin-right: 26px;
}
.user-shipping__address-btn,
.user-shipping__address-btn__mobile {
    font-family: inherit;
    font-size: toRem(16);
    line-height: 140.62%;
    margin: toRem(24) 0 toRem(24) 0;
    color: $gray;
    cursor: pointer;
}
.user-shipping__address-btn::after,
.user-shipping__address-btn__mobile::after {
    @include font-icon__limoo();
    content: "\e821";
    color: $yellow;
    font-size: toRem(24);
    margin-left: toRem(23);
    margin-right: toRem(8);
    vertical-align: middle;
}
.user-shipping__address-btn__mobile {
    display: none;
}
.user-cart__go-back {
    @include display-flex();
    text-decoration: none;
    color: $code-request;
    font-size: toRem(16);
    line-height: 140.62%;
    text-align: right;
    margin: toRem(24) toRem(18) toRem(60) 0;
}
.user-cart__go-back::before {
    @include font-icon__limoo();
    @include display-flex();
    content: "\e801";
    color: $code-request;
    font-size: toRem(12);
    margin-left: toRem(6);
    transform: rotate(180deg);
}
.mobile-screen__holder {
    display: none;
}
.user-cart__shipping-line {
    display: none;
}
.payment__line{
  width: 100%;
  height: toRem(1);
  background: $light-gray;
  @include display-flex();
}
.payment__header{
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
  background: $white;
}
.payment-content{
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.payment__address-main{
  background: $white;
  width: 100%;
  min-height: toRem(134);
  padding: toRem(24);
  margin-top: toRem(16);
  border-radius: toRem(10);
}
.payment__address-place::after{
  color: $gray;
  content: "\e817";
  @include font-icon__limoo();
  font-size: toRem(21);
}
.payment__address-place{
  margin-left: toRem(11);
}
.payment__address-title{
  font-size: toRem(16);
  color: $color-price;
  font-weight: 400;
  width: 91%;
}
.payment__address-item{
  margin-top: toRem(25);
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.payment__address-text{
  font-size: toRem(18);
  font-weight: 400;
}
.payment--mobile{
  display: none;
}
.payment__address-line{
  border-bottom:solid toRem(1) $gray-border;
  width: 100%;
  padding-bottom: toRem(16);
}



@include xl {
  .user-cart__shipping-container{
    width: 62.9%;
    margin-left: 2.1%;
  }
}

@include md {
    .user-shipping__address-btn {
        display: none;
    }
    .payment--desktop{
      display: none;
    }
    .user-cart__shipping-container{
      min-height: auto;
    }
    .payment__address-main {
      margin-top: 0;
      padding-right: 0;
      padding-left: 0;
      min-height: toRem(109);
    }
    .payment__header{
      border-radius: toRem(10) toRem(10) 0 0;
    }
    .payment__address-text{
      font-size: toRem(14);
      margin-right: toRem(11);
    }
    .payment__address-title{
      font-size: toRem(14);
      width: 90%;
    }
    .payment__address-place{
      margin-left: toRem(11);
    }
    .payment__address-place::after{
      font-size: toRem(16);
    }
    .user-shipping__address-btn__mobile {
        display: block;
        font-family: inherit;
        font-size: toRem(13);
        line-height: 140.62%;
        margin: toRem(8) 0 toRem(24) 0;
        color: $gray;
        text-align: left;
        cursor: pointer;
    }
    .user-shipping__address-btn__mobile::after {
        font-size: toRem(19);
        margin-left: toRem(2);
        margin-right: toRem(4);
    }
    .user-cart__shipping-line {
        display: block;
        margin: 0 auto toRem(16) auto;
        width: 100%;
        border-top: toRem(1) solid $gray-border;
    }
    .user-cart__container {
        padding: toRem(47) 0 0 0;
        margin-bottom: toRem(60);
        flex-direction: column;
    }
    .user-cart__shipping-holder {
        flex-direction: column;
        padding: 0 toRem(5);
    }
    .user-cart__shipping-container {
        width: 100%;
        margin-left: 0;
    }
    .user-cart__go-back {
        display: none;
    }
    .user-shipping__title {
        font-size: toRem(14);
        margin: toRem(16) toRem(11) 0 0;
    }
    .user-cart__shipping-topic {
        display: none;
    }
    .mobile-screen__holder {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: toRem(56);
        background: $white;
        margin-bottom: toRem(8);
        padding: 0 toRem(16);
    }
    .mobile-screen__arrow::before {
        content: "\e801";
        @include font-icon__limoo();
        font-size: toRem(16);
        color: $gray;
        font-weight: bold;
    }
    .payment__line{
      display: none;
    }
    .payment--mobile{
      display: flex;
      flex-wrap: wrap;
      margin-top: toRem(8);
    }
    .payment__address-main{
      padding-bottom: toRem(16);
      padding-top: toRem(16);
    }
    .payment__address-item{
      margin-top: toRem(18);
      padding-left: toRem(11);
      padding-right: toRem(11);
    }

}
</style>
