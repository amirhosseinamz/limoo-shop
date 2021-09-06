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
  min-height: toRem(397);
  height: max-content;
  @include display-flex();
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: $white;
  border-radius: toRem(10);
  box-shadow: 0 toRem(8) toRem(16) $box__shadow;
  &__topic {
    font-size: toRem(18);
    line-height: 140.62%;
    color: $black-topic;
    align-self: flex-end;
    margin-top: toRem(23);
    margin-right: toRem(25);
  }
}
.splicer-line {
  display: none;
}
@include md {
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
      &-arrow::before {
        content: "\e801";
        @include font-icon__limoo();
        font-size: toRem(14);
        color: $input-border;
        margin-right: toRem(4);
        margin-left: toRem(8);
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

@include xs {
  .user-profile {
    background: none;
    border: none;
    box-shadow: none;
    min-height: toRem(243);
  }
  .user-profile__holder {
    padding: 0 toRem(5);
  }
}

</style>
