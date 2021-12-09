<template>
  <div id="test" class="profile-container">
    <transition mode="in-out">
      <div id="overlay" v-if="passChangeIsActive">
        <The-profile-pass-modal />
      </div>
    </transition>
    <the-profile-side-bar class="profile-slide-bar" />
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
        </div>
        <span class="user-profile__changepic-btn">
            {{ getTextByTextKey("personal_info_change_avatar") }}
          </span>
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
                  label-text="نام :"
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
                  label-text="نام خانوادگی :"
                >
                </text-input>
              </div>
              <!--/// email section is ignored in version alpha ///-->
              <text-input
                class="user-profile__info-email "
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
                :disabled-input-default="false"
                :remove-error="true"
                accessStyleParentInToChildNameId="address__form--data"
                tag-html="input"
                timer-start=""
                type-input="text"
                name-input="email"
                label-text="آدرس ایمیل :"
              >
              </text-input>
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
                :disabled-input-default="false"
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
                name-input="nationalcode"
                label-text="کد ملی :"
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
                label-text="رمز عبور :"
                @click-input="passChange"
              >
              </text-input>
            </div>
            <div class="user-profile__btn-holder d-flex justify-center">
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
  max-width: toRem(1920);
  min-height: 100vh;
  display: flex;
  flex-direction: row-reverse;
}
.user-profile__holder {
  margin: toRem(166) 0 toRem(50) toRem(16);
  width: 80%;
  height: auto;
}
.user-info__profile__imgholder-default {
  width: toRem(90);
  height: toRem(90);
}
.user-profile__changepic-btn {
  color: $code-request;
  font-size: toRem(18);
  line-height: toRem(25.31);
  margin-top: toRem(9);
}
.user-profile {
  width: 100%;
  position: relative;
  @include display-flex();
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: $white;
  border-radius: toRem(10);
  box-shadow: 0 toRem(8) toRem(16) 0 $box__shadow;
  
  &__topic {
    font-size: toRem(18);
    line-height: toRem(25.31);
    color: $black-topic;
    align-self: flex-end;
    margin-top: toRem(23);
    margin-right: toRem(25);
  }
  &__userpic {
    @include display-flex();
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: toRem(23);
    height: toRem(162);
    width: toRem(162);
    border-radius: 50%;
    background-color: $gray-5;
    position: relative;
      &::after{
      //setting icon
      content: "\e86a";
      @include font-icon__limoo();
      position: absolute;
      bottom: 3%;
      right: 1%;
      color: $gray;
      font-size: toRem(40);
    }
  }
  &__info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: toRem(50);
    grid-row-gap: toRem(22);
    margin-top: toRem(40);
    padding: 0 toRem(90);
    @media only screen and (max-width: 1280px) {
      padding: 0 toRem(20);
      grid-column-gap: toRem(30);
    }

    
    &-name,
    &-email,
    &-phone,
    &-birthday,
    &-nationalcode,
    &-pass {
      width: 100%;
      // height: toRem(107);
    }
    &-name {
      grid-column: 1/2;
      grid-row: 1/2;
      @include display-flex();
      justify-content: space-between;
      .name {
        width:42%;
        @media only screen and (max-width: 1280px) {
          width: 42%;
          }
      }
      .family {
        width: 51%;
        @media only screen and (max-width: 1280px) {
          width: 52%;
          }
      }
    }
    &-email{
      grid-column: 2/3;
      grid-row: 1/2;
    }
    &-phone {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    &-birthday {
      grid-column: 2/3;
      grid-row: 2/3;
    }
    // &-birthday::v-deep{
    //   .item-year{
    //     .birthday-item-content{
    //           width: toRem(100)
    //     }
    //     .birthday-item__days{
    //       width:100%
    //     }
    //   }
    // }
    &-nationalcode {
      grid-column: 1/2;
      grid-row: 3/4;
    }
    &-pass {
      grid-column: 2/3;
      grid-row: 3/4;
    }
  }
  &__alert {
    margin-top: toRem(4);
    color: $alert-red;
    text-align: right;
    font-size: toRem(14);
    line-height: 140.62%;
  }
  &__btn {
    margin-top: toRem(42) ;
    margin-bottom: toRem(48);
    height: toRem(57);
    width: 33%;
    font-size: toRem(18);
    font-family: inherit;
    border-radius: toRem(10);
    background-color: $btn__green;
  }
}
.user-profile__container::v-deep {
  .txt-content {
    margin-bottom: toRem(16);
    line-height: toRem(22.5);
    color: $black-topic;
    font-size: toRem(16);
  }
  .input-holder {
    box-shadow: 0 toRem(4) toRem(4) $flash_white;
    height: toRem(52);
    background: $white;
    border-radius: toRem(15);
    border: toRem(1) solid $gray-4;
  }
  .form__item--error {
    margin-bottom: 0;
    font-size: toRem(14);
  }
  .signup-input {
    color: $gray;
    font-size: toRem(16);
    padding: toRem(16);
    color: $gray-3;
  }
  .form__item--error {
    display: block;
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
// .name::v-deep {
//   width: 157px;
// }
// .family::v-deep {
//   width: 208px;
// }
.splicer-line {
  display: none;
}





@include lg {
  .profile-slide-bar{
    // width:280px;
  }
  .profile-container{
  display: flex;
  flex-direction: row-reverse !important;
}
  .user-info__profile__imgholder-default {
    width: toRem(60);
    height: toRem(60);
  }
  .user-profile__changepic-btn {
    font-size: toRem(16);
    margin-top: toRem(16);
  }
  .profile-container {
    @include display-flex();
    flex-direction: column;
    margin-bottom: toRem(58);
  }
  .user-profile__holder {
    @include display-flex();
    justify-content: end;
    width: 60%;
  }
  .user-profile {
    // margin-left: toRem(40);
    width: 100%;
    &__topic {
      display: none;
    }
    &::before{
    top: 9%;
    left: 53%;
    font-size: toRem(25);
  }
    &__userpic {
    margin-top: toRem(38);
    height: toRem(108);
    width: toRem(108);
    &::after{
        bottom: 4%;
        right: 1%;
      font-size: toRem(25);
    }
  }
    &__info {
      @include display-flex();
      flex-direction: row-reverse;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 toRem(60);
      min-width: 100%;
      &-name,
      &-email,
      &-phone,
      &-birthday,
      &-nationalcode,
      &-pass {
        width: 100%;
        height: toRem(100);
        margin: 0 0 toRem(24) 0;
      }
      &-phone {
        order: 1;
      }
      &-email {
        order: 3;
      }
      &-nationalcode {
        order: 2;
      }
      &-birthday{
        order: 4;
      }
      &-pass {
        order: 5;
      }
     
    }
    &__btn {
      font-size: toRem(16);
      margin-top: toRem(42);
      margin-bottom: toRem(72); 
      width: 70%;
      margin-bottom: toRem(72);
      
    }
    &__alert {
      font-size: toRem(13);
    }
  }
  .splicer-line {
    display: none;
  }
  .user-profile__container::v-deep {
    .txt-content {
      font-size: toRem(16);
    }
    .input-holder {
      height: toRem(52);
    }
    .name {
      // margin-left: toRem(99);
      width: 35%;
    }
    .family {
      width: 50%;
    }
    .signup-input {
      font-size: toRem(16);
    }
    .signin__close-eye::before {
      font-size: toRem(16);
    }
    .form__item--error {
      font-size: toRem(13);
    }
  }
      }



@include md {
  #overlay {
    background: $overlay__profile-mobile;
  }
  .profile-slide-bar {
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
      margin-bottom: toRem(8);
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
  .user-info__profile__imgholder-default {
    width: toRem(60);
    height: toRem(60);
  }
  .user-profile__changepic-btn {
    font-size: toRem(16);
    margin-top: toRem(16);
  }
  .profile-container {
    @include display-flex();
    flex-direction: column !important;
    margin-bottom: toRem(58);
  }
  .user-profile__holder {
    margin: toRem(0) 0;
    width: 100%;
  }
  .user-profile {
    margin-left: 0;
    width:100%;
    &__topic {
      display: none;
    }
  //   &::before{
  //   top: 9%;
  //   left: 53%;
  //   font-size: toRem(25);
  // }
    &__userpic {
    margin-top: toRem(38);
    height: toRem(108);
    width: toRem(108);
      &::after{
        bottom: 4%;
        right: 1%;
      font-size: toRem(25);
    }
  }
    &__info {
      @include display-flex();
      flex-direction: row-reverse;
      flex-wrap: wrap;
      justify-content: space-between;
      min-width: 100%;
      padding:0 toRem(150);
      &-name,
      &-email,
      &-phone,
      &-birthday,
      &-nationalcode,
      &-pass {
        width: 100%;
        height: toRem(100);
        margin: 0 0 toRem(24) 0;
      }
      &-phone {
        order: 1;
      }
      &-email {
        order: 3;
      }
      &-nationalcode {
        order: 2;
      }
      &-birthday {
        order: 4;
      }
      &-pass {
        order: 5;
      }
    
    }
    &__container {
      // padding: 0 toRem(107) 0 toRem(107);
    }
    &__btn {
      font-size: toRem(16);
      margin-top: toRem(42);
      width: 50%;
      margin-bottom: toRem(72);
      
    }
    &__alert {
      font-size: toRem(13);
    }
  }
  .splicer-line {
    display: none;
  }
  .user-profile__container::v-deep {
    .txt-content {
      font-size: toRem(16);
    }
    .input-holder {
      height: toRem(52);
    }
    .name {
      width:40%
    }
    .family {
      width: 50%;
    }
    .signup-input {
      font-size: toRem(16);
    }
    .signin__close-eye::before {
      font-size: toRem(16);
    }
    .form__item--error {
      font-size: toRem(13);
    }
  }
}
@include sm{
  .user-profile__holder {
    // padding: 0 toRem(5);
  }
  .user-profile {
    margin-left: 0;
    width:100%;
    &::before{
    top: 10.5%;
    left: 53%;
    font-size: toRem(20);
  }
    &__info {
      margin-top: toRem(38);
      min-width: 100%;
      padding: 0 toRem(60);
      &-name,
      &-email,
      &-phone,
      &-birthday,
      &-nationalcode,
      &-pass {
        width: 100%;
        height: toRem(80);
        margin: auto;
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
    }
    &__container {
      padding: 0 toRem(20) 0 toRem(20);
    }
    &__userpic {
    margin-top: toRem(43);
    height: toRem(84);
    width: toRem(84);
      &::after{
          bottom: 0;
          right: 0;
        font-size: toRem(25);
      }
      }
    &__btn {
    margin-top: toRem(39);
    width: 50%;
    font-size: toRem(16);
    background-color: $btn__green;
  }
    .user-info__profile__imgholder-default {
    width: toRem(46);
    height: toRem(46);
}
.user-profile__changepic-btn {
  font-size: toRem(14);
  line-height: toRem(17.66);
  margin-top: toRem(16);
}
.splicer-line {
  display: block;
  width: 99%;
  border: none;
  margin-top: toRem(16);
  border-top: toRem(1) solid $gray-border;
}
    // #name {
    //   width: 170px;
    // }
    // #family {
    //   width: 220px;
    // }
  }
  .user-profile__container::v-deep {
    .name {
      width: 40%;
    }
    .family {
      width: 50%;
    }
    .txt-content {
      font-size: toRem(14);
    }
    .input-holder {
      height: toRem(46);
    }
    .signup-input {
      font-size: toRem(13);
    }
  }
}
@include xs {
  .user-profile {
    margin-left: 0;
    width:100%;
    &::before{
      top: 11%;
      left: 54%;
      font-size: toRem(20);
  }
    &__info {
      margin-top: toRem(38);
      min-width: 100%;
      padding: 0 toRem(15);
      @media only screen and(max-width: 350px){
        padding: 0;
      }
      &-name,
      &-email,
      &-phone,
      &-birthday,
      &-nationalcode,
      &-pass {
        width: 100%;
        height: toRem(80);
        margin: auto;
      }
    }
    &__btn {
      margin-top: toRem(39);
      margin-bottom: toRem(47);
      width: 110%;
      font-size: toRem(16);
      background-color: red;
    }
  }
  .user-profile__container::v-deep {
    .name {
      width: 40%;
    }
    .family {
      width: 50%;
    }
     &__container {
      padding: 0 toRem(20) 0 toRem(20);
    }
  }
}
@include xxs {
  .user-profile {
    margin-left: 0;
    width:100%;
    &::before{
      top: 10.5%;
      left: 57%;
      font-size: toRem(20);
  }
    &__info {
      margin-top: toRem(38);
      min-width: 100%;
      &-name,
      &-email,
      &-phone,
      &-birthday,
      &-nationalcode,
      &-pass {
        width: 100%;
        height: toRem(80);
        margin: auto;
      }
    }
    // .name {
    //   width: 110px;
    //   padding: 13px;
    // }
    // .family {
    //   width: 135px;
    //   padding: 13px;
    // }
  }
  .user-profile__container::v-deep {
    .name {
      width: 40%;
    }
    .family {
      width: 50%;
    }
    .signup-input {
      padding: toRem(13);
    }
   &__container {
      padding: 0 toRem(20) 0 toRem(20);
    }
   }
}
@include xxxs {
  .user-profile {
    margin-left: 0;
    width:100%;
    &::before{
      top: 11%;
      left: 57%;
      font-size: toRem(20);
  }
    &__info {
      margin-top: toRem(38);
      min-width: 100%;
      &-name,
      &-email,
      &-phone,
      &-birthday,
      &-nationalcode,
      &-pass {
        width: 100%;
        height:toRem(80);
        margin: auto;
      }
    }
   
  }
  .user-profile__container::v-deep {
    .name {
      width: toRem(90);
    }
    .family {
      width: toRem(120);
    }
    .signup-input {
      padding: toRem(13);
    }
   }
}
</style>
