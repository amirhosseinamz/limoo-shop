<template>
    <modal class="d-rtl" size="800px" :show.sync="show" :footer="false">
        <div
            class="w-100 p-profile-history-wrapper flex-wrap align-items-start flex-column "
        >
            <h3 class="p-profile-history-title w-100 justify-content-center">
                آیا از حذف این محصول مطمئن هستید؟
            </h3>

            <div class="p-profile-history-btns w-100 justify-content-center">
                <button
                    @click="DeleteOrder"
                    type="button"
                    name="button"
                    class="p-product-btn  p-history-product-btn-modal-delete cursor-pointer  "
                >
                    حذف
                </button>
                <button
                    @click="modalClose"
                    type="button"
                    name="button"
                    class="p-product-btn  cursor-pointer p-history-product-btn-modal-cancel  "
                >
                    انصراف
                </button>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    props: {
        active: { type: [Boolean, Number], default: false },
        currentOrders: { type: Object, default: {} }
    },

    components: {},

    computed: {
        show: {
            set(val) {
                this.$emit("update:active", !!val);
            },
            get() {
                return !!this.active;
            }
        }
    },

    methods: {
        DeleteOrder() {
            this.$emit("btn-delete-history", this.currentOrders);
        },

        modalClose() {
            this.show = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.p-profile-history-wrapper {
    @include display-flex();
    padding: 1rem;
}
.p-profile-history-btns {
    @include display-flex();
    margin-top: 55px;
    margin-bottom: 5px;
}
.p-profile-history-title {
    @include display-flex();
    margin-top: 11px;
    font-size: 20px;
    font-weight: 400;
}
.p-history-product-btn-modal-delete {
    background: $yellow;
    margin-left: 16px;
    color: $white;
}
.p-history-product-btn-modal-cancel {
    background: $light_gray;
    margin-left: 0;
    border-color: $light_gray;
    color: $gray;
}
.p-history-product-btn-modal-cancel:hover {
    background: $light-gray;
    color: $gray;
    /* border: 1px solid red; */
}

@media (max-width: 768px) {
    .p-profile-history-title {
        font-size: 16px;
    }
    .p-product-btn {
        width: 130px;
        height: 41px;
    }
}

@media (max-width: 460px) {
    .p-product-btn {
        width: 116px;
        height: 38px;
    }
}
</style>
