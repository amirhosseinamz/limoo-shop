<template>
    <div class="profile-container">
        <the-profile-side-bar class="desktop-screen" />

        <div class="mobile-screen">
            <div class="mobile-screen__holder">
                <span class="mobile-screen__holder-txt">{{staticDataLanguage.lang_orders_order_my}}</span>
                <span
                    @click="goToProfile"
                    class="mobile-screen__holder-arrow"
                ></span>
            </div>
        </div>

        <div class="user-profile__holder">
            <div class="user-profile">
                <div class="desktop-nav">
                    <span class="user-profile__topic">{{staticDataLanguage.lang_orders_order_list_text}}</span>
                    <div class="order-nav d-rtl">
                        <div
                            @click="goToOrder('waitForPayment')"
                            :class="{ 'item-active': waitForPayment }"
                            class="order-nav__items"
                        >
                            <div class="order-nav__items-holder">
                                <NuxtLink to="">{{staticDataLanguage.lang_orders_tab_waiting_for_payment}}</NuxtLink
                                ><span class="order-counter">2</span>
                            </div>
                            <span class="bottomLine"></span>
                        </div>
                        <div
                            @click="goToOrder('paidInProgress')"
                            :class="{ 'item-active': paidInProgress }"
                            class="order-nav__items"
                        >
                            <NuxtLink to="">{{staticDataLanguage.lang_orders_tab_processing}}</NuxtLink>
                            <span class="bottomLine"></span>
                        </div>
                        <div
                            @click="goToOrder('delivered')"
                            :class="{ 'item-active': delivered }"
                            id="item-delivered"
                            class="order-nav__items "
                        >
                            <NuxtLink to="">{{staticDataLanguage.lang_orders_tab_delivered}}</NuxtLink>
                            <span class="bottomLine"></span>
                        </div>
                        <div
                            @click="goToOrder('returned')"
                            :class="{ 'item-active': returned }"
                            class="order-nav__items "
                        >
                            <NuxtLink to="">{{staticDataLanguage.lang_orders_tab_referred}}</NuxtLink>
                            <span class="bottomLine"></span>
                        </div>
                        <div
                            @click="goToOrder('canceled')"
                            :class="{ 'item-active': canceled }"
                            class="order-nav__items "
                        >
                            <NuxtLink to="">{{staticDataLanguage.lang_orders_tab_canceled}}</NuxtLink>
                            <span class="bottomLine"></span>
                        </div>
                    </div>
                </div>
                <div class="order-holder">
                    <the-delivered
                        :user-order-data="userOrderData"
                         :static-data-language="staticDataLanguage"
                    ></the-delivered>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import TheDelivered from "~/components/Profile/UserOrder/TheDelivered.vue";
import resource from "~/modules/resource.js";
import splitPartJsonResource from "~/modules/splitPartJsonResource.js";

export default {
    middleware: "authentication",
    layout      : "removeFooterMobile",
    components: {
        TheProfileSideBar,
        TheDelivered
    },

    data() {
        return {
            paidInProgress: false,
            delivered: false,
            returned: false,
            canceled: false,
            waitForPayment : false,
            userOrderData: [
                // {
                //     id: 1,
                //     orderCode: "6861457M",
                //     orderPrice: "850,000",
                //     orderData: "1399/04/05",
                //     orderSituation: "تحویل داده شده",
                //     orders: [
                //         {
                //             id: 1,
                //             title:
                //                 " اپل واچ سری 1 آلومینیوم آبی اپل واچ سری 1 آلومینیوم",
                //             img: "/img/apple-watch-1.png"
                //         },
                //         {
                //             id: 2,
                //             title:
                //                 " اپل واچ سری 2 آلومینیوم آبی اپل واچ سری 2 آلومینیوم",
                //             img: "/img/apple-watch-2.png"
                //         },
                //         {
                //             id: 3,
                //             title:
                //                 " اپل واچ سری 3 آلومینیوم آبی اپل واچ سری 3 آلومینیوم",
                //             img: "/img/apple-watch-3.png"
                //         },
                //         {
                //             id: 4,
                //             title:
                //                 " اپل واچ سری 4 آلومینیوم آبی اپل واچ سری 4 آلومینیوم",
                //             img: "/img/apple-watch-4.png"
                //         }
                //     ]
                // },
                // {
                //     id: 2,
                //     orderCode: "6861457L",
                //     orderPrice: "450,000",
                //     orderData: "1399/04/06",
                //     orderSituation: "تحویل داده شده",
                //     orders: [
                //         {
                //             id: 3,
                //             title:
                //                 " اپل واچ سری 3 آلومینیوم آبی اپل واچ سری 3 آلومینیوم",
                //             img: "/img/apple-watch-3.png"
                //         },
                //         {
                //             id: 4,
                //             title:
                //                 " اپل واچ سری 4 آلومینیوم آبی اپل واچ سری 4 آلومینیوم",
                //             img: "/img/apple-watch-4.png"
                //         }
                //     ]
                // },
                // {
                //     id: 3,
                //     orderCode: "6861457M",
                //     orderPrice: "850,000",
                //     orderData: "1399/04/05",
                //     orderSituation: "لغو شده",
                //     orders: [
                //         {
                //             id: 1,
                //             title:
                //                 " اپل واچ سری 1 آلومینیوم آبی اپل واچ سری 1 آلومینیوم",
                //             img: "/img/apple-watch-1.png"
                //         },
                //         {
                //             id: 2,
                //             title:
                //                 " اپل واچ سری 2 آلومینیوم آبی اپل واچ سری 2 آلومینیوم",
                //             img: "/img/apple-watch-2.png"
                //         },
                //         {
                //             id: 3,
                //             title:
                //                 " اپل واچ سری 3 آلومینیوم آبی اپل واچ سری 3 آلومینیوم",
                //             img: "/img/apple-watch-3.png"
                //         },
                //         {
                //             id: 4,
                //             title:
                //                 " اپل واچ سری 4 آلومینیوم آبی اپل واچ سری 4 آلومینیوم",
                //             img: "/img/apple-watch-4.png"
                //         }
                //     ]
                // }
            ],

            currentOrder: {}
        };
    },

    watch: {},

    created() {
      const resourceOrders   = resource('orders');
      const resourcePublic   = resource('public');

      this.setLangData(resourceOrders,resourcePublic);
    },

    mounted() {
        const curentRoute = this.$route.path;
        // const activeTab = this.$route.query.activeTab;
        if (curentRoute == "/profile/my-orders/delivered") {
            this.delivered = true;
            // this.delivered = false;
            // this.returned = false;
            // this.canceled = false;
        }
        const elmnt = document.getElementById("item-delivered");
        // elmnt.scrollIntoView();
        elmnt.scrollIntoView({
            behavior: "auto",
            block: "end",
            inline: "center"
        });
    },

    methods: {
      setLangData(orders,resourcePublic){
          const language           = this.$store.state.language;
          const staticDataLanguage = {
             'lang_orders_order_my'                   :  splitPartJsonResource(orders,'orders_order_my',language).languageData.text,
             'lang_orders_order_status'               :  splitPartJsonResource(orders,'orders_order_status',language).languageData.text,
             'lang_orders_order_price'                :  splitPartJsonResource(orders,'orders_order_price',language).languageData.text,
             'lang_orders_order_date'                 :  splitPartJsonResource(orders,'orders_order_date',language).languageData.text,
             'lang_orders_code_order'                 :  splitPartJsonResource(orders,'orders_code_order',language).languageData.text,
             'lang_orders_see_product'                :  splitPartJsonResource(orders,'orders_see_product',language).languageData.text,
             'lang_orders_tab_canceled'               :  splitPartJsonResource(orders,'orders_tab_canceled',language).languageData.text,
             'lang_orders_tab_referred'               :  splitPartJsonResource(orders,'orders_tab_referred',language).languageData.text,
             'lang_orders_tab_delivered'              :  splitPartJsonResource(orders,'orders_tab_delivered',language).languageData.text,
             'lang_orders_tab_processing'             :  splitPartJsonResource(orders,'orders_tab_processing',language).languageData.text,
             'lang_orders_tab_waiting_for_payment'    :  splitPartJsonResource(orders,'orders_tab_waiting_for_payment',language).languageData.text,
             'lang_orders_empty'                      :  splitPartJsonResource(orders,'orders_empty',language).languageData.text,
             'lang_orders_order_list_text'            :  splitPartJsonResource(orders,'orders_order_list_text',language).languageData.text,

        };

          staticDataLanguage.public_unit  =  splitPartJsonResource(resourcePublic,'public_unit',language).languageData.text;
          this.staticDataLanguage         = staticDataLanguage;
        },

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
            } else if (page == "waitForPayment") {
                this.$router.push("/profile/my-orders/wait-for-payment");
                this.waitForPayment = true;
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
.order-nav__items-holder {
    @include display-flex();
    flex-direction: row;
    align-items: center;
    width: fit-content;
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
.desktop-nav {
    @include display-flex();
    flex-direction: column;
    width: 100%;
    background-color: $white;
    border-radius: 10px;
}
.user-profile {
    width: 100%;

    min-height: 139px;
    @include display-flex();
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    text-align: center;
    /* background: $white; */
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
    /* padding-bottom: 70px; */
    border-radius: 10px;
    /* border: 1px solid blue; */
}
.order-counter {
    @include display-flex();
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: $red-color;
    background-color: $bg-libht__red;
    margin-right: 5px;
    font-size: 16px;
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
        padding: 0 16px;
    }
    .user-profile {
        height: 62px;

        &__topic {
            display: none;
        }
    }
}
@media (max-width: 700px) {
    .order-counter {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        color: $red-color;
        background-color: $bg-libht__red;
        margin-right: 3px;
        font-size: 11px;
    }
    .user-profile__holder {
        margin: 0;
        padding: 0;
        border-top: 1px solid $light-gray;
    }
    .desktop-nav {
        @include display-flex();
        flex-direction: column;
        width: 100%;
        background-color: $white;
        border-radius: 0;
        margin-bottom: 8px;
    }
    .order-holder {
        padding: 0 5px;
    }
    .order-nav__items a {
        font-size: 13px;
        white-space: nowrap;
    }
    .order-nav__items {
        margin-left: 24px;
    }
    .order-nav__items:last-of-type {
        padding-left: 16px;
    }
    .order-nav {
        @include display-flex();
        /* flex-direction: row; */
        flex-flow: row;
        overflow: auto;
        justify-content: space-between;
        margin-top: 0;
        height: 51px;
        width: 100%;
        /* border: 1px solid blue; */
        padding: 16px 16px 0 16px;
        .item-active {
            & a {
                color: $code;
            }
            .bottomLine {
                height: 4px;
                width: 110%;
                margin-top: 12px;
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
            }
        }
    }
}

@media (max-width: 350px) {
}

@media (max-width: 320px) {
}
</style>
