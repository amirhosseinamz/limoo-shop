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
      <!-- <div class="pass__holder">
        <label for="oldPassValidation">
          {{ getTextByTextKey("personal_info_old_password") }}
          <span>*</span></label
        >
        <div
          :style="
            oldPassInput
              ? 'border:1px solid #515151'
              : 'border:1px solid #bdbdbd'
          "
          @click="oldPassInputActive"
          class="pass__old"
        >
          <input
            :type="oldPassType"
            id="oldPassValidation"
            v-model="oldPassValidation"
          />
          <button
            @click="switchVisibility('Oldpass')"
            type="button"
            class="clear-input"
            aria-label="Close"
          >
            <span
              :style="
                oldPassType === 'password' ? 'display: block' : 'display: none'
              "
              class="signin__close-eye"
            ></span>
            <span
              :style="
                oldPassType === 'text' ? 'display: block' : 'display: none'
              "
              class="signin__open-eye"
            ></span>
          </button>
        </div>
        <span class="pass__alert" v-if="msg.oldPassValidation">{{
          msg.oldPassValidation
        }}</span>
      </div> -->

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
        :check-password="true"
        :form-data="formData"
        tag-html="input"
        timer-start=""
        type-input="text"
        name-input="oldPass"
        label-text="رمز عبور قدیم:"
      >
      </text-input>

      <!-- <div class="pass__holder">
        <label for="newPassVlidation">
          {{ getTextByTextKey("personal_info_new_password") }}
          <span>*</span></label
        >
        <div
          :style="
            newPassInput
              ? 'border:1px solid #515151'
              : 'border:1px solid #bdbdbd'
          "
          @click="newPassInputActive"
          class="pass__new"
        >
          <input
            :type="newPassType"
            id="newPassVlidation"
            v-model="newPassVlidation"
          />
          <button
            @click="switchVisibility('NewPass')"
            type="button"
            class="clear-input"
            aria-label="Close"
          >
            <span
              :style="
                newPassType === 'password' ? 'display: block' : 'display: none'
              "
              class="signin__close-eye"
            ></span>
            <span
              :style="
                newPassType === 'text' ? 'display: block' : 'display: none'
              "
              class="signin__open-eye"
            ></span>
          </button>
        </div>
        <span class="pass__alert" v-if="msg.newPassVlidation">{{
          msg.newPassVlidation
        }}</span>
      </div> -->

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
        :form-data="formData"
        :check-password="true"
        accessStyleParentInToChildNameId="address__form--data"
        tag-html="input"
        timer-start=""
        type-input="text"
        name-input="newPass"
        label-text="رمز عبور جدید:"
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
        :check-empty-submit="true"
        :check-required="true"
        :check-typing-submit="true"
        :use-timer="false"
        :show-icon-star="true"
        :form-data="formData"
        :check-password="true"
        accessStyleParentInToChildNameId="address__form--data"
        tag-html="input"
        timer-start=""
        type-input="text"
        name-input="repeatNewPass"
        label-text="تکرار رمز عبور جدید"
      >
      </text-input>

      <!-- 
      <div class="pass__holder pass__repeat">
        <label for="repeatNewPassVlidation">
          {{ getTextByTextKey("personal_info_repeat_password") }}
          <span>*</span></label
        >
        <div
          :style="
            repeatnewPassInput
              ? 'border:1px solid #515151'
              : 'border:1px solid #bdbdbd'
          "
          @click="repeatnewPassInputActive"
          class="pass__new-repeat"
        >
          <input
            :type="newPassRepeatType"
            id="repeatNewPassVlidation"
            v-model="repeatNewPassVlidation"
          />
          <button
            @click="switchVisibility('NewPassRepeat')"
            type="button"
            class="clear-input"
            aria-label="Close"
          >
            <span
              :style="
                newPassRepeatType === 'password'
                  ? 'display: block'
                  : 'display: none'
              "
              class="signin__close-eye"
            ></span>
            <span
              :style="
                newPassRepeatType === 'text'
                  ? 'display: block'
                  : 'display: none'
              "
              class="signin__open-eye"
            ></span>
          </button>
        </div>
        <span class="pass__alert" v-if="msg.repeatNewPassVlidation">{{
          msg.repeatNewPassVlidation
        }}</span>
      </div> -->

      <button @click="submitChangePass" class="pass__submitbtn">
        {{ getTextByTextKey("personal_info_submit_change") }}
      </button>
    </form>
  </div>
</template>
<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import textInput from "~/modules/textInput";

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
  },
};
</script>
<style lang="scss" scoped>
.modal {
  @include display-flex();
  flex-direction: column;
  align-items: center;
  width: 642px;
  height: 524px;
  background: $white;
  box-shadow: 0px 8px 16px $box__shadow;
  border-radius: 15px;
  &__close-cross {
    align-self: flex-end;
    width: 30px;
    height: 30px;
    margin-top: 24px;
    margin-left: 24px;
    cursor: pointer;
  }
  &__close-cross::before {
    content: "\e807";
    @include font-icon__limoo();
    font-size: 28px;
    color: $gray;
  }
  &__close-line {
    display: none;
    align-self: center;
  }
  &__close-line::before {
    content: "\e81b";
    @include font-icon__limoo();
    font-size: 28px;
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
    height: 88px;
    width: 390px;
    margin-bottom: 35px;
    label {
      font-size: 16px;
      line-height: 140.62%;
      span {
        color: $red;
        margin-right: 3px;
      }
    }
  }
  &::v-deep {
    .pass__repeat {
      height: 88px;
      width: 390px;
      margin-bottom: 35px;
    }
  }
  .pass__repeat {
    margin-bottom: 42px;
  }
  .pass__old,
  .pass__new,
  .pass__new-repeat {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    flex-grow: 1;
    background: $white;
    border: 1px solid $input-border;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px $gray-border;
    border-radius: 15px;
    margin-top: 15px;
  }
  /* ======================================= */

  .signin__close-eye::before {
    content: "\e810";
    @include font-icon__limoo();
    font-size: 17px;
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
    font-size: 17px;
    color: $gray;
    vertical-align: middle;
  }
  .pass__old > input,
  .pass__new > input,
  .pass__new-repeat > input {
    height: 52px;
    flex-grow: 1;
    background: transparent;
    /* border: 1px solid red; */
    padding: 16px;
    line-height: 140.62%;
    border: none;
    border-radius: 15px;
    font-family: inherit;
    outline: none;
    /* letter-spacing: 5px; */
    font-size: 16px;
  }
  .pass__submitbtn {
    align-self: center;
    margin-bottom: 40px;
    height: 57px;
    width: 270px;
    background: $btn__green;
    color: $white;
    font-size: 18px;
    font-family: inherit;
    line-height: 140.62%;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    border: none;
  }
  .pass__alert {
    margin-top: 4px;
    color: $alert-red;
    text-align: right;
    font-size: 14px;
    line-height: 140.62%;
  }
}
.splicer-line {
  display: none;
}

.modal::v-deep {
  .txt-content {
    margin-bottom: 16px;
    line-height: 140.62%;
  }
  .input-holder {
    box-shadow: 0px 4px 4px $flash_white;
    height: 52px;
    background: $white;
    border-radius: 15px;
    margin-bottom: 4px;
  }
  .form__item--error {
    margin-bottom: 0;
    font-size: 14px;
  }
  .signup-input {
    color: $gray;
    font-size: 16px;
    padding: 16px;
  }
  .signin__close-eye::before {
    font-size: 16px;
  }
  .signin-eye::before {
    font-size: 16px;
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

@media (max-width: 960px) {
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
    height: 570px;
    background: $white;
    box-shadow: 0px 20px 24px $overlay__profile-mobile;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    &__close-cross {
      display: none;
    }
    &__close-line {
      display: block;
      align-self: center;
      margin-top: 20px;
      line-height: 0px;
    }
    &__title {
      display: block;
      font-size: 14px;
      line-height: 140.62%;
      color: $gray;
      margin-top: 20px;
      text-align: center;
    }
    /* form {
            margin-top: 5px;
        } */
    .pass__holder {
      height: 80px;
      width: 84vw;
      margin-bottom: 35px;
      label {
        font-size: 14px;
      }
    }

    &::v-deep {
      .pass__repeat {
        height: 80px;
        width: 84vw;
        margin-bottom: 35px;
      }
      .txt-content {
        font-size: 14px;
      }
      .input-holder {
        height: 46px;
      }
      .form__item--error {
        font-size: 13px;
      }
    }

    .pass__old,
    .pass__new,
    .pass__new-repeat {
      @include display-flex();
      height: 46px;
    }
    .pass__old > input,
    .pass__new > input,
    .pass__new-repeat > input {
      height: 46px;
      width: 200px;
    }
    .pass__submitbtn {
      width: 91vw;
      margin-bottom: 47px;
    }
    .pass__alert {
      font-size: 13px;
    }
  }
  .clear-input > img {
    width: 17px;
    height: 15px;
  }
  .splicer-line {
    display: block;
    width: 95%;
    border: none;
    margin: 16px 5px;
    border-top: 1px solid $gray-border;
    margin-bottom: 35px;
  }
}
@media screen and (max-width: 320px) {
  .modal-animation__open {
    animation: modalOpen 600ms linear;
  }
  @keyframes modalOpen {
    0% {
      transform: translate(0, 470px);
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
      transform: translate(0, 470px);
    }
  }
  .modal {
    height: 470px;
    &__close-line {
      margin-top: 20px;
    }
    &__title {
      margin-top: 20px;
    }
    .pass__holder {
      height: 70px;
      width: 84vw;
      margin-bottom: 25px;
      label {
        font-size: 13px;
      }
    }
    .pass__old,
    .pass__new,
    .pass__new-repeat {
      @include display-flex();
      height: 40px;
    }
    .pass__old > input,
    .pass__new > input,
    .pass__new-repeat > input {
      height: 40px;
      width: 200px;
    }
    .pass__submitbtn {
      width: 91vw;
      margin-bottom: 37px;
      margin-top: 15px;
    }
    &::v-deep {
      .input-holder {
        height: 40px;
      }
      .pass__repeat {
        height: 70px;
        width: 84vw;
        margin-bottom: 25px;
      }
      .txt-content {
        font-size: 13px;
      }
    }
  }
  .splicer-line {
    margin-bottom: 17px;
  }
}
</style>
