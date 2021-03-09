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
                            :address-data="addressData"
                            :all-province="allProvince"
                            :all-citys="allCitys"
                            :form-data="formData"
                            :profile-phone-number="profilePhoneNumber"
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
                                >نحوه و زمان ارسال کالا</span
                            >
                            <div class="user-cart__time-nav__holder d-rtl">
                                <!--  -->
                                <!-- :class="{ 'item-active': sendTime }" -->
                                <div
                                    class="user-cart__time-nav__items"
                                    :class="{ 'item-active': sendTime }"
                                >
                                    <NuxtLink to="">ارسال پیشنهادی</NuxtLink>
                                    <span class="bottomLine"></span>
                                </div>
                                <div
                                    class="user-cart__time-nav__items user-cart__time-nav__urgent"
                                >
                                    <NuxtLink to="">ارسال فوری</NuxtLink>
                                    <span class="bottomLine"></span>
                                </div>
                                <!--  -->
                            </div>
                        </div>
                        <div class="user-cart__order-time__container">
                            <the-time-shipping
                                :time-data="timeData"
                            ></the-time-shipping>
                        </div>
                    </div>
                </div>
                <The-cart-shipping-detail
                    :detail-price="detailPrice"
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
    components: {
        TheCartShippingDetail,
        TheShippingAddress,
        modalDeleteAddress,
        TheTimeShipping
    },
    data() {
        return {
            showModalDeleteAddress: false,
            userAddressData: -1,
            sendTime: true,
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
                    address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 3",
                    province: "قم",
                    city: "قم",
                    codePoste: "2",
                    nameReceiver: "مهدی دادور",
                    numberReceiver: "09180151023",
                    defultAddress: false
                }
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
                }
            ],
            currentOrders: {},
            detailPrice: {
                price: 12000,
                totalDiscount: 142250,
                submitDeliveryPrice: "رایگان",
                totalPrice: 2587000
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
            timeData: [
                {
                    id: 1,
                    shippingLimoo: "limoo",
                    shippingPost: "post",
                    orders: [
                        { id: 1, img: "/img/apple-watch-1.png" },
                        { id: 2, img: "/img/apple-watch-1.png" },
                        { id: 3, img: "/img/apple-watch-1.png" }
                    ],
                    timeTable: [
                        {
                            id: 1,
                            dayTime: "شنبه 23 بهمن 99",
                            weekday: "شنبه",
                            weekcal: "23 بهمن 99",
                            timeInDayTable: [
                                {
                                    id: 1,
                                    time: "بین 8:00 تا 12:00",
                                    disable: true
                                },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 2,
                            dayTime: "یک شنبه 24 بهمن 99",
                            weekday: "یک شنبه",
                            weekcal: "24 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 3,
                            dayTime: "دو شنبه 25 بهمن 99",
                            weekday: "دو شنبه",
                            weekcal: "25 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 4,
                            dayTime: "سه شنبه 26 بهمن 99",
                            weekday: "سه شنبه",
                            weekcal: "26 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 5,
                            dayTime: "چهار شنبه 27 بهمن 99",
                            weekday: "چهار شنبه",
                            weekcal: "27 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 6,
                            dayTime: "پنچ شنبه 28 بهمن 99",
                            weekday: "پنج شنبه",
                            weekcal: "28 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 7,
                            dayTime: "جمعه 29 بهمن 99",
                            weekday: "جمعه",
                            weekcal: "29 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    shipping: "heavy",
                    orders: [{ id: 1, img: "/img/apple-watch-2.png" }],
                    timeTable: [
                        {
                            id: 1,
                            dayTime: "شنبه 23 بهمن 99",
                            weekday: "شنبه",
                            weekcal: "23 بهمن 99",
                            timeInDayTable: [
                                {
                                    id: 1,
                                    time: "بین 8:00 تا 12:00",
                                    disable: true
                                },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                {
                                    id: 3,
                                    time: "بین 16:00 تا 20:00",
                                    disable: true
                                },
                                {
                                    id: 4,
                                    time: "بین 20:00 تا 00:00",
                                    disable: true
                                }
                            ]
                        },
                        {
                            id: 2,
                            dayTime: "یک شنبه 24 بهمن 99",
                            weekday: "یک شنبه",
                            weekcal: "24 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 3,
                            dayTime: "دو شنبه 25 بهمن 99",
                            weekday: "دو شنبه",
                            weekcal: "25 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 4,
                            dayTime: "سه شنبه 26 بهمن 99",
                            weekday: "سه شنبه",
                            weekcal: "26 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 5,
                            dayTime: "چهار شنبه 27 بهمن 99",
                            weekday: "چهار شنبه",
                            weekcal: "27 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 6,
                            dayTime: "پنچ شنبه 28 بهمن 99",
                            weekday: "پنج شنبه",
                            weekcal: "28 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 7,
                            dayTime: "جمعه 29 بهمن 99",
                            weekday: "جمعه",
                            weekcal: "29 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    shippingSeller: "seller",
                    shippingLimoo: "limoo",
                    orders: [
                        { id: 1, img: "/img/apple-watch-3.png" },
                        { id: 2, img: "/img/apple-watch-3.png" }
                    ],
                    timeTable: [
                        {
                            id: 1,
                            dayTime: "شنبه 23 بهمن 99",
                            weekday: "شنبه",
                            weekcal: "23 بهمن 99",
                            timeInDayTable: [
                                {
                                    id: 1,
                                    time: "بین 8:00 تا 12:00",
                                    disable: true
                                },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                {
                                    id: 3,
                                    time: "بین 16:00 تا 20:00",
                                    disable: true
                                },
                                {
                                    id: 4,
                                    time: "بین 20:00 تا 00:00",
                                    disable: true
                                }
                            ]
                        },
                        {
                            id: 2,
                            dayTime: "یک شنبه 24 بهمن 99",
                            weekday: "یک شنبه",
                            weekcal: "24 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                {
                                    id: 2,
                                    time: "بین 12:00 تا 16:00",
                                    disable: true
                                },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 3,
                            dayTime: "دو شنبه 25 بهمن 99",
                            weekday: "دو شنبه",
                            weekcal: "25 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 4,
                            dayTime: "سه شنبه 26 بهمن 99",
                            weekday: "سه شنبه",
                            weekcal: "26 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 5,
                            dayTime: "چهار شنبه 27 بهمن 99",
                            weekday: "چهار شنبه",
                            weekcal: "27 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 6,
                            dayTime: "پنچ شنبه 28 بهمن 99",
                            weekday: "پنج شنبه",
                            weekcal: "28 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 7,
                            dayTime: "جمعه 29 بهمن 99",
                            weekday: "جمعه",
                            weekcal: "29 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    shipping: "seller",
                    orders: [{ id: 1, img: "/img/apple-watch-1.png" }],
                    timeTable: [
                        {
                            id: 1,
                            dayTime: "شنبه 23 بهمن 99",
                            weekday: "شنبه",
                            weekcal: "23 بهمن 99",
                            timeInDayTable: [
                                {
                                    id: 1,
                                    time: "بین 8:00 تا 12:00",
                                    disable: true
                                },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                {
                                    id: 3,
                                    time: "بین 16:00 تا 20:00",
                                    disable: true
                                },
                                {
                                    id: 4,
                                    time: "بین 20:00 تا 00:00",
                                    disable: true
                                }
                            ]
                        },
                        {
                            id: 2,
                            dayTime: "یک شنبه 24 بهمن 99",
                            weekday: "یک شنبه",
                            weekcal: "24 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 3,
                            dayTime: "دو شنبه 25 بهمن 99",
                            weekday: "دو شنبه",
                            weekcal: "25 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 4,
                            dayTime: "سه شنبه 26 بهمن 99",
                            weekday: "سه شنبه",
                            weekcal: "26 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 5,
                            dayTime: "چهار شنبه 27 بهمن 99",
                            weekday: "چهار شنبه",
                            weekcal: "27 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 6,
                            dayTime: "پنچ شنبه 28 بهمن 99",
                            weekday: "پنج شنبه",
                            weekcal: "28 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        },
                        {
                            id: 7,
                            dayTime: "جمعه 29 بهمن 99",
                            weekday: "جمعه",
                            weekcal: "29 بهمن 99",
                            timeInDayTable: [
                                { id: 1, time: "بین 8:00 تا 12:00" },
                                { id: 2, time: "بین 12:00 تا 16:00" },
                                { id: 3, time: "بین 16:00 تا 20:00" },
                                { id: 4, time: "بین 20:00 تا 00:00" }
                            ]
                        }
                    ]
                }
            ]
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

        addCama() {
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

            this.detailPrice = setUpdateDetailPrice;
        }
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
    /* background-color: $white; */
    border-radius: 10px;
    min-height: 193px;
    height: fit-content;
}
.user-cart__shipping-address {
    @include display-flex();
    flex-direction: column;
    background-color: $white;
    border-radius: 10px;
    padding: 0 24px 30px 24px;
    margin-bottom: 16px;
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
    height: 142px;
    z-index: 1;
    box-shadow: 0px 8px 16px $box__shadow;
    border-radius: 10px 10px 0px 0px;
}
.user-cart__time-title {
    font-size: 18px;
    line-height: 140.62%;
    color: $black-topic;
    text-align: right;
    margin: 27px 38px 30px 0;
}
.user-cart__order-time__container {
    width: 100%;
    height: fit-content;
    background-color: $white;
    box-shadow: 0px 8px 16px $box__shadow;
    border-radius: 0px 0px 10px 10px;
    padding-top: 14px;
}
.user-cart__time-nav__holder {
    @include display-flex();
    flex-direction: row;
    /* box-shadow: 0px 8px 16px $box__shadow; */

    padding: 0 38px;
    width: 100%;
    height: 60px;
}
.user-cart__time-nav__items {
    @include display-flex();
    flex-direction: column;
    justify-content: space-between;
    margin-left: 50px;
}
.user-cart__time-nav__items a {
    color: $gray;
    text-decoration: none;
    font-size: 18px;
    line-height: 140.62%;
}
.user-cart__time-nav__urgent a {
    margin-right: 64px;
}
.item-active {
    & a {
        color: $black-topic;
    }
    .bottomLine {
        align-self: center;
        background-color: $yellow;
        height: 5px;
        width: 115%;
        margin-top: 20px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
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
    .user-cart__shipping-container {
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
    .user-cart__time-nav__holder {
        /* justify-content: space-between; */
        padding: 15px 30px 0 30px;
        height: 51px;
        /* border: 1px solid red; */
    }
    .user-cart__time-nav__items a {
        font-size: 13px;
    }
    .user-cart__time-nav__urgent a {
        margin-right: 0;
    }
    .item-active {
        & a {
            color: $code;
        }
        .bottomLine {
            height: 4px;
            width: 115%;
            margin-top: 10px;
        }
    }
    .user-cart__time-topic__holder {
        height: 102px;
    }
    .user-cart__time-title {
        font-size: 14px;
        margin: 16px 11px 16px 0;
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
    }
    .user-cart__shipping-address {
        padding: 0 11px;
        margin-bottom: 8px;
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
@media (max-width: 540px) {
    .user-cart__time-nav__holder {
        justify-content: space-between;
        padding: 15px 37px 0 37px;
    }
    .user-cart__time-nav__items {
        margin-left: 0;
    }
}
@media (max-width: 280px) {
    .user-cart__shipping-address {
        padding: 0 3px;
    }
    .user-cart__time-nav__holder {
        padding: 15px 17px 0 17px;
    }
}
</style>
