<template>
  <div class="signin-container">
    <authentication-card class="card">
      <template #top-icon>
        <button @click="nextPage" class="app-signin-next-btn"></button>
      </template>
      <template #card-title class="txt-header">
        {{ getTextByTextKey("auth_aignup_code_agin") }}
      </template>
      <template #card-body>
        <form @submit.prevent="pressed">
          <div class="form-group">

            <p dir="rtl" class="txt-content">
              {{ getTextByTextKey("auth_aignup_phone_enter_code") }}
              <span>
                {{ userPhoneNumber }}
                {{ getTextByTextKey("auth_enter_phone") }}
              </span>
            </p>
            <div class="input-section">
              <div
                class="input-holder"
                :style="
                  verifyCode || isActive
                    ? 'border:1px solid #515151'
                    : 'border:1px solid #bdbdbd'
                "
              >
                <input
                  @click="[(isActive = true)]"
                  class="signup-input form-control"
                  type="text"
                  v-model="verifyCode"
                  maxlength="4"
                  required
                />
              </div>
            </div>
          </div>

          <div class="timer-holder">
            <p class="timer">
              <span>02:45</span>
              {{ getTextByTextKey("auth_aignup_agin_code_send") }}
            </p>
            <p @click="animate" class="code-request">
              {{ getTextByTextKey("auth_request_code_resend") }}
            </p>
          </div>

          <div class="btn-control">
            <base-button classes="signup-btn" button-type="submit" base-color="yellow" no-box-shadow>
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

export default {
  data() {
    return {
      verifyCode: "",
      timerPassed: false,
      newCodeSent: false,
      isActive: false,
      userPhoneNumber: "",
      checkInitialValidation: 0,
      formData: {
        codePhoneNumber: "",
      },
    };
  },
  mounted() {
    this.userPhoneNumber = this.$store.getters.PhoneNumberPicker;
  },
  watch: {
    verifyCode(value) {
      this.verifyCode = value;
      this.validationVerifyCode(value);
    },
  },
  methods: {
    getTextByTextKey,
    validationVerifyCode(value) {
      if (/\D/.test(value)) {
        // console.log(value);
        // this.verifyCode = this.verifyCode.substring(
        //     0,
        //     this.verifyCode.length - 1
        // );
        this.verifyCode = this.verifyCode.slice(0, -1);
      }
    },
    pressed() {
      // talk to server
      this.$store.commit("PhoneNumber", { value: "" });
    },
    animate() {
      this.timerPassed = true;
      setTimeout(() => {
        this.timerPassed = false;
      }, 5000);
    },
    changeRTL() {
      this.$vuetify.rtl = true;
    },
    nextPage() {
      // go to ...
      // this.$store.commit("walkInSignIncomponents", { value: "stepOne" });
      this.$router.push("/users/signin");
    },
  },
};
</script>

<style lang="scss" scoped>

.signin-container {
  height: 100vh;
  @include display-flex();
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
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

.signup-btn {
  font-family: inherit;
  font-size: toRem(18);
  height: toRem(58);
  width: 100%;
}
.form-control {
  direction: rtl;
  font-family: inherit;
}
.timer-holder {
  @include display-flex();
  justify-content: flex-end;
}
.timer {
  font-size: toRem(14);
  line-height: 140.62%;
  color: $gray;
  margin-right: toRem(90);
  display: none;
}
.code-request {
  font-weight: 500;
  font-size: toRem(13);
  line-height: 140.62%;
  text-align: right;
  color: $code-request;
  cursor: pointer;
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
  font-size: toRem(20);
  letter-spacing: 0.7em;
}
.signup-btn {
  margin-top: 2rem;
  margin-bottom: toRem(103);
}
.signin-container::v-deep {
  .txt-content {
    @extend .txt-content;
  }
  .input-holder {
    width: 100%;
  }
  .signup-input {
    @extend .signup-input;
    padding-right: 0;
  }
  .form__main--item {
    justify-content: center;
  }
  .form__error--main {
    display: none;
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

  .input-holder {
    margin-right: 0;
    margin-left: 0;
  }
  .signup-btn {
    margin-bottom: 7.5rem;
  }
}
@include xs {
  .card {
    width: 100%;
    padding: 0 10%;
    height: 100%;
  }
  .signup-input {
    height: toRem(60);
    margin-bottom: toRem(8);
  }
  .input-holder {
    padding: 0;
    height: toRem(60);
    margin-bottom: toRem(8);
  }

  .signup-btn {
    margin: 2rem 0 7.5rem 0;
  }
  .txt-content {
    font-size: toRem(14);
  }
  .timer {
    margin-right: toRem(16);
  }
}
</style>
