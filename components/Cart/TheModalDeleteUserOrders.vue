<template>
  <base-modal
    modal-class="d-rtl"
    :show-modal="show"
    closable-from-backdrop
    @close-from-backdrop="modalClose"
  >
    <div
      class="w-100 p-profile-history-wrapper flex-wrap align-items-start flex-column "
    >
      <h3 class="p-profile-history-title w-100 justify-content-center">
        آیا از حذف این محصول مطمئن هستید؟
      </h3>

      <div class="p-profile-history-btns w-100 justify-content-center">
        <base-button
          @button-clicked="DeleteOrder"
          classes="p-product-btn p-history-product-btn-modal-delete"
          base-color="yellow"
          no-box-shadow
        >
          حذف
        </base-button>
        <base-button
          @button-clicked="modalClose"
          classes="p-product-btn p-history-product-btn-modal-cancel"
          no-box-shadow
          base-color="light-gray"
        >
          انصراف
        </base-button>
      </div>
    </div>
  </base-modal>
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
            this.$emit("btn-delete-order", this.currentOrders);
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
    margin-left: 1rem;
}
.p-history-product-btn-modal-cancel {
   margin-left: 0;
}
.p-product-btn {
  width: 150px;
  height: 47px;
  font-family: inherit;
  transition: all 120ms ease-in;
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
