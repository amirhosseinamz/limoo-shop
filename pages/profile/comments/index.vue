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
  background: $white;
  border-radius: toRem(10);
  box-shadow: 0 toRem(8) toRem(16) $box__shadow;
  &__topic {
    font-size: toRem(18);
    line-height: 140.62%;
    color: $black-topic;
    align-self: flex-end;
    margin: toRem(23) toRem(25) toRem(34) 0;
  }
}
.splicer-line {
  display: none;
}
.user-profile__topic {
  text-align: right;
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
    background: transparent;
    box-shadow: 0 toRem(8) toRem(16) transparent;
    &__topic {
      display: none;
    }
  }
}

@include sm {
  .user-profile {
    background: none;
    border: none;
    box-shadow: none;
  }
  .user-profile__holder {
    padding: 0 toRem(5);
  }
}

</style>
