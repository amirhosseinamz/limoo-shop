<template>
    <div class="profile-container">
        <the-profile-side-bar class="desktop-screen" />

        <div class="mobile-screen">
            <div class="mobile-screen__holder">
                <span class="mobile-screen__holder-txt">سفارش های من</span>
                <span
                    @click="goToProfile"
                    class="mobile-screen__holder-arrow"
                ></span>
            </div>
        </div>

        <div class="user-profile__holder">
            <div class="user-profile">
                <span class="user-profile__topic">لیست سفارشات شما</span>
                <div class="order-nav desktop-screen d-rtl">
                    <div
                        @click="goToOrder('paidInProgress')"
                        :class="{ 'item-active': paidInProgress }"
                        class="order-nav__items"
                    >
                        <NuxtLink to="">در حال پردازش</NuxtLink>
                        <span class="bottomLine"></span>
                    </div>
                    <div
                        @click="goToOrder('delivered')"
                        :class="{ 'item-active': delivered }"
                        class="order-nav__items "
                    >
                        <NuxtLink to="">تحویل داده شده</NuxtLink>
                        <span class="bottomLine"></span>
                    </div>
                    <div
                        @click="goToOrder('returned')"
                        :class="{ 'item-active': returned }"
                        class="order-nav__items "
                    >
                        <NuxtLink to="">مرجوع شده</NuxtLink>
                        <span class="bottomLine"></span>
                    </div>
                    <div
                        @click="goToOrder('canceled')"
                        :class="{ 'item-active': canceled }"
                        class="order-nav__items "
                    >
                        <NuxtLink to="">لغو شده</NuxtLink>
                        <span class="bottomLine"></span>
                    </div>
                </div>
                <div class="order-holder">
                    <div
                        @click="goToOrder('paidInProgress')"
                        class="mobile-nav__order-inprogress d-rtl"
                    >
                        <span class="mobile-inprogress__count">2</span>
                        <span class="mobile-inprogress__title"
                            >در حال پردازش</span
                        >
                        <span class="mobile-inprogress__arrow"></span>
                    </div>

                    <div
                        @click="goToOrder('delivered')"
                        class="mobile-nav__order-delivered d-rtl"
                    >
                        <span class="mobile-delivered__count">1</span>
                        <span class="mobile-delivered__title"
                            >تحویل داده شده</span
                        >
                        <span class="mobile-delivered__arrow"></span>
                    </div>
                    <div
                        @click="goToOrder('returned')"
                        class="mobile-nav__order-returned d-rtl"
                    >
                        <span class="mobile-returned__count">2</span>
                        <span class="mobile-returned__title">مرجوع شده</span>
                        <span class="mobile-returned__arrow"></span>
                    </div>
                    <div
                        @click="goToOrder('canceled')"
                        class="mobile-nav__order-canceled d-rtl"
                    >
                        <span class="mobile-canceled__count">2</span>
                        <span class="mobile-canceled__title">لغو شده</span>
                        <span class="mobile-canceled__arrow"></span>
                    </div>
                    <the-canceled
                        :user-order-data="userOrderData"
                    ></the-canceled>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import TheCanceled from "~/components/Profile/UserOrder/TheCanceled.vue";

export default {
    middleware: "authentication",
    components: {
        TheProfileSideBar,
        TheCanceled
    },

    data() {
        return {
            paidInProgress: false,
            delivered: false,
            returned: false,
            canceled: false,
            userOrderData: [
                {
                    id: 1,
                    orderCode: "6861457M",
                    orderPrice: "850,000",
                    orderData: "1399/04/05",
                    orderSituation: "لغو شده",
                    orders: [
                        {
                            id: 1,
                            title:
                                " اپل واچ سری 1 آلومینیوم آبی اپل واچ سری 1 آلومینیوم",
                            img: "/img/apple-watch-1.png"
                        },
                        {
                            id: 2,
                            title:
                                " اپل واچ سری 2 آلومینیوم آبی اپل واچ سری 2 آلومینیوم",
                            img: "/img/apple-watch-2.png"
                        },
                        {
                            id: 3,
                            title:
                                " اپل واچ سری 3 آلومینیوم آبی اپل واچ سری 3 آلومینیوم",
                            img: "/img/apple-watch-3.png"
                        },
                        {
                            id: 4,
                            title:
                                " اپل واچ سری 4 آلومینیوم آبی اپل واچ سری 4 آلومینیوم",
                            img: "/img/apple-watch-4.png"
                        }
                    ]
                },
                {
                    id: 2,
                    orderCode: "6861457L",
                    orderPrice: "450,000",
                    orderData: "1399/04/06",
                    orderSituation: "لغو شده",
                    orders: [
                        {
                            id: 3,
                            title:
                                " اپل واچ سری 3 آلومینیوم آبی اپل واچ سری 3 آلومینیوم",
                            img: "/img/apple-watch-3.png"
                        },
                        {
                            id: 4,
                            title:
                                " اپل واچ سری 4 آلومینیوم آبی اپل واچ سری 4 آلومینیوم",
                            img: "/img/apple-watch-4.png"
                        }
                    ]
                }
            ],
            // inProgressOrderData: [
            //     {
            //         id: 1,
            //         title:
            //             " اپل واچ سری 1 آلومینیوم آبی اپل واچ سری 1 آلومینیوم",
            //         img: "/img/apple-watch-1.png"
            //     },
            //     {
            //         id: 2,
            //         title:
            //             " اپل واچ سری 2 آلومینیوم آبی اپل واچ سری 2 آلومینیوم",
            //         img: "/img/apple-watch-2.png"
            //     },
            //     {
            //         id: 3,
            //         title:
            //             " اپل واچ سری 3 آلومینیوم آبی اپل واچ سری 3 آلومینیوم",
            //         img: "/img/apple-watch-3.png"
            //     },
            //     {
            //         id: 4,
            //         title:
            //             " اپل واچ سری 4 آلومینیوم آبی اپل واچ سری 4 آلومینیوم",
            //         img: "/img/apple-watch-4.png"
            //     }
            // ],
            currentOrder: {}
        };
    },

    watch: {},

    mounted() {
        const curentRoute = this.$route.path;
        // const activeTab = this.$route.query.activeTab;
        if (curentRoute == "/profile/my-orders/canceled") {
            this.canceled = true;
            // this.delivered = false;
            // this.returned = false;
            // this.canceled = false;
        }
    },

    methods: {
        goToProfile() {
            this.$router.push("/profile");
        },
        goToOrder(page) {
            if (page == "paidInProgress") {
                this.$router.push("/profile/my-orders/in-progress");
                this.paidInProgress = true;
            } else if (page == "delivered") {
                this.$router.push("/profile/my-orders/delivered");
                this.delivered = true;
            } else if (page == "returned") {
                this.$router.push("/profile/my-orders/returned");
                this.returned = true;
            } else if (page == "canceled") {
                this.$router.push("/profile/my-orders/canceled");
                this.canceled = true;
            }
        }
        // request //
    }
};
</script>

<style lang="scss" scoped>
.mobile-screen {
    display: none;
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
.user-profile {
    width: 100%;

    height: 139px;
    @include display-flex();
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    text-align: center;
    background: $white;
    border-radius: 10px;
    box-shadow: 0px 8px 16px $box__shadow;
    /* border: 1px solid #f00808; */
    &__topic {
        font-size: 18px;
        line-height: 140.62%;
        color: $black-topic;
        align-self: flex-end;
        margin-top: 23px;
        margin-right: 38px;
    }
}
.order-nav {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    height: 51px;
    width: 100%;
    /* border: 1px solid blue; */
    padding: 0 38px;
    &__items {
        @include display-flex();
        flex-direction: column;
        justify-content: space-between;
        /* border: 1px solid blue; */
    }
    &__items a {
        color: $gray;
        text-decoration: none;
        font-size: 18px;
        line-height: 140.62%;
    }
    .item-active {
        & a {
            color: $black-topic;
        }
        .bottomLine {
            align-self: center;
            background-color: $yellow;
            height: 5px;
            width: 125%;
            margin-top: 20px;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        }
    }
}
.order-holder {
    width: 100%;
    /* background: $white; */
    height: max-content;
    padding-bottom: 70px;
    border-radius: 10px;
    /* border: 1px solid blue; */
}
.mobile-nav__order-inprogress,
.mobile-nav__order-delivered,
.mobile-nav__order-returned,
.mobile-nav__order-canceled {
    display: none;
}
@media (max-width: 1450px) {
}
@media (max-width: 1220px) {
}
@media (max-width: 960px) {
    .desktop-screen {
        display: none;
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
            &-arrow::before {
                content: "\e801";
                @include font-icon__limoo();
                font-size: 14px;
                color: $input-border;
                margin-right: 4px;
                margin-left: 8px;
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
        padding: 0 5px;
    }
    .user-profile {
        height: 62px;
        &__topic {
            display: none;
        }
    }

    .mobile-nav__order-inprogress,
    .mobile-nav__order-delivered,
    .mobile-nav__order-returned,
    .mobile-nav__order-canceled {
        @include display-flex();
        flex-direction: row;
        align-items: center;
        height: 62px;
        /* border-bottom: 1px solid $gray-border; */
        /* border: 1px solid red; */
    }
    .mobile-nav__order-delivered,
    .mobile-nav__order-returned,
    .mobile-nav__order-canceled {
        background: $white;
        margin-top: 8px;
        box-shadow: 0px 8px 16px $box__shadow;
        border-radius: 10px;
    }

    .mobile-nav__order-canceled {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .mobile-inprogress__title,
    .mobile-delivered__title,
    .mobile-returned__title,
    .mobile-canceled__title {
        font-size: 16px;
        line-height: 140.62%;
        color: $black-topic;
        margin-right: 8px;
    }
    .mobile-inprogress__arrow,
    .mobile-delivered__arrow,
    .mobile-returned__arrow,
    .mobile-canceled__arrow {
        @include display-flex();
        /* border: 1px solid red; */
        margin-right: auto;
    }
    .mobile-inprogress__arrow::after,
    .mobile-delivered__arrow::after,
    .mobile-returned__arrow::after,
    .mobile-canceled__arrow::after {
        content: "\e801";
        @include font-icon__limoo();
        font-size: 12px;
        color: $input-border;
        margin-left: 11px;
        transform: rotate(90deg);
    }
    .mobile-delivered__arrow::after,
    .mobile-returned__arrow::after,
    .mobile-inprogress__arrow::after {
        transform: rotate(-90deg);
    }
    .mobile-inprogress__count,
    .mobile-delivered__count,
    .mobile-returned__count,
    .mobile-canceled__count {
        background-color: $notif-inprogress__bg;
        margin-right: 11px;
        padding-top: 4px;
        font-size: 16px;
        line-height: 140.62%;
        color: $yellow;
        width: 30px;
        height: 30px;
        border: 1px solid transparent;
        box-sizing: border-box;
        /* box-shadow: 0px 4px 4px rgba(255, 204, 64, 0.49); */
        border-radius: 50%;
    }
    .mobile-delivered__count {
        background-color: $notif-delivered__bg;
        color: $code-request;
        border: 1px solid transparent;
    }
    .mobile-returned__count {
        background-color: $notif-returned__bg;
        color: $red-logout;
        border: 1px solid transparent;
    }
    .mobile-canceled__count {
        background-color: $notif-canceled__bg;
        color: $gray;
        border: 1px solid transparent;
    }
}
@media (max-width: 600px) {
}

@media (max-width: 350px) {
}

@media (max-width: 320px) {
}
</style>
