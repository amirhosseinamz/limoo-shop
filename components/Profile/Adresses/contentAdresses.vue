<template>
  <div
    id="address__form--data"
    class="p-adresses-content-main w-100 flex-column flex-wrap  d-rtl"
  >
    <transition name="backdrop-form">
        <div class="backdrop" v-if="showModal"></div>
    </transition>
    <transition :name="modalAnimation">
        <add-address-modal
          v-if="showModal"
          :modal-mode="modalAnimation"
          :all-province="allProvince"
          :all-citys="allCitys"
          :form-data-original="formData"
          :data-edit-address="dataEditAddress"
          :profile-phone-number="profilePhoneNumber"
          @selected-province="selectedProvince"
          @selected-city="selectedCity"
          @submit-address-add="submitAddressAdd"
          @close-modal="closeModal"
        ></add-address-modal>
    </transition>
    <div
      class="w-100 flex-wrap p-adresses-content-btn-add-main p-adresses-content-item-desktop"
    >
      <base-button no-box-shadow button-type="submit" @button-clicked="addAddress" classes="btn-change p-adresses-content-btn-data">
        {{ getTextByTextKey("address_add_address") }}
      </base-button>
    </div>

    <div class="w-100 flex-wrap p-adresses-content-items">
      <div
        v-for="data in adressData"
        :key="data.id"
        class="w-100 flex-wrap p-adresses-content-item"
      >
        <div
          class="flex-wrap w-100 p-adresses-content-wrapper align-items-start"
        >
          <div class="w-100">
            <div
              class="w-100 flex-wrap  p-adresses-content-header align-items-center"
            >
              <div
                class=" p-adresses-content-header-item align-items-center p-adresses-content-item-mobile"
              >
                <span class="p-adresses-content-header-icon"></span>
                <h3 class="p-adresses-content-header-item-title">
                  {{ data.address }}
                </h3>
              </div>

              <div class=" p-adresses-content-header-item align-items-center">
                <span class="p-adresses-icon profile--icon"></span>
                <h3 class="p-adresses-content-header-item-title">
                  شروین پیکارجو
                </h3>
              </div>

              <div class=" p-adresses-content-header-item align-items-center">
                <span class="p-adresses-icon location--icon"></span>

                <h3 class="p-adresses-content-header-item-title">
                  {{ data.province }}
                </h3>
              </div>

              <div class=" p-adresses-content-header-item align-items-center">
                <span class="p-adresses-icon phone--icon"></span>

                <h3 class="p-adresses-content-header-item-title">
                  {{ data.numberReceiver }}
                </h3>
              </div>

              <div class=" p-adresses-content-header-item align-items-center">
                <span class="p-adresses-icon message--icon"></span>
                <h3 class="p-adresses-content-header-item-title">
                  {{ data.codePoste }}
                </h3>
              </div>
            </div>

            <div class="w-100 flex-column p-adresses-content-data-main">
              <div class="w-100 flex-wrap  p-adresses-content-data-wrapper">
                <div
                  class="p-adresses-content-item-desktop w-100 p-adresses-content-data flex-wrap align-items-start"
                >
                  <div class="w-100 p-adresses-content-text-main text-right">
                    <h3 class="p-adresses-content-text-data w-100">
                      {{ data.address }}
                    </h3>
                  </div>
                </div>
                <div
                  class="p-adresses-content-data-btns w-100 justify-content-end"
                >
                  <div class="p-favorite-product-btn-main">
                    <base-button
                      no-box-shadow
                      base-color="yellow"
                      mode="secondary-outline"
                      button-type="button"
                      classes="p-product-btn p-adresses-content-btn-edit"
                    >
                      <span
                        @click="editAddress(data)"
                        class="p-favorite-product-btn-link p-adresses-content-item-desktop"
                      >
                        {{ getTextByTextKey("public_edit") }}
                      </span>
                      <span
                        @click="editAddress(data)"
                        class="p-favorite-product-btn-link p-adresses-content-item-mobile "
                      >
                        <img
                          class="p-adresses-content-edit-icon"
                          src="/icons/icon-edit.svg"
                          alt=""
                        />
                      </span>
                    </base-button>
                    <base-button
                      @button-clicked="showModalDeleteProduct(data)"
                      classes="p-favorite-product-btn-delete p-adresses-content-btn-delete"
                      no-box-shadow
                      base-color="light"
                    >
                      <span class="p-favorite-product-item-icon-delete"></span>
                    </base-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-adresses__empty-container" v-show="userAddress == 0">
      <img
        src="/empty-pages/empty-location.svg"
        :alt="getTextByTextKey('address_empty_address')"
      />''
      <span class="user-adresses__empty">
        {{ getTextByTextKey("address_empty_address") }}
      </span>
    </div>
    <div
      class="p-adresses-content-btn-add-mobile p-adresses-content-item-mobile"
    >
      <base-button no-box-shadow button-type="submit" @button-clicked="addAddress" classes="btn-change p-adresses-content-btn-data">
        {{ getTextByTextKey("address_add_address") }}
      </base-button>
    </div>
  </div>
</template>

<script>
import addAddressModal from "~/components/Profile/Adresses/addAddressModal.vue";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    allProvince: { type: [Object, Array], default: [] },
    allCitys: { type: [Object, Array], default: [] },
    adressData: { type: [Object, Array], default: {} },
    formData: { type: [Object, Array], default: {} },
    profilePhoneNumber: { type: [Number, String], default: "" },
  },
  data() {
    return {
      passChangeIsActive: false,
      dataEditAddress: {},
      userAddress: -1,
      showModal: false,
      windowWidth: 0
    };
  },

  components: {
    addAddressModal,
  },
  watch: {
    showModal(val) {
      console.log(val);
    }
  },

  computed: {
    modalAnimation() {
      if (this.windowWidth > 960) {
        return "form";
      } else {
        return "phone";
      }
    }
  },

  created() {
    this.userAddress = Object.values(this.adressData).length;
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  methods: {
    getTextByTextKey,
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    showModalDeleteProduct(data) {
      this.$emit("show-modal-delete-product", data);
    },

    addAddress() {
      this.dataEditAddress = {};
      this.showModal = true;
    },

    selectedProvince(data) {
      this.$emit("selected-province", data);
    },

    selectedCity(data) {
      this.$emit("selected-city", data);
    },

    submitAddressAdd(data) {
      // بر اساس آیدی تغیین می شود که حالت ویرایش است یا خیر //

      let stateEditAdd = "";
      if (typeof this.dataEditAddress.id == "undefined") {
        stateEditAdd = "add";
      } else {
        stateEditAdd = "edit";
      }

      this.passChangeIsActive = false;
      this.$emit("submit-address-add", data, stateEditAdd);
    },

    closeModal() {
      this.dataEditAddress = {};
      this.showModal = false;
    },

    editAddress(data) {
      this.dataEditAddress = data;
      this.showModal = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@include phone-modal-animation();
@include form-modal-animation();
@include backdrop-form-modal-animation();
.user-adresses__empty-container {
  @include display-flex();
  flex-direction: column;
  justify-content: flex-start;
  height: 273px;
  background: $white;
  padding-top: 25px;
  border-radius: 10px;
  /* border: 1px solid red; */
}
.user-adresses__empty-container img {
  opacity: 1;
}
.user-adresses__empty {
  font-size: 18px;
  line-height: 140.62%;
  text-align: center;
  color: $gray;
  margin-top: 37px;
}

.backdrop {
  @extend .modal-backdrop;
  background-color: $overlay--profile;
}
.p-adresses-content-main {
  padding-right: 21px;
  padding-left: 21px;
}
.p-adresses-content-btn-add-main {
  @include display-flex();
}
.p-adresses-content-btn-data {
  margin-top: 45px;
  margin-bottom: 38px;
  font-size: 16px;
}
.p-adresses-content-item {
  @include display-flex();
  border: 1px solid $light-gray;
  border-radius: 10px;
  height: 241px;
  margin-bottom: 24px;
}
.p-adresses-content-header {
  @include display-flex();
  padding-right: 23px;
  padding-left: 23px;
}
.p-adresses-content-header {
  background: $google-btn__bg;
  height: 73px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.p-adresses-content-header-icon {
  width: 23px;
  height: 23px;
}
.p-adresses-content-filter-icon::after {
  content: "\e802";
  @include font-icon__new();
  font-size: 28px;
  color: $gray-3;
  cursor: pointer;
}
.p-adresses-content-header-item {
  @include display-flex();
  margin-left: 85px;
}
.p-adresses-content-header-item-title {
  font-family: inherit;
  font-size: 16px;
  margin-right: 10px;
  color: $black-topic;
  font-weight: 400;
  text-align: right;
}
.p-adresses-content-data {
  @include display-flex();
  padding-right: 27px;
  padding-left: 27px;
}
.p-adresses-content-text-data {
  font-family: inherit;
  font-size: 16px;
  color: $black-topic;
  font-weight: 400;
}
.p-adresses-content-text-main {
  @include display-flex();
  margin-top: 25px;
  margin-bottom: 36px;
}
.p-adresses-content-data-btns {
  @include display-flex();
  padding-left: 16px;
  height: 83px;
  align-items: flex-end;
}
.p-adresses-content-btn-edit {
  width: 130px!important;
}
.p-adresses-content-wrapper {
  @include display-flex();
}
.p-adresses-content-data-main {
  @include display-flex();
}
.p-adresses-content-edit-icon {
  width: 16px;
  height: 16px;
}
.p-adresses-content-header-item-desktop {
  align-items: flex-start;
}
.p-adresses-content-item-mobile {
  display: none;
}
.p-adresses-content-btn-add-mobile .p-adresses-content-btn-data {
  width: 100%;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
}
.p-adresses-content-data-wrapper {
  height: 167px;
  @include display-flex();
  align-content: flex-start;
}
.p-favorite-product-btn-main {
  margin-bottom: 37px;
}
.p-favorite-product-item-icon-delete::before {
  @include font-icon__limoo();
  font-size: 16px;
  content: "\e826";
  color: $gray-3;
}
.p-adresses-icon::before {
  content: "\e823";
  @include font-icon__limoo();
  font-size: 19px;
  color: $gray;
  cursor: pointer;
}
.location--icon::before {
  content: "\e817";
  font-size: 21px;
  color: $gray;
}
.phone--icon::before {
  content: "\e81f";
  font-size: 19px;
  color: $gray;
}
.message--icon::before {
  content: "\e81a";
  font-size: 19px;
  color: $gray;
}
.p-product-btn {
  width: 150px!important;
  height: 47px!important;
  font-family: inherit;
  transition: all 120ms ease-in;
}
@media (max-width: 1220px) {
  .p-adresses-content-header-item {
    margin-left: 10%;
  }
  .p-adresses-content-header-item:last-of-type {
    margin-left: 0;
  }
}

@media (max-width: 1024px) {
  .p-adresses-content-header-item {
    margin-left: 6%;
  }
}

@media (max-width: 960px) {
  .p-adresses-content-header-item {
    margin-left: 10%;
  }
}

@media (max-width: 600px) {
  .user-adresses__empty-container {
    @include display-flex();
    flex-direction: column;
    justify-content: flex-start;
    height: 206px;
    background: $white;
    padding-top: 25px;
    margin-bottom: 25vh;
    /* border: 1px solid red; */
  }
  .user-adresses__empty-container img {
    margin: 0 auto;
    height: 78px;
    width: 78px;
  }
  .user-adresses__empty {
    font-size: 14px;
    margin-top: 24px;
  }

  .p-adresses-content-header {
    flex-flow: column;
    height: auto;
    background: $white;
  }
  .p-adresses-content-main {
    padding-right: 0;
    padding-left: 0;
  }
  .p-adresses-content-item {
    background: $white;
    height: auto;
    margin-bottom: 8px;
  }
  .p-adresses-content-header-item {
    margin-left: 0;
    width: 100%;
    margin-top: 19px;
  }
  .p-adresses-content-header-item-title {
    font-size: 14px;
  }
  .p-adresses-content-text-data {
    font-size: 14px;
  }
  .p-adresses-content-data-btns {
    margin-bottom: 16px;
    margin-top: 26px;
    height: auto;
  }
  .p-favorite-product-btn-delete {
    width: 37px!important;
    height: 37px!important;
  }
  .p-adresses-content-btn-edit {
    background: $yellow!important;
    color: $white!important;
    height: 36px!important;
    width: 36px!important;
    border: none!important;
  }
  .p-adresses-content-header-icon {
    width: 18px;
    height: 18px;
  }
  .p-adresses-content-item-desktop {
    display: none;
  }
  .p-adresses-content-item-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .p-adresses-content-text-main {
    margin-bottom: 0;
  }
  .p-adresses-content-data-wrapper {
    height: auto;
  }
  .p-favorite-product-btn-main {
    margin-bottom: 0;
  }
  .p-adresses-content-item:last-of-type {
    margin-bottom: 0;
  }
  .p-adresses-icon::before {
    font-size: 15px;
  }
  .location--icon::before {
    font-size: 17px;
  }
  .phone--icon::before {
    font-size: 15px;
  }
  .message--icon::before {
    font-size: 15px;
  }
}
</style>
