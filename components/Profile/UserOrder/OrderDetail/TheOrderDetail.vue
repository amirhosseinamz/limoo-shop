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
            <div>timeLine</div>
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
.the-order-detail__holder {
    @include display-flex();
    flex-direction: column;
    justify-content: space-between;
    margin-top: 24px;
    width: 100%;
    min-height: 280px;
    height: fit-content;
    border: 1px solid;
    border: 1px solid $light-gray;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 0 15px 38px 15px;
}
.order-detail__holder {
    @include display-flex();
    flex-direction: row;
    width: 100%;
    min-height: 106px;
    height: fit-content;
    padding-top: 16px;
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
    /* border: 1px solid red; */
}
</style>
