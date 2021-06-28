<template>
  <div class="cart-detail__payment">
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
          :classes="'cart-detail__btn-item ' + hasTime"
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
            <img
              src="/icons/coin.svg"
              class="cart-detail__icon"
              alt=""
            />
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
            <img
              src="/icons/Discount-cart.svg"
              class="cart-detail__icon discount--icon"
              alt=""
            />
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
    </div>

  </div>
</template>

<script>
export default {
  props: {
    detailPrice: { type: [Object, Array], default: [] },
  },
  computed: {
    hasTime() {
      if (!this.allOrdersHasTimed.item) {
        return "all-orders__hastimed";
      } else {
        return ''
      }
    },
  },
  components: {},

  data() {
    return {};
  },
  inject: ["allOrdersHasTimed"],
  created() {
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
  padding-bottom: 32px;
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
  margin-top: 79px;
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
  opacity: 0.8;
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

.cart-detail__btn-item {
  width: 85%;
  height: 57px;
  font-family: inherit;
  font-size: 16px;
  margin-top: 1.5rem;
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

.cart-detail__btn-link__hastimed {
  pointer-events: none;
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

// @media (max-width: 1300px) {
//   .cart-detail__right-title{
//     font-size: 13px;
//   }
//   .cart-detail__left-title{
//     font-size: 13px;
//   }
//   .cart-detail__icon{
//     width: 14px;
//     height: 14px;
//   }
//   .cart-detail__btn-item{
//     width: 100%;
//   }
//   .cart-detail__title{
//     font-size: 16px;
//   }
// }

@media (max-width: 960px) {
  // .cart-detail__btn-item {
  //   width: 395px;
  // }
  // .cart-detail__right-title{
  //   font-size: 16px;
  // }
  // .cart-detail__title{
  //   font-size: 18px;
  // }
  // .cart-detail__left-title{
  //   font-size: 18px;
  // }
  // .cart-detail__icon{
  //   width: 18px;
  //   height: 18px;
  // }
  // .discount--icon{
  //   width: 21px;
  //   height: 21px;
  // }
  // .car--icon{
  //   width: 21px;
  //   height: 21px;
  // }
  // .cart-detail__items{
  //   padding-bottom: 12px;
  // }
  // .shipping-btn__right .cart-detail__right-title{
  //   font-size: 16px;
  // }
  // .shipping-btn__item .cart-detail__left-title{
  //   font-size: 16px;
  // }

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
    width: 100%;
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
}

@media (max-width: 485px) {
}
</style>
