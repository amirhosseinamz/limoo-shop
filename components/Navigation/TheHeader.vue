<template>
  <div class="header-container">
    <!--  -->
    <div id="overlay" v-if="showModalWellcome">
      <WellcomeSignUp
        @event-close-modal-wellcome="closeWellcomeModal"
        @event-close-modal-and-go-to-perofile="closeWellcomeModalandGoToProfile"
      />
    </div>
    <!--  -->
    <header
      :key="authUpdated"
      class="the-header"
      :class="{ 'navbar--hidden': !showNavbar }"
    >
      <div class="the-header__items">
        <div class="logo">
          <NuxtLink to="/">
            <img class="logo-img" src="/logos/header-limoo.svg" alt="" />
          </NuxtLink>
        </div>
        <div class="city-label">
          <span class="city-label__arrow"></span>
          <div class="city-label__btn-holder">
            <button class="city-label__btn">
              تهران
            </button>
            <span class="city-label__location"></span>
          </div>
        </div>
        <!-- search-section -->
        <div class="search-section">
          <div class="search-section__items">
            <input
              class="search-section__input"
              type="text"
              dir="rtl"
              :placeholder="getTextByTextKey('header_find_product')"
            />
            <button class="search-section__btn"></button>
          </div>
        </div>
      </div>
      <!-- <div class="spacer"></div> -->

      <div class="navigation-items">
        <div class="navigation-item navigation-item__cart" @click="goToBasket">
          <button class="navigation-item__cart-btn">
            {{ getTextByTextKey("header_basket") }}
          </button>
          <span class="navigation-item__cart-basket"></span>
        </div>
        <div
          class="navigation-item navigation-item__profile"
          @click="showAuthModal"
        >
          <span class="navigation-item__profile-person"></span>
          <button class="navigation-item__profile-btn">
            <span v-show="!userIsAuth">
              {{ getTextByTextKey("header_login") }}
              <span style="color: #e0e0e0">|</span>
              {{ getTextByTextKey("header_membership") }}
            </span>
            <span v-show="userIsAuth">
              {{ getTextByTextKey("header_account") }}
            </span>
          </button>
        </div>
        <div class="navigation-item navigation-item__call">
          <span class="navigation-item__call-person"></span>
          <button class="navigation-item__call-btn">
            {{ getTextByTextKey("footer_support") }}
          </button>
        </div>
        <div class="navigation-item navigation-item__sell">
          <span class="navigation-item__sell-person"></span>
          <button class="navigation-item__sell-btn">
            {{ getTextByTextKey("header_start_sales_product") }}
          </button>
        </div>
      </div>
    </header>
    <the-mega-menu />
    <modalAuth
      :active.sync="showModalAuth"
      @event-show-modal-wellcome="showWellcomeModal"
    />
  </div>
</template>

<script>
import TheMegaMenu from "~/components/Navigation/TheMegaMenu.vue";
import WellcomeSignUp from "~/components/Auth/WellcomeSignUp.vue";
import modalAuth from "~/components/Auth/AuthModals/modalAuth.vue";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  name: "TheHeader",
  components: {
    TheMegaMenu,
    WellcomeSignUp,
    modalAuth,
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      showModalAuth: false,
      showModalWellcome: false,
      userIsAuth: false,
      authUpdated: 0,
    };
  },

  created() {},

  mounted() {
    // this.userIsAuth = this.$store.getters.userIsAuth;
    // if (this.userIsAuth) {
    //     this.authUpdated++;
    // } else if (!this.userIsAuth) {
    //     this.authUpdated++;
    // }
    // console.log(this.userIsAuth);
    window.addEventListener("scroll", this.onScroll);
    // setInterval(() => {
    //     this.showModalWellcome = this.$store.getters.stateShowModalWellcome;
    //     // console.log("legendary");
    // }, 100);

    // this.$store.watch(
    //     state => {
    //         return (this.showModalWellcome = this.$store.getters.stateShowModalWellcome);
    //     },
    //     val => {
    //         //something changed do something
    //     }
    //     // {
    //     //     deep: true
    //     // }
    // );
  },
  computed: {
    stateShowModalWellcome() {
      return (this.showModalWellcome = this.$store.getters.stateShowModalWellcome); // return the state value in `stateShowModalWellcome`
    },
    userIsAuthChanged() {
      return (this.userIsAuth = this.$store.getters.userIsAuth);
    },
  },
  watch: {
    stateShowModalWellcome() {
      // this function will trigger when ever the value of `stateShowModalWellcome` changes
      // this.showModalWellcome = newVal;
      // console.log(
      //     "showModalWellcome in header is",
      //     this.showModalWellcome
      // );
    },
    userIsAuthChanged() {},
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    showAuthModal() {
      this.showModalAuth = true;

      // console.log("hi");
      // if (!this.userIsAuth) {
      //   this.showModalAuth = true;
      // } else if (this.userIsAuth) {
      //   this.$router.push("/profile");
      // }
    },

    showWellcomeModal() {
      this.showModalAuth = false;
      this.$store.dispatch({
        type: "stateShowModalWellcome",
        value: true,
      });
      // setTimeout(() => {
      //     this.showModalWellcome = this.$store.getters.stateShowModalWellcome;
      // }, 200);
    },
    closeWellcomeModal() {
      this.showModalWellcome = false;
      this.$store.dispatch({
        type: "stateShowModalWellcome",
        value: false,
      });
    },
    closeWellcomeModalandGoToProfile() {
      this.showModalWellcome = false;
      this.$store.dispatch({
        type: "stateShowModalWellcome",
        value: false,
      });
      this.$router.push("/profile/personal-info");
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
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
    goToBasket() {
      this.$router.push("/cart");
    },
    getTextByTextKey,
  },
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
  z-index: 2;
}
#overlay {
  position: fixed; /* Sit on top of the page content */
  @include display-flex();
  justify-content: center;
  align-items: center;
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  z-index: 7;
  background: $overlay__profile;
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
  &__btn::before {
    @include font-icon__limoo();
    font-size: 17px;
    content: "\e869";
    cursor: pointer;
    color: $input-border;
    vertical-align: middle;
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
  &__arrow::before {
    @include display-flex();
    @include font-icon__limoo();
    font-size: 13px;
    content: "\e801";
    margin-left: 10px;
    cursor: pointer;
    color: $input-border;
    transform: rotate(270deg);
  }
  &__location::before {
    margin-right: 8px;
    margin-left: 6px;
    content: "\e817";
    @include font-icon__limoo();
    font-size: 17px;
    color: $code;
    /* vertical-align: middle; */
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
  &__cart-basket::before,
  &__profile-person::before,
  &__call-person::before,
  &__sell-person::before {
    content: "\e802";
    @include font-icon__limoo();
    font-size: 15px;
    color: $code;
  }
  &__profile-person::before {
    content: "\e823";
  }
  &__call-person::before {
    content: "\e81f";

    font-size: 14px;
  }
  &__sell-person::before {
    content: "\e821";
    font-size: 14px;
    color: $yellow;
  }
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
    z-index: 7;
  }
  /* #overlay {
        display: none;
    } */
  .the-header {
    background-color: $white;
    z-index: 5;
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
