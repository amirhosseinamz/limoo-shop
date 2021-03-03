<template>
    <div :key="updateCalcDetailPrice" class="cart-detail__container cart--parent" id="some-stickybit-parent" >
          <div  class="cart-detail__main" id="some-stickybit-nav">
               <PayData :detail-price="detailPrice"></PayData>

                <div class="w-100 cart-detail__about">
                    <div class="cart-detail__about-item">
                        <img class="cart-detail__about-icon" src="/icons/Warranty.svg" alt="">
                        <h3 class="cart-detail__about-title">ضمانت بازگشت وجه در صورت عدم رضایت</h3>
                    </div>
                    <div class="cart-detail__about-item">
                        <img class="cart-detail__about-icon" src="/icons/Star.svg" alt="">
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
      detailPrice   : { type: [Object,Array], default: [] },
    },

    components: {
      PayData,
    },

    data() {
        return {
            // stikyKit: {
            //      options: {
            //        parent     : '.cart--parent',
            //        offset_top : 140,
            //        spacer: ".sticky-spacer",
            //
            //      },
            //      on: {
            //        'sticky_kit:stick': function(e) {
            //          console.log("has stuck!", e.target);
            //        },
            //        'sticky_kit:unstick': function(e) {
            //          console.log("has unstuck!", e.target);
            //        },
            //      }
            //  },
             updateCalcDetailPrice : 0,
        };
    },

    mounted() {
      // this.detectedResizeBrowser();
      stickybits('#some-stickybit-nav', {
        useStickyClasses      : false,
        stickyBitStickyOffset : 140,
      });
    },

    methods: {
        detectedResizeBrowser(){
          window.addEventListener("resize", ()=>{
              const width   = window.innerWidth;
              this.updateCalcDetailPrice++

              if (485 < width) {
              }
              else {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                })
              }
            }, true);
        },
    }

};
</script>


<style lang="scss" scoped>
.cart-detail__container {
    width: 479px;
    /* border: 1px solid red; */
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
    padding-bottom: 24px;
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
  z-index: 1;
}
.cart-detail__about-title{
  color: $gray;
  font-weight: 400;
  margin-right: 8px;
  font-size: 16px;
}

// @media (max-width: 1500px) {
//   .cart-detail__payment{
//     padding-bottom: 24px;
//   }
// }

@media (max-width: 1300px) {
  .cart-detail__about-title{
    font-size: 13px;
  }
  .cart-detail__about-icon{
    height: 22px;
    margin-top: -12px;
  }

}



@media (max-width: 960px) {
    .cart-detail__container {
        width: 100%;
        margin-top: 0;
        padding: 0 5px;
    }
    .cart-detail__about{
      display: none;
    }
    .cart-detail__payment{
      padding-right: 11px;
      padding-left: 11px;
      padding-bottom: 16px;
    }
}



</style>
