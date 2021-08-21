<template>
  <base-modal
    class="modal-container"
    :mode="modalMode"
    modal-class="modal"
    @close-modal="closeModal"
  >
    <div class="w-100 p-ticket-modal-header">
      <div class="w-100 p-modal-header-mobile">
        <div class="w-100 d-flex justify-content-center p-modal-header-icon">
          <span class="modal__close-line" @click="closeModal"></span>
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
          <base-button
            @button-clicked="closeModal"
            classes="p-modal-header-close-icon"
            base-color="white"
            mode="close"></base-button>
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
          <base-button
            @button-clicked="submitTicketAdd"
            classes="btn__send-ticket"
            base-color="yellow"
            no-box-shadow
          >
          {{ getTextByTextKey("support_send") }}
        </base-button>
          <base-button
            @button-clicked="eventCloseModal"
            classes="btn__cancel-ticket"
            no-box-shadow
            base-color="light-gray"
          >
          {{ getTextByTextKey("public_cancel") }}
        </base-button>
      </div>
    </form>
  </base-modal>
</template>
<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    dataEditTicket: { type: Object, default: {} },
    modalMode: { type: String, require }
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
  computed: {
    formDataOriginal() {
      return this.$store.getters["profile/ticket/ticket/formData"];
    }
  },

  watch: {
    dataEditTicket(data) {},
  },

  created() {
    // پس از کلیک روی ویرایش آدرس کاندیشن زیر اجرا می شود //
    if (typeof this.dataEditTicket.id !== "undefined") {
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

  methods: {
    getTextByTextKey,
    isNotEmpty(str) {
      var pattern = /\S+/;
      return pattern.test(str); // returns a boolean
    },
    updateDescription(e, submitValue) {
      const value = e.target.value;
      if (value !== "") {
        if (this.isNotEmpty(value)) {
          this.showErrorValidationDescription = false;
        }
        if (value.length === 500) {
          this.showErrorValidationDescription = true;
          this.validationDescriptionMsg = "بیش از حد مجاز";
        }
      } else {
        this.showErrorValidationDescription = false;
      }
    },
    updateTicket(e, submitValue) {
      const value = e.target.value;

      if (value !== "") {
        if (this.isNotEmpty(value)) {
          this.showErrorValidationTicket = false;
        }
        if (value.length === 200) {
          this.showErrorValidationTicket = true;
          this.errorValidationTopicTicket = "بیش از حد مجاز";
        }
      } else {
        this.showErrorValidationTicket = false;
      }
    },

    closeModal() {
        this.$emit("close-modal");
    },


    checkValidFormData() {},

    checkErrorForm() {
      let checkVerifiSubmitForm = true;

      const checkEmptyForm = () => {
        if (this.formData.ticketTitle === "") {
          this.showErrorValidationTicket = true;
          this.errorValidationTopicTicket = "معتبر نیست";
        }
        if (this.formData.question === "") {
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
.modal-container::v-deep {
  .modal {
    @include display-flex();
    flex-direction: column;
    align-items: center;
    width: 642px;
    height: 524px;
    background: $white;
    box-shadow: 0 8px 16px $box__shadow;
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
      margin-left: 1.5rem;
    }
    .btn__cancel-ticket {
      margin-left: 0;
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

    .p-modal-header-icon {
      @include display-flex();
      height: 22px;
    }
    .splicer-line {
      display: none;
    }
    .p-modal-city_provence {
      @include display-flex();
    }
    .p-modal-header-close-icon {
      margin-top: 1.5rem;
    }
    .p-modal-header-close-icon::before {
      font-size: 28px;
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
  }
}


@media (max-width: 960px) {
  .modal-container::v-deep {
    .modal {
      width: 100%;
      height: toRem(521);
      background: $white;
      box-shadow: 0 toRem(20) toRem(24) $overlay__profile-mobile;
      border-radius: toRem(30) toRem(30) 0 0;

      &.phone {
        .phone-line-handler {
          span {
            height: toRem(4);
            border-radius: toRem(5);
          }
        }
      }

      &__close-cross {
        display: none;
      }
      &__close-line {
        display: block;
        align-self: center;
        margin-top: toRem(24);
      }
      &__title {
        display: block;
        font-size: toRem(14);
        line-height: 140.62%;
        color: $gray;
        margin-top: toRem(24);
        text-align: right;
      }

      .pass__holder {
        height: toRem(80);
        width: 84vw;
        margin-bottom: toRem(35);
        label {
          font-size: toRem(14);
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
        padding-right: toRem(7);
      }

      .p-ticket-modal-header {
        border-bottom: toRem(1) solid $gray-border;
        height: toRem(48);
        padding: 0;
      }
      .p-input-style__description {
        height: toRem(157);
      }
      .p-modal-wrapper-item {
        height: toRem(220);
      }
      .btn__send-ticket,
      .btn__cancel-ticket {
        font-size: toRem(14) !important;
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
        height: toRem(47);
      }
      .p-modal_wrapper {
        padding-right: toRem(30);
        padding-left: toRem(30);
        padding-top: toRem(28);
      }
      .splicer-line {
        margin-bottom: 0;
        margin-top: toRem(20);
      }
      .p-modal-header-icon-location {
        width: toRem(19);
      }
      .p-modal-header-top-title {
        font-size: toRem(14);
        color: $gray;
      }

      .p-modal-btns {
        padding-top: toRem(40);
      }
    }
  }


}
@media (max-width: 720px) {
}

@media (max-width: 540px) {
}

@media screen and (max-width: 485px) {
  .modal-container::v-deep {
    .modal {
      .splicer-line {
        margin-top: toRem(16);
      }

      .p-input-style__default {
        height: toRem(46);
      }
      .modal__close-line {
        margin-top: toRem(21);
      }
      .p-modal-validation-mobile {
        display: flex !important;
      }
      .p-modal-validation-desktop {
        display: none !important;
      }
    }
  }

}

@media screen and (max-width: 320px) {
  .modal-container::v-deep {
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
      .splicer-line {
        margin-bottom: toRem(17);
      }
      .modal .pass__alert {
        font-size: toRem(11);
      }

      .splicer-line {
        margin-bottom: toRem(10);
        margin-top: toRem(10);
      }
      .p-modal_wrapper {
        padding-top: toRem(15);
      }
      .p-modal-wrapper__description-title {
        margin-top: toRem(10);
      }

      .p-modal-wrapper-province_city-title {
        margin-bottom: toRem(8);
      }

      .p-modal-btns {
        padding-top: toRem(10);
      }
      .btn__send-ticket,
      .btn__cancel-ticket {
        width: toRem(100) !important;
        font-size: toRem(13) !important;
      }
    }
  }
}

@media screen and (max-width: 280px) {
  .modal-container::v-deep {
    .modal {
      .p-modal-wrapper-province_city-title {
        margin-bottom: toRem(11);
      }

      .p-modal-wrapper__description-title {
        margin-top: toRem(10);
      }
      .p-modal_wrapper {
        padding-top: toRem(10);
        padding-right: toRem(10);
        padding-left: toRem(10);
      }
      .splicer-line {
        margin-top: toRem(17);
        margin-bottom: 0;
      }

      .p-modal-wrapper-province_city-title {
        margin-bottom: toRem(16);
      }
    }
  }

}
</style>
