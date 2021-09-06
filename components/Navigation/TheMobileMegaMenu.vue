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
          {{ getTextByTextKey("footer_mobile_profile") }}
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
          {{ getTextByTextKey("header_basket") }}
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
          {{ getTextByTextKey("footer_mobile_category") }}
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
          {{ getTextByTextKey("footer_main_page_text") }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import TheMobileCategory from "~/components/Category/TheMobileCategory.vue";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  data() {
    return {
      MobileCategoryIsActive: false,
      profileIsActive: false,
      basketIsActive: false,
      homeIsActive: false,
    };
  },
  components: {
    TheMobileCategory,
  },
  watch: {},
  created() {
    const curentRoute = this.$route.path;
    if (curentRoute.search("/profile") === 0) {
      this.profileIsActive = true;
    } else if (
      curentRoute === "/cart" ||
      curentRoute === "/shipping" ||
      curentRoute === "/payment"
    ) {
      this.basketIsActive = true;
    } else if (curentRoute === "/") {
      this.homeIsActive = true;
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
    },
    getTextByTextKey,
  },
};
</script>
<style lang="scss" scoped>
.mobile-mega-menu {
  display: none;
  z-index: 5;
}
@include md {
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
    padding: 0 toRem(30);
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(toRem(5));
    opacity: 0.99;
    box-shadow: toRem(-2) toRem(-6) toRem(16) toRem(-3) rgba(0, 0, 0, 0.06);
    color: $gray;
    width: 100%;
    height: toRem(58);
    position: fixed;
    bottom: 0;
    z-index: 5;
    /* we have issue --> the main page content stay behind nav */
    &__items {
      width: toRem(73);
      @include display-flex();
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &__profile-person,
    &__cart-basket,
    &__category-icon,
    &__home-icon {
      margin-bottom: toRem(4);
    }
    &__profile-btn,
    &__cart-btn,
    &__category-btn,
    &__home-btn {
      outline: none;
      border: none;
      background: transparent;
      font-family: inherit;
      font-size: toRem(13);
      color: $gray;
    }
    /* ================================ */
    &__profile-person::before,
    &__cart-basket::before,
    &__category-icon::before,
    &__home-icon::before {
      @include font-icon__limoo();
      font-size: toRem(17);
      vertical-align: middle;
      margin-left: toRem(5);
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
@include sm {
  .mobile-mega-menu {
    padding: 0 toRem(10);
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
