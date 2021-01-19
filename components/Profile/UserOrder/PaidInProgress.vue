<template>
    <div>
        <div
            class="paid-progress d-rtl"
            v-for="data in inProgressOrderData"
            :key="data.id"
        >
            <div class="paid-container">
                <div
                    v-for="order in data.orders"
                    :key="order.id"
                    class="paid-order"
                >
                    <div class="p-history-product-img-main">
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
                            <span class="p-history-product-content-price-title">
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
                            to="/profile/my-orders/detail/"
                            class="p-history-product-btn-link"
                        >
                            <span class="btn-text-desktop">مشاهده سفارش</span>
                            <span class="btn-text-mobile">مشاهده </span>
                        </NuxtLink>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PaidInProgress",
    data() {
        return {
            // paidOrderData:0
        };
    },
    props: {
        inProgressOrderData: { type: [Object, Array], default: {} }
    },
    mounted() {
        console.log(this.inProgressOrderData);
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
    font-size: 16px;
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
    content: "\e812";
    @include font-icon__limoo();
    color: $gray;
    margin-left: 5px;
    line-height: 1em;
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
    content: "\e804";
    @include font-icon__limoo();
    color: $gray;
    margin-left: 5px;
    line-height: 1em;
}
.order-date__title::before {
    content: "\e804";
    @include font-icon__limoo();
    color: $gray;
    margin-left: 5px;
    line-height: 1em;
}
.order-situation__title::before {
    content: "\e804";
    @include font-icon__limoo();
    color: $gray;
    margin-left: 5px;
    line-height: 1em;
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
.btn-text-mobile {
    display: none;
}
</style>
