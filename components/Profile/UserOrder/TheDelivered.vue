<template>
    <div>
        <div
            class="paid-progress d-rtl"
            v-for="data in userOrderData"
            :key="data.id"
        >
            <div class="mobile-paid-holder">
                <div class="paid-container">
                    <div
                        v-for="order in data.orders"
                        :key="order.id"
                        class="paid-order"
                    >
                        <div>
                            <img
                                :src="order.img"
                                class="paid-order-product-img"
                                alt=""
                            />
                        </div>

                        <div class="p-history-product-content-left">
                            <span class="p-history-product-content-title">
                                {{ order.title }}
                            </span>
                            <div class="p-history-product-content-price">
                                <span
                                    class="p-history-product-content-price-title"
                                >
                                    123,000,000
                                </span>
                                <span
                                    class="p-history-product-content-price-title price-unit"
                                >
                                    تومان
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <span class="btn-mobile__order-detail">مشاهده جزئیات </span>
            </div>
            <div class="paid-detail">
                <div class="order-detail order-code">
                    <span class="order-code__title">کد سفارش:</span>
                    <span class="order-code__value">{{ data.orderCode }}</span>
                </div>
                <div class=" order-detail order-price">
                    <span class="order-price__title">قیمت:</span>
                    <div class="order-price__value-holder">
                        <span class="order-price__value">
                            {{ data.orderPrice }}</span
                        >
                        <span class="order-price__toman"> تومان</span>
                    </div>
                </div>
                <div class="order-detail order-date">
                    <span class="order-date__title">تاریخ ثبت:</span>
                    <span class="order-date__jalali">{{ data.orderData }}</span>
                </div>
                <div class="order-detail order-situation">
                    <span class="order-situation__title">وضعیت:</span>
                    <span class="order-situation__value">{{
                        data.orderSituation
                    }}</span>
                </div>
                <div class="p-order-product-btn-main">
                    <button
                        type="button"
                        class="paid-order-btn cursor-pointer"
                        name="button"
                    >
                        <NuxtLink
                            :to="
                                '/profile/my-orders/delivered/detail/' +
                                    data.orderCode
                            "
                            class="p-history-product-btn-link"
                        >
                            <span class="btn-text-desktop">مشاهده سفارش</span>
                        </NuxtLink>
                    </button>
                </div>
            </div>
            <span
                class="p-history-product-line w-100 p-history-product-desktop"
            ></span>
        </div>
    </div>
</template>
<script>
export default {
    name: "TheUserOrder",
    data() {
        return {
            // paidOrderData:0
        };
    },
    props: {
        userOrderData: { type: [Object, Array], default: {} }
    },
    mounted() {
        console.log(this.userOrderData);
    }
};
</script>
<style lang="scss" scoped>
.paid-holder {
    @include display-flex();
    flex-direction: column;
}
.paid-progress {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    margin-top: 24px;
    width: 100%;
    background: $white;
    height: max-content;
    border-radius: 10px;
    /* border: 1px solid red; */
}
.paid-order {
    @include display-flex();
    flex-direction: row;
    /* border: 1px solid red; */
    margin: 8px 26px;
    align-items: center;
}
.paid-container {
    @include display-flex();
    flex-direction: column;
    margin: 26px 0;
    /* border: 1px solid red; */
}
.paid-order-product-img {
    width: 90px;
    height: 90px;
}
.p-history-product-content-title {
    font-size: 16px;
    color: $black-topic;
}
.p-history-product-content-price {
    @include display-flex();
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 16px;
}
.p-history-product-content-price-title {
    font-size: 16px;
    line-height: 140.62%;
    color: $gray;
}
.price-unit {
    margin-right: 5px;
}
.paid-detail {
    @include display-flex();
    flex-direction: column;
    width: 335px;
    height: 364px;
    background-color: $order__detail-bg;
    /* opacity init in color ⇑ */
    border-radius: 10px;
    margin-top: 38px;
    margin-bottom: 24px;
    margin-left: 38px;
    padding-top: 23px;
    /* border: 1px solid blue; */
}
.order-detail {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    /* border: 1px solid blue; */
    margin: 18px 0;
    padding: 0 38px;
}
.order-code__title::before {
    content: "\e896";
    @include font-icon__limoo();
    color: $gray;
    margin-left: 8px;
    line-height: 1em;
    align-self: center;
    /* transform: rotate(30deg); for test*/
}
/* .order-code__title:hover::before {
    color: $yellow;
                                 for test 
   
} */
.order-code {
    &__value,
    &__title {
        @include display-flex();
        flex-direction: row;
        width: 40%;
        /* border: 1px solid red; */
        justify-self: flex-start;
        font-size: 14px;
        line-height: 140.62%;
        color: $black-topic;
    }
}
.order-price__value-holder,
.order-price__title {
    @include display-flex();
    flex-direction: row;
    justify-self: flex-start;
    /* border: 1px solid red; */
    width: 40%;
}
.order-price__title::before {
    content: "\e897";
    @include font-icon__limoo();
    color: $gray;
    margin-left: 8px;
    line-height: 1em;
    align-self: center;
}
.order-date__title::before {
    content: "\e804";
    @include font-icon__limoo();
    color: $gray;
    margin-left: 8px;
    line-height: 1em;
    align-self: center;
}
.order-situation__title::before {
    content: "\e898";
    @include font-icon__limoo();
    color: $gray;
    margin-left: 8px;
    line-height: 1em;
    align-self: center;
}
.order-price {
    &__value,
    &__toman,
    &__title {
        font-size: 14px;
        line-height: 140.62%;
        color: $black-topic;
    }
}
.order-price__toman {
    margin-right: 4px;
}
.order-date__title,
.order-date__jalali,
.order-situation__title,
.order-situation__value {
    @include display-flex();
    flex-direction: row;
    justify-self: flex-start;
    /* border: 1px solid red; */
    width: 40%;
    font-size: 14px;
    line-height: 140.62%;
    color: $black-topic;
}

.paid-order-btn {
    width: 270px;
    height: 57px;
    margin-top: 41px;
    margin-bottom: 19px;
    background-color: $btn__green;
    border-radius: 10px;
    outline: none;
    border: none;
}
.paid-order-btn a {
    text-decoration: none;
}
.btn-text-desktop {
    color: $white;
    font-size: 16px;
    line-height: 140.62%;
    font-family: "IRANYekan";
}
.btn-mobile__order-detail,
.p-history-product-line {
    display: none;
}
@media (max-width: 1220px) {
    .paid-detail {
        width: 320px;
        margin-left: 10px;
        padding-top: 13px;
    }
    .paid-order {
        margin: 5px 10px;
    }
    .order-situation__title,
    .order-date__title,
    .order-code__title,
    .order-price__title {
        font-size: 13px;
    }
    .order-detail {
        justify-content: center;
        margin: 18px 0;
        padding: 0 20px;
    }
    .paid-order-product-img {
        width: 60px;
        height: 60px;
    }
    .p-history-product-content-title,
    .p-history-product-content-price-title {
        font-size: 14px;
    }
    .btn-text-desktop {
        font-size: 15px;
    }
    .paid-order-btn {
        width: 250px;
    }
}
@media (max-width: 960px) {
    .paid-progress {
        /* @include display-flex(); */
        flex-direction: column-reverse;
        /* justify-content: space-between; */
        margin-top: 0;
        /* width: 100%; */
        /* background: $white;
        height: max-content;*/
        border-radius: 0px;
        /* border: 1px solid blue; */
    }
    .mobile-paid-holder {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        /* border: 1px solid blue; */
    }
    .paid-detail {
        @include display-flex();
        flex-direction: column;
        width: 100%;
        height: fit-content;
        background-color: transparent;
        /* opacity init in color ⇑ */
        /* border-radius: 10px; */
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
        padding-top: 11px;
        /* border: 1px solid blue; */
    }
    .p-order-product-btn-main,
    .order-situation,
    .order-price {
        display: none;
    }
    .btn-mobile__order-detail {
        align-self: flex-end;
        display: block;
        font-size: 13px;
        line-height: 140.62%;
        color: $gray;
        margin-bottom: 14px;
        margin-right: 4px;
    }
    .btn-mobile__order-detail::after {
        content: "\e800";
        @include font-icon__limoo();
        line-height: 1em;
        color: $yellow;
        vertical-align: middle;
        font-size: 18px;
        margin-left: 13px;
    }
    .order-detail {
        justify-content: flex-start;
        /* border: 1px solid blue; */
        margin: 5px 0;
        padding: 0 5px;
    }
    .order-code {
        order: 1;
        &__value {
            margin-right: 4px;
        }
        &__value,
        &__title {
            width: fit-content;
            /* border: 1px solid red; */
            justify-self: flex-start;
            font-size: 13px;
            color: $black-topic;
        }
        &__title::before {
            content: "";
        }
    }
    .order-date {
        /* order: 1; */
        &__title,
        &__jalali {
            justify-self: flex-start;
            /* border: 1px solid red; */
            width: fit-content;
            font-size: 13px;

            color: $black-topic;
        }
        &__jalali {
            margin-right: 4px;
        }
        &__title::before {
            content: "";
        }
    }
    .paid-container {
        @include display-flex();
        flex-direction: row;
        flex-wrap: wrap;
        width: 55%;
        margin: 0;
        height: fit-content;
        /* border: 1px solid red; */
        padding-right: 11px;
    }
    .p-history-product-content-title,
    .p-history-product-content-price {
        display: none;
    }
    .paid-order-product-img {
        width: 40px;
        height: 40px;
        margin-left: 5px;
        border: 1px solid #f2f2f2;
        border-radius: 5px;
    }
    .paid-order {
        @include display-flex();
        flex-direction: row;
        /* border: 1px solid red; */
        height: fit-content;
        margin: 0;
        margin-top: 8px;
        align-items: center;
        padding: 0;
    }
    .p-history-product-line {
        @include display-flex();
        background: $gray-border;

        height: 1px;
    }
}
@media (max-width: 350px) {
    .paid-container {
        width: fit-content;
        padding-right: 5px;
    }
    .paid-order-product-img {
        margin-left: 1px;
    }
    .btn-mobile__order-detail {
        font-size: 12px;
        margin-right: 1px;
    }
    .btn-mobile__order-detail::after {
        font-size: 15px;
        margin-left: 7px;
    }
}
@media (max-width: 280px) {
    .paid-container {
        padding-right: 2px;
    }

    .btn-mobile__order-detail {
        font-size: 11px;
    }
    .btn-mobile__order-detail::after {
        margin-left: 2px;
    }
}
</style>

