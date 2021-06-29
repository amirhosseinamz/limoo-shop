<template>
  <div class="signin-container">
    <div class="card">
      <div class="signin-next-btn">
        <button @click="previousPage" class="app-signin-next-btn"></button>
      </div>

      <div class="card-body">
        <form @submit.prevent="pressed">
          <p class="txt-header">
            {{ getTextByTextKey("auth_password") }}
          </p>
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
  @include display-flex();
  flex-direction: column;
  justify-content: space-around;
  width: 642px;
  height: 524px;
  background-color: $white;
  box-shadow: 0px 8px 16px $box__shadow;
  border-radius: 15px;
}
.btn-control {
  @include display-flex();
  justify-content: center;
}
.signin-next-btn {
  @include display-flex();
  justify-content: flex-start;
  width: 30px;
  height: 30px;
  margin-top: 30px;
  margin-bottom: 8px;
}
.app-signin-next-btn::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: 24px;
  color: $black-icon;
}

.txt-header {
  font-size: 24px;
  line-height: 33.75px;
  font-weight: 400;
  text-align: right;
  margin: 37px 90px 33px 15px;
}

.txt-content {
  font-size: 16px;
  line-height: 22.5px;
  font-weight: 318;
  text-align: right;
  margin-bottom: 25px;
  margin-right: 90px;
}

.signin-container::v-deep {
  .txt-content {
    @extend .txt-content;
  }
  .input-holder {
    @extend .input-holder;
    margin-right: auto;
    margin-left: auto;
  }
  // .input-holder:focus {
  //   border: 1px solid rgb(81, 81, 81);
  // }
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
  padding-right: 24px;
}
.forget-pass-section {
  @include display-flex();
  flex-direction: column;
  align-items: flex-end;
}
.forget-pass {
  color: $code-request;
  font-weight: 500;
  font-size: 14px;
  line-height: 140.62%;
  margin: 24px 90px 16px 0;
  cursor: pointer;
}
.arrow {
  margin-left: 8px;
  cursor: pointer;
}
.arrow::before {
  content: "\e83a";
  @include font-icon__limoo();
  font-size: 10px;
  color: $gray;
  vertical-align: middle;
}
.disposable-pass {
  color: $code-request;
  font-weight: 500;
  font-size: 14px;
  line-height: 140.62%;
  margin: 0 90px 86px 0;
  cursor: pointer;
}

@media screen and (max-width: 540px) {
  .card {
    width: auto;
    height: 100vh;
    border-radius: 0;
    padding-right: 5px;
  }
  @mixin signin-input() {
    padding-right: 0px;
    width: 328px;
    height: 60px;
    margin-bottom: 8px;
  }
  .signin-input {
    @include signin-input();
  }
  .signin-container::v-deep {
    .signin-input {
      @include signin-input();
    }
  }
  .input-holder {
    margin-right: 16px;
    margin-left: 16px;
    padding: 0;
    width: 328px;
    height: 60px;
    margin-bottom: 8px;
  }

  .signin-btn {
    width: 328px!important;
    margin-top: 1.875rem;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 328px;
    margin: 100px 16px 33px 16px;
  }
  .txt-content {
    width: 328px;
    font-size: 14px;
    margin-bottom: 15px;
    margin-right: 16px;
    margin-left: 16px;
  }
  .forget-pass {
    font-size: 13px;
    margin: 16px 16px 16px 0;
  }
  .disposable-pass {
    font-size: 13px;
    margin: 0 16px 143px 0;
  }
  .arrow {
    display: none;
  }
  .signup-limoo-logo {
    margin-top: 0.5rem;
  }
  .forget-pass-section {
    width: 328px;
    margin-right: auto;
    margin-left: auto;
  }
  .forget-pass {
    margin-right: 6px;
  }
  .disposable-pass {
    margin-right: 6px;
  }
  .card {
    width: 360px;
  }
}
@media screen and (max-width: 350px) {
  .card {
    padding-right: 0px;
  }
  @mixin signin-input() {
    margin-right: 10px;
    margin-left: 10px;
    width: 280px;
    margin-bottom: 42px;
  }
  .signin-input {
    @include signin-input();
  }
  .form-group::v-deep {
    .signin-input {
      @include signin-input();
    }
  }
  .input-holder {
    margin-right: 16px;
    margin-left: 16px;
    padding: 0;
    width: 280px;
    height: 60px;
    margin-bottom: 8px;
  }
  .signin-btn {
    width: 280px!important;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 280px;
    margin: 37px 10px 20px 10px;
    margin-right: auto;
    margin-left: auto;
  }
  .txt-content {
    width: 280px;
    margin-right: 20px;
  }
  .signup-limoo-logo {
    margin-top: 0;
  }
  .forget-pass-section {
    width: 280px;
  }
  .card {
    width: auto;
  }
}
@media screen and (max-width: 280px) {
  @mixin signin-input() {
    margin-right: 5px;
    margin-left: 5px;
    width: 270px;
    margin-bottom: 42px;
  }
  .signin-input {
    @include signin-input();
  }
  .form-group::v-deep {
    .signin-input {
      background: red;
      @include signin-input();
    }
  }
  .input-holder {
    margin-right: 10px;
    margin-left: 10px;
    padding: 0;
    width: 270px;
    height: 60px;
    margin-bottom: 8px;
  }
  .signin-btn {
    width: 270px;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 270px;
    margin-right: 10px;
  }
  .txt-content {
    width: 270px;
    margin-right: 10px;
  }
  .signup-limoo-logo {
    margin-top: 0.2rem;
  }
  .forget-pass-section {
    width: 270px;
  }
}
</style>
