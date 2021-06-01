<template>
  <div class="search-section ">
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

    <div
      class="w-100"
      :class="{ 'show--error': showError }"
      v-if="state == 'standard'"
    >
      <!-- <h3  :class="inputNameClass" class="txt-content">
        {{ labelText }}
      </h3> -->

      <h3 :class="labelNameClass" class="txt-content">
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
            :id="idInput"
          />
        </div>
        <span class="search__section--error pass__alert ">{{
          msgError.notValidMsg
        }}</span>
      </div>
    </div>

    <div v-else class="card-body d-rtl">
      <div class="form-group">
        <!-- <p class="txt-header">
          {{ getTextByTextKey("auth_change_password") }}
        </p> -->
        <div v-if="state == 'authInput'" class="input-section">
          <p dir="rtl" class="txt-content">
            {{ labelText }}
            <span v-if="showIconStar" class="comment__form-star">*</span>
          </p>

          <div
            :key="clearInput"
            :class="{
              'show--error': showError,
              'disabled--input': disabledInputDefault,
            }"
            class="form__main--item"
          >
            <div
              :class="{ 'border--actice': haveBorder }"
              class="input-holder"
              v-if="tagHtml == 'input'"
            >
              <!-- <input
                :class="{ 'add--space': statusAddSpaceNumber }"
                class="signup-input form-control"
                :maxlength="maxlength"
                @keyup="typingInput"
                :type="openEye ? 'password' : 'text'"
                v-model="currentValue"
                required
              /> -->

              <input
                @click="clickInput"
                :class="inputNameClass"
                class="signup-input form-control"
                :maxlength="maxlength"
                @keyup="typingInput"
                :type="openEye ? 'password' : 'text'"
                :disabled="disabledInputDefault"
                :placeholder="placeholderText"
                v-model="currentValue"
                :required="attributeRequired"
              />

              <button
                v-if="showIconClearInput"
                v-show="onlyRemoveIconClearData"
                @click="[(typeingShowClearIcon = false), (haveBorder = false)]"
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

            <textarea
              @keyup="typingInput"
              :maxlength="maxlength"
              v-model="currentValue"
              v-else
              rows="8"
              cols="80"
              class="form__textara-item p-input-style__default d-rtl"
            ></textarea>

            <div
              v-if="useTimer"
              :class="{ 'active--timer': useTimer }"
              class="timer-holder"
            >
              <p :class="{ 'show-timer': timerZero }" class="timer">
                <span class="tCounter">
                  <span class="timer-timeText">0</span>
                  <h3 class="timer-timeText">
                    {{ counterDownMinutes[1] }}
                  </h3>
                  <span class="timer-timeText">:</span>
                  <h3 class="timer-timeText">
                    {{ counterDownSecond[0] }}
                  </h3>

                  <h3 class="timer-timeText">
                    {{ counterDownSecond[1] }}
                  </h3></span
                >
                {{ getTextByTextKey("auth_aignup_agin_code_send") }}
              </p>
              <p
                class="code-request"
                :class="{ 'show-code-request': timerZero }"
                @click="sendNewRequest"
              >
                {{ getTextByTextKey("auth_request_code_resend") }}
              </p>
            </div>

            <div class="form__error--main" v-else>
              <p v-if="removeError === false" class="w-100 form__item--error ">
                {{ msgError.notValidMsg }}
              </p>
            </div>
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
    checkEmptySubmit: { type: Boolean, default: false },
    checkRequired: { type: Boolean, default: false },
    useTimer: { type: Boolean, default: false },
    timerStart: { type: String, default: "" },
    tagHtml: { type: String, default: "input" },
    showIconStar: { type: Boolean, default: false },
    accessStyleParentInToChildNameId: { type: String, default: "" },
    inputNameClass: { type: String, default: "" },
    labelNameClass: { type: String, default: "" },
    checkTypingSubmit: { type: Boolean, default: false },
    idInput: { type: String, default: "" },
    disabledInputDefault: { type: Boolean, default: false },
    removeError: { type: Boolean, default: false },
    checkPassword: { type: Boolean, default: false },
    attributeRequired: { type: Boolean, default: false },
    activeBorderClick: { type: Boolean, default: false },
    startAgainTimer: { type: Number, default: 0 },
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
      counterDownHours: [],
      counterDownMinutes: [],
      counterDownSecond: [],
      Tcounter: 178,
      timerZero: false,
      onlyRemoveIconClearData: false,
      haveBorder: false,
    };
  },

  created() {
    this.hidenShowEyeIcon = this.showIconEyeInput;
    const currentValue = this.formData[this.nameInput];

    // در صورتی که اجازه نمایش آیکن چشم داده نشده باشد  ، آیکن چشم نمایش داده نمی شود //
    if (!this.showIconEyeInput) {
      this.openEye = false;
    }

    // در صورت فعال بودن آپشن تایمر شروع به اجرا می کند //
    if (this.useTimer) {
      const splitTimerStart = this.timerStart.split(":");
      this.countDownTimer(splitTimerStart[0], splitTimerStart[1]);
    }

    this.currentValue = currentValue;

    console.log(this.showError, "this.showError");
  },

  watch: {
    typeingShowClearIcon(status) {
      // در صورتی که روی آیکن پاک کردن مقدار کلیک شود مقدار وار شده پاک می شود //
      if (!status) {
        this.clearInput++;
        this.showError = false;
        this.typeingShowClearIcon = false;
        this.onlyRemoveIconClearData = false;
        this.currentValue = "";
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

    // will true server response timer run function  //
    startAgainTimer() {
      console.log("dsd");
      this.clearTimer();
    },
  },

  methods: {
    getTextByTextKey,
    isEmail(str) {
      const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return pattern.test(str); // returns a boolean
    },

    isNotEmpty(str) {
      const pattern = /\S+/;
      return pattern.test(str); // returns a boolean
    },

    isNumber(str) {
      const pattern = /^\d+$/;
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
      const keyboardKey = e.key;

      // only run typeing check validation //
      if (keyboardKey !== "Enter") {
        this.checkDataValidation("typeing");
      }
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

          if (stateCheckForm == "submit") {
            if (this.checkRequired) {
              if (!checkEmail) {
                this.showError = true;
              }
            }
          }

          if (stateCheckForm == "typeing") {
            if (!checkEmail) {
              this.showError = true;
            }
          }
        }

        // بررسی مقدار وارد شده در صورتی که عدد نباشد ارور نمایش داده می شود //
        if (this.checkNumber) {
          const chekNumber = this.isNumber(currentInputValue);

          if (stateCheckForm == "submit") {
            // هنگامی که مقدار سابمت شد مقدار مورد نظر بررسی می شود //
            if (this.checkTypingSubmit) {
              if (currentInputValue != "") {
                if (currentInputValue.length < maxlength) {
                  this.showError = true;
                }
              }
            } else {
              if (this.checkRequired) {
                if (!chekNumber) {
                  this.showError = true;
                }
              }
            }
          }

          if (stateCheckForm == "typeing") {
            // در صورتی که تایپینگ فعال باشد  مقدار مورد نظر هنگام تایپ بررسی می شود //
            if (this.checkTypingSubmit) {
            } else {
              if (!chekNumber) {
                this.showError = true;
              }
            }
          }
        }

        // ببرسی شماره تلقن وارد شده //
        if (this.activeCheckPhoneNumber) {
          const logicCheckPhoneNumber = () => {
            // در صورت خالی بودن مقدار به عنوان اشتباه بودن شماره تماس تلغی می شود //
            const resultCheckPhoneNumber = checkPersianPhoneNumber(
              currentInputValue
            );

            if (resultCheckPhoneNumber.length == 0) {
              this.showError = true;
            }
          };

          if (currentInputValue.length >= maxlength) {
            logicCheckPhoneNumber();
          } else {
            if (stateCheckForm == "submit") {
              if (this.checkRequired) {
                logicCheckPhoneNumber();
              }
            }
          }
        }

        // نمایش آیکن پاک کردن مقدار وارد شده پس از تایپ //
        if (this.showIconClearInput) {
          this.typeingShowClearIcon = true;
          this.onlyRemoveIconClearData = true;
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

          if (stateCheckForm == "submit") {
            if (this.checkRequired) {
              // در صورتی که شماره وارد شده کوچک تر از مقدار مکس تعیین شده بود ارور نمایش داده می شود //
              if (currentInputValue.length < maxlength) {
                this.showError = true;
              }
            }
          }

          if (stateCheckForm == "typeing") {
            if (currentInputValue.length < maxlength) {
              this.showError = true;
            }
          }
        }

        if (this.checkPassword) {
          const repeatPasswordCheckValue = (value) => {
            let newPassValue = this.formData["newPass"];

            if (typeof newPassValue == "undefined") {
              newPassValue = "";
            } else {
              newPassValue = newPassValue.value;
            }

            if (value.length == 0) {
              this.msgError.notValidMsg = "";
              this.showError = false;
            } else if (value.length > 32) {
              this.msgError.notValidMsg =
                "رمز عبور نمی تواند بیش از 32 کاراکتر باشد!";
              this.showError = true;
            } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
              this.msgError.notValidMsg =
                "رمز عبور باید شامل حداقل 8 (رقم و کاراکتر) باشد!";
              this.showError = true;
            } else if (!(newPassValue === value)) {
              this.msgError.notValidMsg =
                "لطفا رمز جدید را بصورت صحیح وارد کنید.";
              this.showError = true;
            } else {
              this.msgError.notValidMsg = "";
              this.showError = false;
            }
          };

          const newPasswordCheckValue = (value) => {
            if (value.length == 0) {
              this.msgError.notValidMsg = "";
              this.showError = false;
            } else if (value.length > 32) {
              this.msgError.notValidMsg =
                "رمز عبور نمی تواند بیش از 32 کاراکتر باشد!";
              this.showError = true;
            } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
              this.msgError.notValidMsg =
                "رمز عبور باید شامل حداقل 8 (رقم و کاراکتر) باشد!";
              this.showError = true;
            } else {
              this.showError = false;
              this.msgError.notValidMsg = "";
            }
          };

          if (stateCheckForm == "typeing") {
            if (this.nameInput == "repeatNewPass") {
              repeatPasswordCheckValue(currentInputValue);
            }

            if (this.nameInput == "newPass" || this.nameInput == "oldPass") {
              newPasswordCheckValue(currentInputValue);
            }
          }

          if (stateCheckForm == "submit") {
            if (this.checkTypingSubmit) {
              if (currentInputValue == "") {
                this.showError = true;
              } else {
                if (this.nameInput == "repeatNewPass") {
                  repeatPasswordCheckValue(currentInputValue);
                }
                if (
                  this.nameInput == "newPass" ||
                  this.nameInput == "oldPass"
                ) {
                  newPasswordCheckValue(currentInputValue);
                }
              }
            }
          }
        }
      };

      if (currentInputValue != "") {
        functionality();
      } else {
        this.showError = false;
        // only remove icon clear input //
        this.onlyRemoveIconClearData = false;
      }

      // این قسمت مختص به چک کردن داده هایی است که برای تمامی آیتم ها یک سان است //
      if (stateCheckForm == "submit") {
        // بررسی خالی بودن مقدار //
        if (this.checkEmptySubmit) {
          if (currentInputValue == "") {
            this.showError = true;
          }
        }
        functionality();
      }

      // آپدیت آبجکت فورم برای گرفتن اطاعات وارد شده //
      this.formData[this.nameInput] = {
        value: currentInputValue,
        hasError: this.showError,
      };
    },

    countDownTimer(mm, ss) {
      const interval = setInterval(() => {
        if (mm == 0 && ss == 1) {
          clearInterval(interval);
          this.timerZero = true;
        }
        ss--;
        if (ss == 0) {
          ss = 59;
          mm--;
          if (mm == 0) {
            mm = 59;
          }
        }

        if (mm.toString().length < 2) mm = "0" + mm;
        if (ss.toString().length < 2) ss = "0" + ss;

        // const mergeAllCounterDown   = hr+" : "+mm+" : "+ss;

        this.counterDownMinutes = mm.toString().split("");
        this.counterDownSecond = ss.toString().split("");
      }, 1000);
    },

    clearTimer() {
      const splitTimerStart = this.timerStart.split(":");
      this.countDownTimer(splitTimerStart[0], splitTimerStart[1]);
      setTimeout(() => {
        this.timerZero = false;
      }, 1000);
    },

    sendNewRequest() {
      this.$emit("again-start-timer");
    },

    clickInput() {
      if (this.activeBorderClick) {
        this.haveBorder = true;
      }
      this.$emit("click-input", this.nameInput);
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
    width: 100%;
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
  // line-height: 140.62%;
  @include display-flex();
  width: 100%;
  text-align: right;
  visibility: hidden;
}
.search-section__input {
  width: 100%;
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
  border-color: $red !important;
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
  border-color: red !important;
  background: #fff4f5 !important;
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
.disabled--input {
  .input-holder {
    background: $disabled_input !important;
    border-color: #bdbdbd;
  }
}
.form__error--main {
  @include display-flex();
}

// timer //
.timer-holder {
  @include display-flex();
  justify-content: flex-end;
  margin-bottom: 18px;
  visibility: hidden;
}
.timer {
  @include display-flex();
  flex-direction: row;
  font-size: 14px;
  line-height: 140.62%;
  color: $gray;
  direction: ltr;
}
.show-timer {
  display: none;
}
.tCounter {
  @include display-flex();
  flex-direction: row;
  margin-right: 5px;
}
.timer-timeText {
  font-size: 14px;
  font-weight: 400;
  line-height: 140.62%;
  color: $gray;
  margin-right: 2px;
}
.code-request {
  font-weight: 500;
  font-size: 13px;
  line-height: 140.62%;
  text-align: right;
  color: $code-request;
  cursor: pointer;
  display: none;
}
.show-code-request {
  display: block;
}
.active--timer.timer-holder {
  visibility: visible;
}
.border--actice {
  border: 1px solid rgb(81, 81, 81) !important;
}
// end timer //

// textarea style //
.form__textara-item {
  height: 126px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 12px;
  padding-left: 12px;
  resize: none;
  text-align: right;
  width: 100%;
  margin-bottom: 8px;
}
.show--error .form__textara-item {
  border-color: red;
}
.comment__form-star {
  font-size: 16px;
  color: $alert-red;
}
</style>
