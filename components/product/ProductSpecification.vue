<template>
  <div class="specification-container">
    <div class="price">
      <product-price></product-price>
    </div>
    <div class="sell-specification">
      <div class="seller">
        <span class="seller-icon"></span>
        فروشنده: اپلنیک
      </div>
      <div class="sending-info">
        <span class="sending-info-icon"></span>
        آماده ارسال
      </div>
      <div class="remaining">
        <span class="remaining-icon"></span>
        فقط سه عدد از این محصول موجود است
      </div>
    </div>
  </div>
</template>

<script>
import ProductPrice from "./ProductPrice";
export default {
  name: "ProductSpecification",
  components: { ProductPrice },
};
</script>

<style lang="scss" scoped>
  .specification-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include xs {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
    }

    .price {
      grid-column: 1/2;
      min-width: toRem(260);

      @include xs {
        grid-column: 1/2;
        grid-row: 2/3;
        padding: toRem(16) 0;
        position: relative;
        &::before {
          content: " ";
          position: absolute;
          bottom: 0;
          width: 104.7%;
          height: toRem(2);
          background-color: $gray-6;
          right: toRem(-11);
          opacity: 0.5;
        }
      }
    }
    .sell-specification {
      grid-column: 2/3;
      @extend .d-flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;

      &::before {
        content: " ";
        position: absolute;
        width: toRem(2);
        height: 100%;
        bottom: 0;
        background-color: $gray-6;
        right: toRem(-16);
        opacity: 0.5;
      }

      .seller,
      .sending-info,
      .remaining {
        @extend .align-center;
        margin-bottom: toRem(24);
        @include xl {
          font-size: toRem(15);
        }
        @include lg {
          font-size: toRem(14);
        }
      }
      .seller {
        color: $gray-2;
        &-icon {
          &::before {
            content: "\e81e";
            font-size: toRem(18);
            @include font-icon__limoo();
            color: $gray-5;
            margin-left: toRem(20);
          }
        }
      }
      .sending-info {
        color: $green__answer;
        &-icon {
          &::before {
            content: "\e878";
            font-size: toRem(18);
            @include font-icon__limoo();
            color: $green__answer;
            margin-left: toRem(20);
          }
        }
      }
      .remaining {
        color: $gray-2;
        margin: 0;
        &-icon {
          &::before {
            content: "\e828";
            font-size: toRem(18);
            @include font-icon__limoo();
            color: $gray-3;
            margin-left: toRem(20);
          }
        }
      }
      @include xs {
        grid-column: 1/2;
        grid-row: 1/2;
        padding: toRem(16) 0;
        position: relative;
        &::before {
          content: " ";
          position: absolute;
          top: 0;
          width: 104.7%;
          height: toRem(2);
          background-color: $gray-6;
          right: toRem(-11);
          opacity: 0.5;
        }
        &::after {
          content: " ";
          position: absolute;
          bottom: 0;
          width: 104.7%;
          height: toRem(2);
          background-color: $gray-6;
          right: toRem(-11);
          opacity: 0.5;
        }

        .seller {
          display: none;
        }
        .sending-info {
          color: $color-price;
          margin-bottom: toRem(8);
        }
        .remaining {
          color: $gray-3;
          font-size: toRem(13);
          &-icon {
            &::before {
              display: none;
            }
          }
        }
      }
    }
  }
</style>
