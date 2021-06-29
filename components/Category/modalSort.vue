<template>
  <modal
    id="modal-sort"
    class="modal-sort d-rtl"
    size="800px"
    :show.sync="show"
    :footer="false"
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
  </modal>
</template>

<script>
import "~/assets/styles/_modal_filter_category.scss";
import sortBox from "./sortBox";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    active: { type: [Boolean, Number], default: false },
  },

  components: {
    sortBox,
  },

  data() {
    return {
      sortData: [],
      selectedRadioBtnData: {},
    };
  },

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
      this.show = false;
      // this.$store.state.category.submitSortModal   = false;
      this.$store.commit("category/updateStateModals", {
        submitSortModal: false,
      });
    },

    submitModal() {
      this.sortData.map((content, index) => {
        if (content.id == this.selectedRadioBtnData.id) {
          content.checked = true;
        } else {
          content.checked = false;
        }
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
.modal-sort__main {
  width: 100%;
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 30px;
}
.modal-filter__item {
  width: 100%;
  @include display-flex();
  flex-wrap: wrap;
  align-items: center;
}
.modal-filter__item-title {
  font-size: 18px;
  font-weight: 300;
  color: $black;
}
.modal-filter__item-close::before {
  font-size: 31px;
}
.modal-sort__close-item {
  @include display-flex();
  align-items: flex-start;
  padding-right: 15px;
  padding-left: 15px;
  flex-flow: column;
}
.modal-filter__item-left {
  flex-grow: 1;
  @include display-flex();
  justify-content: flex-end;
}
.modal-filter__line {
  height: 1px;
  width: 100%;
  @include display-flex();
  margin-top: 18px;
  margin-bottom: 18px;
  background: $flash_white;
}
.p-product-btn {
  width: 130px;
  height: 47px;
  margin-left: 1.5rem;
}
.modal-cancel {
  width: 130px;
  height: 47px;
  margin-left: 0;
  font-family: inherit;
}
.modal-filter__btn {
  padding-bottom: 18px;
  justify-content: center;
  @include display-flex();
  justify-content: center;
  flex-wrap: wrap;
}
.modal-sort__content {
  margin-top: 54px;
  margin-bottom: 54px;
  @include display-flex();
  align-items: flex-start;
}
.remove--margin {
  margin-bottom: 0;
  margin-top: 10px;
}

@media (max-width: 768px) {
}

@media (max-width: 485px) {
  .modal-filter__item-title {
    font-size: 14px;
    align-items: flex-start;
  }
  .modal-filter__filter-tools {
    margin-top: 0;
  }
  .modal-cancel {
    font-size: 14px;
  }
  .p-product-btn {
    font-size: 14px!important;
  }
  .modal-filter__item-close::before {
    // content: "\e801";
    // @include font-icon__limoo();
    font-size: 24px;
  }
  .modal-filter__line {
    margin-top: 12px;
  }
  .modal-sort__content {
    margin-top: 25px;
  }
  .remove--margin {
    margin-top: 23px;
  }
  .modal-filter__btn {
    margin-top: 0px;
    padding-bottom: 18px;
  }
  .p-product-btn {
    margin-left: 4%!important;
  }
  .modal-sort__close-item {
    padding-right: 0px;
    padding-left: 0;
  }
  .modal-filter__item {
    padding-right: 15px;
    padding-left: 15px;
  }
}

@media (max-width: 330px) {
  // .modal-filter__item-close::before{
  //   font-size: 17px;
  // }
  .p-product-btn {
    width: 36%!important;
    margin-left: 7%!important;
  }
  .modal-cancel {
    width: 36%;
  }
}

@media (max-width: 320px) {
  .p-product-btn {
    width: 45%!important;
  }
}
</style>
