<template>
  <div class="search-section">
    <div v-if="state == 'search'" class="search-section__items">
      <input
        class="search-section__input"
        :placeholder="placeholderText"
        type="text"
        dir="rtl"
      />
      <button class="search-section__btn"></button>
    </div>

    <div :class="{ 'show--error': showError }" v-if="state == 'standard'">
      <h3 class="txt-content">
        {{ labelText }}
      </h3>

      <div class="search-section__items">
        <input
          class="search-section__input"
          :placeholder="placeholderText"
          @keyup="typingInput"
          type="text"
          dir="rtl"
          :maxlength="maxlength"
        />
        <span class="search__section--error ">{{ msgError.notValidMsg }}</span>
      </div>
    </div>

    <div v-if="state == 'changePassword'" class="card-body">
      <div class="form-group">
        <p class="txt-header">
          {{ getTextByTextKey("auth_change_password") }}
        </p>
        <p dir="rtl" class="txt-content">
          {{ getTextByTextKey("auth_new_passowrd") }}
        </p>
        <div class="input-section">
          <div
            class="input-holder"
            :style="
              password || passIsActive
                ? 'border:1px solid #515151'
                : 'border:1px solid #bdbdbd'
            "
          >
            <input
              @click="[(passIsActive = true)]"
              class="signup-input form-control"
              :type="passwordFieldType"
              :placeholder="getTextByTextKey('auth_forget_passwrord_circle')"
              v-model="password"
              maxlength="32"
              required
            />
            <button
              @click="switchVisibility"
              type="button"
              class="clear-input"
              aria-label="Close"
            >
              <span
                :style="
                  passwordFieldType === 'password'
                    ? 'display: block'
                    : 'display: none'
                "
                class="signin__close-eye"
              ></span>
              <span
                :style="
                  passwordFieldType === 'text'
                    ? 'display: block'
                    : 'display: none'
                "
                class="signin__open-eye"
              ></span>
            </button>
          </div>
        </div>
        <p dir="rtl" class="txt-content">
          {{ getTextByTextKey("auth_repeat_new_password") }}
        </p>
        <div class="input-section">
          <div
            class="input-holder-verify"
            :style="
              passwordVerify || verifyPassIsActive
                ? 'border:1px solid #515151'
                : 'border:1px solid #bdbdbd'
            "
          >
            <input
              @click="[(verifyPassIsActive = true)]"
              class="signup-input form-control"
              :type="passwordFieldTypeVerify"
              :placeholder="getTextByTextKey('auth_forget_passwrord_circle')"
              v-model="passwordVerify"
              maxlength="32"
              required
            />
            <button
              @click="switchVisibilityVerify"
              type="button"
              class="clear-input"
              aria-label="Close"
            >
              <span
                :style="
                  passwordFieldTypeVerify === 'password'
                    ? 'display: block'
                    : 'display: none'
                "
                class="signin__close-eye"
              ></span>
              <span
                :style="
                  passwordFieldTypeVerify === 'text'
                    ? 'display: block'
                    : 'display: none'
                "
                class="signin__open-eye"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkPersianPhoneNumber from "~/modules/checkPersianPhoneNumber";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  name: "textTnput",
  props: {
    msgError: { type: [String, Object], default: {} },
    placeholderText: { type: String, default: "" },
    maxlength: { type: String, default: "" },
    state: { type: String, default: "" },
    checkEmail: { type: Boolean, default: false },
    checkNumber: { type: Boolean, default: false },
    activeCheckPhoneNumber: { type: Boolean, default: false },
    labelText: { type: String, default: "" },
    onlyUseString: { type: Boolean, default: false },
  },

  data() {
    return {
      // state global //
      showError: false,

      // state password //
      passwordFieldType: "password",
      passwordFieldTypeVerify: "password",
      password: "",
      passwordVerify: "",
      passChenged: false,
      passIsActive: false,
      verifyPassIsActive: false,
    };
  },

  computed: {},

  watch: {},

  mounted() {},

  methods: {
    getTextByTextKey,
    isEmail(str) {
      var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return pattern.test(str); // returns a boolean
    },

    isNotEmpty(str) {
      var pattern = /\S+/;
      return pattern.test(str); // returns a boolean
    },

    isNumber(str) {
      var pattern = /^\d+$/;
      return pattern.test(str); // returns a boolean
    },

    isSame(str1, str2) {
      return str1 === str2;
    },

    checkHasString(value) {
      let num = value;
      let digits = num.toString().split("");
      let realDigits = digits.map(Number);
      let checkStringNumberStatus = false;
      let counterCheckLenNumber = -1;
      let inValid = /\s/;

      realDigits.map((t, i) => {
        if (isNaN(t)) {
          counterCheckLenNumber++;
        }
      });

      if (realDigits.length - 1 == counterCheckLenNumber) {
        checkStringNumberStatus = true;
      }

      // در صورتی که کاربر مقدار نوشته شده اش فاصله داشته باشد اجرا می شود //
      if (inValid.test(value)) {
        checkStringNumberStatus = true;
      }

      return checkStringNumberStatus;
    },

    typingInput(e, submitValue) {
      const currentInputValue = e.target.value;

      if (currentInputValue != "") {
        if (this.isNotEmpty(currentInputValue)) {
          this.showError = false;
        }
        if (currentInputValue.length == this.maxlength) {
          this.showError = true;
        }

        // بررسی درست وارد کردن ایمیل //
        if (this.checkEmail) {
          const checkEmail = this.isEmail(currentInputValue);
          if (!checkEmail) {
            this.showError = true;
          }
        }

        // بررسی مقدار وارد شده در صورتی که عدد نباشد ارور نمایش داده می شود //
        if (this.checkNumber) {
          const checkEmail = this.isNumber(currentInputValue);
          if (!checkEmail) {
            this.showError = true;
          }
        }

        if (this.activeCheckPhoneNumber) {
          // در صورت خالی بودن مقدار به عنوان اشتباه بودن شماره تماس تلغی می شود //
          const resultCheckPhoneNumber = checkPersianPhoneNumber(
            currentInputValue
          );

          if (resultCheckPhoneNumber.length == 0) {
            this.showError = true;
          }
        }

        // فقط باید مقدار مورد نظر حروف باشد که اجرا شود //
        if (this.onlyUseString) {
          if (!this.checkHasString(currentInputValue)) {
            this.showError = true;
          }
        }
      } else {
        this.showError = false;
      }
    },

    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },

    switchVisibilityVerify() {
      this.passwordFieldTypeVerify =
        this.passwordFieldTypeVerify === "password" ? "text" : "password";
    },
  },
};
</script>

<style lang="scss" scoped>
.search-section {
  &__items {
    height: 49px;
    line-height: 28px;
    border: 1px solid $input-border;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    width: 492px;
    flex-wrap: wrap;
  }
  &__input {
    @extend .sass-input__default;
    font-family: inherit;
    font-size: 14px;
    font-weight: 300;
    flex-grow: 2;
    padding-right: 15px;
    padding-left: 15px;
    color: $gray_4;
    height: 100%;
  }

  &__btn {
    @extend .sass-input__default;
    margin: 14px 26px 15px 4px;
  }
  &__btn::before {
    @include font-icon__limoo();
    font-size: 17px;
    content: "\e869";
    cursor: pointer;
    color: $input-border;
    vertical-align: middle;
  }
}
.search__section--error {
  margin-top: 4px;
  color: $alert-red;
  text-align: right;
  font-size: 14px;
  line-height: 140.62%;
  @include display-flex();
  width: 100%;
  text-align: right;
  visibility: hidden;
}
.search-section__input::placeholder {
  color: $gray_disabled;
  font-size: 16px;
}
.search-section__input:-ms-input-placeholder {
  color: $gray_disabled;
  font-size: 16px;
}
.search-section__input::-ms-input-placeholder {
  color: $gray_disabled;
  font-size: 16px;
}
.show--error .search__section--error {
  visibility: visible;
}
.show--error .search-section__items {
  border-color: $red;
}

.pass-container {
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
.success-icon {
  width: 24px;
  height: 24px;
  margin-right: 18px;
  margin-top: 17px;
}
.success-txt {
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  margin-right: 8px;
  text-align: right;
  margin-top: 17px;
  color: $white;
}
.signin-next-btn {
  @include display-flex();
  justify-content: flex-start;
  width: 30px;
  height: 30px;
  margin-top: 24px;
}
.app-signin-next-btn::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: 24px;
  color: $black-icon;
}
.signin__close-eye::before {
  content: "\e810";
  @include font-icon__limoo();
  font-size: 20px;
  color: $gray;
  vertical-align: middle;
}
.signin__close-eye,
.signin__open-eye {
  margin-bottom: 2px;
}
.signin__open-eye::before {
  content: "\e811";
  @include font-icon__limoo();
  font-size: 20px;
  color: $gray;
  vertical-align: middle;
}
.input-holder {
  margin-bottom: 38px;
}
.input-holder-verify {
  margin-bottom: 42px;
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

.txt-header {
  font-size: 24px;
  line-height: 33.75px;
  font-weight: 400;
  text-align: right;
  margin: 8px 90px 38px 15px;
}
.txt-content {
  font-size: 16px;
  line-height: 22.5px;
  font-weight: 318;
  text-align: right;
  margin-bottom: 24px;
}
.signup-btn {
  margin-bottom: 56px;
}
.success-pss-btn {
  background: $alert-massage__green;
}
.signup-input {
  padding-right: 24px;
}

.min-display {
  display: none;
}
.desk-display {
  display: block;
}
.input-section {
  direction: ltr;
}

@media screen and (max-width: 600px) {
  .app-signin-next-btn {
    visibility: hidden;
  }
  .min-display {
    display: block;
  }
  .desk-display {
    display: none;
  }
}
@media screen and (max-width: 540px) {
  .success-message {
    @include display-flex();
    flex-direction: row-reverse;
    width: 463px;
    height: 58px;
    background-color: $alert-massage__green;
    margin: 44px 90px 0px 89px;
    border-radius: 10px;
    position: absolute;
    opacity: 0;
    /* add .message-animation when we want to show them */
  }

  /* add this animation to messages when we want to show them */
  .message-animation {
    animation: cssAnimation 1000ms 2 alternate;
  }
  @keyframes cssAnimation {
    0% {
      opacity: 0;
      transform: translate(0%, -100%);
    }
    70% {
      opacity: 1;
      transform: translate(0%, -20%);
    }
    80% {
      opacity: 1;
      transform: translate(0%, -20%);
    }
    90% {
      opacity: 1;
      transform: translate(0%, -20%);
    }
    100% {
      opacity: 1;
      transform: translate(0%, -20%);
    }
  }
  .card {
    width: auto;
    height: 100vh;
    border-radius: 0;
    padding-right: 1px;
  }
  .success-message {
    width: 328px;
    height: 56px;
    margin: 16px 16px 0px 16px;
  }
  .success-txt {
    font-size: 14px;
    margin-top: 20px;
  }
  .signup-input {
    margin-right: 16px;
    margin-left: 16px;
    padding-right: 0px;
    width: 328px;
    height: 60px;
    margin-bottom: 8px;
  }
  .input-holder {
    margin-right: 16px;
    margin-left: 16px;
    padding: 0;
    width: 328px;
    height: 60px;
    margin-bottom: 24px;
  }
  .input-holder-verify {
    margin-right: 16px;
    margin-left: 16px;
    padding: 0;
    width: 328px;
    height: 60px;
  }
  .signup-btn {
    width: 328px;
    margin-top: 6px;
    margin-bottom: 132px;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 328px;
    margin-top: 100px;
    margin-right: 16px;
    margin-left: 16px;
  }
  .txt-content {
    width: 328px;
    font-size: 14px;
    margin-bottom: 15px;
    margin-right: 16px;
    margin-left: 16px;
  }
  .signup-limoo-logo {
    margin-top: 0.5rem;
  }
}
@media screen and (max-width: 350px) {
  .card {
    padding-right: 0px;
  }
  .success-message {
    width: 280px;
  }
  .signup-input {
    margin-right: 10px;
    margin-left: 10px;
    width: 280px;
    margin-bottom: 42px;
  }
  .input-holder {
    margin-right: 15px;
    margin-left: 15px;
    padding: 0;
    width: 280px;
    height: 60px;
    margin-bottom: 8px;
  }
  .input-holder-verify {
    width: 280px;
  }
  .signup-btn {
    width: 280px;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 280px;
    margin: 37px 10px 20px 10px;
  }
  .txt-content {
    width: 280px;
    margin-right: 20px;
  }
  .signup-limoo-logo {
    margin-top: 0;
  }
}
@media screen and (max-width: 280px) {
  .success-message {
    width: 270px;
  }
  .signup-input {
    margin-right: 5px;
    margin-left: 5px;
    width: 270px;
    margin-bottom: 42px;
  }
  .input-holder {
    margin-right: 5px;
    margin-left: 5px;
    padding: 0 10px 0 0;
    width: 270px;
    height: 60px;
    margin-bottom: 8px;
  }
  .input-holder-verify {
    margin-right: 15px;
    padding: 0 10px 0 0;
    margin-left: 15px;
    width: 270px;
  }
  .signup-btn {
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
}
</style>
