<template>
  <base-modal
    class="modal-container"
    @close="modalClose"
  >
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
  </base-modal>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    currentHistory: { type: Object, default: {} },
  },


  methods: {
    getTextByTextKey,
    DeleteHistory() {
      this.$emit("btn-delete-history", this.currentHistory);
    },

    modalClose() {
      this.$emit('close-modal');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container::v-deep {
  dialog {
    width: toRem(800);
  }
  direction: rtl;
    .p-profile-history-wrapper {
      @include display-flex();
      padding: 1rem;
    }
    .p-profile-history-btns {
      @include display-flex();
      margin-top: toRem(55);
      margin-bottom: toRem(5);
    }
    .p-profile-history-title {
      @include display-flex();
      margin-top: toRem(11);
      font-size: toRem(20);
      font-weight: 400;
    }
    .p-history-product-btn-modal-delete {
      margin-left: 1rem;
    }
    .p-history-product-btn-modal-cancel {
      margin-left: 0;
    }
    .p-product-btn {
      width: toRem(150);
      height: toRem(47);
      font-family: inherit;
      transition: all 120ms ease-in;
    }
}

@media (max-width: 768px) {
  .modal-container::v-deep {
      .p-profile-history-title {
        font-size: toRem(16);
      }
      .p-product-btn {
        width: toRem(130);
        height: toRem(41);
      }
  }

}

@media (max-width: 460px) {
  .modal-container::v-deep {
      .p-product-btn {
        width: toRem(116);
        height: toRem(38);
      }
    }
}
</style>
