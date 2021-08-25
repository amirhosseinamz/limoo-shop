<template>
  <div
    class="modal modal-animation__open"
    :class="{ 'modal-animation__close': modalClose }"
    dir="rtl"
  >
    <span @click="closeModalDesktop" class="modal__close-cross"></span>
    <span @click="closeModalMobile" class="modal__close-line"></span>

    <span class="modal__title">
      {{ getTextByTextKey("personal_info_change_password") }}
    </span>
    <hr class="splicer-line" />
    <form @submit.prevent="">
      <text-input
        class="w-100  pass__repeat"
        labelNameClass=""
        inputNameClass="w-100"
        state="authInput"
        maxlength="100"
        function-max-len="greaterThan"
        placeholderText=""
        :msgError="{
          notValidMsg: 'رمز عبور باید شامل حداقل 8 (رقم و کاراکتر) باشد!',
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
        :check-required="true"
        :check-typing-submit="true"
        :use-timer="false"
        :show-icon-star="true"
        :state-passowrd="true"
        :form-data="formData"
        tag-html="input"
        timer-start=""
        type-input="text"
        name-input="oldPass"
        label-text="رمز عبور قدیم:"
      >
      </text-input>

      <text-input
        class="w-100  pass__repeat"
        labelNameClass=""
        inputNameClass="w-100"
        state="authInput"
        maxlength="100"
        function-max-len="greaterThan"
        placeholderText=""
        :msgError="{
          notValidMsg: 'رمز عبور باید شامل حداقل 8 (رقم و کاراکتر) باشد!',
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
        :check-typeing-several-password="checkTypeingSeveralPassword"
        :check-empty-submit="true"
        :check-required="true"
        :check-typing-submit="true"
        :use-timer="false"
        :show-icon-star="true"
        :form-data="formData"
        :state-password="true"
        accessStyleParentInToChildNameId="address__form--data"
        tag-html="input"
        timer-start=""
        type-input="text"
        name-input="newPass"
        label-text="رمز عبور جدید:"
        @typeing="typeing"
      >
      </text-input>

      <text-input
        class="w-100  pass__repeat"
        labelNameClass=""
        inputNameClass="w-100"
        state="authInput"
        maxlength="32"
        function-max-len="greaterThan"
        placeholderText=""
        :msgError="{
          notValidMsg: 'رمز عبور باید شامل حداقل 8 (رقم و کاراکتر) باشد!',
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
        :check-typeing-several-password="checkTypeingSeveralPassword"
        :check-empty-submit="true"
        :check-required="true"
        :check-typing-submit="true"
        :use-timer="false"
        :show-icon-star="true"
        :form-data="formData"
        :state-password="true"
        accessStyleParentInToChildNameId="address__form--data"
        tag-html="input"
        timer-start=""
        type-input="text"
        name-input="repeatNewPass"
        label-text="تکرار رمز عبور جدید"
        @typeing="typeing"
      >
      </text-input>

      <button @click="submitChangePass" class="pass__submitbtn">
        {{ getTextByTextKey("personal_info_submit_change") }}
      </button>
    </form>
  </div>
</template>
<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import textInput from "~/components/UI/textInput";

export default {
  name: "TheProfilePassModal",
  components: {
    textInput,
  },
  data() {
    return {
      modalClose: false,
      formData: {
        repeatNewPass: "",
        oldPass: "",
        newPass: "",
      },
      checkInitialValidation: 0,
      checkTypeingSeveralPassword: 0,
    };
  },
  watch: {},
  methods: {
    getTextByTextKey,
    closeModalMobile() {
      this.modalClose = true;
      setTimeout(() => {
        this.$parent.passChange();
      }, 280);
    },
    closeModalDesktop() {
      this.$parent.passChange();
    },
    submitChangePass() {
      this.checkInitialValidation++;
      // در صورت نداشت ارور فورم مورد نظر ارسال می شود //
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

        console.log(formData, "formData");

        if (checkSubmitForm === "success") {
          // later we talk to back end
          if (screen.width < 950) {
            this.modalClose = true;
            setTimeout(() => {
              this.$parent.passChange();
            }, 280);
          } else {
            this.$parent.passChange();
          }
        }
      });
    },

    typeing(data) {
      this.checkTypeingSeveralPassword++;
    },
  },
};
</script>
<style lang="scss" scoped>
.modal {
  @include display-flex();
  flex-direction: column;
  align-items: center;
  width: toRem(642);
  height: toRem(524);
  background: $white;
  box-shadow: 0 toRem(8) toRem(16) $box__shadow;
  border-radius: toRem(15);
  &__close-cross {
    align-self: flex-end;
    width: toRem(30);
    height: toRem(30);
    margin-top: toRem(24);
    margin-left: toRem(24);
    cursor: pointer;
  }
  &__close-cross::before {
    content: "\e807";
    @include font-icon__limoo();
    font-size: toRem(28);
    color: $gray;
  }
  &__close-line {
    display: none;
    align-self: center;
  }
  &__close-line::before {
    content: "\e81b";
    @include font-icon__limoo();
    font-size: toRem(28);
    color: $gray;
  }
  &__title {
    display: none;
  }
  form {
    @include display-flex();
    flex-direction: column;
    align-items: center;
  }
  .pass__holder {
    height: toRem(88);
    width: toRem(390);
    margin-bottom: toRem(35);
    label {
      font-size: toRem(16);
      line-height: 140.62%;
      span {
        color: $red;
        margin-right: toRem(3);
      }
    }
  }
  &::v-deep {
    .pass__repeat {
      height: toRem(88);
      width: toRem(390);
      margin-bottom: toRem(35);
    }
  }
  .pass__repeat {
    margin-bottom: toRem(42);
  }
  .pass__old,
  .pass__new,
  .pass__new-repeat {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: toRem(52);
    flex-grow: 1;
    background: $white;
    border: toRem(1) solid $input-border;
    box-sizing: border-box;
    box-shadow: 0 toRem(4) toRem(4) $gray-border;
    border-radius: toRem(15);
    margin-top: toRem(15);
  }
  /* ======================================= */

  .signin__close-eye::before {
    content: "\e810";
    @include font-icon__limoo();
    font-size: toRem(17);
    color: $gray;
    vertical-align: middle;
  }
  .signin__close-eye,
  .signin__open-eye {
    margin-bottom: toRem(2);
  }
  .signin__open-eye::before {
    content: "\e811";
    @include font-icon__limoo();
    font-size: toRem(17);
    color: $gray;
    vertical-align: middle;
  }
  .pass__old > input,
  .pass__new > input,
  .pass__new-repeat > input {
    height: toRem(52);
    flex-grow: 1;
    background: transparent;
    padding: 16px;
    line-height: 140.62%;
    border: none;
    border-radius: toRem(15);
    font-family: inherit;
    outline: none;
    font-size: toRem(16);
  }
  .pass__submitbtn {
    align-self: center;
    margin-bottom: toRem(40);
    height: toRem(57);
    width: toRem(270);
    background: $btn__green;
    color: $white;
    font-size: toRem(18);
    font-family: inherit;
    line-height: 140.62%;
    text-align: center;
    border-radius: toRem(10);
    cursor: pointer;
    outline: none;
    border: none;
  }
  .pass__alert {
    margin-top: toRem(4);
    color: $alert-red;
    text-align: right;
    font-size: toRem(14);
    line-height: 140.62%;
  }
}
.splicer-line {
  display: none;
}

.modal::v-deep {
  .txt-content {
    margin-bottom: toRem(16);
    line-height: 140.62%;
  }
  .input-holder {
    box-shadow: 0 toRem(4) toRem(4) $flash_white;
    height: toRem(52);
    background: $white;
    border-radius: toRem(15);
    margin-bottom: toRem(4);
  }
  .form__item--error {
    margin-bottom: 0;
    font-size: toRem(14);
  }
  .signup-input {
    color: $gray;
    font-size: toRem(16);
    padding: toRem(16);
  }
  .signin__close-eye::before {
    font-size: toRem(16);
  }
  .signin-eye::before {
    font-size: toRem(16);
  }
  .signin-eye {
    margin-bottom: 0;
  }
  .form__item--error {
    display: none;
    width: 100%;
    justify-content: flex-end;
  }
  .show--error .form__item--error {
    display: flex;
  }
  .card-body {
    height: 100%;
  }
}

@include md {
  .modal-animation__open {
    animation: modalOpen 600ms linear;
  }
  @keyframes modalOpen {
    0% {
      transform: translate(0, 579px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  .modal-animation__close {
    animation: modalClose 600ms linear;
  }
  @keyframes modalClose {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 579px);
    }
  }
  .modal {
    align-self: flex-end;
    position: absolute;
    width: 100%;
    height: toRem(570);
    background: $white;
    box-shadow: 0 toRem(20) toRem(24) $overlay__profile-mobile;
    border-radius: toRem(30) toRem(30) 0 0;

    &__close-cross {
      display: none;
    }
    &__close-line {
      display: block;
      align-self: center;
      margin-top: toRem(20);
      line-height: 0;
    }
    &__title {
      display: block;
      font-size: toRem(14);
      line-height: 140.62%;
      color: $gray;
      margin-top: toRem(20);
      text-align: center;
    }

    .pass__holder {
      height: toRem(80);
      width: 84vw;
      margin-bottom: toRem(35);
      label {
        font-size: toRem(14);
      }
    }

    &::v-deep {
      .pass__repeat {
        height: toRem(80);
        width: 84vw;
        margin-bottom: toRem(35);
      }
      .txt-content {
        font-size: toRem(14);
      }
      .input-holder {
        height: toRem(46);
      }
      .form__item--error {
        font-size: toRem(13);
      }
    }

    .pass__old,
    .pass__new,
    .pass__new-repeat {
      @include display-flex();
      height: toRem(46);
    }
    .pass__old > input,
    .pass__new > input,
    .pass__new-repeat > input {
      height: toRem(46);
      width: toRem(200);
    }
    .pass__submitbtn {
      width: 91vw;
      margin-bottom: toRem(47);
    }
    .pass__alert {
      font-size: toRem(13);
    }
  }
  .clear-input > img {
    width: toRem(17);
    height: toRem(15);
  }
  .splicer-line {
    display: block;
    width: 95%;
    border: none;
    margin: toRem(16) toRem(5);
    border-top: toRem(1) solid $gray-border;
    margin-bottom: toRem(35);
  }
}
@include xxs {
  .modal-animation__open {
    animation: modalOpen 600ms linear;
  }
  @keyframes modalOpen {
    0% {
      transform: translate(0, toRem(470));
    }
    100% {
      transform: translate(0, 0);
    }
  }
  .modal-animation__close {
    animation: modalClose 600ms linear;
  }
  @keyframes modalClose {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, toRem(470));
    }
  }
  .modal {
    height: toRem(470);
    &__close-line {
      margin-top: toRem(20);
    }
    &__title {
      margin-top: toRem(20);
    }
    .pass__holder {
      height: toRem(70);
      width: 84vw;
      margin-bottom: toRem(25);
      label {
        font-size: toRem(13);
      }
    }
    .pass__old,
    .pass__new,
    .pass__new-repeat {
      @include display-flex();
      height: toRem(40);
    }
    .pass__old > input,
    .pass__new > input,
    .pass__new-repeat > input {
      height: toRem(40);
      width: toRem(200);
    }
    .pass__submitbtn {
      width: 91vw;
      margin-bottom: toRem(37);
      margin-top: toRem(15);
    }
    &::v-deep {
      .input-holder {
        height: toRem(40);
      }
      .pass__repeat {
        height: toRem(70);
        width: 84vw;
        margin-bottom: toRem(25);
      }
      .txt-content {
        font-size: toRem(13);
      }
    }
  }
  .splicer-line {
    margin-bottom: toRem(17);
  }
}
</style>
