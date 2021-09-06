<template>
  <div class="pass-container">
    <authentication-card class="card">
      <template #top-icon>
        <button @click="nextPage" class="app-signin-next-btn"></button>
      </template>
      <template #card-title class="txt-header">
        {{ getTextByTextKey("auth_change_password") }}
      </template>
      <template #card-body>
        <form @submit.prevent="pressed">
          <div class="form-group">

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
              :label-text="getTextByTextKey('auth_new_passowrd')"
              @typeing="typeing"
            >
            </text-input>
          </div>

          <div class="btn-control">
            <base-button
              :base-color="buttonColor"
              button-type="submit"
              class="signup-btn desk-display"
              no-effect no-box-shadow
            >
              {{
                passChenged
                  ? getTextByTextKey("home_blog_single_more")
                  : getTextByTextKey("auth_success_change")
              }}
            </base-button>
            <base-button
              base-color="yellow"
              button-type="submit"
              classes="signup-btn min-display"
              no-effect no-box-shadow
            >
              {{ getTextByTextKey("home_blog_single_more") }}
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
  components: {
    textInput,
  },
  computed: {
    buttonColor () {
      if (this.passChenged) {
        return 'green'
      } else {
        return 'yellow'
      }
    }
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
  @include display-flex();
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.card {
  width: toRem(642);
  padding: 0 toRem(89.5);
}
.signup-btn {
  font-family: inherit;
  font-size: toRem(18);
  height: toRem(58);
  width: 100%;
}
.app-signin-next-btn::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: toRem(24);
  color: $black-icon;
}
.signin__close-eye::before {
  content: "\e810";
  @include font-icon__limoo();
  font-size: toRem(20);
  color: $gray;
  vertical-align: middle;
}
.signin__close-eye,
.signin__open-eye {
  margin-bottom: toRem(2);
}
.signin__open-eye::before {
  content: "\e811";
  @include font-icon__limoo();
  font-size: toRem(20);
  color: $gray;
  vertical-align: middle;
}
.input-holder-verify {
  margin-bottom: toRem(42);
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
    width: 100%;
  }
  .signup-input {
    @extend .signup-input;
    padding-right: 0;
    direction: ltr;
    text-align: right;
  }
  .form__main--item {
    justify-content: center;
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

.txt-content {
  font-size: toRem(16);
  line-height: toRem(22.5);
  font-weight: 318;
  text-align: right;
  margin-bottom: toRem(24);
}
.signup-btn {
  margin-bottom: 3.5rem;
}

.min-display {
  display: none!important;
}
.desk-display {
  display: block;
}

@include sm {
  .card {
    width: toRem(520);
  }
}

@include xs {
  .app-signin-next-btn {
    visibility: hidden;
  }
  .min-display {
    display: block;
  }
  .desk-display {
    display: none;
  }
  .card {
    width: toRem(400);
    padding: 0 toRem(36);
    height: 100vh;
    border-radius: 0;
  }
  .signup-input {
    height: toRem(60);
    margin-bottom: toRem(8);
  }
  .input-holder {
    height: toRem(60);
    margin-bottom: toRem(8);
  }
  .input-holder-verify {
    height: toRem(60);
  }
  .signup-btn {
    margin-top: 0.375rem;
    margin-bottom: 8.25rem;
  }
  .txt-content {
    font-size: toRem(14);
    margin-bottom: toRem(15);
  }
  .signup-limoo-logo {
    margin-top: 0.5rem;
  }
  .card::v-deep {
    .txt-content {
      font-size: toRem(14);
    }
    .form__item--error {
      font-size: toRem(13);
      margin-bottom: toRem(24);
    }
  }
}
</style>
