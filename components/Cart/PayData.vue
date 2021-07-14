<template>
  <div class="cart-detail__payment">
    <div class="w-100 cart-detail__text">
      <h3 class="cart-detail__title">صورتحساب</h3>
    </div>
    <div class="cart-detail__items">
      <div class="w-100 cart-detail__content">
        <div class="cart-detail__item">
          <div class="cart-detail__right">
            <!-- <img src="/icons/coin.svg" class="cart-detail__icon" alt=""> -->
            <span class="cart-detail__coin" alt=""></span>

            <h3 class="cart-detail__right-title">قیمت محصولات:</h3>
          </div>
          <div class="cart-detail__left">
            <h3 class="cart-detail__left-title">{{ detailPrice.price }}</h3>
            <h3 class="cart-detail__left-title">تومان</h3>
          </div>
        </div>

        <div class="cart-detail__item">
          <div class="cart-detail__right">
            <img
              src="/icons/Discount-cart.svg"
              class="cart-detail__icon discount--icon"
              alt=""
            />
            <!-- <span class="cart-detail__discount"></span> -->
            <h3 class="cart-detail__right-title">تخفیف کل:</h3>
          </div>
          <div class="cart-detail__left">
            <h3 class="cart-detail__left-title">
              {{ detailPrice.totalDiscount }}
            </h3>
            <h3 class="cart-detail__left-title">تومان</h3>
          </div>
        </div>

        <div class="cart-detail__item">
          <div class="cart-detail__right">
            <img
              src="/icons/car.svg"
              class="cart-detail__icon car--icon"
              alt=""
            />
            <h3 class="cart-detail__right-title">هزینه ارسال:</h3>
          </div>
          <div class="cart-detail__left">
            <h3 class="cart-detail__left-title">
              {{ detailPrice.submitDeliveryPrice }}
            </h3>
          </div>
        </div>
      </div>

      <span class="cart-detail__line line--desk"></span>

      <div class="cart-detail__total">
        <div class="cart-detail__item">
          <div class="cart-detail__right">
            <h3 class="cart-detail__right-title green--pay">
              جمع قابل پرداخت:
            </h3>
          </div>
          <div class="cart-detail__left">
            <h3 class="cart-detail__left-title green--pay">
              {{ detailPrice.totalPrice }}
            </h3>
            <h3 class="cart-detail__left-title green--pay">تومان</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="cart-detail__btn w-100">
      <base-button link to="/shipping" no-box-shadow block classes="continue-purchase">ادامه فرایند خرید</base-button>
      <base-button link block no-box-shadow to="/shipping" base-color="gray" mode="secondary" classes="cart-detail__btn-item">
        خرید اقساطی کالا
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "../UI/BaseButton";
export default {
  props: {
    detailPrice: { type: [Object, Array], default: [] },
  },

  components: { BaseButton },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.cart-detail__container {
  width: 30%;
  /* border: 1px solid red; */
  height: 600px;
  text-align: center;
  margin-top: 49px;
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
}
.cart-detail__payment {
  width: 100%;
  background-color: $white;
  border-radius: 10px;
  padding-right: 42px;
  padding-left: 42px;
  @include display-flex();
  align-items: flex-start;
  flex-flow: column;
  padding-bottom: 42px;
}
.cart-detail__item {
  @include display-flex();
  align-items: center;
  flex-wrap: wrap;
  margin-top: 24px;
  width: 100%;
}
.cart-detail__item:nth-child(1) {
  margin-top: 16px;
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
  margin-right: 12px;
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
  height: 2px;
  @include display-flex();
  margin-top: 27px;
  margin-right: auto;
  margin-left: auto;
}
.cart-detail__total .cart-detail__item {
  margin-top: 16px;
}
.green--pay {
  color: $green__answer;
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
.cart-detail__btn-item {
  height: 57px;
  margin-top: 1.5rem;
}
.continue-purchase {
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
  margin-top: 18px;
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
  box-shadow: 0px 4px 4px $gray-border;
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
}
.cart-detail__about-title {
  color: $gray;
  font-weight: 400;
  margin-right: 8px;
  font-size: 16px;
}
.cart-detail__title {
  font-size: 14px;
  color: $black-topic;
  font-weight: 400;
  text-align: right;
}
.cart-detail__text {
  margin-top: 16px;
  margin-bottom: 23px;
  display: none;
}
.cart-detail__total .cart-detail__right-title {
  margin-right: 0;
}
.cart-detail__btn-link {
  color: $white;
  text-decoration: none;
  height: 57px;
  @include display-flex();
  justify-content: center;
  align-items: center;
}
.btn--debtor .cart-detail__btn-link {
  color: $gray;
}
.cart-detail__coin::after {
  content: "\e809";
  @include font-icon__limoo();
  font-size: 18px;
}
.cart-detail__discount::after {
  content: "\e80d";
  @include font-icon__limoo();
  font-size: 18px;
}

@media (max-width: 1500px) {
  // .cart-detail__total .cart-detail__item{
  //   margin-top: 16px;
  // }
  // .cart-detail__item:nth-child(1){
  //   margin-top: 16px;
  // }
}

@media (max-width: 1300px) {
  .cart-detail__right-title {
    font-size: 13px;
  }
  .cart-detail__left-title {
    font-size: 13px;
  }
  .cart-detail__icon {
    width: 14px;
    height: 14px;
  }
  .cart-detail__btn-item {
    width: 100%;
  }
}

@media (max-width: 960px) {
  .cart-detail__item:nth-child(1) {
    margin-top: 16px;
  }
  .cart-detail__item {
    margin-top: 23px;
  }
  .cart-detail__container {
    width: 100%;
    margin-top: 0;
    padding: 0 5px;
  }
  .cart-detail__items {
    border: solid 1px $google-btn__bg;
    border-radius: 10px;
    padding-right: 0px;
    padding-left: 0px;
  }
  .cart-detail__total {
    // margin-top: 16px;
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
    padding-top: 8px;
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
}
</style>
