<template>
    <div class="header-container">
        <header class="the-header" :class="{ 'navbar--hidden': !showNavbar }">
            <div class="the-header__items">
                <div class="logo">
                    <nuxt-link to="/">
                        <img
                            class="logo-img"
                            src="/logos/header-limoo.svg"
                            alt=""
                        />
                    </nuxt-link>
                </div>
                <div class="city-label">
                    <img
                        class="city-label__arrow"
                        src="/icons/arrow-down.svg"
                    />
                    <div class="city-label__btn-holder">
                        <button class="city-label__btn">
                            تهران
                        </button>
                        <img
                            class="city-label__location"
                            src="/icons/location.svg"
                        />
                    </div>
                </div>
                <!-- search-section -->
                <div class="search-section">
                    <div class="search-section__items">
                        <input
                            class="search-section__input"
                            type="text"
                            dir="rtl"
                            placeholder="جستجوی محصول..."
                        />
                        <button class="search-section__btn">
                            <img class="" src="/icons/search.svg" />
                        </button>
                    </div>
                </div>
            </div>
            <!-- <div class="spacer"></div> -->
            <div class="navigation-items">
                <div class="navigation-item navigation-item__cart">
                    <button class="navigation-item__cart-btn">
                        سبد خرید
                    </button>
                    <img
                        class="navigation-item__cart-basket"
                        src="/icons/basket.svg"
                    />
                </div>
                <div class="navigation-item navigation-item__profile">
                    <img
                        class="navigation-item__profile-person"
                        src="/icons/profile.svg"
                    />

                    <button class="navigation-item__profile-btn">
                        ورود <span style="color: #e0e0e0">|</span> عضویت
                    </button>
                </div>
                <div
                    @click="show"
                    class="navigation-item navigation-item__call"
                >
                    <img
                        class="navigation-item__call-person"
                        src="/icons/call.svg"
                    />

                    <button class="navigation-item__call-btn">
                        پشتیبانی
                    </button>
                </div>
                <div class="navigation-item navigation-item__sell">
                    <img
                        class="navigation-item__sell-person"
                        src="/icons/plus.svg"
                    />

                    <button class="navigation-item__sell-btn">
                        شروع فروش کالا
                    </button>
                </div>
            </div>
        </header>
        <the-mega-menu />
    </div>
</template>

<script>
import TheMegaMenu from "~/components/Navigation/TheMegaMenu.vue";
export default {
    name: "TheHeader",
    components: {
        TheMegaMenu
    },
    data() {
        return {
            showNavbar: true,
            lastScrollPosition: 0
        };
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },

    methods: {
        show() {
            console.log("hi");
        },
        onScroll() {
            const currentScrollPosition =
                window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollPosition < 0) {
                return;
            }
            /* Stop executing this function if the difference between
             current scroll position and last scroll position is less than some offset
             if we don't like offset so simply remove the if below*/
            if (
                Math.abs(currentScrollPosition - this.lastScrollPosition) < 60
            ) {
                return;
            }
            this.showNavbar = currentScrollPosition < this.lastScrollPosition;
            this.lastScrollPosition = currentScrollPosition;
        }
    }
};
</script>

<style lang="scss" scoped>
.header-container {
    position: fixed;
    @include display-flex();
    flex-direction: column;
    width: 100%;
    height: 135px;
    background-color: $white;
}
.the-header {
    @include display-flex();
    flex-direction: row-reverse;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    width: 100%;
    max-width: 1920px;
    height: 81px;
    background-color: $white;
    border-bottom: 1px solid $gray-border;
    &__items {
        @include display-flex();
        flex-direction: row-reverse;
        align-items: center;
    }
}

.logo {
    margin: 16px;
    &-img {
        width: 102px;
        height: 49px;
    }
}

.search-section {
    &__items {
        height: 49px;
        line-height: 28px;
        border: 1px solid $input-border;
        border-radius: 10px;
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        width: 492px;
    }
    &__input {
        @extend .sass-input__default;
        font-family: inherit;
        font-size: 14px;
        font-weight: 300;
        flex-grow: 2;
    }

    &__btn {
        @extend .sass-input__default;
        margin: 14px 16px 15px 4px;
    }
}
.city-label {
    @include display-flex();
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 129px;
    height: 49px;
    outline: none;
    border: 1px solid $gray-border;
    border-radius: 10px;
    margin: 16px 8px;
    &__btn-holder {
        @include display-flex();
        flex-direction: row;
        align-items: center;
    }
    &__btn {
        font-size: 14px;
        font-family: inherit;
        border: none;
        outline: none;
        background: transparent;
    }
    &__arrow {
        margin-left: 8px;
        cursor: pointer;
    }
    &__location {
        margin-right: 8px;
        margin-left: 4px;
    }
}
.navigation-items {
    @include display-flex();
    flex-direction: row;
}
.navigation-item {
    @include display-flex();
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    height: 49px;
    border: 1px solid $gray-border;
    border-radius: 10px;
    cursor: pointer;
    &__cart {
        width: 115px;
        margin-left: 16px;
        &-btn {
            font-size: 14px;
            font-family: inherit;
            border: none;
            outline: none;
            background: transparent;
            margin-left: 8px;
            cursor: pointer;
        }
    }
    &__profile {
        width: 134px;
        margin-left: 8px;
        &-btn {
            font-size: 14px;
            font-family: inherit;
            border: none;
            outline: none;
            background: transparent;
            margin-right: 8px;
            cursor: pointer;
        }
    }
    &__call {
        width: 109px;
        margin-left: 8px;
        &-person {
            width: 14px;
            height: 14px;
        }
        &-btn {
            font-size: 14px;
            font-family: inherit;
            border: none;
            outline: none;
            background: transparent;
            margin-right: 8px;
            cursor: pointer;
        }
    }
    &__sell {
        width: 151px;
        margin-left: 8px;
        background: #fff9ea;
        &-btn {
            font-size: 14px;
            font-family: inherit;
            border: none;
            outline: none;
            background: transparent;
            margin-right: 8px;
            cursor: pointer;
        }
    }
}
/* .spacer {
    flex: 1;
} */

@media (max-width: 1300px) {
    /* .navigation-items {
        display: block;
    } */
    .search-section__items {
        width: 250px;
    }
}
@media (max-width: 960px) {
    /* make header scrolable with main page in mobile screen */
    .header-container {
        background-color: transparent;
        z-index: 1;
    }
    .the-header {
        background-color: $white;
        z-index: 1;

        position: fixed;
        transform: translate3d(0, 0, 0);
        transition: 0.1s all ease-out;
    }
    .the-header.navbar--hidden {
        transform: translate3d(0, -100%, 0);
    }
    /**/
    .header-container,
    .the-header {
        height: 47px;
    }

    .logo {
        margin: 12px 16px 6px 9px;
        &-img {
            width: 70px;
            height: 31px;
        }
    }
    .city-label {
        display: none;
    }
    .search-section {
        &__items {
            height: 19px;
            line-height: 18px;
            border: none;
            border-radius: 0;
            border-right: 1px solid $gray-border;
            width: 137px;
        }
        &__input {
            @extend .sass-input__default;
            font-family: inherit;
            font-size: 13px;
            font-weight: 300;
            flex-grow: 2;
        }
        &__btn {
            @extend .sass-input__default;
            margin: 0px 8px 13px 4px;
        }
    }
    .navigation-item {
        &__cart,
        &__profile,
        &__sell {
            display: none;
        }
        &__call {
            width: 28px;
            height: 21px;
            margin: 14px 8px 13px 16px;
            border: none;
            border-radius: 0;
            border-right: 1px solid $gray-border;
            &-person {
                width: 20px;
                height: 20px;
            }
            &-btn {
                display: none;
            }
        }
    }
}

@media (max-width: 720px) {
    .search-section__items {
        width: 200px;
    }
}

@media (max-width: 350px) {
    .logo {
        margin: 12px 10px 6px 4px;
    }
    .search-section {
        &__items {
            width: 110px;
        }
        &__btn {
            margin: 0px 2px 13px 4px;
        }
    }
}
</style>
