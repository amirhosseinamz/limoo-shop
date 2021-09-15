<template>
  <div class="product-seller-container">
    <div class="title">
      فروشنده این محصول
    </div>
    <div class="sellers">
      <div class="seller w-100" v-for="seller in sellersData" :key="seller.id">
        <div class="seller-name">
          <span class="icon"></span>
          {{ seller.name }}
        </div>
        <div class="seller-sending-info">
          <span class="icon"></span>
          {{ seller.sendingInfo }}
        </div>
        <div class="seller-warranty">
          {{ seller.warranty }}
        </div>
        <div class="seller-price">
          {{ seller.price }}

          تومان
        </div>
        <div class="seller-add-to-cart">
          افزودن به سبد خرید
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSeller",
  data() {
    return {
      sellersData: [
        {
          id: 1,
          name: "اپل ان ای سی",
          sendingInfo: "درحال ارسال",
          warranty: "گارانتی 18 ماهه",
          price: "478,000",
        },
        {
          id: 2,
          name: "اپل ان ای سی",
          sendingInfo: "درحال ارسال",
          warranty: "گارانتی 9 ماهه",
          price: "359,000",
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
  .product-seller-container {
    width: 100%;
    padding: toRem(24);
    .title {
      font-size: toRem(18);
      color: $black-topic;
      margin-bottom: toRem(40);
    }
    .sellers {
      .seller {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: auto;
        padding: toRem(30) 0;
        border-bottom: toRem(2) solid $gray-6;
        font-size: toRem(18);
        color: $black-topic;
        @include xl {
          font-size: toRem(16);
        }
        @include md {
          font-size: toRem(14);
        }
        &:last-child {
          border: none;
        }
        &-name {
          grid-column: 1/2;
          @extend .align-center;
          .icon {
            display: inline-block;
            width: toRem(45);
            height: toRem(45);
            border-radius: 50%;
            background-color: $gray-6;
            margin-left: toRem(16);
            @include md {
              width: toRem(30);
              height: toRem(30);
            }
          }
        }
        &-sending-info {
          grid-column: 2/3;
          @extend .centered;
          .icon {
            &::before {
              content: "\e878";
              @include font-icon__limoo();
              color: $gray-3;
              font-size: toRem(15);
              margin-left: toRem(5);
            }
          }
        }
        &-warranty {
          grid-column: 3/4;
          @extend .centered;
        }
        &-price {
          grid-column: 4/5;
          @extend .centered;
        }
        &-add-to-cart {
          grid-column: 5/6;
          @extend .centered;
          color: $color-blue;
        }
      }
    }
  }
</style>
