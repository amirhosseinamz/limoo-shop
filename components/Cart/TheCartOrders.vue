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
                            <div class="order-detail__content-holder"></div>
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
    border: 1px solid red;
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
    height: 91px;
    border-right: 2px solid $gray-border;
}
</style>
