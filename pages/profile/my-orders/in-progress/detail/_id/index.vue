<template>
  <my-order-single :user-order-data="userOrderData"></my-order-single>
</template>
<script>
import myOrderSingle from "../../../myOrderSingle";

export default {
  components: {
    myOrderSingle,
  },

  data() {
    return {
      userOrderData: {
        id: 1,
        orderCode: "6861457M",
        orderPrice: "850,000",
        orderData: "1399/04/05",
        person: "شروین پیکارجو",
        address: "تهران، خیابان ولیعصر، تقاطع مطهری، کوچه حسینی راد",
        tel: "09120121023",
        orderSituation: "در حال پردازش",
        orders: [
          {
            id: 1,
            title: " اپل واچ سری 1 آلومینیوم آبی اپل واچ سری 1 آلومینیوم",
            img: "/img/apple-watch-1.png",

            price: "1,200,000",
            progress: 1,
          },
          {
            id: 2,
            title: " اپل واچ سری 2 آلومینیوم آبی اپل واچ سری 2 آلومینیوم",
            img: "/img/apple-watch-2.png",

            price: "2,200,000",
            progress: 2,
          },
          {
            id: 3,
            title: " اپل واچ سری 3 آلومینیوم آبی اپل واچ سری 3 آلومینیوم",
            img: "/img/apple-watch-3.png",

            price: "3,200,000",
            progress: 3,
          },
          {
            id: 4,
            title: " اپل واچ سری 4 آلومینیوم آبی اپل واچ سری 4 آلومینیوم",
            img: "/img/apple-watch-4.png",

            price: "4،200،000",
            progress: 4,
          },
        ],
      },
    };
  },

  watch: {},

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
