<template>
  <div class="signin-container">
    <authentication-card class="card">
      <template #top-icon>
        <button @click="previousPage" class="app-signin-next-btn"></button>
      </template>
      <template #card-title class="txt-header">
        {{ getTextByTextKey("auth_password") }}
      </template>
      <template #card-body>
        <form @submit.prevent="pressed">
          <text-input
            class="user--item user-profile__info-pass"
            labelNameClass=""
            inputNameClass="w-100"
            state="authInput"
            maxlength="100"
            function-max-len="greaterThan"
            :placeholderText="getTextByTextKey('auth_forget_passwrord_circle')"
            :msgError="{
              notValidMsg: getTextByTextKey(
                'auth_forget_password_error_not_valid'
              ),
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
            :check-required="false"
            :check-typing-submit="false"
            :use-timer="false"
            :show-icon-star="false"
            :form-data="formData"
            :active-border-click="true"
            @typeing="typeing"
            accessStyleParentInToChildNameId="address__form--data"
            tag-html="input"
            timer-start=""
            type-input="password"
            name-input="password"
            :label-text="getTextByTextKey('auth_please_enter_password')"
          >
          </text-input>
          <div class="btn-control">
            <base-button base-color="yellow" button-type="submit" classes="signin-btn" no-effect no-box-shadow>
              {{ getTextByTextKey("home_blog_single_more") }}
            </base-button>
          </div>
          <div class="forget-pass-section">
            <p @click="forgetPass" class="forget-pass">
              {{ getTextByTextKey("auth_forget_password") }}
              <span class="arrow"></span>
            </p>

            <p @click="disposablePass" class="disposable-pass">
              {{ getTextByTextKey("auth_login_one_time_password") }}
              <span class="arrow"></span>
            </p>
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
      password: "",
      isActive: false,
      formData: {
        password: "",
      },
      checkInitialValidation: 0,
    };
  },
  components: {
    textInput,
  },
  methods: {
    getTextByTextKey,
    pressed() {
      this.checkInitialValidation++;

      setTimeout(() => {
        const formData = this.formData;
        let checkSubmitForm = "success";

        // check validation form //
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
          this.$store.commit("passHolder", { value: formData.password });
        }
      });
    },
    forgetPass() {
      // send request to disposablePass
      // this.$store.commit("walkInSignIncomponents", {
      //     value: "recyclePass"
      // });
      this.$router.push("/users/password/forget");
    },
    disposablePass() {
      // send request to disposablePass
      // this.$store.commit("walkInSignIncomponents", { value: "stepTwo" });
      this.$router.push("/users/password/disposable");
    },
    previousPage() {
      // go to ...
      this.$router.push("/users/signin-up");
    },

    typeing() {
      console.log("typeing", this.formData);
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
  height: toRem(524);
  padding: 0 4%;
}
.btn-control {
  @include display-flex();
  justify-content: center;
}
.app-signin-next-btn::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: toRem(24);
  color: $black-icon;
}

.signin-btn {
  font-family: inherit;
  font-size: toRem(18);
  height: toRem(58);
  width: 100%;
}

.txt-content {
  font-size: toRem(16);
  line-height: toRem(22.5);
  font-weight: 318;
  text-align: right;
  margin-bottom: toRem(25);
  margin-right: 0;
}

.signin-container::v-deep {
  .txt-content {
    @extend .txt-content;
  }
  .input-holder {
    width: 100%;
  }
  .form__item--error {
    display: none;
  }
  .form__main--item {
    flex-flow: inherit;
    justify-content: center;
  }
  .signup-input {
    direction: ltr;
    text-align: right;
  }
  .signin-eye {
    margin-bottom: 0;
  }
}

.signin-btn {
  margin-top: 2rem;
}
.signin-input {
  padding-right: toRem(24);
}
.forget-pass-section {
  @include display-flex();
  flex-direction: column;
  align-items: flex-end;
}
.forget-pass {
  color: $code-request;
  font-weight: 500;
  font-size: toRem(14);
  line-height: 140.62%;
  margin: toRem(24) 0 toRem(16) 0;
  cursor: pointer;
}
.arrow {
  margin-left: toRem(8);
  cursor: pointer;
}
.arrow::before {
  content: "\e83a";
  @include font-icon__limoo();
  font-size: toRem(10);
  color: $gray;
  vertical-align: middle;
}
.disposable-pass {
  color: $code-request;
  font-weight: 500;
  font-size: toRem(14);
  line-height: 140.62%;
  margin: 0 0 3.25rem 0;
  cursor: pointer;
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
    width: 100%;
  }
}
@include xs {
  .card {
    width: 100%;
    padding: 0 10%;
    height: 100%;
  }
  .signin-btn {
    margin-top: 1.875rem;
  }
  .input-holder {
    margin-right: 0;
    margin-left: 0;
    width: 100%;
    height: toRem(60);
    margin-bottom: toRem(8);
  }
  .txt-content {
    font-size: toRem(14);
    margin-bottom: toRem(15);
    width: 100%;
  }
  .forget-pass {
    font-size: toRem(13);
    margin: toRem(16) toRem(16) toRem(16) 0;
  }
  .disposable-pass {
    font-size: toRem(13);
    margin: 0 toRem(16) toRem(143) 0;
  }

  .arrow {
    display: none;
  }
  .signup-limoo-logo {
    margin-top: 0.5rem;
  }
  .forget-pass-section {
    width: 100%;
  }
  .forget-pass {
    margin-right: toRem(6);
  }
  .disposable-pass {
    margin-right: toRem(6);
  }
}
</style>
