<template>
  <div class="recycle-container">
    <authentication-card class="card">
      <template #top-icon>
        <button @click="nextPage" class="app-signup-close-btn"></button>
      </template>
      <template #card-title class="txt-header">
        {{ getTextByTextKey("auth_password_recovery") }}
      </template>
      <template #card-body>
        <form @submit.prevent="goToNextStepofRecyclePass">
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
      </template>
    </authentication-card>
<!--    <div class="card">
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
              class="user&#45;&#45;item user-profile__info-pass"
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
              accessStyleParentInToChildNameId="address__form&#45;&#45;data"
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
    </div>-->
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

.card {
  width: toRem(642);
  padding: 0 toRem(89.5);
}

.app-signup-close-btn::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: 24px;
  color: $black-icon;
}
.signup-btn {
  font-family: inherit;
  font-size: toRem(18);
  height: toRem(58);
  width: 100%;
  margin-bottom: 5rem;
}
.form-control {
  direction: rtl;
  font-family: inherit;
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
  line-height: toRem(22.5);
  font-weight: 400;
  text-align: right;
  margin-bottom: toRem(25);
  width: 100%;
}

.recycle-container::v-deep {
  .txt-content {
    @extend .txt-content;
  }
  .input-holder {
    @extend .input-holder;
    width: 100%;
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
    height: toRem(60);
    margin-bottom: toRem(8);
    &-wrong {
      height: toRem(60);
      margin-bottom: toRem(8);
    }
  }

  .input-holder {
    height: toRem(60);
    margin-bottom: toRem(8);
    &-wrong {
      height: toRem(60);
      margin-bottom: toRem(8);
    }
  }

  .signup-btn {
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
  .recycle-container::v-deep {
    .signup-input {
      height: toRem(60);
      margin-bottom: toRem(8);
    }
    .txt-content {
      font-size: toRem(14);
    }
  }
}
</style>
