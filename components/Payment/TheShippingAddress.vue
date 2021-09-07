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
.order-content-item {
    @include display-flex();
    flex-direction: column;
    border-radius: toRem(10);
    height: fit-content;
    min-height: toRem(140);
    margin-bottom: toRem(8);
    border: toRem(1) solid $light-gray;
}
.order-detail {
    height: toRem(50);
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
    background-color: $circle-bg;
    box-sizing: border-box;
    border-radius: toRem(10);
    border: none;
    cursor: pointer;
}
.order-detail__btn-delete::before {
    @include font-icon__limoo();
    content: "\e826";
    font-size: toRem(16);
    color: $color-gray;
}

@include md {
    .order-content-item {
        min-height: toRem(133);
        margin-bottom: toRem(8);
    }
    .order-detail__content-holder {
        display: none;
    }
    .order-detail__btns-price {
        height: toRem(68);
    }
    .order-detail {
        height: toRem(50);
    }

    .order-detail__title {
        font-size: toRem(14);
        margin: toRem(23) toRem(16) toRem(16) toRem(19);
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
}
@include xxxs {
    .order-detail__title {
        font-size: toRem(14);
        margin: toRem(20) toRem(6) toRem(16) toRem(19);
    }
}
</style>
