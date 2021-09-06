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
        v-for="data in addressData"
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
    <div class="user-adresses__empty-container" v-show="userAddress === 0">
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
  },
  data() {
    return {
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
      //console.log(val);
    }
  },

  computed: {
    modalAnimation() {
      if (this.windowWidth > 960) {
        return "form";
      } else {
        return "phone";
      }
    },
    addressData() {
      return this.$store.getters["profile/addresses/addresses/addressesData"];
    },
    dataEditAddress() {
      return this.$store.getters["profile/addresses/addresses/dataEditAddress"];
    }
  },

  created() {
    this.userAddress = Object.values(this.addressData).length;
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
      this.$store.dispatch("profile/addresses/addresses/emptyDataEditAddress");
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
      this.$emit("submit-address-add", data, stateEditAdd);
    },

    closeModal() {
      this.$store.dispatch("profile/addresses/addresses/emptyDataEditAddress");
      this.showModal = false;
    },

    editAddress(data) {
      this.$store.dispatch("profile/addresses/addresses/fillDataEditAddress", data);
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
  height: toRem(273);
  background: $white;
  padding-top: toRem(25);
  border-radius: toRem(10);
}
.user-adresses__empty-container img {
  opacity: 1;
}
.user-adresses__empty {
  font-size: toRem(18);
  line-height: 140.62%;
  text-align: center;
  color: $gray;
  margin-top: toRem(37);
}

.backdrop {
  @extend .modal-backdrop;
  background-color: $overlay--profile;
}
.p-adresses-content-main {
  padding-right: toRem(21);
  padding-left: toRem(21);
}
.p-adresses-content-btn-add-main {
  @include display-flex();
}
.p-adresses-content-btn-data {
  margin-top: toRem(45);
  margin-bottom: toRem(38);
  font-size: toRem(16);
}
.p-adresses-content-item {
  @include display-flex();
  border: toRem(1) solid $light-gray;
  border-radius: toRem(10);
  height: toRem(241);
  margin-bottom: toRem(24);
}
.p-adresses-content-header {
  @include display-flex();
  padding-right: toRem(23);
  padding-left: toRem(23);
}
.p-adresses-content-header {
  background: $google-btn__bg;
  height: toRem(73);
  border-top-left-radius: toRem(10);
  border-top-right-radius: toRem(10);
}
.p-adresses-content-header-icon {
  width: toRem(23);
  height: toRem(23);
}
.p-adresses-content-filter-icon::after {
  content: "\e802";
  @include font-icon__new();
  font-size: toRem(28);
  color: $gray-3;
  cursor: pointer;
}
.p-adresses-content-header-item {
  @include display-flex();
  margin-left: toRem(85);
}
.p-adresses-content-header-item-title {
  font-family: inherit;
  font-size: toRem(16);
  margin-right: toRem(10);
  color: $black-topic;
  font-weight: 400;
  text-align: right;
}
.p-adresses-content-data {
  @include display-flex();
  padding-right: toRem(27);
  padding-left: toRem(27);
}
.p-adresses-content-text-data {
  font-family: inherit;
  font-size: toRem(16);
  color: $black-topic;
  font-weight: 400;
}
.p-adresses-content-text-main {
  @include display-flex();
  margin-top: toRem(25);
  margin-bottom: toRem(36);
}
.p-adresses-content-data-btns {
  @include display-flex();
  padding-left: toRem(16);
  height: toRem(83);
  align-items: flex-end;
}
.p-adresses-content-btn-edit {
  width: toRem(130)!important;
}
.p-adresses-content-wrapper {
  @include display-flex();
}
.p-adresses-content-data-main {
  @include display-flex();
}
.p-adresses-content-edit-icon {
  width: toRem(16);
  height: toRem(16);
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
  height: toRem(167);
  @include display-flex();
  align-content: flex-start;
}
.p-favorite-product-btn-main {
  margin-bottom: toRem(37);
}
.p-favorite-product-item-icon-delete::before {
  @include font-icon__limoo();
  font-size: toRem(16);
  content: "\e826";
  color: $gray-3;
}
.p-adresses-icon::before {
  content: "\e823";
  @include font-icon__limoo();
  font-size: toRem(19);
  color: $gray;
  cursor: pointer;
}
.location--icon::before {
  content: "\e817";
  font-size: toRem(21);
  color: $gray;
}
.phone--icon::before {
  content: "\e81f";
  font-size: toRem(19);
  color: $gray;
}
.message--icon::before {
  content: "\e81a";
  font-size: toRem(19);
  color: $gray;
}
.p-product-btn {
  width: toRem(150)!important;
  height: toRem(47)!important;
  font-family: inherit;
  transition: all 120ms ease-in;
}
@include xl {
  .p-adresses-content-header-item {
    margin-left: 10%;
  }
  .p-adresses-content-header-item:last-of-type {
    margin-left: 0;
  }
}

@include lg {
  .p-adresses-content-header-item {
    margin-left: 6%;
  }
}

@include md {
  .p-adresses-content-header-item {
    margin-left: 10%;
  }
}

@include xs {
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
