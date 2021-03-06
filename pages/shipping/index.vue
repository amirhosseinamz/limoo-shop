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
                    <div class="d-fleX w-100 justify-content-space-between">
                        <span class="user-shipping__title">انتخاب آدرس</span>
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
                        :address-data="addressData"
                        :all-province="allProvince"
                        :all-citys="allCitys"
                        :form-data="formData"
                        :profile-phone-number="profilePhoneNumber"
                        @selected-province="selectedProvince"
                        @selected-city="selectedCity"
                        @submit-address-add="submitAddressAdd"
                    ></The-shipping-address>
                    <span
                        v-show="userAddressData !== 0"
                        @click="addAddress"
                        class="user-shipping__address-btn__mobile"
                        >افزودن آدرس جدید</span
                    >
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
                <The-cart-shipping-detail :detail-price="detailPrice"></The-cart-shipping-detail>
            </div>
        </div>
        <nuxt-link to="/" class="user-cart__go-back">بازگشت</nuxt-link>
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
import TheModalDeleteUserOrders from "~/components/Cart/TheModalDeleteUserOrders.vue";
import addCamaPrice from "~/modules/addCamaPrice.js";


export default {
    components: {
        TheCartShippingDetail,
        TheShippingAddress,
        modalDeleteAddress
    },
    data() {
        return {
            showModalDeleteAddress: false,
            userAddressData: -1,
            addressData: [
                {
                    id: 1,
                    address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 1",
                    province: "تهران",
                    city: "جنت آباد",
                    codePoste: "90",
                    nameReceiver: "شروین پیکارجو",
                    numberReceiver: "09190894025",
                    defultAddress: true
                },
                {
                    id: 2,
                    address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 2",
                    province: "قم",
                    city: "قم",
                    codePoste: "2",
                    nameReceiver: "خشایار سُلگی",
                    numberReceiver: "09180151023",
                    defultAddress: false
                },
                  {
                    id: 3,
                    address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 2",
                    province: "قم",
                    city: "قم",
                    codePoste: "2",
                    nameReceiver: "خشایار سُلگی",
                    numberReceiver: "09180151023",
                    defultAddress: false
                },

            ],
           ordersData: [
                {
                    id: 1,
                    title: "تهران خیابان ولی عصر 1 تقاطع مطهری، کوچه حسینی راد"
                },
                {
                    id: 2,
                    title: "تهران خیابان ولی عصر 2 تقاطع مطهری، کوچه حسینی راد"
                },
                {
                    id: 3,
                    title: "تهران خیابان ولی عصر 3 تقاطع مطهری، کوچه حسینی راد"
                },
                {
                    id: 4,
                    title: "تهران خیابان ولی عصر 3 تقاطع مطهری، کوچه حسینی راد"
                },
                {
                    id: 5,
                    title: "تهران خیابان ولی عصر 3 تقاطع مطهری، کوچه حسینی راد"
                },
                {
                    id: 6,
                    title: "تهران خیابان ولی عصر 3 تقاطع مطهری، کوچه حسینی راد"
                },
                {
                    id: 7,
                    title: "تهران خیابان ولی عصر 3 تقاطع مطهری، کوچه حسینی راد"
                },
            ],
            currentOrders: {},
            detailPrice  : {
              price               : 12000,
              totalDiscount       : 142250,
              submitDeliveryPrice : 'رایگان',
              totalPrice          : 2587000,
            },
            allProvince: [
                {
                    id: 1,
                    title: "تهران",
                    selected: false
                },
                {
                    title: "قم",
                    id: 2,
                    selected: false
                }
            ],
            allCitys: [
                {
                    id: 1,
                    parent_id: 2,
                    title: "قم",
                    selected: false
                },
                {
                    id: 2,
                    parent_id: 1,
                    title: "جنت آباد",
                    selected: false
                }
            ],
            formData: {
                province: "",
                city: "",
                codePoste: "",
                nameReceiver: "",
                numberReceiver: "",
                address: "",
                defultAddress: true
            },
            updateAddress: 0,
            profilePhoneNumber: "09198814783",
            currentAddress: {},
        };
    },

     created() {
        this.userAddressData = Object.values(this.addressData).length;
    },

    mounted() {
      this.addCama();
    },

    methods: {
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

                this.addressData.splice(indexDeleteOrderData, 1);
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

        addCama(){
          const getDetailPrice       = this.detailPrice;
          const setUpdateDetailPrice = {
          }

          for (let key in getDetailPrice) {
            setUpdateDetailPrice[key] = getDetailPrice[key];

            if (getDetailPrice[key] != 'رایگان') {
               setUpdateDetailPrice[key] = addCamaPrice(getDetailPrice[key]);
            }
          }

          this.detailPrice = setUpdateDetailPrice;
        },

    }
};
</script>
<style lang="scss" scoped>
.cart-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    height: fit-content;
}
.user-cart__container {
    padding: 166px 16px 0 16px;
    /* margin-bottom: 60px; */
    width: 100%;
    height: fit-content;
    @include display-flex();
    flex-direction: column;
    /* border: 1px solid red; */
}
.user-shipping__address-btn__empty {
    @include display-flex();
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 57px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 140.62%;
    text-align: center;
    color: $yellow;
    border: 2px solid $yellow;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 24px;
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
    font-size: 18px;
    line-height: 140.62%;
    text-align: right;
    margin-bottom: 24px;
}
.user-cart__shipping-container {
    @include display-flex();
    flex-direction: column;
    width: 70%;
    /* border: 1px solid blue; */
    margin-left: 30px;
    background-color: $white;
    border-radius: 10px;
    min-height: 193px;
    height: fit-content;
    padding: 0 24px 30px 24px;
}
.user-shipping__title {
    font-family: inherit;
    font-size: 18px;
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
    margin: 24px 0 24px 0;
    /* border: 1px solid blue; */
}
.user-shipping__address-btn,
.user-shipping__address-btn__mobile {
    font-family: inherit;
    font-size: 16px;
    line-height: 140.62%;
    margin: 24px 0 24px 0;
    color: $gray;
    cursor: pointer;
}
.user-shipping__address-btn::after,
.user-shipping__address-btn__mobile::after {
    @include font-icon__limoo();
    content: "\e821";
    color: $yellow;
    font-size: 24px;
    margin-right: 8px;
    vertical-align: middle;
}
.user-shipping__address-btn__mobile::after {
    margin-left: 23px;
}
.user-shipping__address-btn__mobile {
    display: none;
}
.user-cart__go-back {
    @include display-flex();
    text-decoration: none;
    color: $code-request;
    font-size: 16px;
    line-height: 140.62%;
    text-align: right;
    margin: 24px 18px 60px 0;
}
.user-cart__go-back::before {
    @include font-icon__limoo();
    @include display-flex();
    content: "\e801";
    color: $code-request;
    font-size: 12px;
    margin-left: 6px;
    transform: rotate(180deg);
}
.mobile-screen__holder {
    display: none;
}
.user-cart__shipping-line {
    display: none;
}



@media (max-width: 1400px) {
  .user-cart__shipping-container{
    width: 62%;
    margin-left: 2.2%;
  }
}

@media (max-width: 960px) {
    .user-shipping__address-btn__empty {
        width: 259px;
        height: 47px;
        margin-top: 8px;
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
        font-size: 13px;
        line-height: 140.62%;
        margin: 8px 0 24px 0;
        color: $gray;
        text-align: left;
        cursor: pointer;
    }
    .user-shipping__address-btn__mobile::after {
        font-size: 19px;
        margin-left: 2px;
        margin-right: 4px;
    }
    .user-cart__shipping-line {
        display: block;
        margin: 0 auto 16px auto;
        width: 100%;
        border-top: 1px solid $gray-border;
    }
    .user-cart__container {
        padding: 47px 0 0 0;
        margin-bottom: 60px;
        flex-direction: column;
    }
    .user-cart__shipping-holder {
        flex-direction: column;
        padding: 0 5px;
    }
    .user-cart__shipping-container {
        width: 100%;
        /* border: 1px solid blue; */
        min-height: 145px;
        margin-left: 0;
        padding: 0 11px;
    }
    .user-cart__go-back {
        display: none;
    }
    .user-shipping__title {
        font-size: 14px;
        margin: 16px 0 16px 0;
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
        height: 56px;
        background: $white;
        margin-bottom: 8px;
        padding: 0 16px;
    }
    .mobile-screen__arrow::before {
        content: "\e801";
        @include font-icon__limoo();
        font-size: 16px;
        color: $gray;
        font-weight: bold;
        /* margin-right: 4px;
        margin-left: 8px; */
    }
}
@media (max-width: 280px) {
    .user-cart__shipping-container {
        padding: 0 3px;
    }
}
</style>
