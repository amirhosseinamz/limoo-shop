<template>
    <div class="orders-content__main">
        <div class="w-100 flex-wrap">
            <div
                v-for="data in ordersData"
                :key="data.id"
                class="w-100 flex-wrap order-content-item"
            >
                <div class="order-detail">
                    <div class="order-detail__desktop-holder">
                        <img :src="data.img" alt="" class="order-detail__img" />
                        <div class="order-detail__holder">
                            <span class="order-detail__title">
                                {{ data.title }}</span
                            >
                            <div class="order-detail__price-container__mobile">
                                <span class="order-detail__orderPrice"
                                    >{{ data.orderPrice }} تومان</span
                                >
                                <span class="order-detail__orderPriceOff"
                                    >{{ data.orderPriceOff }} تومان</span
                                >
                            </div>
                            <div class="order-detail__content-holder">
                                <div class="order-detail__content-color">
                                    <span
                                        class="order-detail__content-color__title"
                                        >رنگ:</span
                                    >
                                    <span
                                        class="order-detail__content-color__name"
                                        >قرمز</span
                                    >
                                    <span
                                        class="order-detail__content-color__circle"
                                    ></span>
                                </div>
                                <div class="order-detail__content-guarantee">
                                    <span
                                        class="order-detail__content-guarantee__title"
                                        >گارانتی:</span
                                    >
                                    <span
                                        class="order-detail__content-guarantee__name"
                                        >2 سال ضمانت کالا</span
                                    >
                                </div>
                                <div class="order-detail__content-seller-price">
                                    <div class="order-detail__content-seller">
                                        <span
                                            class="order-detail__content-seller__title"
                                            >فروشنده:</span
                                        >
                                        <span
                                            class="order-detail__content-seller__name"
                                            >ایپک</span
                                        >
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order-detail__content-holder__mobile">
                    <div class="order-detail__content-color">
                        <span class="order-detail__content-color__title"
                            >رنگ:</span
                        >
                        <span class="order-detail__content-color__name"
                            >قرمز</span
                        >
                        <span
                            class="order-detail__content-color__circle"
                        ></span>
                    </div>
                    <div class="order-detail__content-guarantee">
                        <span class="order-detail__content-guarantee__title"
                            >گارانتی:</span
                        >
                        <span class="order-detail__content-guarantee__name"
                            >2 سال ضمانت کالا</span
                        >
                    </div>
                    <div class="order-detail__content-seller-price">
                        <div class="order-detail__content-seller">
                            <span class="order-detail__content-seller__title"
                                >فروشنده:</span
                            >
                            <span class="order-detail__content-seller__name"
                                >ایپک</span
                            >
                        </div>

                    </div>
                </div>
                <div class="order-detail__btns-price">
                    <div class="order-detail__btns-container">
                      <base-stepper
                         bordered
                        :min-value="1"
                        :max-value="10"
                        @plus-clicked="addOrderToCart(data)"
                        @minus-clicked="minusOrderFromCart(data)"
                      ></base-stepper>
                        <base-button
                            no-box-shadow
                            @button-clicked="showModalDeleteOrder(data)"
                            classes="order-detail__btn-delete"
                            base-color="light"
                        ></base-button>
                    </div>
                    <div class="order-detail__price-container">
                        <span class="order-detail__orderPrice">{{
                            data.orderPrice
                        }}</span>
                        <span class="order-detail__orderPriceOff"
                            >{{ data.orderPriceOff }} تومان</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
    },
    computed: {
      ordersData() {
        return this.$store.getters["cart/cart/ordersData"];
      }
    },
    methods: {
        showModalDeleteOrder(data) {
            this.$emit("event-show-modal-delete-order", data);
        },
        addOrderToCart(data) {
            this.$emit("add-more-order-to-card", data);
        },
        minusOrderFromCart(data) {
            this.$emit("minus-order-from-card", data);
        }
    }
};
</script>
<style lang="scss" scoped>

.order-content-item {
    @include display-flex();
    flex-direction: column;
    background-color: $white;
    box-shadow: 0 toRem(8) toRem(16) $box__shadow;
    border-radius: 10px;
    height: fit-content;
    min-height: toRem(270);
    margin-bottom: toRem(16);
}
.order-detail {
    height: toRem(192);
    width: 100%;
    border-bottom: toRem(1) solid $gray-border;
}
.order-detail__btns-price {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: toRem(77);
    width: 100%;
}
.order-detail__desktop-holder {
    @include display-flex();
    flex-direction: row;
}
.order-detail__img {
    height: toRem(120);
    width: toRem(120);
    margin: toRem(36) toRem(16) 0 toRem(8);
}
.order-detail__holder {
    @include display-flex();
    flex-direction: column;
}
.order-detail__title {
    font-size: toRem(16);
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
    margin: toRem(24) toRem(17) toRem(17) 0;
}
.order-detail__content-holder {
    @include display-flex();
    flex-direction: column;
    height: toRem(91);
    padding-right: toRem(16);
    border-right: toRem(2) solid $gray-border;
}
.order-detail__content-color {
    @include display-flex();
    flex-direction: row;
}
.order-detail__content-color__title,
.order-detail__content-guarantee__title,
.order-detail__content-seller__title,
.order-detail__content-price__title {
    font-size: toRem(14);
    line-height: 140.62%;
    color: $gray;
    margin-left: toRem(5);
}
.order-detail__content-price__title {
    color: $code;
}
.order-detail__content-color__name {
    font-size: toRem(14);
    line-height: 140.62%;
    color: $black-topic;
    margin-left: toRem(8);
}
.order-detail__content-guarantee,
.order-detail__content-seller {
    @include display-flex();
    flex-direction: row;
    margin-top: toRem(16);
    margin-left: toRem(16);
}
.order-detail__content-price {
    @include display-flex();
    flex-direction: row;
    margin-top: toRem(16);
}
.order-detail__content-color__circle {
    background-color: $red-logout;
    height: toRem(18);
    width: toRem(18);
    border-radius: 50%;
}
.order-detail__content-guarantee__name,
.order-detail__content-seller__name,
.order-detail__content-price__name {
    font-size: toRem(14);
    line-height: 140.62%;
    color: $black-topic;
}
.order-detail__content-price__name {
    color: $code;
}
.order-detail__content-seller-price {
    @include display-flex();
    flex-direction: row;
}
.order-detail__content-holder__mobile {
    display: none;
}
.order-detail__btns-container {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    width: toRem(190);
    margin-right: toRem(16);
}
.order-detail__btn-delete {
    width: toRem(43);
    height: toRem(43);
}
.order-detail__btn-delete::before {
    @include font-icon__limoo();
    content: "\e826";
    font-size: toRem(16);
    color: $gray-3;
}
.order-detail__price-container {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    margin-left: toRem(25);
    width: fit-content;
}
.order-detail__orderPrice {
    font-size: toRem(16);
    font-family: inherit;
    text-decoration: line-through;
    color: $color-gray;
    padding-left: toRem(15);
}
.order-detail__orderPriceOff {
    font-size: toRem(16);
    font-family: inherit;
    color: $code;
    padding-right: toRem(15);
    border-right: toRem(1) solid $light-gray;
}
.order-detail__price-container__mobile {
    display: none;
}
@include md{
    .orders-content__main {
        padding: 0 toRem(5);
    }
    .order-content-item {
        min-height: toRem(314);
        margin-bottom: toRem(8);
    }
    .order-detail__content-holder {
        display: none;
    }
    .order-detail__btns-price {
        height: toRem(68);
    }
    .order-detail {
        height: toRem(114);
    }
    .order-detail__img {
        height: toRem(80);
        width: toRem(80);
        margin: toRem(16) toRem(16) 0 0;
    }
    .order-detail__title {
        font-size: toRem(14);
        margin: toRem(23) toRem(16) toRem(16) toRem(19);
    }
    .order-detail__content-holder__mobile {
        @include display-flex();
        flex-direction: column;
        height: toRem(132);
        border-bottom: toRem(1) solid $gray-border;
        padding-right: toRem(12);
    }
    .order-detail__content-color {
        margin-top: toRem(16);
    }
    .order-detail__content-color__title,
    .order-detail__content-guarantee__title,
    .order-detail__content-seller__title,
    .order-detail__content-price__title,
    .order-detail__content-color__name,
    .order-detail__content-guarantee__name,
    .order-detail__content-seller__name,
    .order-detail__content-price__name {
        font-size: toRem(13);
        margin-left: toRem(3);
    }
    .order-detail__content-color__name {
        margin-left: toRem(8);
    }
    .order-detail__content-seller {
        margin-left: toRem(7);
    }
    .order-detail__btns-container {
        width: 100%;
        margin-left: toRem(16);
    }
    .order-detail__btn-delete {
        width: toRem(36);
        height: toRem(36);
    }
    .order-detail__btn-delete::before {
        font-size: toRem(14);
    }
    .order-detail__price-container {
        display: none;
    }
    .order-detail__price-container__mobile {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        margin: 0 toRem(16) toRem(16) toRem(19);
        width: fit-content;
    }
    .order-detail__orderPrice {
        font-size: toRem(13);
        padding-left: 8px;
        white-space: nowrap;
    }
    .order-detail__orderPriceOff {
        font-size: toRem(13);
        padding-right: toRem(8);
        white-space: nowrap;
    }
}
@include xxs {
    .order-detail__img {
        height: toRem(70);
        width: toRem(70);
        margin: toRem(16) toRem(5) 0 0;
    }
    .order-detail__title {
        font-size: toRem(14);
        margin: toRem(20) toRem(6) toRem(16) toRem(19);
    }
    .order-detail__price-container__mobile {
        margin: 0 toRem(6) toRem(16) toRem(19);
    }
    .order-detail__orderPrice {
        font-size: toRem(12);
        padding-left: toRem(5);
    }
    .order-detail__orderPriceOff {
        font-size: toRem(12);
        padding-right: toRem(5);
    }
}
</style>
