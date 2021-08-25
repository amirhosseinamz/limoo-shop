<template>
    <div class="cart-container d-rtl">
        <div class="user-cart__container">
            <div class="mobile-screen__holder d-rtl">
                <span class="user-cart__title-mobile-screen"
                    >لیست سفارشات شما</span
                >
                <span @click="goBack" class="mobile-screen__arrow"></span>
            </div>
            <div class="user-cart__orders-container">
                <span class="user-cart__title">لیست سفارشات شما</span>
                <The-cart-orders
                    @event-show-modal-delete-order="eventShowModalDeleteOrder"
                    @add-more-order-to-card="addMoreOrderToCard"
                    @minus-order-from-card="minusOrderFromCart"
                ></The-cart-orders>
                <nuxt-link to="/" class="user-cart__go-back">بازگشت</nuxt-link>
            </div>
            <The-cart-pay-detail></The-cart-pay-detail>
        </div>
<!--      Delete User Modal-->
      <transition name="backdrop-delete">
        <div class="backdrop" v-if="showModalDeleteUser" @click="modalDeleteUserClose"></div>
      </transition>
      <transition name="delete">
        <TheModalDeleteUserOrders
          v-if="showModalDeleteUser"
          @close-modal="modalDeleteUserClose"
          :current-orders="currentOrders"
          @btn-delete-order="btnDeleteOrder"
        />
      </transition>

    </div>
</template>
<script>
import TheCartPayDetail from "~/components/Cart/TheCartPayDetail.vue";
import TheCartOrders from "~/components/Cart/TheCartOrders.vue";
import TheModalDeleteUserOrders from "~/components/Cart/TheModalDeleteUserOrders.vue";
import addCommaPrice from "~/modules/addCamaPrice.js";
import ModalDeleteAddress from "../../components/Shipping/modalDeleteAddress";


export default {
    layout      : "removeFooterCart",
    components : {
      ModalDeleteAddress,
        TheCartPayDetail,
        TheCartOrders,
        TheModalDeleteUserOrders
    },
    data() {
        return {
            showModalDeleteUser : false,
            currentOrders        : {},

        };
    },
    computed: {
      ordersData() {
        return this.$store.getters["cart/cart/ordersData"];
      },
      detailPrice() {
        return this.$store.getters["cart/cart/detailPrice"];
      }
    },
    mounted() {
      // پس ار اتصال به بک این قسمت باید بعد از برگشت اطلاعات از سمت بک صدا زده شود //
      this.addComma();
    },

    methods: {
        goBack() {
            this.$router.push("/");
        },
        modalDeleteUserClose() {
            this.showModalDeleteUser = false;
        },
        eventShowModalDeleteOrder(data) {
            this.showModalDeleteUser = true;
            this.currentOrders = data;
        },
        btnDeleteOrder(data) {
            this.$store.dispatch("cart/cart/btnDeleteOrder", data);
            this.showModalDeleteUser = false;
        },
        addMoreOrderToCard(data) {
            this.$store.dispatch("cart/cart/addOrderToCard", data);
        },
        minusOrderFromCart(data) {
          this.$store.dispatch("cart/cart/minusOrderFromCard", data);
        },

        addComma(){
          const getDetailPrice = this.detailPrice;
          const setUpdateDetailPrice = {
          }

          for (let key in getDetailPrice) {
            setUpdateDetailPrice[key] = getDetailPrice[key];

            if (getDetailPrice[key] !== 'رایگان') {
               setUpdateDetailPrice[key] = addCommaPrice(getDetailPrice[key]);
            }
          }

          this.$store.dispatch("cart/cart/updateDetailPrice", setUpdateDetailPrice);
        },

    }
};
</script>
<style lang="scss" scoped>
@include delete-modal-animation();
@include backdrop-delete-modal-animation();

.backdrop {
  @extend .modal-backdrop;
  background: rgba(81,81,81,.6);
}
.cart-container {
    margin: 0 auto;
    width: 100%;
    max-width: toRem(1920);
    min-height: 100vh;
}
.user-cart__container {
    padding: toRem(166) toRem(16) 0 16px;
    margin-bottom: toRem(60);
    width: 100%;
    height: fit-content;
    @include display-flex();
    flex-direction: row;
}
.user-cart__orders-container {
    @include display-flex();
    flex-direction: column;
    width: 70%;
    margin-left: toRem(31);
}
.user-cart__title {
    font-family: inherit;
    font-size: toRem(18);
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
    margin-bottom: toRem(24);
}
.user-cart__go-back {
    @include display-flex();
    text-decoration: none;
    color: $code-request;
    font-size: toRem(16);
    line-height: 140.62%;
    text-align: right;
    margin-top: toRem(8);
}
.user-cart__go-back::before {
    @include font-icon__limoo();
    @include display-flex();
    content: "\e801";
    color: $code-request;
    font-size: toRem(12);
    margin-left: toRem(6);
    transform: rotate(180deg);
}
.mobile-screen__holder {
    display: none;
}



@include xl {
  .user-cart__orders-container {
    width: 62%;
    margin-left: 2.2%
  }
  .cart-detail__container{
    width: 35%;
  }
}

@include md {
    .cart-detail__container{
      width: 100%;
    }
    .user-cart__container {
        padding: toRem(47) 0 0 0;
        margin-bottom: toRem(60);
        flex-direction: column;
    }
    .user-cart__orders-container {
        width: 100%;
        margin-left: 0;
    }
    .user-cart__go-back {
        display: none;
    }
    .user-cart__title {
        display: none;
    }
    .mobile-screen__holder {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: toRem(56);
        background: $white;
        margin-bottom: toRem(8);
        padding: 0 toRem(16);
    }
    .mobile-screen__arrow::before {
        content: "\e801";
        @include font-icon__limoo();
        font-size: toRem(16);
        color: $gray;
        font-weight: bold;
    }
}
</style>
