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
          orderDate: "1399/04/05",
          orderDateSpell: "27 خرداد 1399",
          orderSituation: "در انتظار پرداخت",
          orders: [
            {
              id: 1,
              title: "ساعت هوشمند شیائومی مدل mi watch lite",
              img: "https://dkstatics-public.digikala.com/digikala-products/3ed2847e22fcc9157391b47fd2725cfc986c03f4_1609323682.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
              price: "4,523,000"
            },
            {
              id: 2,
              title: " اپل واچ سری 2 آلومینیوم آبی اپل واچ سری 2 آلومینیوم",
              img: "https://dkstatics-public.digikala.com/digikala-products/112556303.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
              price: "3,839,000"
            },
            {
              id: 2,
              title: " اپل واچ سری 2 آلومینیوم آبی اپل واچ سری 2 آلومینیوم",
              img: "https://dkstatics-public.digikala.com/digikala-products/112556303.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
              price: "3,839,000"
            },
            {
              id: 2,
              title: " اپل واچ سری 2 آلومینیوم آبی اپل واچ سری 2 آلومینیوم",
              img: "https://dkstatics-public.digikala.com/digikala-products/112556303.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
              price: "3,839,000"
            },
            {
              id: 2,
              title: " اپل واچ سری 2 آلومینیوم آبی اپل واچ سری 2 آلومینیوم",
              img: "https://dkstatics-public.digikala.com/digikala-products/112556303.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
              price: "3,839,000"
            },
            {
              id: 3,
              title: "مچ بند هوشمند شیائومی مدل Mi Band 6 Global Version",
              img: "https://dkstatics-public.digikala.com/digikala-products/3ae838864ed3a2ec364f28e70bf2da22def4f1fd_1619901420.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
              price: "5,200,000"
            },
            {
              id: 4,
              title: "ساعت هوشمند اپل واچ 3 مدل 42mm Space Aluminum Case with Sport Band",
              img: "https://dkstatics-public.digikala.com/digikala-products/2000587.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
              price: "2,598,000"
            },
          ],
        },
        {
          id: 2,
          orderCode: "6861457L",
          orderPrice: "450,000",
          orderDate: "1399/04/06",
          orderDateSpell: "27 خرداد 1399",
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
