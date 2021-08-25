<template>
  <div class="pass-container">
    <div class="card">
      <div class="signin-next-btn">
        <button @click="nextPage" class="app-signin-next-btn"></button>
        <div
          class="success-message"
          :class="{ 'message-animation': passChenged }"
        >
          <img class="success-icon" src="/icons/success.svg" />
          <p dir="rtl" class="success-txt">
            {{ getTextByTextKey("auth_success_password") }}
          </p>
        </div>
      </div>

      <div class="card-body">
        <form @submit.prevent="pressed">
          <div class="form-group">
            <p class="txt-header">
              {{ getTextByTextKey("auth_change_password") }}
            </p>

            <text-input
              class="w-100  pass__repeat"
              labelNameClass=""
              inputNameClass="w-100"
              state="authInput"
              maxlength="32"
              function-max-len="greaterThan"
              placeholderText=""
              :msgError="{
                notValidMsg: getTextByTextKey('personal_info_error_password'),
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
              :check-empty-submit="true"
              :check-required="true"
              :check-typing-submit="true"
              :use-timer="false"
              :show-icon-star="true"
              :form-data="formData"
              :state-password="true"
              :check-typeing-several-password="checkTypeingSeveralPassword"
              accessStyleParentInToChildNameId="address__form--data"
              tag-html="input"
              timer-start=""
              type-input="text"
              name-input="newPass"
              :label-text="getTextByTextKey('auth_new_passowrd')"
              @typeing="typeing"
            >
            </text-input>

            <text-input
              class="w-100  pass__repeat"
              labelNameClass=""
              inputNameClass="w-100"
              state="authInput"
              maxlength="32"
              function-max-len="greaterThan"
              placeholderText=""
              :msgError="{
                notValidMsg: getTextByTextKey('personal_info_error_password'),
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
              :check-empty-submit="true"
              :check-required="true"
              :check-typing-submit="true"
              :use-timer="false"
              :show-icon-star="true"
              :form-data="formData"
              :state-password="true"
              :active-border-click="true"
              :check-typeing-several-password="checkTypeingSeveralPassword"
              accessStyleParentInToChildNameId="address__form--data"
              tag-html="input"
              timer-start=""
              type-input="text"
              name-input="repeatNewPass"
              :label-text="getTextByTextKey('auth_repeat_new_password')"
              @typeing="typeing"
            >
            </text-input>
          </div>

          <div class="btn-control">
            <base-button
              classes="signup-btn desk-display"
              button-type="submit"
              dir="rtl"
              :base-color="btnColor"
              no-box-shadow
            >
              {{
                passChenged
                  ? getTextByTextKey("home_blog_single_more")
                  : getTextByTextKey("auth_success_change")
              }}
            </base-button>
            <button class="signup-btn min-display" type="submit">
              {{ getTextByTextKey("home_blog_single_more") }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import textInput from "~/components/UI/textInput";

export default {
  data() {
    return {
      passwordFieldType: "password",
      passwordFieldTypeVerify: "password",
      password: "",
      passwordVerify: "",
      passChenged: false,
      passIsActive: false,
      verifyPassIsActive: false,
      checkInitialValidation: 0,
      formData: {
        repeatNewPass: "",
        newPass: "",
      },
      checkTypeingSeveralPassword: 0,
    };
  },
  computed: {
    btnColor() {
      if (this.passChenged) {
        return 'green'
      } else {
        return 'yellow'
      }
    }
  },
  components: {
    textInput,
  },
  methods: {
    getTextByTextKey,
    pressed() {
      // this.$store.commit("passHolder", { value: this.password });
      // console.log(this.password);
      //* move to another method later
      this.passChenged = true;
      setTimeout(() => {
        this.passChenged = false;
      }, 2000);
      //*==========================
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    switchVisibilityVerify() {
      this.passwordFieldTypeVerify =
        this.passwordFieldTypeVerify === "password" ? "text" : "password";
    },
    nextPage() {
      // go to ...
      this.$router.push("/users/password/forget/confirm");
    },

    typeing(data) {
      this.checkTypeingSeveralPassword++;
    },
  },
};
</script>

<style lang="scss" scoped>
.pass-container {
  height: 100vh;
  @include display-flex();
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.card {
  @include display-flex();
  flex-direction: column;
  justify-content: space-around;
  width: 642px;
  height: 524px;
  background-color: $white;
  box-shadow: 0px 8px 16px $box__shadow;
  border-radius: 15px;
}
.success-icon {
  width: 24px;
  height: 24px;
  margin-right: 18px;
  margin-top: 17px;
}
.success-txt {
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  margin-right: 8px;
  text-align: right;
  margin-top: 17px;
  color: $white;
}
.signin-btn {
  font-family: inherit;
  font-size: 18px;
  height: 58px;
  width: 463px;
}
.signin-next-btn {
  @include display-flex();
  justify-content: flex-start;
  width: 30px;
  height: 30px;
  margin-top: 24px;
}
.app-signin-next-btn::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: 24px;
  color: $black-icon;
}
.signin__close-eye::before {
  content: "\e810";
  @include font-icon__limoo();
  font-size: 20px;
  color: $gray;
  vertical-align: middle;
}
.signin__close-eye,
.signin__open-eye {
  margin-bottom: 2px;
}
.signin__open-eye::before {
  content: "\e811";
  @include font-icon__limoo();
  font-size: 20px;
  color: $gray;
  vertical-align: middle;
}
.input-holder-verify {
  margin-bottom: 42px;
}
.form-control {
  direction: rtl;
  font-family: inherit;
}
.btn-control {
  @include display-flex();
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card::v-deep {
  .txt-content {
    @extend .txt-content;
  }
  .input-holder {
    @extend .input-holder;
    margin-right: auto;
    margin-left: auto;
  }
  .signup-input {
    @extend .signup-input;
    padding-right: 0;
    direction: ltr;
    text-align: right;
  }
  .form__main--item {
    justify-content: center;
    width: 463px;
  }
  .show--error .input-holder {
    border-color: $red;
    background: $bg_festival_counrer_down;
  }
  .code-request {
    @extend .code-request;
  }
  .timer-timeText {
    @extend .timer-timeText;
  }
  .form__item--error {
    margin-bottom: 08px;
  }
  .signin-eye {
    margin-bottom: 0;
  }
}

.txt-header {
  font-size: 24px;
  line-height: 33.75px;
  font-weight: 400;
  text-align: right;
  margin: 8px 90px 38px 15px;
}
.txt-content {
  font-size: 16px;
  line-height: 22.5px;
  font-weight: 318;
  text-align: right;
  margin-bottom: 24px;
  margin-right: 90px;
}
.signup-btn {
  margin-bottom: 3.5rem;
}
.signup-input {
  padding-right: 1.5rem;
}

.min-display {
  display: none;
}
.desk-display {
  display: block;
}

@media screen and (max-width: 600px) {
  .app-signin-next-btn {
    visibility: hidden;
  }
  .min-display {
    display: block;
  }
  .desk-display {
    display: none;
  }
}
@media screen and (max-width: 540px) {
  .success-message {
    @include display-flex();
    flex-direction: row-reverse;
    width: 463px;
    height: 58px;
    background-color: $alert-massage__green;
    margin: 44px 90px 0px 89px;
    border-radius: 10px;
    position: absolute;
    opacity: 0;
    /* add .message-animation when we want to show them */
  }

  /* add this animation to messages when we want to show them */
  .message-animation {
    animation: cssAnimation 1000ms 2 alternate;
  }
  @keyframes cssAnimation {
    0% {
      opacity: 0;
      transform: translate(0%, -100%);
    }
    70% {
      opacity: 1;
      transform: translate(0%, -20%);
    }
    80% {
      opacity: 1;
      transform: translate(0%, -20%);
    }
    90% {
      opacity: 1;
      transform: translate(0%, -20%);
    }
    100% {
      opacity: 1;
      transform: translate(0%, -20%);
    }
  }
  .card {
    width: 360px;
    height: 100vh;
    border-radius: 0;
    padding-right: 1px;
  }
  .success-message {
    width: 328px;
    height: 56px;
    margin: 16px 16px 0px 16px;
  }
  .success-txt {
    font-size: 14px;
    margin-top: 20px;
  }
  .signup-input {
    margin-right: 16px;
    margin-left: 16px;
    padding-right: 0px;
    width: 328px;
    height: 60px;
    margin-bottom: 8px;
  }
  .input-holder {
    padding: 0;
    width: 328px;
    height: 60px;
  }
  .input-holder-verify {
    margin-right: 16px;
    margin-left: 16px;
    padding: 0;
    width: 328px;
    height: 60px;
  }
  .signup-btn {
    width: 328px;
    margin-top: 0.375rem;
    margin-bottom: 8.25rem;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 328px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
  }
  .txt-content {
    width: 328px;
    font-size: 14px;
    margin-bottom: 15px;
    margin-right: 16px;
    margin-left: 16px;
  }
  .signup-limoo-logo {
    margin-top: 0.5rem;
  }
  .card::v-deep {
    .txt-content {
      font-size: 14px;
    }
    .form__item--error {
      font-size: 13px;
      margin-bottom: 24px;
    }
    .form__error--main {
      width: 328px;
      margin-right: auto;
      margin-left: auto;
    }
  }
}
@media screen and (max-width: 350px) {
  .card {
    padding-right: 0px;
    width: auto;
  }
  .success-message {
    width: 280px;
  }
  .signup-input {
    margin-right: 10px;
    margin-left: 10px;
    width: 280px;
    margin-bottom: 42px;
  }
  .input-holder {
    padding: 0;
    width: 280px;
    height: 60px;
  }
  .input-holder-verify {
    width: 280px;
  }
  .signup-btn {
    width: 280px;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 280px;
    margin: 37px 10px 20px 10px;
    margin-right: auto;
    margin-left: auto;
  }
  .txt-content {
    width: 280px;
    margin-right: 20px;
  }
  .signup-limoo-logo {
    margin-top: 0;
  }
  .form__item--error {
    font-size: 13px;
    margin-bottom: 8px;
  }
  .card::v-deep {
    .form__error--main {
      width: 280px;
    }
  }
}
@media screen and (max-width: 280px) {
  .success-message {
    width: 270px;
  }
  .signup-input {
    margin-right: 5px;
    margin-left: 5px;
    width: 270px;
    margin-bottom: 42px;
  }
  .input-holder {
    padding: 0 10px 0 0;
    width: 270px;
    height: 60px;
    margin-bottom: 8px;
  }
  .input-holder-verify {
    margin-right: 15px;
    padding: 0 10px 0 0;
    margin-left: 15px;
    width: 270px;
  }
  .signup-btn {
    width: 270px;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 270px;
  }
  .txt-content {
    width: 270px;
    margin-right: 10px;
  }
  .signup-limoo-logo {
    margin-top: 0.2rem;
  }

  .card::v-deep {
    .form__error--main {
      width: 270px;
    }
  }
}
</style>
