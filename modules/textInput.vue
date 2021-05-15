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

    <div
      v-if="state == 'standard'"
      class="search-section__items"
      :class="{ 'show--error': showError }"
    >
      <input
        class="search-section__input"
        :placeholder="placeholderText"
        @keyup="typingInput"
        type="text"
        dir="rtl"
        :maxlength="maxlength"
      />
      <span v-if="checkNumber" class="search__section--error ">{{
        msgError.notValidNumber
      }}</span>
      <span v-else class="search__section--error ">{{
        msgError.notValidMsg
      }}</span>
    </div>
  </div>
</template>

<script>
import checkPersianPhoneNumber from "~/modules/checkPersianPhoneNumber";

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
  },

  data() {
    return {
      showError: false,
    };
  },

  computed: {},

  watch: {},

  mounted() {},

  methods: {
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
      } else {
        this.showError = false;
      }
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
.show--error {
  border-color: $red;
}
</style>
