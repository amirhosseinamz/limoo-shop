<template>
  <div class="profile-container">
    <the-profile-side-bar class="desktop-screen" />

    <div class="mobile-screen">
      <div class="mobile-screen__holder">
        <span class="mobile-screen__holder-txt">
          {{ getTextByTextKey("address_your_address") }}
        </span>
        <img
          @click="goToProfile"
          class="mobile-screen__holder-arrow"
          src="/icons/arrow-left.svg"
        />
      </div>
    </div>

    <div class="user-profile__holder">
      <div class="user-profile w-100">
        <span class="user-profile__topic">{{
          getTextByTextKey("address_your_address")
        }}</span>
        <hr class="splicer-line" />
        <div class="w-100 user-profile-adresses-main flex-column">
          <contentAdresses
            @show-modal-delete-product="showModalDeleteProduct"
            @selected-province="selectedProvince"
            @selected-city="selectedCity"
            @submit-address-add="submitAddressAdd"
          ></contentAdresses>
        </div>
      </div>
    </div>

        <transition name="backdrop">
          <div v-if="showModal" class="backdrop" @click="modalClose"></div>
        </transition>
        <transition name="delete">
          <modal-delete-adress
            v-if="showModal"
            :current-product="currentProduct"
            @btn-delete-modal="btnDeleteProduct"
            @close-modal="modalClose"
          ></modal-delete-adress>
        </transition>
      </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import contentAdresses from "~/components/Profile/Adresses/contentAdresses.vue";
import modalDeleteAdress from "~/components/Profile/Adresses/modalDeleteAdress.vue";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  middleware: "authentication",
  layout: "removeFooterMobile",
  components: {
    TheProfileSideBar,
    contentAdresses,
    modalDeleteAdress,
  },

  data() {
    return {
      currentProduct: {},
      showModal: false,
      updateAddress: 0,
    };
  },
  computed: {
    addressesData() {
      return this.$store.getters["profile/addresses/addresses/addressesData"];
    },
    allProvince() {
      return this.$store.getters["profile/addresses/addresses/allProvince"];
    },
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
      this.$store.dispatch("profile/addresses/addresses/btnDeleteAddress", data);
      this.showModal = false;
    },

    showModalDeleteProduct(data) {
      this.currentProduct = data;
      this.showModal = true;
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
        this.addressesData.map((content, i) => {
          if (content.id === data.id) {
            this.$store.dispatch("profile/addresses/addresses/editAddress", [i, data]);
          }
        });
      };

      // بعد از اتصال به بک این قسمت حذف شود //
      if (state === "edit") {
        faceUpdatePage();
      } else {
        data.id = 20 + this.updateAddress;
        this.$store.dispatch("profile/addresses/addresses/addAddress", data);
      }

      // send data server //
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
  /* justify-content: center; */
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
    padding: 0 16px;
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
  }
  .user-profile__holder {
    padding: 0 toRem(5);
  }
}

</style>
