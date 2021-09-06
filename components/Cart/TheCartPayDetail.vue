<template>
    <div :key="updateCalcDetailPrice" class="cart-detail__container cart--parent" id="some-stickybit-parent" >
          <div  class="cart-detail__main" id="some-stickybit-nav">
               <PayData></PayData>
                <div class="behind-the-cart-detail"></div>
                <div class="w-100 cart-detail__about">
                    <div class="cart-detail__about-item">
                        <span class="cart-detail__about-icon-warranty"></span>
                        <h3 class="cart-detail__about-title">ضمانت بازگشت وجه در صورت عدم رضایت</h3>
                    </div>
                    <div class="cart-detail__about-item">
                        <span class="cart-detail__about-icon-star"></span>
                        <h3 class="cart-detail__about-title">ضمانت بازگشت وجه در صورت عدم رضایت</h3>
                    </div>
                </div>
          </div>

    </div>
</template>

<script>
import PayData from './PayData';
import stickybits from 'stickybits';


export default {
    props: {
    },

    components: {
      PayData,
    },

    data() {
        return {
           updateCalcDetailPrice : 0,
        };
    },

    mounted() {
      stickybits('#some-stickybit-nav', {
        useStickyClasses      : false,
        stickyBitStickyOffset : 140,
      });
    },

    methods: {

    }

};
</script>


<style lang="scss" scoped>
.cart-detail__container {
    width: toRem(479);
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
    padding-bottom: toRem(24);
}
.cart-detail__item{
  @include display-flex();
  align-items: center;
  flex-wrap: wrap;
  margin-top: toRem(24);
  width: 100%;
}
.cart-detail__item:nth-child(1){
  margin-top: toRem(44);
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
  margin-right: toRem(12);
  font-size: toRem(16);
  color: $color_discount;
  font-weight: 300;
}
.cart-detail__left-title{
  font-size: toRem(16);
  color: $color_discount;
  font-weight: 300;
  margin-left: toRem(6);
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
  height: toRem(2);
  @include display-flex();
  margin-top: toRem(27);
  margin-right: auto;
  margin-left: auto;
}
.cart-detail__total .cart-detail__item{
  margin-top: toRem(18);
}
.red--pay{
  color: $red-color;
}
.cart-detail__btn-item{
  width: toRem(395);
  height: toRem(57);
  background: $btn__green;
  border-radius: toRem(10);
  border: toRem(2) solid $gray;
  font-family: inherit;
  font-size: toRem(16);
  color: $white;
  margin-top: toRem(24);
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
  margin-top: toRem(79);
}
.cart-detail__about{
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: toRem(27);
}
.cart-detail__about-item{
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
.cart-detail__about-item:last-of-type{
  margin-bottom: 0;
}
.cart-detail__main{
  width: 100%;
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  z-index: 1;
}
.cart-detail__about-title{
  color: $gray;
  font-weight: 400;
  margin-right: toRem(8);
  font-size: toRem(16);
}
.behind-the-cart-detail {
  width: 100%;
  height: toRem(155);
  background-color: $white;
}

@include xl{
  .cart-detail__about-title{
    font-size: toRem(14);
  }
  .cart-detail__about-icon-star::before{
    content: "\e824";
    @include font-icon__limoo();
    font-size: toRem(24);
    color: $orange;
  }
  .cart-detail__about-icon-warranty::before{
    content: "\e813";
    @include font-icon__limoo();
    font-size: toRem(29);
    color: $orange;
  }

}



@include md{
    .cart-detail__container {
        width: 100%;
        margin-top: 0;
        padding: 0 toRem(5);
    }
    .cart-detail__about{
      display: none;
    }
    .cart-detail__payment{
      padding-right: toRem(11);
      padding-left: toRem(11);
      padding-bottom: toRem(16);
    }
}



</style>
