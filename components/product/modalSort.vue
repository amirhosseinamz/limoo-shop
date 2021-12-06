<template>
  <base-modal
    class="modal-container d-rtl"
    modal-class="modal"
    @close-modal="modalClose"
  >
  <span  class="modal__close-line"></span>
    <div class="modal-sort__main">
      <div class="modal-sort__close-item w-100">
        <div class="w-100 modal-filter__item ">
          <slot name="title"></slot>
        </div>
        <div @click="modalClose" class="modal-filter__line"></div>
      </div>
      <slot name="content"></slot>
      <slot name="action"></slot>
    </div>
  </base-modal>
</template>

<script>
import sortBox from "../Category/sortBox";
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
          title: 'همه نظرات',
          value: 'new'
        },
        {
          id: 2,
          title: 'نظرات منفی',
          new: 'negative'
        },
        {
          id: 3,
          title: 'نظرات مثبت',
          new: 'positive'
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
    box-shadow: 0px 20px 24px rgba(17, 17, 17, 0.06)!important;
    border-top-left-radius: toRem(50)!important;
    border-top-right-radius: toRem(50)!important;
    .modal-sort__main {
      width: 100%;
      @include display-flex();
      flex-wrap: wrap;
      align-items: flex-start;

    }
    .modal-filter__item {
      width: 100%;
      @include display-flex();
      flex-wrap: wrap;
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


@include sm {
  .modal-container::v-deep {
    .modal {
      width: toRem(360);

      .backdrop {
        background-color: rgba(196, 196, 196, 0.8);
      }
      .modal-filter__item-title {
        font-size: toRem(14);
        padding-top:  toRem(27) ;
      }
      .modal-filter__filter-tools {
        margin-top: 0;
      }
      .modal-cancel {
        font-size: toRem(14);
        width: toRem(149);
        height: toRem(47);
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
        margin:toRem(16) toRem(24) 0 toRem(24)!important;
        width: 90%;
      }
      .modal-sort__content {
        margin-top:toRem(16)!important;
        margin-bottom: 0!important;;
      }
      .remove--margin {
        margin-top: toRem(23);
      }
      .modal-filter__btn {
        margin-top: toRem(50)!important;
        margin-bottom: toRem(35)!important;
        padding-bottom:0!important;
      }
      .p-product-btn {
        margin-left: 4%;
        width: toRem(149);
        height: toRem(47);
        color:$gray-2;
      }
      .modal-sort__close-item {
        padding-right: 0;
        padding-left: 0;
      }

    }
    .modal-sort__item{
      margin-top:0!important;
      margin-bottom:toRem(24)!important;
    }
    .modal-sort__item:last-child{
      margin-top:0!important;
      margin-bottom:0!important;
    }
  }
  .modal__close-line {
    display: flex;
    justify-content: center;
    margin-top: toRem(24);
    line-height: 0;
  }
  .modal__close-line::before {
    content: "\e81b";
    @include font-icon__limoo();
    font-size: toRem(28);
    color: $gray;
  }
  .title-icon {
    padding: toRem(27.75) toRem(25.75)  0 toRem(6.75);
    &::before {
      content: "\e83f";
      @include font-icon__limoo();
      font-size: toRem(20);
      color: $gray-2;
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
