<template>
    <div class="paid-progress d-rtl">
        <div class="paid-container">
            <div
                v-for="data in inProgressOrderData"
                :key="data.id"
                class="paid-order"
            >
                <div class="p-history-product-img-main">
                    <img
                        :src="data.img"
                        class="paid-order-product-img"
                        alt=""
                    />
                </div>

                <div class="p-history-product-content-left">
                    <span class="p-history-product-content-title">
                        {{ data.title }}
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
        console.log(this.inProgressOrderData.order);
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
    margin-left: 38px;
}
.paid-order-btn {
    width: 270px;
    height: 57px;
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
