<template>
  <div
    class="cart-detail__container shipping--parent"
    id="some-stickybit-parent"
  >
    <div class="cart-detail__main" id="some-stickybit-nav">
      <PayData :detail-price="detailPrice"></PayData>
      <div class="behind-the-cart-detail"></div>
    </div>
  </div>
</template>

<script>
import PayData from "./PayData";
import stickybits from "stickybits";

export default {

  components: {
    PayData,
  },

  data() {
    return {};
  },
  computed: {
    detailPrice() {
      return this.$store.getters["shipping/shipping/detailPrice"];
    },
  },

  mounted() {
    stickybits("#some-stickybit-nav", {
      useStickyClasses: false,
      stickyBitStickyOffset: 140,
    });
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.cart-detail__container {
  width: toRem(479);
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
  margin-top: toRem(44);
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
  margin-top: toRem(18);
}

.red--pay {
  color: $red-color;
}

.cart-detail__icon {
  width: toRem(18);
  height: toRem(18);
}

.discount--icon {
  width: toRem(21);
  height: toRem(21);
}

.car--icon {
  width: toRem(21);
  height: toRem(21);
}

.cart-detail__btn-item {
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
  margin-top: toRem(79);
}

/*.cart-detail__about {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: toRem(27);
}*/

/*
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
*/

.cart-detail__main {
  width: 100%;
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  box-shadow: 0 toRem(8) toRem(16) rgba(17, 17, 17, 0.03);
  z-index: 1;
}
/*

.cart-detail__about-title {
  color: $gray;
  font-weight: 400;
  margin-right: toRem(8);
  font-size: toRem(16);
}
*/

.behind-the-cart-detail {
  width: 100%;
  height: toRem(100);
  background-color: $white;
}

@media (max-width: 1400px) {
  .cart-detail__container {
    width: 35%;
  }
}

@media (max-width: 1300px) {

}

@media (max-width: 960px) {
  .cart-detail__container {
    width: 100%;
    margin-top: toRem(8);
  }
  /*.cart-detail__about {
    display: none;
  }*/
  .cart-detail__payment {
    padding-right: toRem(11);
    padding-left: toRem(11);
    padding-bottom: toRem(24);
  }
}
</style>
