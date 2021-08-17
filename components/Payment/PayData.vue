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
            <span class="pay-detail__message"></span>
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
<!--                  <img src="/icons/coin.svg" class="cart-detail__icon" alt="">-->
                  <span class="cart-detail__coin"></span>
                  <h3 class="cart-detail__right-title">قیمت محصولات:</h3>
                </div>
                <div class="cart-detail__left">
                  <h3 class="cart-detail__left-title">{{ detailPrice.price }}</h3>
                  <h3 class="cart-detail__left-title">تومان</h3>
                </div>
              </div>

              <div class="cart-detail__item">
                <div class="cart-detail__right">
<!--                  <img src="/icons/Discount-cart.svg" class="cart-detail__icon discount&#45;&#45;icon" alt="">-->
                  <span class="cart-detail__discount"></span>
                  <h3 class="cart-detail__right-title">تخفیف کل:</h3>
                </div>
                <div class="cart-detail__left">
                  <h3 class="cart-detail__left-title">{{ detailPrice.totalDiscount }}</h3>
                  <h3 class="cart-detail__left-title">تومان</h3>
                </div>
              </div>

              <div class="cart-detail__item">
                <div class="cart-detail__right">
<!--                  <img src="/icons/car.svg" class="cart-detail__icon car&#45;&#45;icon" alt="">-->
                  <span class="cart-detail__car"></span>
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
  height: toRem(600);
  text-align: center;
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
}

.cart-detail__payment {
  width: 100%;
  background-color: $white;
  border-radius: toRem(10);
  padding-right: toRem(24);
  padding-left: toRem(24);
  @include display-flex();
  align-items: flex-start;
  flex-flow: column;
  padding-bottom: toRem(27);
}

.cart-detail__item {
  @include display-flex();
  align-items: center;
  flex-wrap: wrap;
  margin-top: toRem(28);
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
.cart-detail__coin,
.cart-detail__car,
.cart-detail__discount {
  width: toRem(19);
}
.cart-detail__coin::after {
  content: "\e809";
  @include font-icon__limoo();
  font-size: toRem(18);
  color: $gray-2;
}
.cart-detail__discount::after {
  content: "\e81e";
  @include font-icon__limoo();
  font-size: toRem(17);
  color: $gray-2;
}
.cart-detail__car::after {
  content: "\e80a";
  @include font-icon__limoo();
  font-size: toRem(13);
  color: $gray-2;
}
.cart-detail__left {
  @include display-flex();
  align-items: flex-start;
}

.cart-detail__right-title {
  margin-right: toRem(8);
  font-size: toRem(16);
  color: $color_discount;
  font-weight: 300;
}

.cart-detail__left-title {
  font-size: toRem(16);
  color: $color_discount;
  font-weight: 300;
  margin-left: toRem(6);
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
  border: toRem(1) solid $chinese_white;
  padding-right: toRem(18);
  padding-left: toRem(18);
  padding-bottom: toRem(24);
  border-radius: toRem(10);
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
  height: toRem(1);
  @include display-flex();
  margin-right: auto;
  margin-left: auto;
  opacity: .8;
}

.cart-detail__total .cart-detail__item {
  margin-top: toRem(18);
}

.red--pay {
  color: $red-color;
}

.cart-detail__btn-item{
  width: 85%;
  height: toRem(61);

}
.remove--border {
  border-color: $btn__green;
}

.btn--debtor {
  background: $white;
  color: $gray;
}

.cart-detail__btn {
  margin-top: toRem(56);
}

.cart-detail__about {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: toRem(27);
}

.cart-detail__about-item {
  width: 100%;
  height: toRem(72);
  background: $white;
  border-radius: toRem(10);
  margin-bottom: toRem(16);
  @include display-flex();
  align-items: center;
  padding-right: toRem(16);
  padding-left: toRem(16);
}

.cart-detail__about-item:last-of-type {
  margin-bottom: 0;
}

.cart-detail__main {
  width: 100%;
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  box-shadow: 0 toRem(4) toRem(4) $gray-border;
  z-index: 1;
}

.cart-detail__about-title {
  color: $gray;
  font-weight: 400;
  margin-right: toRem(8);
  font-size: toRem(16);
}

.cart-detail__title {
  font-size: toRem(18);
  color: $black-topic;
  font-weight: 400;
  text-align: right;
}

.cart-detail__text {
  margin-top: toRem(16);
  margin-bottom: toRem(16);
}

.cart-detail__total .cart-detail__right-title {
  margin-right: 0;
}

.cart-detail__btn-link {
  color: $white;
  text-decoration: none;
  height: toRem(53);
  @include display-flex();
  justify-content: center;
  align-items: center;
  font-size: toRem(16);
}

.btn--debtor .cart-detail__btn-link {
  color: $gray;
}

.shipping-btn__item {
  @include display-flex();
  align-items: flex-start;
  justify-content: center;
  margin-bottom: toRem(26);
}

.shipping-btn__left {
  @include display-flex();
  margin-right: toRem(10);
}

.shipping-btn__item .cart-detail__left-title {
  color: $black-topic;
}

.shipping-btn__item .cart-detail__right-title {
  color: $black-topic;
}

.cart-detail__content {
  margin-top: toRem(16);
}

.shipping--mobile {
  display: none;
}

// *** start payment css //
.pay__detail-content {
  @include display-flex();
  align-items: flex-start;
  flex-flow: column;
  margin-top: toRem(33);
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
  font-size: toRem(16);
  color: $gray;
  margin-right: toRem(16);
}

.pay-detail__discount-item {
  position: relative;
  @extend .align-center;
  height: toRem(72);
  background: #FFFFFF;
  border: toRem(1) solid #E0E0E0;
  box-shadow: 0 toRem(4) toRem(4) #F2F2F2;
  border-radius: toRem(10);
  @include display-flex();
  align-items: center;
  padding-right: toRem(16);
  padding-left: toRem(8);
  flex-wrap: wrap;
  width: 100%;
}

.pay-detail__discount-btn {
  font-size: toRem(14);
  height: toRem(47);
  width: toRem(139);
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
  font-size: toRem(16);
  color: $gray-3;
}

.pay-detail__discount-right {
  @include display-flex();
  align-items: flex-start;
  width: 60%;
}

.pay-detail__discount-text {
  margin-bottom: toRem(16);
  font-weight: 400;
  color: $black-topic;
  text-align: right;
  font-size: toRem(14);
}

.pay-detail__message-main {
  @include display-flex();
  align-items: flex-start;
  margin-top: toRem(16);
  margin-bottom: toRem(47);
  padding-right: toRem(3);
  opacity: 0;
  pointer-events: none;
}
.pay-detail__message {
  line-height: toRem(18);
  &::before {
    content: "\e831";
    @include font-icon__limoo();
    font-size: toRem(14);
    color: $green__answer;
  }
}

.pay-discount__message-content {
  @include display-flex();
  align-items: flex-start;
  flex-direction: column;
}

.pay-detail__message-text {
  font-size: toRem(13);
  font-weight: 400;
  color: $green__answer;
  margin-right: toRem(8);
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
    margin-top: toRem(16);
    margin-bottom: toRem(16);
  }
}


@media (max-width: 960px) {
  .pay-detail__discount-item {
    height: toRem(57);
    padding-top: toRem(4);
    padding-bottom: toRem(4);
    padding-left: toRem(4.8);
  }
  .cart-detail__text {
    margin-top: 0;
  }
  .pay-detail__discount-input {
    font-size: toRem(13);
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
    margin-top: toRem(5);
  }
  .shipping-btn__right .cart-detail__right-title {
    font-size: toRem(13);
  }
  .shipping-btn__item .cart-detail__left-title {
    font-size: toRem(13);
  }
  .cart-detail__right-title {
    font-size: toRem(13);
  }
  .cart-detail__left-title {
    font-size: toRem(13);
  }
  .cart-detail__btn-item {
    width: 100% !important;
  }
  .cart-detail__title {
    font-size: toRem(14);
  }
  .shipping-btn__right {
    flex-grow: 1;
    justify-content: flex-start;
    @include display-flex();
  }
  .shipping-btn__item {
    margin-bottom: toRem(10);
    margin-top: toRem(16);
    padding-right: toRem(6);
    padding-left: toRem(13);
  }
  .shipping--mobile {
    @include display-flex();
  }
  .cart-detail__item:nth-child(1) {
    margin-top: 0;
  }
  .cart-detail__item {
    margin-top: toRem(22);
  }
  .cart-detail__container {
    width: 100%;
    margin-top: 0;
  }
  .cart-detail__items {
    border: solid toRem(1) $google-btn__bg;
    border-radius: toRem(10);
    padding-right: 0;
    padding-left: 0;
    padding-bottom: toRem(22);
    margin-top: 0;
  }
  .cart-detail__total {
    margin-bottom: toRem(16);
    padding-right: toRem(12);
    padding-left: toRem(12);
  }
  .cart-detail__content {
    padding-right: toRem(12);
    padding-left: toRem(12);
  }
  .cart-detail__line {
    width: 100%;
    background: $google-btn__bg;
    height: toRem(1);
    margin-top: toRem(16);
  }
  .btn--debtor {
    display: none;
  }
  .cart-detail__btn {
    z-index: 11;
    position: fixed;
    bottom: toRem(58);
    right: 0;
    background: $white;
    padding-bottom: toRem(8);
    padding-right: toRem(16);
    padding-left: toRem(16);
    box-shadow: 0 toRem(1) toRem(15) rgba(0, 0, 0, 0.09);
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
    margin-top: toRem(24);
  }
  .pay-detail__message-main {
    margin-bottom: toRem(24);
  }
}
@media (max-width: 768px) {
  .cart-detail__coin::after {
    font-size: toRem(15);
  }
  .cart-detail__discount::after {
    font-size: toRem(14);
  }
  .cart-detail__car::after {
    font-size: toRem(11);
  }
};
</style>
