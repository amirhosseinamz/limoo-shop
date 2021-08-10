<template>
  <base-modal
    modal-class="p-profile-favorite-modal d-rtl"
    closable-from-backdrop
    @close-from-backdrop="modalClose"
  >
    <div
      class="w-100 p-profile-favorite-wrapper flex-wrap align-items-start flex-column "
    >
      <h3 class="p-profile-favorite-title w-100 justify-content-center">
        {{ getTextByTextKey("comments_are_you_sure_delete") }}
      </h3>

      <div class="p-profile-favorite-btns w-100 justify-content-center">
        <base-button
          @button-clicked="deleteItem"
          classes="p-product-btn p-favorite-product-btn-modal-delete"
          base-color="yellow"
          no-box-shadow
        >
          {{ getTextByTextKey("public_delete") }}
        </base-button>
        <base-button
          @button-clicked="modalClose"
          classes="p-product-btn p-favorite-product-btn-modal-cancel"
          no-box-shadow
          base-color="light-gray"
        >
          {{ getTextByTextKey("public_cancel") }}
        </base-button>
      </div>
    </div>
  </base-modal>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    currentProduct: { type: Object, default: {} },
  },

  methods: {
    getTextByTextKey,
    deleteItem() {
      this.$emit("btn-delete-modal", this.currentProduct);
    },

    modalClose() {
      this.$emit('close-modal');
    },
  },
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
.p-favorite-product-btn {
  width: 130px;
}
.p-product-btn {
  width: 150px;
  height: 47px;
  font-family: inherit;
  transition: all 120ms ease-in;
}
@media (max-width: 768px) {
  .p-profile-favorite-title {
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
