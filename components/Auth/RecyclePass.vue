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
            <base-button classes="signup-btn" button-type="submit" base-color="yellow" no-box-shadow :disabled="btnIsDisabled">
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

        console.log(formData);
      });
    },
    nextPage() {
      this.$router.push("/users/signin");
    },
  },
};
</script>

<style lang="scss" scoped>
.recycle-container {
  height: 100vh;
  @include display-flex();
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}
.signup-input-wrong,
.signup-input {
  margin-right: toRem(24);
}
.signup-btn {
  font-family: inherit;
  font-size: toRem(18);
  height: toRem(58);
  width: 100%;
}
.card {
  width: 45%;
  height: fit-content;
  padding: 0 4%;
}
.app-signup-close-btn::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: toRem(24);
  color: $black-icon;
}
.form-control {
  direction: rtl;
  font-family: inherit;
}
.signup-btn {
  margin-bottom: toRem(100);
}
.err-text {
  font-family: inherit;
  font-size: toRem(13);
  text-align: right;
  color: $alert-red;
  line-height: 140.62%;
  margin-right: toRem(90);
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
  margin-right: 0;
}

.recycle-container::v-deep {
  .txt-content {
    @extend .txt-content;
  }
  .input-holder {
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
  .signup-input {
    padding-right: toRem(24);
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
}

@include xs {
  .card {
    width: 100%;
    padding: 0 10%;
    height: 100%;
  }
  .err-text {
    margin-right: toRem(16);
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
