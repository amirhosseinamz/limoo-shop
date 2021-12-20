<template>
  <div class="container">
    <the-user-info />
    <div class="profile-sidebar">
      <!-- =section1= -->
      <div class="profile-sidebar__flex profile-sidebar__user">
        <div class="profile-sidebar__flex-part d-rtl">
          <NuxtLink
            class="profile-sidebar__user-icon"
            :class="{ 'link-item__activated': profileIsActive }"
            to="/profile"
          >
            {{ getTextByTextKey("profile_sidebar_userprofile") }}
          </NuxtLink>
        </div>
      </div>
      <!-- =section2= -->
      <div class="profile-sidebar__flex profile-sidebar__order">
        <div class="profile-sidebar__flex-part d-rtl">
          <NuxtLink
            class="profile-sidebar__order-icon"
            :class="{ 'link-item__activated': OrdersIsActive }"
            to="/profile/my-orders/wait-for-payment"
          >
            {{ getTextByTextKey("profile_sidebar_order") }}
          </NuxtLink>
        </div>
        <span @click="goToMyOrders" class="profile-sidebar__arrow-left"></span>
      </div>
      <hr class="splicer" />
      <div
        class="splicer_down profile-sidebar__flex profile-sidebar__flex profile-sidebar__favorite"
      >
        <div class="profile-sidebar__flex-part d-rtl">
          <NuxtLink
            to="/profile/favorites"
            class="profile-sidebar__favorite-icon"
            :class="{ 'link-item__activated': favoriteActive }"
          >
            {{ getTextByTextKey("profile_sidebar_favorite") }}
          </NuxtLink>
        </div>
        <span
          @click="goToFavoriteProduct"
          class="profile-sidebar__arrow-left"
        ></span>
      </div>

      <hr class="splicer" />
      <div class=" profile-sidebar__flex profile-sidebar__personal-info">
        <div class="profile-sidebar__flex-part d-rtl">
          <NuxtLink
            class="profile-sidebar__personal-info-icon"
            :class="{
              'link-item__activated': personalInfoIsActive,
            }"
            to="/profile/personal-info"
          >
            {{ getTextByTextKey("profile_sidebar_edit_info") }}
          </NuxtLink>
        </div>
        <span
          @click="goToPersonalInfo"
          class="profile-sidebar__arrow-left"
        ></span>
      </div>
      <hr class="splicer" />
      <div class="splicer_down profile-sidebar__flex profile-sidebar__address">
        <div class="profile-sidebar__flex-part d-rtl">
          <NuxtLink
            class="profile-sidebar__address-icon"
            :class="{
              'link-item__activated': adressActive,
            }"
            to="/profile/adresses"
          >
            {{ getTextByTextKey("profile_sidebar_address") }}
          </NuxtLink>
        </div>
        <span @click="goToAdresses" class="profile-sidebar__arrow-left"></span>
      </div>
      <!-- =section4= -->
      <div class=" profile-sidebar__flex profile-sidebar__comment">
        <div class="profile-sidebar__flex-part d-rtl">
          <NuxtLink
            class="profile-sidebar__comment-icon"
            :class="{
              'link-item__activated': commentsIsActive,
            }"
            to="/profile/comments"
          >
            {{ getTextByTextKey("profile_sidebar_comment") }}
          </NuxtLink>
        </div>
        <span @click="goToComments" class="profile-sidebar__arrow-left"></span>
      </div>
      <hr class="splicer" />
      <div class=" profile-sidebar__flex profile-sidebar__support">
        <div class="profile-sidebar__flex-part d-rtl">
          <NuxtLink
            class="profile-sidebar__support-icon"
            :class="{
              'link-item__activated': supportIsActive,
            }"
            to="/profile/support/ticket"
          >
            {{ getTextByTextKey("proflie_sidebar_support") }}
          </NuxtLink>
        </div>
        <span @click="goToSupport" class="profile-sidebar__arrow-left"></span>
      </div>
      <hr class="splicer" />
      <div class="splicer_down profile-sidebar__flex profile-sidebar__history">
        <div class="profile-sidebar__flex-part d-rtl">
          <NuxtLink
            :class="{
              'link-item__activated': userHistoryIsActive,
            }"
            class="profile-sidebar__history-icon"
            to="/profile/user-history"
          >
            {{ getTextByTextKey("profile_sidebar_wached__product") }}
          </NuxtLink>
        </div>
        <span
          @click="goToUserHistory"
          class="profile-sidebar__arrow-left"
        ></span>
      </div>


      <!-- for mobile screen only -->
      <div class="mobile-screen profile-sidebar__flex profile-sidebar__privacy">
        <div class="profile-sidebar__flex-part d-rtl">
          <NuxtLink class="profile-sidebar__privacy-icon" to="">
            {{ getTextByTextKey("footer_privacy") }}
          </NuxtLink>
        </div>
        <span class="profile-sidebar__arrow-left"></span>
      </div>
      <hr class="splicer" />
      <div class="mobile-screen profile-sidebar__flex profile-sidebar__rules">
        <div class="profile-sidebar__flex-part d-rtl">
          <NuxtLink class="profile-sidebar__rules-icon" to="">
            {{ getTextByTextKey("profile_sidebar_roule") }}
          </NuxtLink>
        </div>
        <span class="profile-sidebar__arrow-left"></span>
      </div>
      <!-- =section7= -->
      <hr class="splicer__logout" />
      <div class=" profile-sidebar__flex-part profile-sidebar__logout ">
        <div
          @click="logOutUser"
          class="profile-sidebar__logout-link profile-sidebar__logout-icon d-rtl"
        >
          {{ getTextByTextKey("profile_sidebar_logout") }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheUserInfo from "~/components/Profile/TheUserInfo.vue";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  name: "TheProfilesideBar",
  components: {
    TheUserInfo,
  },
  data() {
    return {
      profileIsActive: false,
      personalInfoIsActive: false,
      favoriteActive: false,
      adressActive: false,
      userHistoryIsActive: false,
      OrdersIsActive: false,
      commentsIsActive: false,
      supportIsActive: false,
    };
  },
  created() {
    let curentRoute = this.$route.path;
    // console.log(curentRoute);
    if (curentRoute === "/profile" || curentRoute === "/profile/") {
      this.profileIsActive = true;
    } else if (
      curentRoute === "/profile/personal-info" ||
      curentRoute === "/profile/personal-info/"
    ) {
      this.personalInfoIsActive = true;
    } else if (
      curentRoute === "/profile/favorites" ||
      curentRoute === "/profile/favorites/"
    ) {
      this.favoriteActive = true;
    } else if (
      curentRoute === "/profile/adresses" ||
      curentRoute === "/profile/adresses/"
    ) {
      this.adressActive = true;
    } else if (
      curentRoute === "/profile/user-history" ||
      curentRoute === "/profile/user-history/"
    ) {
      this.userHistoryIsActive = true;
    } else if (curentRoute.search("/profile/my-orders/") === 0) {
      this.OrdersIsActive = true;
    } else if (
      curentRoute === "/profile/comments" ||
      curentRoute === "/profile/comments/"
    ) {
      this.commentsIsActive = true;
    } else if (
      curentRoute === "/profile/support/ticket" ||
      curentRoute === "/profile/support/ticket/" ||
      curentRoute === "/profile/support/faq" ||
      curentRoute === "/profile/support/faq/"
    ) {
      this.supportIsActive = true;
    } else if (curentRoute === "/profile/favorites") {
      this.favoriteActive = true;
    } else if (curentRoute === "/profile/adresses") {
      this.adressActive = true;
    }
  },
  methods: {
    getTextByTextKey,
    goToPersonalInfo() {
      this.$router.push("/profile/personal-info");
    },
    goToUserHistory() {
      this.$router.push("/profile/user-history");
    },
    goToFavoriteProduct() {
      this.$router.push("/profile/favorites");
    },
    goToAdresses() {
      this.$router.push("/profile/adresses");
    },
    goToComments() {
      this.$router.push("/profile/comments");
    },
    goToSupport() {
      this.$router.push("/profile/support/ticket");
    },
    goToMyOrders() {
      this.$router.push("/profile/my-orders/in-progress");
    },
    logOutUser() {
      this.$store.dispatch('authentication/authentication/signOut');
      // const userToken = this.$store.getters["authUser/getToken"];
      // this.$store
      //   .dispatch("authUser/signOutUser", { token: userToken })
      //   .then(() => {
      //     this.$store.dispatch({
      //       type: "userIsAuth",
      //       value: false,
      //     });
      //     this.$router.replace("/");
      //     this.$store.commit("PhoneNumber", { value: "" });
      //   });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin: toRem(166) toRem(16) toRem(50) toRem(30);
  width: 100%;
  max-width: toRem(329);
  min-height: min-content;
  height: max-content;
  @include display-flex();
  flex-direction: column;
  justify-content: flex-start;
}
.link-item__activated {
  color: $yellow !important;
}
.link-item__activated::before {
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
  /* &__flex-part:hover &__user-icon, */
  /* &__flex-part:hover &__logout-icon, */
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
    /* filter: invert(20%) sepia(60%) saturate(519%) hue-rotate(335deg)
            brightness(150%) contrast(105%); */
    color: $yellow;
  }

  &__gifttcard-icon,
  &__creditcard-icon {
    width: 24px;
    height: 24px;
    margin-right: 22px;
    margin-left: 17px;
  }
  /* ======================= */
  &__user-icon::before,
  &__order-icon::before,
  &__favorite-icon::before,
  &__personal-info-icon::before,
  &__address-icon::before,
  &__comment-icon::before,
  &__support-icon::before,
  &__history-icon::before,
  &__logout-icon::before {
    @include font-icon__limoo();
    color: $gray;
    line-height: 1em;
    vertical-align: middle;
    font-size: 18px;
    margin-left: 15px;
    margin-right: 24px;
  }

  &__user-icon::before {
    content: "\e823";
  }
  &__order-icon::before {
    content: "\e812";
  }
  &__favorite-icon::before {
    content: "\e816";
  }
  &__personal-info-icon::before {
    content: "\e86a";
    font-size: 20px;
    margin-left: 13px;
    margin-right: 22px;
  }
  &__address-icon::before {
    content: "\e817";
  }
  &__comment-icon::before {
    content: "\e819";
  }
  &__support-icon::before {
    content: "\e81f";
  }
  &__history-icon::before {
    content: "\e811";
  }
  &__logout-icon::before {
    content: "\e818";
  }
  &__user-icon:hover::before,
  &__order-icon:hover::before,
  &__favorite-icon:hover::before,
  &__personal-info-icon:hover::before,
  &__address-icon:hover::before,
  &__comment-icon:hover::before,
  &__support-icon:hover::before,
  &__history-icon:hover::before {
    color: $yellow;
  }

  &__logout-icon:hover::before {
    color: $red-logout;
  }
  /* ======================= */
  &__notification-icon {
    width: 20px;
    height: 18px;
    margin-right: 24px;
    margin-left: 19px;
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
      @include display-flex();
      justify-content: center;
      align-items: center;
      width: toRem(50);
      height: 100%;
    }
    &__arrow-left::before {
      content: "\e801";
      @include font-icon__limoo();
      font-size: 14px;
      color: $input-border;
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

    &__privacy-icon::before,
    &__rules-icon::before {
      @include font-icon__limoo();
      color: $gray;
      line-height: 1em;
      vertical-align: middle;
      font-size: 18px;
      margin-left: 17px;
      margin-right: 30px;
    }
    &__privacy-icon::before {
      content: "\e867";
    }
    &__rules-icon::before {
      content: "\e866";
    }
    &__privacy-icon:hover::before,
    &__rules-icon:hover::before {
      color: $yellow;
    }
    &__order-icon,
    &__logout-icon,
    &__gifttcard-icon,
    &__creditcard-icon,
    &__history-icon,
    &__support-icon,
    &__comment-icon,
    &__address-icon,
    &__personal-info-icon,
    &__favorite-icon,
    &__user-icon,
    &__logout-icon {
      margin-right: 3px;
    }

    &__notification-icon {
      margin-right: 28px;
    }
    &__logout {
      height: 67px;
    }
  }
}
</style>
