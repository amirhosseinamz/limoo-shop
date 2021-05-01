<template>
  <div
    class="modal modal-animation__open"
    :class="{ 'modal-animation__close': modalClose }"
    dir="rtl"
  >
    <div class="w-100 p-ticket-modal-header">
      <div class="w-100 p-modal-header-mobile">
        <div class="w-100 d-flex justify-content-center p-modal-header-icon">
          <span class="modal__close-line" @click="closeModalMobile"></span>
        </div>
        <span class="p-modal-header-top-title-mobile">
          {{ getTextByTextKey("upport_send_request") }}
        </span>
      </div>

      <div class="p-modal-header-desktop w-100 flex-column">
        <div class="w-100 p-modal-header-top-main">
          <div class="p-modal-header-top align-items-center">
            <h3 class="p-modal-header-top-title">
              {{ getTextByTextKey("support_send_request") }}
            </h3>
          </div>
          <span
            @click="closeModalMobile"
            class="p-modal-header-close-icon"
          ></span>
        </div>
        <span class="splicer-line p-modal-header-line"></span>
      </div>
    </div>

    <form @submit.prevent="" class="w-100 p-modal_wrapper align-items-start">
      <div class="p-modal-content w-100 align-items-start flex-wrap">
        <div
          :class="{
            'p-modal-show_error': showErrorValidationTicket,
          }"
          class="w-100 p-modal-ticket"
        >
          <h3 class="p-modal-wrapper-province_city-title">
            {{ getTextByTextKey("support_subject_request") }}
          </h3>
          <input
            maxlength="200"
            @keyup="updateTicket"
            v-model="formData.ticketTitle"
            type="text"
            class="p-modal-ticket-input "
          />
          <span class="pass__alert ">{{ errorValidationTopicTicket }}</span>
        </div>

        <div class="w-100 p-modal-content-items flex-wrap">
          <div
            :class="{
              'p-modal-show_error': showErrorValidationDescription,
            }"
            class="p-modal-wrapper-item "
          >
            <h3 class="p-modal-wrapper__description-title">
              {{ getTextByTextKey("support_description") }}
            </h3>
            <textarea
              @keyup="updateDescription"
              v-model="formData.question"
              maxlength="500"
              type="text"
              class="p-input-style__description"
            />
            <span class="pass__alert ">{{ validationDescriptionMsg }}</span>
          </div>
        </div>
      </div>

      <div
        class="p-profile-favorite-btns w-100 justify-content-center p-modal-btns"
      >
        <button
          @click="submitTicketAdd"
          type="button"
          name="button"
          class="btn__send-ticket"
        >
          {{ getTextByTextKey("support_send") }}
        </button>
        <button
          @click="eventCloseModal"
          type="button"
          name="button"
          class="btn__cancel-ticket"
        >
          {{ getTextByTextKey("public_cancel") }}
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    formDataOriginal: { type: [Object, Array], default: {} },
    dataEditTicket: { type: Object, default: {} },
  },
  components: {},
  data() {
    return {
      modalClose: false,
      msg: [],
      formData: {},
      showErrorValidationTicket: false,
      showErrorValidationDescription: false,
      errorValidationNumberReceiverMsg: "عدد مجاز است",
      validationDescriptionMsg: "معتبر نیست",
      errorValidationTopicTicket: "عدد مجاز است",
    };
  },

  watch: {
    dataEditTicket(data) {},
  },

  created() {
    // پس از کلیک روی ویرایش آدرس کاندیشن زیر اجرا می شود //
    if (typeof this.dataEditTicket.id != "undefined") {
      for (let key in this.dataEditTicket) {
        this.formData[key] = this.dataEditTicket[key];
      }
    } else {
      const formDataOriginal = this.formDataOriginal;
      for (let key in formDataOriginal) {
        this.formData[key] = formDataOriginal[key];
      }
    }

    // پس از اتصال به بک اند بعد از گرفتن پروفایل قسمت مورد آپدیت شود //
    this.formData.numberReceiver = this.profilePhoneNumber;
  },

  mounted() {},

  methods: {
    getTextByTextKey,
    isNotEmpty(str) {
      var pattern = /\S+/;
      return pattern.test(str); // returns a boolean
    },
    updateDescription(e, submitValue) {
      const value = e.target.value;
      if (value != "") {
        if (this.isNotEmpty(value)) {
          this.showErrorValidationDescription = false;
        }
        if (value.length == 500) {
          this.showErrorValidationDescription = true;
          this.validationDescriptionMsg = "بیش از حد مجاز";
        }
      } else {
        this.showErrorValidationDescription = false;
      }
    },
    updateTicket(e, submitValue) {
      const value = e.target.value;

      if (value != "") {
        if (this.isNotEmpty(value)) {
          this.showErrorValidationTicket = false;
        }
        if (value.length == 200) {
          this.showErrorValidationTicket = true;
          this.errorValidationTopicTicket = "بیش از حد مجاز";
        }
      } else {
        this.showErrorValidationTicket = false;
      }
    },

    closeModalMobile() {
      // this.$emit("close-modal");
      if (screen.width < 950) {
        this.modalClose = true;
        setTimeout(() => {
          this.$emit("close-modal");
        }, 280);
      } else {
        this.$emit("close-modal");
      }
    },

    closeModalDesktop() {
      this.$emit("close-modal");
    },

    checkValidFormData() {},

    checkErrorForm() {
      let checkVerifiSubmitForm = true;

      const checkEmptyForm = () => {
        if (this.formData.ticketTitle == "") {
          this.showErrorValidationTicket = true;
          this.errorValidationTopicTicket = "معتبر نیست";
        }
        if (this.formData.question == "") {
          this.showErrorValidationDescription = true;
          this.validationDescriptionMsg = "معتبر نیست";
        }
      };

      checkEmptyForm();

      // در صورت داشتن ارور اجرا می شود //
      if (
        this.showErrorValidationTicket ||
        this.showErrorValidationDescription
      ) {
        checkVerifiSubmitForm = false;
      }

      return checkVerifiSubmitForm;
    },

    submitTicketAdd() {
      const checkVerifiSubmitForm = this.checkErrorForm();

      // در صورتی که اروی برای نمایش نباشد ارسال می شود //
      if (checkVerifiSubmitForm) {
        this.$emit("submit-ticket-add", this.formData);
      }
    },
    eventCloseModal() {
      this.$emit("close-modal");
    },
  },
};
</script>
<style lang="scss" scoped>
.p-modal-header-icon {
  @include display-flex();
  height: 22px;
}
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
  &__close-line {
    display: none;
    align-self: center;
    margin-top: 24px;
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
    margin-bottom: 35px;
    width: 45%;
    label {
      font-size: 16px;
      line-height: 140.62%;
      span {
        color: $red;
        margin-right: 3px;
      }
    }
  }
  .btn__send-ticket,
  .btn__cancel-ticket {
    width: 130px;
    height: 47px;
    font-family: inherit;
    font-size: 16px;
    line-height: 140.62%;
    border: none;
    border-radius: 10px;
    color: $white;
    background-color: $yellow;
    margin-left: 24px;
    cursor: pointer;
  }
  .btn__cancel-ticket {
    color: $gray;
    background-color: $light-gray;
    margin-left: 0;
    cursor: pointer;
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
    @include display-flex();
    width: 100%;
    text-align: right;
    visibility: hidden;
  }
}
.splicer-line {
  display: none;
}
.p-modal-city_provence {
  @include display-flex();
}
.p-modal-header-close-icon {
  /* border: 1px solid red; */
  margin-top: 24px;
}
.p-modal-header-close-icon::before {
  @include font-icon__limoo();
  content: "\e807";
  color: $gray;
  font-size: 28px;
  cursor: pointer;
}
.p-modal_wrapper {
  padding-right: 99px;
  padding-left: 93px;
  @include display-flex();
  padding-top: 38px;
}
.p-modal-wrapper-item {
  width: 100%;
  height: 224px;
}

.p-modal-wrapper-province_city-title,
.p-modal-wrapper__description-title {
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
  color: $code;
  text-align: right;
}
.p-modal-wrapper__description-title {
  margin-top: 24px;
}
.p-margin-left-0 {
  margin-left: 0;
}
.p-modal-header-desktop {
  @include display-flex();
}
.p-modal-header-mobile {
  display: none;
}
.p-modal-header-top {
  flex-grow: 1;
  @include display-flex();
  padding-top: 32px;
}
.p-modal-header-icon-location {
  width: 24px;
}
.p-modal-header-top-title {
  color: $black;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 11px;
}
.p-modal-header-top-title-mobile {
  margin-top: 21px;
  margin-bottom: 16px;
  font-size: 14px;
  color: $gray;
}
.p-ticket-modal-header {
  /* border: 1px solid red; */
  height: 67px;
  padding-right: 99px;
  padding-left: 21px;
}
.p-modal-content {
  @include display-flex();
}
.p-modal-content-items {
  @include display-flex();
}
.p-modal-ticket-input {
  font-family: inherit;
  border: 1px solid $input-border;
  width: 100%;
  height: 47px;
  background-color: $gray-border;
  color: $gray;
  border-radius: 10px;
  outline: none;
  padding-right: 10px;
  padding-left: 10px;
}
.p-modal-ticket {
  height: 90px;
  /* margin-bottom: 19px; */
}
.p-modal-header-line {
  width: 85%;
  height: 1px;
  background: $gray-border;
  @include display-flex();
  /* margin-top: 2px; */
}
.p-modal-header-top-main {
  @include display-flex();
}
.p-modal-header-top {
  height: 67px;
}
.p-modal-btns {
  padding-top: 24px;
}

.p-modal-show_error .pass__alert {
  visibility: inherit;
}
.p-modal-show_error .p-input-style__description,
.p-modal-show_error .p-modal-ticket-input {
  border: solid 1px $red !important;
}
.p-input-style__description {
  @include display-flex();
  width: 100%;
  height: 161px;
  resize: none;
  border-radius: 10px;
  border: 1px solid $input-border;
  background-color: $gray-border;
  outline: none;
  padding: 5px 10px;
  font-family: inherit;
  font-size: 14px;
  color: $gray;
}

.p-modal-validation-mobile {
  display: none !important;
}
.p-input-style__default:focus,
.p-input-style__description:focus {
  border: solid 1px $black;
}

@media (max-width: 960px) {
  .p-ticket-modal-header {
    border-bottom: 1px solid $gray-border;
    height: 75px;
    padding: 0;
  }
  .modal-animation__open {
    animation: modalOpen 600ms linear;
  }
  @keyframes modalOpen {
    0% {
      transform: translate(0, 521px);
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
      transform: translate(0, 521px);
    }
  }
  .modal__close-line::before {
    @include font-icon__limoo();
    content: "\e81b";
    color: $gray;
    font-size: 28px;
  }
  .p-input-style__description {
    height: 157px;
  }
  .p-modal-wrapper-item {
    height: 220px;
  }
  .btn__send-ticket,
  .btn__cancel-ticket {
    font-size: 14px !important;
  }
  .modal {
    align-self: flex-end;
    position: absolute;
    width: 100%;
    height: 521px;
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
      margin-top: 24px;
    }
    &__title {
      display: block;
      font-size: 14px;
      line-height: 140.62%;
      color: $gray;
      margin-top: 24px;
      text-align: right;
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
      padding-right: 7px;
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
  .p-modal-header-mobile {
    display: flex;
    flex-flow: column;
  }
  .p-modal-header-desktop {
    display: none;
  }
  .p-modal-wrapper-province_city-title,
  .p-modal-wrapper__description-title {
    color: $black-topic;
  }
  .p-modal-ticket-input,
  .p-input-style__description {
    background-color: $white;
  }
  .p-input-style__default {
    width: 100%;
    height: 47px;
  }
  .p-modal_wrapper {
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 28px;
  }
  .splicer-line {
    margin-bottom: 0;
    margin-top: 20px;
  }
  .p-modal-header-icon-location {
    width: 19px;
  }
  .p-modal-header-top-title {
    font-size: 14px;
    color: $gray;
  }

  .p-modal-btns {
    padding-top: 40px;
  }
}
@media (max-width: 720px) {
}

@media (max-width: 540px) {
}

@media screen and (max-width: 485px) {
  .splicer-line {
    margin-top: 16px;
  }

  .p-input-style__default {
    height: 46px;
  }
  .modal__close-line {
    margin-top: 21px;
  }
  .p-modal-validation-mobile {
    display: flex !important;
  }
  .p-modal-validation-desktop {
    display: none !important;
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
  .modal .pass__alert {
    font-size: 11px;
  }

  .splicer-line {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .p-modal_wrapper {
    padding-top: 15px;
  }
  .p-modal-wrapper__description-title {
    margin-top: 10px;
  }

  .p-modal-wrapper-province_city-title {
    margin-bottom: 8px;
  }

  .p-modal-btns {
    padding-top: 10px;
  }
  .btn__send-ticket,
  .btn__cancel-ticket {
    width: 100px !important;
    font-size: 13px !important;
  }
}

@media screen and (max-width: 280px) {
  .p-modal-wrapper-province_city-title {
    margin-bottom: 11px;
  }

  .p-modal-wrapper__description-title {
    margin-top: 10px;
  }
  .p-modal_wrapper {
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
  }
  .splicer-line {
    margin-top: 17px;
    margin-bottom: 0px;
  }

  .p-modal-wrapper-province_city-title {
    margin-bottom: 16px;
  }
}
</style>
