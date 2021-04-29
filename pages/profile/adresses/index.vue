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
            :adress-data="adressesData"
            :all-province="allProvince"
            :all-citys="allCitys"
            :form-data="formData"
            :profile-phone-number="profilePhoneNumber"
            @show-modal-delete-product="showModalDeleteProduct"
            @selected-province="selectedProvince"
            @selected-city="selectedCity"
            @submit-address-add="submitAddressAdd"
          ></contentAdresses>
        </div>
      </div>
    </div>

    <modalDeleteAdress
      :active.sync="statusShowModalDeleteProduct"
      :current-product="currentProduct"
      @btn-delete-modal="btnDeleteProduct"
    />
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
      adressesData: [
        {
          id: 1,
          address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 1",
          province: "تهران",
          city: "جنت آباد",
          codePoste: "90",
          nameReceiver: "test",
          numberReceiver: "10",
        },
        {
          id: 2,
          address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 2",
          province: "قم",
          city: "قم",
          codePoste: "2",
          nameReceiver: "test",
          numberReceiver: "10",
        },
        {
          id: 3,
          address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 3",
          province: "قم",
          city: "قم",
          codePoste: "3",
          nameReceiver: "test",
          numberReceiver: "10",
        },
      ],
      currentProduct: {},
      statusShowModalDeleteProduct: false,
      allProvince: [
        {
          id: 1,
          title: "تهران",
          selected: false,
        },
        {
          id: 2,
          title: "قم",
          selected: false,
        },
      ],
      allCitys: [
        {
          id: 1,
          parent_id: 2,
          title: "قم",
          selected: false,
        },
        {
          id: 2,
          parent_id: 1,
          title: "جنت آباد",
          selected: false,
        },
      ],
      formData: {
        province: "",
        city: "",
        codePoste: "",
        nameReceiver: "",
        numberReceiver: "",
        address: "",
      },
      updateAddress: 0,
      profilePhoneNumber: "09198814783",
    };
  },

  watch: {},

  mounted() {},

  methods: {
    getTextByTextKey,
    goToProfile() {
      this.$router.push("/profile");
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
    margin-top: 23px;
    margin-right: 25px;
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
