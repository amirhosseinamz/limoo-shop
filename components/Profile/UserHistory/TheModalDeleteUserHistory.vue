<template>
  <modal class="d-rtl" size="800px" :show.sync="show" :footer="false">
    <div
      class="w-100 p-profile-history-wrapper flex-wrap align-items-start flex-column "
    >
      <h3 class="p-profile-history-title w-100 justify-content-center">
        {{ getTextByTextKey("profile_order_msg_delete") }}
      </h3>

      <div class="p-profile-history-btns w-100 justify-content-center">
          <base-button
            @button-clicked="DeleteHistory"
            classes="p-product-btn p-history-product-btn-modal-delete"
            base-color="yellow"
            no-box-shadow
          >
          {{ getTextByTextKey("public_delete") }}
        </base-button>
          <base-button
            @button-clicked="modalClose"
            classes="p-product-btn p-history-product-btn-modal-cancel"
            no-box-shadow
            base-color="light-gray"
          >
          {{ getTextByTextKey("public_cancel") }}
        </base-button>
      </div>
    </div>
  </modal>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    active: { type: [Boolean, Number], default: false },
    currentHistory: { type: Object, default: {} },
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
    getTextByTextKey,
    DeleteHistory() {
      this.$emit("btn-delete-history", this.currentHistory);
    },

    modalClose() {
      this.show = false;
    },
  },
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
