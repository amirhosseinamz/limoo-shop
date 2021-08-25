<template>
  <div class="signup-container">
    <div class="card">
      <div class="signup-close-btn">
        <button @click="closePage" class="app-signup-close-btn"></button>
      </div>

      <div class="signup-limoo-logo">
        <img src="/logos/limoo-logo1.png" alt="" />
      </div>

      <div class="card-body">
        <form @submit.prevent="goToNextStepofSignUp">
          <div class="form-group">
            <p class="txt-header">
              {{ getTextByTextKey("auth_registration_and_membership") }}
            </p>
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

            <base-button base-color="light" button-type="submit" classes="google-signup-btn">
              {{ getTextByTextKey("auth_login_google") }}
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
    this.storePhone = this.$store.getters.PhoneNumberPicker;
    this.formData.phone = this.$store.getters.PhoneNumberPicker;
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
  justify-content: center;
  width: 642px;
  height: 524px;
  background-color: $white;
  box-shadow: 0px 8px 16px $box__shadow;
  border-radius: 15px;
}

.signup-close-btn {
  @include display-flex();
  justify-content: flex-start;
  margin-top: 24px;
}
.app-signup-close-btn::before {
  content: "\e807";
  @include font-icon__limoo();
  font-size: 28px;
  color: $gray;
}
.signup-btn {
  font-family: inherit;
  font-size: 18px;
  height: 58px;
  width: 463px;
}
.signup-input {
  padding-right: 24px;
  &-wrong {
    padding-right: 24px;
  }
}
.form-control {
  direction: rtl;
  font-family: inherit;
}
.signup-btn {
  margin-bottom: 2.5rem;
}
.err-text {
  font-family: inherit;
  font-size: 13px;
  text-align: right;
  color: $alert-red;
  line-height: 140.62%;
  margin-bottom: 18px;
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
  margin: 37px 90px 33px 0;
}
.txt-content {
  font-size: 16px;
  line-height: 22.5px;
  font-weight: 318;
  text-align: right;
  margin-bottom: 25px;
  margin-right: 90px;
}
.signup-container::v-deep {
  .txt-content {
    @extend .txt-content;
  }
  .input-holder {
    @extend .input-holder;
  }
  .form__item--error {
    @extend .err-text;
  }
  .form__main--item {
    justify-content: center;
    width: auto;
  }
  .signup-input {
    @extend .signup-input;
  }
}
@media screen and (max-width: 600px) {
  .signup-close-btn {
    display: none;
  }
  .min-display {
    display: block;
  }
  .desk-display {
    display: none;
  }
}

@media screen and (max-width: 540px) {
  @mixin signup-input {
    margin-right: 18px;
    padding: 0;
    width: 328px;
    height: 60px;
    margin-bottom: 8px;
    &-wrong {
      margin-right: 18px;
      padding: 0;
      width: 328px;
      height: 60px;
      margin-bottom: 8px;
    }
  }

  .card {
    width: 360px;
    height: 100vh;
    border-radius: 0;
  }
  .signup-input {
    @include signup-input();
  }

  @mixin signup-input {
    margin-right: 16px;
    margin-left: 16px;
    padding: 0;
    width: 328px;
    height: 60px;
    margin-bottom: 8px;
    &-wrong {
      margin-right: 16px;
      margin-left: 16px;
      width: 328px;
      height: 60px;
      margin-bottom: 8px;
    }
  }

  .input-holder {
    @include signup-input();
  }

  .signup-btn {
    width: 328px;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 328px;
    margin-right: 16px;
    margin-left: 16px;
  }
  @mixin txt-content {
    width: 328px;
    margin-right: 16px;
    margin-left: 16px;
  }
  .txt-content {
    @include txt-content();
  }
  @mixin err-text {
    margin-right: 16px;
  }
  .err-text {
    @include err-text();
  }
  .signup-limoo-logo {
    margin-top: 0.5rem;
  }
  .signup-container::v-deep {
    .txt-content {
      @include txt-content();
    }
    .input-holder {
      @include signup-input();
    }
    .form__item--error {
      @include err-text();
    }
    .form__main--item {
      justify-content: center;
      width: auto;
    }
    .signup-input {
      @include signup-input();
    }
  }
}
@media screen and (max-width: 350px) {
  @mixin signup-input {
    margin-right: 10px;
    margin-left: 10px;
    width: 280px;
    &-wrong {
      margin-right: 10px;
      margin-left: 10px;
      width: 280px;
      margin-bottom: 42px;
    }
  }

  @mixin input-holder {
    margin-right: 10px;
    margin-left: 10px;
    padding: 0;
    width: 280px;
    height: 60px;
    margin-bottom: 8px;
    &-wrong {
      margin-right: 10px;
      margin-left: 10px;
      width: 280px;
      height: 60px;
      margin-bottom: 8px;
    }
  }

  .input-holder {
    @include input-holder();
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

  @mixin txt-content {
    width: 280px;
    margin-right: 10px;
  }

  .txt-content {
    @include txt-content();
  }

  .signup-limoo-logo {
    margin-top: 0;
  }
  .signup-container::v-deep {
    .txt-content {
      @include txt-content();
    }
    .input-holder {
      @include signup-input();
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
  @mixin signup-input {
    margin-right: 5px;
    margin-left: 5px;
    width: 270px;
    padding-right: 0px;
  }

  .signup-input,
  .signup-input-wrong {
    @include signup-input();
  }

  @mixin input-holder {
    margin-right: 5px;
    margin-left: 5px;
    width: 270px;
    margin-bottom: 8px;
    padding-right: 0;
  }

  .input-holder-wrong,
  .input-holder {
    @include input-holder();
  }
  .signup-btn {
    width: 270px;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 270px;
  }

  @mixin txt-content {
    width: 270px;
    margin-right: 15px;
  }

  .txt-content {
    @include txt-content();
  }
  .signup-limoo-logo {
    margin-top: 0.2rem;
  }
  .signup-container::v-deep {
    .txt-content {
      @include txt-content();
    }
    .input-holder {
      @include signup-input();
    }
    .signup-input {
      @include signup-input();
    }
    .form__item--error {
      margin-right: 6px;
    }
  }
}
</style>
