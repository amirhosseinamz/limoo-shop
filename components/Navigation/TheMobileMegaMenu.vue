<template>
    <!-- <div class="mobie-nav-holder">
            <nav class="mega-menu">
                <div class="mega-menu__item">
                    <a href="">
                        کالای دیجیتال
                    </a>
                    <div class="mega-menu__section">
                        <div class="mega-menu__section-header">
                            <a href="" class="section-header">
                                <span>موبایل و تبلت</span>
                            </a>

                            <a href="" class="section-header">
                                <span>لوازم جانبی</span>
                            </a>

                            <a href="" class="section-header">
                                <span>دوربین</span>
                            </a>

                            <a href="" class="section-header">
                                <span>هدست و هندزفری</span>
                            </a>
                        </div>
                        <span class="mega-menu__seperator"></span>
                        <div class="mega-menu__section-items">
                            <div class="section-item-holder">
                                <a href="" class="section-item">
                                    گوشی
                                </a>
                                <a href="" class="section-item">
                                    موبایل
                                </a>
                                <a href="" class="section-item">
                                    دوربین
                                </a>
                                <a href="" class="section-item">
                                    هدست و هندزفری
                                </a>
                            </div>
                            <div class="section-item-holder">
                                <a href="" class="section-link">
                                    دکوراتیوی
                                </a>
                                <a href="" class="section-link">
                                    صوتی و تصویری
                                </a>
                                <a href="" class="section-link">
                                    لوازم خانگی
                                </a>
                            </div>
                            <div class="section-item-holder">
                                <a href="" class="section-link">
                                    پوشاک مردانه
                                </a>
                                <a href="" class="section-link">
                                    پوشاک زنانه
                                </a>
                                <a href="" class="section-link">
                                    پوشاک بچگانه
                                </a>
                            </div>
                            <div class="section-item-holder">
                                <a href="" class="section-link">
                                    شوینده
                                </a>
                                <a href="" class="section-link">
                                    لبنیات
                                </a>
                                <a href="" class="section-link">
                                    میوه و سبزیجات
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mega-menu__item">
                    <a href="">
                        خانه و آشپزخانه
                    </a>
                </div>
                <div class="mega-menu__item">
                    <a href="">
                        مد و لباس
                    </a>
                </div>
                <div class="mega-menu__item">
                    <a href="">
                        کالای سوپر مارکتی
                    </a>
                </div>
                <div class="mega-menu__item">
                    <a href="">
                        زیبایی و سلامت
                    </a>
                </div>
                <div class="mega-menu__item">
                    <a href="">
                        زیبایی و سلامت
                    </a>
                </div>
                <div class="mega-menu__item">
                    <a href="">
                        موبایل و تبلت
                    </a>
                </div>
                <div class="mega-menu__item">
                    <a href="">
                        موبایل و تبلت
                    </a>
                </div>
                <div class="mega-menu__item">
                    <a href="">
                        موبایل و تبلت
                    </a>
                </div>
                <div class="mega-menu__item">
                    <a href="">
                        موبایل و تبلت
                    </a>
                </div>
            </nav>
        </div> -->
    <div class="mobile-mega-menu">
        <div class="mobile-mega-menu__items mobile-mega-menu__profile">
            <img
                class="mobile-mega-menu__profile-person"
                src="/icons/profile-mobile.svg"
            />

            <button class="mobile-mega-menu__profile-btn">
                پروفایل من
            </button>
        </div>
        <div class="mobile-mega-menu__items mobile-mega-menu__cart">
            <img
                class="mobile-mega-menu__cart-basket"
                src="/icons/basket-mobile.svg"
            />

            <button class="mobile-mega-menu__cart-btn">
                سبد خرید
            </button>
        </div>
        <div class="mobile-mega-menu__items mobile-mega-menu__category">
            <img
                class="mobile-mega-menu__category-icon"
                src="/icons/category.svg"
            />

            <button class="mobile-mega-menu__category-btn">
                دسته بندی
            </button>
        </div>
        <div class="mobile-mega-menu__items mobile-mega-menu__home">
            <img class="mobile-mega-menu__home-icon" src="/icons/home.svg" />

            <button class="mobile-mega-menu__home-btn">
                صفحه اصلی
            </button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.mobile-mega-menu {
    display: none;
}
@media (max-width: 960px) {
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
