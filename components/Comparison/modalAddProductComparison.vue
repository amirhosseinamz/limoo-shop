<template>
  <base-modal
    class="modal-container"
    :mode="modalMode"
    modal-class="modal"
    @close-modal="closeModal"
  >
    <div class="w-100  product__modal">
      <div class="w-100 product__modal-text">
        <div class="w-100 product__modal-top">
          <h3 class="product__modal-title">
            <!-- {{ getTextByTextKey("product_pic_text") }} -->
            افزودن محصول به لیست مقایسه
          </h3>
          <base-button
            @button-clicked="closeModal"
            classes="product__modal-close"
            base-color="white"
            mode="close"></base-button>

        </div>
        <span class="product__modal-line"></span>
      </div>

      <div class="w-100 product__modal-container">
        <div class="search-section d-ltr">
          <div class="search-section__items">
            <input
              class="search-section__input"
              type="text"
              dir="rtl"
              :placeholder="getTextByTextKey('header_find_product')"
            />
            <button class="search-section__btn"></button>
          </div>

          <div class="w-100 product_modal-content">
            <products-modal-comparison
              :products="products"
            ></products-modal-comparison>
          </div>
        </div>
      </div>
    </div>
  </base-modal>
</template>

<script>
import "~/assets/styles/_modal_single_product.scss";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import productsModalComparison from "./productsModalComparison";

export default {
  props: {
    products: { type: [Object, Array], default: [] },
    modalMode: { type: String, require: true }
  },

  components: {
    productsModalComparison,
  },

  data() {
    return {
      ops: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "percent",
          detectResize: true,
          /** Enable locking to the main axis if user moves only slightly on one of them at start */
          locking: true,
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: true,
          scrollingY: true,
          speed: 300,
          easing: undefined,
          verticalNativeBarPos: "right",
        },
        rail: {
          background: "#01a99a",
          opacity: 0,
          size: "6px",
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: "2px",
          keepShow: false,
        },
        bar: {},
      },
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
    active(showModal) {
      if (showModal) {
      }
    },
  },

  mounted() {},

  methods: {
    getTextByTextKey,

    closeModal() {
      this.$emit('close-modal');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container::v-deep {
  .modal {
    width: 95%;
    max-width: toRem(982);
    height: toRem(560);
    padding: toRem(24);

    .search-section {
      &__items {
        height: 49px;
        line-height: 28px;
        border: 1px solid $input-border;
        border-radius: 10px;
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        width: 492px;
      }
      &__input {
        @extend .sass-input__default;
        font-family: inherit;
        font-size: 14px;
        font-weight: 300;
        flex-grow: 2;
      }

      &__btn {
        @extend .sass-input__default;
        margin: 14px 16px 15px 4px;
      }
      &__btn::before {
        @include font-icon__limoo();
        font-size: 17px;
        content: "\e869";
        cursor: pointer;
        color: $input-border;
        vertical-align: middle;
      }
    }

    .search-section__input::-webkit-input-placeholder {
      color: $gray;
    }
    .search-section__input:-ms-input-placeholder {
      color: $gray;
    }
    .search-section__input::placeholder {
      color: $gray;
    }
    .product__modal {
      width: 100%;
      flex-wrap: wrap;
      align-items: flex-start;
      @include display-flex();
      &-title {
        font-size: 18px;
        color: $black;
        font-weight: 400;
        flex-grow: 1;
        min-height: toRem(27);
        @include xs {
          font-size: toRem(16);
        }
        @include xxs {
          font-size: toRem(14);
        }
      }
      .product__modal-close::before {
        font-size: 30px;
        opacity: 0.5;
        content: "\e807";
        @include xs {
          content: "\e801";
          font-size: toRem(18);
          color: $gray-3;
          opacity: 1;
        }
      }
      &-text {
        @include display-flex();
        align-items: center;
        flex-wrap: wrap;
      }
      &-line {
        background: $gray-border;
        width: 100%;
        height: 1px;
        @include display-flex();
        margin-bottom: toRem(24);
        margin-top: toRem(16);
      }
      &-top {
        @include display-flex();
        align-items: flex-start;
      }
      &-item {
        @include display-flex();
        align-content: center;
        border: solid 1px $light-gray;
        border-radius: 10px;
      }
      &-container {
        width: 100%;
      }
      &_pic-item {
        width: 514px;
        height: 514px;
        margin-right: auto;
        margin-left: auto;
        padding: 11px;
      }
    }

    .carousel-cell {
      border: solid 1px $light-gray;
      margin-left: 7px;
      border-radius: 10px;
      cursor: pointer;
    }
    .carousel-pic {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    .product_modal-main {
      padding-top: 24px;
    }
    .active {
      border-color: $black-topic;
    }
    .d-ltr {
      direction: ltr;
    }
    .search-section__items {
      width: toRem(546);
      margin-bottom: toRem(40);
      @include xs {
        margin-bottom: toRem(90);
      }
    }
    .search-section__btn {
      margin: 14px 16px 15px 12px;
    }
    .search-section {
      flex-wrap: wrap;
      @include display-flex();
    }
    .test {
      height: 100px;
      width: 100%;
      display: flex;
    }
  }
}

</style>
