<template>
  <modal
    id="modal-filter"
    class="modal-filter d-rtl"
    size="800px"
    :show.sync="show"
    :footer="false"
  >
    <div class="modal-filter__main">
      <div class="w-100 modal-filter__filter-tools">
        <div class="modal-filter__close-item w-100">
          <div class="w-100 modal-filter__item ">
            <h3 class="modal-filter__item-title">
              {{ getTextByTextKey("category_advanced_search") }}
            </h3>
            <div @click="modalClose" class="modal-filter__item-left">
              <base-button
                base-color="white"
                mode="close"
                no-box-shadow
                class="modal-filter__item-close"></base-button>
            </div>
            <div class="modal-filter__line"></div>
          </div>
        </div>

        <filter-toggle-active-btn></filter-toggle-active-btn>

        <filter-price
          :open-default-box="true"
          :title="getTextByTextKey('category_price_range_text')"
          :minMax="{ min: 0, max: 100000 }"
          :from-to-renge="rengeFromTo"
          @last-update-slider-renge="lastUpdateSliderRenge"
        ></filter-price>

        <filter-brand
          v-for="(data, index) in checkBoxData"
          :key="index"
          :open-default-box="data.openDefault"
          :title="data.title"
          :check-box-data="data.children"
          @checked-brand-filter="checkedBrandFilter"
        ></filter-brand>
      </div>

      <div class="w-100 modal-filter__btn">
        <div class="modal-filter__line"></div>

        <div class="modal__btn-main w-100">
          <Button
            state="initial"
            :show-inside-icon-button-text="false"
            class-name-text-button=""
            class-name-icon-button=""
            :text="getTextByTextKey('category_btn_submit_change')"
            icon-address="/icons/filter_search_icon.svg"
            class="p-product-btn"
            @btn-click="submitFliterModal"
          ></Button>

          <Button
            state="initial"
            :show-inside-icon-button-text="false"
            class-name-text-button=""
            class-name-icon-button=""
            :text="getTextByTextKey('category_submit_cancelle')"
            icon-address="/icons/filter_search_icon.svg"
            class="modal-cancel"
            @btn-click="modalClose"
          ></Button>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import "~/assets/styles/_modal_filter_category.scss";
import filterPrice from "./filterPrice";
import filterToggleActiveBtn from "./filterToggleActiveBtn";
import filterBrand from "./filterBrand";
import filterStore from "./filterStore";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import Button from "~/components/UI/Button";

export default {
  props: {
    active: { type: [Boolean, Number], default: false },
  },

  components: {
    filterPrice,
    filterToggleActiveBtn,
    filterBrand,
    filterStore,
    Button,
  },

  data() {
    return {
      rengeFromTo: {
        from: 10000,
        to: 30000,
      },
      checkBoxData: {},
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

    // '$store.state.category.submitDataFilterModal'(data){
    // },
  },

  created() {},

  mounted() {
    this.getDefaultCheckbox();
  },

  methods: {
    modalClose() {
      this.show = false;
      // this.$store.state.category.submitFliterModal = false;
      this.$store.commit("category/updateStateModals", {
        submitFliterModal: false,
      });
    },

    lastUpdateSliderRenge(data) {
      // this.$store.state.category.submitDataFilterModal.lastUpdateSliderRenge = data;
      this.$store.commit("category/updateSliderRenge", data);
    },

    submitFliterModal() {
      // this.$store.state.category.submitFliterModal                        = true;
      this.$store.commit("category/updateStateModals", {
        submitFliterModal: true,
      });
    },

    checkedBrandFilter(data) {
      console.log(data);
    },

    getDefaultCheckbox() {
      const getDataFilterModal = this.$store.state.category
        .submitDataFilterModal;
      const checkBoxData = getDataFilterModal.lastUpdateCheckBox;

      for (let key in checkBoxData) {
        this.checkBoxData[key] = checkBoxData[key];
      }
    },

    getTextByTextKey,
  },
};
</script>

<style lang="scss" scoped>
.modal-filter__main {
  width: 100%;
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
  padding-right: 18px;
  padding-left: 18px;
  padding-top: 30px;
  height: 100vh;
  flex-flow: column;
  justify-content: space-between;
}
.modal-filter__item {
  width: 100%;
  @include display-flex();
  flex-wrap: wrap;
  align-items: center;
}
.modal-filter__item-title {
  font-size: 16px;
  color: $dark_gray;
  font-weight: 300;
}
.modal-filter__item-close::before {
  font-size: 22px;
  opacity: 0.5;
}
.modal-filter__close-item {
  @include display-flex();
  align-items: flex-start;
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
  margin-top: 20px;
  margin-bottom: 18px;
  background: $flash_white;
}
.p-product-btn {
  width: 130px;
  height: 47px;
  background: $yellow !important;
  color: $white;
  margin-left: 24px;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
}
.modal-cancel {
  width: 130px;
  height: 47px;
  background: $light-gray;
  margin-left: 0;
  border-color: $gray;
  color: #828282;
  border-radius: 10px;
  border: none;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
}
.modal-filter__btn {
  padding-bottom: 18px;
  justify-content: center;
  @include display-flex();
  justify-content: center;
  flex-wrap: wrap;
}
.modal-filter__close-item .modal-filter__item-title {
  color: $color-price;
}
.modal-filter__main::v-deep .button__text {
  margin-right: 0;
  margin-right: auto;
  margin-left: auto;
}
.modal__btn-main {
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
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
    font-size: 14px;
  }
  .modal-filter__main::v-deep .button__text {
    font-size: 14px;
  }
  .modal-filter__item-close::before {
    content: "\e801";
    @include font-icon__limoo();
    font-size: 17px;
    opacity: 1;
  }
  .modal-filter__line {
    margin-top: 12px;
  }
  .modal-filter__btn {
    padding-bottom: 12px;
  }
}

@media (max-width: 330px) {
  // .modal-filter__item-close::before{
  //   font-size: 17px;
  // }
  .p-product-btn {
    width: 36%;
    margin-left: 7%;
  }
  .modal-cancel {
    width: 36%;
  }
}
</style>
