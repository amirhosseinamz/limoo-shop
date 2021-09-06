<template>
  <div class="signup-container">
    <transition name="snackbar" mode="out-in">
      <base-snackbar :mode="snackbarMode" :class="snackbarMode+'-message'" v-if="showSnackbar">
        {{ snackbarText }}
      </base-snackbar>
    </transition>
    <authentication-card class="card">
      <template #top-icon>
        <button @click="nextPage" class="app-signin-next-btn"></button>

      </template>
      <template #card-title class="txt-header">
        {{ getTextByTextKey("auth_aignup_enter_code_please") }}
      </template>
      <template #card-body>
        <form @submit.prevent="pressed">
          <div class="form-group">
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
      </template>
    </authentication-card>
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
              if (result.response_code === 1) {
                this.$store.dispatch({
                  type: "userIsAuth",
                  value: true,
                });
                this.$store.commit("authUser/setToken", result.token);
                this.$store.commit("PhoneNumber", { value: "" });
                this.$emit("event-show-modal-wellcome");
                // console.log(result.token);
              } else if (result.response_code === 2222) {
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
          if (result.response_code === 2208) {
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
  top: toRem(40);
}

.alert-message {
  width: toRem(463);
  height: toRem(58);
  margin: toRem(-24) toRem(90) 0 toRem(89);
  position: absolute;
  top: toRem(40);
}
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
  @extend .centered;
  flex-direction: column;
  text-align: center;
}

.card {
  width: toRem(642);
  padding: 0 toRem(89.5);
}
.app-signin-next-btn {
  @include display-flex();
  cursor: pointer;
}
.app-signin-next-btn::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: toRem(25);
  color: $black-icon;
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
  margin-right: toRem(5);
}
.timer-timeText {
  font-size: toRem(14);
  font-weight: 400;
  line-height: 140.62%;
  color: $gray;
  margin-right: toRem(2);
}
.code-request {
  font-weight: 500;
  font-size: toRem(13);
  line-height: 140.62%;
  text-align: right;
  color: $code-request;
  margin-right: toRem(90);
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
.txt-content {
  width: 100%;
  font-size: toRem(16);
  line-height: toRem(22.5);
  font-weight: 318;
  text-align: right;
  margin-bottom: toRem(25);
}
.signup-input {
  color: $code;
  width: 100%;
  text-align: center;
  text-align: -moz-center;
  font-size: toRem(20);
  letter-spacing: 0.7em;
  direction: ltr;
}
.signup-btn {
  margin-top: 0.875rem;
  margin-bottom: 5rem;
  font-family: inherit;
  font-size: toRem(18);
  height: toRem(58);
  width: 100%;
}

.signup-container::v-deep {
  .txt-content {
    @extend .txt-content;
  }
  .input-holder {
    width: 100%;
    @extend .input-holder;
  }
  .form__main--item {
    justify-content: center;
  }
  .signup-input {
    @extend .signup-input;
  }
  .timer-holder {
    margin-bottom: 0;
  }
}
@include sm {
  .card {
    width: toRem(520);
  }
}

@include xs {
  .success-message {
    width: toRem(328);
    height: toRem(56);
    margin: toRem(16) toRem(16) 0 toRem(16);
  }
  .alert-message {
    width: toRem(328);
    height: toRem(72);
    margin: toRem(16) toRem(16) 0 toRem(16);
  }

  .card {
    width: toRem(400);
    padding: 0 toRem(36);
    height: 100vh;
    border-radius: 0;
  }
  .input-holder {
    height: toRem(60);
    margin-bottom: toRem(8);
  }
  .signup-btn {
    margin-top: 2.375rem;
    margin-bottom: 11.5rem;
  }

  .signup-container::v-deep {
    .txt-content {
      font-size: toRem(14);
    }
    .input-holder {
      height: toRem(60);
      margin-bottom: toRem(8);
    }
    .form__main--item {
      justify-content: center;
    }
    .signup-input {
      height: toRem(60);
      margin-bottom: toRem(8);
    }
    .timer {
      margin-right: toRem(16);
      font-size: toRem(13);
    }
    .timer-timeText {
      font-size: toRem(13);
    }
    .code-request {
      margin-right: toRem(16);
    }
  }
}
</style>
