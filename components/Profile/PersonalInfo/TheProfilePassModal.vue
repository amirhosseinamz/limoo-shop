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
      <div class="pass__holder">
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
      </div>
      <div class="pass__holder">
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
      </div>
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
      </div>
      <button @click="submitChangePass" class="pass__submitbtn">
        {{ getTextByTextKey("personal_info_submit_change") }}
      </button>
    </form>
  </div>
</template>
<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  name: "TheProfilePassModal",
  data() {
    return {
      modalClose: false,
      oldPassType: "password",
      newPassType: "password",
      newPassRepeatType: "password",
      msg: [],
      oldPassValidation: "",
      newPassVlidation: "",
      repeatNewPassVlidation: "",
      oldPassInput: false,
      newPassInput: false,
      repeatnewPassInput: false,
    };
  },
  watch: {
    oldPassValidation(value) {
      this.oldPassValidation = value;
      this.validateOldpass(value);
    },
    newPassVlidation(value) {
      this.newPassVlidation = value;
      this.validateNewPass(value);
    },
    repeatNewPassVlidation(value) {
      this.repeatNewPassVlidation = value;
      this.validateRepeatNewPass(value);
    },
  },
  methods: {
    getTextByTextKey,
    oldPassInputActive() {
      this.oldPassInput = true;
      this.newPassInput = false;
      this.repeatnewPassInput = false;
    },
    newPassInputActive() {
      this.newPassInput = true;
      this.oldPassInput = false;
      this.repeatnewPassInput = false;
    },
    repeatnewPassInputActive() {
      this.repeatnewPassInput = true;
      this.newPassInput = false;
      this.oldPassInput = false;
    },
    closeModalMobile() {
      this.modalClose = true;
      setTimeout(() => {
        this.$parent.passChange();
      }, 280);
    },
    closeModalDesktop() {
      this.$parent.passChange();
    },
    switchVisibility(type) {
      if (type == "Oldpass") {
        this.oldPassType =
          this.oldPassType === "password" ? "text" : "password";
      } else if (type == "NewPass") {
        this.newPassType =
          this.newPassType === "password" ? "text" : "password";
      } else if (type == "NewPassRepeat") {
        this.newPassRepeatType =
          this.newPassRepeatType === "password" ? "text" : "password";
      }
    },
    // "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
    validateOldpass(value) {
      // for oldPass we must get response from back-end
      // if (value.length == 0) {
      //     this.msg["oldPassValidation"] = "";
      // } else if (value.length > 32) {
      //     this.msg["oldPassValidation"] =
      //         "رمز عبور نمی تواند بیش از 32 کاراکتر باشد!";
      // } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
      //     this.msg["oldPassValidation"] =
      //         "رمز عبور باید شامل حداقل 8 (رقم و کاراکتر) باشد!";
      // } else {
      //     this.msg["oldPassValidation"] = "";
      // }
    },
    validateNewPass(value) {
      if (value.length == 0) {
        this.msg["newPassVlidation"] = "";
      } else if (value.length > 32) {
        this.msg["newPassVlidation"] =
          "رمز عبور نمی تواند بیش از 32 کاراکتر باشد!";
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
        this.msg["newPassVlidation"] =
          "رمز عبور باید شامل حداقل 8 (رقم و کاراکتر) باشد!";
      } else {
        this.msg["newPassVlidation"] = "";
      }
    },
    validateRepeatNewPass(value) {
      let userNewPass = this.newPassVlidation;
      // console.log("userPass", userPass);
      // console.log("repeat", value);
      if (value.length == 0) {
        this.msg["repeatNewPassVlidation"] = "";
      } else if (value.length > 32) {
        this.msg["repeatNewPassVlidation"] =
          "رمز عبور نمی تواند بیش از 32 کاراکتر باشد!";
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
        this.msg["repeatNewPassVlidation"] =
          "رمز عبور باید شامل حداقل 8 (رقم و کاراکتر) باشد!";
      } else if (!(userNewPass === value)) {
        this.msg["repeatNewPassVlidation"] =
          "لطفا رمز جدید را بصورت صحیح وارد کنید.";
      } else {
        this.msg["repeatNewPassVlidation"] = "";
      }
    },
    submitChangePass() {
      this.oldPassInput = false;
      this.newPassInput = false;
      this.repeatnewPassInput = false;
      let userPass = this.newPassVlidation;
      let repeatUserPass = this.repeatNewPassVlidation;
      if (
        userPass === repeatUserPass &&
        userPass != "" &&
        repeatUserPass != ""
      ) {
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
  }
  .splicer-line {
    margin-bottom: 17px;
  }
}
</style>
