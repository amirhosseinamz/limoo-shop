<template>
  <div class="profile-container">

    <the-profile-side-bar class="desktop-screen" />

    <div class="mobile-screen">
      <div class="mobile-screen__holder">
        <span class="mobile-screen__holder-txt">
          {{ getTextByTextKey("orders_favorite_list") }}
        </span>
        <span @click="goToProfile" class="mobile-screen__holder-arrow"></span>
      </div>
    </div>

    <div class="user-profile__holder">
      <div class="user-profile">
        <span class="user-profile__topic">
          {{ getTextByTextKey("orders_favorite_list") }}
        </span>
        <hr class="splicer-line" />

        <favorite-product
          @event-show-modal-delete-favorite="eventShowModalDeleteFavorite"
        ></favorite-product>
      </div>
    </div>

<!--    Delete Modal-->

    <transition name="backdrop-delete">
      <div class="backdrop" v-if="showModal" @click="modalClose"></div>
    </transition>
    <transition name="delete">
      <modalDeleteFav
        v-if="showModal"
        :current-favorite="currentFavorite"
        @btn-delete-favorite="btnDeleteFavorite"
        @close-modal="modalClose"
      />
    </transition>

  </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import favoriteProduct from "~/components/Profile/Favorites/favoriteProduct.vue";
import modalDeleteFav from "~/components/Profile/Favorites/modalDeleteFav.vue";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  middleware: "authentication",
  layout: "removeFooterMobile",
  components: {
    TheProfileSideBar,
    favoriteProduct,
    modalDeleteFav,
  },
  data() {
    return {
      showModal: false,
      currentFavorite: {},
    };
  },

  computed: {
    favoriteData() {
      return this.$store.getters["profile/favorites/favorites/favoriteData"];
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

    eventShowModalDeleteFavorite(data) {
      this.showModal = true;
      this.currentFavorite = data;
    },

    btnDeleteFavorite(data) {

      this.$store.dispatch("profile/favorites/favorites/btnDeleteFavorite", data);
      this.showModal = false;

      // request //
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
  min-height: 100vh;
  height: max-content;
  /* border: 5px solid #2f0404; */
}
.user-profile {
  width: 100%;
  min-height: 397px;
  height: max-content;
  @include display-flex();
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: $white;
  border-radius: 10px;
  box-shadow: 0px 8px 16px $box__shadow;
  /* border: 1px solid #f00808; */
  &__topic {
    font-size: 18px;
    line-height: 140.62%;
    color: $black-topic;
    align-self: flex-end;
    margin-top: 23px;
    margin-right: 25px;
  }
}
.splicer-line {
  display: none;
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
    min-height: 243px;
  }
  .user-profile__holder {
    padding: 0 5px;
  }
}

@media (max-width: 350px) {
}

@media (max-width: 320px) {
}
</style>
