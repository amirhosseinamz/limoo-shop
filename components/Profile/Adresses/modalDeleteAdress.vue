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
        {{ getTextByTextKey("address_delete_list") }}
      </h3>

      <div class="p-profile-favorite-btns w-100 justify-content-center">
        <button
          @click="deleteItem"
          type="button"
          name="button"
          class="p-product-btn  p-favorite-product-btn-modal-delete cursor-pointer  "
        >
          {{ getTextByTextKey("public_delete") }}
        </button>
        <button
          @click="modalClose"
          type="button"
          name="button"
          class="p-product-btn  cursor-pointer p-favorite-product-btn-modal-cancel  "
        >
          {{ getTextByTextKey("public_cancel") }}
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    active: { type: [Boolean, Number], default: false },
    currentProduct: { type: Object, default: {} },
  },

  components: {},

  computed: {
    show: {
      set(val) {
        this.$emit("update:active", !!val);
      },
      get() {
        return !!this.active;
      },
    },
  },

  methods: {
    deleteItem() {
      this.$emit("btn-delete-modal", this.currentProduct);
    },

    modalClose() {
      this.show = false;
    },

    getTextByTextKey,
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
  background: $yellow;
  margin-left: 16px;
  color: $white;
}
.p-favorite-product-btn-modal-cancel {
  background: $light_gray;
  margin-left: 0;
  border-color: $light_gray;
  color: $gray;
}
.p-favorite-product-btn-modal-cancel:hover {
  background: #e0e0e0;
  color: #828282;
}
.p-favorite-product-btn {
  width: 130px;
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
