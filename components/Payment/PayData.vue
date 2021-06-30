<template>
  <div class="cart-detail__payment">

    <div class="pay__detail-content w-100">
      <div class="w-100 pay__detail-discount">
        <div :class="{'active--discount':activeDiscount}" class="w-100 pay-discount__message-content">
          <h3 class="pay-detail__discount-text shipping--mobile">کد تخفیف دارید؟</h3>
          <div class="pay-detail__discount-item">
            <div class="pay-detail__discount-right">
              <span class="pay-detail__discount-icon"></span>
              <input :disabled="cancelDiscount" v-model="payDiscount" maxlength="20" placeholder="کد تخفیف..."
                     class="pay-detail__discount-input" type="text" name="" value="">
            </div>
            <div v-if="!cancelDiscount" class="pay-detail__discount-left">
              <base-button base-color="yellow" @button-clicked="submitDiscount" :disabled="!payDiscount" classes="pay-detail__discount-btn">
               {{ getTextByTextKey("apply_code") }}
              </base-button>
            </div>
            <div v-else class="pay-detail__discount-left">
              <base-button base-color="light" @button-clicked="submitCancelDiscount" classes="pay-detail__discount-btn">
                لغو کد
              </base-button>
            </div>
          </div>
          <div :class="{'show--messageDiscount':messageDiscount.show}" class="w-100 pay-detail__message-main">
            <img class="pay-detail__message" src="/icons/discountMessage-icon.svg" alt="">
            <h3 class="pay-detail__message-text">{{ messageDiscount.msg }}</h3>
          </div>
        </div>
      </div>


      <div class="w-100">
        <div class="w-100 cart-detail__text shipping--mobile">
          <h3 class="cart-detail__title">فاکتور</h3>
        </div>

        <div class="cart-detail__items">

          <div class="w-100 pay__detail-item">
            <div class="w-100 cart-detail__text shipping--desktop">
              <h3 class="cart-detail__title">صورتحساب</h3>
            </div>

            <span class="cart-detail__line "></span>


            <div class="w-100 cart-detail__content">
              <div class="cart-detail__item">
                <div class="cart-detail__right">
                  <img src="/icons/coin.svg" class="cart-detail__icon" alt="">
                  <h3 class="cart-detail__right-title">قیمت محصولات:</h3>
                </div>
                <div class="cart-detail__left">
                  <h3 class="cart-detail__left-title">{{ detailPrice.price }}</h3>
                  <h3 class="cart-detail__left-title">تومان</h3>
                </div>
              </div>

              <div class="cart-detail__item">
                <div class="cart-detail__right">
                  <img src="/icons/Discount-cart.svg" class="cart-detail__icon discount--icon" alt="">
                  <h3 class="cart-detail__right-title">تخفیف کل:</h3>
                </div>
                <div class="cart-detail__left">
                  <h3 class="cart-detail__left-title">{{ detailPrice.totalDiscount }}</h3>
                  <h3 class="cart-detail__left-title">تومان</h3>
                </div>
              </div>

              <div class="cart-detail__item">
                <div class="cart-detail__right">
                  <img src="/icons/car.svg" class="cart-detail__icon car--icon" alt="">
                  <h3 class="cart-detail__right-title">هزینه ارسال:</h3>
                </div>
                <div class="cart-detail__left">
                  <h3 class="cart-detail__left-title">{{ detailPrice.submitDeliveryPrice }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>


    <div class="cart-detail__btn w-100">
      <div class="w-100">
        <div class="shipping-btn__item">
          <div class="shipping-btn__right">
            <h3 class="cart-detail__right-title">مبلغ قابل پرداخت :</h3>
          </div>
          <div class="shipping-btn__left">
            <h3 class="cart-detail__left-title">{{ detailPrice.totalPrice }}</h3>
            <h3 class="cart-detail__left-title">تومان</h3>
          </div>
        </div>
      </div>
      <div class="w-100 justify-content-center">
        <base-button link to="/shipping" no-box-shadow classes="cart-detail__btn-item">
          خرید نهایی
        </base-button>
      </div>
    </div>


  </div>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    detailPrice: { type: [Object, Array], default: [] },
  },

  components: {},

  data() {
    return {
      payDiscount: "",
      activeDiscount: false,
      messageDiscount: {
        show: false,
        msg: "کد تخقیف 30% برای شمال اعمال شد",
      },
      cancelDiscount: false,
    };
  },

  watch: {
    payDiscount(value) {
      if (value != "") {
        this.activeDiscount = true;
      } else {
        this.activeDiscount = false;
      }

    },

  },

  methods: {
    submitDiscount() {
      this.messageDiscount.show = true;
      this.messageDiscount.msg = "کد تخقیف 30% برای شمال اعمال شد";
      this.cancelDiscount = true;
    },

    submitCancelDiscount() {
      this.cancelDiscount = false;
      this.messageDiscount.show = false;
      this.payDiscount = "";
    },
    getTextByTextKey,

  },

};
</script>


<style lang="scss" scoped>
.cart-detail__container {
  width: 30%;
  /* border: 1px solid red; */
  height: 600px;
  text-align: center;
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
}

.cart-detail__payment {
  width: 100%;
  background-color: $white;
  border-radius: 10px;
  padding-right: 24px;
  padding-left: 24px;
  @include display-flex();
  align-items: flex-start;
  flex-flow: column;
  padding-bottom: 27px;
}

.cart-detail__item {
  @include display-flex();
  align-items: center;
  flex-wrap: wrap;
  margin-top: 28px;
  width: 100%;
}

.cart-detail__item:nth-child(1) {
  margin-top: 0;
}

.cart-detail__right {
  @include display-flex();
  align-items: flex-start;
  flex-grow: 1;
}

.cart-detail__left {
  @include display-flex();
  align-items: flex-start;
}

.cart-detail__right-title {
  margin-right: 8px;
  font-size: 16px;
  color: $color_discount;
  font-weight: 300;
}

.cart-detail__left-title {
  font-size: 16px;
  color: $color_discount;
  font-weight: 300;
  margin-left: 6px;
}

.cart-detail__left-title:last-of-type {
  margin-left: 0;
}

.cart-detail__items {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 0;
  border: 1px solid $chinese_white;
  padding-right: 18px;
  padding-left: 18px;
  padding-bottom: 24px;
  border-radius: 10px;
}

.cart-detail__total {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
}

.cart-detail__line {
  background: $chinese_white;
  width: 94%;
  height: 1px;
  @include display-flex();
  margin-right: auto;
  margin-left: auto;
  opacity: .8;
}

.cart-detail__total .cart-detail__item {
  margin-top: 18px;
}

.red--pay {
  color: $red-color;
}

.cart-detail__icon {
  width: 18px;
  height: 18px;
}

.discount--icon {
  width: 21px;
  height: 21px;
}

.car--icon {
  width: 21px;
  height: 21px;
}

.cart-detail__btn-item{
  width: 85%;
  height: 61px;

}
.remove--border {
  border-color: $btn__green;
}

.btn--debtor {
  background: $white;
  color: $gray;
}

.cart-detail__btn {
  margin-top: 56px;
}

.cart-detail__about {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 27px;
}

.cart-detail__about-item {
  width: 100%;
  height: 72px;
  background: $white;
  border-radius: 10px;
  margin-bottom: 16px;
  @include display-flex();
  align-items: center;
  padding-right: 16px;
  padding-left: 16px;
}

.cart-detail__about-item:last-of-type {
  margin-bottom: 0;
}

.cart-detail__main {
  width: 100%;
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  box-shadow: 0px 4px 4px $gray-border;
  z-index: 1;
}

.cart-detail__about-title {
  color: $gray;
  font-weight: 400;
  margin-right: 8px;
  font-size: 16px;
}

.cart-detail__title {
  font-size: 18px;
  color: $black-topic;
  font-weight: 400;
  text-align: right;
}

.cart-detail__text {
  margin-top: 16px;
  margin-bottom: 16px;
}

.cart-detail__total .cart-detail__right-title {
  margin-right: 0;
}

.cart-detail__btn-link {
  color: $white;
  text-decoration: none;
  height: 53px;
  @include display-flex();
  justify-content: center;
  align-items: center;
  font-size: 16px;
}

.btn--debtor .cart-detail__btn-link {
  color: $gray;
}

.shipping-btn__item {
  @include display-flex();
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 26px;
}

.shipping-btn__left {
  @include display-flex();
  margin-right: 10px;
}

.shipping-btn__item .cart-detail__left-title {
  color: $black-topic;
}

.shipping-btn__item .cart-detail__right-title {
  color: $black-topic;
}

.cart-detail__content {
  margin-top: 16px;
}

.shipping--mobile {
  display: none;
}

// *** start payment css //
.pay__detail-content {
  @include display-flex();
  align-items: flex-start;
  flex-flow: column;
  margin-top: 33px;
}

.pay__detail-discount {
  width: 97%;
  margin-right: auto;
  margin-left: auto;
}

.pay-detail__discount-input {
  width: 72%;
  outline: none;
  border: none;
  height: 100%;
  font-family: inherit;
  font-size: 16px;
  color: $gray;
  margin-right: 16px;
}

.pay-detail__discount-item {
  position: relative;
  // margin-bottom: 47px;
  height: 72px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  box-shadow: 0px 4px 4px #F2F2F2;
  border-radius: 10px;
  @include display-flex();
  align-items: center;
  padding-right: 16px;
  padding-left: 8px;
  flex-wrap: wrap;
  width: 100%;
}

.pay-detail__discount-btn {
  font-size: 14px;
  height: 47px;
  width: 139px;
  font-family: inherit;
}

.pay-detail__discount-left {
  justify-content: flex-end;
  flex-grow: 1;
  @include display-flex();
  width: 40%;
}

.pay-detail__discount-icon::after {
  @include font-icon__limoo();
  content: "\e80d";
  font-size: 16px;
  color: #bdbdbd;
}

.pay-detail__discount-right {
  @include display-flex();
  align-items: flex-start;
  width: 60%;
}

.pay-detail__discount-text {
  margin-bottom: 16px;
  font-weight: 400;
  color: $black-topic;
  text-align: right;
  font-size: 14px;
}

.pay-detail__message-main {
  @include display-flex();
  align-items: flex-start;
  margin-top: 16px;
  margin-bottom: 47px;
  padding-right: 3px;
  opacity: 0;
  pointer-events: none;
}

.pay-discount__message-content {
  @include display-flex();
  align-items: flex-start;
  flex-direction: column;
}

.pay-detail__message-text {
  font-size: 13px;
  font-weight: 400;
  color: $green__answer;
  margin-right: 8px;
}

.active--discount .pay-detail__discount-btn {
  background: $yellow;
  color: $white;
}

.show--messageDiscount {
  opacity: 1;
  pointer-events: all;
}

.pay-detail__discount-input:disabled {
  background: inherit;
}


@media (max-width: 1280px) {
  .pay-detail__discount-item {
    height: auto;
  }
  .pay-detail__discount-left {
    margin-top: 16px;
    width: 100%;
    margin-bottom: 16px;
  }
  .pay-detail__discount-right {
    width: 100%;
    margin-top: 16px;
  }
}


@media (max-width: 960px) {
  .pay-detail__discount-item {
    border-color: $gray;
    height: 57px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  .cart-detail__text {
    margin-top: 0;
  }
  .pay-detail__discount-input {
    font-size: 13px;
  }
  .pay__detail-discount {
    width: 100%;
  }
  .pay-detail__discount-icon::after {
    color: $gray;
  }
  .pay-detail__discount-left {
    width: 40%;
    margin-top: 0;
    margin-bottom: 0;
  }
  .pay-detail__discount-right {
    width: 60%;
    margin-top: 5px;
  }
  .shipping-btn__right .cart-detail__right-title {
    font-size: 13px;
  }
  .shipping-btn__item .cart-detail__left-title {
    font-size: 13px;
  }
  .cart-detail__right-title {
    font-size: 13px;
  }
  .cart-detail__left-title {
    font-size: 13px;
  }
  .cart-detail__btn-item {
    width: 100% !important;
  }
  .cart-detail__title {
    font-size: 14px;
  }
  .shipping-btn__right {
    flex-grow: 1;
    justify-content: flex-start;
    @include display-flex();
  }
  .shipping-btn__item {
    margin-bottom: 10px;
    margin-top: 16px;
    padding-right: 6px;
    padding-left: 13px;
  }
  .shipping--mobile {
    @include display-flex();
  }
  .cart-detail__item:nth-child(1) {
    margin-top: 0;
  }
  .cart-detail__item {
    margin-top: 22px;
  }
  .cart-detail__container {
    width: 100%;
    margin-top: 0;
  }
  .cart-detail__items {
    border: solid 1px $google-btn__bg;
    border-radius: 10px;
    padding-right: 0px;
    padding-left: 0px;
    padding-bottom: 22px;
    margin-top: 0;
  }
  .cart-detail__total {
    margin-bottom: 16px;
    padding-right: 12px;
    padding-left: 12px;
  }
  .cart-detail__content {
    padding-right: 12px;
    padding-left: 12px;
  }
  .cart-detail__line {
    width: 100%;
    background: $google-btn__bg;
    height: 1px;
    margin-top: 16px;
  }
  .btn--debtor {
    display: none;
  }
  .cart-detail__btn {
    z-index: 11;
    position: fixed;
    bottom: 58px;
    right: 0;
    background: $white;
    padding-bottom: 8px;
    padding-right: 16px;
    padding-left: 16px;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.09);
  }
  .cart-detail__icon {
    height: 17px;
    height: 17px;
  }
  .car--icon {
    width: 19px;
    height: 19px;
  }
  .discount--icon {
    width: 17px;
    height: 17px;
  }
  .cart-detail__text {
    @include display-flex();
  }
  .cart-detail__line {
    display: none;
  }
  .shipping--desktop {
    display: none;
  }
  .pay__detail-content {
    margin-top: 24px;
  }
  .pay-detail__message-main {
    margin-bottom: 24px;
  }
}

@media (max-width: 485px) {

}

</style>
