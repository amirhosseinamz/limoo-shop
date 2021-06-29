<template>
    <modal
        id="p-profile-favorite-modal"
        class="p-profile-favorite-modal d-rtl"
        size="800px"
        :show.sync="show"
        :footer="false"
    >
        <div
            class="w-100 p-profile-favorite-wrapper flex-wrap align-items-start flex-column "
        >
            <h3 class="p-profile-favorite-title w-100 justify-content-center">
                این محصول از لسیت حذف شود؟
            </h3>

            <div class="p-profile-favorite-btns w-100 justify-content-center">
                  <base-button
                    @button-clicked="DeleteFavorite"
                    classes="p-product-btn p-favorite-product-btn-modal-delete"
                    base-color="yellow"
                    no-box-shadow
                  >
                    حذف
                </base-button>
                  <base-button
                    @button-clicked="modalClose"
                    classes="p-product-btn p-favorite-product-btn-modal-cancel"
                    no-box-shadow
                    base-color="light-gray"
                  >
                    انصراف
                </base-button>
            </div>
        </div>
    </modal>
</template>

<script>
export default {
    props: {
        active: { type: [Boolean, Number], default: false },
        currentFavorite: { type: Object, default: {} }
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
        DeleteFavorite() {
            this.$emit("btn-delete-favorite", this.currentFavorite);
        },

        modalClose() {
            this.show = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.p-profile-favorite-wrapper {
    @include display-flex();
    padding: 1rem;
}
.p-profile-favorite-btns {
    @include display-flex();
    margin-top: 55px;
    margin-bottom: 5px;
}
.p-profile-favorite-title {
    @include display-flex();
    margin-top: 11px;
    font-size: 21px;
    font-weight: 400 !important;
}
.p-favorite-product-btn-modal-delete {
    margin-left: 1rem;
}
.p-favorite-product-btn-modal-cancel {
    margin-left: 0;
}

@media (max-width: 768px) {
    .p-profile-favorite-title {
        font-size: 16px;
    }
    .p-product-btn {
        width: 130px!important;
        height: 41px!important;
    }
}

@media (max-width: 460px) {
    .p-product-btn {
        width: 116px!important;
        height: 38px!important;
    }
}
</style>
