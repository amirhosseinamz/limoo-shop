<template>
  <base-modal
    class="modal-container d-rtl"
    modal-class="modal"
    :mode="modalMode"
    @close-modal="modalClose"
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
          :from-to-range="rengeFromTo"
          @last-update-slider-range="lastUpdateSliderRenge"
        ></filter-price>

        <filter-brand
          @checked-brand-filter="checkedBrandFilter"
        ></filter-brand>

      </div>

      <div class="w-100 modal-filter__btn">
        <div class="modal-filter__line"></div>

        <div class="modal__btn-main w-100">
          <base-button
            @button-clicked="submitFliterModal"
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
    </div>
  </base-modal>
</template>

<script>
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
        from: 40000,
        to: 70000,
      },
      checkBoxData: {
        openDefault: true,
        title: "انتخاب برند",
      },
      windowWidth: 0
    };
  },

  computed: {
    modalMode() {
      if (this.windowWidth > 420) {
        return "right-side";
      } else {
        return "full-screen";
      }
    },
  },

  watch: {
    active(data) {
      this.$emit("status-show-modal", data);
    },

    // '$store.state.category.submitDataFilterModal'(data){
    // },
  },

  created() {
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.getDefaultCheckbox();
  },

  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    modalClose() {
      this.$emit('close-modal');
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
.modal-container::v-deep {
  .backdrop {
    background-color: rgba(81,81,81,.6)!important;
  }
  .modal {
    margin-right: 0;
    min-height: auto;
    max-width: 377px;
    border-radius: toRem(10) 0 0 toRem(10);

    .modal-filter__main {
      width: 100%;
      @include display-flex();
      flex-wrap: wrap;
      align-items: flex-start;
      padding-right: toRem(18);
      padding-left: toRem(18);
      padding-top: toRem(30);
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
      font-size: toRem(16);
      color: $dark_gray;
      font-weight: 300;
    }
    .modal-filter__filter-tools {
      overflow-y: scroll;
    }

    .modal-filter__item-close::before {
      font-size: toRem(22);
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
      height: toRem(1);
      width: 100%;
      @include display-flex();
      margin-top: toRem(20);
      margin-bottom: toRem(18);
      background: $flash_white;
    }

    .modal-cancel {
      width: toRem(130);
      height: toRem(47);
      margin-left: 0;
      font-family: inherit;
    }

    .modal-filter__btn {
      padding-bottom: toRem(18);
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

    .p-product-btn {
      width: toRem(130);
      height: toRem(47);
      margin-left: 1.5rem;
      font-family: inherit;
      font-size: 1rem;
      padding: 0;
    }
  }
}

@include xs {
  .modal-container::v-deep {
    .modal {
      max-width: 100%;
      .modal-filter__item-title {
        font-size: toRem(14);
        align-items: flex-start;
      }

      .modal-filter__filter-tools {
        margin-top: 0;
      }

      .p-product-btn {
        width: toRem(150);
        height: toRem(47);
        font-family: inherit;
        font-size: toRem(14);
        transition: all 120ms ease-in;
      }

      .modal-filter__main::v-deep .button__text {
        font-size: toRem(14);
      }

      .modal-filter__item-close::before {
        content: "\e801";
        @include font-icon__limoo();
        font-size: toRem(17);
        opacity: 1;
      }

      .modal-filter__line {
        margin-top: toRem(12);
      }

      .modal-filter__btn {
        padding-bottom: toRem(12);
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
</style>
