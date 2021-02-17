<template>
    <div class="profile-container">
        <the-profile-side-bar class="desktop-screen" />

        <div class="mobile-screen">
            <div class="mobile-screen__holder">
                <span class="mobile-screen__holder-txt">جزئیات سفارش</span>
                <img
                    @click="goToOrders"
                    class="mobile-screen__holder-arrow"
                    src="/icons/arrow-left.svg"
                />
            </div>
        </div>

        <div class="user-profile__holder">
            <div class="user-profile w-100">
                <div class="user-profile__support d-rtl">
                    <div class="user-profile__top-holder">
                        <span class="user-profile__topic"
                            >سفارش {{ $route.params.id }}</span
                        >
                        <div class="order-factor">
                            <span class="order-factor__title"
                                >دریافت فاکتور</span
                            >
                        </div>
                    </div>
                    <NuxtLink
                        to="/profile/my-orders/in-progress"
                        class="user-profile__back-btn"
                    ></NuxtLink>
                </div>
                <hr class="splicer-line" />
                <div class="user-profile__order-detail d-rtl">
                    <div class="order-desktop__status-holder">
                        <div class="order-part__status">
                            <span class="order-status__title">وضعیت:</span>
                            <span class="order-status__show">{{
                                userOrderData.orderSituation
                            }}</span>
                        </div>
                        <div class="order-part__status">
                            <span class="order-status__date"
                                >تاریخ ثبت سفارش:</span
                            >
                            <span class="order-status__show">{{
                                userOrderData.orderData
                            }}</span>
                        </div>
                        <div class="order-part__status">
                            <span class="order-status__pay"
                                >مبلغ پرداخت شده:</span
                            >
                            <span class="order-status__show">{{
                                userOrderData.orderPrice
                            }}</span>
                            <span class="order-status__toman">تومان</span>
                        </div>
                    </div>
                    <div class="order-desktop__shipment-detail">
                        <div class="shipment-detail__holder">
                            <span class="shipment-detail__person"
                                >تحویل گیرنده:</span
                            >
                            <span class="shipment-detail__person-detail">{{
                                userOrderData.person
                            }}</span>
                        </div>
                        <div class="shipment-detail__holder">
                            <span class="shipment-detail__address"
                                >آدرس تحویل کالا:</span
                            >
                            <span class="shipment-detail__address-detail">{{
                                userOrderData.address
                            }}</span>
                        </div>
                        <div class="shipment-detail__holder">
                            <span class="shipment-detail__tel"
                                >شماره تماس گیرنده:</span
                            >
                            <span class="shipment-detail__tel-detail">{{
                                userOrderData.tel
                            }}</span>
                        </div>
                    </div>
                </div>
                <!-- ============================ -->
                <div class="user-profile__order-mobile d-rtl">
                    <span class="user-profile__topic-order__mobile"
                        >سفارش {{ $route.params.id }}</span
                    >
                    <div class="order-status__mobile-detail">
                        <div class="order-part__status-mobile">
                            <span class="order-status__title-mobile"
                                >وضعیت:</span
                            >
                            <span class="order-status__show-mobile">{{
                                userOrderData.orderSituation
                            }}</span>
                        </div>
                        <!--  -->
                        <div class="order-part__status-mobile">
                            <span class="order-status__pay-mobile"
                                >مبلغ کل واریز شده:</span
                            >
                            <span class="order-status__show-mobile">{{
                                userOrderData.orderPrice
                            }}</span>
                            <span class="order-status__toman-mobile"
                                >تومان</span
                            >
                        </div>
                        <!--  -->
                        <div class="order-part__status-mobile">
                            <span class="order-status__date-mobile"
                                >تاریخ:</span
                            >
                            <span class="order-status__show-mobile">{{
                                userOrderData.orderData
                            }}</span>
                        </div>
                        <!--  -->
                        <div class="order-part__status-mobile">
                            <span class="shipment-detail__person-mobile"
                                >تحویل گیرنده:</span
                            >
                            <span class="order-status__show-mobile">{{
                                userOrderData.person
                            }}</span>
                        </div>
                        <!--  -->
                        <div class="order-part__status-mobile">
                            <span class="shipment-detail__tel-mobile"
                                >شماره تلفن:</span
                            >
                            <span class="order-status__show-mobile">{{
                                userOrderData.tel
                            }}</span>
                        </div>
                        <!--  -->
                        <div class="order-part__status-mobile">
                            <span class="shipment-detail__address-mobile"
                                >آدرس:</span
                            >
                            <span class="order-status__show-mobile">{{
                                userOrderData.address
                            }}</span>
                        </div>
                        <!--  -->
                    </div>
                    <div class="order-factor__mobile">
                        <span class="order-factor__mobile-title"
                            >دریافت فاکتور</span
                        >
                    </div>
                </div>

                <div class="w-100 user-profile-orders-main flex-column">
                    <span class="order-status__detail-title">
                        وضعیت سفارش ها
                    </span>

                    <the-order-detail
                        :user-order-data="userOrderData"
                    ></the-order-detail>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import TheOrderDetail from "~/components/Profile/UserOrder/OrderDetail/TheOrderDetail.vue";
export default {
    components: {
        TheProfileSideBar,
        TheOrderDetail
    },

    data() {
        return {
            userOrderData: {
                id: 1,
                orderCode: "6861457M",
                orderPrice: "850,000",
                orderData: "1399/04/05",
                person: "شروین پیکارجو",
                address: "تهران، خیابان ولیعصر، تقاطع مطهری، کوچه حسینی راد",
                tel: "09120121023",
                orderSituation: "در حال پردازش",
                orders: [
                    {
                        id: 1,
                        title:
                            " اپل واچ سری 1 آلومینیوم آبی اپل واچ سری 1 آلومینیوم",
                        img: "/img/apple-watch-1.png",

                        price: "1,200,000",
                        progress: 1
                    },
                    {
                        id: 2,
                        title:
                            " اپل واچ سری 2 آلومینیوم آبی اپل واچ سری 2 آلومینیوم",
                        img: "/img/apple-watch-2.png",

                        price: "2,200,000",
                        progress: 2
                    },
                    {
                        id: 3,
                        title:
                            " اپل واچ سری 3 آلومینیوم آبی اپل واچ سری 3 آلومینیوم",
                        img: "/img/apple-watch-3.png",

                        price: "3,200,000",
                        progress: 3
                    },
                    {
                        id: 4,
                        title:
                            " اپل واچ سری 4 آلومینیوم آبی اپل واچ سری 4 آلومینیوم",
                        img: "/img/apple-watch-4.png",

                        price: "4،200،000",
                        progress: 4
                    }
                ]
            }
        };
    },

    watch: {},

    mounted() {},

    methods: {
        goToOrders() {
            this.$router.push("/profile/my-orders/in-progress");
        }
    }
};
</script>

<style lang="scss" scoped>
#overlay {
    position: fixed; /* Sit on top of the page content */
    @include display-flex();
    justify-content: center;
    align-items: center;
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    /* transition: opacity 200ms ease-out; */
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
    z-index: 1;
    background: $overlay__profile;
}

.mobile-screen,
.user-profile__order-mobile {
    display: none;
}
.order-factor {
    @include display-flex();
    align-self: center;
    height: 64px;
    width: 160px;
    background-color: $white;
    border-right: 1px solid $light-gray;
    margin-right: 24px;
}
.order-factor__title {
    font-size: 16px;
    line-height: 140.62%;
    color: $code-request;
    margin: 19px 0 28px 0;
    text-align: right;
    cursor: pointer;
}
.order-factor__title::before {
    content: "\e812";
    @include font-icon__limoo();
    font-size: 15px;
    color: $code-request;
    cursor: pointer;
    margin-right: 16px;
    margin-left: 8px;
}
.user-profile-orders-main {
    @include display-flex();
    flex-direction: column;
    background: $white;
    width: 100%;
    min-height: 100px;
    height: fit-content;
    border-radius: 10px;
    box-shadow: 0px 8px 16px $box__shadow;
    margin-top: 16px;
    padding: 24px 24px 67px 24px;
}
.profile-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    min-height: 100vh;
    display: flex;
    flex-direction: row-reverse;
}
.user-profile__holder {
    margin: 166px 0 50px 17px;
    width: 100%;
    min-height: 100vh;
    height: max-content;
    /* border: 5px solid #2f0404; */
}
.order-status__detail-title {
    font-size: 18px;
    line-height: 140.62%;
    text-align: right;
}
.user-profile {
    width: 100%;

    height: max-content;
    @include display-flex();
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    text-align: center;
    /* background: $white; */
    border-radius: 10px;
    box-shadow: 0px 8px 16px $box__shadow;
    /* border: 1px solid #f00808; */
    &__support {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background: $white;
        width: 100%;
        height: 96px;
        /* border: 1px solid #f00808; */
    }
    &__order-detail {
        @include display-flex();
        flex-direction: column;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background: $white;
        width: 100%;
        height: 279px;
    }
    &__topic {
        font-size: 18px;
        line-height: 140.62%;
        color: $black-topic;
        align-self: flex-end;
        margin-top: 37px;
        margin-right: 25px;
        margin-bottom: 36px;
        /* border: 1px solid #0c1f9a; */
    }
    &__back-btn {
        text-decoration: none;
        /* border: 1px solid #f00808; */
        @include display-flex();
        flex-direction: row;
        border-right: 1px solid $light-gray;
        height: 64px;
        margin-left: 26px;
        margin-bottom: 16px;
        cursor: initial;
    }
    &__back-btn::after {
        content: "\e801";
        /* border: 1px solid #f00808; */
        @include font-icon__limoo();
        @include display-flex();
        font-size: 15px;
        padding: 4px;
        color: $input-border;
        align-self: center;
        cursor: pointer;
        margin-right: 16px;
    }
}
.user-profile__top-holder {
    @include display-flex();
    height: 100%;
    justify-content: center;
    /* border: 1px solid #f00808; */
}
.item-active {
    & a {
        color: $black-topic;
    }
    .bottomLine {
        align-self: center;
        background-color: $yellow;
        height: 5px;
        width: 170%;
        margin-top: 20px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
}

.order-desktop__status-holder {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 84px;
    /* margin-top: 24px;*/
    padding-left: 153px;
    border-bottom: 1px solid $light-gray;
}
.order-desktop__shipment-detail {
    @include display-flex();
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 31px 24px 41px 0;
    /* border: 1px solid #f00808; */
}
.shipment-detail__holder {
    @include display-flex();
    /* border: 1px solid #f00808; */
    flex-direction: row;
}
.shipment-detail__address,
.shipment-detail__person,
.shipment-detail__tel {
    /* border: 1px solid #f00808; */
    white-space: nowrap;
    font-size: 16px;
    line-height: 140.62%;
    text-align: right;
    color: $gray;
    margin-left: 8px;
}
.shipment-detail__address-detail,
.shipment-detail__person-detail,
.shipment-detail__tel-detail {
    font-size: 16px;
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
}
.shipment-detail__person::before {
    content: "\e823";
    @include font-icon__limoo();
    vertical-align: -10%;
    color: $gray;
    font-size: 18px;
    margin-left: 8px;
}
.shipment-detail__address::before {
    content: "\e817";
    @include font-icon__limoo();
    vertical-align: -10%;
    color: $gray;
    font-size: 18px;
    margin-left: 8px;
}
.shipment-detail__tel::before {
    content: "\e81f";
    @include font-icon__limoo();
    vertical-align: -10%;
    color: $gray;
    font-size: 18px;
    margin-left: 8px;
}
.order-part__status {
    @include display-flex();
    flex-direction: row;
    height: 100%;
    /* border: 1px solid #f00808; */
}

.order-status__title,
.order-status__date,
.order-status__pay {
    font-size: 16px;
    line-height: 140.62%;
    text-align: right;
    color: $gray;
    margin: 31px 0 36px 0;
}
.order-status__title::before {
    content: "\e898";
    @include font-icon__limoo();
    vertical-align: -10%;
    color: $gray;
    font-size: 22px;
    margin-left: 11px;
    margin-right: 24.5px;
}
.order-status__date::before {
    content: "\e804";
    @include font-icon__limoo();
    vertical-align: -10%;
    color: $gray;
    font-size: 22px;
    margin-left: 11px;
}
.order-status__pay::before {
    content: "\e897";
    @include font-icon__limoo();
    vertical-align: -10%;
    color: $gray;
    font-size: 22px;
    margin-left: 11px;
}
.order-status__show {
    font-size: 16px;
    line-height: 140.62%;
    text-align: right;
    margin: 32px 8px 34px 0;
    color: $black-topic;
}
.order-status__toman {
    font-size: 16px;
    line-height: 140.62%;
    text-align: right;
    margin: 32px 3px 34px 0;
    color: $black-topic;
}
.splicer-line {
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid $light-gray;
}
.user-profile__topic {
    text-align: right;
}

@media (max-width: 1450px) {
    .order-desktop__status-holder {
        padding-left: 8px;
    }
}

@media (max-width: 1220px) {
    .order-status__detail-title,
    .user-profile__topic {
        font-size: 16px;
    }
    .order-factor {
        margin-right: 15px;
    }
    .order-factor__title {
        font-size: 14px;
        margin: 22px 0 28px 0;
    }
    .order-factor__title::before {
        font-size: 14px;
        margin-right: 10px;
        margin-left: 5px;
    }
    .order-status__title,
    .order-status__date,
    .order-status__pay {
        font-size: 14px;
        white-space: nowrap;
    }
    .order-status__title::before {
        font-size: 16px;
        margin-left: 5px;
        margin-right: 10px;
    }
    .order-status__date::before {
        font-size: 16px;
        margin-left: 5px;
    }
    .order-status__pay::before {
        font-size: 16px;
        margin-left: 5px;
    }
    .order-status__show {
        font-size: 14px;
        margin: 32px 5px 34px 0;
        white-space: nowrap;
    }
    .order-status__toman {
        font-size: 14px;
        margin: 32px 2px 34px 0;
    }
    /*  */
    .order-desktop__shipment-detail {
        padding: 31px 14px 41px 0;
    }
    .shipment-detail__holder {
        @include display-flex();
        flex-direction: row;
    }
    .shipment-detail__address,
    .shipment-detail__person,
    .shipment-detail__tel {
        font-size: 14px;
        margin-left: 5px;
    }
    .shipment-detail__address-detail,
    .shipment-detail__person-detail,
    .shipment-detail__tel-detail {
        font-size: 14px;
    }
    .shipment-detail__person::before {
        font-size: 16px;
        margin-left: 5px;
    }
    .shipment-detail__address::before {
        font-size: 16px;
        margin-left: 5px;
    }
    .shipment-detail__tel::before {
        font-size: 16px;
        margin-left: 5px;
    }
    /*  */
}

@media (max-width: 960px) {
    .desktop-screen {
        display: none;
    }
    .splicer-line,
    .user-profile__order-detail,
    .user-profile__support {
        display: none;
    }
    .user-profile-orders-main {
        margin-top: 8px;
        padding: 13px 21px 51px 21px;
    }
    .order-status__detail-title {
        font-size: 14px;
    }
    /* ================== */

    .item-active {
        & a {
            color: $black-topic;
        }
        .bottomLine-mobile {
            align-self: center;
            background-color: $yellow;
            height: 4px;
            width: 150%;
            margin-top: 15px;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        }
    }
    /* ============= */
    .user-profile__order-mobile {
        @include display-flex();
        flex-direction: column;
        background: $white;
        min-height: 369px;
        height: fit-content;
        width: 100%;
        border-radius: 10px;
        box-shadow: 0px 8px 16px $box__shadow;
    }
    .user-profile__topic-order__mobile {
        @include display-flex();
        align-items: center;
        height: 59px;
        width: 100%;
        font-size: 16px;
        color: $code;
        padding-right: 21px;
        text-align: right;
        border-bottom: 1px solid $gray-border;
    }
    .order-part__status-mobile {
        @include display-flex();
        flex-direction: row;
        width: 100%;
        margin-top: 15px;
        /* border: 1px solid red; */
    }
    /* /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
    .order-status__title-mobile,
    .order-status__show-mobile,
    .order-status__pay-mobile,
    .order-status__date-mobile,
    .shipment-detail__person-mobile,
    .shipment-detail__tel-mobile,
    .shipment-detail__address-mobile {
        font-size: 14px;
        line-height: 140.62%;
        text-align: right;
        color: $gray;
    }
    .shipment-detail__address-mobile {
        white-space: nowrap;
    }
    .order-status__title-mobile::before {
        content: "\e898";
        @include font-icon__limoo();
        vertical-align: -15%;
        color: $gray;
        font-size: 17px;
        margin-left: 12px;
    }
    .order-status__pay-mobile::before {
        content: "\e897";
        @include font-icon__limoo();
        vertical-align: -15%;
        color: $gray;
        font-size: 17px;
        margin-left: 12px;
    }
    .order-status__date-mobile::before {
        content: "\e804";
        @include font-icon__limoo();
        vertical-align: -15%;
        color: $gray;
        font-size: 17px;
        margin-left: 12px;
    }
    .shipment-detail__person-mobile::before {
        content: "\e823";
        @include font-icon__limoo();
        vertical-align: -15%;
        color: $gray;
        font-size: 17px;
        margin-left: 12px;
    }
    .shipment-detail__tel-mobile::before {
        content: "\e81f";
        @include font-icon__limoo();
        vertical-align: -15%;
        color: $gray;
        font-size: 17px;
        margin-left: 12px;
    }
    .shipment-detail__address-mobile::before {
        content: "\e817";
        @include font-icon__limoo();
        vertical-align: -15%;
        color: $gray;
        font-size: 17px;
        margin-left: 12px;
    }
    .order-status__show-mobile {
        margin-right: 4px;
        color: $black-topic;
    }
    .order-status__toman-mobile {
        font-size: 14px;
        line-height: 140.62%;
        text-align: right;
        margin-right: 2px;
        color: $black-topic;
    }
    .order-status__mobile-detail {
        @include display-flex();
        flex-direction: column;
        justify-content: space-between;
        /* border: 1px solid red; */
        min-height: 240px;
        height: fit-content;
        width: 100%;
        padding-right: 21px;
        padding-top: 9px;
    }
    .order-factor__mobile {
        @include display-flex();
        justify-content: center;
        align-self: center;
        height: 70px;
        width: 100%;
    }
    .order-factor__mobile-title {
        font-size: 14px;
        line-height: 140.62%;
        color: $code-request;
        margin: 25px 0 24.5px 0;
        cursor: pointer;
    }
    .order-factor__mobile-title::before {
        content: "\e812";
        @include font-icon__limoo();
        font-size: 22px;
        vertical-align: -10%;
        color: $code-request;
        cursor: pointer;
        margin-left: 8px;
    }
    .mobile-screen {
        display: block;
        &__holder {
            @include display-flex();
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            height: 56px;
            background: $white;
            margin-top: 47px;
            &-txt {
                font-size: 14px;
                line-height: 140.62%;
                margin-right: 16px;
                color: $black-topic;
            }
            &-arrow {
                margin-left: 16px;
            }
        }
    }
    .profile-container {
        @include display-flex();
        flex-direction: column;
        margin-bottom: 58px;
    }
    .user-profile__holder {
        margin: 8px 0;
        padding: 0 16px;
    }
    .user-profile {
        &__topic {
            display: none;
        }
    }
}

@media (max-width: 600px) {
    .user-profile {
        background: none;
        border: none;
        box-shadow: none;
    }
    .user-profile__holder {
        padding: 0 5px;
    }
    .user-profile-orders-main {
        padding: 13px 11px 51px 11px;
    }
    .order-status__mobile-detail {
        padding-right: 11px;
    }
    .user-profile__topic-order__mobile {
        padding-right: 11px;
    }
}

@media (max-width: 350px) {
}

@media (max-width: 320px) {
}
@media (max-width: 280px) {
    .user-profile__topic-order__mobile {
        font-size: 14px;
    }
    .order-status__mobile-detail {
        padding-right: 5px;
    }
}
</style>
