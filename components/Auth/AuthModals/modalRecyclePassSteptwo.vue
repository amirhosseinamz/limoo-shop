<template>
  <div class="recycle-container">
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
            <p dir="rtl" class="txt-content">
              {{ getTextByTextKey("auth_aignup_enter_code_please") }}
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
            <base-button
              base-color="yellow"
              button-type="submit"
              classes="signup-btn"
              no-effect no-box-shadow
            >
              {{ getTextByTextKey("home_blog_single_more") }}
            </base-button>
<!--            <base-button base-color="light" button-type="submit" classes="google-signup-btn">
              {{ getTextByTextKey("auth_login_google") }}
            </base-button>-->
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
      wrongInput: false,
      timerPassed: false,
      newCodeSent: false,
      isActive: false,
    };
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
      // this.$store.commit("walkInSignIncomponents", {
      //     value: "PassChange"
      // });
      // this.$router.push("/users/password");
      this.$emit("btn-go-to-pass-change");
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
      // console.log("hi");
      // this.$store.commit("walkInSignIncomponents", {
      //     value: "recyclePass"
      // });
      // this.$router.push("/users/password/forget");
      this.$emit("btn-go-back-recycle-pass");
    },
  },
};
</script>

<style lang="scss" scoped>

.recycle-container {
  @include display-flex();
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card {
  width: toRem(642);
  padding: 0 toRem(89.5);
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
  display: none;
}
.code-request {
  font-weight: 500;
  font-size: toRem(13);
  line-height: 140.62%;
  text-align: right;
  color: $code-request;
  cursor: pointer;
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
  line-height: toRem(22.5);
  font-weight: 318;
  text-align: right;
  margin: toRem(5) 0 toRem(16) 0;
}
.signup-input {
  padding: 0;
  color: $code;
  text-align: center;
  text-align: -moz-center;
  font-size: toRem(20);
  letter-spacing: 0.7em;
  width: 100%;
}
.signup-btn {
  margin-top: 0.875rem;
  margin-bottom: 5rem;
}
.google-signup-btn {
  display: none;
}
@include sm {
  .card {
    width: toRem(520);
  }
}
@include xs {
  .card {
    width: toRem(400);
    padding: 0 toRem(36);
    height: 100vh;
    border-radius: 0;
  }
  .signup-input {
    height: toRem(50);
    margin-bottom: toRem(8);
  }
  .input-holder {
    height: toRem(50);
    margin-bottom: toRem(8);
  }

  .signup-btn {
    margin-top: 2rem;
    margin-bottom: 6.6875rem;
  }
  .txt-content {
    font-size: toRem(14);
    margin-bottom: toRem(17);
  }
}
</style>
