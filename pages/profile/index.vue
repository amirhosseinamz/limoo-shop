<template>
  <div class="profile-container">
    <the-profile-side-bar />
    <div class="user-profile">
      <div v-show="userHistory !== 0" class="user-profile__lastseen-product">
        <h3 class="user-profile__list-title">
          {{ getTextByTextKey("profile_last_seen_product") }}
        </h3>
        <!--  -->
        <the-user-history
          @event-show-modal-delete-history="eventShowModalDeleteHistory"
          :history-data="historyData"
        ></the-user-history>
        <!--  -->
        <nuxt-link
          class="user-profile__continue-list__btn"
          to="/profile/user-history"
        >
          {{ getTextByTextKey("profile_more_list_wached") }}
        </nuxt-link>
      </div>
      <div class="user-profile__fav-product">
        <h3 class="user-profile__list-title">
          {{ getTextByTextKey("profile_favorite_more") }}
        </h3>
        <!--  -->
        <favorite-product
          @event-show-modal-delete-favorite="eventShowModalDeleteFavorite"
          :favorite-data="favoriteData"
        ></favorite-product>
        <!--  -->
        <nuxt-link
          v-show="userFavorite !== 0"
          class="user-profile__continue-list__btn"
          to="/profile/favorites"
        >
          {{ getTextByTextKey("profile_favorite_more") }}
        </nuxt-link>
      </div>
      <div class="user-profile__last-orders">
        <h3 class="user-profile__list-title">
          {{ getTextByTextKey("profile_your_latest_orders") }}
        </h3>
        <!--  -->
        <the-last-orders-list :table-data="tableData"></the-last-orders-list>
        <!--  -->
        <span class="p-list-product-line" v-show="userOrdersList !== 0"></span>
        <nuxt-link
          v-show="userOrdersList !== 0"
          class="user-profile__continue-orderslist__btn"
          to="/profile/my-orders/in-progress"
        >
          {{ getTextByTextKey("profile_continue_list_orders") }}
        </nuxt-link>
      </div>
      <!--  -->
      <transition name="backdrop-delete">
        <div class="backdrop" v-if="showModal || showFavModal" @close="modalClose"></div>
      </transition>
      <transition name="delete">
        <TheModalDeleteUserHistory
          v-if="showModal"
          :current-history="currentHistory"
          @btn-delete-history="btnDeleteHistory"
          @close-modal="modalClose"
        />
      </transition>

      <!--  -->
      <transition name="delete">
        <modalDeleteFav
          v-if="showFavModal"
          :current-favorite="currentFavorite"
          @btn-delete-favorite="btnDeleteFavorite"
          @close-modal="modalClose"
        />
      </transition>
      <!--  -->
    </div>
  </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import TheUserHistory from "~/components/Profile/UserHistory/TheUserHistory.vue";
import TheModalDeleteUserHistory from "~/components/Profile/UserHistory/TheModalDeleteUserHistory.vue";
import favoriteProduct from "~/components/Profile/Favorites/favoriteProduct.vue";
import modalDeleteFav from "~/components/Profile/Favorites/modalDeleteFav.vue";
import TheLastOrdersList from "~/components/Profile/TheLastOrdersList.vue";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  // middleware: "authentication",
  layout: "removeFooterMobile",
  components: {
    TheProfileSideBar,
    TheUserHistory,
    TheModalDeleteUserHistory,
    favoriteProduct,
    modalDeleteFav,
    TheLastOrdersList,
  },
  data() {
    return {
      showModal: false,
      showFavModal: false,
      showModalDeleteFavorite: false,
      userHistory: -1,
      userFavorite: -1,
      userOrdersList: -1,
      historyData: [
        {
          id: 1,
          title: "Fake",
          img: "/img/apple-watch-1.png",
        },
        {
          id: 2,
          title: "Fake",
          img: "/img/apple-watch-2.png",
        },
        {
          id: 3,
          title: "Fake",
          img: "/img/apple-watch-3.png",
        },
      ],
      favoriteData: [
        {
          id: 1,
          title: "Fake",
          img: "../img/phone.jpg",
        },
        {
          id: 2,
          title: "Fake",
          img: "../img/phoneApple.jpg",
        },
        {
          id: 3,
          title: "Fake",
          img:
            "../img/apple-watch-series-6-blue-aluminium-case-with-deep-navy-sport-band-16.jpg",
        },
      ],
      tableData: [
        {
          id: 1,
          orderCode: "6861457M",
          orderDate: "1399/11/17",
          orderPrice: "123،000",
          orderSituation: "در حال پردازش",
        },
        {
          id: 2,
          orderCode: "6861457L",
          orderDate: "1399/04/05",
          orderPrice: "850،000",
          orderSituation: "تحویل داده شده",
        },
        {
          id: 3,
          orderCode: "6861457N",
          orderDate: "1399/03/05",
          orderPrice: "250،000",
          orderSituation: "تحویل داده شده",
        },
      ],
      currentFavorite: {},
      currentHistory: {},
    };
  },
  created() {
    this.userHistory = Object.values(this.historyData).length;
    this.userFavorite = Object.values(this.favoriteData).length;
    this.userOrdersList = Object.values(this.tableData).length;
  },

  methods: {
    getTextByTextKey,

    eventShowModalDeleteHistory(data) {
      this.showModal = true;
      this.currentHistory = data;
    },
    modalClose() {
      this.showModal = false;
      this.showFavModal = false;
    },

    btnDeleteHistory(data) {
      const removeHistory = () => {
        let indexDeleteHistoryData = -1;

        this.historyData.map((content, index) => {
          if (content.id == data.id) {
            indexDeleteHistoryData = index;
          }
        });

        this.historyData.splice(indexDeleteHistoryData, 1);
      };

      removeHistory();
      this.showModal = false;

      // request //
    },
    eventShowModalDeleteFavorite(data) {
      this.showFavModal = true;
      this.currentFavorite = data;
    },

    btnDeleteFavorite(data) {
      const removeFavorite = () => {
        let indexDeleteFavoriteData = -1;

        this.favoriteData.map((content, index) => {
          if (content.id == data.id) {
            indexDeleteFavoriteData = index;
          }
        });

        this.favoriteData.splice(indexDeleteFavoriteData, 1);
      };

      removeFavorite();
      this.showFavModal = false;

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
.profile-container {
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  min-height: 100vh;
  @include display-flex();
  flex-direction: row-reverse;
}
.user-profile {
  margin: toRem(166) 0 toRem(50) toRem(17);
  width: 100%;
  height: fit-content;
  @include display-flex();
  flex-direction: column;
  text-align: center;
}
.user-profile__lastseen-product,
.user-profile__fav-product,
.user-profile__last-orders {
  @include display-flex();
  flex-direction: column;
  height: fit-content;
  width: 100%;
  background-color: $white;
  border-radius: toRem(10);
  box-shadow: 0 toRem(8) toRem(16) $box__shadow;
  margin-bottom: toRem(38);
}
.user-profile__list-title {
  color: $black-topic;
  text-align: right;
  line-height: 140.62%;
  font-weight: 400;
  font-size: toRem(18);
  margin: toRem(24) toRem(24) 0 0;
}
.user-profile__continue-list__btn,
.user-profile__continue-orderslist__btn {
  width: fit-content;
  text-decoration: none;
  color: $gray;
  font-size: toRem(18);
  line-height: 140.62%;
  margin: toRem(14) auto toRem(38) auto;
}
.user-profile__continue-orderslist__btn {
  margin: toRem(38) auto toRem(38) auto;
}
.p-list-product-line {
  @include display-flex();
  background: $border-gray-bg;
  width: 95%;
  margin: 0 auto;
  height: toRem(1);
}
@include md {
  .profile-container {
    margin: 0 auto;
    width: 100%;
    @include display-flex();
    flex-direction: column;
    margin-bottom: toRem(58);
  }
  .user-profile {
    display: none;
  }
}
@include xl {
  .user-profile__list-title {
    font-size: toRem(16);
  }
  .user-profile__continue-list__btn {
    font-size: toRem(16);
    margin: toRem(10) auto toRem(34) auto;
  }
  .user-profile__continue-orderslist__btn {
    font-size: toRem(16);
    margin: toRem(34) auto toRem(34) auto;
  }
}
</style>
