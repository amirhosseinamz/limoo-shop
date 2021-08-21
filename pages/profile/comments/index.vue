<template>
  <div class="profile-container">
    <the-profile-side-bar class="desktop-screen" />

    <div class="mobile-screen">
      <div class="mobile-screen__holder">
        <span class="mobile-screen__holder-txt">
          {{ getTextByTextKey("comments_title") }}
        </span>
        <span @click="goToProfile" class="mobile-screen__holder-arrow"></span>
      </div>
    </div>

    <div class="user-profile__holder">
      <div class="user-profile w-100">
        <span class="user-profile__topic">
          {{ getTextByTextKey("comments_title") }}
        </span>
        <hr class="splicer-line" />
        <div class="w-100 user-profile-comments-main flex-column">
          <contentComments
            @show-modal-delete-product="showModalDeleteProduct"
          ></contentComments>
        </div>
      </div>
    </div>

    <transition name="backdrop">
      <div v-if="showModal" class="backdrop" @click="modalClose"></div>
    </transition>
    <transition name="delete">
      <modalDeleteComment
        v-if="showModal"
        :current-product="currentProduct"
        @btn-delete-modal="btnDeleteProduct"
        @close-modal="modalClose"
      />
    </transition>
  </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import contentComments from "~/components/Profile/Comments/contentComments.vue";
import modalDeleteComment from "~/components/Profile/Comments/modalDeleteComment.vue";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  middleware: "authentication",
  layout: "removeFooterCart",
  components: {
    TheProfileSideBar,
    contentComments,
    modalDeleteComment,
  },

  data() {
    return {
      currentProduct: {},
      showModal: false
    };
  },
  computed: {
    commentsData() {
      return this.$store.getters["profile/comments/comments/commentsData"];
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

    btnDeleteProduct(data) {
      this.$store.dispatch("profile/comments/comments/btnDeleteComment", data);
      this.showModal = false;
    },

    showModalDeleteProduct(data) {
      this.currentProduct = data;
      this.showModal = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@include backdrop-delete-modal-animation();
@include delete-modal-animation();
.backdrop {
  @extend .modal-backdrop;
  background-color: $overlay__profile;
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

  height: max-content;
  @include display-flex();
  flex-direction: column;
  /* justify-content: center; */
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
    margin: 23px 25px 34px 0;
  }
}
.splicer-line {
  display: none;
}
.user-profile__topic {
  text-align: right;
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
    background: transparent;
    box-shadow: 0px 8px 16px transparent;
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
  .user-profile__holder {
    padding: 0 5px;
  }
}

@media (max-width: 350px) {
}

@media (max-width: 320px) {
}
</style>
