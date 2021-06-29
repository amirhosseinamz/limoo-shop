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
                                    <!-- <div class="order-detail__content-price">
                                        <span
                                            class="order-detail__content-price__title"
                                            >هزینه ارسال:</span
                                        >
                                        <span
                                            class="order-detail__content-price__name"
                                            >20،000 تومان</span
                                        >
                                    </div> -->
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
                        <!-- <div class="order-detail__content-price">
                            <span class="order-detail__content-price__title"
                                >هزینه ارسال:</span
                            >
                            <span class="order-detail__content-price__name"
                                >20،000 تومان</span
                            >
                        </div> -->
                    </div>
                </div>
                <div class="order-detail__btns-price">
                    <div class="order-detail__btns-container">
                        <div class="order-detail__btns-add-minus">
                            <button
                                @click="addOrderToCart(data)"
                                class="order-detail__btns-add"
                                :disabled="data.count == 10"
                            ></button>
                            <span class="order-detail__count">{{
                                data.count
                            }}</span>
                            <button
                                @click="minusOrderFromCart(data)"
                                class="order-detail__btns-minus"
                                :disabled="data.count == 1"
                            ></button>
                        </div>
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
        ordersData: { type: [Object, Array], default: {} }
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
/* .orders-content__main {
    border: 1px solid red;
} */
.order-content-item {
    @include display-flex();
    flex-direction: column;
    background-color: $white;
    box-shadow: 0px 8px 16px $box__shadow;
    border-radius: 10px;
    height: fit-content;
    min-height: 270px;
    margin-bottom: 16px;
}
.order-detail {
    height: 192px;
    width: 100%;
    border-bottom: 1px solid $gray-border;
}
.order-detail__btns-price {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 77px;
    width: 100%;
}
.order-detail__desktop-holder {
    @include display-flex();
    flex-direction: row;
}
.order-detail__img {
    height: 120px;
    width: 120px;
    margin: 36px 16px 0 8px;
}
.order-detail__holder {
    @include display-flex();
    flex-direction: column;
}
.order-detail__title {
    font-size: 16px;
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
    margin: 24px 17px 17px 0;
}
.order-detail__content-holder {
    @include display-flex();
    flex-direction: column;
    height: 91px;
    padding-right: 16px;
    border-right: 2px solid $gray-border;
}
.order-detail__content-color {
    @include display-flex();
    flex-direction: row;
}
.order-detail__content-color__title,
.order-detail__content-guarantee__title,
.order-detail__content-seller__title,
.order-detail__content-price__title {
    font-size: 14px;
    line-height: 140.62%;
    color: $gray;
    margin-left: 5px;
}
.order-detail__content-price__title {
    color: $code;
}
.order-detail__content-color__name {
    font-size: 14px;
    line-height: 140.62%;
    color: $black-topic;
    margin-left: 8px;
}
.order-detail__content-guarantee,
.order-detail__content-seller {
    @include display-flex();
    flex-direction: row;
    margin-top: 16px;
    margin-left: 16px;
}
.order-detail__content-price {
    @include display-flex();
    flex-direction: row;
    margin-top: 16px;
}
.order-detail__content-color__circle {
    background-color: $red-logout;
    height: 18px;
    width: 18px;
    border-radius: 50%;
}
.order-detail__content-guarantee__name,
.order-detail__content-seller__name,
.order-detail__content-price__name {
    font-size: 14px;
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
    width: 190px;
    /* border: 1px solid red; */
    margin-right: 16px;
}
.order-detail__btn-delete,
.order-detail__btns-add,
.order-detail__btns-minus {
    width: 43px;
    height: 43px;
    background-color: $circle-bg;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    cursor: pointer;
}
.order-detail__btn-delete::before {
    @include font-icon__limoo();
    content: "\e826";
    font-size: 16px;
    color: $gray-3;
}

.order-detail__btns-add-minus {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 123px;
    border: 1px solid $circle-bg;
    border-radius: 10px;
}
.order-detail__btns-add::before,
.order-detail__btns-minus::before {
    @include font-icon__limoo();
    content: "\e822";
    font-size: 10px;
    font-weight: bold;
    color: $code;
}
.order-detail__btns-minus::before {
    content: "\e81b";
}
.order-detail__count {
    font-size: 16px;
    color: $code;
    line-height: 140.62%;
}
.order-detail__price-container {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    margin-left: 25px;
    width: fit-content;
}
.order-detail__orderPrice {
    font-size: 16px;
    font-family: inherit;
    text-decoration: line-through;
    color: $color-gray;
    padding-left: 15px;
}
.order-detail__orderPriceOff {
    font-size: 16px;
    font-family: inherit;
    color: $code;
    padding-right: 15px;
    border-right: 1px solid $light-gray;
}
.order-detail__price-container__mobile {
    display: none;
}
@media (max-width: 960px) {
    .orders-content__main {
        padding: 0 5px;
    }
    .order-content-item {
        min-height: 314px;
        margin-bottom: 8px;
    }
    .order-detail__content-holder {
        display: none;
    }
    .order-detail__btns-price {
        height: 68px;
    }
    .order-detail {
        height: 114px;
    }
    .order-detail__img {
        height: 80px;
        width: 80px;
        margin: 16px 6px 0 0;
    }
    .order-detail__title {
        font-size: 14px;
        margin: 23px 16px 16px 19px;
    }
    .order-detail__content-holder__mobile {
        @include display-flex();
        flex-direction: column;
        height: 132px;
        border-bottom: 1px solid $gray-border;
        padding-right: 12px;
    }
    .order-detail__content-color {
        margin-top: 16px;
    }
    .order-detail__content-color__title,
    .order-detail__content-guarantee__title,
    .order-detail__content-seller__title,
    .order-detail__content-price__title,
    .order-detail__content-color__name,
    .order-detail__content-guarantee__name,
    .order-detail__content-seller__name,
    .order-detail__content-price__name {
        font-size: 13px;
        margin-left: 3px;
    }
    .order-detail__content-color__name {
        margin-left: 8px;
    }
    .order-detail__content-seller {
        margin-left: 7px;
    }
    .order-detail__btns-container {
        width: 100%;
        margin-left: 16px;
    }
    .order-detail__btn-delete,
    .order-detail__btns-add,
    .order-detail__btns-minus {
        width: 36px;
        height: 36px;
    }
    .order-detail__btns-add-minus {
        width: 108px;
    }
    .order-detail__btn-delete::before {
        font-size: 14px;
    }
    .order-detail__price-container {
        display: none;
    }
    .order-detail__price-container__mobile {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        margin: 0 16px 16px 19px;
        width: fit-content;
    }
    .order-detail__orderPrice {
        font-size: 13px;
        padding-left: 8px;
        white-space: nowrap;
    }
    .order-detail__orderPriceOff {
        font-size: 13px;
        padding-right: 8px;
        white-space: nowrap;
    }
}
@media (max-width: 280px) {
    .order-detail__img {
        height: 70px;
        width: 70px;
        margin: 16px 5px 0 0;
    }
    .order-detail__title {
        font-size: 14px;
        margin: 20px 6px 16px 19px;
    }
    .order-detail__price-container__mobile {
        margin: 0 6px 16px 19px;
    }
    .order-detail__orderPrice {
        font-size: 12px;
        padding-left: 5px;
    }
    .order-detail__orderPriceOff {
        font-size: 12px;
        padding-right: 5px;
    }
}
</style>
