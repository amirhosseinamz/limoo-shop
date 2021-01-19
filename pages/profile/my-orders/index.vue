<template>
    <div class="profile-container">
        <the-profile-side-bar class="desktop-screen" />

        <div class="mobile-screen">
            <div class="mobile-screen__holder">
                <span class="mobile-screen__holder-txt">سفارش های من</span>
                <img
                    @click="goToProfile"
                    class="mobile-screen__holder-arrow"
                    src="/icons/arrow-left.svg"
                />
            </div>
        </div>

        <div class="user-profile__holder">
            <div class="user-profile">
                <span class="user-profile__topic">لیست سفارشات شما</span>
                <div class="order-nav d-rtl">
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
                    <paid-in-progress
                        v-show="paidInProgress"
                        :in-progress-order-data="inProgressOrderData"
                    ></paid-in-progress>
                    <delivered v-show="delivered"></delivered>
                    <returned v-show="returned"></returned>
                    <canceled v-show="canceled"></canceled>
                </div>
                <!-- call paid in progress component -->
                <!-- <the-user-history
                    @event-show-modal-delete-history="
                        eventShowModalDeleteHistory
                    "
                    :history-data="historyData"
                ></the-user-history> -->
            </div>
        </div>

        <!-- <TheModalDeleteUserHistory
            :active.sync="showModalDeleteHistory"
            :current-history="currentHistory"
            @btn-delete-history="btnDeleteHistory"
        /> -->
    </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import PaidInProgress from "~/components/Profile/UserOrder/PaidInProgress.vue";
import Delivered from "~/components/Profile/UserOrder/Delivered.vue";
import Returned from "~/components/Profile/UserOrder/Returned.vue";
import Canceled from "~/components/Profile/UserOrder/Canceled.vue";

export default {
    components: {
        TheProfileSideBar,
        PaidInProgress,
        Delivered,
        Returned,
        Canceled
    },

    data() {
        return {
            paidInProgress: false,
            delivered: false,
            returned: false,
            canceled: false,
            inProgressOrderData: [
                {
                    id: 1,
                    orderCode: "6861457M",
                    orderPrice: "850,000",
                    orderData: "1399/04/05",
                    orderSituation: "تحویل داده شده",
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
                    orderSituation: "تحویل داده شده",
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
        if (curentRoute == "/profile/my-orders") {
            this.paidInProgress = true;
        }
    },

    methods: {
        goToProfile() {
            this.$router.push("/");
        },
        goToOrder(page) {
            if (page == "paidInProgress") {
                // this.$router.push(
                //     "/profile/my-orders/?activeTab=paid-in-progress"
                // );
                this.paidInProgress = true;
                this.delivered = false;
                this.returned = false;
                this.canceled = false;
            } else if (page == "delivered") {
                // this.$router.push("/profile/my-orders/?activeTab=delivered");
                this.delivered = true;
                this.paidInProgress = false;
                this.returned = false;
                this.canceled = false;
            } else if (page == "returned") {
                // this.$router.push("/profile/my-orders/?activeTab=returned");
                this.returned = true;
                this.paidInProgress = false;
                this.delivered = false;
                this.canceled = false;
            } else if (page == "canceled") {
                // this.$router.push("/profile/my-orders/?activeTab=canceled");
                this.canceled = true;
                this.paidInProgress = false;
                this.returned = false;
                this.delivered = false;
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
            background-color: $yellow;
            height: 5px;
            width: 100%;
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
}

@media (max-width: 350px) {
}

@media (max-width: 320px) {
}
</style>
