<template>
  <div class="comment__form-main">
    <form @submit="submitData" ref="form" class="w-100">
      <div class="w-100">

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
        <div class="w-100 comment__suggest-data">
            <base-radio-button
              v-for="(data, index) in radioBtnData"
              :key="data.id"
              scale
              class="comment__suggest-item"
              name="addComment"
              @value-changed="activeRadioBtn($event, data)"
              :title="data.title"
              :value="toString(data.value)"
              :selected="toString(radioBtnData[0].value)"
            ></base-radio-button>
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
import textInput from "~/components/UI/textInput";

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
      console.log(data);
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

      if (value !== "") {
        if (this.isNotEmpty(value)) {
          this.showErrorCommentText = false;
        }

        if (value.length === 450) {
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

      if (value !== "") {
        if (this.isNotEmpty(value)) {
          this.showErrorCommentTitle = false;
        }

        if (value.length === 20) {
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
  width: toRem(481);
  margin-right: auto;
  margin-left: auto;
  padding-top: toRem(38);
}
.comment__form-title {
  font-size: toRem(16);
  color: $black-topic;
  margin-bottom: toRem(16);
  font-weight: 400;
}
.comment__textara-item {
  height: toRem(126);
  padding: toRem(12) toRem(12);
  resize: none;
}
.comment__suggest-title {
  font-size: toRem(16);
  color: $black-topic;
  margin-bottom: toRem(16);
  font-weight: 400;
}
.comment__suggest-main {
  margin-top: toRem(38);
}
.comment__suggest-text {
  font-size: toRem(16);
  color: $black-topic;
  font-weight: 400;
  margin-right: toRem(28);
}
.comment__suggest-data {
  @include display-flex();
  align-items: center;
  justify-content: space-between;
  margin-bottom: toRem(16);
}
.comment__suggest-btns {
  justify-content: center;
  @include display-flex();
  margin-top: toRem(42);
  margin-bottom: toRem(24);
}
.p-product-btn {
  width: toRem(130);
  height: toRem(47);
  font-family: inherit;
  transition: all 120ms ease-in;
}
.show--error .p-input-style__default {
  border: solid toRem(1) red;
}
.show--error .pass__alert {
  visibility: visible;
}
.comment__form-data {
  @include display-flex();
}
.comment__form-star {
  margin-right: toRem(3);
  font-size: toRem(16);
  color: $alert-red;
}

.comment__form-main::v-deep {
  .comment__suggest-item {
    font-size: toRem(16);
  }
  .comment__form-title {
    font-size: toRem(16);
    color: $black-topic;
    margin-bottom: toRem(16);
    font-weight: 400;
  }
  .pass__alert {
    color: $alert-red;
    text-align: right;
    font-size: toRem(14);
    line-height: 140.62%;
    @include display-flex();
    width: 100%;
    text-align: right;
    margin-top: toRem(4);
  }
  .search-section__items {
    font-family: inherit;
    border: toRem(1) solid #bdbdbd;
    box-shadow: 0 toRem(4) toRem(4) #f2f2f2;
    height: toRem(52);
    border-radius: toRem(15);
    color: #828282;
    outline: none;
    padding-right: toRem(10);
    padding-left: toRem(10);
  }
  .p-modal-address-input {
    width: 100%;
  }
}

@include sm {
  .comment__form-main::v-deep {
    .comment__suggest-item {
      font-size: toRem(14);
    }
    width: 100%;
    padding-right: toRem(19);
    padding-left: toRem(19);
    padding-top: 1.4rem;
  }

  .comment__suggest-data {
    flex-direction: column;
    align-items: flex-start;
  }
  .comment__suggest-title {
    font-size: toRem(14);
  }
  .comment__suggest-text {
    font-size: toRem(14);
  }
  .comment__suggest-main {
  }
  .comment__suggest-item {
    margin-bottom: toRem(16);
  }
  .comment__suggest-item:last-of-type {
    margin-bottom: 0;
  }
  .comment__suggest-btns {
    margin-top: toRem(32);
    margin-bottom: toRem(19);
  }
  .p-product-btn {
    height: toRem(47);
    width: toRem(149);
  }
  .comment__form-main::v-deep {
    .comment__form-title {
      font-size: toRem(14);
    }
    .comment__textara-item {
      height: toRem(68);
    }
    .p-modal-address-input {
      height: toRem(46);
    }
  }
}
@media (max-height: 600px) {
  .comment__suggest-btns {
    margin-top: toRem(-8);
    margin-bottom: toRem(19);
  }
  .p-product-btn {
    height: toRem(36);
    width: toRem(110);
  }
}
</style>
