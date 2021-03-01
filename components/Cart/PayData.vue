<template>
  <div class="cart-detail__payment">
      <div class="cart-detail__items">
                <div class="cart-detail__item">
                    <div class="cart-detail__right">
                      <img src="/icons/coin.svg" class="cart-detail__icon" alt="">
                      <h3 class="cart-detail__right-title">قیمت محصولات:</h3>
                    </div>
                    <div class="cart-detail__left">
                      <h3 class="cart-detail__left-title">{{detailPrice.price}}</h3>
                      <h3 class="cart-detail__left-title">تومان</h3>
                    </div>
                </div>

                <div class="cart-detail__item">
                    <div class="cart-detail__right">
                      <img src="/icons/Discount-cart.svg" class="cart-detail__icon discount--icon" alt="">
                      <h3 class="cart-detail__right-title">تخفیف کل:</h3>
                    </div>
                    <div class="cart-detail__left">
                      <h3 class="cart-detail__left-title">{{detailPrice.totalDiscount}}</h3>
                      <h3 class="cart-detail__left-title">تومان</h3>
                    </div>
                </div>

              <div class="cart-detail__item">
                  <div class="cart-detail__right">
                    <img src="/icons/car.svg" class="cart-detail__icon car--icon" alt="">
                    <h3 class="cart-detail__right-title">هزینه ارسال:</h3>
                  </div>
                  <div class="cart-detail__left">
                    <h3 class="cart-detail__left-title">{{detailPrice.submitDeliveryPrice}}</h3>
                  </div>
              </div>

              <span class="cart-detail__line"></span>
          </div>

          <div class="cart-detail__total">
              <div class="cart-detail__item">
                  <div class="cart-detail__right">
                    <img src="/icons/coin.svg" alt="">
                    <h3 class="cart-detail__right-title red--pay">جمع قابل پرداخت:</h3>
                  </div>
                  <div class="cart-detail__left">
                    <h3 class="cart-detail__left-title red--pay">{{detailPrice.totalPrice}}</h3>
                    <h3 class="cart-detail__left-title red--pay">تومان</h3>
                  </div>
              </div>
          </div>

          <div class="cart-detail__btn w-100">
              <button type="button" class="cart-detail__btn-item remove--border" name="button">
                ادامه فرایند خرید
              </button>
              <button type="button" class="cart-detail__btn-item btn--debtor" name="button">
                خرید اقساصی کالا
              </button>
          </div>

  </div>
</template>

<script>

export default {
    props: {
      detailPrice   : { type: [Object,Array], default: [] },
    },

    components: {

    },

    data() {
        return {

        };
    },

    methods: {

    }

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
.cart-detail__item{
  @include display-flex();
  align-items: center;
  flex-wrap: wrap;
  margin-top: 24px;
  width: 100%;
}
.cart-detail__item:nth-child(1){
  margin-top: 44px;
}
.cart-detail__right{
  @include display-flex();
  align-items: flex-start;
  flex-grow: 1;
}
.cart-detail__left{
  @include display-flex();
  align-items: flex-start;
}
.cart-detail__right-title{
  margin-right: 12px;
  font-size: 16px;
  color: $color_discount;
  font-weight: 300;
}
.cart-detail__left-title{
  font-size: 16px;
  color: $color_discount;
  font-weight: 300;
  margin-left: 6px;
}
.cart-detail__left-title:last-of-type{
  margin-left: 0;
}
.cart-detail__items{
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
}
.cart-detail__total{
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
}
.cart-detail__line{
  background: $chinese_white;
  width: 94%;
  height: 2px;
  @include display-flex();
  margin-top: 27px;
  margin-right: auto;
  margin-left: auto;
}
.cart-detail__total .cart-detail__item{
  margin-top: 18px;
}
.red--pay{
  color: $red-color;
}
.cart-detail__icon{
  width: 18px;
  height: 18px;
}
.discount--icon{
  width: 21px;
  height: 21px;
}
.car--icon{
  width: 21px;
  height: 21px;
}
.cart-detail__btn-item{
  width: 395px;
  height: 57px;
  background: $btn__green;
  border-radius: 10px;
  border: 2px solid $gray;
  font-family: inherit;
  font-size: 16px;
  color: $white;
  margin-top: 24px;
  font-weight: 400;
  cursor: pointer;
}
.cart-detail__btn-item:nth-child(1){
  margin-top: 0;
}
.remove--border{
  border-color: $btn__green;
}
.btn--debtor{
  background: $white;
  color: $gray;
}
.cart-detail__btn{
  margin-top: 79px;
}
.cart-detail__about{
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 27px;
}
.cart-detail__about-item{
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
.cart-detail__about-item:last-of-type{
  margin-bottom: 0;
}
.cart-detail__main{
  width: 100%;
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
}
.cart-detail__about-title{
  color: $gray;
  font-weight: 400;
  margin-right: 8px;
  font-size: 16px;
}





@media (max-width: 960px) {
    .cart-detail__container {
        width: 100%;
        margin-top: 0;
        padding: 0 5px;
    }
}
</style>
