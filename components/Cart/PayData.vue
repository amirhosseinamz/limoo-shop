<template>
  <div class="cart-detail__payment">
    <div class="w-100 cart-detail__text">
      <h3 class="cart-detail__title">صورتحساب</h3>
    </div>
    <div class="cart-detail__items">
      <div class="w-100 cart-detail__content">
        <div class="cart-detail__item">
          <div class="cart-detail__right">
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
             <span class="cart-detail__discount"></span>
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
            <span class="cart-detail__car"></span>
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
  },

  components: { BaseButton },

  data() {
    return {};
  },
  computed: {
    detailPrice() {
      return this.$store.getters["cart/cart/detailPrice"];
    }
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.cart-detail__container {
  width: 30%;
  /* border: 1px solid red; */
  height: toRem(600);
  text-align: center;
  margin-top: toRem(49);
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
}
.cart-detail__payment {
  width: 100%;
  background-color: $white;
  border-radius: toRem(10);
  padding-right: toRem(42);
  padding-left: toRem(42);
  @include display-flex();
  align-items: flex-start;
  flex-flow: column;
  padding-bottom: toRem(42);
}
.cart-detail__item {
  @include display-flex();
  align-items: center;
  flex-wrap: wrap;
  margin-top: toRem(24);
  width: 100%;
}
.cart-detail__item:nth-child(1) {
  margin-top: toRem(16);
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
  margin-right: toRem(12);
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
  height: toRem(2);
  @include display-flex();
  margin-top: toRem(27);
  margin-right: auto;
  margin-left: auto;
}
.cart-detail__total .cart-detail__item {
  margin-top: toRem(16);
}
.green--pay {
  color: $green__answer;
}
.cart-detail__btn-item {
  height: toRem(57);
  margin-top: 1.5rem;
}
.continue-purchase {
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
  margin-top: toRem(18);
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
  box-shadow: 0 toRem(4) toRem(4) $gray-border;
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
}
.cart-detail__about-title {
  color: $gray;
  font-weight: 400;
  margin-right: toRem(8);
  font-size: toRem(16);
}
.cart-detail__title {
  font-size: toRem(14);
  color: $black-topic;
  font-weight: 400;
  text-align: right;
}
.cart-detail__text {
  margin-top: toRem(16);
  margin-bottom: toRem(23);
  display: none;
}
.cart-detail__total .cart-detail__right-title {
  margin-right: 0;
}
.cart-detail__btn-link {
  color: $white;
  text-decoration: none;
  height: toRem(57);
  @include display-flex();
  justify-content: center;
  align-items: center;
}
.btn--debtor .cart-detail__btn-link {
  color: $gray;
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


@include xl{
  .cart-detail__right-title {
    font-size: toRem(13);
  }
  .cart-detail__left-title {
    font-size: toRem(13);
  }
  .cart-detail__btn-item {
    width: 100%;
  }
}

@include md {
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
  .cart-detail__text {
    @include display-flex();
  }
}
@include sm{
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
