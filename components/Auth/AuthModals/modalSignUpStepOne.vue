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
  width: toRem(642);
  padding: 0 7%;
}

.signup-close-btn {
  @include display-flex();
  justify-content: flex-start;
}
.app-signup-close-btn::before {
   content: "\e807";
   @include font-icon__limoo();
   font-size: toRem(28);
   color: $gray;
 }
.signup-input {
  width: 100%;
  &-wrong {
    width: 100%;
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
  width: 100%;
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
  width: 100%;
  font-size: toRem(16);
  line-height: toRem(22.5);
  font-weight: 318;
  text-align: right;
  margin-bottom: toRem(25);
}
.signup-container::v-deep {
  .txt-content {
    @extend .txt-content;
  }
  .input-holder {
    width: 100%;
    @extend .input-holder;
  }
  .form__item--error {
    @extend .err-text;
  }
  .form__main--item {
    justify-content: center;
  }
  .signup-input {
    @extend .signup-input;
  }
}
@include sm {
  .card {
    width: toRem(520);
  }
}

@include xs {
  .app-signup-close-btn {
    display: none;
  }
  .min-display {
    display: block;
  }
  .desk-display {
    display: none;
  }
  .signup-limoo-logo {
    margin-top: toRem(20);
  }

  .card {
    width: toRem(400);
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
  .err-text {
    margin-right: toRem(16);
  }
  .signup-limoo-logo {
    margin-top: 0.5rem;
  }
  .signup-container::v-deep {

    .input-holder {
      height: toRem(60);
      margin-bottom: toRem(8);
      &-wrong {
        height: toRem(60);
        margin-bottom: toRem(8);
      }
    }
    .form__item--error {
      margin-right: toRem(16);
    }
    .form__main--item {
      justify-content: center;
    }
    .signup-input {
      height: toRem(60);
      margin-bottom: toRem(8);
      &-wrong {
        height: toRem(60);
        margin-bottom: toRem(8);
      }
    }
  }
}
</style>
