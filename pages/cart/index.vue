<template>
    <div class="cart-container d-rtl">
        <div class="user-cart__container">
            <div class="mobile-screen__holder d-rtl">
                <span class="user-cart__title-mobile-screen"
                    >لیست سفارشات شما</span
                >
                <span @click="goBack" class="mobile-screen__arrow"></span>
            </div>
            <div class="user-cart__orders-container">
                <span class="user-cart__title">لیست سفارشات شما</span>
                <The-cart-orders
                    @event-show-modal-delete-order="eventShowModalDeleteOrder"
                    @add-more-order-to-card="addMoreOrderToCard"
                    @minus-order-from-card="minusOrderFromCart"
                    :orders-data="ordersData"
                ></The-cart-orders>
                <nuxt-link to="/" class="user-cart__go-back">بازگشت</nuxt-link>
            </div>
            <The-cart-pay-detail :detail-price="detailPrice"></The-cart-pay-detail>
        </div>
        <TheModalDeleteUserOrders
            :active.sync="showModalDeleteOrder"
            :current-orders="currentOrders"
            @btn-delete-order="btnDeleteOrder"
        />
    </div>
</template>
<script>
import TheCartPayDetail from "~/components/Cart/TheCartPayDetail.vue";
import TheCartOrders from "~/components/Cart/TheCartOrders.vue";
import TheModalDeleteUserOrders from "~/components/Cart/TheModalDeleteUserOrders.vue";
import addCamaPrice from "~/modules/addCamaPrice.js";


export default {
    layout      : "removeFooterCart",
    components : {
        TheCartPayDetail,
        TheCartOrders,
        TheModalDeleteUserOrders
    },
    data() {
        return {
            showModalDeleteOrder : false,
            ordersData           : [
                {
                    id: 1,
                    title:
                        "اپل واچ سری 1 آلومینیوم آبی با بند اسپرت سیلیکون آبی",
                    img: "/img/apple-watch-1.png",
                    orderPrice: "113،000،000",
                    orderPriceOff: "223،000",
                    count: 2
                },
                {
                    id: 2,
                    title:
                        "اپل واچ سری 2 آلومینیوم قرمز با بند اسپرت سیلیکون قرمز",
                    img: "/img/apple-watch-2.png",
                    orderPrice: "143،000،000",
                    orderPriceOff: "123،000",
                    count: 1
                },
                {
                    id: 3,
                    title:
                        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
                    img: "/img/apple-watch-3.png",
                    orderPrice: "103،000،000",
                    orderPriceOff: "323،000",
                    count: 1
                },
                {
                    id: 4,
                    title:
                        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
                    img: "/img/apple-watch-3.png",
                    orderPrice: "103،000،000",
                    orderPriceOff: "323،000",
                    count: 1
                },
                {
                    id: 5,
                    title:
                        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
                    img: "/img/apple-watch-3.png",
                    orderPrice: "103،000،000",
                    orderPriceOff: "323،000",
                    count: 1
                },
                {
                    id: 6,
                    title:
                        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
                    img: "/img/apple-watch-3.png",
                    orderPrice: "103،000،000",
                    orderPriceOff: "323،000",
                    count: 1
                },
                {
                    id: 7,
                    title:
                        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
                    img: "/img/apple-watch-3.png",
                    orderPrice: "103،000،000",
                    orderPriceOff: "323،000",
                    count: 1
                },
                {
                    id: 8,
                    title:
                        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
                    img: "/img/apple-watch-3.png",
                    orderPrice: "103،000،000",
                    orderPriceOff: "323،000",
                    count: 1
                },
                {
                    id: 9,
                    title:
                        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
                    img: "/img/apple-watch-3.png",
                    orderPrice: "103،000،000",
                    orderPriceOff: "323،000",
                    count: 1
                },
                {
                    id: 10,
                    title:
                        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
                    img: "/img/apple-watch-3.png",
                    orderPrice: "103،000،000",
                    orderPriceOff: "323،000",
                    count: 1
                },
            ],
            currentOrders        : {},
            detailPrice          : {
              price               : 12000,
              totalDiscount       : 142250,
              submitDeliveryPrice : 'رایگان',
              totalPrice          : 2587000,
            }
        };
    },

    mounted() {
      // پس ار اتصال به بک این قسمت باید بعد از برگشت اطلاعات از سمت بک صدا زده شود //
      this.addCama();
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
        },

        addCama(){
          const getDetailPrice       = this.detailPrice;
          const setUpdateDetailPrice = {
          }

          for (let key in getDetailPrice) {
            setUpdateDetailPrice[key] = getDetailPrice[key];

            if (getDetailPrice[key] != 'رایگان') {
               setUpdateDetailPrice[key] = addCamaPrice(getDetailPrice[key]);
            }
          }

          this.detailPrice = setUpdateDetailPrice;
        },

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
.mobile-screen__holder {
    display: none;
}



@media (max-width: 1400px) {
  .user-cart__orders-container {
    width: 62%;
    margin-left: 2.2%
  }
  .cart-detail__container{
    width: 35%;
  }
}

@media (max-width: 960px) {
    .cart-detail__container{
      width: 100%;
    }
    .user-cart__container {
        padding: 47px 0 0 0;
        margin-bottom: 60px;
        flex-direction: column;
    }
    .user-cart__orders-container {
        width: 100%;
        /* border: 1px solid blue; */
        margin-left: 0;
    }
    .user-cart__go-back {
        display: none;
    }
    .user-cart__title {
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
