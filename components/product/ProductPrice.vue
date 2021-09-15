<template>
  <div class="product-price-container">
    <div class="has-discount" v-if="hasDiscount">
      <div class="discount">
        <percent-badge>
          30%
        </percent-badge>
      </div>
      <div class="price">
        <span class="price-discounted">
          123,000,000
        </span>
        <span class="price-last">
          256,000 تومان
        </span>
      </div>
    </div>
    <div class="has-not-discount" v-else>
      256,000 تومان
    </div>
    <base-button class="add-to-cart-btn" no-box-shadow>
      افزودن به سبد خرید
    </base-button>
  </div>
</template>

<script>
import PercentBadge from "./PercentBadge";
export default {
  name: "ProductPrice",
  components: { PercentBadge },
  props: {
    hasDiscount: {
      type: Boolean,
      require: false,
      default: true,
    }
  }
};
</script>

<style lang="scss" scoped>
  .product-price-container {
    .has-discount {
      @extend .d-flex;
      margin-bottom: toRem(24);
      @include xs {
        margin-bottom: 0;
      }
      .discount {
        margin-left: toRem(16);
      }
      .price {
        @extend .d-flex;
        flex-direction: column;
        //justify-content: center;
        &-discounted {
          margin-bottom: toRem(8);
          font-size: toRem(16);
          color: $gray-4;
          text-decoration: line-through;
          @include xxs {
            font-size: toRem(15);
          }
        }
        &-last {
          font-size: toRem(18);
          color: $color-price;
          @include xxs {
            font-size: toRem(17);
          }
        }
      }
    }
    .has-not-discount {
      @extend .d-flex;
      margin-bottom: toRem(24);
      font-size: toRem(20);
      color: $color-price;
      @include xs {
        margin-bottom: 0;
      }
      @include xxs {
        font-size: toRem(19);
      }
    }
    .add-to-cart-btn {
      width: 89%;
      height: toRem(57);
      font-family: inherit;
      @include md {
        height: toRem(52);
        font-size: toRem(14);
      }
      @include xs {
        display: none;
      }
    }
  }
</style>
