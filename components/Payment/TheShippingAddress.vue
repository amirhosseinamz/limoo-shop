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
                        <div class="order-detail__holder">
                            <span class="order-detail__title">
                                {{ data.title }}</span
                            >
                        </div>
                    </div>
                </div>

                <div class="order-detail__btns-price">
                    <div class="order-detail__btns-container">
                        <!-- edit btn -->
                        <button
                            @click="showModalDeleteOrder(data)"
                            class="order-detail__btn-delete"
                            name="button"
                        ></button>
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
        return this.$store.getters["shipping/shipping/ordersData"];
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
/* .orders-content__main {
    border: 1px solid red;
} */
.order-content-item {
    @include display-flex();
    flex-direction: column;
    border-radius: 10px;
    height: fit-content;
    min-height: 140px;
    margin-bottom: 8px;
    border: 1px solid $light-gray;
}
.order-detail {
    height: 50px;
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

.order-detail__btns-container {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    width: 190px;
    /* border: 1px solid red; */
    margin-right: 16px;
}
.order-detail__btn-delete {
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
    color: $color-gray;
}

@media (max-width: 960px) {
    .order-content-item {
        min-height: 133px;
        margin-bottom: 8px;
    }
    .order-detail__content-holder {
        display: none;
    }
    .order-detail__btns-price {
        height: 68px;
    }
    .order-detail {
        height: 50px;
    }

    .order-detail__title {
        font-size: 14px;
        margin: 23px 16px 16px 19px;
    }

    .order-detail__btns-container {
        width: 100%;
        margin-left: 16px;
    }
    .order-detail__btn-delete {
        width: 36px;
        height: 36px;
    }

    .order-detail__btn-delete::before {
        font-size: 14px;
    }
}
@media (max-width: 280px) {
    .order-detail__title {
        font-size: 14px;
        margin: 20px 6px 16px 19px;
    }
}
</style>
