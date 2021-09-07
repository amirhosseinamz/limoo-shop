<template>
  <div class="signup-container">
    <authentication-card class="card">
      <template #top-icon>
        <button @click="nextPage" class="app-signin-next-btn"></button>
      </template>
      <template #card-title class="txt-header">
        {{ getTextByTextKey("auth_forget_password") }}
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
                notValidMsg: '',
              }"
              :check-email="false"
              :check-number="true"
              :active-check-phone-number="false"
              :only-use-string="false"
              :show-icon-clear-input="false"
              :show-icon-eye-input="false"
              :status-add-space-number="true"
              :check-initial-validation="checkInitialValidation"
              :check-empty-submit="true"
              :check-required="false"
              :check-typing-submit="false"
              :use-timer="true"
              :show-icon-star="false"
              :form-data="formData"
              :attribute-required="true"
              :active-border-click="true"
              timer-start="0:10"
              accessStyleParentInToChildNameId="address__form--data"
              tag-html="input"
              type-input="text"
              name-input="verifyCode"
              :default-show-text-again-timer="true"
              :label-text="getTextByTextKey('auth_aignup_enter_code_please')"
              @again-start-timer="sendNewRequest"
            >
            </text-input>
          </div>
          <div class="btn-control">
            <base-button classes="signup-btn" button-type="submit" base-color="yellow" no-box-shadow>
              {{ getTextByTextKey("home_blog_single_more") }}
            </base-button>
            <base-button base-color="light" button-type="submit" classes="google-signup-btn">
              {{ getTextByTextKey("auth_login_google") }}
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
      verifyCode: "",
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
    };
  },
  watch: {
    verifyCode(value) {
      this.verifyCode = value;
      this.validationVerifyCode(value);
    },
  },
  mounted() {
    this.userPhoneNumber = this.$store.getters.PhoneNumberPicker;
    this.countdownTimer(2, 60);
  },
  methods: {
    getTextByTextKey,

    validationVerifyCode(value) {
      if (/\D/.test(value)) {
        // console.log(value);
        this.verifyCode = this.verifyCode.slice(0, -1);
        // THe first is 0, the starting point. The second is the number of
        // items to remove. Passing a negative number will remove starting
        // from the end. This is the solution
      } else if (this.verifyCode.length < 4) {
        this.btnIsDisabled = true;
      } else if (this.verifyCode.length == 4) {
        this.btnIsDisabled = false;
      }
    },
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
          this.$emit("onConfirm", parseInt(this.formData.verifyCode));
        }
      });
    },

    nextPage() {
      // go to .../users/signin-up
      this.$router.push("/users/signin-up");
    },
    countdownTimer(mm, ss) {
      const interval = setInterval(() => {
        //
        this.Tcounter--;
        // console.log(this.Tcounter);
        ss--;
        if (ss === 0) {
          ss = 59;
          mm--;
        }
        if (this.Tcounter === 0) {
          // console.log("TimerPassed");
          this.animateTimerPassed();
          clearInterval(interval);
          this.timerZero = true;
        }
        if (mm.toString().length < 2) mm = "0" + mm;
        if (ss.toString().length < 2) ss = "0" + ss;
        this.counterDownMinutes = mm.toString().split("");
        this.counterDownSecond = ss.toString().split("");
      }, 1000);
    },
    sendNewRequest() {
      this.timerPassed = true;
      setTimeout(() => {
        this.timerPassed = false;
      }, 5000);
    },
  },
};
</script>

<style lang="scss" scoped>

.signup-container {
  height: 100vh;
  @include display-flex();
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card {
  width: 45%;
  height: fit-content;
  padding: 0 4%;
}
.app-signin-next-btn::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: toRem(24);
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
.txt-content {
  font-size: toRem(16);
  width: 100%;
  line-height: toRem(22.5);
  font-weight: 318;
  text-align: right;
  margin-bottom: toRem(25);
}
.signup-input {
  color: $code;
  text-align: center;
  text-align: -moz-center;
  font-size: 20px;
  letter-spacing: 0.7em;
}
.google-signup-btn {
  display: none;
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
    direction: ltr;
  }
  .timer-holder {
    margin-bottom: 0;
  }
}

@include xl {
  .card {
    width: 55%;
    padding: 0 5%;
  }
}
@include md {
  .card {
    width: 70%;
    padding: 0 6%;
  }
}

@include sm {
  .card {
    width: 85%;
    padding: 0 7%;
  }
  .signup-close-btn {
    margin-top: toRem(-15);
  }
}
@include xs {
  .google-signup-btn {
    @include display-flex();
  }
  .card {
    width: 100%;
    padding: 0 10%;
    height: 100%;
  }
  .input-holder {
    padding: 0;
    margin-bottom: 8px;
  }
  .signup-btn {
    margin-top: 2rem;
    margin-bottom: 6.6875rem;
  }

  .signup-container::v-deep {
    .txt-content {
      font-size: toRem(14);
    }
    .form__main--item {
      justify-content: center;
      width: auto;
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
</style>
