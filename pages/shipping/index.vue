<template>
    <div class="cart-container d-rtl">
        <div class="user-cart__container">
            <div class="mobile-screen__holder d-rtl">
                <span class="user-shipping__title-mobile-screen"
                    >سبد خرید شما</span
                >
                <span @click="goBack" class="mobile-screen__arrow"></span>
            </div>
            <span class="user-cart__shipping-topic"
                >تکمیل اطلاعات ارسال کالا</span
            >
            <div class="user-cart__shipping-holder">
                <div class="user-cart__shipping-container">
                    <div class="d-fleX w-100 justify-content-space-between">
                        <span class="user-shipping__title">انتخاب آدرس</span>
                        <span class="user-shipping__address-btn"
                            >افزودن آدرس جدید</span
                        >
                    </div>
                    <span class="user-cart__shipping-line"></span>
                    <!-- <span class="card-shape__circle">
                        <span class="card-shape__circle-inner"></span>
                    </span> -->
                    <The-shipping-address
                        @event-show-modal-delete-order="
                            eventShowModalDeleteOrder
                        "
                        @add-more-order-to-card="addMoreOrderToCard"
                        @minus-order-from-card="minusOrderFromCart"
                        :orders-data="ordersData"
                    ></The-shipping-address>
                    <span class="user-shipping__address-btn__mobile"
                        >افزودن آدرس جدید</span
                    >
                </div>
                <The-cart-shipping-detail :detail-price="detailPrice"></The-cart-shipping-detail>
            </div>
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
import TheShippingAddress from "~/components/Shipping/TheShippingAddress.vue";
import TheModalDeleteUserOrders from "~/components/Cart/TheModalDeleteUserOrders.vue";
import addCamaPrice from "~/modules/addCamaPrice.js";


export default {
    components: {
        TheCartShippingDetail,
        TheShippingAddress,
        TheModalDeleteUserOrders
    },
    data() {
        return {
            showModalDeleteOrder: false,
            ordersData: [
                {
                    id: 1,
                    title: "تهران خیابان ولی عصر 1 تقاطع مطهری، کوچه حسینی راد"
                },
                {
                    id: 2,
                    title: "تهران خیابان ولی عصر 2 تقاطع مطهری، کوچه حسینی راد"
                },
                {
                    id: 3,
                    title: "تهران خیابان ولی عصر 3 تقاطع مطهری، کوچه حسینی راد"
                }
            ],
            currentOrders: {},
            detailPrice  : {
              price               : 12000,
              totalDiscount       : 142250,
              submitDeliveryPrice : 'رایگان',
              totalPrice          : 2587000,
            }
        };
    },

    mounted() {
      this.addCama();
    },

    methods: {
        goBack() {
            this.$router.push("/cart");
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
.card-shape__circle {
    @include display-flex();
    justify-content: center;
    align-items: center;
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: $yellow;
    /* background-color: $light-gray; */
}
.card-shape__circle-inner {
    width: 9.5px;
    height: 9.5px;
    border-radius: 50%;
    background-color: $white;
}
/*  */
.cart-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    height: fit-content;
}
.user-cart__container {
    padding: 166px 16px 0 16px;
    /* margin-bottom: 60px; */
    width: 100%;
    height: fit-content;
    @include display-flex();
    flex-direction: column;
    /* border: 1px solid red; */
}
.user-cart__shipping-holder {
    @include display-flex();
    flex-direction: row;
    width: 100%;
    height: fit-content;
}
.user-cart__shipping-topic {
    font-size: 18px;
    line-height: 140.62%;
    text-align: right;
    margin-bottom: 24px;
}
.user-cart__shipping-container {
    @include display-flex();
    flex-direction: column;
    width: 70%;
    /* border: 1px solid blue; */
    margin-left: 30px;
    background-color: $white;
    border-radius: 10px;
    min-height: 192px;
    height: fit-content;
    padding: 0 24px;
}
.user-shipping__title {
    font-family: inherit;
    font-size: 18px;
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
    margin: 24px 0 24px 0;
    /* border: 1px solid blue; */
}
.user-shipping__address-btn,
.user-shipping__address-btn__mobile {
    font-family: inherit;
    font-size: 16px;
    line-height: 140.62%;
    margin: 24px 0 24px 0;
    color: $gray;
    cursor: pointer;
}
.user-shipping__address-btn::after,
.user-shipping__address-btn__mobile::after {
    @include font-icon__limoo();
    content: "\e821";
    color: $yellow;
    font-size: 24px;
    margin-left: 23px;
    margin-right: 8px;
    vertical-align: middle;
}
.user-shipping__address-btn__mobile {
    display: none;
}
.user-cart__go-back {
    @include display-flex();
    text-decoration: none;
    color: $code-request;
    font-size: 16px;
    line-height: 140.62%;
    text-align: right;
    margin: 24px 18px 60px 0;
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
.user-cart__shipping-line {
    display: none;
}
@media (max-width: 960px) {
    .user-shipping__address-btn {
        display: none;
    }
    .user-shipping__address-btn__mobile {
        display: block;
        font-family: inherit;
        font-size: 13px;
        line-height: 140.62%;
        margin: 8px 0 24px 0;
        color: $gray;
        text-align: left;
        cursor: pointer;
    }
    .user-shipping__address-btn__mobile::after {
        font-size: 19px;
        margin-left: 2px;
        margin-right: 4px;
    }
    .user-cart__shipping-line {
        display: block;
        margin: 0 auto 16px auto;
        width: 100%;
        border-top: 1px solid $gray-border;
    }
    .user-cart__container {
        padding: 47px 0 0 0;
        margin-bottom: 60px;
        flex-direction: column;
    }
    .user-cart__shipping-holder {
        flex-direction: column;
        padding: 0 5px;
    }
    .user-cart__shipping-container {
        width: 100%;
        /* border: 1px solid blue; */
        margin-left: 0;
        padding: 0 11px;
    }
    .user-cart__go-back {
        display: none;
    }
    .user-shipping__title {
        font-size: 14px;
        margin: 16px 0 16px 0;
        /* border: 1px solid blue; */
    }
    .user-cart__shipping-topic {
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
