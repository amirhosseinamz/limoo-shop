<template>
  <div class="p-history-product-items w-100 flex-column flex-wrap">
    <text-input
      class="input__product--item"
      state="standard"
      maxlength="65"
      placeholderText=""
      :msgError="{
        notValidMsg: 'مجاز نیست',
      }"
      :checkNumber="false"
      :checkEmail="false"
      :active-check-phone-number="false"
      label-text="نشانی پستی دقیق"
      function-max-len="equalTo"
      :formData="formData"
      :check-initial-validation="checkValidationSubmitForm"
      nameInput="test"
      :check-empty-submit="true"
    >
    </text-input>

    <text-input
      class="input__product--item"
      state="standard"
      maxlength="34"
      placeholderText=""
      :msgError="{
        notValidMsg: 'مجاز نیست',
      }"
      :check-number="false"
      :check-email="false"
      :active-check-phone-number="false"
      :only-use-string="true"
      label-text="نام گیرنده"
      function-max-len="equalTo"
      :formData="formData"
      :check-initial-validation="checkValidationSubmitForm"
      nameInput="codePoste"
    >
    </text-input>

    <text-input
      state="authInput"
      maxlength="11"
      function-max-len="greaterThan"
      placeholderText=""
      :msgError="{
        notValidMsg: 'مجاز نیست',
        notValidNumber: 'شماره وارد شده صحیح نیست',
      }"
      :check-email="false"
      :check-number="false"
      :active-check-phone-number="true"
      :check-code="false"
      :only-use-string="false"
      :show-icon-clear-input="true"
      typeInput="text"
      label-text="لطفا شماره موبایل خود را وارد کنید."
      :formData="formData"
      :check-initial-validation="checkValidationSubmitForm"
      :check-required="false"
      nameInput="phoneNumber"
    >
    </text-input>

    <text-input
      state="authInput"
      maxlength="4"
      function-max-len="greaterThan"
      placeholderText=""
      :msgError="{
        notValidMsg: 'مجاز نیست',
        notValidNumber: 'شماره وارد شده صحیح نیست',
      }"
      :check-email="false"
      :check-number="false"
      :active-check-phone-number="false"
      :check-code="false"
      :only-use-string="false"
      :show-icon-clear-input="false"
      :show-icon-eye-input="false"
      :status-add-space-number="true"
      :check-initial-validation="checkValidationSubmitForm"
      :formData="formData"
      :check-empty-submit="true"
      typeInput="text"
      nameInput="code"
      label-text="لطفا کد تایید را وارد کنید"
    >
    </text-input>

    <text-input
      state="authInput"
      maxlength="4"
      function-max-len="greaterThan"
      placeholderText=""
      :msgError="{
        notValidMsg: 'مجاز نیست',
        notValidNumber: 'شماره وارد شده صحیح نیست',
      }"
      :check-email="false"
      :check-number="true"
      :active-check-phone-number="false"
      :check-code="false"
      :only-use-string="false"
      :show-icon-clear-input="false"
      :show-icon-eye-input="false"
      :status-add-space-number="false"
      :check-initial-validation="checkValidationSubmitForm"
      :formData="formData"
      :check-empty-submit="false"
      :check-required="true"
      typeInput="text"
      nameInput="codeRequired"
      label-text="فقط در صورت عدد اجازه ادامه وجود دارد"
    >
    </text-input>

    <text-input
      state="authInput"
      maxlength="4"
      function-max-len="greaterThan"
      placeholderText=""
      :msgError="{
        notValidMsg: 'مجاز نیست',
        notValidNumber: 'شماره وارد شده صحیح نیست',
      }"
      :check-email="false"
      :check-number="false"
      :active-check-phone-number="false"
      :check-code="false"
      :only-use-string="true"
      :show-icon-clear-input="false"
      :show-icon-eye-input="false"
      :status-add-space-number="false"
      :check-initial-validation="checkValidationSubmitForm"
      :form-data="formData"
      :check-empty-submit="false"
      :check-required="false"
      :use-timer="true"
      tag-html="input"
      timer-start="0:10"
      type-input="text"
      name-input="codeRequired2"
      label-text="مقدار مورد نظر فقط حروف باشد"
    >
    </text-input>

    <text-input
      state="authInput"
      maxlength="450"
      function-max-len="equalTo"
      placeholderText=""
      :msgError="{
        notValidMsg: 'مجاز نیست',
        notValidNumber: 'بیش از حد مجاز',
      }"
      :check-email="false"
      :check-number="false"
      :active-check-phone-number="false"
      :check-code="false"
      :only-use-string="true"
      :show-icon-clear-input="false"
      :show-icon-eye-input="false"
      :status-add-space-number="false"
      :check-initial-validation="checkValidationSubmitForm"
      :check-empty-submit="true"
      :check-required="false"
      :use-timer="false"
      :form-data="formData"
      :show-icon-star="true"
      tag-html="textarea"
      timer-start="0:10"
      type-input="text"
      name-input="codeRequired444"
      label-text="متن نظر شما:"
    >
    </text-input>

    <div class="w-100">
      <text-input
        state="authInput"
        maxlength="32"
        function-max-len="ecoal"
        placeholderText=""
        :msgError="{
          notValidMsg: 'مجاز نیست',
          notValidNumber: 'شماره وارد شده صحیح نیست',
        }"
        :check-email="false"
        :check-number="false"
        :active-check-phone-number="false"
        :check-code="false"
        :only-use-string="false"
        :show-icon-clear-input="false"
        :show-icon-eye-input="true"
        :status-add-space-number="false"
        typeInput="text"
        label-text="رمز عبور جدید"
        :check-initial-validation="checkValidationSubmitForm"
        nameInput="forgetPassword1"
        :formData="formData"
      >
      </text-input>

      <text-input
        state="authInput"
        maxlength="32"
        function-max-len="ecoal"
        placeholderText=""
        :msgError="{
          notValidMsg: 'مجاز نیست',
          notValidNumber: 'شماره وارد شده صحیح نیست',
        }"
        :check-email="false"
        :check-number="false"
        :active-check-phone-number="false"
        :check-code="false"
        :only-use-string="false"
        :show-icon-clear-input="false"
        :show-icon-eye-input="true"
        :status-add-space-number="false"
        :check-initial-validation="checkValidationSubmitForm"
        typeInput="text"
        label-text="تکرار رمز عبور جدید"
        nameInput="forgetPassword2"
        :formData="formData"
      >
      </text-input>
    </div>

    <button
      type="button"
      class="p-product-btn cursor-pointer"
      name="button"
      @click="submitData"
    >
      <span class="btn-text-desktop">
        {{ getTextByTextKey("profile_see_single_product") }}
      </span>
    </button>

    <div class="user-history__empty-container" v-show="userHistory == 0">
      <img
        src="/empty-pages/empty-last-seen.svg"
        :alt="getTextByTextKey('profile_order_still_product')"
      />
      <span class="user-history__empty">
        {{ getTextByTextKey("profile_order_still_product") }}
      </span>
      <nuxt-link to="/" class="user-history__empty-link">
        {{ getTextByTextKey("rofile_order_view_bestsellers") }}
      </nuxt-link>
    </div>
    <div
      v-for="data in historyData"
      :key="data.id"
      class="w-100 p-history-product-item flex-column flex-wrap"
    >
      <div class="p-history-product-item-main align-items-start flex-wrap">
        <div class="p-history-product-right align-items-start flex-wrap">
          <div
            class="p-history-product-img-main p-history-product-content-right"
          >
            <img :src="data.img" class="p-history-product-img" alt="" />
          </div>

          <div
            class="p-history-product-content-left flex-column w-100 align-items-start"
          >
            <h3 class="p-history-product-content-title w-100 text-right">
              اپل واچ سری 6 آلومینیوم آبی اپل واچ سری 6 آلومینیوم آبی
            </h3>
            <div class="p-history-product-content-price align-items-start">
              <h3 class="p-history-product-content-price-title">
                123,000,000
              </h3>
              <h3
                class="p-history-product-content-price-title p-history-product-content-price-unit"
              >
                {{ getTextByTextKey("public_unit") }}
              </h3>
            </div>
          </div>
        </div>

        <div class="p-history-product-left align-items-start">
          <div class="p-history-product-btn-main">
            <base-button
              button-type="button"
              classes="p-product-btn"
              base-color="yellow"
            >
              <NuxtLink
                :to="'/product/' + data.id"
                class="p-history-product-btn-link"
              >
                <span class="btn-text-desktop">
                  {{ getTextByTextKey("profile_see_single_product") }}
                </span>
                <span class="btn-text-mobile">
                  {{ getTextByTextKey("profile_order_see") }}
                </span>
              </NuxtLink>
            </base-button>
            <button
              @click="deleteFav(data)"
              type="button"
              class="p-history-product-btn-delete cursor-pointer"
              name="button"
            >
              <span class="p-history-product-item-icon-delete"></span>
            </button>
          </div>
        </div>
      </div>

      <span
        class="p-history-product-line w-100 p-history-product-desktop"
      ></span>
    </div>
  </div>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import textInput from "~/components/UI/textInput";

export default {
  data() {
    return {
      userHistory: -1,
      msgError: {
        notValidMsg: "مجاز نیست",
        notValidNumber: "شماره وارد شده صحیح نیست",
      },
      checkValidationSubmitForm: 0,
      formData: {
        test: "",
        codePoste: "",
        phoneNumber: "",
        code: "",
        codeRequired: "",
        codeRequired2: "",
        codeRequired444: "",
        forgetPassword1: "",
        forgetPassword2: "",
      },
    };
  },
  props: {
    historyData: { type: [Object, Array], default: {} },
  },
  components: {
    textInput,
  },
  created() {
    this.userHistory = Object.values(this.historyData).length;
  },
  computed: {
    historyData() {
      return (this.userHistory = Object.values(this.historyData).length);
    },
  },
  watch: {
    historyData() {
      console.log(this.userHistory);
    },
  },
  computed: {},
  methods: {
    getTextByTextKey,
    deleteFav(data) {
      this.$emit("event-show-modal-delete-history", data);
      // setTimeout(() => {
      //     this.userHistory = Object.values(this.historyData).length;
      // }, 1000);
    },

    submitData() {
      this.checkValidationSubmitForm++;

      // در صورت نداشت ارور فورم مورد نظر ارسال می شود //
      setTimeout(() => {
        const formData = this.formData;
        let checkSubmitForm = "success";

        // چک کردن ارور فورم //
        for (let key in formData) {
          if (formData[key].hasError) {
            checkSubmitForm = "failed";
          }
        }

        if (checkSubmitForm == "success") {
          console.log("send request ");
        }

        console.log(formData, "formData");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.user-history__empty-container {
  @include display-flex();
  flex-direction: column;
  justify-content: flex-start;
  height: 278px;
  background: $white;
  border-radius: 10px;
  /* border: 1px solid red; */
}
.user-history__empty-container img {
  opacity: 1;
}
.user-history__empty {
  font-size: 18px;
  line-height: 140.62%;
  text-align: center;
  color: $gray;
  margin-top: 42px;
}
.user-history__empty-link {
  text-decoration: none;
  font-size: 14px;
  line-height: 140.62%;
  text-align: center;
  margin-top: 24px;
  color: $code-request;
  cursor: pointer;
}
/*  */
.p-history-product-item {
  @include display-flex();
  /* border: 1px solid red; */
}
.p-history-product-items {
  @include display-flex();
  direction: rtl;
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 38px;
  /* border: 1px solid red; */
}
.p-history-product-right {
  @include display-flex();
  width: 70%;
}
.p-history-product-left {
  @include display-flex();
  width: 30%;
  justify-content: flex-end;
  padding-top: 19px;
}
.p-history-product-img {
  width: 120px;
  height: 120px;
}
.p-history-product-img-main {
  @include display-flex();
}
.p-history-product-content {
  @include display-flex();
}
.p-history-product-content-left {
  @include display-flex();
  padding-top: 19px;
  width: 72%;
}
.p-history-product-content-title {
  font-size: 16px;
  font-weight: 400;
  width: 70%;
}
.p-history-product-content-right {
  width: 140px;
}
.p-history-product-content-price {
  @include display-flex();
  padding-top: 15px;
}
.p-history-product-content-price-title {
  font-size: 15px;
  color: $gray;
}
.p-history-product-content-price-unit {
  margin-right: 6px;
  color: $gray;
}

.p-history-product-btn-main {
  @include display-flex();
}
.p-history-product-btn-delete {
  background: $google-btn__bg;
  border: 1px solid $google-btn__bg;
  box-sizing: border-box;
  border-radius: 10px;
  width: 47px;
  height: 47px;
  margin-right: 25px;
}
.p-history-product-line {
  @include display-flex();
  background: $gray-border;
  margin-top: 24px;
  margin-bottom: 24px;
  height: 1px;
}
.p-history-product-item-main {
  @include display-flex();
}
.p-history-product-item-icon-delete::before {
  /* width: 15px; */
  content: "\e826";
  @include font-icon__limoo();
  font-size: 17px;
  color: $input-border;
}
.p-history-product-btn-link {
  border: none;
  color: inherit;
  border-bottom: none;
  unicode-bidi: normal;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-text-mobile {
  display: none;
}
.input__product--item {
  margin-bottom: 24px;
}
.p-product-btn {
  width: 150px;
  height: 47px;
  font-family: inherit;
  transition: all 120ms ease-in;
}
@media (max-width: 768px) {
  .btn-text-desktop {
    display: none;
  }
  .btn-text-mobile {
    display: block;
  }
  .p-history-product-btn {
    width: 123px;
    font-size: 13px;
    height: 45px;
  }
  .p-history-product-content-left {
    width: 70%;
  }
  .p-history-product-btn-delete {
    width: 36px;
    height: 36px;
    margin-right: 16px;
  }
  .p-history-product-btn-main .p-product-btn {
    width: 116px;
    background: $yellow;
    color: $white;
    height: 36px;
  }
}

@media (max-width: 600px) {
  .user-history__empty-container {
    height: 252px;
    padding-top: 24px;
  }
  .user-history__empty-container img {
    margin: 0 auto;
    width: 78px;
    height: 78px;
  }
  .user-history__empty {
    font-size: 14px;
    margin-top: 25px;
  }
  .user-history__empty-link {
    font-size: 13px;
    margin-top: 8px;
  }
  .p-history-product-content-right {
    width: 91px;
  }
  .p-history-product-img {
    width: 80px;
    height: 75px;
  }
  .p-history-product-content-title {
    font-size: 14px;
    color: $black-topic;
  }
  .p-history-product-content-price-title {
    font-size: 12px;
  }
  .p-history-product-item-main {
    flex-flow: column;
    width: 100%;
  }
  .p-history-product-left {
    width: 100%;
    padding-left: 13px;
  }
  .p-history-product-right {
    width: 100%;
    border-bottom: solid 1px $gray-border;
    padding-bottom: 22px;
  }
  .p-history-product-desktop {
    display: none;
  }
  .p-history-product-items {
    padding-top: 0px;
    padding-right: 3px;
    padding-left: 3px;
  }
  .p-history-product-item {
    background: $white;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 8px 16px $box__shadow;
    padding-top: 29px;
    padding-bottom: 10px;
  }
  .p-history-product-btn-delete {
    width: 36px;
    height: 36px;
  }
  .p-history-product-btn {
    background: $yellow;
    color: $white;
    height: 40px;
    width: 40px;
  }
  .p-history-product-content-left {
    padding-top: 3px;
  }
}

@media (max-width: 485px) {
  .p-history-product-content-left {
    width: 73%;
  }
  .p-history-product-btn-delete {
    width: 36px;
    height: 36px;
  }
  .p-history-product-btn-link {
    font-size: 13px;
  }
}
@media (max-width: 320px) {
  .p-history-product-content-left {
    width: 69%;
  }
}

@media (max-width: 280px) {
  .p-history-product-content-left {
    width: 60%;
  }
  .p-history-product-content-title {
    width: 100%;
  }
}
</style>
