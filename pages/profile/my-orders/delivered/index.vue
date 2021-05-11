<template>
  <div class="w-100">
    <order-items
      :text-error="getTextByTextKey('orders_empty_get_deliver')"
      :user-order-data="userOrderData"
      current-url="delivered"
    ></order-items>
  </div>
</template>
<script>
import orderItems from "~/pages/profile/my-orders/orderItems";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  middleware: "authentication",

  components: {
    orderItems,
  },

  data() {
    return {
      userOrderData: [
        {
          id: 1,
          orderCode: "6861457M",
          orderPrice: "850,000",
          orderData: "1399/04/05",
          orderSituation: "در انتظار پرداخت",
          orders: [
            {
              id: 1,
              title: " اپل واچ سری 1 آلومینیوم آبی اپل واچ سری 1 آلومینیوم",
              img: "/img/apple-watch-1.png",
            },
            {
              id: 2,
              title: " اپل واچ سری 2 آلومینیوم آبی اپل واچ سری 2 آلومینیوم",
              img: "/img/apple-watch-2.png",
            },
            {
              id: 3,
              title: " اپل واچ سری 3 آلومینیوم آبی اپل واچ سری 3 آلومینیوم",
              img: "/img/apple-watch-3.png",
            },
            {
              id: 4,
              title: " اپل واچ سری 4 آلومینیوم آبی اپل واچ سری 4 آلومینیوم",
              img: "/img/apple-watch-4.png",
            },
          ],
        },
        {
          id: 2,
          orderCode: "6861457L",
          orderPrice: "450,000",
          orderData: "1399/04/06",
          orderSituation: "در انتظار پرداخت",
          orders: [
            {
              id: 3,
              title: " اپل واچ سری 3 آلومینیوم آبی اپل واچ سری 3 آلومینیوم",
              img: "/img/apple-watch-3.png",
            },
            {
              id: 4,
              title: " اپل واچ سری 4 آلومینیوم آبی اپل واچ سری 4 آلومینیوم",
              img: "/img/apple-watch-4.png",
            },
          ],
        },
      ],
    };
  },

  created() {},

  mounted() {},

  methods: {
    getTextByTextKey,
  },
};
</script>

<style lang="scss" scoped></style>
