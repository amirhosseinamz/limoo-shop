<template>
    <div>
        <div id="overlay" v-if="MobileCategoryIsActive">
            <The-mobile-category />
        </div>


        <div class="mobile-mega-menu">
            <div
                @click="goToProfile"
                class="mobile-mega-menu__items mobile-mega-menu__profile"
            >
                <span
                    class="mobile-mega-menu__profile-person"
                    :class="{ 'menu-item__activated': profileIsActive }"
                ></span>
                <button
                    class="mobile-mega-menu__profile-btn"
                    :class="{ 'menu-item__activated': profileIsActive }"
                >
                    {{langProfile}}
                </button>
            </div>
            <div
                @click="goToBasket"
                class="mobile-mega-menu__items mobile-mega-menu__cart"
            >
                <span
                    class="mobile-mega-menu__cart-basket"
                    :class="{ 'menu-item__activated': basketIsActive }"
                ></span>
                <button
                    class="mobile-mega-menu__cart-btn"
                    :class="{ 'menu-item__activated': basketIsActive }"
                >
                    {{langBasket}}
                </button>
            </div>

            <div
                @click="showCategory"
                class="mobile-mega-menu__items mobile-mega-menu__category"
            >
                <span
                    class="mobile-mega-menu__category-icon"
                    :class="{ 'menu-item__activated': MobileCategoryIsActive }"
                ></span>
                <button
                    class="mobile-mega-menu__category-btn"
                    :class="{ 'menu-item__activated': MobileCategoryIsActive }"
                >
                    {{langCat}}
                </button>
            </div>
            <div
                @click="goToHome"
                class="mobile-mega-menu__items mobile-mega-menu__home"
            >
                <span
                    class="mobile-mega-menu__home-icon"
                    :class="{ 'menu-item__activated': homeIsActive }"
                ></span>
                <button
                    class="mobile-mega-menu__home-btn"
                    :class="{ 'menu-item__activated': homeIsActive }"
                >
                    {{langMainPage}}
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import TheMobileCategory from "~/components/Category/TheMobileCategory.vue";
import resource from "~/modules/resource.js";
import splitPartJsonResource from "~/modules/splitPartJsonResource.js";



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
        if (curentRoute.search("/profile") == 0) {
            this.profileIsActive = true;
        } else if (
            curentRoute == "/cart" ||
            curentRoute == "/shipping" ||
            curentRoute == "/payment"
        ) {
            this.basketIsActive = true;
        } else if (curentRoute == "/") {
            this.homeIsActive = true;
        }

        const footerData   = resource('footer');
        const headerDta    = resource('header');

        this.setLanguageData(footerData,headerDta);
    },
    methods: {
        setLanguageData(footerData,headerDta){
          const language         = this.$store.state.language;

          this.langMainPage      =  splitPartJsonResource(footerData,'footer_main_page_text',language).languageData.text;
          this.langCat           =  splitPartJsonResource(footerData,'footer_mobile_category',language).languageData.text;
          this.langBasket        =  splitPartJsonResource(headerDta,'header_basket',language).languageData.text;
          this.langProfile       =  splitPartJsonResource(footerData,'footer_mobile_profile',language).languageData.text;
        },

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
    z-index: 5;
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
        z-index: 2;
    }
    .mobile-mega-menu {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        padding: 0 30px;
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
        z-index: 5;
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
        /* ================================ */
        &__profile-person::before,
        &__cart-basket::before,
        &__category-icon::before,
        &__home-icon::before {
            @include font-icon__limoo();
            font-size: 17px;
            vertical-align: middle;
            margin-left: 5px;
        }
        &__profile-person::before {
            content: "\e823";
        }
        &__cart-basket::before {
            content: "\e802";
        }
        &__category-icon::before {
            content: "\e805";
        }
        &__home-icon::before {
            content: "\e814";
        }
        /* ================================ */
    }
}
@media (max-width: 700px) {
    .mobile-mega-menu {
        padding: 0 10px;
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
/* .menu-items__activated {
    color: $yellow;
} */
</style>
