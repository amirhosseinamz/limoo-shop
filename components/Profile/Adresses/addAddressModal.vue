<template>
  <base-modal
    class="modal-container"
    :mode="modalMode"
    modal-class="modal"
    @close-modal="closeModalParent"
  >
    <div class="w-100 p-modal-header">
      <div class="w-100 p-modal-header-mobile">
        <div class="p-modal-header-top align-items-center">
          <span @click="closeModalParent" class="location-icon"></span>
          <span class="p-modal-header-top-title">
            {{ getTextByTextKey("address_add_address") }}
          </span>
        </div>

        <hr class="splicer-line" />
      </div>

      <div class="p-modal-header-desktop w-100 flex-column">
        <div class="w-100 p-modal-header-top-main">
          <div class="p-modal-header-top align-items-center">
            <span @click="closeModalParent" class="location-icon"></span>
            <h3 class="p-modal-header-top-title">
              {{ getTextByTextKey("address_exact_postal_address") }}
            </h3>
          </div>
          <div class="p-modal-header-close ">
            <base-button
              @button-clicked="closeModalParent"
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
          @button-clicked="closeModalParent"
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
import customeDropDown from "../../../modules/customeDropDown.vue";
import "../../../assets/styles/_adresses.scss";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import textInput from "~/components/UI/textInput";

export default {
  props: {
    modalMode: {type: String, require: true}
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
    };
  },
  computed: {
    allProvince() {
      return this.$store.getters["profile/addresses/addresses/allProvince"];
    },
    allCities() {
      return this.$store.getters["shipping/shipping/allCities"];
    },
    dataEditAddress() {
      return this.$store.getters["profile/addresses/addresses/dataEditAddress"];
    }
  },

  created() {
    const width = window.innerWidth;
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

    if (485 >= width) {
      this.textLabelCodePoste = "کد پستی";
    }

    // // پس از اتصال به بک اند بعد از گرفتن پروفایل قسمت مورد آپدیت شود //
    this.setDefaultValidationMsg();
    this.detectedResizeBrowser();
  },

  methods: {
    getTextByTextKey,
    setDefaultValidationMsg() {
      this.notValidMsg = this.getTextByTextKey("address_not_valid");
      this.overLimitMsg = this.getTextByTextKey(
        "address_validation_over_limit"
      );
      this.onlyUseNumberMsg = this.getTextByTextKey(
        "address_validation_required_number"
      );

      this.errorValidationNumberReceiverMsg = this.onlyUseNumberMsg;
      this.validationNameReceiverMsg = this.notValidMsg;
      this.validationCodePosteMsg = this.notValidMsg;
      this.errorValidationNumberAddress = this.onlyUseNumberMsg;
    },


    closeModalParent() {
        this.$emit("close-modal");
    },

    checkShowErrorCityProvince() {
      this.showErrorValidationProvince = this.formData.province === "";

      this.showErrorValidationCity = this.formData.city === "";
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
      this.formData.province = value;
      this.formData.selectedProvinceAllProperty = allData;
      this.showErrorValidationProvince = false;
      this.$emit("selected-province", allData);
    },

    selectedCity(value, allData) {
      this.formData.city = value;
      this.formData.selectedCityAllProperty = allData;
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
        true
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.p-modal-wrapper-item::v-deep {
  .birthday-item-main {
    width: toRem(181);
  }
}
.birthday-item-main::v-deep {
  &.p-modal-select-box-province_city {
    width: 100%!important;
  }
}

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
  text-align: right;
  font-size: toRem(14);
  @include display-flex();
  width: 100%;
  text-align: right;
  visibility: hidden;
}
// custome input //
.modal-container::v-deep {
  .modal {
    width: toRem(982);
    height: toRem(623);
    background: $white;
    box-shadow: 0 toRem(8) toRem(16) $box__shadow;
    border-radius: 15px;
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
      .show--error .search__section--error {
        visibility: visible;
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
      padding-right: toRem(191);
      padding-left: toRem(191);
      @include display-flex();
      padding-top: toRem(51);
    }
    .p-modal-wrapper-item {
      width: toRem(181);
      margin-left: toRem(27);
      margin-bottom: toRem(11);
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

    .location-icon {
      &::before {
        content: "\e817";
        @include font-icon__limoo();
        font-size: toRem(20);
        color: $gray-3;
      }
    }
    .p-modal-header-top-title {
      color: $black;
      font-size: toRem(18);
      font-weight: 500;
      margin-right: toRem(11.5);
    }
    .p-modal-header {
      padding-right: toRem(41);
      padding-left: toRem(41);
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
      margin-bottom: toRem(19);
    }
    .p-modal-header-line {
      width: 95%;
      margin-right: auto;
      margin-left: auto;
      height: toRem(1);
      background: $gray-border;
      @include display-flex();
      margin-top: toRem(2);
    }
    .p-modal-header-top-main {
      @include display-flex();
      align-items: center;
      padding-top: toRem(20);
      padding-bottom: toRem(11);
    }
    .p-modal-btns {
      padding-top: toRem(49);
    }
    .p-modal-show_error .pass__alert {
      visibility: inherit;
    }

    .p-modal-show_error .p-modal-item-input {
      border: solid toRem(1) $red !important;
    }
    .p-favorite-product-btn-modal-delete {
      font-size: toRem(16);
    }
    .p-favorite-product-btn-modal-cancel {
      font-size: toRem(16);
    }
    .p-modal-validation-mobile {
      display: none !important;
    }
    .p-input-style__default:focus {
      border: solid toRem(1) $black;
    }
    .p-modal-header-close-icon::before {
      font-size: toRem(28);
    }
    .form__modal--address .card-body .form-group {
      height: toRem(95);
      background: red;
    }
    .p-product-btn {
      width: toRem(150);
      height: toRem(47);
      font-family: inherit;
      transition: all 120ms ease-in;
    }
  }
}
@include md {
  .p-modal-wrapper-item::v-deep {
    .birthday-item-main {
      width: 100%;
    }
  }
  .modal-container::v-deep {
    .modal {
      align-self: flex-end;
      position: absolute;
      width: 100%;
      height: toRem(632);
      background: $white;
      box-shadow: 0 toRem(20) toRem(24) $overlay__profile-mobile;
      border-radius: toRem(30) toRem(30) 0 0;

      &__close-cross {
        display: none;
      }
      &__close-line {
        display: block;
        align-self: center;
        margin-top: toRem(24);
      }
      &__title {
        display: block;
        font-size: toRem(14);
        line-height: 140.62%;
        color: $gray;
        margin-top: toRem(24);
        text-align: right;
      }
      .pass__holder {
        height: toRem(80);
        width: 84vw;
        margin-bottom: toRem(35);
        label {
          font-size: toRem(14);
        }
      }

      .pass__old,
      .pass__new,
      .pass__new-repeat {
        @include display-flex();
        height: toRem(46);
      }
      .pass__old > input,
      .pass__new > input,
      .pass__new-repeat > input {
        height: toRem(46);
        width: toRem(200);
      }
      .pass__submitbtn {
        width: 91vw;
        margin-bottom: toRem(47);
      }
      .pass__alert {
        font-size: toRem(13);
        padding-right: toRem(7);
      }
      .clear-input > img {
        width: toRem(17);
        height: toRem(15);
      }
      .splicer-line {
        display: block;
        width: 95%;
        border: none;
        margin: toRem(16) toRem(5);
        border-top: toRem(1) solid $gray-border;
        margin-bottom: toRem(35);
      }
      .p-modal-header-mobile {
        display: flex;
        flex-flow: column;
      }
      .p-modal-header-desktop {
        display: none;
      }
      .p-modal-wrapper-province_city-title {
        font-size: toRem(14);
        margin-bottom: toRem(10);
      }
      .p-modal-wrapper-item {
        width: 43%;
        margin-left: 13%;
        margin-bottom: toRem(4);
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
        padding-right: toRem(32);
        padding-left: toRem(32);
        padding-top: toRem(24);
      }
      .splicer-line {
        margin-bottom: 0;
        margin-top: 20px;
      }
      .location-icon {
        &::before {
          font-size: toRem(17);
        }
      }
      .p-modal-header-top-title {
        font-size: toRem(14);
        color: $gray;
      }
      .p-modal-header-top {
        padding-top: toRem(32);
      }
      .p-modal-btns {
        padding-top: 0;
      }
    }
  }

}

@include xs {
  .modal-container::v-deep {
    .modal {
      height: toRem(617);

      .p-modal-btns {
        padding-top: toRem(9);
      }
      .p-modal-wrapper-province_city-title {
          margin-bottom: toRem(7);
      }
        .search-section__items {
          height: toRem(46);
        }


    }
  }
}

@include xxs {
  .modal-container::v-deep {
    .modal {
      height: toRem(536);

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
        padding-top: toRem(9);
      }
      .p-modal-address {
        margin-bottom: toRem(6);
      }
      .p-modal_wrapper {
        padding-right: toRem(29);
        padding-left: toRem(29);
        padding-top: 0;
      }
      .pass__alert {
        height: toRem(20);
      }
      .p-modal-wrapper-item {
        margin-bottom: 0;
      }
      .splicer-line {
        margin-top: toRem(10);
        margin-bottom: toRem(10);
      }
      .p-modal-header-top {
        padding-top: toRem(18);
      }
      .p-input-style__default {
        height: toRem(46);
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
      .p-modal-wrapper-province_city-title {
        margin-bottom: toRem(4.8);
      }
    }
  }



}

@include xxxs {
  .modal {
    height: toRem(617);
  }
  .p-favorite-product-btn-modal-delete {
    margin-left: 3%;
  }
  .p-modal_wrapper {
    padding-top: toRem(24);
  }
  .splicer-line {
    margin-top: toRem(17);
    margin-bottom: 0;
  }
  .p-modal-wrapper-item {
    margin-bottom: toRem(6);
  }
  .modal::v-deep {
    .p-modal-wrapper-province_city-title {
      margin-bottom: toRem(16);
    }
    .p-modal-wrapper-item {
      margin-bottom: toRem(6);
    }
  }
}
</style>
