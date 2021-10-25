<template>
  <base-modal
    class="modal-container"
    mode="full-screen"
    modal-class="modal"
    @close-modal="closeModal"
  >
    <div class="header">
      <span class="header-title">
        فروشندگان این محصول (4)
      </span>
      <span class="header-close-icon" @click="closeModal"></span>
    </div>
    <div class="header-divider-line"></div>
    <div class="modal-body">
      <div
        class="sellers-mobile-view"
        v-for="seller in sellersData"
        :key="seller.id"
      >
        <div class="properties">
          <div class="seller-name">
            <span class="icon"></span>
            فروشنده:
            {{ seller.name }}
          </div>
          <div class="seller-sending-info">
            <span class="icon"></span>
            {{ seller.sendingInfo }}
          </div>
          <div class="seller-warranty">
            <span class="icon"></span>
            {{ seller.warranty }}
          </div>
          <div class="seller-remaining">
            <span class="icon"></span>
            فقط
            {{ seller.remaining }}
            عدد از این محصول موجود است
          </div>
        </div>
        <div class="divider-line"></div>
        <div class="price">
          <div class="amount">
            <div class="discount">
              {{ seller.discountedPrice }}
            </div>
            <div class="original">
              {{ seller.price }}
              تومان
            </div>
          </div>
          <div class="add-to-cart">
            <base-button class="add-to-cart-btn" no-box-shadow>
              افزودن به سبد خرید
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </base-modal>
</template>

<script>
export default {
  name: "ModalSeller",
  data() {
    return {
      showMessage: false
    };
  },
  computed: {
    sellersData() {
      return this.$store.getters["product/single/single/sellersData"];
    }
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-container::v-deep {
  .modal {
    background-color: $white;
    overflow-y: scroll;
    @include xs {
      padding: toRem(24) toRem(10);
    }

    .header {
      @extend .align-center;
      justify-content: space-between;
      &-title {

      }
      &-close-icon {
        &::before {
          content: "\e801";
          color: $gray-3;
          font-size: toRem(20);
          @include font-icon__limoo();
          cursor: pointer;
        }
      }
    }
    .header-divider-line {
      position: relative;
      margin-bottom: toRem(40);
      &::before {
        content: " ";
        position: absolute;
        height: toRem(1);
        width: 120%;
        right: toRem(-25);
        background-color: $gray-6;
        bottom: toRem(-16);
      }
    }
    .modal-body {
      padding-bottom: 1rem;
      .sellers-mobile-view {
        width: 100%;
        border: toRem(1) solid $gray-5;
        border-radius: toRem(10);
        margin-bottom: toRem(16);
        &:last-child {
          margin-bottom: toRem(15);
        }

        .properties {
          padding: toRem(11);
          @include xxs {
            padding: toRem(11) toRem(5);
          }
          .seller {
            &-name {
              @extend .align-center;
              font-size: toRem(14);
              color: $black-topic;
              margin-bottom: toRem(16);
              .icon {
                width: toRem(38);
                height: toRem(38);
                border-radius: 50%;
                background-color: $gray-6;
                margin-left: toRem(9);
              }
            }
            &-sending-info {
              @extend .align-center;
              font-size: toRem(13);
              color: $gray-2;
              padding-right: toRem(8);
              margin-bottom: toRem(13);
              .icon {
                &::before {
                  content: "\e878";
                  @include font-icon__limoo();
                  color: $gray-2;
                  font-size: toRem(15);
                  margin-left: toRem(9);
                }
              }
            }
            &-warranty {
              @extend .align-center;
              font-size: toRem(13);
              color: $gray-2;
              padding-right: toRem(8);
              margin-bottom: toRem(13);
              .icon {
                &::before {
                  content: "\e813";
                  @include font-icon__limoo();
                  color: $gray-2;
                  font-size: toRem(20);
                  margin-left: toRem(9);
                }
              }
            }
            &-remaining {
              @extend .align-center;
              font-size: toRem(13);
              color: $gray-2;
              padding-right: toRem(6);
              .icon {
                &::before {
                  content: "\e828";
                  @include font-icon__limoo();
                  color: $gray-2;
                  font-size: toRem(17);
                  margin-left: toRem(9);
                }
              }
            }
          }
        }
        .divider-line {
          width: 100%;
          height: toRem(1);
          background-color: $gray-6;
          margin-top: toRem(4);
          margin-bottom: toRem(16);
        }
        .price {
          @extend .align-center;
          justify-content: space-between;
          padding: toRem(16);
          @include xxs {
            padding: toRem(16) toRem(12);
          }
          .amount {
            @extend .d-flex;
            flex-direction: column;
            .discount {
              font-size: toRem(13);
              color: $gray-4;
              text-decoration: line-through;
              margin-bottom: toRem(4);
              @include xxs {
                font-size: toRem(12);
              }
            }
            .original {
              font-size: toRem(14);
              color: $black-topic;
              @include xxs {
                font-size: toRem(13);
              }
            }
          }
          .add-to-cart {
            &-btn {
              width: toRem(143);
              height: toRem(45);
              font-size: toRem(13);
              @include xxs {
                width: toRem(120);
                font-size: toRem(12);
              }
            }
          }
        }
      }
    }
  }
}
</style>
