<template>
  <div class="seller-box">
    <div class="header">
      <div class="seller-name">
        <div class="seller-icon"></div>
        <div class="seller-name-text">
          فروشنده: اپلنیک
        </div>
      </div>
      <div class="backdrop" v-if="showMoreSellersModal" @click="closeMoreSellersModal"></div>
      <div class="more-sellers" @click="openMoreSellersModal">
        <div class="title">
          فروشندگان دیگر
        </div>
        <span class="icon"></span>
        <more-sellers-modal class="more-sellers_modal" v-if="showMoreSellersModal" @close-modal="closeMoreSellersModal"></more-sellers-modal>
      </div>
    </div>
    <div class="sell-specification">
      <div class="sending-info">
        <span class="sending-info-icon"></span>
        آماده ارسال
      </div>
      <div class="remaining">
        <span class="remaining-icon"></span>
        فقط سه عدد از این محصول موجود است
      </div>
      <div class="warranty">
        <span class="warranty-icon"></span>
        گارانتی: 18 ماه گارانتی شرکت مجاز مشترک
      </div>
      <chosen-seller-badge class="chosen"></chosen-seller-badge>
      <product-price></product-price>
      <product-actions class="product-actions tablet" :share-modal-mode="shareModalMode" v-if="shareModalMode === 'form'"></product-actions>
    </div>
  </div>
</template>

<script>
import ChosenSellerBadge from "./ChosenSellerBadge";
import ProductPrice from "./ProductPrice";
import ProductActions from "./ProductActions";
import MoreSellersModal from "./MoreSellersModal";
export default {
  name: "SellerBox",
  components: { MoreSellersModal, ProductActions, ProductPrice, ChosenSellerBadge },
  props: {
    shareModalMode: {
      type: String,
      require: true,
    }
  },
  data() {
    return {
      showMoreSellersModal: false,
    };
  },
  methods: {
    openMoreSellersModal() {
      this.showMoreSellersModal = true;
    },
    closeMoreSellersModal() {
      this.showMoreSellersModal = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.backdrop {
  @extend .modal-backdrop;
  background-color: transparent;
}
.seller-box {
  width: 100%;
  padding: toRem(5) toRem(16) toRem(24) toRem(16);
  border: toRem(1) solid $gray-5;
  border-radius: toRem(10);
  position: relative;
  @include lg {
    padding-right: toRem(10);
  }
  @include md {
    border: none;
    padding-right: toRem(24);
  }
  @include sm {
    padding-right: toRem(16);
  }
  .header {
    @extend .align-center;
    height: toRem(58);
    border-bottom: toRem(2) solid $gray-6-light;
    justify-content: space-between;
    .seller-name {
      @extend .align-center;
      .seller-icon {
        width: toRem(34);
        height: toRem(34);
        @extend .align-center;
        background-color: $gray-6;
        margin-left: toRem(8);
        border-radius: 50%;
        @include xl {
          width: toRem(30);
          height: toRem(30);
        }
      }
      &-text {
        font-size: toRem(16);
        color: $black-topic;
        @include xl {
          font-size: toRem(14);
        }
      }
    }
    .more-sellers {
      @extend .align-center;
      cursor: pointer;
      .title {
        font-size: toRem(14);
        color: $color-blue;
        margin-left: toRem(5);
        @include lg {
          font-size: toRem(13);
        }
      }
      .icon {
        &::before {
          content: "\e841";
          @include font-icon__limoo();
          font-size: toRem(8);
          color: $color-blue;
          @include lg {
            font-size: toRem(6);
          }
        }
      }
      &_modal {
        position: absolute;
        width: auto;
        top: toRem(90);
        left: 0;
      }

    }
  }
  .sell-specification {
    @extend .d-flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    padding-top: toRem(24);

    .sending-info,
    .remaining,
    .warranty,
    .chosen {
      @extend .align-center;
      font-size: toRem(14);
      margin-bottom: toRem(24);
    }
    .sending-info {
      color: $green__answer;
      &-icon {
        &::before {
          content: "\e878";
          font-size: toRem(16);
          @include font-icon__limoo();
          color: $green__answer;
          margin-left: toRem(20);
        }
      }
    }
    .remaining {
      color: $gray-2;
      &-icon {
        &::before {
          content: "\e828";
          font-size: toRem(16);
          @include font-icon__limoo();
          color: $gray-3;
          margin-left: toRem(20);
        }
      }
    }
    .warranty {
      color: $gray-2;
      &-icon {
        &::before {
          content: "\e813";
          font-size: toRem(18);
          @include font-icon__limoo();
          color: $gray-3;
          margin-left: toRem(20);
        }
      }
    }
  }
  .product-actions {
    &.tablet {
      display: none;
      @include md {
        display: flex;
      }
      @include xs {
        display: none;
      }
    }
  }
}
</style>
