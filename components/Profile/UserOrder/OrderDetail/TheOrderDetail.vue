<template>
    <div>
        <div
            v-for="order in userOrderData.orders"
            :key="order.id"
            class="the-order-detail__holder d-rtl"
        >
            <div class="order-detail__holder">
                <img :src="order.img" class="paid-order-product-img" alt="" />
                <div class="order-title__holder">
                    <span class="p-product-content-title">
                        {{ order.title }}
                    </span>
                    <div class="p-product-content-price">
                        <span class="p-product-content-price-title">
                            {{ order.price }}
                        </span>
                        <span class="p-product-content-price-title price-unit">
                            تومان
                        </span>
                    </div>
                </div>
            </div>
            <div class="order-detail__timeline">
                <ul class="progressbar">
                    <li
                        :class="[
                            order.progress == 1 ? 'active' : '',
                            order.progress == 2 ? 'active' : '',
                            order.progress == 3 ? 'active' : '',
                            order.progress == 4 ? 'active' : ''
                        ]"
                    >
                        بررسی
                    </li>
                    <li
                        :class="[
                            order.progress == 2 ? 'active' : '',
                            order.progress == 3 ? 'active' : '',
                            order.progress == 4 ? 'active' : ''
                        ]"
                    >
                        آماده سازی
                    </li>
                    <li
                        :class="[
                            order.progress == 3 ? 'active' : '',
                            order.progress == 4 ? 'active' : ''
                        ]"
                    >
                        ارسال
                    </li>
                    <li :class="{ active: order.progress == 4 }">تحویل</li>
                </ul>
            </div>
            <div class="order-detail__shipment-date">
                تاریخ و زمان تحویل به شما: سه شنبه 27 آبان 1399
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "TheOrderDetail",
    props: {
        userOrderData: { type: [Object, Array], default: {} }
    }
};
</script>
<style lang="scss" scoped>
/*  */
.progressbar li {
    list-style: none;
    display: inline-block;
    width: 24%;
    position: relative;
    text-align: center;
    color: $gray;
}
.progressbar li:before {
    content: "";
    width: 26px;
    height: 26px;
    line-height: 30px;
    border-radius: 50%;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    background-color: $gray__bar;
    z-index: 1;
    position: inherit;
}
.progressbar li:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: $gray__bar;
    top: 13px;
    left: 50%;
    z-index: 0;
}
.progressbar li:first-child:after {
    content: none;
}
.progressbar li.active {
    color: $black;
}
.progressbar li.active:before {
    border-color: $icon__green;
    background-color: $icon__green;
}
.progressbar li.active:after {
    background-color: $icon__green;
}
/*  */

.the-order-detail__holder {
    @include display-flex();
    flex-direction: column;
    justify-content: space-between;
    margin-top: 24px;
    width: 100%;
    min-height: 280px;
    height: fit-content;
    border: 1px solid $light-gray;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 0 0px 38px 0px;
}
.order-detail__timeline {
    padding-top: 12px;
    width: 125%;
    /* border: 1px solid red; */
    height: 80px;
    margin-right: -12.5%;
    margin-left: -12.5%;
}
.order-detail__holder {
    @include display-flex();
    flex-direction: row;
    width: 100%;
    min-height: 106px;
    height: fit-content;

    padding: 16px 15px 0 15px;

    /* border: 1px solid red; */
}
.paid-order-product-img {
    width: 90px;
    height: 90px;
}
.order-title__holder {
    @include display-flex();
    flex-direction: column;
    width: 100%;
    min-height: 70px;
    height: fit-content;
    padding-top: 16px;
    padding-right: 16px;
    /* border: 1px solid red; */
}
.p-product-content-title {
    font-size: 16px;
    line-height: 140.62%;
    text-align: right;
}
.p-product-content-price {
    @include display-flex();
    flex-direction: row;
    width: 100%;
    margin-top: 16px;
    /* border: 1px solid red; */
}
.p-product-content-price-title {
    font-size: 16px;
    line-height: 140.62%;
    color: $gray;
    text-align: right;
}
.price-unit {
    margin-right: 4px;
}
.order-detail__shipment-date {
    width: 100%;
    font-size: 16px;
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
    margin-right: 15px;
    margin-top: 38px;
    /* border: 1px solid red; */
}
@media (max-width: 1450px) {
    .order-detail__timeline {
        width: 120%;
        margin-right: -10%;
        margin-left: -10%;
    }
}
@media (max-width: 1220px) {
    .order-detail__timeline {
        width: 110%;
        margin-right: -5%;
        margin-left: -5%;
    }
}
@media (max-width: 960px) {
    .order-detail__shipment-date {
        display: none;
    }
    .the-order-detail__holder {
        margin-top: 11px;
        width: 100%;
        min-height: 182px;
        padding: 0 0px 0px 0px;
        overflow-x: hidden;
    }
    .order-detail__holder {
        min-height: 86px;
        height: fit-content;
        padding: 16px 8px 0 8px;
    }
    /* /\/\/\/\/\/\/\/\ */
    .order-detail__timeline {
        padding-top: 5px;
        width: 120%;
        height: 46px;
        margin-right: -10%;
        margin-left: -10%;
        margin-bottom: 16px;
    }
    .progressbar li {
        width: 24%;
        font-size: 13px;
    }
    .progressbar li:before {
        width: 15px;
        height: 15px;
        margin: 0 auto 10px auto;
    }
    .progressbar li:after {
        width: 100%;
        top: 7px;
    }
    /* /\/\/\/\/\/\/\/\ */
    .paid-order-product-img {
        width: 80px;
        height: 80px;
    }
    .order-title__holder {
        min-height: 60px;
        height: fit-content;
        padding-top: 7px;
    }
    .p-product-content-title {
        font-size: 13px;
    }
    .p-product-content-price {
        margin-top: 10px;
    }
    .p-product-content-price-title {
        font-size: 13px;
    }
}
@media (max-width: 700px) {
    .p-product-content-price {
        margin-top: 4px;
    }
    .order-detail__timeline {
        width: 120%;
        margin-right: -10%;
        margin-left: -10%;
    }

    .progressbar li {
        width: 24%;
        font-size: 13px;
    }
    .progressbar li:before {
        width: 9px;
        height: 9px;
        margin: 0 auto 10px auto;
    }
    .progressbar li:after {
        width: 105%;
        top: 4px;
    }
}
@media (max-width: 500px) {
    .progressbar li {
        width: 22%;
    }
}
@media (max-width: 340px) {
    .progressbar li {
        width: 20%;
        font-size: 12px;
    }
}
@media (max-width: 280px) {
    .progressbar li {
        font-size: 11px;
    }
}
</style>
