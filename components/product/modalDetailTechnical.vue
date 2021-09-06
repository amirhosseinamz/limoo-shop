<template>
  <modal
    id="modal--detail"
    class="d-rtl product--single__modal"
    size="1083px"
    :show.sync="show"
    :footer="false"
  >
    <div class="w-100  product__modal">
      <div class="w-100 product__modal-text">
        <div class="w-100 product__modal-top">
          <h3 class="product__modal-title">
            {{ getTextByTextKey("product_technical_specifications") }}
          </h3>
          <!-- <span class="product__modal-close"></span> -->
          <span @click="modalClose" class="product__modal-arrow"></span>

        </div>
        <span class="product__modal-line"></span>
      </div>

      <div class="w-100 product__modal-container">
        <div class="tabs__content w-100">
          <div class="w-100">
            <div
              v-for="(data, indexParent) in productData"
              :key="indexParent"
              class="tabs__content-data"
            >
              <h3 class="tabs__content-title">{{ data.label }}</h3>

              <div class="tabs__content-items">
                <div
                  v-for="childContent in data.data"
                  :key="childContent.id"
                  class="tabs__content-item"
                >
                  <div class="tab__content-wrapper w-100">
                    <div class="tabs__content-right">
                      <h3 class="tabs__content-text">
                        {{ childContent.Label }}
                      </h3>
                      <span class="tabs__content-line"></span>
                    </div>
                    <div class="tabs__content-left">
                      <h3 class="tabs__content-text">
                        {{ childContent.AttributeValue }}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import "~/assets/styles/_modal_single_product.scss";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    active: { type: [Boolean, Number], default: false },
    productData: { type: [Object, Array], default: [] },
  },

  components: {},

  data() {
    return {};
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
    show(status) {
      this.$store.commit("singleProduct/showHidenBodyScroll", status);
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
.product__modal {
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  @include display-flex();
}
.product__modal-close::after {
  @include display-flex();
  content: "\e801";
  @include font-icon__limoo();
  font-size: toRem(12);
}
.product__modal-close {
  width: toRem(30);
  height: toRem(30);
  cursor: pointer;
}
.product__modal-text {
  @include display-flex();
  align-items: center;
  flex-wrap: wrap;
}
.product__modal-title {
  font-size: toRem(14);
  font-weight: 400;
  flex-grow: 1;
  min-height: toRem(18);
  color: $black-topic;
}
.product__modal {
  padding-top: toRem(15);
}
.product__modal-line {
  margin-bottom: 15px;
  margin-top: 15px;
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
  padding-right: 16px;
  padding-left: 16px;
}
.product__modal-item {
  @include display-flex();
  align-content: center;
  border: solid 1px $light-gray;
  border-radius: 10px;
}
.product__modal-container {
  padding-right: 13px;
  padding-left: 13px;
  width: 100%;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
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
.product__modal-arrow::after {
  content: "\e801";
  @include font-icon__limoo();
  font-size: 17px;
  cursor: pointer;
  color: $gray;
}
.tabs__content {
  visibility: visible;
  position: static;
  padding-top: 0;
}
.tabs__content-data {
  padding-right: 0;
  padding-left: 0;
}
.tabs__content-items {
  border: none;
}

@include sm {
  .tabs__content-items {
    border: none;
    padding-right: 0;
    padding-left: 0;
  }
  .tabs__content-item:nth-child(n + 4) {
    @include display-flex();
  }
  .tabs__content-data:nth-child(n + 2) {
    @include display-flex();
  }
  .tabs__content-data {
    padding-top: 58px;
  }
  .tabs__content-title {
    min-height: 27px;
    height: auto;
    margin-right: 10px;
  }
}
</style>
