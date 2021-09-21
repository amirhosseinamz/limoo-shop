<template>
  <div class="product-seller-container">
    <div class="desktop-display">
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
    <div class="mobile-display">
      <div class="seller">
        <div class="seller-name">
          <span class="icon"></span>
          فروشنده: اپل ان ای سی
        </div>
        <div class="seller-other-sellers" @click="showSellerModal">
          3 فروشنده دیگر
          <span class="icon"></span>
        </div>
      </div>
    </div>
    <transition name="backdrop-form">
      <div class="backdrop" v-if="sellerModalIsOpen" @click="closeSellerModal"></div>
    </transition>
    <transition name="full-screen">
      <modal-seller
        v-if="sellerModalIsOpen"
        @close-modal="closeSellerModal"
      ></modal-seller>
    </transition>
  </div>
</template>

<script>
import DropdownAccordion from "./DropdownAccordion";
import ModalSeller from "./ModalSeller";
export default {
  name: "ProductSeller",
  components: { ModalSeller, DropdownAccordion },
  data() {
    return {
      sellerModalIsOpen: false,
    }
  },
  computed: {
    sellersData() {
      return this.$store.getters["product/single/single/sellersData"];
    }
  },
  methods: {
    closeSellerModal() {
      this.sellerModalIsOpen = false;
    },
    showSellerModal() {
      this.sellerModalIsOpen = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@include form-modal-animation();
@include backdrop-form-modal-animation();

.backdrop {
  @extend .modal-backdrop;
  background-color: $overlay--profile;
}
.product-seller-container {
  width: 100%;
  padding: toRem(24);
  @include xs {
    padding: 0;
  }

  .desktop-display {
    @include sm {
      display: none;
    }
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
  .mobile-display {
    display: none;
    @include sm {
      display: block;
    }
    @include xs {
      width: 100%;
      margin-top: toRem(16);
    }
    .seller {
      @extend .d-flex;
      flex-direction: column;
      width: 100%;
      border: toRem(1) solid $gray-5;
      border-radius: toRem(10);
      padding: toRem(12) toRem(8) toRem(16) toRem(21);

      &-name {
        @extend .align-center;
        font-size: toRem(15);
        color: $black-topic;
        margin-bottom: toRem(15);
        @include xs {
          font-size: toRem(14);
        }
        .icon {
          width: toRem(29);
          height: toRem(29);
          border-radius: 50%;
          background-color: $gray-6;
          margin-left: toRem(8);
        }
      }
      &-other-sellers {
        @extend .align-center;
        font-size: toRem(14);
        color: $code-request;
        margin-right: auto;
        @include xs {
          font-size: toRem(13);
        }
        .icon {
          &::before {
            content: "\e801";
            @include font-icon__limoo();
            color: $code-request;
            font-size: toRem(10);
            margin-right: toRem(9);
          }
        }
      }
    }
  }
}
</style>
