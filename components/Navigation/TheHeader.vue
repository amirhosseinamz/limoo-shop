<template>
    <div class="header-container">
        <header class="the-header">
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
                        src="/icons/person.svg"
                    />

                    <button class="navigation-item__profile-btn">
                        ورود <span style="color: #e0e0e0">|</span> عضویت
                    </button>
                </div>
                <div class="navigation-item navigation-item__call">
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
        <nav class="mega-menu">
            <div class="mega-menu__item">کالای دیجیتال</div>
            <div class="mega-menu__item">خانه و آشپزخانه</div>
            <div class="mega-menu__item">مد و لباس</div>
            <div class="mega-menu__item">
                کالای سوپر مارکتی

                <div class="mega-menu__section">
                    <div class="mega-menu__section-wrapper">
                        موبایل
                    </div>
                </div>
            </div>
            <div class="mega-menu__item">زیبایی و سلامت</div>
            <div class="mega-menu__item">موبایل و تبلت</div>
            <div class="mega-menu__item">موبایل و تبلت</div>
            <div class="mega-menu__item">موبایل و تبلت</div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "TheHeader",
    components: {}
};
</script>

<style lang="scss" scoped>
.header-container {
    position: fixed;
    @include display-flex();
    flex-direction: column;
    width: 100%;
    height: 135px;
}

.the-header {
    @include display-flex();
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 81px;
    background-color: $white;
    border-bottom: 1px solid $gray-border;
    &__items {
        @include display-flex();
        flex-direction: row-reverse;
        align-items: center;
    }
}
.mega-menu {
    @include display-flex();
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 54px;
    background-color: $white;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.03);
    &__item {
        padding: 14px 0 13px 0;
        cursor: pointer;
        color: $code;
    }
    &__item:hover {
        border-bottom: 3px solid $yellow;
        border-top: 3px solid transparent;
        color: #212121;
    }
    &__section {
        /* top: 136px;
        right: 0;
        height: 337px;
        width: 100%;
        opacity: 0;
        display: flex;
        flex-direction: row;
        padding: 1rem 0;
        flex-wrap: wrap;
        box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.03);
        border-radius: 10px;
        position: absolute;
        visibility: hidden;
        background: #fff;
        justify-content: flex-end; */
        visibility: hidden;
        opacity: 0;
        position: absolute;
        transition: all 0.5s ease;
        margin-top: 1rem;
        left: 0;
        display: none;
    }
    &__section:hover {
        /* opacity: 1;
        visibility: visible; */
        visibility: visible;
        opacity: 1;
        display: block;
    }
}

.logo {
    margin: 16px;
    &-img {
        width: 102px;
        height: 49px;
    }
}
.search-section__items {
    height: 49px;
    line-height: 28px;
    border: 1px solid $input-border;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    width: 492px;
}
.search-section__input {
    @extend .sass-input__default;
    font-family: inherit;
    font-size: 14px;
    font-weight: 300;
    flex-grow: 2;
}
.search-section__btn {
    @extend .sass-input__default;
    margin: 14px 16px 15px 4px;
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
        }
    }
    &__call {
        width: 109px;
        margin-left: 8px;
        &-btn {
            font-size: 14px;
            font-family: inherit;
            border: none;
            outline: none;
            background: transparent;
            margin-right: 8px;
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
        }
    }
}
/* .spacer {
    flex: 1;
} */

@media (max-width: 1100px) {
    /* .navigation-items {
        display: block;
    } */
    .search-section__items {
        width: 350px;
    }
}
@media (max-width: 800px) {
    .search-section__items {
        width: 200px;
    }
}
</style>
