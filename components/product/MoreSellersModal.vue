<template>
  <div class="more-sellers-modal" @mouseover="hover" @mouseout="unHover">
    <div class="header">
      <div class="title">
        فروشندگان دیگر این محصول
      </div>
      <span class="close-icon" @click.stop="closeModal"></span>
    </div>
    <div class="seller-item" v-for="item in sellersData">
      <div class="seller-item_introduction">
        <div class="seller-item_introduction_icon"></div>
        <div class="seller-item_introduction_info">
          <div class="seller-item_introduction_info__name">
            فروشنده:
            {{ item.name }}
          </div>
          <div class="seller-item_introduction_info__rate">
              <div class="stars-outer">
                <div class="stars-inner" :style="{ width: (item.rate * 100) / 5 + '%' }"
                ></div>
              </div>
              <span class="rate-counter"> 3.5 </span>
              <span class="rate-count">
                        {{ getTextByTextKey("commnets_star_from_text") }} 5
              </span>
          </div>
        </div>
      </div>
      <div class="seller-item_price">
        <div class="seller-item_price_discount">
          <div class="seller-item_price_discount__amount">
            {{ item.price }}
          </div>
          <div class="seller-item_price_discount__badge">
            30%
          </div>
        </div>
        <div class="seller-item_price_amount">
          {{ item.price }} تومان
        </div>
        <div class="seller-item_price_btn">
          <base-button class="seller-item_price_btn__buy">
            خرید
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource";

export default {
  name: "MoreSellersModal",
  computed: {
    sellersData() {
      return this.$store.getters["product/single/single/sellersData"];
    }
  },
  methods: {
    getTextByTextKey,
    closeModal() {
      this.$emit('close-modal');
    },
    hover() {
      this.$emit('modal-hover');
    },
    unHover() {
      this.$emit('modal-un-hover');
    }
  }

};
</script>

<style lang="scss" scoped>

  .more-sellers-modal {
    box-shadow: 0 0 toRem(10) toRem(3) $light-gray;
    height: auto;
    max-height: toRem(380);
    border-radius: toRem(10);
    padding-right: toRem(16);
    padding-left: toRem(24);
    background-color: $white;
    overflow-y: auto;
    z-index: 2001;
    overflow-x: hidden;
    min-width: 100%;
    width: auto;
    &::before {
      content: "";
      display: inline-block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 8px 10px 8px;
      border-color: transparent transparent $white transparent;
      position: absolute;
      left: toRem(22);
      top: toRem(-10);
    }
    .header {
      @extend .align-center;
      justify-content: space-between;
      height: toRem(61.3);
      border-bottom: toRem(2) solid $gray-5;
      position: relative;

      .title {
        font-size: toRem(14);
        color: $black-topic;
      }
      .close-icon {
        &::before {
          content: "\e808";
          @include font-icon__limoo();
          color: $gray-4;
          font-size: toRem(10);
        }
      }
    }
    .seller-item {
      @extend .d-flex;
      justify-content: space-between;
      padding: toRem(16) 0;
      border-bottom: toRem(2) solid $gray-6;
      &_introduction {
        @extend .d-flex;
        &_icon {
          width: toRem(46.28);
          height: toRem(46.28);
          border-radius: 50%;
          background-color: $gray-6;
          margin-left: toRem(8);
        }
        &_info {
          @extend .d-flex;
          flex-direction: column;
          &__name {
            font-size: toRem(14);
            color: $gray-2;
          }
          &__rate {
            .stars-outer {
              position: relative;
              display: inline-block;
              margin-left: toRem(8);
              &::before {
                content: "\e825 \e825 \e825 \e825 \e825";
                @include font-icon__limoo();
                font-weight: 400;
                font-size: toRem(16);
                color: $light-gray;
                letter-spacing: toRem(2);
              }
              .stars-inner {
                position: absolute;
                bottom: toRem(4.7);
                left: 0;
                white-space: nowrap;
                overflow: hidden;
                width: 0;
                @include display-flex();
                flex-direction: row-reverse;
                &::before {
                  content: "\e825 \e825 \e825 \e825 \e825";
                  @include font-icon__limoo();
                  font-weight: 400;
                  font-size: toRem(16);
                  color: $yellow;
                  letter-spacing: toRem(2);
                }
              }
            }
            .rate-count,
            .rate-counter {
              color: $gray-3;
              font-size: toRem(14);
            }
          }
        }
      }
      &_price {
        &_discount {
          @extend .align-center;
          margin-bottom: toRem(8);
          &__badge {
            @extend .centered;
            width: toRem(44);
            height: toRem(29);
            border-radius: toRem(15);
            background-color: $orange;
            margin-right: toRem(4);
            color: $gray-2;
            font-size: toRem(14);
          }
          &__amount {
            font-size: toRem(15);
            color: $gray-4;
            text-decoration: line-through;
          }
        }
        &_amount {
          font-size: toRem(16);
          color: $black-topic;
          margin-bottom: toRem(19);
          text-align: left;
        }
        &_btn {
          &__buy {
            width: toRem(130);
            height: toRem(47);
            font-family: inherit;
          }
        }
      }

    }
  }
</style>
