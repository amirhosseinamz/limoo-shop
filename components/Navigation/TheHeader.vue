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
    <transition name="backdrop-scale">
      <div class="backdrop" v-if="showModal" @click="modalClose"></div>
    </transition>
    <transition name="scale">
      <modalAuth
        v-if="showModal"
        @event-show-modal-wellcome="showWellcomeModal"
        @close-modal="modalClose"
      />
    </transition>

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
      showModal: false,
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
      this.showModal = true;
    },
    modalClose() {
      this.showModal = false;
    },
    showWellcomeModal() {
      this.showModal = false;
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
@include scale-modal-animation();
@include backdrop-scale-animation();

.backdrop {
  @extend .modal-backdrop;
  background: rgba(81,81,81,.6);
}
.header-container {
  position: fixed;
  @include display-flex();
  flex-direction: column;
  width: 100%;
  height: toRem(135);
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
  max-width: toRem(1920);
  height: toRem(81);
  background-color: $white;
  border-bottom: toRem(1) solid $gray-border;
  &__items {
    @include display-flex();
    flex-direction: row-reverse;
    align-items: center;
  }
}

.logo {
  margin: toRem(16);
  &-img {
    width: toRem(102);
    height: toRem(49);
  }
}

.search-section {
  &__items {
    height: toRem(49);
    line-height: toRem(28);
    border: toRem(1) solid $input-border;
    border-radius: toRem(10);
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    width: toRem(492);
  }
  &__input {
    @extend .sass-input__default;
    font-family: inherit;
    font-size: toRem(14);
    font-weight: 300;
    flex-grow: 2;
  }

  &__btn {
    @extend .sass-input__default;
    margin: toRem(14) toRem(16) toRem(15) toRem(4);
  }
  &__btn::before {
    @include font-icon__limoo();
    font-size: toRem(17);
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
  width: toRem(129);
  height: toRem(49);
  outline: none;
  border: toRem(1) solid $gray-border;
  border-radius: toRem(10);
  margin: toRem(16) toRem(8);
  &__btn-holder {
    @include display-flex();
    flex-direction: row;
    align-items: center;
  }
  &__btn {
    font-size: toRem(14);
    font-family: inherit;
    border: none;
    outline: none;
    background: transparent;
  }
  &__arrow::before {
    @include display-flex();
    @include font-icon__limoo();
    font-size: toRem(13);
    content: "\e801";
    margin-left: toRem(10);
    cursor: pointer;
    color: $input-border;
    transform: rotate(270deg);
  }
  &__location::before {
    margin-right: toRem(8);
    margin-left: toRem(6);
    content: "\e817";
    @include font-icon__limoo();
    font-size: toRem(17);
    color: $code;
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
  height: toRem(49);
  border: toRem(1) solid $gray-border;
  border-radius: toRem(10);
  cursor: pointer;
  &__cart-basket::before,
  &__profile-person::before,
  &__call-person::before,
  &__sell-person::before {
    content: "\e802";
    @include font-icon__limoo();
    font-size: toRem(15);
    color: $code;
  }
  &__profile-person::before {
    content: "\e823";
  }
  &__call-person::before {
    content: "\e81f";
    font-size: toRem(14);
  }
  &__sell-person::before {
    content: "\e821";
    color: $yellow;
  }
  &__cart {
    width: toRem(115);
    margin-left: toRem(16);
    &-btn {
      font-size: toRem(14);
      font-family: inherit;
      border: none;
      outline: none;
      background: transparent;
      margin-left: toRem(8);
      cursor: pointer;
    }
  }
  &__profile {
    width: toRem(134);
    margin-left: toRem(8);
    &-btn {
      font-size: toRem(14);
      font-family: inherit;
      border: none;
      outline: none;
      background: transparent;
      margin-right: toRem(8);
      cursor: pointer;
    }
  }
  &__call {
    width: toRem(109);
    margin-left: toRem(8);
    &-btn {
      font-size: toRem(14);
      font-family: inherit;
      border: none;
      outline: none;
      background: transparent;
      margin-right: toRem(8);
      cursor: pointer;
    }
  }
  &__sell {
    width: toRem(151);
    margin-left: toRem(8);
    background: #fff9ea;
    &-btn {
      font-size: toRem(14);
      font-family: inherit;
      border: none;
      outline: none;
      background: transparent;
      margin-right: toRem(8);
      cursor: pointer;
    }
  }
}

@media (max-width: 1300px) {
  /* .navigation-items {
        display: block;
    } */
  .search-section__items {
    width: toRem(250);
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
    height: toRem(47);
  }

  .logo {
    margin: toRem(12) toRem(16) toRem(6) toRem(9);
    &-img {
      width: toRem(70);
      height: toRem(31);
    }
  }
  .city-label {
    display: none;
  }
  .search-section {
    &__items {
      height: toRem(19);
      line-height: toRem(18);
      border: none;
      border-radius: 0;
      border-right: toRem(1) solid $gray-border;
      width: toRem(137);
    }
    &__input {
      @extend .sass-input__default;
      font-family: inherit;
      font-size: toRem(13);
      font-weight: 300;
      flex-grow: 2;
    }
    &__btn {
      @extend .sass-input__default;
      margin: 0 toRem(8) toRem(13) toRem(4);
    }
  }
  .navigation-item {
    &__cart,
    &__profile,
    &__sell {
      display: none;
    }
    &__call {
      width: toRem(28);
      height: toRem(21);
      margin: toRem(14) toRem(8) toRem(13) toRem(16);
      border: none;
      border-radius: 0;
      border-right: toRem(1) solid $gray-border;
      &-person {
        width: toRem(20);
        height: toRem(20);
      }
      &-btn {
        display: none;
      }
    }
  }
}

@media (max-width: 720px) {
  .search-section__items {
    width: toRem(200);
  }
}

@media (max-width: 350px) {
  .logo {
    margin: toRem(12) toRem(10) toRem(6) toRem(4);
  }
  .search-section {
    &__items {
      width: toRem(110);
    }
    &__btn {
      margin: 0 toRem(2) toRem(13) toRem(4);
    }
  }
}
</style>
