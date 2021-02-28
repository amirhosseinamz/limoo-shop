<template>
    <div class="cart-container d-rtl">
        <div class="user-cart__container">
            <!-- <div class="mobile-screen__holder d-rtl">
                <span class="user-shipping__title-mobile-screen"
                    >لیست سفارشات شما</span
                >
                <span @click="goBack" class="mobile-screen__arrow"></span>
            </div> -->
            <div class="user-cart__shipping-container">
                <div class="d-fleX w-100 justify-content-space-between">
                    <span class="user-shipping__title">انتخاب آدرس</span>
                    <span>افزودن آدرس جدید</span>
                </div>
                <The-cart-orders
                    @event-show-modal-delete-order="eventShowModalDeleteOrder"
                    @add-more-order-to-card="addMoreOrderToCard"
                    @minus-order-from-card="minusOrderFromCart"
                    :orders-data="ordersData"
                ></The-cart-orders>
            </div>
            <The-cart-shipping-detail></The-cart-shipping-detail>
        </div>
        <nuxt-link to="/" class="user-cart__go-back">بازگشت</nuxt-link>
        <TheModalDeleteUserOrders
            :active.sync="showModalDeleteOrder"
            :current-orders="currentOrders"
            @btn-delete-order="btnDeleteOrder"
        />
        
    </div>
</template>
<script>
import TheCartShippingDetail from "~/components/Shipping/TheShippingPayDetail.vue";
import TheCartOrders from "~/components/Cart/TheCartOrders.vue";
import TheModalDeleteUserOrders from "~/components/Cart/TheModalDeleteUserOrders.vue";
export default {
    components: {
        TheCartShippingDetail,
        TheCartOrders,
        TheModalDeleteUserOrders
    },
    data() {
        return {
            showModalDeleteOrder: false,
            ordersData: [
                // {
                //     id: 1,
                //     title:
                //         "اپل واچ سری 1 آلومینیوم آبی با بند اسپرت سیلیکون آبی",
                //     img: "/img/apple-watch-1.png",
                //     orderPrice: "113،000،000",
                //     orderPriceOff: "223،000",
                //     count: 2
                // },
                // {
                //     id: 2,
                //     title:
                //         "اپل واچ سری 2 آلومینیوم قرمز با بند اسپرت سیلیکون قرمز",
                //     img: "/img/apple-watch-2.png",
                //     orderPrice: "143،000،000",
                //     orderPriceOff: "123،000",
                //     count: 1
                // },
                // {
                //     id: 3,
                //     title:
                //         "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
                //     img: "/img/apple-watch-3.png",
                //     orderPrice: "103،000،000",
                //     orderPriceOff: "323،000",
                //     count: 1
                // }
            ],
            currentOrders: {}
        };
    },
    methods: {
        goBack() {
            this.$router.push("/");
        },
        eventShowModalDeleteOrder(data) {
            this.showModalDeleteOrder = true;
            this.currentOrders = data;
        },
        btnDeleteOrder(data) {
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
        },
        addMoreOrderToCard(data) {
            this.ordersData.map(content => {
                if (content.id == data.id) {
                    content.count++;
                }
            });
        },
        minusOrderFromCart(data) {
            this.ordersData.map(content => {
                if (content.id == data.id) {
                    content.count--;
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.cart-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    height: fit-content;
}
.user-cart__container {
    padding: 166px 16px 0 16px;
    margin-bottom: 60px;
    width: 100%;
    height: fit-content;
    @include display-flex();
    flex-direction: row;
    border: 1px solid red;
}
.user-cart__shipping-container {
    @include display-flex();
    flex-direction: column;
    width: 70%;
    /* border: 1px solid blue; */
    margin-left: 31px;
    background-color: $white;
    border-radius: 10px;
    min-height: 192px;
    height: fit-content;
}
.user-shipping__title {
    font-family: inherit;
    font-size: 18px;
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
    margin: 24px 24px 24px 0;
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
.mobile-screen__holder {
    display: none;
}
@media (max-width: 960px) {
    .user-cart__container {
        padding: 47px 0 0 0;
        margin-bottom: 60px;
        flex-direction: column;
    }
    .user-cart__shipping-container {
        width: 100%;
        /* border: 1px solid blue; */
        margin-left: 0;
    }
    .user-cart__go-back {
        display: none;
    }
    .user-shipping__title {
        display: none;
    }
    .mobile-screen__holder {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 56px;
        background: $white;
        margin-bottom: 8px;
        padding: 0 16px;
    }
    .mobile-screen__arrow::before {
        content: "\e801";
        @include font-icon__limoo();
        font-size: 16px;
        color: $gray;
        font-weight: bold;
        /* margin-right: 4px;
        margin-left: 8px; */
    }
}
</style>
