<template>
    <div class="container">
        <the-user-info />
        <div class="profile-sidebar">
            <!-- =section1= -->
            <div class="profile-sidebar__flex profile-sidebar__user">
                <div class="profile-sidebar__flex-part">
                    <img
                        class="profile-sidebar__user-icon"
                        :class="{ 'profile-item__activated': profileIsActive }"
                        src="/icons/profile-dark.svg"
                    />
                    <NuxtLink
                        :class="{ 'link-item__activated': profileIsActive }"
                        to="/profile"
                    >
                        پروفایل کاربری</NuxtLink
                    >
                </div>
            </div>
            <!-- =section2= -->
            <div class="profile-sidebar__flex profile-sidebar__order">
                <div class="profile-sidebar__flex-part">
                    <img
                        :class="{ 'profile-item__activated': muOrdersIsActive }"
                        class="profile-sidebar__order-icon"
                        src="/icons/order.svg"
                    />
                    <NuxtLink
                        :class="{ 'link-item__activated': muOrdersIsActive }"
                        to="/profile/my-orders"
                    >
                        سفارش های من</NuxtLink
                    >
                </div>
                <img
                    @click="goToMyOrders"
                    class="profile-sidebar__arrow-left"
                    src="/icons/arrow-left.svg"
                />
            </div>
            <hr class="splicer" />
            <div
                class="splicer_down profile-sidebar__flex profile-sidebar__flex profile-sidebar__favorite"
            >
                <div class="profile-sidebar__flex-part">
                    <img
                        class="profile-sidebar__favorite-icon"
                        src="/icons/heart.svg"
                    />
                    <NuxtLink
                        to="/profile/favorites"
                        :class="{ 'link-item__activated': favoriteActive }"
                        >کالا های مورد علاقه</NuxtLink
                    >
                </div>
                <img
                    class="profile-sidebar__arrow-left"
                    src="/icons/arrow-left.svg"
                />
            </div>
            <!-- =section3= -->
            <!--/// notification section is ignored in version alpha ///-->
            <!-- <div class=" profile-sidebar__flex profile-sidebar__notification">
                <div class="profile-sidebar__flex-part">
                    <img
                        class="profile-sidebar__notification-icon"
                        src="/icons/message.svg"
                    />
                    <NuxtLink to="">پیام های من</NuxtLink>
                </div>
                <div class="profile-sidebar__flex-part">
                    <div class="message-holder">
                        <span class="message-counter">2</span>
                    </div>
                    <img
                        class="profile-sidebar__arrow-left"
                        src="/icons/arrow-left.svg"
                    />
                </div>
            </div> -->
            <!--/// ===================================================== ///-->
            <hr class="splicer" />
            <div class=" profile-sidebar__flex profile-sidebar__personal-info">
                <div class="profile-sidebar__flex-part">
                    <img
                        class="profile-sidebar__personal-info-icon"
                        :class="{
                            'profile-item__activated': personalInfoIsActive
                        }"
                        src="/icons/setting.svg"
                    />
                    <NuxtLink
                        :class="{
                            'link-item__activated': personalInfoIsActive
                        }"
                        to="/profile/personal-info"
                        >ویرایش اطلاعات شخصی</NuxtLink
                    >
                </div>
                <img
                    @click="goToPersonalInfo"
                    class="profile-sidebar__arrow-left"
                    src="/icons/arrow-left.svg"
                />
            </div>
            <hr class="splicer" />
            <div
                class="splicer_down profile-sidebar__flex profile-sidebar__address"
            >
                <div class="profile-sidebar__flex-part">
                    <img
                        class="profile-sidebar__address-icon"
                        src="/icons/location-profile.svg"
                    />
                    <NuxtLink
                        :class="{
                            'link-item__activated': adressActive
                        }"
                        to="/profile/adresses"
                        >آدرس های من</NuxtLink
                    >
                </div>
                <img
                    class="profile-sidebar__arrow-left"
                    src="/icons/arrow-left.svg"
                />
            </div>
            <!-- =section4= -->
            <div class=" profile-sidebar__flex profile-sidebar__comment">
                <div class="profile-sidebar__flex-part">
                    <img
                        class="profile-sidebar__comment-icon"
                        src="/icons/chat.svg"
                    />
                    <NuxtLink to="">نقد و نظرات من</NuxtLink>
                </div>
                <img
                    class="profile-sidebar__arrow-left"
                    src="/icons/arrow-left.svg"
                />
            </div>
            <hr class="splicer" />
            <div class=" profile-sidebar__flex profile-sidebar__support">
                <div class="profile-sidebar__flex-part">
                    <img
                        class="profile-sidebar__support-icon"
                        src="/icons/call-profile.svg"
                    />
                    <NuxtLink to="">پشتیبانی</NuxtLink>
                </div>
                <img
                    class="profile-sidebar__arrow-left"
                    src="/icons/arrow-left.svg"
                />
            </div>
            <hr class="splicer" />
            <div
                class="splicer_down profile-sidebar__flex profile-sidebar__history"
            >
                <div class="profile-sidebar__flex-part">
                    <img
                        :class="{
                            'profile-item__activated': userHistoryIsActive
                        }"
                        class="profile-sidebar__history-icon"
                        src="/icons/eye-profile.svg"
                    />
                    <NuxtLink
                        :class="{
                            'link-item__activated': userHistoryIsActive
                        }"
                        to="/profile/user-history"
                        >آخرین محصولات دیده شده</NuxtLink
                    >
                </div>
                <img
                    @click="goToUserHistory"
                    class="profile-sidebar__arrow-left"
                    src="/icons/arrow-left.svg"
                />
            </div>
            <!-- =section5= -->
            <!--/// ceditCard and giftCard section are ignored in version alpha ///-->
            <!-- <div class=" profile-sidebar__flex profile-sidebar__creditcard">
                <div class="profile-sidebar__flex-part">
                    <img
                        class="profile-sidebar__creditcard-icon"
                        src="/icons/credit-profile.svg"
                    />
                    <NuxtLink to="">ثبت کارت بانکی</NuxtLink>
                </div>
                <img
                    class="profile-sidebar__arrow-left"
                    src="/icons/arrow-left.svg"
                />
            </div>
            <hr class="splicer" />
            <div
                class="splicer_down profile-sidebar__flex profile-sidebar__gifttcard"
            >
                <div class="profile-sidebar__flex-part">
                    <img
                        class="profile-sidebar__gifttcard-icon"
                        src="/icons/discount.svg"
                    />
                    <NuxtLink to="">کارت هدیه</NuxtLink>
                </div>
                <img
                    class="profile-sidebar__arrow-left"
                    src="/icons/arrow-left.svg"
                />
            </div> -->
            <!--/// ===================================================== ///-->
            <!-- =section6= -->
            <!-- for mobile screen only -->
            <div
                class="mobile-screen profile-sidebar__flex profile-sidebar__privacy"
            >
                <div class="profile-sidebar__flex-part">
                    <img
                        class="profile-sidebar__privacy-icon"
                        src="/icons/privacy.svg"
                    />
                    <NuxtLink to="">حریم شخصی</NuxtLink>
                </div>
                <img
                    class="profile-sidebar__arrow-left"
                    src="/icons/arrow-left.svg"
                />
            </div>
            <hr class="splicer" />
            <div
                class="mobile-screen profile-sidebar__flex profile-sidebar__rules"
            >
                <div class="profile-sidebar__flex-part">
                    <img
                        class="profile-sidebar__rules-icon"
                        src="/icons/rules.svg"
                    />
                    <NuxtLink to="">قوانین و مقررات</NuxtLink>
                </div>
                <img
                    class="profile-sidebar__arrow-left"
                    src="/icons/arrow-left.svg"
                />
            </div>
            <!-- =section7= -->
            <hr class="splicer__logout" />
            <div class=" profile-sidebar__flex-part profile-sidebar__logout">
                <img
                    class="profile-sidebar__logout-icon"
                    src="/icons/logout.svg"
                />
                <div class="profile-sidebar__logout-link">خروج از حساب</div>
            </div>
        </div>
    </div>
</template>
<script>
import TheUserInfo from "~/components/Profile/TheUserInfo.vue";
export default {
    name: "TheProfilesideBar",
    components: {
        TheUserInfo
    },
    data() {
        return {
            profileIsActive: false,
            personalInfoIsActive: false,
            favoriteActive: false,
            adressActive: false,
            userHistoryIsActive: false,
            muOrdersIsActive: false
        };
    },
    created() {
        let curentRoute = this.$route.path;
        // console.log(curentRoute);
        if (curentRoute == "/profile") {
            this.profileIsActive = true;
        } else if (curentRoute == "/profile/personal-info") {
            this.personalInfoIsActive = true;
        } else if (curentRoute == "/profile/favorites") {
            this.favoriteActive = true;
        } else if (curentRoute == "/profile/adresses") {
            this.adressActive = true;
        } else if (curentRoute == "/profile/user-history") {
            this.userHistoryIsActive = true;
        } else if (curentRoute == "/profile/my-orders") {
            this.muOrdersIsActive = true;
        }

        // else if (curentRoute == "/cart") {
        //     this.basketIsActive = true;
        // } else if (curentRoute == "/profile") {
        //     this.profileIsActive = true;
        // }
    },
    methods: {
        goToPersonalInfo() {
            this.$router.push("/profile/personal-info");
        },
        goToUserHistory() {
            this.$router.push("/profile/user-history");
        },
        goToMyOrders() {
            this.$router.push("/profile/my-orders");
        }
    }
};
</script>
<style lang="scss" scoped>
.container {
    margin: 166px 16px 50px 30px;
    width: 100%;
    max-width: 329px;
    min-height: min-content;
    height: max-content;
    @include display-flex();
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: center;
    /* align-items: flex-end; */
    /* text-align: center; */
    /* border: 3px solid red; */
}
.link-item__activated {
    color: $yellow !important;
}
.message-holder {
    display: none;
}

.profile-sidebar {
    width: 100%;
    height: fit-content;
    background: $white;
    box-shadow: 0px 8px 16px $box__shadow;
    border-radius: 10px;
    @include display-flex();
    flex-direction: column;
    /* justify-content: space-between; */
    &__flex {
        @include display-flex();
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        height: 64px;
        /* border: 1px solid red; */
    }
    &__flex-part {
        @include display-flex();
        flex-direction: row-reverse;
        align-items: center;
    }
    &__arrow-left {
        display: none;
    }
    &__user {
        margin-top: 17px;
    }
    &__flex a {
        text-decoration: none;
        color: $black-topic;
        font-size: 14px;
        line-height: 140.62%;
    }
    &__flex-part:hover a {
        color: $yellow;
    }
    &__flex-part:hover &__user-icon,
    &__flex-part:hover &__logout-icon,
    &__flex-part:hover &__gifttcard-icon,
    &__flex-part:hover &__creditcard-icon,
    &__flex-part:hover &__history-icon,
    &__flex-part:hover &__support-icon,
    &__flex-part:hover &__comment-icon,
    &__flex-part:hover &__address-icon,
    &__flex-part:hover &__personal-info-icon,
    &__flex-part:hover &__notification-icon,
    &__flex-part:hover &__favorite-icon,
    &__flex-part:hover &__order-icon,
    &__flex-part:hover &__privacy-icon,
    &__flex-part:hover &__rules-icon {
        filter: invert(20%) sepia(60%) saturate(519%) hue-rotate(335deg)
            brightness(150%) contrast(105%);
    }
    &__logout-icon,
    &__gifttcard-icon,
    &__creditcard-icon,
    &__history-icon,
    &__support-icon,
    &__comment-icon,
    &__address-icon,
    &__personal-info-icon,
    &__favorite-icon,
    &__user-icon {
        width: 24px;
        height: 24px;
        margin-right: 22px;
        margin-left: 17px;
    }
    &__notification-icon {
        width: 20px;
        height: 18px;
        margin-right: 24px;
        margin-left: 19px;
    }
    &__order-icon {
        width: 19px;
        height: 22px;
        margin-right: 24px;
        margin-left: 20px;
    }
    &__logout-link {
        color: $red-logout;
        font-size: 14px;
        line-height: 140.62%;
        cursor: pointer;
    }
    &__logout {
        height: 81px;
    }
    &__logout:hover {
        color: $yellow;
    }
}
.profile-item__activated {
    filter: invert(20%) sepia(60%) saturate(519%) hue-rotate(335deg)
        brightness(150%) contrast(105%);
}
.splicer__logout {
    border: none;
    border-top: 1px solid $gray-border;
}
.splicer {
    display: none;
}
.mobile-screen {
    display: none;
}
@media (max-width: 960px) {
    .splicer_down {
        margin-bottom: 16px;
    }
    .splicer {
        display: block;
        border: none;
        border-top: 1px solid $gray-border;
    }
    .mobile-screen {
        @include display-flex();
    }
    .container {
        width: 100%;
        max-width: 960px;
        margin: 63px 0 16px 0;
    }
    .message-holder {
        @include display-flex();
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        margin-left: 10px;
        border-radius: 50%;
        background: rgba(255, 211, 90, 0.23);
        /* border: 1px solid $yellow; */
        /* box-shadow: 0px 4px 4px rgba(255, 204, 64, 0.49); */
    }
    .message-counter {
        color: $yellow;
        font-size: 16px;
        line-height: 140.62%;
    }
    .profile-sidebar {
        background: transparent;
        border-radius: 0;
        &__arrow-left {
            display: block;
            width: 22px;
            height: 22px;
            margin-left: 25px;
        }
        &__user {
            display: none;
        }
        &__flex,
        &__flex-part {
            background: $white;
        }
        &__flex a {
            font-size: 13px;
        }
        &__privacy-icon {
            width: 15px;
            height: 18px;
            margin-right: 32px;
            margin-left: 19px;
        }
        &__rules-icon {
            width: 22px;
            height: 22px;
            margin-right: 28px;
            margin-left: 16px;
        }
        &__logout-icon,
        &__gifttcard-icon,
        &__creditcard-icon,
        &__history-icon,
        &__support-icon,
        &__comment-icon,
        &__address-icon,
        &__personal-info-icon,
        &__favorite-icon,
        &__user-icon {
            margin-right: 26px;
        }
        &__order-icon,
        &__notification-icon {
            margin-right: 28px;
        }
        &__logout {
            height: 67px;
            &-icon {
                margin-right: 24px;
            }
        }
    }
}
</style>
