<template>
  <base-modal
    class="modal-container d-rtl"
    modal-class="modal"
    @close-modal="modalClose"
  >
    <div class="modal-sort__main">
      <div class="modal-sort__close-item w-100">
        <div class="w-100 modal-filter__item ">
          <h3 class="modal-filter__item-title">
            {{ getTextByTextKey("category_sort_title") }}
          </h3>
          <div @click="modalClose" class="modal-filter__item-left">
            <base-button
              base-color="white"
              mode="close"
              no-box-shadow
              class="modal-filter__item-close"></base-button>
          </div>
        </div>
        <div class="modal-filter__line remove--margin"></div>
      </div>
      <div class="w-100 modal-sort__content">
        <sort-box :sort-data="sortData" @active-radio="activeRadio"></sort-box>
      </div>

      <div class="w-100 modal-filter__btn">
        <div class="modal-filter__line"></div>
        <base-button
          @button-clicked="submitModal"
          classes="p-product-btn"
          base-color="yellow"
          no-box-shadow
        >
          {{ getTextByTextKey("category_btn_submit_change") }}
        </base-button>
        <base-button
          @button-clicked="modalClose"
          classes="modal-cancel"
          no-box-shadow
          base-color="light-gray"
        >
          {{ getTextByTextKey("category_submit_cancelle") }}
        </base-button>
      </div>
    </div>
  </base-modal>
</template>

<script>
import sortBox from "./sortBox";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {

  components: {
    sortBox,
  },

  data() {
    return {
      sortData: [
        {
          id: 1,
          title: 'جدیدترین ها',
          value: 'new'
        },
        {
          id: 2,
          title: 'ارزان ترین ها',
          new: 'cheap'
        },
        {
          id: 3,
          title: 'پروفروش ترین ها',
          new: 'best'
        }
      ],
      selectedRadioBtnData: {},
    };
  },
  watch: {
    active(data) {
      this.$emit("status-show-modal", data);
    },

    "$store.state.category.lastUpdateSortModal"(data) {
      this.sortData = data;
    },
  },

  mounted() {
    // const getDataFilterModal = this.$store.state.category.submitDataFilterModal;
    // const getCheckBox        = getDataFilterModal.lastUpdateCheckBox;
    // if (getCheckBox.length != 0) {
    //   this.radioData    = getCheckBox
    // }
  },

  methods: {
    modalClose() {
      this.$emit('close-modal');
      // this.$store.state.category.submitSortModal   = false;
      this.$store.commit("category/updateStateModals", {
        submitSortModal: false,
      });
    },

    submitModal() {
      this.sortData.map((content, index) => {
        content.checked = content.id === this.selectedRadioBtnData.id;
      });

      // this.$store.state.category.submitSortModal     = true;
      this.$store.commit("category/updateStateModals", {
        submitSortModal: true,
      });
    },

    activeRadio(data) {
      this.selectedRadioBtnData = data;
    },
    getTextByTextKey,
  },
};
</script>

<style lang="scss" scoped>
.modal-container::v-deep {
  .backdrop {
    background-color: rgba(81,81,81,.6)!important;
  }
  .modal {
    max-width: toRem(466);
    .modal-sort__main {
      width: 100%;
      @include display-flex();
      flex-wrap: wrap;
      align-items: flex-start;
      padding-top: toRem(30);
    }
    .modal-filter__item {
      width: 100%;
      @include display-flex();
      flex-wrap: wrap;
      align-items: center;
    }
    .modal-filter__item-title {
      font-size: toRem(18);
      font-weight: 300;
      color: $black;
    }
    .modal-filter__item-close::before {
      font-size: toRem(31);
    }
    .modal-sort__close-item {
      @include display-flex();
      align-items: flex-start;
      padding-right: toRem(15);
      padding-left: toRem(15);
      flex-flow: column;
    }
    .modal-filter__item-left {
      flex-grow: 1;
      @include display-flex();
      justify-content: flex-end;
    }
    .modal-filter__line {
      height: toRem(1);
      width: 100%;
      @include display-flex();
      margin-top: toRem(18);
      margin-bottom: toRem(18);
      background: $flash_white;
    }
    .p-product-btn {
      font-family: inherit;
      width: toRem(130);
      height: toRem(47);
      margin-left: 1.5rem;
    }
    .modal-cancel {
      width: toRem(130);
      height: toRem(47);
      margin-left: 0;
      font-family: inherit;
    }
    .modal-filter__btn {
      padding-bottom: toRem(18);
      @extend .justify-center;
      flex-wrap: wrap;
    }
    .modal-sort__content {
      margin-top: toRem(28);
      margin-bottom: toRem(28);
      @extend .align-center;
      flex-wrap: wrap;
    }
    .remove--margin {
      margin-bottom: 0;
      margin-top: toRem(10);
    }
  }
}

@include xs {
  .modal-container::v-deep {
    .modal {
      max-width: 90%;
      width: 100%;
      .backdrop {
        background-color: rgba(196, 196, 196, 0.8);
      }
      .modal-filter__item-title {
        font-size: toRem(14);
        align-items: flex-start;
      }
      .modal-filter__filter-tools {
        margin-top: 0;
      }
      .modal-cancel {
        font-size: toRem(14);
      }
      .p-product-btn {
        font-size: toRem(14);
      }
      .modal-filter__item-close::before {
        // content: "\e801";
        // @include font-icon__limoo();
        font-size: toRem(24);
      }
      .modal-filter__line {
        margin-top: toRem(12);
      }
      .modal-sort__content {
        margin-top: toRem(25);
        margin-bottom: toRem(16);
      }
      .remove--margin {
        margin-top: toRem(23);
      }
      .modal-filter__btn {
        margin-top: 0;
        padding-bottom: toRem(18);
      }
      .p-product-btn {
        margin-left: 4%;
      }
      .modal-sort__close-item {
        padding-right: 0;
        padding-left: 0;
      }
      .modal-filter__item {
        padding-right: toRem(15);
        padding-left: toRem(15);
      }
    }
  }

}

@include xxs {

  .modal-container::v-deep {
    .modal {
      .p-product-btn {
        width: 36%;
        margin-left: 7%;
      }
      .modal-cancel {
        width: 36%;
      }
    }
  }

}

@include xxs {
  .modal-container::v-deep {
    .modal {
      .p-product-btn {
        width: 45%;
      }
    }
  }

}
</style>
