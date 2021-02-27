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
                                    <div class="order-detail__content-price">
                                        <span
                                            class="order-detail__content-price__title"
                                            >هزینه ارسال:</span
                                        >
                                        <span
                                            class="order-detail__content-price__name"
                                            >20،000 تومان</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order-detail__btn"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        ordersData: { type: [Object, Array], default: {} }
    }
};
</script>
<style lang="scss" scoped>
.orders-content__main {
    /* border: 1px solid red; */
}
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
.order-detail__btn {
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
    margin-left: 5px;
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
}
</style>
