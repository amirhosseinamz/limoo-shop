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
      <dropdown-accordion
        class="sellers-dropdown"
        name="seller"
        v-for="seller in sellersData"
        :key="seller.id"
        :each-value="seller.id.toString()"
        :selected="sellersData[0].id.toString()"
      >
        <template #title>
          فروشنده:
          {{ seller.name }}
        </template>
        <template #default>
          <div class="dropdown-content">
            <div class="dropdown-content-items">
              {{ seller.sendingInfo }}
            </div>
            <div class="dropdown-content-items">
              قیمت:
              {{ seller.price }}
            </div>
            <div class="dropdown-content-items">
              {{ seller.warranty }}
            </div>
          </div>
        </template>
      </dropdown-accordion>
    </div>
  </div>
</template>

<script>
import DropdownAccordion from "./DropdownAccordion";
export default {
  name: "ProductSeller",
  components: { DropdownAccordion },
  computed: {
    sellersData() {
      return this.$store.getters["product/single/single/sellersData"];
    }
  }
};
</script>

<style lang="scss" scoped>
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
    .sellers-dropdown {
      margin-bottom: toRem(8);
      .dropdown-content {
        @extend .d-flex;
        flex-direction: column;
        @include xs {
          padding-right: toRem(25);
        }
        &-items {
          font-size: toRem(15);
          color: $gray-3;
          margin: toRem(8) 0;
          @include xs {
            font-size: toRem(13);
          }
        }
      }
    }
  }
}
</style>
