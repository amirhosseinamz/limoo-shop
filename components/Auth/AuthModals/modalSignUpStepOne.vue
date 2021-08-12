<template>
  <div class="signup-container">
    <div class="card">
      <div class="signup-close-btn">
        <base-button
          @button-clicked="closePage"
          classes="app-signup-close-btn"
          base-color="white"
          mode="close"></base-button>
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
              accessStyleParentInToChildNameId="address__form--data"
              tag-html="input"
              timer-start=""
              type-input="text"
              name-input="phone"
              :label-text="getTextByTextKey('auth_please_enter_number')"
            >
            </text-input>
          </div>

          <div class="btn-control">
            <base-button
              base-color="yellow"
              button-type="submit"
              classes="signup-btn"
              no-effect no-box-shadow
            >
              <span class="desk-display">
                {{ getTextByTextKey("auth_login_limoo") }}
              </span>
              <span class="min-display">
                {{ getTextByTextKey("auth_login") }}
              </span>
            </base-button>
<!--
            <button class="google-signup-btn" type="submit">
              {{ getTextByTextKey("auth_login_google") }}
            </button>-->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import textInput from "~/modules/textInput";

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
      showSnackbar: false
    };
  },
  components: {
    textInput,
  },
  watch: {},
  mounted() {
    setTimeout(() => {
      this.showSnackbar = true;
      console.log(this.showSnackbar);
    },3000)
    setTimeout(() => {
      this.showSnackbar = false;
      console.log(this.showSnackbar);

    },6000)
  },
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
          const headers = {
            "Content-Type": "application/json",
            "Client-Key": process.env.CLIENT_KEY,
          };
          this.$axios
            .$post(
              process.env.SIGN_UP_API,
              { phone: this.formData.phone },
              {
                headers: headers,
              }
            )
            .then((result) => {
              // console.log(result.response_code);
              if (result.response_code == 2208) {
                this.$emit("btn-go-to-signup-step-two");
              }
            })
            .catch((e) => console.log(e));
        } else {
          this.$store.commit("PhoneNumber", { value: this.formData.phone });
        }
      });
    },
    closePage() {
      this.$emit("btn-close-modal");
      this.$store.commit("PhoneNumber", { value: "" });
    },
  },
};
</script>

<style lang="scss" scoped>
.signup-container {
  flex-direction: column;
  text-align: center;
  @extend .centered;
}

.card {
  @include display-flex();
  flex-direction: column;
  justify-content: center;
  width: toRem(642);
  //height: toRem(524);
  background-color: $white;
  box-shadow: 0 toRem(8) toRem(16) $box__shadow;
  border-radius: toRem(15);
}

.signup-close-btn {
  @include display-flex();
  justify-content: flex-start;
  margin-top: toRem(24);
}
.app-signup-close-btn::before {
  font-size: toRem(28);
}
.signup-input {
  padding-right: toRem(24);
  &-wrong {
    padding-right: toRem(24);
  }
}
.form-control {
  direction: rtl;
  font-family: inherit;
}
.signup-btn {
  font-family: inherit;
  font-size: toRem(18);
  height: toRem(58);
  width: toRem(463);
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
.txt-header {
  font-size: toRem(24);
  line-height: 33.75px;
  font-weight: 400;
  text-align: right;
  margin: toRem(37) toRem(90) toRem(33) 0;
}
.txt-content {
  font-size: toRem(16);
  line-height: toRem(22.5);
  font-weight: 318;
  text-align: right;
  margin-bottom: toRem(25);
  margin-right: toRem(90);
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
@media screen and (max-width: 768px) {
  .card {
    width: toRem(530);
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
    margin-right: toRem(18);
    padding: 0;
    width: toRem(328);
    height: toRem(60);
    margin-bottom: toRem(8);
    &-wrong {
      margin-right: toRem(18);
      padding: 0;
      width: toRem(328);
      height: toRem(60);
      margin-bottom: toRem(8);
    }
  }

  .card {
    width: toRem(360);
    height: 100vh;
    border-radius: 0;
  }
  .signup-input {
    @include signup-input();
  }

  @mixin signup-input {
    margin-right: toRem(16);
    margin-left: toRem(16);
    padding: 0;
    width: toRem(328);
    height: toRem(60);
    margin-bottom: toRem(8);
    &-wrong {
      margin-right: toRem(16);
      margin-left: toRem(16);
      width: toRem(328);
      height: toRem(60);
      margin-bottom: toRem(8);
    }
  }

  .input-holder {
    @include signup-input();
  }

  .signup-btn {
    width: toRem(328);
  }
  .txt-header {
    font-size: toRem(20);
    line-height: 140.62%;
    width: toRem(328);
    margin-right: toRem(16);
    margin-left: toRem(16);
  }
  @mixin txt-content {
    width: toRem(328);
    margin-right: toRem(16);
    margin-left: toRem(16);
  }
  .txt-content {
    @include txt-content();
  }
  @mixin err-text {
    margin-right: toRem(16);
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
    margin-right: toRem(10);
    margin-left: toRem(10);
    width: toRem(280);
    &-wrong {
      margin-right: toRem(10);
      margin-left: toRem(10);
      width: toRem(280);
      margin-bottom: toRem(42);
    }
  }

  @mixin input-holder {
    margin-right: toRem(10);
    margin-left: toRem(10);
    padding: 0;
    width: toRem(280);
    height: toRem(60);
    margin-bottom: toRem(8);
    &-wrong {
      margin-right: toRem(10);
      margin-left: toRem(10);
      width: toRem(280);
      height: toRem(60);
      margin-bottom: toRem(8);
    }
  }

  .input-holder {
    @include input-holder();
  }
  .signup-btn {
    width: toRem(280);
  }
  .txt-header {
    font-size: toRem(20);
    line-height: 140.62%;
    width: toRem(280);
    margin-right: auto;
    margin-left: auto;
  }

  @mixin txt-content {
    width: toRem(280);
    margin-right: toRem(10);
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
    margin-right: toRem(5);
    margin-left: toRem(5);
    width: toRem(270);
    padding-right: 0;
  }

  .signup-input,
  .signup-input-wrong {
    @include signup-input();
  }

  @mixin input-holder {
    margin-right: toRem(5);
    margin-left: toRem(5);
    width: toRem(270);
    margin-bottom: toRem(8);
    padding-right: 0;
  }

  .input-holder-wrong,
  .input-holder {
    @include input-holder();
  }
  .signup-btn {
    width: toRem(270);
  }
  .txt-header {
    font-size: toRem(20);
    line-height: 140.62%;
    width: toRem(270);
  }

  @mixin txt-content {
    width: toRem(270);
    margin-right: toRem(15);
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
      margin-right: toRem(6);
    }
  }
}
</style>
