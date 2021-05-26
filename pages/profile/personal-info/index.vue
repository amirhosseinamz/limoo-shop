<template>
  <div id="test" class="profile-container">
    <transition mode="in-out">
      <div id="overlay" v-if="passChangeIsActive">
        <The-profile-pass-modal />
      </div>
    </transition>
    <the-profile-side-bar class="desktop-screen" />
    <div class="mobile-screen">
      <div class="mobile-screen__holder">
        <span class="mobile-screen__holder-txt">{{
          getTextByTextKey("personal_info_private_account")
        }}</span>
        <span @click="goToProfile" class="mobile-screen__holder-arrow"></span>
      </div>
    </div>
    <div class="user-profile__holder">
      <div class="user-profile">
        <span class="user-profile__topic">
          {{ getTextByTextKey("personal_info_private_account") }}
        </span>
        <div class="user-profile__userpic">
          <img
            class="user-info__profile__imgholder-default"
            src="/icons/profile-holder.svg"
          />
          <span class="user-profile__changepic-btn">
            {{ getTextByTextKey("personal_info_change_avatar") }}
          </span>
        </div>
        <hr class="splicer-line" />
        <!-- =============== -->
        <form>
          <div class="user-profile__container">
            <div class="user-profile__info" dir="rtl">
              <div class="user-profile__info-name">
                <!-- <section>
                  <label for="name">
                    {{ getTextByTextKey("personal_info_name") }}
                  </label>
                  <input
                    type="text"
                    id="name"
                    :placeholder="
                      getTextByTextKey('personal_info_place_holder_name')
                    "
                  />
                </section> -->

                <text-input
                  class="name"
                  labelNameClass=""
                  inputNameClass="w-100"
                  idInput="name"
                  state="authInput"
                  maxlength="1000"
                  function-max-len="greaterThan"
                  placeholderText=""
                  :msgError="{
                    notValidMsg: 'مجاز نیست',
                    notValidNumber: 'بیش از حد مجاز',
                  }"
                  :check-email="false"
                  :check-number="false"
                  :active-check-phone-number="false"
                  :check-code="false"
                  :only-use-string="false"
                  :show-icon-clear-input="false"
                  :show-icon-eye-input="false"
                  :status-add-space-number="false"
                  :check-initial-validation="checkInitialValidation"
                  :check-empty-submit="false"
                  :check-required="false"
                  :check-typing-submit="false"
                  :use-timer="false"
                  :show-icon-star="false"
                  :form-data="formData"
                  accessStyleParentInToChildNameId="address__form--data"
                  tag-html="input"
                  timer-start=""
                  type-input="text"
                  name-input="name"
                  label-text="نام"
                >
                </text-input>

                <text-input
                  class="family"
                  labelNameClass=""
                  inputNameClass="w-100"
                  idInput="name"
                  state="authInput"
                  maxlength="1000"
                  function-max-len="greaterThan"
                  placeholderText=""
                  :msgError="{
                    notValidMsg: 'مجاز نیست',
                    notValidNumber: 'بیش از حد مجاز',
                  }"
                  :check-email="false"
                  :check-number="false"
                  :active-check-phone-number="false"
                  :check-code="false"
                  :only-use-string="false"
                  :show-icon-clear-input="false"
                  :show-icon-eye-input="false"
                  :status-add-space-number="false"
                  :check-initial-validation="checkInitialValidation"
                  :check-empty-submit="false"
                  :check-required="false"
                  :check-typing-submit="false"
                  :use-timer="false"
                  :show-icon-star="false"
                  :form-data="formData"
                  accessStyleParentInToChildNameId="address__form--data"
                  tag-html="input"
                  timer-start=""
                  type-input="text"
                  name-input="family"
                  label-text="نام خانوادگی"
                >
                </text-input>

                <!-- <section>
                  <label for="family">
                    {{ getTextByTextKey("personal_info_family") }}
                  </label>
                  <input
                    type="text"
                    id="family"
                    :placeholder="
                      getTextByTextKey('personal_info_place_holder_family')
                    "
                  />
                </section> -->
              </div>
              <!--/// email section is ignored in version alpha ///-->
              <!-- <div class="user-profile__info-email">ایمیل</div> -->
              <!-- ================================================ -->

              <!-- <div class="">
                <label for="phoneNumber">
                  {{ getTextByTextKey("personal_info_phone_number") }}
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  maxlength="11"
                  v-model="phoneNumber"
                  required
                  disabled
                />
              </div> -->

              <text-input
                class="user-profile__info-phone "
                labelNameClass=""
                inputNameClass="w-100"
                idInput="name"
                state="authInput"
                maxlength="10"
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
                :show-icon-clear-input="false"
                :show-icon-eye-input="false"
                :status-add-space-number="false"
                :check-initial-validation="checkInitialValidation"
                :check-empty-submit="false"
                :check-required="false"
                :check-typing-submit="false"
                :use-timer="false"
                :show-icon-star="true"
                :form-data="formData"
                :disabled-input-default="true"
                :remove-error="true"
                accessStyleParentInToChildNameId="address__form--data"
                tag-html="input"
                timer-start=""
                type-input="text"
                name-input="phoneNumber"
                label-text="شماره همراه :"
              >
              </text-input>

              <div class="user-profile__info-birthday">
                <client-only>
                  <the-date-dropdown
                    default="1373.11.17"
                    min="1300"
                    max="1387"
                    v-model="selectedDate"
                  />
                </client-only>
                <!-- <the-birthday /> -->
              </div>

              <!-- <div class="user-profile__info-nationalcode">
                <label for="nationalcode">
                  {{ getTextByTextKey("personal_info_code_national") }}
                </label>
                <input
                  :class="{ err__input: msg.nationalcode }"
                  type="text"
                  id="nationalcode"
                  maxlength="10"
                  :placeholder="
                    getTextByTextKey('personal_info_place_holder_national')
                  "
                  v-model="nationalcode"
                  required
                />
                <span class="user-profile__alert" v-if="msg.nationalcode">{{
                  msg.nationalcode
                }}</span>
              </div> -->

              <text-input
                class="user--item user-profile__info-nationalcode"
                labelNameClass=""
                inputNameClass="w-100"
                state="authInput"
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
                :check-typing-submit="false"
                :use-timer="false"
                :show-icon-star="true"
                :form-data="formData"
                accessStyleParentInToChildNameId="address__form--data"
                tag-html="input"
                timer-start=""
                type-input="text"
                name-input="codePoste"
                label-text="کد ملی:"
              >
              </text-input>

              <text-input
                class="user--item user-profile__info-pass"
                labelNameClass=""
                inputNameClass="w-100"
                state="authInput"
                maxlength="100"
                function-max-len="greaterThan"
                placeholderText=""
                :msgError="{
                  notValidMsg: 'مجاز نیست',
                  notValidNumber: 'بیش از حد مجاز',
                }"
                :check-email="false"
                :check-number="false"
                :active-check-phone-number="false"
                :check-code="false"
                :only-use-string="false"
                :show-icon-clear-input="false"
                :show-icon-eye-input="true"
                :status-add-space-number="false"
                :check-initial-validation="checkInitialValidation"
                :check-empty-submit="false"
                :check-required="false"
                :check-typing-submit="false"
                :use-timer="false"
                :show-icon-star="true"
                :form-data="formData"
                accessStyleParentInToChildNameId="address__form--data"
                tag-html="input"
                timer-start=""
                type-input="text"
                name-input="passwordShowModal"
                label-text="رمز عبور:"
                @click-input="passChange"
              >
              </text-input>

              <!-- <div class="user-profile__info-pass">
                <label for="pass">
                  {{ getTextByTextKey("personal_info_password") }}
                  <span>*</span></label
                >
                <input
                  @click="passChange"
                  :type="passwordFieldType"
                  value="********"
                  id="pass"
                />
              </div> -->
            </div>
            <div class="user-profile__btn-holder">
              <button class="user-profile__btn" type="submit">
                {{ getTextByTextKey("personal_info_submit_change") }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import TheProfilePassModal from "~/components/Profile/PersonalInfo/TheProfilePassModal.vue";
import TheDateDropdown from "~/components/Profile/PersonalInfo/TheDateDropdown.vue";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import textInput from "~/modules/textInput";

export default {
  middleware: "authentication",
  layout: "removeFooterMobile",
  components: {
    TheProfileSideBar,
    TheProfilePassModal,
    TheDateDropdown,
    textInput,
  },
  data() {
    return {
      passwordFieldType: "password",
      // passFocusIsActive: false,
      passChangeIsActive: false,
      msg: [],
      nationalcode: "",
      // later we get it from store (in talk with back-end)
      phoneNumber: "09120121023",
      selectedDate: "",
      checkInitialValidation: 0,
      formData: {
        phoneNumber: "09120121023",
        passwordShowModal: "AB6565656509",
        name: "مهدی",
        family: "دادور",
      },
    };
  },
  watch: {
    nationalcode(value) {
      this.nationalcode = value;
      this.validateNationalcode(value);
    },
    selectedDate() {
      console.log(this.selectedDate);
    },
  },
  methods: {
    getTextByTextKey,
    goToProfile() {
      this.$router.push("/profile");
    },
    // passFocus() {
    //     this.passFocusIsActive = !this.passFocusIsActive;
    // },
    passChange() {
      this.passChangeIsActive = !this.passChangeIsActive;
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    validateNationalcode(value) {
      let difference = 10 - value.length;
      if (/\D/.test(value)) {
        this.msg["nationalcode"] = "کد ملی نمی تواند شامل حروف باشد!";
      } else if (value.length == 0) {
        this.msg["nationalcode"] = "";
        // } else if (value.length < 10) {
        //     this.msg["nationalcode"] =
        //         "کد ملی باید 10 رقم باشد! " +
        //         difference +
        //         " رقم باقی مانده.";
      } else {
        this.msg["nationalcode"] = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-section__items::v-deep {
  background: red !important;
  color: red;
}

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
  z-index: 10;
  background: $overlay__profile;
}
/* .v-enter-from {
    opacity: 0;
}
.v-enter-active {
    transition: all 200ms ease-out;
}
.v-enter-to {
    opacity: 0.5;
} */
.v-leave-from {
  opacity: 0.5;
}
.v-leave-active {
  transition: all 300ms ease-in;
}
.v-leave-to {
  opacity: 0;
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

.user-info__profile__imgholder-default {
  width: 140px;
  height: 140px;
  /* border: 1px solid red; */
  border-radius: 50%;
  background-color: $gray-border;
}
.user-profile__changepic-btn {
  color: $code-request;
  font-size: 18px;
  line-height: 140.62%;
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
  &__userpic {
    /* border: 1px solid gray; */
    @include display-flex();
    flex-direction: column;
    align-items: center;
    margin-top: 23px;
    height: 162px;
    width: 162px;
  }
  &__container {
    @include display-flex();
    flex-direction: column;
    width: 100%;
    min-height: 500px;
    height: max-content;
    /* border: 1px solid rgb(11, 27, 201); */
    padding: 0 90px;
  }
  &__info {
    @include display-flex();
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    /* border: 0.1px solid red; */
    margin: 0 auto;
    margin-top: 50px;
    min-height: 395px;
    height: max-content;
    min-width: 700px;
    max-width: 875px;
    &-name,
    &-email,
    &-phone,
    &-birthday,
    &-nationalcode,
    &-pass {
      width: 390px;
      height: 100px;
      /* background: rgb(220, 232, 228); */
      /* border: 0.1px solid red; */
    }
    &-name {
      background: $white;
      @include display-flex();
      flex-direction: row;
      justify-content: space-between;
    }
    &-phone,
    &-pass,
    &-name > section,
    &-nationalcode {
      background: $white;
      @include display-flex();
      flex-direction: column;
    }
    &-name > section > label,
    &-nationalcode > label,
    &-pass > label,
    &-phone > label {
      font-size: 16px;
      line-height: 140.62%;
      text-align: right;
      margin-bottom: 16px;
    }
    &-pass > label > span {
      color: $alert-red;
      margin-right: 3px;
    }
    #name,
    #family,
    &-phone > input,
    &-nationalcode > input {
      font-family: inherit;
      font-size: 16px;
      height: 52px;
      border: 1px solid $input-border;
      box-shadow: 0px 4px 4px $gray-border;
      border-radius: 15px;
      color: $gray;
      outline: none;
      padding: 16px;
    }
    /* &-pass > .pass-holder {
            @include display-flex();
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border: 1px solid $input-border;
            box-shadow: 0px 4px 4px $gray-border;
            border-radius: 15px;
            height: 52px;
        } */
    &-pass > input {
      /* flex-grow: 1; */
      border: 1px solid $input-border;
      box-shadow: 0px 4px 4px $gray-border;
      border-radius: 15px;
      height: 52px;
      font-family: inherit;
      font-size: 16px;
      height: 52px;
      /* border: none; */
      /* background: transparent; */
      border-radius: 15px;
      color: $gray;
      outline: none;
      padding: 16px;
    }
    /* .pass-holder__active {
            border-color: $black;
        } */
    #name:focus,
    #family:focus,
    &-pass > input:focus,
    &-nationalcode > input:focus {
      border-color: $black;
    }
    .err__input {
      /* we use this class when user input is wrong
            so in this situation_ !important _is not so much bad */
      border-color: $alert-red !important;
      /*background: $alert-red__bg;
            color: $alert-red;  */
    }
    /* &-email,
        &-birthday,
        &-pass {

        } */
  }
  &__alert {
    margin-top: 4px;
    color: $alert-red;
    text-align: right;
    font-size: 14px;
    line-height: 140.62%;
  }
  &__btn {
    margin: 0 auto 48px auto;
    height: 57px;
    width: 270px;
    background: $btn__green;
    color: $white;
    font-size: 18px;
    font-family: inherit;
    line-height: 140.62%;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    border: none;
  }
}
#name {
  width: 157px;
}
#family {
  width: 208px;
}
.user--item {
  width: 390px;
}
.user-profile__container::v-deep {
  .txt-content {
    margin-bottom: 16px;
    line-height: 140.62%;
  }
  .input-holder {
    box-shadow: 0px 4px 4px $flash_white;
    height: 52px;
    background: $white;
    border-radius: 15px;
    margin-bottom: 4px;
  }
  .form__item--error {
    margin-bottom: 0;
    font-size: 14px;
  }
  .signup-input {
    color: $gray;
    font-size: 16px;
    padding: 16px;
  }
  .form__item--error {
    display: none;
    width: 100%;
    justify-content: flex-end;
  }
  .show--error .form__item--error {
    display: flex;
  }
  .card-body {
    height: 100%;
  }
}

.name::v-deep {
  width: 157px;
}
.family::v-deep {
  width: 208px;
}
.splicer-line {
  display: none;
}

@media (max-width: 1450px) {
  .user-profile {
    &__info {
      &-name,
      &-email,
      &-phone,
      &-birthday,
      &-nationalcode,
      &-pass {
        width: 360px;
      }
    }
    &__container {
      padding: 0 50px;
    }
    @mixin name {
      width: 137px;
    }
    @mixin family {
      width: 178px;
    }
    #name {
      @include name;
    }
    #family {
      @include family;
    }
    .name::v-deep {
      @include name;
    }
    .family::v-deep {
      @include family;
    }
  }
}
@media (max-width: 1220px) {
  .user-profile {
    &__info {
      &-name,
      &-email,
      &-phone,
      &-birthday,
      &-nationalcode,
      &-pass {
        width: 340px;
      }
    }
    &__container {
      padding: 0 20px;
    }
  }
}
@media (max-width: 960px) {
  #overlay {
    background: $overlay__profile-mobile;
  }
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
  .user-info__profile__imgholder-default {
    width: 100px;
    height: 100px;
  }
  .user-profile__changepic-btn {
    font-size: 14px;
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
    &__info {
      @include display-flex();
      flex-direction: row-reverse;
      flex-wrap: wrap;
      justify-content: space-between;
      /* border: 1px solid red; */
      margin-top: 50px;
      /* height: 500px; */
      min-width: 100%;
      &-name,
      &-email,
      &-phone,
      &-birthday,
      &-nationalcode,
      &-pass {
        width: 100%;
        height: 90px;
        margin: 0 100px 24px 100px;
      }
      &-phone {
        order: 1;
      }
      &-email {
        order: 2;
      }
      &-nationalcode {
        order: 3;
      }
      &-birthday {
        order: 4;
      }
      &-pass {
        order: 5;
      }
      &-name > section > label,
      &-nationalcode > label,
      &-pass > label,
      &-phone > label {
        font-size: 14px;
      }
      #name,
      #family,
      &-nationalcode > input,
      &-pass > input,
      &-phone > input {
        font-size: 13px;
        height: 46px;
        padding: 14px 16px;
      }
    }
    &__container {
      padding: 0;
    }
    &__btn {
      font-size: 16px;
      margin: 0 0 47px 0;
      align-self: center;
      font-weight: 500;
      width: 100%;
      &-holder {
        padding: 0 200px;
      }
    }
    &__alert {
      font-size: 13px;
    }
    #name {
      width: 208px;
    }
    #family {
      width: 277px;
    }
  }

  .splicer-line {
    display: block;
    width: 100%;
    border: none;
    border-top: 1px solid $gray-border;
  }

  .user-profile__container::v-deep {
    .txt-content {
      font-size: 14px;
    }
    .input-holder {
      height: 46px;
    }
    .name {
      width: 208px;
    }
    .family {
      width: 277px;
    }
    .signup-input {
      padding: 14px 16px;
      font-size: 13px;
    }
    .signin__close-eye::before {
      font-size: 16px;
    }
  }

  // #name,
  // #family,
  // &-nationalcode > input,
  // &-pass > input,
  // &-phone > input {
  //   font-size: 13px;
  //   height: 46px;
  //   padding: 14px 16px;
  // }
}
@media (max-width: 600px) {
  .user-profile__holder {
    padding: 0 5px;
  }
  .user-profile {
    &__info {
      &-name,
      &-email,
      &-phone,
      &-birthday,
      &-nationalcode,
      &-pass {
        width: 100%;
        height: 90px;
        margin: 0 24px 24px 24px;
      }
    }
    &__btn {
      &-holder {
        padding: 0 11px;
      }
    }
    #name {
      width: 170px;
    }
    #family {
      width: 220px;
    }
  }

  .user-profile__container::v-deep {
    .name {
      width: 170px;
    }
    .family {
      width: 220px;
    }
  }
}
@media (max-width: 530px) {
  .user-profile {
    #name {
      width: 120px;
    }
    #family {
      width: 142px;
    }
  }
  .user-profile__container::v-deep {
    .name {
      width: 120px;
    }
    .family {
      width: 142px;
    }
  }
}
@media (max-width: 350px) {
  .user-profile {
    #name {
      width: 110px;
      padding: 13px;
    }
    #family {
      width: 135px;
      padding: 13px;
    }
  }

  .user-profile__container::v-deep {
    .name {
      width: 110px;
    }
    .family {
      width: 135px;
    }
    .signup-input {
      padding: 13px;
    }
  }
}
@media (max-width: 280px) {
  .user-profile {
    #name {
      width: 105px;
      padding: 10px;
    }
    #family {
      width: 110px;
      padding: 10px;
    }
  }
  .user-profile__container::v-deep {
    .name {
      width: 105px;
    }
    .family {
      width: 110px;
    }
  }
}
</style>
