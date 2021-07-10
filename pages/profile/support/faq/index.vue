<template>
  <div class="profile-container">
    <the-profile-side-bar class="desktop-screen" />

    <div class="mobile-screen">
      <div class="mobile-screen__holder">
        <span class="mobile-screen__holder-txt">پشتیبانی لیمو</span>
        <img
          @click="goToProfile"
          class="mobile-screen__holder-arrow"
          src="/icons/arrow-left.svg"
        />
      </div>
    </div>
    <!-- ----- -->
    <div class="support__navbar-mobile d-rtl">
      <base-tabs
        :tabs="tabsNames"
        :selected="selected"
        @change-tab="goToSupport"
        class="w-100 d-rtl"
        tabs-item-class="support-nav__mobile-items"
        tabs-class="tabs-navigator"
      ></base-tabs>
    </div>
    <!-- ----- -->
    <div class="user-profile__holder">
      <div class="user-profile w-100">
        <div class="user-profile__support d-rtl">
          <span class="user-profile__topic">پشتیبانی لیمو</span>
          <NuxtLink
            to="/profile"
            class="user-profile__back-btn"
          ></NuxtLink>
        </div>
        <hr class="splicer-line" />
        <div class="user-profile__support-contact d-rtl">
          <h4 class="support-contact__title">
            راه های ارتباطی مستقیم با پشتیبانی لیمو
          </h4>
          <div class="support-contact__holder">
            <h4 class="support-contact__description">
              شما با استفاده از راه های ارتباطی درج شده می توانید
              به صورت شبانه روزی با پشتیبانی سایت لیمو در ارتباط
              باشید و برای حل مشکلات خود اقدام نمایید.
            </h4>
            <div class="support-contact__left">
              <div class="support-contact__mail">
                <h4 class="support-contact__mail-title">
                  پست الکترونیکی:
                </h4>
                <span class="support-contact__mail-limoo"
                >Limooport@limoo.com</span
                >
              </div>
              <div class="support-contact__call">
                <h4 class="support-contact__call-title">
                  شماره پشتیبانی:
                </h4>
                <span class="support-contact__call-limoo">
                                    0215862
                                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- ============================ -->
        <div class="user-profile__support-mobile d-rtl">
          <h4 class="support-contact__mobile-title">
            راه های ارتباطی مستقیم با پشتیبانی لیمو
          </h4>
          <div class="support-contact__call">
            <h4 class="support-contact__call-title">
              شماره پشتیبانی:
            </h4>
            <span class="support-contact__call-limoo">
                            0215862
                        </span>
          </div>
          <div class="support-contact__mail">
            <h4 class="support-contact__mail-title">
              پست الکترونیکی:
            </h4>
            <span class="support-contact__mail-limoo"
            >Limooport@limoo.com</span
            >
          </div>
        </div>
        <div class="support__navbar-desktop d-rtl">

          <base-tabs
            :tabs="tabsNames"
            :selected="selected"
            @change-tab="goToSupport"
            class="w-100 d-rtl"
            tabs-item-class="support-nav__items"
            tabs-class="tabs-navigator"
          >

          </base-tabs>
        </div>
        <div class="w-100 user-profile-adresses-main flex-column" id="tabs-content">

        </div>
      </div>
    </div>

  </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import { getTextByTextKey } from "~/modules/splitPartJsonResource";

export default {
  middleware: "authentication",
  layout: "removeFooterMobile",
  components: {
    TheProfileSideBar,
    // contentTickets,
    // modalDeleteTicket
  },

  data() {
    return {
      tabsNames: [
        this.getTextByTextKey("support_tab_send_ticket"),
        this.getTextByTextKey("support_faq"),
      ],
      selected: this.getTextByTextKey("support_tab_send_ticket"),
    };
  },
  computed: {
    adressesData () {
      return this.$store.getters["profile/faq/faq/adressesData"]
    },
    allProvince () {
      return this.$store.getters["profile/faq/faq/allProvince"]
    },
    allCities () {
      return this.$store.getters["profile/faq/faq/allCities"]
    }
  },
  created() {
    console.log(this.allProvince);
  },
  mounted() {
    const curentRoute = this.$route.path;
    // const activeTab = this.$route.query.activeTab;
    if (curentRoute === "/profile/support/ticket") {
      this.selected = this.tabsNames[0];
    } else if (curentRoute === "/profile/support/faq") {
      this.selected = this.tabsNames[1];
    }
  },

  methods: {
    goToProfile() {
      this.$router.push("/profile");
    },
    goToSupport(page) {
      if (page === this.tabsNames[0]) {
        this.$router.push("/profile/support/ticket");
        this.selected = page;
      } else if (page === this.tabsNames[1]) {
        this.$router.push("/profile/support/faq");
        this.selected = page;
      }
    },
    btnDeleteProduct(data) {
      const removeFavorite = () => {
        let indexDelete = -1;

        this.adressesData.map((content, index) => {
          if (content.id == data.id) {
            indexDelete = index;
          }
        });

        this.adressesData.splice(indexDelete, 1);
      };

      removeFavorite();
      this.statusShowModalDeleteProduct = false;

      // request //
    },

    showModalDeleteProduct(data) {
      this.currentProduct = data;
      this.statusShowModalDeleteProduct = true;
    },

    selectedProvince(data) {
      // console.log(data,'selectedProvince');
    },

    selectedCity(data) {
      // console.log(data,'selectedCitys');
    },

    submitAddressAdd(data, state) {
      this.updateAddress++;
      let findIndex = 0;

      const faceUpdatePage = () => {
        this.adressesData.map((content, i) => {
          if (content.id == data.id) {
            this.adressesData[i] = data;
          }
        });
      };

      // بعد از اتصال به بک این قسمت حذف شود //
      if (state == "edit") {
        faceUpdatePage();
      } else {
        data.id = 20 + this.updateAddress;
        this.adressesData.push(data);
      }

      // send data server //
    },
    getTextByTextKey
  },
};
</script>

<style lang="scss" scoped>
#overlay {
  position: fixed; /* Sit on top of the page content */
  @include display-flex();
  justify-content: center;
  align-items: center;
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  /* transition: opacity 200ms ease-out; */
  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  z-index: 1;
  background: $overlay__profile;
}

.mobile-screen,
.user-profile__support-mobile,
.support__navbar-mobile {
  display: none;
}

.user-profile-adresses-main {
  background: transparent;
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
  min-height: 100vh;
  height: max-content;
  /* border: 5px solid #2f0404; */
}

.user-profile {
  width: 100%;

  height: max-content;
  @include display-flex();
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  /* background: $white; */
  border-radius: 10px;
  box-shadow: 0px 8px 16px $box__shadow;
  /* border: 1px solid #f00808; */
  &__support {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: $white;
    width: 100%;
    height: 96px;
    /* border: 1px solid #f00808; */
  }

  &__support-contact {
    @include display-flex();
    flex-direction: column;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: $white;
    width: 100%;
    height: 200px;
  }

  &__topic {
    font-size: 18px;
    line-height: 140.62%;
    color: $black-topic;
    align-self: flex-end;
    margin-top: 37px;
    margin-right: 25px;
    margin-bottom: 38px;
  }

  &__back-btn {
    text-decoration: none;
    /* border: 1px solid #f00808; */
    @include display-flex();
    flex-direction: row;
    border-right: 1px solid $light-gray;
    height: 64px;
    margin-left: 26px;
    margin-bottom: 16px;
    cursor: initial;
  }

  &__back-btn::after {
    content: "\e801";
    /* border: 1px solid #f00808; */
    @include font-icon__limoo();
    @include display-flex();
    font-size: 15px;
    padding: 4px;
    color: $input-border;
    align-self: center;
    cursor: pointer;
    margin-right: 16px;
  }
}

.support__navbar-desktop::v-deep {
  @include display-flex();
  flex-direction: row;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: $white;
  box-shadow: 0 0.5rem 1rem $box__shadow;
  z-index: 1;
  padding: 0 57px;
  margin-top: 24px;
  width: 100%;
  height: 83px;

  .support-nav__items {
    font-size: 18px;
    padding: 0 2.7rem;
    white-space: nowrap;
  }
  li:nth-child(1) {
    margin-left: 9rem;
  }
}

.support-contact__title {
  font-weight: 400;
  text-align: right;
  margin-top: 24px;
  margin-right: 22px;
}

.support-contact__holder {
  @include display-flex();
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
  padding: 0 22px;
  /* border: 1px solid #f00808; */
}

.support-contact__description {
  font-weight: 400;
  color: $gray;
  width: 48%;
  padding-top: 4px;
  text-align: right;
  line-height: 180.62%;
  /* border: 1px solid #3608f0; */
}

.support-contact__left {
  @include display-flex();
  flex-direction: column;
  border-right: 1px solid $light-gray;
  padding: 4px 30px 0 0;
  align-self: center;
  height: 89px;
  width: 48%;
  /* border: 1px solid #3608f0; */
}

.support-contact__mail,
.support-contact__call {
  @include display-flex();
  flex-direction: row;
}

.support-contact__call {
  margin-top: 27px;
}

.support-contact__mail-title::before {
  @include font-icon__limoo();
  content: "\e81a";
  font-size: 18px;
  vertical-align: middle;
  margin-left: 8px;
}

.support-contact__call-title::before {
  @include font-icon__limoo();
  content: "\e81f";
  font-size: 18px;
  vertical-align: middle;
  margin-left: 8px;
}

.support-contact__mail-title,
.support-contact__call-title {
  font-weight: 400;
  color: $gray;
  line-height: 140.62%;
}

.support-contact__mail-limoo,
.support-contact__call-limoo {
  line-height: 140.62%;
  font-size: 16px;
  margin-right: 8px;
}

.splicer-line {
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid $light-gray;
}

.user-profile__topic {
  text-align: right;
}

@media (max-width: 1450px) {
}

@media (max-width: 1220px) {
  .support-contact__holder {
    padding: 0 5px;
  }
  .support-contact__left {
    padding-right: 5px;
    width: 49%;
  }
  .support-contact__mail-title,
  .support-contact__mail-title::before,
  .support-contact__call-title,
  .support-contact__call-title::before {
    font-size: 13px;
  }
  .support-contact__mail-limoo,
  .support-contact__call-limoo {
    font-size: 15px;
    margin-right: 2px;
  }
  .support-contact__description {
    font-size: 15px;
    width: 49%;
  }
}

@media (max-width: 960px) {
  .desktop-screen,
  .support__navbar-desktop {
    display: none;
  }
  .splicer-line,
  .user-profile__support-contact,
  .user-profile__support {
    display: none;
  }
  /* ================== */
  .support__navbar-mobile::v-deep {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    background-color: $white;
    box-shadow: 0 0.5rem 1rem $box__shadow;
    border-top: 1px solid $light-gray;
    padding: 0 170px;
    width: 100%;
    height: 54px;

    .support-nav__mobile-items {
      font-size: 14px;
      white-space: nowrap;
      padding: 0 0.5rem;
    }
    .tabs-navigator {
      @include display-flex();
      justify-content: space-between;
      align-items: center;
    }
  }

  /* ============= */
  .user-profile__support-mobile {
    @include display-flex();
    flex-direction: column;
    background: $white;
    height: 121px;
    width: 100%;
    padding-right: 11px;
    border-radius: 10px;
    box-shadow: 0px 8px 16px $box__shadow;
  }
  .support-contact__mobile-title {
    font-weight: 400;
    font-size: 14px;
    text-align: right;
    margin-top: 19px;
  }
  .support-contact__call,
  .support-contact__mail {
    margin-top: 16px;
  }
  .support-contact__mail {
    margin-bottom: 16px;
  }
  .support-contact__mail-title,
  .support-contact__mail-title::before,
  .support-contact__call-title,
  .support-contact__call-title::before {
    font-size: 14px;
  }
  .support-contact__mail-limoo,
  .support-contact__call-limoo {
    font-size: 14px;
    margin-right: 4px;
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
    }
  }
  .profile-container {
    @include display-flex();
    flex-direction: column;
    margin-bottom: 58px;
  }
  .user-profile__holder {
    margin: 8px 0;
    padding: 0 5px;
  }
  .user-profile {
    &__topic {
      display: none;
    }
  }
}

@media (max-width: 600px) {
  .user-profile {
    background: none;
    border: none;
    box-shadow: none;
  }
  .support__navbar-mobile {
    padding: 0 41px;
  }
}

@media (max-width: 350px) {
}

@media (max-width: 320px) {
}

@media (max-width: 280px) {
  .support-contact__mobile-title {
    font-size: 13px;
  }
  .support-contact__mail-title,
  .support-contact__mail-title::before,
  .support-contact__call-title,
  .support-contact__call-title::before {
    font-size: 12px;
  }
  .support-contact__mail-limoo,
  .support-contact__call-limoo {
    font-size: 12px;
  }
}
</style>
