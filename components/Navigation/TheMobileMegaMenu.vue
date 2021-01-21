<template>
    <div>
        <div id="overlay" v-if="MobileCategoryIsActive"></div>
        <The-mobile-category v-if="MobileCategoryIsActive" />
        <div class="mobile-mega-menu">
            <div
                @click="goToProfile"
                class="mobile-mega-menu__items mobile-mega-menu__profile"
            >
                <img
                    class="mobile-mega-menu__profile-person"
                    :class="{ 'menu-item__activated': profileIsActive }"
                    src="/icons/profile-mobile.svg"
                />

                <button
                    class="mobile-mega-menu__profile-btn"
                    :class="{ 'menu-item__activated': profileIsActive }"
                >
                    پروفایل من
                </button>
            </div>
            <div
                @click="goToBasket"
                class="mobile-mega-menu__items mobile-mega-menu__cart"
            >
                <img
                    class="mobile-mega-menu__cart-basket"
                    :class="{ 'menu-item__activated': basketIsActive }"
                    src="/icons/basket-mobile.svg"
                />

                <button
                    class="mobile-mega-menu__cart-btn"
                    :class="{ 'menu-item__activated': basketIsActive }"
                >
                    سبد خرید
                </button>
            </div>
            <div
                @click="showCategory"
                class="mobile-mega-menu__items mobile-mega-menu__category"
            >
                <img
                    class="mobile-mega-menu__category-icon"
                    :class="{ 'menu-item__activated': MobileCategoryIsActive }"
                    src="/icons/category.svg"
                />
                <!-- <svg
                    class="mobile-mega-menu__category-icon"
                    :class="{ 'menu-item__activated': MobileCategoryIsActive }"
                    fill="#828282"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="Category">
                        <g id="Iconly/Bold/Category">
                            <g id="Category_2">
                                <path
                                    id="Vector"
                                    d="M6.93 12.3471C8.16375 12.3471 9.1525 13.3931 9.1525 14.6947V17.8196C9.1525 19.1121 8.16375 20.1663 6.93 20.1663H3.9725C2.7475 20.1663 1.75 19.1121 1.75 17.8196V14.6947C1.75 13.3931 2.7475 12.3471 3.9725 12.3471H6.93ZM17.0276 12.3471C18.2526 12.3471 19.2501 13.3931 19.2501 14.6947V17.8196C19.2501 19.1121 18.2526 20.1663 17.0276 20.1663H14.0701C12.8363 20.1663 11.8476 19.1121 11.8476 17.8196V14.6947C11.8476 13.3931 12.8363 12.3471 14.0701 12.3471H17.0276ZM6.93 1.83325C8.16375 1.83325 9.1525 2.88742 9.1525 4.18084V7.30575C9.1525 8.60742 8.16375 9.65242 6.93 9.65242H3.9725C2.7475 9.65242 1.75 8.60742 1.75 7.30575V4.18084C1.75 2.88742 2.7475 1.83325 3.9725 1.83325H6.93ZM17.0276 1.83325C18.2526 1.83325 19.2501 2.88742 19.2501 4.18084V7.30575C19.2501 8.60742 18.2526 9.65242 17.0276 9.65242H14.0701C12.8363 9.65242 11.8476 8.60742 11.8476 7.30575V4.18084C11.8476 2.88742 12.8363 1.83325 14.0701 1.83325H17.0276Z"
                                />
                            </g>
                        </g>
                    </g>
                </svg> -->

                <button
                    class="mobile-mega-menu__category-btn"
                    :class="{ 'menu-item__activated': MobileCategoryIsActive }"
                >
                    دسته بندی
                </button>
            </div>
            <div
                @click="goToHome"
                class="mobile-mega-menu__items mobile-mega-menu__home"
            >
                <!-- <img
                    class="mobile-mega-menu__home-icon"
                    :class="{ 'menu-item__activated': homeIsActive }"
                    src="/icons/home.svg"
                /> -->
                <svg
                    class="mobile-mega-menu__home-icon"
                    :class="{ 'menu-item__activated': homeIsActive }"
                    fill="#828282"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="Home">
                        <path
                            id="Vector"
                            d="M8.37351 19.0421V16.2392C8.37351 15.5237 8.95778 14.9437 9.67852 14.9437H12.3132C12.6593 14.9437 12.9912 15.0802 13.236 15.3232C13.4807 15.5661 13.6182 15.8956 13.6182 16.2392V19.0421C13.616 19.3396 13.7335 19.6256 13.9446 19.8367C14.1557 20.0479 14.443 20.1666 14.7427 20.1666H16.5401C17.3796 20.1687 18.1855 19.8392 18.7799 19.2507C19.3742 18.6621 19.7083 17.863 19.7083 17.0296V9.04454C19.7083 8.37134 19.4077 7.73277 18.8875 7.30086L12.7728 2.4528C11.7091 1.60277 10.1851 1.63021 9.15323 2.51798L3.17805 7.30086C2.6333 7.72004 2.30772 8.3605 2.29163 9.04454V17.0214C2.29163 18.7585 3.71006 20.1666 5.45978 20.1666H7.21623C7.83858 20.1666 8.34437 19.6681 8.34888 19.0503L8.37351 19.0421Z"
                        />
                    </g>
                </svg>

                <button
                    class="mobile-mega-menu__home-btn"
                    :class="{ 'menu-item__activated': homeIsActive }"
                >
                    صفحه اصلی
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import TheMobileCategory from "~/components/Category/TheMobileCategory.vue";
export default {
    data() {
        return {
            MobileCategoryIsActive: false,
            profileIsActive: false,
            basketIsActive: false,
            homeIsActive: false
        };
    },
    components: {
        TheMobileCategory
    },
    watch: {},
    created() {
        const curentRoute = this.$route.path;
        if (curentRoute == "/") {
            this.homeIsActive = true;
        } else if (curentRoute == "/cart") {
            this.basketIsActive = true;
        } else if (curentRoute.search("/profile") + 1 == 1) {
            this.profileIsActive = true;
        }
    },
    methods: {
        showCategory() {
            this.homeIsActive = false;
            this.basketIsActive = false;
            this.profileIsActive = false;
            this.MobileCategoryIsActive = true;
        },
        goToBasket() {
            this.MobileCategoryIsActive = false;
            this.homeIsActive = false;
            this.profileIsActive = false;
            this.basketIsActive = true;
            this.$router.push("/cart");
        },
        goToProfile() {
            this.MobileCategoryIsActive = false;
            this.homeIsActive = false;
            this.basketIsActive = false;
            this.profileIsActive = true;
            this.$router.push("/profile");
        },
        goToHome() {
            this.MobileCategoryIsActive = false;
            this.profileIsActive = false;
            this.basketIsActive = false;
            this.homeIsActive = true;
            this.$router.push("/");
        }
    }
};
</script>
<style lang="scss" scoped>
.mobile-mega-menu {
    display: none;
}
@media (max-width: 960px) {
    #overlay {
        position: fixed; /* Sit on top of the page content */
        width: 100%; /* Full width (cover the whole page) */
        height: 100%; /* Full height (cover the whole page) */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: $main-bg;
    }
    .mobile-mega-menu {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        padding: 0 10px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(5px);
        opacity: 0.99;
        box-shadow: -2px -6px 16px -3px rgba(0, 0, 0, 0.06);
        color: $gray;
        /* text-align: center; */
        width: 100%;
        height: 58px;
        position: fixed;
        bottom: 0;
        /* we have issue --> the main page content stay behind nav */
        &__items {
            /* border: 1px solid red; */
            width: 73px;
            @include display-flex();
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        &__profile-person,
        &__cart-basket,
        &__category-icon,
        &__home-icon {
            width: 22px;
            height: 22px;
            margin-bottom: 4px;
        }
        &__profile-btn,
        &__cart-btn,
        &__category-btn,
        &__home-btn {
            outline: none;
            border: none;
            background: transparent;
            font-family: inherit;
            font-size: 13px;
            color: $gray;
        }
        /* &__cart-btn:active,
        &__cart-btn:focus,
        &__category-btn:active,
        &__category-btn:focus,
        &__home-btn:active,
        &__home-btn:focus,
        &__profile-btn:active,
        &__profile-btn:focus {
            color: $yellow;
        } */
    }
}
@media (max-width: 280px) {
    .mobile-mega-menu {
        padding: 0 5px;

        &__profile-person,
        &__cart-basket,
        &__category-icon,
        &__home-icon {
            width: 20px;
            height: 20px;
        }
        &__profile-btn,
        &__cart-btn,
        &__category-btn,
        &__home-btn {
            font-size: 12px;
        }
    }
}
</style>
