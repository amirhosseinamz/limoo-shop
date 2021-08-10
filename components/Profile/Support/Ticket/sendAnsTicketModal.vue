<template>
  <base-modal
    class="modal-container"
    :mode="modalMode"
    modal-class="modal"
    @close-modal="closeModal"
  >
    <div class="w-100 p-ticket-modal-header">
      <div class="w-100 p-modal-header-mobile">
        <span class="p-modal-header-top-title-mobile">
          {{ getTextByTextKey("support_send_request") }}
        </span>
      </div>
      <div class="p-modal-header-desktop w-100 flex-column">
        <div class="w-100 p-modal-header-top-main">
          <div class="p-modal-header-top align-items-center">
            <h3 class="p-modal-header-top-title">
              {{ getTextByTextKey("support_your_answer") }}
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
        <div class="w-100 p-modal-content-items flex-wrap">
          <div
            :class="{
              'p-modal-show_error': showErrorValidationUserAnswer,
            }"
            class="p-modal-wrapper-item "
          >
            <h3 class="p-modal-wrapper__description-title">
              {{ getTextByTextKey("support_your_answer") }}
            </h3>
            <textarea
              @keyup="updateUserAnswer"
              v-model="formData.userAnswer"
              maxlength="500"
              type="text"
              class="p-input-style__description"
            />
            <span class="pass__alert ">{{ validationUserAnswerMsg }}</span>
          </div>
        </div>
      </div>

      <div
        class="p-profile-favorite-btns w-100 justify-content-center p-modal-btns"
      >
        <base-button
          @button-clicked="submitUserAnswer"
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
    formDataOriginal: { type: [Object, Array], default: {} },
    dataEditTicket: { type: Object, default: {} },
    showAnsModal: { type: Boolean, require: true }
  },
  components: {},
  data() {
    return {
      modalClose: false,
      msg: [],
      formData: {},
      showErrorValidationUserAnswer: false,
      validationUserAnswerMsg: "معتبر نیست",
      windowWidth: 0
    };
  },
  computed: {
    modalMode() {
      if (this.windowWidth > 960) {
        return "form";
      } else {
        return "phone";
      }
    },
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
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  methods: {
    getTextByTextKey,
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    setDefaultValidationText() {
      this.validationUserAnswerMsg = this.getTextByTextKey("address_not_valid");
    },

    isNotEmpty(str) {
      var pattern = /\S+/;
      return pattern.test(str); // returns a boolean
    },

    updateUserAnswer(e, submitValue) {
      const value = e.target.value;
      if (value != "") {
        if (this.isNotEmpty(value)) {
          this.showErrorValidationUserAnswer = false;
        }
        if (value.length == 500) {
          this.showErrorValidationUserAnswer = true;
          this.validationUserAnswerMsg = this.getTextByTextKey(
            "address_validation_over_limit"
          );
        }
      } else {
        this.showErrorValidationUserAnswer = false;
      }
    },

    closeModal() {
        this.$emit("close-modal");
    },

    checkValidFormData() {},

    checkErrorForm() {
      let checkVerifiSubmitForm = true;

      const checkEmptyForm = () => {
        if (this.formData.userAnswer == "") {
          this.showErrorValidationUserAnswer = true;
          this.validationUserAnswerMsg = this.getTextByTextKey(
            "address_not_valid"
          );
        }
      };

      checkEmptyForm();

      // در صورت داشتن ارور اجرا می شود //
      if (this.showErrorValidationUserAnswer) {
        checkVerifiSubmitForm = false;
      }

      return checkVerifiSubmitForm;
    },

    submitUserAnswer() {
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
    width: toRem(642);
    height: toRem(524);
    background: $white;
    box-shadow: 0 toRem(8) toRem(16) $box__shadow;
    border-radius: toRem(15);
    &__close-line {
      display: none;
      align-self: center;
      margin-top: toRem(24);
    }

    form {
      @include display-flex();
      flex-direction: column;
      align-items: center;
    }
    .btn__send-ticket,
    .btn__cancel-ticket {
      width: toRem(130);
      height: toRem(47);
      font-family: inherit;
      margin-left: toRem(24);
    }
    .btn__cancel-ticket {
      margin-left: 0;
    }
    .pass__alert {
      margin-top: toRem(4);
      color: $alert-red;
      text-align: right;
      font-size: toRem(14);
      line-height: 140.62%;
      @include display-flex();
      width: 100%;
      text-align: right;
      visibility: hidden;
    }


    .splicer-line {
      display: none;
    }

    .p-modal-header-close-icon {
      margin-top: toRem(24);
    }
    .p-modal-header-close-icon::before {
      font-size: toRem(28);
    }
    .p-modal_wrapper {
      padding-right: toRem(99);
      padding-left: toRem(93);
      @include display-flex();
      padding-top: toRem(42);
    }
    .p-modal-wrapper-item {
      width: 100%;
      height: toRem(224);
    }

    .p-modal-wrapper__description-title {
      display: none;
      font-family: inherit;
      font-size: toRem(14);
      font-weight: 500;
      margin-bottom: toRem(16);
      color: $code;
      text-align: right;
    }
    .p-modal-wrapper__description-title {
      margin-top: toRem(24);
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
      padding-top: toRem(32);
    }

    .p-modal-header-top-title {
      color: $black;
      font-size: toRem(18);
      font-weight: 500;
      margin-bottom: toRem(11);
    }
    .p-modal-header-top-title-mobile {
      margin-top: 21px;
      margin-bottom: 16px;
      font-size: 14px;
      color: $gray;
    }
    .p-ticket-modal-header {
      @extend .align-center;
      height: toRem(67);
      padding-right: toRem(99);
      padding-left: toRem(21);
    }
    .p-modal-content {
      @include display-flex();
    }
    .p-modal-content-items {
      @include display-flex();
    }

    .p-modal-header-line {
      width: 85%;
      height: toRem(2);
      background: $gray-border;
      @include display-flex();
    }
    .p-modal-header-top-main {
      @include display-flex();
    }
    .p-modal-header-top {
      height: toRem(67);
    }
    .p-modal-btns {
      padding-top: toRem(116);
    }

    .p-modal-show_error .pass__alert {
      visibility: inherit;
    }
    .p-modal-show_error .p-input-style__description {
      border: solid toRem(1) $red !important;
    }
    .p-input-style__description {
      @include display-flex();
      width: 100%;
      height: toRem(226);
      resize: none;
      border-radius: toRem(10);
      border: toRem(1) solid $input-border;
      background-color: $gray-border;
      outline: none;
      padding: toRem(5) toRem(10);
      font-family: inherit;
      font-size: toRem(14);
      color: $gray;
    }

    .p-modal-validation-mobile {
      display: none !important;
    }
    .p-input-style__default:focus,
    .p-input-style__description:focus {
      border: solid toRem(1) $black;
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

      &__close-line {
        display: block;
        align-self: center;
        margin-top: toRem(24);
      }

      .pass__alert {
        font-size: toRem(13);
        padding-right: toRem(7);
      }

      .p-ticket-modal-header {
        border-bottom: toRem(1) solid $gray-border;
        height: 4rem;
        padding: 0;
      }

      .p-input-style__description {
        height: toRem(224);
      }
      .p-modal-wrapper-item {
        height: toRem(220);
      }
      .btn__send-ticket,
      .btn__cancel-ticket {
        font-size: toRem(14) !important;
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
        margin-top: toRem(17);
      }
      .p-modal-header-desktop {
        display: none;
      }

      .p-modal-wrapper__description-title {
        display: block;
        color: $black-topic;
      }
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
        padding-top: toRem(14);
        height: fit-content;
      }
      .splicer-line {
        margin-bottom: 0;
        margin-top: toRem(20);
      }

      .p-modal-header-top-title {
        font-size: toRem(14);
        color: $gray;
      }

      .p-modal-btns {
        padding-top: toRem(130);
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
      .splicer-line {
        margin-bottom: toRem(17);
      }
      .pass__alert {
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

      .p-modal-btns {
        padding-top: toRem(100);
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
    }
  }

}
</style>
