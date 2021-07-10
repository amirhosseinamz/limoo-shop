<template>
  <div class="comment__form-main">
    <form @submit="submitData" ref="form" class="w-100">
      <div class="w-100">
        <!-- <div
          :class="{ 'show--error': showErrorCommentTitle }"
          class="w-100 comment__form-item "
        >
          <div class="comment__form-data">
            <h3 class="comment__form-title">
              {{ getTextByTextKey("product_comment_title") }}
            </h3>
            <span class="comment__form-star">*</span>
          </div>
          <input
            @keyup="checkErrorCommentTitle"
            v-model="formData.Title"
            maxlength="20"
            type="text"
            class="p-modal-address-input p-input-style__default "
          />
          <span class="pass__alert ">{{ errorCommentTitle }}</span>
        </div> -->

        <text-input
          class="comment__form-item"
          labelNameClass="p-modal-wrapper-province_city-title comment__form-title"
          inputNameClass=" p-modal-address-input "
          state="standard"
          maxlength="20"
          function-max-len="equalTo"
          placeholderText=""
          :msgError="{
            notValidMsg: this.getTextByTextKey('address_not_valid'),
          }"
          :check-email="false"
          :check-number="false"
          :active-check-phone-number="false"
          :check-code="false"
          :only-use-string="false"
          :show-icon-clear-input="false"
          :show-icon-eye-input="false"
          :status-add-space-number="false"
          :check-initial-validation="checkInitialValidation"
          :check-empty-submit="true"
          :check-required="true"
          :use-timer="false"
          :show-icon-star="true"
          :form-data="formData"
          accessStyleParentInToChildNameId="address__form--data"
          tag-html="input"
          timer-start="0:10"
          type-input="text"
          name-input="Title"
          :label-text="getTextByTextKey('product_comment_title')"
        >
        </text-input>

        <!-- <div
          :class="{ 'show--error': showErrorCommentText }"
          class="w-100 comment__form-item "
        >
          <div class="comment__form-data">
            <h3 class="comment__form-title">
              {{ getTextByTextKey("product_comment_text") }}
            </h3>
            <span class="comment__form-star">*</span>
          </div>
          <textarea
            maxlength="450"
            @keyup="checkErrorCommentText"
            v-model="formData.Body"
            class="comment__textara-item p-input-style__default p-modal-address-input"
            rows="8"
            cols="80"
          ></textarea>
          <span class="pass__alert ">{{ errorCommentText }}</span>
        </div> -->

        <text-input
          class="comment__form-item"
          labelNameClass="p-modal-wrapper-province_city-title comment__form-title"
          inputNameClass="comment__textara-item"
          state="standard"
          maxlength="450"
          function-max-len="equalTo"
          placeholderText=""
          :msgError="{
            notValidMsg: this.getTextByTextKey('address_not_valid'),
          }"
          :check-email="false"
          :check-number="false"
          :active-check-phone-number="false"
          :check-code="false"
          :only-use-string="true"
          :show-icon-clear-input="false"
          :show-icon-eye-input="false"
          :status-add-space-number="false"
          :check-initial-validation="checkInitialValidation"
          :check-empty-submit="true"
          :check-required="true"
          :use-timer="false"
          :show-icon-star="true"
          :form-data="formData"
          accessStyleParentInToChildNameId="address__form--data"
          tag-html="textarea"
          timer-start="0:10"
          type-input="text"
          name-input="Body"
          :label-text="getTextByTextKey('product_comment_title')"
        >
        </text-input>
      </div>

      <div class="w-100 comment__suggest-main">
        <h3 class="comment__suggest-title w-100">
          {{ getTextByTextKey("product_comment_suggest_buying") }}
        </h3>
        <div class="w-100 comment__suggest-data radio--btn">
          <div
            v-for="(data, index) in radioBtnData"
            :key="data.id"
            class="comment__suggest-item"
          >
            <label @change="activeRadioBtn($event, data)" class="container">
              <input name="radio" :checked="data.checked" type="radio" />
              <span class="checkmark"></span>
              <h3 class="comment__suggest-text">{{ data.title }}</h3>
            </label>
          </div>
        </div>
      </div>

      <div class="w-100 comment__suggest-btns">
          <base-button
            button-type="submit"
            classes="p-product-btn p-favorite-product-btn-modal-delete"
            base-color="yellow"
            no-box-shadow
          >
          {{ getTextByTextKey("public_edit") }}
        </base-button>
          <base-button
            @button-clicked="closeModal"
            button-type="submit"
            classes="p-product-btn p-favorite-product-btn-modal-cancel"
            no-box-shadow
            base-color="light-gray"
          >
          {{ getTextByTextKey("public_cancel") }}
        </base-button>
      </div>
    </form>
  </div>
</template>

<script>
import "~/assets/styles/_radio_btn_style.scss";
const moment = require("moment-jalaali");
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import textInput from "~/modules/textInput";

export default {
  props: {
    commentsData: { type: [Object, Array], default: {} },
    valueRengeSlider: { type: Number, default: 0 },
    commentStar: { type: [Object, Array], default: {} },
  },

  components: {
    textInput,
  },

  data() {
    return {
      currentActiveRadio: {},
      formData: {
        Date: "",
        Firstname: "",
        Lastname: "",
        Title: "",
        Body: "",
        Rate: "",
        Suggest: 1,
        confirmLeave: "2",
      },
      showErrorCommentText: false,
      errorCommentText: "",
      showErrorCommentTitle: false,
      errorCommentTitle: "",
      checkInitialValidation: 0,
    };
  },

  computed: {
    radioBtnData () {
      return this.$store.getters["product/single/single/radioBtnData"]
    }
  },

  created() {
    this.setDefaultResponseCodeRadioBtn();
  },

  mounted() {
    this.defaultUpdateFormData();
  },

  methods: {
    getTextByTextKey,

    activeRadioBtn($event, data) {
      this.$store.dispatch('product/single/single/changeRadioBtnDataActivation', data.id)
      this.formData.Suggest = data.value;
    },

    submitData(e) {
      e.preventDefault();
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
          this.formData.Rate = this.valueRengeSlider;
          this.$emit("submit-data", this.formData);
        }
      });
    },

    defaultUpdateFormData() {
      const updateDefaultRadioBtn = () => {
        this.radioBtnData.map((content) => {
          if (content.active) {
            this.formData.Suggest = content.value;
          }
        });
      };

      const updateRate = () => {
        this.formData.Rate = this.valueRengeSlider;
      };

      updateDefaultRadioBtn();
      updateRate();
      // this.addCurrentTimeForm();
    },

    // addCurrentTimeForm(){
    //   const currentDate      = new Date();
    //   const createFormtDate  =  moment(currentDate).format("YYYYMMDDHHmmss");
    //
    //   this.formData.Date     = createFormtDate;
    // },

    closeModal() {
      this.$emit("close-modal");
    },

    isNotEmpty(str) {
      var pattern = /\S+/;
      return pattern.test(str); // returns a boolean
    },

    checkErrorCommentText(e, submitValue) {
      const value = e.target.value;

      if (value != "") {
        if (this.isNotEmpty(value)) {
          this.showErrorCommentText = false;
        }

        if (value.length == 450) {
          this.showErrorCommentText = true;
          this.errorCommentText = this.getTextByTextKey(
            "address_validation_over_limit"
          );
        }
      } else {
        this.showErrorCommentText = false;
      }
    },

    checkErrorCommentTitle(e, submitValue) {
      const value = e.target.value;

      if (value != "") {
        if (this.isNotEmpty(value)) {
          this.showErrorCommentTitle = false;
        }

        if (value.length == 20) {
          this.showErrorCommentTitle = true;
          this.errorCommentTitle = this.getTextByTextKey(
            "address_validation_over_limit"
          );
        }
      } else {
        this.showErrorCommentTitle = false;
      }
    },

    setDefaultResponseCodeRadioBtn() {
       this.$store.dispatch('product/single/single/changeRadioBtnData')
    },
  },
};
</script>

<style lang="scss" scoped>
.comment__form-main {
  width: 481px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 38px;
}
.comment__form-title {
  font-size: 16px;
  color: $black-topic;
  margin-bottom: 16px;
  font-weight: 400;
}
.comment__form-item {
  margin-bottom: 24px;
}
.comment__form-item:last-of-type {
  margin-bottom: 0;
}
.comment__textara-item {
  height: 126px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 12px;
  padding-left: 12px;
  resize: none;
}
.comment__suggest-title {
  font-size: 16px;
  color: $black-topic;
  margin-bottom: 38px;
  font-weight: 400;
}
.comment__suggest-main {
  margin-top: 38px;
}
.comment__suggest-text {
  font-size: 16px;
  color: $black-topic;
  font-weight: 400;
  margin-right: 28px;
}
.comment__suggest-data {
  @include display-flex();
  align-items: flex-start;
  justify-content: space-between;
}
.radio--btn .checkmark {
  border-radius: 1000px;
  padding: 5px;
  border: solid 5px $light-gray;
}
.radio--btn .checkmark::after {
  display: none !important;
}
.radio--btn .container input:checked ~ .checkmark {
  background: $white;
}
.comment__suggest-btns {
  justify-content: center;
  @include display-flex();
  margin-top: 42px;
  margin-bottom: 24px;
}
.p-product-btn {
  width: 130px;
  height: 47px;
  font-family: inherit;
  transition: all 120ms ease-in;
}
.show--error .p-input-style__default {
  border: solid 1px red;
}
.show--error .pass__alert {
  visibility: visible;
}
.comment__form-data {
  @include display-flex();
}
.comment__form-star {
  margin-right: 3px;
  font-size: 16px;
  color: $alert-red;
}

.comment__form-main::v-deep {
  .comment__form-title {
    font-size: 16px;
    color: $black-topic;
    margin-bottom: 16px;
    font-weight: 400;
  }
  .pass__alert {
    color: $alert-red;
    text-align: right;
    font-size: 14px;
    line-height: 140.62%;
    @include display-flex();
    width: 100%;
    text-align: right;
    margin-top: 4px;
  }
  .search-section__items {
    font-family: inherit;
    border: 1px solid #bdbdbd;
    box-shadow: 0px 4px 4px #f2f2f2;
    height: 52px;
    border-radius: 15px;
    color: #828282;
    outline: none;
    padding-right: 10px;
    padding-left: 10px;
  }
  .p-modal-address-input {
    width: 100%;
  }
}

@media (max-width: 1600px) {
  .comment__suggest-btns {
    margin-top: 17px;
  }
  .comment__form-main {
    padding-top: 25px;
  }
  .comment__suggest-main {
    margin-top: 25px;
  }
  .comment__form-item {
    margin-bottom: 20px;
  }
  .comment__form-main::v-deep {
    .comment__form-title {
      margin-bottom: 9px;
    }
    .comment__textara-item {
      height: 100px;
    }
  }
}

@media (max-width: 760px) {
  .comment__form-main {
    width: 100%;
    padding-right: 19px;
    padding-left: 19px;
    padding-top: 27px;
  }
  .comment__suggest-title {
    font-size: 14px;
    margin-bottom: 18px;
  }
  .comment__suggest-text {
    font-size: 14px;
  }
  .comment__suggest-data {
    flex-flow: column;
  }
  .comment__suggest-main {
    margin-top: 24px;
  }
  .comment__suggest-item {
    margin-bottom: 26px;
  }
  .comment__suggest-item:last-of-type {
    margin-bottom: 0;
  }
  .radio--btn .checkmark {
    padding: 3px;
  }
  .comment__suggest-btns {
    margin-top: 38px;
    margin-bottom: 19px;
  }
  .p-product-btn {
    height: 47px;
    width: 149px;
  }
  .comment__form-main::v-deep {
    .comment__form-title {
      font-size: 14px;
    }
    .comment__textara-item {
      height: 101px;
    }
    .p-modal-address-input {
      height: 46px;
    }
  }
}
</style>
