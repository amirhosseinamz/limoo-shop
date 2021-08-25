<template>
  <div class="signup-container">
    <div class="card">
      <div>
        <button @click="nextPage" class="app-signin-next-btn"></button>
        <transition name="snackbar" mode="out-in">
          <base-snackbar :mode="snackbarMode" :class="snackbarMode+'-message'" v-if="showSnackbar">
            {{ snackbarText }}
          </base-snackbar>
        </transition>
      </div>


      <div class="card-body">
        <form @submit.prevent="pressed">
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
              timer-start="2:60"
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
            <base-button
              base-color="yellow"
              button-type="submit"
              classes="signup-btn"
              :disabled="btnIsDisabled"
              no-effect no-box-shadow
            >
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
      showSnackbar: false,
    };
  },
  watch: {},
  computed: {
    snackbarMode() {
      return "success";
    },
    snackbarText() {
      if (this.snackbarMode === "success") {
        return this.getTextByTextKey("auth_aignup_code_new");
      } else if (this.snackbarMode === "alert") {
        return this.getTextByTextKey("auth_aignup_code_agin");
      }
    }
  },
  mounted() {
    let timeout;
    if (this.snackbarMode === "success") {
      timeout = 5000;
    } else if (this.snackbarMode === "alert") {
      timeout = 7000;
    }
    console.log(timeout);
    setTimeout(() => {
      this.showSnackbar = true;
    },3000)
    setTimeout(() => {
      this.showSnackbar = false;
    }, timeout)
    this.userPhoneNumber = this.$store.getters.PhoneNumberPicker;
  },
  methods: {
    getTextByTextKey,

    animateTimerPassed() {
      // console.log(this.verifyCode);
      this.timerPassed = true;
      setTimeout(() => {
        this.timerPassed = false;
      }, 5000);
    },
    pressed() {
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
          const verifyCode = parseInt(this.formData.verifyCode);
          const headers = {
            "Content-Type": "application/json",
            "Client-Key": process.env.CLIENT_KEY,
          };
          this.$axios
            .$post(
              process.env.SIGN_UP_OTP_API,
              {
                phone: this.userPhoneNumber,
                activation_code: verifyCode,
              },
              {
                headers: headers,
              }
            )
            .then((result) => {
              // console.log(result);
              if (result.response_code == 1) {
                this.$store.dispatch({
                  type: "userIsAuth",
                  value: true,
                });
                this.$store.commit("authUser/setToken", result.token);
                this.$store.commit("PhoneNumber", { value: "" });
                this.$emit("event-show-modal-wellcome");
                // console.log(result.token);
              } else if (result.response_code == 2222) {
                this.confirmCodeIsWrong = true;
                setTimeout(() => {
                  this.confirmCodeIsWrong = false;
                }, 5000);
              }
            })
            .catch((e) => console.log(e));
        }
      });
    },

    nextPage() {
      // go to .../users/signin-up
      this.$emit("btn-go-back-signup-step-one");
    },
    sendNewRequest() {
      const headers = {
        "Content-Type": "application/json",
        "Client-Key": process.env.CLIENT_KEY,
      };
      this.$axios
        .$post(
          process.env.SIGN_UP_API,
          { phone: this.userPhoneNumber },
          {
            headers: headers,
          }
        )
        .then((result) => {
          // console.log(result.response_code);
          if (result.response_code == 2208) {
            this.startAgainTimer++;

            this.countdownTimer(2, 60);
            this.Tcounter = 178;
            setTimeout(() => {
              this.timerZero = false;
            }, 1000);
            this.newCodeSent = true;
            setTimeout(() => {
              this.newCodeSent = false;
            }, 5000);
          }
        })
        .catch((e) => console.log(e));
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
}

.alert-message {
  width: toRem(463);
  height: toRem(58);
  margin: toRem(-24) toRem(90) 0 toRem(89);
  position: absolute;
}
/* add this animation to messages when we want to show them */

.snackbar-enter-active {
  animation: snackbarAnimation 0.8s ease-out;
}
.snackbar-leave-active {
  animation: snackbarAnimation 0.8s ease-out reverse;
}
@keyframes snackbarAnimation {
  0% {
    opacity: 0;
    transform: translate(0, -200%);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.signup-container {
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
  width: 642px;
  //height: 524px;
  background-color: $white;
  box-shadow: 0px 8px 16px $box__shadow;
  border-radius: 15px;
}
.alert-icon {
  width: 24px;
  height: 24px;
  margin-right: 18px;
  margin-top: 17px;
}
.app-signin-next-btn {
  @include display-flex();
  margin: 24px 11.5px 0 24px;
  width: 13.5px;
  height: 24px;
  cursor: pointer;
}
.app-signin-next-btn::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: 25px;
  color: $black-icon;
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
.alert-txt {
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  margin-right: 8px;
  text-align: right;
  margin-top: 17px;
  color: $white;
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
  font-size: toRem(24);
  line-height: toRem(33.75);
  font-weight: 400;
  text-align: right;
  margin: toRem(27) toRem(90) toRem(33) 0;
}
.txt-content {
  font-size: 16px;
  line-height: 22.5px;
  font-weight: 318;
  text-align: right;
  margin-bottom: 25px;
  margin-right: 90px;
}
.signup-input {
  color: $code;
  text-align: center;
  text-align: -moz-center;
  font-size: 20px;
  max-width: 461px;
  letter-spacing: 0.7em;
  direction: ltr;
}
.signup-btn {
  margin-top: 0.875rem;
  margin-bottom: 5rem;
  font-family: inherit;
  font-size: 18px;
  height: 58px;
  width: 463px;
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
@media screen and (max-width: 768px) {
  .alert-message,
  .success-message {
    width: toRem(406);
  }
  .card {
    width: toRem(530);
  }
  .txt-header {
    margin: toRem(27) toRem(38) toRem(33) 0;
  }
  .txt-content {
    margin-right: toRem(38);
  }
}

@media screen and (max-width: 540px) {
  @keyframes cssAnimation {
    0% {
      opacity: 0;
      transform: translate(0%, -170%);
    }
    70% {
      opacity: 1;
      transform: translate(0%, -80%);
    }
    80% {
      opacity: 1;
      transform: translate(0%, -80%);
    }
    90% {
      opacity: 1;
      transform: translate(0%, -80%);
    }
    100% {
      opacity: 1;
      transform: translate(0%, -80%);
    }
  }
  .success-message {
    width: 328px;
    height: 56px;
    margin: 16px 16px 0px 16px;
  }
  .alert-message {
    width: 328px;
    height: 72px;
    margin: 16px 16px 0px 16px;
  }

  .card {
    width: 380px;
    height: 100vh;
    border-radius: 0;
  }
  @mixin signup-input {
    margin-right: 16px;
    margin-left: 16px;
    width: 328px;
    height: 60px;
    margin-bottom: 8px;
  }
  @mixin input-holder {
    margin-right: 16px;
    margin-left: 16px;
    padding: 0;
    width: 328px;
    height: 60px;
    margin-bottom: 8px;
  }
  .input-holder {
    @include input-holder();
  }
  .signup-btn {
    width: 328px;
    margin-top: 2.375rem;
    margin-bottom: 11.5rem;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 328px;
    margin: 0 0 toRem(24) toRem(26)
  }

  @mixin txt-content {
    width: 328px;
    font-size: 14px;
    margin-right: 16px;
    margin-left: 16px;
  }

  .signup-container::v-deep {
    .txt-content {
      @include txt-content();
    }
    .input-holder {
      @include signup-input();
    }
    .form__main--item {
      justify-content: center;
      width: auto;
    }
    .signup-input {
      @include signup-input();
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
@media screen and (max-width: 321px) and (min-width: 299px) {
  .card {
    @include display-flex();
    flex-direction: column;
    justify-content: space-between;
  }
}
@media screen and (max-width: 350px) {
  .success-message {
    width: 280px;
  }
  .alert-message {
    width: 280px;
  }
  @mixin signup-input {
    margin-right: 10px;
    margin-left: 10px;
    width: 280px;
  }
  @mixin input-holder {
    width: 280px;
  }
  .signup-btn {
    width: 280px;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 280px;
    margin-right: auto;
    margin-left: auto;
  }
  .signup-limoo-logo {
    margin-top: 0;
  }
  @mixin txt-content {
    width: 280px;
    margin-right: 10px;
    margin-left: 0;
  }
  .signup-container::v-deep {
    .txt-content {
      @include txt-content();
    }
    .input-holder {
      @include signup-input();
    }
    .form__main--item {
      justify-content: center;
      width: auto;
    }
    .signup-input {
      @include signup-input();
    }
  }
  .card {
    width: auto;
  }
}
@media screen and (max-width: 280px) {
  .success-message {
    width: 270px;
  }
  .alert-message {
    width: 270px;
    height: 60px;
    margin-right: 5px;
  }
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
