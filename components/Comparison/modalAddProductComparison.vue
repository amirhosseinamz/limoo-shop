<template>
  <modal
    class="d-rtl product--single__modal modal--comparison"
    size="1083px"
    :show.sync="show"
    :footer="false"
  >
    <div class="w-100  product__modal">
      <div class="w-100 product__modal-text">
        <div class="w-100 product__modal-top">
          <h3 class="product__modal-title">
            <!-- {{ getTextByTextKey("product_pic_text") }} -->
            افزودن محصول به لیست مقایسه
          </h3>
          <span @click="modalClose" class="product__modal-close"></span>
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
  </modal>
</template>

<script>
import "~/assets/styles/_modal_single_product.scss";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import productsModalComparison from "./productsModalComparison";

export default {
  props: {
    active: { type: [Boolean, Number], default: false },
    products: { type: [Object, Array], default: [] },
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

    modalClose() {
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/_search_box.scss";

.product__modal {
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  @include display-flex();
  padding-bottom: 38px;
}
.product__modal-close::after {
  content: "\e807";
  @include font-icon__limoo();
  font-size: 30px;
  color: $color-gray;
  cursor: pointer;
}
.product__modal-close {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.product__modal-text {
  @include display-flex();
  align-items: center;
  flex-wrap: wrap;
}
.product__modal-title {
  font-size: 18px;
  color: $black;
  font-weight: 400;
  flex-grow: 1;
  min-height: 27px;
}
.product__modal {
  padding-top: 24px;
}
.product__modal-line {
  margin-bottom: 24px;
  margin-top: 16px;
}
.product__modal-line {
  background: $gray-border;
  width: 100%;
  height: 1px;
  @include display-flex();
}
.product__modal-top {
  @include display-flex();
  align-items: flex-start;
}
.product__modal-item {
  @include display-flex();
  align-content: center;
  border: solid 1px $light-gray;
  border-radius: 10px;
}
.product__modal-container {
  width: 100%;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
}
.product--modal_pic-item {
  width: 514px;
  height: 514px;
  margin-right: auto;
  margin-left: auto;
  padding: 11px;
}
.carousel-cell {
  width: 87px;
  height: 87px;
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
  width: 546px;
  margin-bottom: 41px;
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

@media (max-width: 1366px) {
}

@media (max-width: 768px) {
}

@media (max-width: 460px) {
}
</style>
