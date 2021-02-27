<template>
    <div class="cart-container d-rtl">
        <div class="user-cart__container">
            <div class="user-cart__orders-container">
                <span class="user-cart__title">لیست سفارشات شما</span>
                <The-cart-orders
                    @event-show-modal-delete-order="eventShowModalDeleteOrder"
                    :orders-data="ordersData"
                ></The-cart-orders>
                <nuxt-link to="/" class="user-cart__go-back">بازگشت</nuxt-link>
            </div>
            <The-cart-pay-detail></The-cart-pay-detail>
        </div>
        <TheModalDeleteUserOrders
            :active.sync="showModalDeleteOrder"
            :current-orders="currentOrders"
            @btn-delete-order="btnDeleteorder"
        />
    </div>
</template>
<script>
import TheCartPayDetail from "~/components/Cart/TheCartPayDetail.vue";
import TheCartOrders from "~/components/Cart/TheCartOrders.vue";
import TheModalDeleteUserOrders from "~/components/Cart/TheModalDeleteUserOrders.vue";
export default {
    components: {
        TheCartPayDetail,
        TheCartOrders,
        TheModalDeleteUserOrders
    },
    data() {
        return {
            showModalDeleteOrder: false,
            ordersData: [
                {
                    id: 1,
                    title:
                        "اپل واچ سری 1 آلومینیوم آبی با بند اسپرت سیلیکون آبی",
                    img: "/img/apple-watch-1.png",
                    orderPrice: "113،000،000",
                    orderPriceOff: "223،000"
                },
                {
                    id: 2,
                    title:
                        "اپل واچ سری 2 آلومینیوم قرمز با بند اسپرت سیلیکون قرمز",
                    img: "/img/apple-watch-2.png",
                    orderPrice: "143،000،000",
                    orderPriceOff: "123،000"
                },
                {
                    id: 3,
                    title:
                        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
                    img: "/img/apple-watch-3.png",
                    orderPrice: "103،000،000",
                    orderPriceOff: "323،000"
                }
            ],
            currentOrders: {}
        };
    },
    methods: {
        eventShowModalDeleteOrder(data) {
            this.showModalDeleteOrder = true;
            this.currentOrders = data;
        },
        btnDeleteorder(data) {
            const removeOrder = () => {
                let indexDeleteOrderData = -1;

                this.ordersData.map((content, index) => {
                    if (content.id == data.id) {
                        indexDeleteOrderData = index;
                    }
                });

                this.ordersData.splice(indexDeleteOrderData, 1);
            };

            removeOrder();
            this.showModalDeleteOrder = false;

            // request //
        }
    }
};
</script>
<style lang="scss" scoped>
.cart-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    min-height: 100vh;
}
.user-cart__container {
    padding: 166px 16px 0 16px;
    margin-bottom: 60px;
    width: 100%;
    height: fit-content;
    @include display-flex();
    flex-direction: row;
    /* border: 1px solid red; */
}
.user-cart__orders-container {
    @include display-flex();
    flex-direction: column;
    width: 70%;
    /* border: 1px solid blue; */
    margin-left: 31px;
}
.user-cart__title {
    font-family: inherit;
    font-size: 18px;
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
    margin-bottom: 24px;
    /* border: 1px solid blue; */
}
.user-cart__go-back {
    @include display-flex();
    text-decoration: none;
    color: $code-request;
    font-size: 16px;
    line-height: 140.62%;
    text-align: right;
    margin-top: 8px;
}
.user-cart__go-back::before {
    @include font-icon__limoo();
    @include display-flex();
    content: "\e801";
    color: $code-request;
    font-size: 12px;
    margin-left: 6px;
    transform: rotate(180deg);
}
</style>
