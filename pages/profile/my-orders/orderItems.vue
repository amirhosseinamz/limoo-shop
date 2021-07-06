<template>
  <div class="profile-container">
    <the-profile-side-bar class="desktop-screen" />

    <div class="mobile-screen">
      <div class="mobile-screen__holder">
        <span class="mobile-screen__holder-txt">
          {{ getTextByTextKey("orders_order_my") }}
        </span>
        <span @click="goToProfile" class="mobile-screen__holder-arrow"></span>
      </div>
    </div>

    <div class="user-profile__holder">
      <div class="user-profile">
        <div class="desktop-nav">
          <span class="user-profile__topic">
            {{ getTextByTextKey("orders_order_list_text") }}
          </span>
          <div class="order-nav d-rtl">
            <base-tabs
              :tabs="tabsNames"
              :selected="selected"
              @change-tab="goToOrder"
              length="2"
              class="w-100 d-rtl"
              tabs-item-class="order-nav__items"
              tabs-class="tabs-navigator"
            >

            </base-tabs>
          </div>
        </div>

        <div class="order-holder">
          <!--  -->
          <the-order-item
            :user-order-data="userOrderData"
            :text-error="textError"
            :current-url="currentUrl"
          ></the-order-item>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import theOrderItem from "~/components/Profile/UserOrder/theOrderItem.vue";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  middleware: "authentication",
  props: {
    userOrderData: { type: [Object, Array], default: [] },
    textError: { type: String, default: "" },
    currentUrl: { type: String, default: "" },
  },
  components: {
    TheProfileSideBar,
    theOrderItem,
  },

  data() {
    return {
      tabsNames: [
        this.getTextByTextKey("orders_tab_waiting_for_payment"),
        this.getTextByTextKey("orders_tab_processing"),
        this.getTextByTextKey("orders_tab_delivered"),
        this.getTextByTextKey("orders_tab_referred"),
        this.getTextByTextKey("orders_tab_canceled")
      ],
      selected: this.getTextByTextKey("orders_tab_waiting_for_payment"),
      currentOrder: {},
    };
  },

  created() {},

  mounted() {
    const currentRoutueName = this.$route.name;

    switch (currentRoutueName) {
      case "profile-my-orders-wait-for-payment":
        this.selected = this.tabsNames[0]
        break;

      case "profile-my-orders-in-progress":
        this.selected = this.tabsNames[1]
        break;

      case "profile-my-orders-delivered":
        this.selected = this.tabsNames[2]
        break;

      case "profile-my-orders-returned":
        this.selected = this.tabsNames[3]
        break;

      case "profile-my-orders-canceled":
        this.selected = this.tabsNames[4]
        break;
    }

    const pageContent = Object.values(this.userOrderData).length;
    if (pageContent == 0) {
      this.$router.push(`/profile/my-orders/${this.currentUrl}`);
    }
  },

  methods: {
    getTextByTextKey,
    goToProfile() {
      this.$router.push("/profile");
    },
    goToOrder(page) {
      if (page === this.tabsNames[1]) {
        this.$router.push("/profile/my-orders/in-progress");
        this.paidInProgress = true;
      } else if (page === this.tabsNames[2]) {
        this.$router.push("/profile/my-orders/delivered");
        this.delivered = true;
      } else if (page === this.tabsNames[3]) {
        this.$router.push("/profile/my-orders/returned");
        this.returned = true;
      } else if (page === this.tabsNames[4]) {
        this.$router.push("/profile/my-orders/canceled");
        this.canceled = true;
      } else if (page === this.tabsNames[0]) {
        this.$router.push("/profile/my-orders/wait-for-payment");
        this.waitForPayment = true;
      }
      this.selected = page
    },
    // request //
  },
};
</script>

<style lang="scss" scoped>
.mobile-screen {
  display: none;
}
.profile-container {
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  min-height: 100vh;
  display: flex;
  flex-direction: row-reverse;
}

.user-profile__holder {
  margin: 166px 0 50px 17px;
  width: 100%;
  min-height: fit-content;
  height: max-content;
  /* border: 1px solid #2f0404; */
}
.desktop-nav {
  @include display-flex();
  flex-direction: column;
  width: 100%;
  background-color: $white;
  border-radius: 10px;
}
.user-profile {
  width: 100%;

  min-height: 139px;
  @include display-flex();
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  /* background: $white; */
  border-radius: 10px;
  box-shadow: 0px 8px 16px $box__shadow;
  /* border: 1px solid #f00808; */
  &__topic {
    font-size: 18px;
    line-height: 140.62%;
    color: $black-topic;
    align-self: flex-end;
    margin-top: 23px;
    margin-right: 38px;
  }
}
.order-nav::v-deep {
  @include display-flex();
  justify-content: space-between;
  margin-top: 40px;
  height: 51px;
  width: 100%;
  padding: 0 2rem;
  .tabs-navigator {
    @include display-flex();
    justify-content: space-between;
  }
  .order-nav__items {
    white-space: nowrap;
    padding: 0 0.5rem 1.8rem 0.5rem;
    font-size: 17px;
  }
}
.order-holder {
  width: 100%;
  /* background: $white; */
  height: max-content;
  /* padding-bottom: 70px; */
  border-radius: 10px;
  /* border: 1px solid blue; */
}
.order-counter {
  @include display-flex();
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: $red-color;
  background-color: $bg-libht__red;
  margin-right: 5px;
  font-size: 16px;
}
@media (max-width: 1450px) {
}
@media (max-width: 1220px) {
}
@media (max-width: 960px) {
  .desktop-screen {
    display: none;
  }
  .mobile-screen {
    display: block;
    &__holder {
      @include display-flex();
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      height: 56px;
      background: $white;
      margin-top: 47px;
      &-txt {
        font-size: 14px;
        line-height: 140.62%;
        margin-right: 16px;
        color: $black-topic;
      }
      &-arrow {
        margin-left: 16px;
      }
      &-arrow::before {
        content: "\e801";
        @include font-icon__limoo();
        font-size: 14px;
        color: $input-border;
        margin-right: 4px;
        margin-left: 8px;
      }
    }

  }
  .profile-container {
    @include display-flex();
    flex-direction: column;
    margin-bottom: 58px;
  }
  .user-profile__holder {
    margin: 8px 0;
    padding: 0 16px;
  }
  .user-profile {
    height: 62px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    &__topic {
      display: none;
    }
  }
  .order-nav::v-deep {
    .order-nav__items {
      font-size: 16px;
    }
  }
}
@media (max-width: 700px) {
  .order-counter {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    color: $red-color;
    background-color: $bg-libht__red;
    margin-right: 3px;
    font-size: 11px;
  }
  .user-profile__holder {
    margin: 0;
    padding: 0;
    border-top: 1px solid $light-gray;
  }
  .desktop-nav {
    @include display-flex();
    flex-direction: column;
    width: 100%;
    background-color: $white;
    border-radius: 0;
    margin-bottom: 8px;
  }
  .order-holder {
    padding: 0 5px;
  }
  .order-nav::v-deep {
    overflow: auto;
    margin-top: 0.6rem;
    height: 60px;
    width: 100%;
    padding: 1rem 1rem 0 1rem;

    .order-nav__items {
      font-size: 13px;
      margin-left: 1.5rem;
    }
  }
}

@media (max-width: 350px) {
}

@media (max-width: 320px) {
}
</style>
