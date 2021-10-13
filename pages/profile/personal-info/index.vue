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
        <form class="w-100">
          <div class="user-profile__container">
            <div class="user-profile__info" dir="rtl">
              <div class="user-profile__info-name">
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
              </div>
              <!--/// email section is ignored in version alpha ///-->
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
                :show-icon-star="false"
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

              <text-input
                class="user--item user-profile__info-nationalcode"
                labelNameClass=""
                inputNameClass="w-100"
                state="authInput"
                maxlength="10"
                function-max-len="greaterThan"
                placeholderText=""
                :msgError="{
                  notValidMsg: 'کد ملی نمی تواند شامل حروف باشد!',
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
            </div>
            <div class="user-profile__btn-holder">
              <base-button
              button-type="submit"
              classes="user-profile__btn"
              no-box-shadow
              >
                {{ getTextByTextKey("personal_info_submit_change") }}
              </base-button>
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
import textInput from "~/components/UI/textInput";

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
      passChangeIsActive: false,
      msg: [],
      // later we get it from store (in talk with back-end)
      selectedDate: "",
      checkInitialValidation: 0,

    };
  },
  computed: {
    formData() {
      return this.$store.getters["profile/personal-info/personal-info/formData"];
    }
  },
  watch: {
    selectedDate() {
    },
  },
  methods: {
    getTextByTextKey,
    goToProfile() {
      this.$router.push("/profile");
    },

    passChange() {
      this.passChangeIsActive = !this.passChangeIsActive;
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
  }
  &__alert {
    margin-top: 4px;
    color: $alert-red;
    text-align: right;
    font-size: 14px;
    line-height: 140.62%;
  }
  &__btn {
    margin: toRem(48) auto 48px auto;
    height: 57px;
    width: 270px;
    font-size: 18px;
    font-family: inherit;
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
.user-profile__container {
  @extend .align-center;
  -webkit-flex-flow: column;
  flex-flow: column;
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
@include xl {
  .user-profile {
    &__info {
      @include display-flex();
      min-width: toRem(570);
      &-name,
      &-email,
      &-phone,
      &-birthday,
      &-nationalcode,
      &-pass {
        width: 100%;
      }
    }
    &__container {
      padding: 0 toRem(20);
    }
  }
  .user-profile {
    #name {
      width: toRem(250);
    }
    #family {
      width: toRem(290);
    }
    .name::v-deep {
      width: toRem(250);
    }
    .family::v-deep {
      width: toRem(290);
    }
  }
}
@include md {
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
      margin-top: 50px;
      min-width: 100%;
      &-name,
      &-email,
      &-phone,
      &-birthday,
      &-nationalcode,
      &-pass {
        width: 100%;
        height: 90px;
        margin: 0 0 24px 0;
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
      padding: toRem(20);
    }
    &__btn {
      font-size: 16px;
      margin: 0 0 47px 0;
      align-self: center;
      font-weight: 500;
      width: 100%;
      &-holder {
        padding: 0;
        width: 100%;
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
    .form__item--error {
      font-size: 13px;
    }
  }
}
@include sm{
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
        margin: 0 0 24px 0;
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
@include xs {
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
@include xxs {
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
@include xxxs {
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
