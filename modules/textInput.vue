<template>
  <div class="search-section">
    <div v-if="state == 'search'" class="search-section__items">
      <input
        class="search-section__input"
        :placeholder="placeholderText"
        type="text"
        dir="rtl"
        v-model="currentValue"
      />
      <button class="search-section__btn"></button>
    </div>

    <div :class="{ 'show--error': showError }" v-if="state == 'standard'">
      <h3 class="txt-content">
        {{ labelText }}
      </h3>

      <div class="w-100">
        <div class="search-section__items">
          <input
            class="search-section__input"
            :placeholder="placeholderText"
            @keyup="typingInput"
            type="text"
            dir="rtl"
            :maxlength="maxlength"
            v-model="currentValue"
          />
        </div>
        <span class="search__section--error ">{{ msgError.notValidMsg }}</span>
      </div>
    </div>

    <div class="card-body">
      <div class="form-group">
        <!-- <p class="txt-header">
          {{ getTextByTextKey("auth_change_password") }}
        </p> -->
        <div
          v-if="state == 'multiPassword' || state == 'authInput'"
          class="input-section"
        >
          <p dir="rtl" class="txt-content">
            {{ labelText }}
          </p>

          <div
            :key="clearInput"
            :class="{ 'show--error': showError }"
            class="form__main--item"
          >
            <div class="input-holder">
              <input
                :class="{ 'add--space': statusAddSpaceNumber }"
                class="signup-input form-control"
                :maxlength="maxlength"
                @keyup="typingInput"
                :type="openEye ? 'password' : 'text'"
                v-model="currentValue"
                required
              />

              <button
                v-if="showIconClearInput"
                @click="[(typeingShowClearIcon = false)]"
                type="button"
                aria-label="Close"
                class="clear--button"
                :class="{ 'clear-input': typeingShowClearIcon }"
              >
                <span aria-hidden="true">&times;</span>
              </button>

              <button
                v-if="hidenShowEyeIcon"
                type="button"
                aria-label="Close"
                class="eye--button clear-input"
              >
                <span
                  @click="[(openEye = false)]"
                  v-if="openEye"
                  class="signin__close-eye signin-eye "
                ></span>
                <span
                  @click="[(openEye = true)]"
                  v-else
                  class="signin__open-eye  signin-eye"
                ></span>
              </button>
            </div>
            <p class="w-100 form__item--error ">
              {{ getTextByTextKey("auth_phone_not_valid") }}
            </p>
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
    typeInput: { type: String, default: "" },
    functionMaxLen: { type: String, default: "equalTo" },
    showIconClearInput: { type: Boolean, default: false },
    showIconEyeInput: { type: Boolean, default: false },
    statusAddSpaceNumber: { type: Boolean, default: false },
    checkInitialValidation: { type: Number, default: 0 },
    nameInput: { type: String, default: "" },
    formData: { type: Object, default: {} },
  },

  data() {
    return {
      // state global //
      showError: false,
      typeingShowClearIcon: false,
      clearInput: 0,
      hidenShowEyeIcon: false,
      openEye: true,
      currentValue: "",
    };
  },

  created() {
    this.hidenShowEyeIcon = this.showIconEyeInput;

    // در صورتی که اجازه نمایش آیکن چشم داده نشده باشد  ، آیکن چشم نمایش داده نمی شود //
    if (!this.showIconEyeInput) {
      this.openEye = false;
    }
  },

  watch: {
    typeingShowClearIcon(status) {
      // در صورتی که روی آیکن پاک کردن مقدار کلیک شود مقدار وار شده پاک می شود //
      if (!status) {
        this.clearInput++;
        this.showError = false;
        this.typeingShowClearIcon = false;
      }
    },

    currentValue(value) {
      if (this.statusAddSpaceNumber) {
        this.currentValue = value;
        this.onlyUseNumberStateAddSpace();
      }
    },

    checkInitialValidation() {
      this.checkDataValidation("submit");
    },
  },

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

    onlyUseNumberStateAddSpace() {
      if (/\D/.test(this.currentValue)) {
        this.currentValue = this.currentValue.slice(0, -1);
      }
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
      this.checkDataValidation();
    },

    checkDataValidation(stateCheckForm) {
      const currentInputValue = this.currentValue;
      const maxlength = this.maxlength;
      const functionMaxLen = this.functionMaxLen;

      const functionality = () => {
        if (this.isNotEmpty(currentInputValue)) {
          this.showError = false;
        }

        // وقتی تعداد عدد یا حروف های زده شده برابر با مکس باشد ارور نمایش داده می شود //
        if (functionMaxLen == "equalTo") {
          if (currentInputValue.length == this.maxlength) {
            this.showError = true;
          }
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
          const chekNumber = this.isNumber(currentInputValue);
          if (!chekNumber) {
            this.showError = true;
          }
        }

        // ببرسی شماره تلقن وارد شده //
        if (this.activeCheckPhoneNumber) {
          if (currentInputValue.length >= maxlength) {
            // در صورت خالی بودن مقدار به عنوان اشتباه بودن شماره تماس تلغی می شود //
            const resultCheckPhoneNumber = checkPersianPhoneNumber(
              currentInputValue
            );

            if (resultCheckPhoneNumber.length == 0) {
              this.showError = true;
            }
          }
        }

        // نمایش آیکن پاک کردن مقدار وارد شده پس از تایپ //
        if (this.showIconClearInput) {
          this.typeingShowClearIcon = true;
        }

        // فقط باید مقدار مورد نظر حروف باشد که اجرا شود //
        if (this.onlyUseString) {
          if (!this.checkHasString(currentInputValue)) {
            this.showError = true;
          }
        }

        // جلوگیری از وارد کرن حروف هنگام تایپ //
        if (this.statusAddSpaceNumber) {
          this.onlyUseNumberStateAddSpace();
        }
      };

      if (currentInputValue != "") {
        functionality();
      } else {
        this.showError = false;
        this.typeingShowClearIcon = false;
      }

      if (stateCheckForm == "submit") {
        if (currentInputValue == "") {
          this.showError = true;
        }

        this.formData[this.nameInput] = this.showError;
      }
    },

    // switchVisibility() {
    //   this.passwordFieldType =
    //     this.passwordFieldType === "password" ? "text" : "password";
    // },
    //
    // switchVisibilityVerify() {
    //   this.passwordFieldTypeVerify =
    //     this.passwordFieldTypeVerify === "password" ? "text" : "password";
    // },
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

.card-body {
  width: 100%;
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
.signin__close-eye {
  @include display-flex();
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
  width: 100%;
}
.input-holder-verify {
  margin-bottom: 42px;
  width: 100%;
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
  width: 100%;
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
  flex-wrap: wrap;
  width: 100%;
}
.form__main--item {
  width: 100%;
  @include display-flex();
  flex-flow: column;
}
.form__item--error {
  font-family: inherit;
  font-size: 13px;
  text-align: right;
  color: $alert-red;
  line-height: 140.62%;
  margin-bottom: 18px;
  visibility: hidden;
}
.show--error .form__item--error {
  visibility: visible;
}
.clear--button {
  display: none;
}
.clear-input {
  display: block;
  cursor: default;
}
.show--error .input-holder {
  border-color: red;
  background: #fff4f5;
}
.show--error .clear-input span {
  color: red;
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
  margin-bottom: 4px;
}
.signin__open-eye::before {
  content: "\e811";
  @include font-icon__limoo();
  font-size: 20px;
  color: $gray;
  vertical-align: middle;
}
.eye--button {
  background: none;
  border: none;
}
.signin-eye {
  @include display-flex();
  cursor: pointer;
}
.add--space {
  letter-spacing: 0.7em;
}
</style>
