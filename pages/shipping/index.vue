<template>
    <div class="cart-container d-rtl">
        <div class="user-cart__container">
            <div class="mobile-screen__holder d-rtl">
                <span class="user-shipping__title-mobile-screen"
                    >سبد خرید شما</span
                >
                <span @click="goBack" class="mobile-screen__arrow"></span>
            </div>
            <span class="user-cart__shipping-topic"
                >تکمیل اطلاعات ارسال کالا</span
            >
            <div class="user-cart__shipping-holder">
                <div class="user-cart__shipping-container">
                    <div class="user-cart__shipping-address">
                        <div class="d-fleX w-100 justify-content-space-between">
                            <span class="user-shipping__title"
                                >انتخاب آدرس</span
                            >
                            <span
                                v-show="userAddressData !== 0"
                                @click="addAddress"
                                class="user-shipping__address-btn"
                                >افزودن آدرس جدید</span
                            >
                        </div>
                        <span class="user-cart__shipping-line"></span>

                        <The-shipping-address
                            ref="TheShippingAddress"
                            @event-show-modal-delete-order="
                                eventShowModalDeleteOrder
                            "
                            @add-more-order-to-card="addMoreOrderToCard"
                            @minus-order-from-card="minusOrderFromCart"
                            @selected-province="selectedProvince"
                            @selected-city="selectedCity"
                            @submit-address-add="submitAddressAdd"
                        ></The-shipping-address>
                        <div class="address-btn__mobile-holder">
                            <span
                                v-show="userAddressData !== 0"
                                @click="addAddress"
                                class="user-shipping__address-btn__mobile"
                                >افزودن آدرس جدید</span
                            >
                        </div>
                        <span
                            class="user-shipping__address-btn__empty"
                            v-show="userAddressData == 0"
                            @click="addAddress"
                            ><span class="desktop-btn__empty"
                                >افزودن آدرس جدید</span
                            >
                            <span class="mobile-btn__empty"
                                >ثبت آدرس جدید</span
                            ></span
                        >
                    </div>
                    <div class="user-cart__shipping-time__container">
                        <div class="user-cart__time-topic__holder">
                            <span class="user-cart__time-title"
                                >نحوه و زمان ارسال کالا</span>

                          <base-tabs
                            :tabs="tabsNames"
                            :selected="selected"
                            @change-tab="tabChanged"
                            :disables="[tabsNames[1]]"
                            class="user-cart__time-nav__holder"
                            tabs-item-class="user-cart__time-nav__items"
                            tabs-class="tabs-navigator"
                          >
                            <tab-content
                              :name="tabsNames[0]"
                              :isSelected="selected === tabsNames[0]"
                            ></tab-content>

                            <tab-content :name="tabsNames[1]" :isSelected="selected === tabsNames[1]">
                            </tab-content>
                          </base-tabs>
                        </div>
                        <div class="user-cart__order-time__container">
                            <the-time-shipping
                                @submit-times-add="submitTimesAdd"
                            ></the-time-shipping>
                        </div>
                    </div>
                </div>
                <The-cart-shipping-detail
                ></The-cart-shipping-detail>
            </div>
        </div>
        <nuxt-link to="/cart" class="user-cart__go-back">بازگشت</nuxt-link>
        <modalDeleteAddress
            :active.sync="showModalDeleteAddress"
            :current-address="currentAddress"
            @btn-delete-modal="btnDeleteAddress"
        />
    </div>
</template>
<script>
import TheCartShippingDetail from "~/components/Shipping/TheShippingPayDetail.vue";
import TheShippingAddress from "~/components/Shipping/TheShippingAddress.vue";
import modalDeleteAddress from "~/components/Shipping/modalDeleteAddress.vue";
import TheTimeShipping from "~/components/Shipping/TheTimeShipping.vue";
import addCamaPrice from "~/modules/addCamaPrice.js";
import "~/assets/styles/_slider_shipping.scss";

export default {
  layout      : "removeFooterCart",
    components: {
        TheCartShippingDetail,
        TheShippingAddress,
        modalDeleteAddress,
        TheTimeShipping
    },
    data() {
        return {
            tabsNames: ['ارسال پیشنهادی','ارسال فوری'],
            selected: 'ارسال پیشنهادی',
            allOrdersHasTimed: { item: false },
            showModalDeleteAddress: false,
            userAddressData: -1,
            sendTime: true,
            currentOrders: {},
            updateAddress: 0,
            currentAddress: {},

        };
    },
    computed: {
      addressData () {
        return this.$store.getters["shipping/shipping/addressData"]
      },
      ordersData () {
        return this.$store.getters["shipping/shipping/ordersData"]
      },
      allProvince () {
        return this.$store.getters["shipping/shipping/allProvince"]
      },
      allCities () {
        return this.$store.getters["shipping/shipping/allCities"]
      },
      formData () {
        return this.$store.getters["shipping/shipping/formData"]
      },
      timeData () {
        return this.$store.getters["shipping/shipping/timeData"]
      },
      detailPrice () {
        return this.$store.getters["shipping/shipping/detailPrice"]
      },
      profilePhoneNumber () {
        return this.$store.getters["shipping/shipping/profilePhoneNumber"]
      }
    },
    provide() {
        return {
            allOrdersHasTimed: this.allOrdersHasTimed
        };
    },
    created() {
        this.userAddressData = Object.values(this.addressData).length;
    },

    mounted() {
        this.addCama();
    },

    methods: {
      tabChanged (val) {
        this.selected = val
      },
        submitTimesAdd() {
            this.allOrdersHasTimed.item = true;
        },
        submitAddressAdd(data, state) {
            this.updateAddress++;
            let findIndex = 0;
            this.addressData.map((content, i) => {
                if (content.id !== data.id) {
                    content.defultAddress = false;
                }
            });
            const faceUpdatePage = () => {
                this.addressData.map((content, i) => {
                    if (content.id == data.id) {
                        this.addressData[i] = data;
                    }
                });
            };

            // بعد از اتصال به بک این قسمت حذف شود //
            if (state == "edit") {
                faceUpdatePage();
            } else {
                data.id = 20 + this.updateAddress;
                this.addressData.unshift(data);
            }

            // send data server //
        },
        selectedProvince(data) {
            // console.log(data,'selectedProvince');
        },

        selectedCity(data) {
            // console.log(data,'selectedCitys');
        },
        addAddress() {
            this.$refs.TheShippingAddress.addAddress();
        },
        goBack() {
            this.$router.push("/cart");
        },
        eventShowModalDeleteOrder(data) {
            this.showModalDeleteAddress = true;
            this.currentAddress = data;
        },
        btnDeleteAddress(data) {
            const removeOrder = () => {
                let indexDeleteOrderData = -1;
                this.addressData.map((content, index) => {
                    if (content.id == data.id) {
                        indexDeleteOrderData = index;
                    }
                });
                this.$store.dispatch('shipping/shipping/deleteAddress', indexDeleteOrderData)
            };

            removeOrder();
            this.showModalDeleteAddress = false;

            // request //
        },
        addMoreOrderToCard(data) {
            this.addressData.map(content => {
                if (content.id == data.id) {
                    content.count++;
                }
            });
        },
        minusOrderFromCart(data) {
            this.addressData.map(content => {
                if (content.id == data.id) {
                    content.count--;
                }
            });
        },

        addCama() {
            //this.$store.dispatch("shipping/shipping/addCama")
            const getDetailPrice = this.detailPrice;
            const setUpdateDetailPrice = {};

            for (let key in getDetailPrice) {
                setUpdateDetailPrice[key] = getDetailPrice[key];

                if (getDetailPrice[key] != "رایگان") {
                    setUpdateDetailPrice[key] = addCamaPrice(
                        getDetailPrice[key]
                    );
                }
            }
            this.$store.dispatch('shipping/shipping/addCama',setUpdateDetailPrice)
        }
    }
};
</script>
<style lang="scss" scoped>
.cart-container {
    margin: 0 auto;
    width: 100%;
    max-width: toRem(1920);
    height: fit-content;
}
.user-cart__container {
    padding: toRem(166) toRem(16) 0 toRem(16);
    width: 100%;
    height: fit-content;
    @include display-flex();
    flex-direction: column;
}
.user-shipping__address-btn__empty {
    @include display-flex();
    justify-content: center;
    align-items: center;
    width: toRem(270);
    height: toRem(57);
    margin: 0 auto;
    font-size: toRem(16);
    line-height: 140.62%;
    text-align: center;
    color: $yellow;
    border: toRem(2) solid $yellow;
    box-sizing: border-box;
    border-radius: toRem(10);
    cursor: pointer;
    margin-top: toRem(24);
}
.user-shipping__address-btn__empty:hover {
    color: $white;
    background-color: $yellow;
}
.mobile-btn__empty {
    display: none;
}
.desktop-btn__empty {
    display: block;
}
.user-cart__shipping-holder {
    @include display-flex();
    flex-direction: row;
    width: 100%;
    height: fit-content;
}
.user-cart__shipping-topic {
    font-size: toRem(18);
    line-height: 140.62%;
    text-align: right;
    margin-bottom: toRem(24);
}
.user-cart__shipping-container {
    @include display-flex();
    flex-direction: column;
    width: 70%;
    /* border: 1px solid blue; */
    margin-left: toRem(30);
    /* background-color: $white; */
    border-radius: toRem(10);
    min-height: toRem(193);
    height: fit-content;
}
.user-cart__shipping-address {
    @include display-flex();
    flex-direction: column;
    background-color: $white;
    border-radius: 10px;
    padding: 0 toRem(24) toRem(30) toRem(24);
    margin-bottom: toRem(16);
}
.user-cart__shipping-time__container {
    @include display-flex();
    flex-direction: column;
}
.user-cart__time-topic__holder {
    @include display-flex();
    flex-direction: column;
    background-color: $white;
    width: 100%;
    height: toRem(142);
    z-index: 1;
    box-shadow: 0 toRem(8) toRem(16) $box__shadow;
    border-radius: toRem(10) toRem(10) 0 0;
}
.user-cart__time-title {
    font-size: toRem(18);
    line-height: 140.62%;
    color: $black-topic;
    text-align: right;
    margin: toRem(27) toRem(38) toRem(30) 0;
}
.user-cart__order-time__container {
    width: 100%;
    height: fit-content;
    background-color: $white;
    box-shadow: 0 toRem(8) toRem(16) $box__shadow;
    border-radius: 0 0 toRem(10) toRem(10);
    padding-top: toRem(14);
}
.user-cart__time-nav__holder::v-deep {
    padding: 0 2.375rem;
    width: 100%;
    height: toRem(60);

  .user-cart__time-nav__items {
    margin-left: 3.125rem;
    padding-bottom: 0.7rem;
    font-size: toRem(18);
  }
}

.user-cart__time-nav__urgent a {
    margin-right: toRem(64);
}
.item-active {
    & a {
        color: $black-topic;
    }
    .bottomLine {
        align-self: center;
        background-color: $yellow;
        height: toRem(5);
        width: 115%;
        margin-top: toRem(20);
        border-top-left-radius: toRem(15);
        border-top-right-radius: toRem(15);
    }
}
.user-shipping__title {
    font-family: inherit;
    font-size: toRem(18);
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
    margin: toRem(24) 0 toRem(24) 0;
}
.user-shipping__address-btn,
.user-shipping__address-btn__mobile {
    font-family: inherit;
    font-size: toRem(16);
    line-height: 140.62%;
    margin: toRem(24) 0 toRem(24) 0;
    color: $gray;
    cursor: pointer;
}

.address-btn__mobile-holder {
    @include display-flex();
    flex-direction: row;
    justify-content: flex-end;
}
.user-shipping__address-btn::after,
.user-shipping__address-btn__mobile::after {
    @include font-icon__limoo();
    content: "\e821";
    color: $yellow;
    font-size: toRem(24);
    margin-right: toRem(8);
    vertical-align: middle;
}
.user-shipping__address-btn__mobile::after {
    margin-left: toRem(23);
}
.user-shipping__address-btn__mobile {
    display: none;
}
.user-cart__go-back {
    @include display-flex();
    text-decoration: none;
    color: $code-request;
    font-size: toRem(16);
    line-height: 140.62%;
    text-align: right;
    margin: toRem(24) toRem(18) toRem(60) 0;
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
.user-cart__shipping-line {
    display: none;
}

@media (max-width: 1400px) {
    .user-cart__shipping-container {
        width: 62%;
        margin-left: 2.2%;
    }
}

@media (max-width: 960px) {
    .user-shipping__address-btn__empty {
        width: toRem(259);
        height: toRem(47);
        margin-top: toRem(8);
    }
    .desktop-btn__empty {
        display: none;
    }
    .mobile-btn__empty {
        display: block;
    }
    .user-shipping__address-btn {
        display: none;
    }
    .user-shipping__address-btn__mobile {
        display: block;
        font-family: inherit;
        font-size: toRem(13);
        line-height: 140.62%;
        margin: toRem(8) 0 toRem(24) 0;
        color: $gray;
        text-align: left;
        cursor: pointer;
    }
    .user-shipping__address-btn__mobile::after {
        font-size: toRem(19);
        margin-left: toRem(2);
        margin-right: toRem(4);
    }
    .user-cart__shipping-line {
        display: block;
        margin: 0 auto toRem(16) auto;
        width: 100%;
        border-top: toRem(1) solid $gray-border;
    }
    .user-cart__time-nav__holder::v-deep {
        padding: 0.9375rem 1.875rem 0 1.875rem;
        height: toRem(51);

      .user-cart__time-nav__items {
        font-size: toRem(14);
      }
    }
    .user-cart__time-nav__urgent a {
        margin-right: 0;
    }
    .item-active {
        & a {
            color: $code;
        }
        .bottomLine {
            height: toRem(4);
            width: 115%;
            margin-top: toRem(10);
        }
    }
    .user-cart__time-topic__holder {
        height: toRem(102);
    }
    .user-cart__time-title {
        font-size: toRem(14);
        margin: toRem(16) toRem(11) toRem(16) 0;
    }
    .user-cart__container {
        padding: toRem(47) 0 0 0;
        margin-bottom: toRem(60);
        flex-direction: column;
    }
    .user-cart__shipping-holder {
        flex-direction: column;
        padding: 0 toRem(5);
    }
    .user-cart__shipping-container {
        width: 100%;
        /* border: 1px solid blue; */
        min-height: toRem(145);
        margin-left: 0;
    }
    .user-cart__shipping-address {
        padding: 0 toRem(11);
        margin-bottom: toRem(8);
    }
    .user-cart__go-back {
        display: none;
    }
    .user-shipping__title {
        font-size: toRem(14);
        margin: toRem(16) 0 toRem(16) 0;
        /* border: 1px solid blue; */
    }
    .user-cart__shipping-topic {
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
@media (max-width: 540px) {
    .user-cart__time-nav__holder::v-deep {
        justify-content: space-between;
        padding: 0.9375rem 2.3125rem 0 2.3125rem;

      .tabs-navigator {
        @include display-flex();
        justify-content: space-between;
      }
      .user-cart__time-nav__items {
        margin-left: 0;
        font-size: toRem(12);
      }
    }

}
@media (max-width: 280px) {
    .user-cart__shipping-address {
        padding: 0 toRem(3);
    }
    .user-cart__time-nav__holder {
        padding: toRem(15) toRem(17) 0 toRem(17);
    }
}
</style>
