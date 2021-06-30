<template>
  <div class="p-history-product-items w-100 flex-column flex-wrap">
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
            <base-button base-color="yellow" link :to="'/product/' + data.id" no-box-shadow classes="p-product-btn">
              <span class="btn-text-desktop">
                  {{ getTextByTextKey("profile_see_single_product") }}
                </span>
              <span class="btn-text-mobile">
                  {{ getTextByTextKey("profile_order_see") }}
                </span>
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
import textInput from "~/modules/textInput";
import BaseButton from "../../UI/BaseButton";

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
    BaseButton,
    textInput,
  },
  created() {
    this.userHistory = Object.values(this.historyData).length;
  },
  computed: {
    historyDataa() {
      return (this.userHistory = Object.values(this.historyData).length);
    },
  },
  watch: {
    historyData() {
      console.log(this.userHistory);
    },
  },
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
  color: $gray-3;
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
