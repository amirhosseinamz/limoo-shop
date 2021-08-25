<template>
  <div class="recycle-container">
    <div class="card">
      <div class="signup-close-btn">
        <button @click="nextPage" class="app-signup-close-btn"></button>
      </div>

      <div class="card-body">
        <form @submit.prevent="goToNextStepofRecyclePass">
          <div class="form-group">
            <p class="txt-header">
              {{ getTextByTextKey("auth_password_recovery") }}
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
              :check-empty-submit="false"
              :check-required="true"
              :check-typing-submit="false"
              :use-timer="false"
              :show-icon-star="false"
              :form-data="formData"
              :attribute-required="false"
              :active-border-click="true"
              accessStyleParentInToChildNameId="address__form--data"
              tag-html="input"
              timer-start=""
              type-input="password"
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
              :disabled="btnIsDisabled"
              no-effect no-box-shadow
            >
              {{ getTextByTextKey("home_blog_single_more") }}
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
      storePhone: "",
      btnIsDisabled: false,
      formData: {
        phone: "",
      },
      checkInitialValidation: 0,
    };
  },
  components: {
    textInput,
  },
  watch: {},
  created() {
    this.storePhone = this.$store.getters.PhoneNumberPicker;
    // this.phone = this.$store.getters.PhoneNumberPicker;
  },
  computed: {
    PhoneNumberPicker() {
      this.storePhone = this.$store.getters.PhoneNumberPicker;
    },
  },
  methods: {
    getTextByTextKey,

    goToNextStepofRecyclePass() {
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
        }

      });
    },
    nextPage() {
      this.$emit("btn-go-back-signin-step-one");
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
  overflow: hidden;
}
.signup-input-wrong,
.signup-input {
  margin-right: 24px;
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

.signup-close-btn {
  @include display-flex();
  justify-content: flex-start;
  width: 30px;
  height: 30px;
  margin-top: 24px;
}
.app-signup-close-btn::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: 24px;
  color: $black-icon;
}
.signup-btn {
  font-family: inherit;
  font-size: 18px;
  height: 58px;
  width: 463px;
}
.form-control {
  direction: rtl;
  font-family: inherit;
}
.signup-btn {
  margin-bottom: 5rem;
}
.err-text {
  font-family: inherit;
  font-size: 13px;
  text-align: right;
  color: $alert-red;
  line-height: 140.62%;
  margin-right: 90px;
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
  margin: 77px 90px 33px 0;
}
.txt-content {
  font-size: 16px;
  line-height: 22.5px;
  font-weight: 400;
  text-align: right;
  margin-bottom: 25px;
  margin-right: 90px;
}

.recycle-container::v-deep {
  .txt-content {
    @extend .txt-content;
  }
  .input-holder {
    @extend .input-holder;
    margin-right: auto;
    margin-left: auto;
  }
  .form__main--item {
    justify-content: center;
  }
  .form__item--error {
    @extend .err-text;
  }
  .show--error .input-holder {
    border-color: $red;
    background: $bg_festival_counrer_down;
  }
  .signup-input {
    padding-right: 24px;
  }
}

@media screen and (max-width: 540px) {
  .card {
    width: 360px;
    height: 100vh;
    border-radius: 0;
  }

  .signup-input {
    margin-right: 16px;
    margin-left: 16px;
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

  .signup-btn {
    margin-top: 1rem;
    width: 328px;
    margin-bottom: 5rem;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 328px;
    margin: 120px 16px 33px 16px;
  }
  .err-text {
    margin-right: 16px;
  }
  .recycle-container::v-deep {
    .signup-input {
      width: 328px;
      height: 60px;
      margin-bottom: 8px;
      padding-right: 16px;
      padding-left: 16px;
    }
    .txt-content {
      font-size: 14px;
      width: 328px;
      margin-right: 16px;
      margin-left: 16px;
    }
  }
}
@media screen and (max-width: 350px) {
  .signup-input {
    margin-right: 10px;
    margin-left: 10px;
    width: 280px;
    margin-bottom: 42px;
    &-wrong {
      margin-right: 10px;
      margin-left: 10px;
      width: 280px;
      margin-bottom: 42px;
    }
  }

  .input-holder {
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

  .recycle-container::v-deep {
    .input-holder {
      margin-right: auto;
      margin-left: auto;
    }
    .signup-input {
      margin-right: 5px;
      margin-left: 5px;
      width: 270px;
      padding-right: 16px;
    }
    .txt-content {
      width: 280px;
    }
  }
  .card {
    width: auto;
  }
}
@media screen and (max-width: 321px) and (min-width: 299px) {
  .card {
    @include display-flex();
    flex-direction: column;
    justify-content: space-between;
  }
}
@media screen and (max-width: 280px) {
  .signup-input,
  .signup-input-wrong {
    margin-right: 5px;
    margin-left: 5px;
    width: 270px;
    margin-bottom: 42px;
    padding-right: 16px;
  }
  .input-holder,
  .input-holder-wrong {
    margin-right: 5px;
    margin-left: 5px;
    width: 270px;
    margin-bottom: 8px;
    padding-right: 0;
  }
  .signup-btn {
    width: 270px;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 270px;
  }
  .txt-content {
    width: 270px;
    margin-right: 23px;
  }
  .recycle-container::v-deep {
    .input-holder {
      margin-right: auto;
      margin-left: auto;
    }
    .signup-input {
      margin-right: 5px;
      margin-left: 5px;
      width: 270px;
      padding-right: 16px;
    }
  }
}
</style>
