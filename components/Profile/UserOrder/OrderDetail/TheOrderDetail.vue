<template>
  <div>
    <div
      v-for="order in userOrderData.orders"
      :key="order.id"
      class="the-order-detail__holder d-rtl"
    >
      <div class="order-detail__holder">
        <img :src="order.img" class="paid-order-product-img" alt="" />
        <div class="order-title__holder">
          <span class="p-product-content-title">
            {{ order.title }}
          </span>
          <div class="p-product-content-price">
            <span class="p-product-content-price-title">
              {{ order.price }}
            </span>
            <span class="p-product-content-price-title price-unit">
              تومان
            </span>
          </div>
        </div>
      </div>
      <div class="order-detail__timeline">
        <base-steps :length="4" :actives-length="order.progress" :item-names="itemNames" class="steps"></base-steps>
<!--        <ul class="progressbar">
          <li
            :class="[
              order.progress == 1 ? 'active' : '',
              order.progress == 2 ? 'active' : '',
              order.progress == 3 ? 'active' : '',
              order.progress == 4 ? 'active' : '',
            ]"
          >
            {{ getTextByTextKey("orders_detail_status_check") }}
          </li>
          <li
            :class="[
              order.progress == 2 ? 'active' : '',
              order.progress == 3 ? 'active' : '',
              order.progress == 4 ? 'active' : '',
            ]"
          >
            {{ getTextByTextKey("orders_detail_status_preparation") }}
          </li>
          <li
            :class="[
              order.progress == 3 ? 'active' : '',
              order.progress == 4 ? 'active' : '',
            ]"
          >
            {{ getTextByTextKey("orders_detial_status_delivery") }}
          </li>
          <li :class="{ active: order.progress == 4 }">
            {{ getTextByTextKey("orders_detail_status_get") }}
          </li>
        </ul>-->
      </div>
      <div class="order-detail__shipment-date">
        <span> {{ getTextByTextKey("orders_detail_date_delive_time") }} </span>
        <span>سه شنبه 27 آبان 1399</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  name: "TheOrderDetail",
  props: {
    userOrderData: { type: [Object, Array], default: {} },
  },
  data () {
    return {
      itemNames: [
        this.getTextByTextKey("orders_detail_status_check"),
        this.getTextByTextKey("orders_detail_status_preparation"),
        this.getTextByTextKey("orders_detial_status_delivery"),
        this.getTextByTextKey("orders_detail_status_get")
      ]
    }
  },
  methods: {
    getTextByTextKey,
  },
};
</script>
<style lang="scss" scoped>
/*  */
.progressbar li {
  list-style: none;
  display: inline-block;
  width: 24%;
  position: relative;
  text-align: center;
  color: $gray;
}
.progressbar li:before {
  content: "";
  width: toRem(26);
  height: toRem(26);
  line-height: toRem(30);
  border-radius: 50%;
  display: block;
  text-align: center;
  margin: 0 auto toRem(10) auto;
  background-color: $gray__bar;
  z-index: 1;
  position: inherit;
}
.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: toRem(2);
  background-color: $gray__bar;
  top: toRem(13);
  left: 50%;
  z-index: 0;
}
.progressbar li:first-child:after {
  content: none;
}
.progressbar li.active {
  color: $black;
}
.progressbar li.active:before {
  border-color: $icon__green;
  background-color: $icon__green;
}
.progressbar li.active:after {
  background-color: $icon__green;
}
/*  */

.the-order-detail__holder {
  @include display-flex();
  flex-direction: column;
  justify-content: space-between;
  margin-top: toRem(24);
  width: 100%;
  min-height: toRem(280);
  height: fit-content;
  border: toRem(1) solid $light-gray;
  box-sizing: border-box;
  border-radius: toRem(10);
  padding: 0 0 toRem(38) 0;
}
.order-detail__timeline {
  margin: toRem(32) toRem(80) toRem(16) toRem(64);
}
.steps::v-deep {
  height: toRem(80);
}
.order-detail__holder {
  @include display-flex();
  flex-direction: row;
  width: 100%;
  min-height: toRem(106);
  height: fit-content;

  padding: toRem(16) toRem(15) 0 toRem(15);

  /* border: 1px solid red; */
}
.paid-order-product-img {
  width: toRem(90);
  height: toRem(90);
}
.order-title__holder {
  @include display-flex();
  flex-direction: column;
  width: 100%;
  min-height: toRem(70);
  height: fit-content;
  padding-top: toRem(16);
  padding-right: toRem(16);
  /* border: 1px solid red; */
}
.p-product-content-title {
  font-size: toRem(16);
  line-height: 140.62%;
  text-align: right;
}
.p-product-content-price {
  @include display-flex();
  flex-direction: row;
  width: 100%;
  margin-top: toRem(16);
  /* border: 1px solid red; */
}
.p-product-content-price-title {
  font-size: toRem(16);
  line-height: 140.62%;
  color: $gray;
  text-align: right;
}
.price-unit {
  margin-right: toRem(4);
}
.order-detail__shipment-date {
  width: 100%;
  font-size: toRem(16);
  line-height: 140.62%;
  text-align: right;
  color: $black-topic;
  margin-right: toRem(15);
  margin-top: toRem(38);
  /* border: 1px solid red; */
}
@media (max-width: 1220px) {
  .order-detail__timeline {
    margin: toRem(32) toRem(64) toRem(8) toRem(48);
  }
}
@media (max-width: 960px) {
  .order-detail__shipment-date {
    display: none;
  }
  .the-order-detail__holder {
    margin-top: toRem(11);
    width: 100%;
    min-height: toRem(182);
    padding: 0;
    overflow-x: hidden;
  }
  .order-detail__holder {
    min-height: toRem(86);
    height: fit-content;
    padding: toRem(16) toRem(8) 0 toRem(8);
  }
  /* /\/\/\/\/\/\/\/\ */
  .order-detail__timeline {
    margin: toRem(32) toRem(64) toRem(8) toRem(48);
  }
  .steps::v-deep {
        font-size: toRem(13);
        height: toRem(46);
        .circle {
          width: toRem(15)!important;
          height: toRem(15)!important;
        }
  }
  /* /\/\/\/\/\/\/\/\ */
  .paid-order-product-img {
    width: toRem(80);
    height: toRem(80);
  }
  .order-title__holder {
    min-height: toRem(60);
    height: fit-content;
    padding-top: toRem(7);
  }
  .p-product-content-title {
    font-size: toRem(13);
  }
  .p-product-content-price {
    margin-top: toRem(10);
  }
  .p-product-content-price-title {
    font-size: toRem(13);
  }
}
@media (max-width: 700px) {
  .p-product-content-price {
    margin-top: toRem(4);
  }
  .order-detail__timeline {
    margin: toRem(32) toRem(64) toRem(8) toRem(48);
  }
}
@media (max-width: 500px) {
  .order-detail__timeline {
    margin: toRem(32) toRem(48) toRem(8) toRem(32);
  }
  .steps::v-deep {
    font-size: toRem(11);
    .circle {
      width: toRem(11)!important;
      height: toRem(11)!important;
    }
  }
}
@media (max-width: 340px) {

}
@media (max-width: 280px) {

}
</style>
