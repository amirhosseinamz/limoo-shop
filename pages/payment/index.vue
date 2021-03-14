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
                                  <payment-gateway :key="updatePaymentGateway" :payment-gateway="paymentGateway" @selected-getway="selectedGetway"></payment-gateway>
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
        <nuxt-link to="/" class="user-cart__go-back">بازگشت</nuxt-link>

    </div>
</template>
<script>
import TheCartShippingDetail from "~/components/Payment/TheShippingPayDetail.vue";
import addCamaPrice from "~/modules/addCamaPrice.js";
import paymentGateway from "~/components/Payment/paymentGateway.vue";


export default {
  layout      : "removeFooterCart",
    components: {
        TheCartShippingDetail,
        paymentGateway
    },
    data() {
        return {
            detailPrice  : {
              price               : 12000,
              totalDiscount       : 142250,
              submitDeliveryPrice : 'رایگان',
              totalPrice          : 2587000,
            },
            paymentGateway : [
                {
                  id    : 1,
                  title : 'آسان پرداخت',
                },
                {
                  id    : 2,
                  title : 'کیف پول دایور',
                },
                {
                  id    : 3,
                  title : 'بانک ملت',
                },
            ],
            updatePaymentGateway : 0,
        };
    },

    mounted() {
      this.addCama();
    },

    methods: {
        goBack() {
            this.$router.push("/cart");
        },

        addCama(){
          const getDetailPrice       = this.detailPrice;
          const setUpdateDetailPrice = {
          }

          for (let key in getDetailPrice) {
            setUpdateDetailPrice[key] = getDetailPrice[key];

            if (getDetailPrice[key] != 'رایگان') {
               setUpdateDetailPrice[key] = addCamaPrice(getDetailPrice[key]);
            }
          }

          this.detailPrice = setUpdateDetailPrice;
        },

        selectedGetway(data){
          this.paymentGateway.map((content)=>{
              if (data.id == content.id) {
                content.selected = true;
              }
              else {
                content.selected = false;
              }
          })
          this.updatePaymentGateway++;
        }

    }
};
</script>
<style lang="scss" scoped>
.card-shape__circle {
    @include display-flex();
    justify-content: center;
    align-items: center;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: $yellow;
    /* background-color: $light-gray; */
}
.card-shape__circle-inner {
    width: 9.5px;
    height: 9.5px;
    border-radius: 50%;
    background-color: $white;
}
/*  */
.cart-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    height: fit-content;
}
.user-cart__container {
    padding: 166px 16px 0 16px;
    /* margin-bottom: 60px; */
    width: 100%;
    height: fit-content;
    @include display-flex();
    flex-direction: column;
    /* border: 1px solid red; */
}
.user-cart__shipping-holder {
    @include display-flex();
    flex-direction: row;
    width: 100%;
    height: fit-content;
}
.user-cart__shipping-topic {
    font-size: 18px;
    line-height: 140.62%;
    text-align: right;
    margin-bottom: 24px;
}
.user-cart__shipping-container {
    @include display-flex();
    flex-direction: column;
    width: 70%;
    /* border: 1px solid blue; */
    margin-left: 30px;
    border-radius: 10px;
    min-height: 192px;
    height: fit-content;
}
.user-shipping__title {
    font-family: inherit;
    font-size: 18px;
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
    margin: 38px 0 38px 0;
    /* border: 1px solid blue; */
    margin-right: 26px;
}
.user-shipping__address-btn,
.user-shipping__address-btn__mobile {
    font-family: inherit;
    font-size: 16px;
    line-height: 140.62%;
    margin: 24px 0 24px 0;
    color: $gray;
    cursor: pointer;
}
.user-shipping__address-btn::after,
.user-shipping__address-btn__mobile::after {
    @include font-icon__limoo();
    content: "\e821";
    color: $yellow;
    font-size: 24px;
    margin-left: 23px;
    margin-right: 8px;
    vertical-align: middle;
}
.user-shipping__address-btn__mobile {
    display: none;
}
.user-cart__go-back {
    @include display-flex();
    text-decoration: none;
    color: $code-request;
    font-size: 16px;
    line-height: 140.62%;
    text-align: right;
    margin: 24px 18px 60px 0;
}
.user-cart__go-back::before {
    @include font-icon__limoo();
    @include display-flex();
    content: "\e801";
    color: $code-request;
    font-size: 12px;
    margin-left: 6px;
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
  height: 1px;
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
  min-height: 134px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
  margin-top: 16px;
  border-radius: 10px;
}
.payment__address-place::after{
  color: $gray;
  content: "\e817";
  @include font-icon__limoo();
  font-size: 21px;
}
.payment__address-place{
  margin-left: 11px;
}
.payment__address-title{
  font-size: 16px;
  color: $color-price;
  font-weight: 400;
  width: 91%;
}
.payment__address-item{
  margin-top: 25px;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.payment__address-text{
  font-size: 18px;
  font-weight: 400;
}
.payment--mobile{
  display: none;
}
.payment__address-line{
  border-bottom:solid 1px $gray-border;
  width: 100%;
  padding-bottom: 16px;
}



@media (max-width: 1400px) {
  .user-cart__shipping-container{
    width: 62.9%;
    margin-left: 2.1%;
  }
}

@media (max-width: 960px) {
    .user-shipping__address-btn {
        display: none;
    }
    .payment--desktop{
      display: none;
    }
    .user-cart__shipping-container{
      min-height: auto;
    }
    .payment__address-main{
      margin-top: 0;
      padding-right: 0px;
      padding-left: 0px;
      min-height: 109px;
    }
    .payment__header{
      border-radius: 0;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
    .payment__address-text{
      font-size: 14px;
      margin-right: 11px;
    }
    .payment__address-title{
      font-size: 14px;
      width: 90%;
    }
    .payment__address-place{
      margin-left: 11px;
    }
    .payment__address-place::after{
      font-size: 16px;
    }
    .user-shipping__address-btn__mobile {
        display: block;
        font-family: inherit;
        font-size: 13px;
        line-height: 140.62%;
        margin: 8px 0 24px 0;
        color: $gray;
        text-align: left;
        cursor: pointer;
    }
    .user-shipping__address-btn__mobile::after {
        font-size: 19px;
        margin-left: 2px;
        margin-right: 4px;
    }
    .user-cart__shipping-line {
        display: block;
        margin: 0 auto 16px auto;
        width: 100%;
        border-top: 1px solid $gray-border;
    }
    .user-cart__container {
        padding: 47px 0 0 0;
        margin-bottom: 60px;
        flex-direction: column;
    }
    .user-cart__shipping-holder {
        flex-direction: column;
        padding: 0 5px;
    }
    .user-cart__shipping-container {
        width: 100%;
        /* border: 1px solid blue; */
        margin-left: 0;
    }
    .user-cart__go-back {
        display: none;
    }
    .user-shipping__title {
        font-size: 14px;
        margin: 16px 11px 0px 0;
        /* border: 1px solid blue; */
    }
    .user-cart__shipping-topic {
        display: none;
    }
    .mobile-screen__holder {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 56px;
        background: $white;
        margin-bottom: 8px;
        padding: 0 16px;
    }
    .mobile-screen__arrow::before {
        content: "\e801";
        @include font-icon__limoo();
        font-size: 16px;
        color: $gray;
        font-weight: bold;
        /* margin-right: 4px;
        margin-left: 8px; */
    }
    .payment__line{
      display: none;
    }
    .payment--mobile{
      display: flex;
      flex-wrap: wrap;
      margin-top: 8px;
    }
    .payment__address-main{
      padding-bottom: 16px;
      padding-top: 16px;
    }
    .payment__address-item{
      margin-top: 18px;
      padding-left: 11px;
      padding-right: 11px;
    }

}
</style>
