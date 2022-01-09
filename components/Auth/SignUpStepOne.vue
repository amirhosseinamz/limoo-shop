<template>
  <div class="signup-container">
    <authentication-card class="card" :has-main-icon="true">
      <template #top-icon>
        <button @click="closePage" class="app-signup-close-btn"></button>
      </template>
      <template #card-title class="txt-header">
        {{ getTextByTextKey("auth_registration_and_membership") }}
      </template>
      <template #main-icon>
        <div class="signup-limoo-logo">
          <img src="/logos/limoo-logo1.png" alt="Logo" />
        </div>
      </template>
      <template #card-body>
        <form @submit.prevent="goToNextStepofSignUp">
          <div class="form-group">
            <text-input
              class="user--item user-profile__info-pass"
              labelNameClass=""
              inputNameClass="w-100"
              state="authInput"
              maxlength="11"
              function-max-len="greaterThan"
              placeholderText="*********09"
              :msgError="{
                notValidMsg: getTextByTextKey('auth_phone_not_valid'),
              }"
              :check-email="false"
              :check-number="true"
              :active-check-phone-number="true"
              :check-code="false"
              :only-use-string="false"
              :show-icon-clear-input="true"
              :show-icon-eye-input="false"
              :status-add-space-number="false"
              :check-initial-validation="checkInitialValidation"
              :check-empty-submit="true"
              :check-required="false"
              :check-typing-submit="true"
              :use-timer="false"
              :show-icon-star="false"
              :form-data="formData"
              :active-border-click="true"
              accessStyleParentInToChildNameId="address__form--data"
              tag-html="input"
              timer-start=""
              type-input="text"
              name-input="phone"
              :label-text="getTextByTextKey('auth_please_enter_number')"
              @typeing="typeing"
            >
            </text-input>
          </div>

          <div class="btn-control">
            <base-button base-color="yellow" button-type="submit" :disabled="btnIsDisabled" classes="signup-btn" no-effect no-box-shadow>
              <span class="desk-display">
                {{ getTextByTextKey("auth_login_limoo") }}
              </span>
              <span class="min-display">
                {{ getTextByTextKey("auth_login") }}
              </span>
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
      phone: "",
      storePhone: "",
      wrongInput: false,
      isActive: false,
      btnIsDisabled: false,
      checkInitialValidation: 0,
      formData: {
        phone: "",
      },
    };
  },
  components: {
    textInput,
  },
  watch: {},
  created() {
    // this.storePhone = this.$store.getters.PhoneNumberPicker;
    // this.formData.phone = this.$store.getters.PhoneNumberPicker;
  },
  // computed: {
  //     PhoneNumberPicker() {
  //         this.storePhone = this.$store.getters.PhoneNumberPicker;
  //     }
  // },
  methods: {
    getTextByTextKey,

    goToNextStepofSignUp() {
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
          this.$emit("onSubmit", this.formData.phone);
        } else {
          this.$store.commit("PhoneNumber", { value: this.formData.phone });
        }
      });
    },
    closePage() {
      this.$router.push("/");
      this.$store.commit("PhoneNumber", { value: "" });
    },
    typeing() {},
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
  @include display-flex();
  flex-direction: column;
  justify-content: space-around;
  width: toRem(642);
  height: toRem(524);
  background-color: $white;
  box-shadow: 0 8px 16px $box__shadow;
  border-radius: 15px;
  @include xs {
    justify-content: unset;
  }
  &-body {
    position: relative;
    @extend .justify-center;
  }
}

.app-signup-close-btn::before {
  content: "\e807";
  @include font-icon__limoo();
  font-size: toRem(28);
  color: $gray;
}
.signup-btn {
  font-family: inherit;
  font-size: toRem(18);
  height: toRem(58);
  width: toRem(463);
  @include xs {
    width: toRem(328);
  }
  @include xxs {
    width: toRem(275);
  }
}
.form-control {
  direction: rtl;
  font-family: inherit;
}
.txt-header {
  font-size: toRem(24);
  line-height: toRem(33.75);
  font-weight: 400;
  text-align: right;
  margin: toRem(77) toRem(90) toRem(33) 0;
  @include sm {
    margin-right: toRem(26);
  }
}
.txt-content {
  font-size: toRem(16);
  line-height: toRem(22.5);
  font-weight: 318;
  text-align: right;
  margin-bottom: toRem(25);
  margin-right: toRem(90);
  @include sm {
    margin-right: toRem(26);
  }
  @include xxs {
    margin-right: 0;
  }
}
.signup-btn {
  margin-bottom: 2.5rem;
}
.err-text {
  font-family: inherit;
  font-size: toRem(13);
  text-align: right;
  color: $alert-red;
  line-height: 140.62%;
  margin-bottom: toRem(18);
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
  line-height: 22.5px;
  font-weight: 318;
  text-align: right;
  margin-bottom: 25px;
}
.signup-container::v-deep {
  .txt-content {
    @extend .txt-content;
  }
  .input-holder {
    width: 100%;
  }
  .form__item--error {
    @extend .err-text;
  }
  .form__main--item {
    justify-content: center;
    width: toRem(463);
    @include xs {
      width: toRem(328);
    }
    @include xxs {
      width: toRem(275);
    }
  }
}

@include sm {
  .card {
    width: toRem(512);
  }
}

@include xs {
  .card {
    width: toRem(380);
    height: 100vh;
    border-radius: 0;
  }
  .app-signup-close-btn {
    display: none;
  }
  .min-display {
    display: block;
  }
  .desk-display {
    display: none;
  }


  .err-text {
    margin-right: 16px;
  }
  .signup-limoo-logo {
    margin-top: 0.5rem;
    @include xs {
      margin-top: toRem(78);
      margin-bottom: toRem(48);
    }
  }
  .signup-container::v-deep {
    .input-holder {
      height: 60px;
      margin-bottom: 8px;
      &-wrong {
        height: toRem(60);
        margin-bottom: 8px;
      }
    }
    .form__item--error {
      margin-right: toRem(16);
    }
    .form__main--item {
      justify-content: center;
    }
  }
}
@include xxs {
  .card {
    width: toRem(270);
  }
}
@include xxxs {
  .signup-input {
    width: toRem(270);
  }
}
</style>
