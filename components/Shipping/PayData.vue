<template>
  <div class="cart-detail__payment">

    <div class="w-100 cart-detail__text shipping--mobile">
      <h3 class="cart-detail__title">فاکتور</h3>
    </div>

    <div class="cart-detail__items">
      <div class="w-100 cart-detail__text shipping--desktop">
        <h3 class="cart-detail__title">صورتحساب</h3>
      </div>

      <span class="cart-detail__line "></span>

      <div class="w-100 cart-detail__content">
        <div class="cart-detail__item">
          <div class="cart-detail__right">
            <span class="cart-detail__coin"></span>
            <h3 class="cart-detail__right-title">قیمت محصولات:</h3>
          </div>
          <div class="cart-detail__left">
            <h3 class="cart-detail__left-title">
              {{ detailPrice.price }}
            </h3>
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
    </div>


    <div class="cart-detail__btn w-100">
      <div class="w-100">
        <div class="shipping-btn__item">
          <div class="shipping-btn__right">
            <h3 class="cart-detail__right-title">
              مبلغ قابل پرداخت :
            </h3>
          </div>
          <div class="shipping-btn__left">
            <h3 class="cart-detail__left-title">
              {{ detailPrice.totalPrice }}
            </h3>
            <h3 class="cart-detail__left-title">تومان</h3>
          </div>
        </div>
      </div>
      <div class="w-100 justify-content-center">
        <base-button
          :class="[{'all-orders__hastimed': !allOrdersHasTimed.item}, 'cart-detail__btn-item']"
          :disabled="!allOrdersHasTimed.item"
          no-box-shadow
        >
                        <span class="show-text__go-to-payment"
                        >ادامه فرآیند خرید</span
                        >
          <span class="show-text__choose-time"
          >زمان ارسال را انتخاب کنید</span
          >
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    detailPrice () {
      return this.$store.getters["shipping/shipping/detailPrice"]
    }
  },
  inject: ["allOrdersHasTimed"],
  created() {
    //console.log(this.detailPrice);
    // console.log(this.allOrdersHasTimed); // > Injected property: 5
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.show-text__choose-time {
  display: none;
}

.show-text__go-to-payment {
  display: block;
}

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
  padding-bottom: toRem(32);
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

  .cart-detail__coin,
  .cart-detail__car,
  .cart-detail__discount {
    width: toRem(17);
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
  margin-top: toRem(79);
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
  opacity: 0.8;
}

.cart-detail__total .cart-detail__item {
  margin-top: toRem(18);
}

.red--pay {
  color: $red-color;
}

.cart-detail__btn-item {
  width: 85%;
  height: toRem(57);
  font-family: inherit;
  font-size: toRem(16);
  margin-top: 1.5rem;

  &.disabled {
    background-color: $gray-5!important;
    color: $gray-3!important;
  }
}

.all-orders__hastimed {
  background: $light-gray;
  cursor: initial;
}

.all-orders__hastimed .show-text__choose-time {
  display: block;
}

.all-orders__hastimed .show-text__go-to-payment {
  display: none;
}

.cart-detail__btn-item:nth-child(1) {
  margin-top: 0;
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
  box-shadow: 0 toRem(16) toRem(16) $gray-border;
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

.cart-detail__btn-link__hastimed {
  pointer-events: none;
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

@include md{
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
    width: 100%;
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
}

@include sm {
  .cart-detail__right {
    .cart-detail__coin::after {
      font-size: toRem(15);
    }
    .cart-detail__discount::after {
      font-size: toRem(14);
    }
    .cart-detail__car::after {
      font-size: toRem(11);
    }
  }

}
</style>
