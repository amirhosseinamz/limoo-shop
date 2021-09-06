<template>
  <div>
    <div class="user-inprogress__empty-container" v-show="userInprogress == 0">
      <img src="/empty-pages/empty-inprogress.svg" :alt="textError" />
      <span class="user-inprogress__empty d-rtl">{{ textError }} </span>
    </div>
    <div
      class="paid-progress d-rtl"
      v-for="data in userOrderData"
      :key="data.id"
    >
      <div class="mobile-paid-holder">
        <div class="paid-container">
          <div v-for="order in data.orders" :key="order.id" class="paid-order">
            <div>
              <img :src="order.img" class="paid-order-product-img" alt="" />
            </div>

            <div class="p-history-product-content-left">
              <span class="p-history-product-content-title">
                {{ order.title }}
              </span>
              <div class="p-history-product-content-price">
                <span class="p-history-product-content-price-title">
                  123,000,000
                </span>
                <span class="p-history-product-content-price-title price-unit">
                  {{ getTextByTextKey("public_unit") }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink
          :to="`/profile/my-orders/${currentUrl}/detail/` + data.orderCode"
          class="btn-mobile__order-detail"
        >
          {{ getTextByTextKey("orders_see_product") }}
        </NuxtLink>
      </div>
      <div class="paid-detail">
        <div class="order-detail order-code">
          <span class="order-code__title">
            {{ getTextByTextKey("orders_code_order") }}</span
          >
          <span class="order-code__value">{{ data.orderCode }}</span>
        </div>
        <div class=" order-detail order-price">
          <span class="order-price__title">{{
            getTextByTextKey("orders_order_price")
          }}</span>
          <div class="order-price__value-holder">
            <span class="order-price__value"> {{ data.orderPrice }}</span>
            <span class="order-price__toman">
              {{ getTextByTextKey("public_unit") }}</span
            >
          </div>
        </div>
        <div class="order-detail order-date">
          <span class="order-date__title">{{
            getTextByTextKey("orders_order_date")
          }}</span>
          <span class="order-date__jalali">{{ data.orderData }}</span>
        </div>
        <div class="order-detail order-situation">
          <span class="order-situation__title">{{
            getTextByTextKey("orders_order_status")
          }}</span>
          <span class="order-situation__value">{{ data.orderSituation }}</span>
        </div>

        <base-button
          link
          no-box-shadow
          :to="`/profile/my-orders/${currentUrl}/detail/` + data.orderCode"
          classes="p-history-product-btn-link">
          {{ getTextByTextKey("orders_see_product") }}
        </base-button>
      </div>
      <span
        class="p-history-product-line w-100 p-history-product-desktop"
      ></span>
    </div>
  </div>
</template>
<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  name: "TheUserOrder",
  components: {},
  props: {
    userOrderData: { type: [Object, Array], default: {} },
    textError: { type: String, default: "" },
    currentUrl: { type: String, default: "" },
  },
  data() {
    return {
      // paidOrderData:0
      userInprogress: -1,
    };
  },
  created() {
    this.userInprogress = Object.values(this.userOrderData).length;
  },

  mounted() {},

  methods: {
    getTextByTextKey,
  },
};
</script>
<style lang="scss" scoped>
.user-inprogress__empty-container {
  @include display-flex();
  flex-direction: column;
  justify-content: flex-start;
  height: toRem(374);
  background: $white;
  margin-top: toRem(24);
  border-radius: toRem(10);
  box-shadow: 0 toRem(8) toRem(16) $box__shadow;
}
.user-inprogress__empty-container img {
  margin-top: toRem(38);
  opacity: 1;
}
.user-inprogress__empty {
  font-size: toRem(18);
  line-height: 140.62%;
  text-align: center;
  color: $gray;
  margin-top: toRem(38);
}
.paid-holder {
  @include display-flex();
  flex-direction: column;
}
.paid-progress {
  @include display-flex();
  flex-direction: row;
  justify-content: space-between;
  margin-top: toRem(24);
  width: 100%;
  background: $white;
  height: max-content;
  border-radius: toRem(10);
}

.paid-order {
  @include display-flex();
  flex-direction: row;
  margin: toRem(8) toRem(26);
  align-items: center;
}
.paid-container {
  @include display-flex();
  flex-direction: column;
  margin: toRem(26) 0;
}
.paid-order-product-img {
  width: toRem(90);
  height: toRem(90);
}
.p-history-product-content-title {
  font-size: toRem(16);
  color: $black-topic;
}
.p-history-product-content-price {
  @include display-flex();
  flex-direction: row;
  justify-content: flex-start;
  margin-top: toRem(16);
}
.p-history-product-content-price-title {
  font-size: toRem(16);
  line-height: 140.62%;
  color: $gray;
}
.price-unit {
  margin-right: toRem(5);
}
.paid-detail {
  @include display-flex();
  flex-direction: column;
  width: toRem(335);
  height: toRem(364);
  background-color: $order__detail-bg;
  border-radius: toRem(10);
  margin-top: toRem(38);
  margin-bottom: toRem(24);
  margin-left: toRem(38);
  padding-top: toRem(23);
}
.order-detail {
  @include display-flex();
  flex-direction: row;
  justify-content: space-between;
  margin: toRem(18) 0;
  padding: 0 toRem(38);
}
.order-code__title::before {
  content: "\e896";
  @include font-icon__limoo();
  color: $gray;
  margin-left: toRem(8);
  line-height: 1em;
  align-self: center;
}
.order-code {
  &__value,
  &__title {
    @include display-flex();
    flex-direction: row;
    width: 40%;
    justify-self: flex-start;
    font-size: toRem(14);
    line-height: 140.62%;
    color: $black-topic;
  }
}
.order-price__value-holder,
.order-price__title {
  @include display-flex();
  flex-direction: row;
  justify-self: flex-start;
  width: 40%;
}
.order-price__title::before {
  content: "\e897";
  @include font-icon__limoo();
  color: $gray;
  margin-left: toRem(8);
  line-height: 1em;
  align-self: center;
}
.order-date__title::before {
  content: "\e804";
  @include font-icon__limoo();
  color: $gray;
  margin-left: toRem(8);
  line-height: 1em;
  align-self: center;
}
.order-situation__title::before {
  content: "\e898";
  @include font-icon__limoo();
  color: $gray;
  margin-left: toRem(8);
  line-height: 1em;
  align-self: center;
}
.order-price {
  &__value,
  &__toman,
  &__title {
    font-size: toRem(14);
    line-height: 140.62%;
    color: $black-topic;
  }
}
.order-price__toman {
  margin-right: toRem(4);
}
.order-date__title,
.order-date__jalali,
.order-situation__title,
.order-situation__value {
  @include display-flex();
  flex-direction: row;
  justify-self: flex-start;
  width: 40%;
  font-size: toRem(14);
  line-height: 140.62%;
  color: $black-topic;
  white-space: nowrap;
}
.p-history-product-btn-link {
  width: toRem(270);
  height: toRem(57);
  margin: toRem(41) auto toRem(19) auto;
}
.btn-mobile__order-detail,
.p-history-product-line {
  display: none;
}
@include xl {
  .paid-detail {
    width: toRem(320);
    margin-left: toRem(10);
    padding-top: toRem(13);
  }
  .paid-order {
    margin: toRem(5) toRem(10);
  }
  .order-situation__title,
  .order-date__title,
  .order-code__title,
  .order-price__title {
    font-size: toRem(13);
  }
  .order-detail {
    justify-content: center;
    margin: toRem(18) 0;
    padding: 0 toRem(20);
  }
  .paid-order-product-img {
    width: toRem(60);
    height: toRem(60);
  }
  .p-history-product-content-title,
  .p-history-product-content-price-title {
    font-size: toRem(14);
  }
  .p-history-product-btn-link {
    font-size: toRem(15);
  }
  .p-history-product-btn-link {
    width: toRem(250);
  }
}
@include md {
  .user-inprogress__empty-container {
    display: none;
  }
  .paid-progress {
    flex-direction: column-reverse;
    margin-top: 0;
    border-radius: 0;
  }
  .paid-progress:last-of-type {
    border-bottom-left-radius: toRem(10);
    border-bottom-right-radius: toRem(10);
  }
  .mobile-paid-holder {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    padding: 0 toRem(15) 0 toRem(8);
  }
  .paid-detail {
    @include display-flex();
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background-color: transparent;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    padding: toRem(11) toRem(15) 0 toRem(15);
  }
  .p-history-product-btn-link,
  .order-situation,
  .order-price {
    display: none;
  }
  .btn-mobile__order-detail {
    align-self: flex-end;
    display: block;
    font-size: toRem(13);
    line-height: 140.62%;
    color: $gray;
    margin-bottom: toRem(14);
    margin-right: toRem(4);
    text-decoration: none;
    white-space: nowrap;
  }
  .btn-mobile__order-detail::after {
    content: "\e800";
    @include font-icon__limoo();
    line-height: 1em;
    color: $yellow;
    vertical-align: middle;
    font-size: toRem(18);
    margin-left: toRem(8);
  }
  .order-detail {
    justify-content: flex-start;
    margin: toRem(5) 0;
    padding: 0 toRem(5);
  }
  .order-code {
    order: 1;
    &__value {
      margin-right: toRem(4);
    }
    &__value,
    &__title {
      width: fit-content;
      justify-self: flex-start;
      font-size: toRem(13);
      color: $black-topic;
    }
    &__title::before {
      content: "";
    }
  }
  .order-date {
    &__title,
    &__jalali {
      justify-self: flex-start;
      width: fit-content;
      font-size: toRem(13);
      color: $black-topic;
    }
    &__jalali {
      margin-right: toRem(4);
    }
    &__title::before {
      content: "";
    }
  }
  .paid-container {
    @include display-flex();
    flex-direction: row;
    flex-wrap: wrap;
    width: 55%;
    margin: 0;
    height: fit-content;
    padding-right: toRem(11);
  }
  .p-history-product-content-title,
  .p-history-product-content-price {
    display: none;
  }
  .paid-order-product-img {
    width: toRem(40);
    height: toRem(40);
    margin-left: toRem(5);
    border: toRem(1) solid $gray-border;
    border-radius: toRem(5);
  }
  .paid-order {
    @include display-flex();
    flex-direction: row;
    height: fit-content;
    margin: 0;
    margin-top: toRem(8);
    align-items: center;
    padding: 0;
  }
  .p-history-product-line {
    @include display-flex();
    background: $gray-border;
    height: toRem(1);
  }
}
@include sm {
  .mobile-paid-holder {
    padding: 0;
  }
  .paid-detail {
    padding: toRem(11) 0 0 0;
  }
}
@include xxs {
  .paid-container {
    width: fit-content;
    padding-right: toRem(5);
  }
  .paid-order-product-img {
    margin-left: toRem(1);
  }
  .btn-mobile__order-detail {
    font-size: toRem(12);
    margin-right: toRem(1);
  }
  .btn-mobile__order-detail::after {
    font-size: toRem(15);
    margin-left: toRem(7);
  }
}
@include xxxs {
  .paid-container {
    padding-right: toRem(2);
  }

  .btn-mobile__order-detail {
    font-size: toRem(11);
  }
  .btn-mobile__order-detail::after {
    margin-left: toRem(2);
  }
}
</style>
