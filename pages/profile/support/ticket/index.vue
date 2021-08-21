<template>
  <div class="profile-container">
    <the-profile-side-bar class="desktop-screen" />

    <div class="mobile-screen">
      <div class="mobile-screen__holder">
        <span class="mobile-screen__holder-txt">
          {{ getTextByTextKey("support_title") }}
        </span>
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
          <span class="user-profile__topic">
            {{ getTextByTextKey("support_title") }}
          </span>
          <NuxtLink to="/profile" class="user-profile__back-btn"></NuxtLink>
        </div>
        <hr class="splicer-line" />
        <div class="user-profile__support-contact d-rtl">
          <h4 class="support-contact__title">
            {{ getTextByTextKey("support_connect") }}
          </h4>
          <div class="support-contact__holder">
            <h4 class="support-contact__description">
              {{ getTextByTextKey("support_about") }}
            </h4>
            <div class="support-contact__left">
              <div class="support-contact__mail">
                <h4 class="support-contact__mail-title">
                  {{ getTextByTextKey("support_email") }}
                </h4>
                <span class="support-contact__mail-limoo">
                  {{ getTextByTextKey("support_email_data") }}
                </span>
              </div>
              <div class="support-contact__call">
                <h4 class="support-contact__call-title">
                  {{ getTextByTextKey("support_connect_number") }}
                </h4>
                <span class="support-contact__call-limoo">
                  {{ getTextByTextKey("support_connect_data") }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- ============================ -->
        <div class="user-profile__support-mobile d-rtl">
          <h4 class="support-contact__mobile-title">
            {{ getTextByTextKey("support_connect") }}
          </h4>
          <div class="support-contact__call">
            <h4 class="support-contact__call-title">
              {{ getTextByTextKey("support_connect_number") }}
            </h4>
            <span class="support-contact__call-limoo">
              {{ getTextByTextKey("support_connect_data") }}
            </span>
          </div>
          <div class="support-contact__mail">
            <h4 class="support-contact__mail-title">
              {{ getTextByTextKey("support_email") }}
            </h4>
            <span class="support-contact__mail-limoo">
              {{ getTextByTextKey("support_email_data") }}
            </span>
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
          ></base-tabs>
        </div>
        <div class="w-100 user-profile-tickets-main flex-column">
          <contentTickets
            @show-modal-delete-product="showModalDeleteProduct"
            @submit-ticket-add="submitTicketsAdd"
          ></contentTickets>
        </div>
      </div>
    </div>

<!--    Delete Modal-->

    <transition name="backdrop-delete">
      <div class="backdrop" v-if="showModal" @click="modalClose"></div>
    </transition>
    <transition name="delete">
      <modalDeleteTicket
        v-if="showModal"
        @close-modal="modalClose"
        :current-product="currentProduct"
        @btn-delete-modal="btnDeleteProduct"
      />
    </transition>
  </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import contentTickets from "~/components/Profile/Support/Ticket/contentTickets.vue";
import modalDeleteTicket from "~/components/Profile/Support/Ticket/modalDeleteTicket.vue";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  middleware: "authentication",
  layout: "removeFooterMobile",
  components: {
    TheProfileSideBar,
    contentTickets,
    modalDeleteTicket,
  },

  data() {
    return {
      tabsNames: [
        this.getTextByTextKey("support_tab_send_ticket"),
        this.getTextByTextKey("support_faq"),
      ],
      selected: this.getTextByTextKey("support_tab_send_ticket"),
      updateTicket: 0,
      showModal: false,
      currentProduct: {},
    };
  },
  computed: {
    ticketsData () {
      return this.$store.getters["profile/ticket/ticket/ticketsData"]
    },
    formData () {
      return this.$store.getters["profile/ticket/ticket/formData"]
    },
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
    getTextByTextKey,
    goToProfile() {
      this.$router.push("/profile");
    },
    modalClose() {
      this.showModal = false;
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
      this.$store.dispatch("profile/ticket/ticket/btnDeleteProduct", data);
      this.showModal = false;

      // request //
    },

    showModalDeleteProduct(data) {
      this.currentProduct = data;
      this.showModal = true;
    },

    submitTicketsAdd(data, state) {
      this.updateTicket++;
      let findIndex = 0;

      // بعد از اتصال به بک این قسمت حذف شود //
      if (state === "edit") {
        this.$store.dispatch("profile/ticket/ticket/editTicket", data);
      } else {
        data.id = 20 + this.updateTicket;
        this.$store.dispatch("profile/ticket/ticket/addTicket", data);
      }

      // send data server //
    },
  },
};
</script>

<style lang="scss" scoped>
@include delete-modal-animation();
@include backdrop-delete-modal-animation();

.backdrop {
  @extend .modal-backdrop;
  background-color: $overlay--profile;
}
.mobile-screen,
.user-profile__support-mobile,
.support__navbar-mobile {
  display: none;
}

.user-profile-tickets-main {
  background: transparent;
}

.profile-container {
  margin: 0 auto;
  width: 100%;
  max-width: toRem(1920);
  min-height: 100vh;
  display: flex;
  flex-direction: row-reverse;
}

.user-profile__holder {
  margin: toRem(166) 0 toRem(50) toRem(17);
  width: 100%;
  min-height: 100vh;
  height: max-content;
}

.user-profile {
  width: 100%;

  height: max-content;
  @include display-flex();
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: toRem(10);
  box-shadow: 0 toRem(8) toRem(16) $box__shadow;
  &__support {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    border-top-left-radius: toRem(10);
    border-top-right-radius: toRem(10);
    background: $white;
    width: 100%;
    height: toRem(96);
  }

  &__support-contact {
    @include display-flex();
    flex-direction: column;
    border-bottom-left-radius: toRem(10);
    border-bottom-right-radius: toRem(10);
    background: $white;
    width: 100%;
    height: toRem(200);
  }

  &__topic {
    font-size: toRem(18);
    line-height: 140.62%;
    color: $black-topic;
    align-self: flex-end;
    margin-top: toRem(37);
    margin-right: toRem(25);
    margin-bottom: toRem(38);
  }

  &__back-btn {
    text-decoration: none;
    @include display-flex();
    flex-direction: row;
    border-right: toRem(1) solid $light-gray;
    height: toRem(64);
    margin-left: toRem(26);
    margin-bottom: toRem(16);
    cursor: initial;
  }

  &__back-btn::after {
    content: "\e801";
    @include font-icon__limoo();
    @include display-flex();
    font-size: toRem(15);
    padding: toRem(4);
    color: $input-border;
    align-self: center;
    cursor: pointer;
    margin-right: toRem(16);
  }
}

.support__navbar-desktop::v-deep {
  @include display-flex();
  flex-direction: row;
  border-top-left-radius: toRem(10);
  border-top-right-radius: toRem(10);
  background-color: $white;
  box-shadow: 0 toRem(8) toRem(16) $box__shadow;
  z-index: 1;
  padding: 0 toRem(57);
  margin-top: toRem(24);
  width: 100%;
  height: toRem(83);

  .support-nav__items {
    font-size: toRem(18);
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
  margin-top: toRem(24);
  margin-right: toRem(22);
}

.support-contact__holder {
  @include display-flex();
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: toRem(24);
  padding: 0 toRem(22);
}

.support-contact__description {
  font-weight: 400;
  color: $gray;
  width: 48%;
  padding-top: toRem(4);
  text-align: right;
  line-height: 180.62%;
}

.support-contact__left {
  @include display-flex();
  flex-direction: column;
  border-right: toRem(1) solid $light-gray;
  padding: toRem(4) toRem(30) 0 0;
  align-self: center;
  height: toRem(89);
  width: 48%;
}

.support-contact__mail,
.support-contact__call {
  @include display-flex();
  flex-direction: row;
}

.support-contact__call {
  margin-top: toRem(27);
}

.support-contact__mail-title::before {
  @include font-icon__limoo();
  content: "\e81a";
  font-size: toRem(18);
  vertical-align: middle;
  margin-left: toRem(8);
}

.support-contact__call-title::before {
  @include font-icon__limoo();
  content: "\e81f";
  font-size: toRem(18);
  vertical-align: middle;
  margin-left: toRem(8);
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
  font-size: toRem(16);
  margin-right: toRem(8);
}

.splicer-line {
  display: block;
  width: 100%;
  border: none;
  border-bottom: toRem(1) solid $light-gray;
}

.user-profile__topic {
  text-align: right;
}

@media (max-width: 1450px) {
}

@media (max-width: 1220px) {
  .support-contact__holder {
    padding: 0 toRem(5);
  }
  .support-contact__left {
    padding-right: toRem(5);
    width: 49%;
  }
  .support-contact__mail-title,
  .support-contact__mail-title::before,
  .support-contact__call-title,
  .support-contact__call-title::before {
    font-size: toRem(13);
  }
  .support-contact__mail-limoo,
  .support-contact__call-limoo {
    font-size: toRem(15);
    margin-right: toRem(2);
  }
  .support-contact__description {
    font-size: toRem(15);
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
    box-shadow: 0 toRem(8) toRem(16) $box__shadow;
    border-top: toRem(1) solid $light-gray;
    padding: 0 toRem(170);
    width: 100%;
    height: toRem(54);

    .support-nav__mobile-items {
      font-size: toRem(16);
      white-space: nowrap;
      padding: 0 toRem(8);
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
  height: toRem(121);
  width: 100%;
  padding-right: toRem(21);
  border-radius: toRem(10);
  box-shadow: 0 toRem(8) toRem(16) $box__shadow;
}

.support-contact__mobile-title {
  font-weight: 400;
  font-size: toRem(14);
  text-align: right;
  margin-top: toRem(19);
}

.support-contact__call,
.support-contact__mail {
  margin-top: toRem(16);
}

.support-contact__mail {
  margin-bottom: toRem(16);
}

.support-contact__mail-title,
.support-contact__mail-title::before,
.support-contact__call-title,
.support-contact__call-title::before {
  font-size: toRem(14);
}

.support-contact__mail-limoo,
.support-contact__call-limoo {
  font-size: toRem(14);
  margin-right: toRem(4);
}

.mobile-screen {
  display: block;

  &__holder {
    @include display-flex();
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    height: toRem(56);
    background: $white;
    margin-top: toRem(47);

    &-txt {
      font-size: toRem(14);
      line-height: 140.62%;
      margin-right: toRem(16);
      color: $black-topic;
    }

    &-arrow {
      margin-left: toRem(16);
    }
  }
}

.profile-container {
  @include display-flex();
  flex-direction: column;
  margin-bottom: toRem(58);
}

.user-profile__holder {
  margin: toRem(8) 0;
  padding: 0 toRem(16);
}

.user-profile {
  &__topic {
    display: none;
  }
}

}

@media (max-width: 600px) {
  .support__navbar-mobile::v-deep {
    .support-nav__mobile-items {
      font-size: toRem(14);
    }
  }
  .user-profile {
    background: none;
    border: none;
    box-shadow: none;
  }
  .support__navbar-mobile {
    padding: 0 toRem(41);
  }
  .user-profile__holder {
    padding: 0 toRem(5);
  }
  .user-profile__support-mobile {
    padding-right: toRem(11);
  }
}

@media (max-width: 350px) {
}

@media (max-width: 320px) {
}

@media (max-width: 280px) {
  .support-contact__mobile-title {
    font-size: toRem(13);
  }
  .support-contact__mail-title,
  .support-contact__mail-title::before,
  .support-contact__call-title,
  .support-contact__call-title::before {
    font-size: toRem(12);
  }
  .support-contact__mail-limoo,
  .support-contact__call-limoo {
    font-size: toRem(12);
  }
}
</style>
