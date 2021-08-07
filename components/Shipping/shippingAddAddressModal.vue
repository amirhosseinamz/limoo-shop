<template>
  <base-modal
    class="modal-container"
    :show-modal="showModal"
    :mode="modalMode"
    modal-class="modal"
    @phone-modal-closed="closeModalMobile"
  >

    <div class="w-100 p-modal-header">
      <div class="w-100 p-modal-header-mobile">
        <div class="w-100 d-flex justify-content-center p-modal-header-icon">
          <img
            @click="closeModalDesktop"
            class="modal__close-cross"
            src="/icons/close.svg"
          />
        </div>

        <div class="p-modal-header-top align-items-center">
          <img
            @click="closeModalMobile"
            class="p-modal-header-icon-location"
            src="/icons/location_adress.svg"
          />
          <span class="p-modal-header-top-title">
            {{ getTextByTextKey("address_add_address") }}
          </span>
        </div>

        <hr class="splicer-line" />
      </div>

      <div class="p-modal-header-desktop w-100 flex-column">
        <div class="w-100 p-modal-header-top-main">
          <div class="p-modal-header-top align-items-center">
            <img
              class="p-modal-header-icon-location"
              src="/icons/location_adress.svg"
            />
            <h3 class="p-modal-header-top-title">
              {{ getTextByTextKey("address_exact_postal_address") }}
            </h3>
          </div>
          <div class="p-modal-header-close ">
            <base-button
              @button-clicked="closeModalDesktop"
              classes="p-modal-header-close-icon"
              base-color="white"
              mode="close"></base-button>
          </div>
        </div>
        <span class="splicer-line p-modal-header-line"></span>
      </div>
    </div>

    <form
      id="form__modal--main"
      @submit.prevent=""
      class="w-100 p-modal_wrapper align-items-start"
    >
      <div class="p-modal-content w-100 align-items-start flex-wrap">

        <text-input
          labelNameClass="p-modal-wrapper-province_city-title"
          inputNameClass=""
          class=" p-modal-address w-100"
          state="standard"
          maxlength="130"
          function-max-len="equalTo"
          placeholderText=""
          :msgError="{
            notValidMsg: 'مجاز نیست',
            notValidNumber: 'بیش از حد مجاز',
          }"
          :check-email="false"
          :check-number="false"
          :active-check-phone-number="false"
          :check-code="false"
          :only-use-string="true"
          :show-icon-clear-input="false"
          :show-icon-eye-input="false"
          :status-add-space-number="false"
          :check-initial-validation="checkInitialValidation"
          :check-empty-submit="true"
          :check-required="false"
          :use-timer="false"
          :show-icon-star="false"
          :form-data="formData"
          accessStyleParentInToChildNameId="address__form--data"
          tag-html="input"
          timer-start="0:10"
          type-input="text"
          name-input="address"
          label-text="نشانی پستی دقیق :"
        >
        </text-input>

        <div class="w-100 p-modal-content-items flex-wrap">
          <div
            :class="{ 'p-modal-show_error': showErrorValidationProvince }"
            class="p-modal-wrapper-item flex-wrap "
            :key="initialValueProvince"
          >
            <h3 class="p-modal-wrapper-province_city-title">
              {{ getTextByTextKey("address_validation_select_province") }}
            </h3>
            <customeDropDown
              :options="allProvince"
              :initial-value="initialValueProvince"
              label="title"
              className="p-modal-select-box-province_city"
              @last-update="selectedProvince"
            ></customeDropDown>
            <!-- <span class="pass__alert p-modal-validation-desktop">استان خود را انتخاب کنید</span> -->
            <span class="pass__alert ">
              {{ getTextByTextKey("address_validation_select_province") }}
            </span>
          </div>
          <div
            :class="{ 'p-modal-show_error': showErrorValidationCity }"
            class="p-modal-wrapper-item flex-wrap "
          >
            <h3 class="p-modal-wrapper-province_city-title">
              {{ getTextByTextKey("address_validation_select_city") }}
            </h3>
            <customeDropDown
              :options="allCities"
              :initial-value="initialValueCity"
              label="title"
              className="p-modal-select-box-province_city"
              @last-update="selectedCity"
            ></customeDropDown>
            <!-- <span class="pass__alert p-modal-validation-desktop">لطفا شهر خود را انتخاب کنید</span> -->
            <span class="pass__alert">
              {{ getTextByTextKey("address_validation_select_city") }}
            </span>
          </div>

          <text-input
            class="p-modal-wrapper-item p-margin-left-0"
            labelNameClass="p-modal-wrapper-province_city-title"
            inputNameClass=""
            state="standard"
            maxlength="10"
            function-max-len="greaterThan"
            placeholderText=""
            :msgError="{
              notValidMsg: 'مجاز نیست',
              notValidNumber: 'بیش از حد مجاز',
            }"
            :check-email="false"
            :check-number="true"
            :active-check-phone-number="false"
            :check-code="false"
            :only-use-string="false"
            :show-icon-clear-input="false"
            :show-icon-eye-input="false"
            :status-add-space-number="false"
            :check-initial-validation="checkInitialValidation"
            :check-empty-submit="false"
            :check-required="false"
            :check-typing-submit="true"
            :use-timer="false"
            :show-icon-star="false"
            :form-data="formData"
            accessStyleParentInToChildNameId="address__form--data"
            tag-html="input"
            timer-start=""
            type-input="text"
            name-input="codePoste"
            :label-text="textLabelCodePoste"
          >
          </text-input>

          <text-input
            class="p-modal-wrapper-item"
            labelNameClass="p-modal-wrapper-province_city-title"
            inputNameClass=""
            state="standard"
            maxlength="34"
            function-max-len="equalTo"
            placeholderText=""
            :msgError="{
              notValidMsg: 'مجاز نیست',
              notValidNumber: 'بیش از حد مجاز',
            }"
            :check-email="false"
            :check-number="false"
            :active-check-phone-number="false"
            :check-code="false"
            :only-use-string="true"
            :show-icon-clear-input="false"
            :show-icon-eye-input="false"
            :status-add-space-number="false"
            :check-initial-validation="checkInitialValidation"
            :check-empty-submit="true"
            :check-required="true"
            :use-timer="false"
            :show-icon-star="false"
            :form-data="formData"
            accessStyleParentInToChildNameId="address__form--data"
            tag-html="input"
            timer-start="0:10"
            type-input="text"
            name-input="nameReceiver"
            label-text="نام گیرنده:"
          >
          </text-input>

          <text-input
            class="p-modal-wrapper-item"
            labelNameClass="p-modal-wrapper-province_city-title"
            inputNameClass=""
            state="standard"
            maxlength="11"
            function-max-len="greaterThan"
            placeholderText=""
            :msgError="{
              notValidMsg: 'مجاز نیست',
              notValidNumber: 'بیش از حد مجاز',
            }"
            :check-email="false"
            :check-number="true"
            :active-check-phone-number="true"
            :check-code="false"
            :only-use-string="false"
            :show-icon-clear-input="true"
            :show-icon-eye-input="false"
            :status-add-space-number="false"
            :check-initial-validation="checkInitialValidation"
            :check-empty-submit="true"
            :check-required="true"
            :use-timer="false"
            :show-icon-star="false"
            :form-data="formData"
            accessStyleParentInToChildNameId="address__form--data"
            tag-html="input"
            timer-start="0:10"
            type-input="text"
            name-input="numberReceiver"
            label-text="شماره گیرنده:"
          >
          </text-input>
        </div>
      </div>

      <div
        class="p-profile-favorite-btns w-100 justify-content-center p-modal-btns"
      >
        <base-button
          @button-clicked="submitAddressAdd"
          classes="p-product-btn p-favorite-product-btn-modal-delete"
          base-color="yellow"
          no-box-shadow
        >
          {{ getTextByTextKey("public_submit") }}
        </base-button>

        <base-button
          @button-clicked="closeModalMobile"
          classes="p-product-btn p-favorite-product-btn-modal-cancel"
          no-box-shadow
          base-color="light-gray"
        >
          {{ getTextByTextKey("public_back") }}
        </base-button>
      </div>
    </form>
  </base-modal>
</template>
<script>
import customeDropDown from "~/modules/customeDropDown.vue";
import "~/assets/styles/_adresses.scss";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import textInput from "~/modules/textInput";

export default {
  props: {
    dataEditAddress: { type: Object, default: {} },
    showAddModal: {
      type: Boolean,
      require: true
    },
    showEditModal: {
      type: Boolean,
      require: true
    }
  },
  components: {
    customeDropDown,
    textInput,
  },
  data() {
    return {
      modalClose: false,
      msg: [],
      valueProvince: {},
      valueCitys: {},
      formData: {},
      initialValueProvince: "",
      initialValueCity: "",
      showErrorValidationCity: false,
      showErrorValidationProvince: false,
      checkInitialValidation: 0,
      textLabelCodePoste: "کد پستی (اختیاری):",
      windowWidth: 0
    };
  },
  computed: {

    allProvince() {
      return this.$store.getters["shipping/shipping/allProvince"];
    },
    allCities() {
      return this.$store.getters["shipping/shipping/allCities"];
    },
    formDataOriginal() {
      return this.$store.getters["shipping/shipping/formData"];
    },
    profilePhoneNumber() {
      return this.$store.getters["shipping/shipping/profilePhoneNumber"];
    },
    modalMode() {
      if (this.windowWidth > 960) {
        return "form";
      } else {
        return "phone";
      }
    },
    showModal() {
      return this.showAddModal || this.showEditModal;
    }
  },
  watch: {
    dataEditAddress(data) {
    },
    showEditModal(val) {
      if (val) {
        for (let key in this.dataEditAddress) {
          this.formData[key] = this.dataEditAddress[key];
        }
        this.initialValueProvince = this.formData.province;
        this.initialValueCity = this.formData.city;
      }

    },
    showAddModal(val) {
      if (val) {
        const formDataOriginal = this.formDataOriginal;
        for (let key in formDataOriginal) {
          this.formData[key] = formDataOriginal[key];
        }
      }

    }
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    // پس از کلیک روی ویرایش آدرس کاندیشن زیر اجرا می شود //
    if (typeof this.dataEditAddress.id !== "undefined") {
      for (let key in this.dataEditAddress) {
        this.formData[key] = this.dataEditAddress[key];
      }
      this.initialValueProvince = this.formData.province;
      this.initialValueCity = this.formData.city;
    } else {
      const formDataOriginal = this.formDataOriginal;
      for (let key in formDataOriginal) {
        this.formData[key] = formDataOriginal[key];
      }
    }
    debugger;

    if (485 >= this.windowWidth) {
      this.textLabelCodePoste = "کد پستی";
    }

    // // پس از اتصال به بک اند بعد از گرفتن پروفایل قسمت مورد آپدیت شود //
    // this.formData.numberReceiver = this.profilePhoneNumber;
    this.setDefaultValidationMsg();
    this.detectedResizeBrowser();
  },

  methods: {
    getTextByTextKey,
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    setDefaultValidationMsg() {
      this.notValidMsg = this.getTextByTextKey("address_not_valid");
      this.overLimitMsg = this.getTextByTextKey(
        "address_validation_over_limit",
      );
      this.onlyUseNumberMsg = this.getTextByTextKey(
        "address_validation_required_number",
      );

      this.errorValidationNumberReceiverMsg = this.onlyUseNumberMsg;
      this.validationNameReceiverMsg = this.notValidMsg;
      this.validationCodePosteMsg = this.notValidMsg;
      this.errorValidationNumberAddress = this.onlyUseNumberMsg;
    },

    closeModalMobile() {
      this.modalClose = true;
      setTimeout(() => {
        this.$emit("close-modal");
      }, 280);
    },

    closeModalDesktop() {
      this.$emit("close-modal");
    },

    checkShowErrorCityProvince() {
      if (this.formData.province == "") {
        this.showErrorValidationProvince = true;
      } else {
        this.showErrorValidationProvince = false;
      }

      if (this.formData.city == "") {
        this.showErrorValidationCity = true;
      } else {
        this.showErrorValidationCity = false;
      }
    },
    showModalData() {
      if (typeof this.dataEditAddress.id != "undefined") {
        for (let key in this.dataEditAddress) {
          this.formData[key] = this.dataEditAddress[key];
        }
        this.initialValueProvince = this.formData.province;
        this.initialValueCity = this.formData.city;
      } else {
        const formDataOriginal = this.formDataOriginal;
        for (let key in formDataOriginal) {
          this.formData[key] = formDataOriginal[key];
        }
        console.log(this.formData);
      }

      if (485 >= this.windowWidth) {
        this.textLabelCodePoste = "کد پستی";
      }
    },

    submitAddressAdd() {
      this.checkInitialValidation++;
      // در صورت نداشت ارور فورم مورد نظر ارسال می شود //
      setTimeout(() => {
        const formData = this.formData;
        let checkSubmitForm = "success";

        // check has error city and province //
        this.checkShowErrorCityProvince();

        // چک کردن ارور فورم //
        for (let key in formData) {
          const value = formData[key].value;

          if (formData[key].hasError) {
            checkSubmitForm = "failed";
          }

          if (typeof value !== "undefined") {
            formData[key] = value;
          }

          // has error city & province run condition //
          if (
            this.showErrorValidationCity ||
            this.showErrorValidationProvince
          ) {
            checkSubmitForm = "failed";
          }
        }

        if (checkSubmitForm === "success") {
          this.$emit("submit-address-add", this.formData);
        }
      });
    },

    selectedProvince(value, allData) {
      // this.formData.province = value;
      // this.formData.selectedProvinceAllProperty = allData;
      this.$store.dispatch("shipping/shipping/selectProvince", [value, allData]);
      this.showErrorValidationProvince = false;
      this.$emit("selected-province", allData);
    },

    selectedCity(value, allData) {
      // this.formData.city = value;
      // this.formData.selectedCityAllProperty = allData;
      this.$store.dispatch("shipping/shipping/selectProvince", [value, allData]);
      this.showErrorValidationCity = false;
      this.$emit("selected-city", allData);
    },

    detectedResizeBrowser() {
      window.addEventListener(
        "resize",
        () => {
          const width = window.innerWidth;

          if (485 >= width) {
            this.textLabelCodePoste = "کد پستی";
          } else {
            this.textLabelCodePoste = "کد پستی (اختیاری):";
          }
        },
        true,
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin p-modal-wrapper-province_city-title() {
  font-family: inherit;
  font-size: toRem(16);
  font-weight: 500;
  margin-bottom: toRem(16);
  color: $black;
  text-align: right;
  padding-right: toRem(7);
  line-height: 140.62%;
}

@mixin pass__alert_style() {
  margin-top: toRem(4);
  color: $alert-red;
  font-size: toRem(14);
  @include display-flex();
  width: 100%;
  text-align: right;
  visibility: hidden;
}

.p-modal-select-box-province_city::v-deep {
  .birthday-item-main {
    width: 100%;
  }
}

// custome input //
.modal-container::v-deep {
  .modal {
    @include display-flex();
    flex-direction: column;
    align-items: center;
    width: toRem(982);
    height: toRem(623);
    background: $white;
    box-shadow: 0 toRem(8) toRem(16) $box__shadow;
    border-radius: toRem(15);

    &__close-cross {
      align-self: flex-end;
      width: toRem(30);
      height: toRem(30);
      margin-top: toRem(24);
      margin-left: toRem(24);
      cursor: pointer;
    }

    &__close-line {
      display: none;
      align-self: center;
      margin-top: toRem(24);
    }

    &__title {
      display: none;
    }

    form {
      @include display-flex();
      flex-direction: column;
      align-items: center;
    }

    .pass__holder {
      height: toRem(88);
      margin-bottom: toRem(35);
      width: 45%;

      label {
        font-size: toRem(16);
        line-height: 140.62%;

        span {
          color: $red;
          margin-right: toRem(3);
        }
      }
    }

    .pass__repeat {
      margin-bottom: toRem(42);
    }

    .pass__old,
    .pass__new,
    .pass__new-repeat {
      @include display-flex();
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: toRem(52);
      flex-grow: 1;
      background: $white;
      border: toRem(1) solid $input-border;
      box-sizing: border-box;
      box-shadow: 0 toRem(4) toRem(4) $gray-border;
      border-radius: toRem(15);
      margin-top: toRem(15);
    }

    .pass__old > input,
    .pass__new > input,
    .pass__new-repeat > input {
      height: toRem(52);
      flex-grow: 1;
      background: transparent;
      /* border: 1px solid red; */
      padding: toRem(16);
      line-height: 140.62%;
      border: none;
      border-radius: toRem(15);
      font-family: inherit;
      outline: none;
      font-size: toRem(16);
    }

    .pass__submitbtn {
      align-self: center;
      margin-bottom: toRem(40);
      height: toRem(57);
      width: toRem(270);
      background: $btn__green;
      color: $white;
      font-size: toRem(18);
      font-family: inherit;
      line-height: 140.62%;
      text-align: center;
      border-radius: toRem(10);
      cursor: pointer;
      outline: none;
      border: none;
    }

    .pass__alert {
      @include pass__alert_style();
    }

    .pass__alert {
      @include pass__alert_style();
    }

    .show--error .search__section--error {
      visibility: visible;
    }

    .splicer-line {
      display: none;
    }


    .p-modal-city_provence {
      @include display-flex();
    }

    .p-modal-header-close-icon {
      margin-left: 0;
    }

    .p-modal_wrapper {
      @include display-flex();
      padding: toRem(20) toRem(191) toRem(40) toRem(191);
    }

    .p-modal-wrapper-item {
      width: 175px;
      margin-left: 37px;
      margin-bottom: 11px;
    }

    .p-modal-wrapper-item:last-of-type {
      margin-left: 0;
    }

    .p-modal-wrapper-province_city-title {
      @include p-modal-wrapper-province_city-title();
    }

    .p-margin-left-0 {
      margin-left: 0;
    }

    .p-modal-header-desktop {
      @include display-flex();
    }

    .p-modal-header-mobile {
      display: none;
    }

    .p-modal-header-top {
      flex-grow: 1;
      @include display-flex();
    }

    .p-modal-header-icon-location {
      width: 24px;
    }

    .p-modal-header-top-title {
      color: $black;
      font-size: 18px;
      font-weight: 500;
      margin-right: 11.5px;
    }

    .p-modal-header {
      padding-right: 41px;
      padding-left: 41px;
    }

    .p-modal-content {
      @include display-flex();
    }

    .p-modal-content-items {
      @include display-flex();
    }

    .p-modal-address-input {
      width: 100%;
    }

    .p-modal-address {
      margin-bottom: 19px;
    }

    .p-modal-header-line {
      width: 95%;
      margin-right: auto;
      margin-left: auto;
      height: 1px;
      background: $gray-border;
      @include display-flex();
      margin-top: 2px;
    }

    .p-modal-header-top-main {
      @include display-flex();
      align-items: center;
      padding-top: 20px;
      padding-bottom: 11px;
    }

    .p-modal-btns {
      padding-top: 49px;
      @include display-flex();
    }

    .p-modal-show_error .pass__alert {
      visibility: inherit;
    }

    .p-modal-show_error .p-modal-item-input {
      border: solid 1px $red !important;
    }

    .p-modal-validation-mobile {
      display: none !important;
    }

    .p-input-style__default:focus {
      border: solid 1px $black;
    }

    .p-modal-header-close-icon::before {
      font-size: 28px;
    }

    .form__modal--address .card-body .form-group {
      height: 95px;
      background: red;
    }

    .p-product-btn {
      width: 150px;
      height: 47px;
      font-family: inherit;
      transition: all 120ms ease-in;
    }

    .p-modal-wrapper-province_city-title {
      @include p-modal-wrapper-province_city-title();
    }

    .search-section__items {
      border: toRem(1) solid $input-border;
      box-shadow: 0 toRem(4) toRem(4) $gray-border;
      border-radius: toRem(15);
      height: toRem(52);
    }

    .form__textara-item {
      height: toRem(52);
    }

    .search-section__input {
      padding-right: toRem(10);
      padding-left: toRem(10);
      color: $gray;
    }

    .search__section--error {
      margin-bottom: 0;
    }

    .p-modal-header-icon {
      @include display-flex();
    }
  }
}


@media (max-width: 960px) {

  .modal-container::v-deep {
    .modal {
      width: 100%;
      height: 723px;
      background: $white;
      box-shadow: 0 20px 24px $overlay__profile-mobile;
      border-radius: 30px 30px 0 0;

      &__close-cross {
        display: none;
      }

      &__close-line {
        display: block;
        align-self: center;
        margin-top: 24px;
      }

      &__title {
        display: block;
        font-size: 14px;
        line-height: 140.62%;
        color: $gray;
        margin-top: 24px;
        text-align: right;
      }

      .pass__holder {
        height: 80px;
        width: 84vw;
        margin-bottom: 35px;

        label {
          font-size: 14px;
        }
      }

      .pass__old,
      .pass__new,
      .pass__new-repeat {
        @include display-flex();
        height: 46px;
      }

      .pass__old > input,
      .pass__new > input,
      .pass__new-repeat > input {
        height: 46px;
        width: 200px;
      }

      .pass__submitbtn {
        width: 91vw;
        margin-bottom: 47px;
      }

      @mixin pass__alert() {
        font-size: 13px;
        padding-right: 7px;
      }

      .pass__alert {
        @include pass__alert();
      }

        .pass__alert {
          @include pass__alert();
        }
      .clear-input > img {
        width: 17px;
        height: 15px;
      }
      .splicer-line {
        display: block;
        width: 95%;
        border: none;
        margin: 16px 5px;
        border-top: 1px solid $gray-border;
        margin-bottom: 35px;
      }
      .p-modal-header-mobile {
        display: flex;
        flex-flow: column;
      }
      .p-modal-header-desktop {
        display: none;
      }
      @mixin p-modal-wrapper-province_city-title() {
        font-size: 14px;
      }
      .p-modal-wrapper-province_city-title {
        @include p-modal-wrapper-province_city-title();
      }
      .p-modal-wrapper-item {
        width: 43%;
        margin-left: 13%;
        margin-bottom: 4px;
      }
      .p-modal-wrapper-item:nth-child(2n) {
        margin-left: 0;
      }
      .p-modal-wrapper-item:nth-child(3n) {
        margin-left: 13%;
      }
      .p-input-style__default {
        width: 100%;
      }
      .p-modal_wrapper {
        padding-right: 32px;
        padding-left: 32px;
        padding-top: 24px;
      }
      .splicer-line {
        margin-bottom: 0;
        margin-top: 20px;
      }
      .p-modal-header-icon-location {
        width: 19px;
      }
      .p-modal-header-top-title {
        font-size: 14px;
        color: $gray;
      }
      .p-modal-header-top {
        padding-top: 31px;
      }
      .p-modal-btns {
        padding-top: 55px;
      }
    }
  }


}

@media (max-width: 540px) {
  .modal-container::v-deep {
    .modal {
      height: 688px;

      .p-modal-btns {
        padding-top: 25px;
      }
    }
  }

}

@media screen and (max-width: 485px) {
  .modal-container::v-deep {
    .modal {
      height: 617px;

      .p-product-btn {
        width: 47%;
        margin-left: 0;
      }
      .p-favorite-product-btn-modal-delete {
        margin-left: 4%;
      }
      .p-favorite-product-btn-modal-cancel {
        margin-left: 0;
      }
      .p-modal-btns {
        padding-top: 9px;
      }

      .p-modal-address {
        margin-bottom: 6px;
      }

      .p-modal_wrapper {
        padding-right: 29px;
        padding-left: 29px;
      }

      @mixin pass__alert() {
        height: 20px;
      }
      .pass__alert {
        @include pass__alert();
      }

      .splicer-line {
        margin-top: 16px;
      }
      .p-modal-header-top {
        padding-top: 18px;
      }
      .p-input-style__default {
        height: 46px;
      }
      .search-section__items {
        height: 46px !important;
      }
      .p-modal-wrapper-item {
        margin-bottom: 0;
      }
      .p-modal-validation-mobile {
        display: flex !important;
      }
      .p-modal-validation-desktop {
        display: none !important;
      }
    }
  }

}

@media screen and (max-width: 320px) {

  .modal-container::v-deep {
    .modal {
      height: 470px;

      .p-modal-wrapper-province_city-title {
        margin-bottom: toRem(4.8);
      }
      &__close-line {
        margin-top: 20px;
      }

      &__title {
        margin-top: 20px;
      }

      .p-modal_wrapper {
        padding-top: 0;
      }
      .pass__holder {
        height: 70px;
        width: 84vw;
        margin-bottom: 25px;

        label {
          font-size: 13px;
        }
      }

      .pass__old,
      .pass__new,
      .pass__new-repeat {
        @include display-flex();
        height: 40px;
      }

      .pass__old > input,
      .pass__new > input,
      .pass__new-repeat > input {
        height: 40px;
        width: 200px;
      }

      .pass__submitbtn {
        width: 91vw;
        margin-bottom: 37px;
        margin-top: 15px;
      }
      .splicer-line {
        margin-bottom: 10px;
        margin-top: 10px;
      }
      @mixin pass__alert_style() {
        font-size: 11px;
      }
      .pass__alert {
        @include pass__alert_style();
      }
    }
  }

  .modal-container::v-deep {
    .modal {
      height: 536px;
    }
  }
  .p-modal_wrapper {
    padding-top: 0;
  }
  .p-modal-header-top {
    padding-top: 16px;
  }
  .p-modal-btns {
    padding-top: 9px;
  }
  @mixin p-modal-wrapper-province_city-title() {
    margin-bottom: 8px;
  }
  .p-modal-address {
    margin-bottom: 0;
  }
  .p-modal-wrapper-item {
    margin-bottom: 1px;
  }
}

@media screen and (max-width: 280px) {
  .modal-container::v-deep {
    .modal {
      height: 617px;

      .p-favorite-product-btn-modal-delete {
        margin-left: 3%;
      }
      .p-modal_wrapper {
        padding-top: 24px;
      }
      .splicer-line {
        margin-top: 17px;
        margin-bottom: 0;
      }
      @mixin p-modal-wrapper-province_city-title() {
        margin-bottom: 16px;
      }
      @mixin p-modal-wrapper-item() {
        margin-bottom: 6px;
      }
      .p-modal-wrapper-item {
        margin-bottom: 6px;
      }
      .p-modal-wrapper-province_city-title {
        @include p-modal-wrapper-province_city-title();
      }
      .p-modal-wrapper-item {
        @include p-modal-wrapper-item();
      }
    }
  }

}
</style>
