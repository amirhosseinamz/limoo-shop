<template>
  <div class="signup-container">
    <authentication-card class="card">
      <template #top-icon>
        <button @click="nextPage" class="app-signin-next-btn"></button>

      </template>
      <template #card-title class="txt-header">
        {{ getTextByTextKey("auth_aignup_enter_code_please") }}
      </template>
      <template #card-body>
        <base-snackbar mode="success" class="success-message" :show="newCodeSent">
          {{ getTextByTextKey("auth_aignup_code_new") }}

          {{ activationCode }}
        </base-snackbar>
        <base-snackbar mode="alert" class="alert-message" :show="error !== ''">
          {{ error }}
        </base-snackbar>
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
              timer-start="1:60"
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
    };
  },
  computed: {
    error() {
      return this.$store.getters["authentication/authentication/errorMessage"];
    },
    activationCode() {
      return this.$store.getters["authentication/authentication/activationCode"];
    },
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
          this.$store.dispatch('authentication/authentication/confirmCode', {
            activationCode: verifyCode,
            from: "modal"
          });
        }
      });
    },

    nextPage() {
      // go to .../users/signin-up
      this.$emit("btn-go-back-signup-step-one");
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
  position: absolute;
  top: toRem(10);
}

.alert-message {
  width: toRem(463);
  height: toRem(58);
  position: absolute;
  top: toRem(10);
}
.signup-container {
  @extend .centered;
  flex-direction: column;
  text-align: center;
}

.card::v-deep {
  width: toRem(642);
  padding: 0 toRem(89.5);
  &-body {
    position: relative;
  }
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
