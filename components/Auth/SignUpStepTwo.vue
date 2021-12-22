<template>
  <div class="signup-container">
    <div class="card">
      <div>
        <button @click="nextPage" class="app-signin-next-btn"></button>
<!--        Timer Passed-->
        <base-snackbar mode="alert" :show="false">
          {{ getTextByTextKey("auth_aignup_code_agin") }}
        </base-snackbar>

      </div>
      <div class="card-body">
        <base-snackbar mode="success" class="success-message" :show="newCodeSent">
          {{ getTextByTextKey("auth_aignup_code_new") }}

          {{ activationCode }}
        </base-snackbar>
        <base-snackbar mode="alert" class="alert-message" :show="error !== ''">
          {{ error }}
        </base-snackbar>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <p class="txt-header">
              {{ getTextByTextKey("auth_aignup_enter_code_please") }}
            </p>
            <text-input
              class="user--item user-profile__info-pass"
              labelNameClass=""
              inputNameClass="w-100"
              state="authInput"
              maxlength="4"
              function-max-len="greaterThan"
              placeholderText=""
              :msgError="{
                notValidMsg: getTextByTextKey('auth_request_code_resend'),
              }"
              :check-email="false"
              :check-number="false"
              :active-check-phone-number="false"
              :only-use-string="false"
              :show-icon-clear-input="false"
              :show-icon-eye-input="false"
              :status-add-space-number="true"
              :check-initial-validation="checkInitialValidation"
              :check-empty-submit="false"
              :check-required="false"
              :check-typing-submit="false"
              :use-timer="true"
              :show-icon-star="false"
              :form-data="formData"
              :attribute-required="true"
              :active-border-click="true"
              timer-start="01:60"
              accessStyleParentInToChildNameId="address__form--data"
              tag-html="input"
              type-input="text"
              name-input="verifyCode"
              :label-text="
                getTextByTextKey('auth_aignup_phone_enter_code') +
                  ' ' +
                  userPhoneNumber +
                  ' ' +
                  getTextByTextKey('auth_enter_phone')
              "
              :start-again-timer="startAgainTimer"
              @again-start-timer="sendNewRequest"
            >
            </text-input>
          </div>

          <div class="btn-control">
            <base-button no-box-shadow base-color="yellow" classes="signup-btn" button-type="submit" :disabled="btnIsDisabled" >
              {{ getTextByTextKey("public_confirm") }}
            </base-button>
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
  props: {
    confirmCode: Boolean,
  },
  components: {
    textInput,
  },
  data() {
    return {
      timerPassed: false,
      newCodeSent: false,
      isActive: false,
      userPhoneNumber: "",
      btnIsDisabled: false,
      counterDownMinutes: [],
      counterDownSecond: [],
      Tcounter: 178,
      timerZero: false,
      formData: {
        verifyCode: "",
      },
      checkInitialValidation: 0,
      startAgainTimer: 0,
      showSnack: false,
      showError: false,
    };
  },
  watch: {
    newCodeSent(val) {
      if (val) {
        setTimeout(() => {
          this.newCodeSent = false;
        },5000)
      }
    },
    error(val) {
      if (val) {
        setTimeout(() => {
          this.$store.commit('authentication/authentication/clearError');
        },5000)
      }
    }
  },
  mounted() {
    this.userPhoneNumber = this.$store.getters["authentication/authentication/userPhoneNumber"];
    this.newCodeSent = true;
  },
  computed: {
    activationCode() {
      return this.$store.getters["authentication/authentication/activationCode"];
    },
    error() {
      return this.$store.getters["authentication/authentication/errorMessage"];
    }
  },
  methods: {
    getTextByTextKey,
    animateTimerPassed() {
      this.timerPassed = true;
      setTimeout(() => {
        this.timerPassed = false;
      }, 5000);
    },
    submitForm() {
      // talk to server
      // this.$store.commit("PhoneNumber", { value: "" });
      this.checkInitialValidation++;

      setTimeout(() => {
        const formData = this.formData;
        let checkSubmitForm = "success";

        // چک کردن ارور فورم //
        for (let key in formData) {
          const value = formData[key].value;

          if (formData[key].hasError) {
            checkSubmitForm = "failed";
          }

          if (typeof value !== "undefined") {
            formData[key] = value;
          }
        }

        if (checkSubmitForm === "success") {
          this.$emit("confirmed", this.formData.verifyCode);
        }
      });
    },

    nextPage() {
      // go to .../users/signin-up
      this.$router.push("/users/signin-up");
    },
    sendNewRequest() {
      this.$store.dispatch('authentication/authentication/signIn', {
        phone: this.userPhoneNumber,
      })
      .then((res) => {
            if (res.response_code === 2208) {
              this.startAgainTimer++;
              this.newCodeSent = true;
              setTimeout(() => {
                this.newCodeSent = false;
              }, 5000);
            }
      })
    },
  },

};
</script>

<style lang="scss" scoped>
.success-message {
  width: toRem(463);
  height: toRem(58);
  margin: toRem(-24) toRem(90) 0 toRem(89);
  position: absolute;
  top: toRem(-40);
  @include xs {
    width: toRem(330);
    top: toRem(40);
  }
}

.alert-message {
  width: toRem(463);
  height: toRem(58);
  margin: toRem(-24) toRem(90) 0 toRem(89);
  position: absolute;
  top: toRem(-40);
  @include xs {
    width: toRem(330);
    top: toRem(40);
  }
}

.signup-container {
  height: 100vh;
  @include display-flex();
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card {
  @include display-flex();
  flex-direction: column;
  justify-content: space-around;
  width: toRem(642);
  height: toRem(524);
  background-color: $white;
  box-shadow: 0 8px 16px $box__shadow;
  border-radius: 15px;
  &-body {
    position: relative;
    @extend .justify-center;
  }
}
.app-signin-next-btn {
  @include display-flex();
  margin: 24px 11.5px 0 24px;
  width: 13.5px;
  height: 24px;
  cursor: pointer;
  @include xs {
    margin-top: 0;
  }
}
.app-signin-next-btn::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: 25px;
  color: $black-icon;
}
.signup-btn {
  font-family: inherit;
  font-size: 18px;
  height: 58px;
  width: 463px;
}
.form-control {
  direction: rtl;
  font-family: inherit;
}

.show-timer {
  display: none;
}
.tCounter {
  @include display-flex();
  flex-direction: row;
  margin-right: 5px;
}
.timer-timeText {
  font-size: 14px;
  font-weight: 400;
  line-height: 140.62%;
  color: $gray;
  margin-right: 2px;
}
.code-request {
  font-weight: 500;
  font-size: 13px;
  line-height: 140.62%;
  text-align: right;
  color: $code-request;
  margin-right: 90px;
  cursor: pointer;
  display: none;
}
.show-code-request {
  display: block;
}
.btn-control {
  @include display-flex();
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.min-display {
  display: none;
}
.txt-header {
  font-size: 24px;
  line-height: 33.75px;
  font-weight: 400;
  text-align: right;
  margin: 77px 90px 33px 0;
  @include sm {
    margin-right: toRem(26);
  }
}
.txt-content {
  font-size: 16px;
  line-height: 22.5px;
  font-weight: 318;
  text-align: right;
  margin-bottom: 25px;
  margin-right: 90px;
  @include sm {
    margin-right: toRem(26);
  }
}
.signup-input {
  color: $code;
  text-align: center;
  text-align: -moz-center;
  font-size: 20px;
  max-width: 461px;
  letter-spacing: 0.7em;
}
.signup-btn {
  margin-top: 0.875rem;
  margin-bottom: 5rem;
}

.signup-container::v-deep {
  .txt-content {
    @extend .txt-content;
  }
  .input-holder {
    @extend .input-holder;
  }
  .form__main--item {
    justify-content: center;
    width: auto;
  }
  .signup-input {
    @extend .signup-input;
    padding-right: 0;
  }
  .timer-holder {
    margin-bottom: 0;
  }
}
@include sm {
  .card {
    width: toRem(512);
  }
}

@include xs{

  .card {
    width: 380px;
    height: 100vh;
    border-radius: 0;
  }
  .input-holder {
    margin-right: 16px;
    margin-left: 16px;
    padding: 0;
    width: 328px;
    height: 60px;
    margin-bottom: 8px;
  }
  .signup-btn {
    width: 328px;
    margin-top: 38px;
    margin-bottom: 8rem;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    margin: 128px toRem(28) 24px 16px;
  }

  .signup-container::v-deep {
    .txt-content {
      font-size: 14px;
      margin-right: toRem(28);
      margin-left: 16px;
    }
    .input-holder {
      margin-right: 16px;
      margin-left: 16px;
      width: 328px;
      height: 60px;
      margin-bottom: 8px;
    }
    .form__main--item {
      justify-content: center;
      width: auto;
    }
    .signup-input {
      width: 328px;
      height: 60px;
      margin-bottom: 8px;
      margin-right: 0;
      margin-left: 0;
    }
    .timer {
      margin-right: 16px;
      font-size: 13px;
    }
    .timer-timeText {
      font-size: 13px;
    }
    .code-request {
      margin-right: 16px;
    }
  }
}
@include xxs {
  .card {
    width: toRem(270);
  }
}
@include xxxs{
  .alert-txt {
    padding-left: 30px;
  }
  .signup-input {
    width: 270px;
  }
  .input-holder {
    width: 270px;
  }
  .signup-btn {
    width: 270px;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 280px;
    margin-right: 5px;
    margin-left: 0px;
  }
  .txt-content {
    width: 270px;
    margin-right: 5px;
  }
  .signup-limoo-logo {
    margin-top: 0.2rem;
  }
}
</style>
