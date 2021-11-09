<template>
  <div>
    <div class="user-inprogress__empty-container" v-show="userInprogress === 0">
      <img src="/empty-pages/empty-inprogress.svg" :alt="textError" />
      <span class="user-inprogress__empty d-rtl">{{ textError }} </span>
    </div>
    <div class="order-content-box desktop d-rtl" v-for="data in userOrderData" :key="data.id">
      <div class="header">
        <div class="order-logs">
          <div class="order-number">
            <span class="icon"></span>
            <div class="txt">
              سفارش
            </div>
            {{ data.orderCode }}
          </div>
          <div class="order-price">
            <span class="icon"></span>
            {{ data.orderPrice }}
            تومان
          </div>
          <div class="order-date">
            <span class="icon"></span>
            {{ data.orderDate }}
          </div>
          <div class="order-situation">
            <span class="icon"></span>
            {{ data.orderSituation }}
          </div>
          <div class="order-view-btn">
            <div class="txt" @click="goToCompleteList">
              مشاهده سفارش
            </div>
            <span class="icon" @click="goToCompleteList"></span>
          </div>
        </div>
      </div>
      <div class="items">
        <nuxt-link :to="'/product/'+item.id" class="item" v-for="item in sliceUserOrderData(data.orders, 5)" :key="item.id">
          <div class="image">
            <img :src="item.img" :alt="item.title">
          </div>
          <div class="info">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="price">
              {{ item.price }}
              تومان
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="complete-list" v-if="data.orders.length > 5" @click="goToCompleteList">
        لیست کامل ({{ data.orders.length }} عدد)
        <span class="icon"></span>
      </div>
    </div>
    <div class="order-content-box mobile d-rtl" v-for="data in userOrderData" :key="data.id">
      <div class="order-date">
        <div class="title">
          تاریخ سفارش:
        </div>
        {{ data.orderDateSpell }}
      </div>
      <div class="order-number">
        <div class="title">
          کد سفارش:
        </div>
        {{ data.orderCode }}
      </div>
      <div class="order-info">
        <div class="order-images">
          <div class="image" v-for="item in sliceUserOrderData(data.orders, 3)">
            <img :src="item.img" :alt="item.title">
          </div>
          <div class="more-image" v-if="data.orders.length > 3">
            <span class="icon"></span>
          </div>
        </div>
        <div class="view-detail" @click="goToCompleteList">
          <div class="txt">
            مشاهده جزئیات
          </div>
          <span class="icon"></span>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  name: "TheUserOrder",
  components: {},
  props: {
    userOrderData: { type: [Object, Array], default: {} },
    textError: { type: String, default: "" },
    currentUrl: { type: String, default: "" },
  },
  data() {
    return {
      // paidOrderData:0
      userInprogress: -1,
    };
  },
  created() {
    this.userInprogress = Object.values(this.userOrderData).length;
  },

  methods: {
    getTextByTextKey,
    sliceUserOrderData(data, length) {
      return data.slice(0, length);
    },
    goToCompleteList() {
      this.$router.push('/profile/my-orders/delivered/complete-list');
    }
  },
};
</script>
<style lang="scss" scoped>
.user-inprogress__empty-container {
  @include display-flex();
  flex-direction: column;
  justify-content: flex-start;
  height: toRem(374);
  background: $white;
  margin-top: toRem(24);
  border-radius: toRem(10);
  box-shadow: 0 toRem(8) toRem(16) $box__shadow;
}

.user-inprogress__empty-container img {
  margin-top: toRem(38);
  opacity: 1;
}

.user-inprogress__empty {
  font-size: toRem(18);
  line-height: 140.62%;
  text-align: center;
  color: $gray;
  margin-top: toRem(38);
}

.order-content-box {
  &.desktop {
    margin-top: toRem(23);
    width: 100%;
    background-color: $white;
    box-shadow: 0 toRem(8) toRem(16) 0 rgba(17, 17, 17, 0.03);
    border-radius: toRem(10);

    @include xs {
      display: none;
    }

    .header {
      @extend .align-center;
      width: 100%;
      height: toRem(89);
      border-bottom: toRem(1) solid $gray-6;

      .order-logs {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
        grid-gap: toRem(12);
        padding-right: toRem(24);
        padding-left: toRem(30);
        width: 100%;
        height: 100%;

        @include xl {
          padding-right: toRem(16);
          padding-left: toRem(16);
        }

        .order {
          &-number,
          &-price,
          &-date,
          &-situation {
            height: 100%;
            @extend .align-center;
            color: $black-topic;
            font-size: toRem(16);
            white-space: nowrap;

            @include xl {
              font-size: toRem(14);
            }


            .icon {
              margin-left: toRem(8);

              &::before {
                @include font-icon__limoo();
                color: $gray-3;
              }
            }
          }

          &-number {
            grid-column: 1/2;


            .txt {
              height: 100%;
              @extend .align-center;
              @include sm {
                display: none;
              }
            }

            .icon {
              &::before {
                content: "\e896";
                font-size: toRem(16);
                @include xl {
                  font-size: toRem(14);
                }
              }
            }
          }

          &-price {
            grid-column: 2/3;

            .icon {
              &::before {
                content: "\e897";
                font-size: toRem(16);
                @include xl {
                  font-size: toRem(14);
                }
              }
            }
          }

          &-date {
            grid-column: 3/4;
            @include sm {
              display: none;
            }
            .icon {
              &::before {
                content: "\e804";
                font-size: toRem(16);
                @include xl {
                  font-size: toRem(14);
                }
              }
            }
          }

          &-situation {
            grid-column: 4/5;
            @include sm {
              grid-column: 3/4;
            }

            .icon {
              &::before {
                content: "\e898";
                font-size: toRem(16);
                @include xl {
                  font-size: toRem(14);
                }
              }
            }
          }

          &-view-btn {
            grid-column: 5/7;
            font-size: toRem(16);
            color: $gray-3;
            @extend .align-center;
            height: 100%;
            justify-content: flex-end;
            white-space: nowrap;

            .txt {
              height: 100%;
              cursor: pointer;
              @extend .align-center;
            }

            .icon {
              margin-right: toRem(10);
              padding-top: toRem(2);
              cursor: pointer;

              &::before {
                content: "\e801";
                @include font-icon__limoo();
                color: $gray-3;
                font-size: toRem(16);
                @include xl {
                  font-size: toRem(14);
                }
              }
            }

            @include xl {
              font-size: toRem(14);
            }
          }
        }
      }
    }

    .items {
      padding: 0 toRem(24) 0 toRem(31);

      .item {
        @extend .d-flex;
        align-items: flex-start;
        border-bottom: toRem(1) solid $gray-6;
        padding: toRem(24);
        cursor: pointer;

        &:last-child {
          border: none;
        }

        .image {
          margin-left: toRem(16);

          img {
            max-height: toRem(90);
            max-width: toRem(90);
          }
        }

        .info {
          @extend .d-flex;
          flex-direction: column;
          align-items: flex-start;

          .title {
            color: $black;
            font-size: toRem(16);
            padding-top: toRem(15);
            text-align: right;
          }

          .price {
            color: $gray-3;
            font-size: toRem(16);
            margin-top: toRem(16);
            text-align: right;
          }
        }
      }
    }

    .complete-list {
      font-size: toRem(16);
      color: $gray-3;
      height: toRem(90);
      @extend .centered;
      cursor: pointer;

      .icon {
        margin-right: toRem(11);
        &::before {
          content: "\e801";
          @include font-icon__limoo();
          font-size: toRem(16);
          color: $gray-3;
        }
      }
    }
  }

  &.mobile {
    display: none;
    margin-top: toRem(8);
    width: 100%;
    background-color: $white;
    box-shadow: 0 toRem(8) toRem(16) 0 rgba(17, 17, 17, 0.03);
    border-radius: toRem(10);
    padding: toRem(16) toRem(11) toRem(16) toRem(13);
    @include xs {
      display: block;
      .order-date {
        font-size: toRem(13);
        @include display-flex();
        color: $gray-2;
        margin-bottom: toRem(8);

        .title {
          font-size: toRem(13);
          color: $gray-3;
          margin-left: toRem(4);

        }
      }
      .order-number {
        font-size: toRem(13);
        @include display-flex();
        color: $gray-2;
        margin-bottom: toRem(16);

        .title {
          font-size: toRem(13);
          color: $gray-3;
          margin-left: toRem(4);
        }
      }
      .order-info {
        @include display-flex();
        justify-content: space-between;
        .order-images {
          @include display-flex();

          .image {
            margin-left: toRem(7);
            border: toRem(1) solid $gray-6;
            border-radius: toRem(5);
            @include display-flex();
            align-items: center;
            justify-content: center;

            img {
              max-width: toRem(46);
              max-height: toRem(46);
            }
          }

          .more-image {
            border: toRem(1) solid $gray-6;
            border-radius: toRem(5);
            margin-left: toRem(7);
            width: toRem(28);
            height: toRem(46);
            @include display-flex();

            .icon {
              width: 100%;
              @include display-flex();
              align-items: center;
              flex-direction: column;
              justify-content: center;

              &::before {
                content: "\e81c";
                @include font-icon__limoo();
                font-size: toRem(20);
                color: $gray-5;
                transform: rotate(90deg);
              }
            }
          }

        }

        .view-detail {
          @include display-flex();
          align-items: flex-end;
          .txt {
            font-size: toRem(13);
            color: $gray-3;
            margin-left: toRem(6);
          }

          .icon {
            background-color: $yellow;
            width: toRem(20);
            height: toRem(20);
            border-radius: toRem(5);
            @include display-flex();
            align-items: center;
            justify-content: center;

            &::before {
              content: "\e83a";
              @include font-icon__limoo();
              font-size: toRem(9);
              color: $white;
            }
          }
        }
      }
    }

  }

}

</style>
