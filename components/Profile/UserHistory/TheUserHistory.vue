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
  height: toRem(278);
  background: $white;
  border-radius: toRem(10);
}
.user-history__empty-container img {
  opacity: 1;
}
.user-history__empty {
  font-size: toRem(18);
  line-height: 140.62%;
  text-align: center;
  color: $gray;
  margin-top: toRem(42);
}
.user-history__empty-link {
  text-decoration: none;
  font-size: toRem(14);
  line-height: 140.62%;
  text-align: center;
  margin-top: toRem(24);
  color: $code-request;
  cursor: pointer;
}
.p-history-product-item {
  @include display-flex();
}
.p-history-product-items {
  @include display-flex();
  direction: rtl;
  padding-right: toRem(25);
  padding-left: toRem(25);
  padding-top: toRem(38);
}
.p-history-product-right {
  @include display-flex();
  width: 70%;
}
.p-history-product-left {
  @include display-flex();
  width: 30%;
  justify-content: flex-end;
  padding-top: toRem(19);
}
.p-history-product-img {
  width: toRem(120);
  height: toRem(120);
}
.p-history-product-img-main {
  @include display-flex();
}
.p-history-product-content {
  @include display-flex();
}
.p-history-product-content-left {
  @include display-flex();
  padding-top: toRem(19);
  width: 72%;
}
.p-history-product-content-title {
  font-size: toRem(16);
  font-weight: 400;
  width: 70%;
}
.p-history-product-content-right {
  width: toRem(140);
}
.p-history-product-content-price {
  @include display-flex();
  padding-top: toRem(15);
}
.p-history-product-content-price-title {
  font-size: toRem(15);
  color: $gray;
}
.p-history-product-content-price-unit {
  margin-right: toRem(6);
  color: $gray;
}

.p-history-product-btn-main {
  @include display-flex();
}
.p-history-product-btn-delete {
  background: $google-btn__bg;
  border: toRem(1) solid $google-btn__bg;
  box-sizing: border-box;
  border-radius: toRem(10);
  width: toRem(47);
  height: toRem(47);
  margin-right: 0.7rem;
}
.p-history-product-line {
  @include display-flex();
  background: $gray-border;
  margin-top: toRem(24);
  margin-bottom: toRem(24);
  height: toRem(1);
}
.p-history-product-item-main {
  @include display-flex();
}
.p-history-product-item-icon-delete::before {
  content: "\e826";
  @include font-icon__limoo();
  font-size: toRem(17);
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
  @extend .centered;
}
.btn-text-mobile {
  display: none;
}
.input__product--item {
  margin-bottom: toRem(24);
}
.p-product-btn {
  width: toRem(150);
  height: toRem(47);
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
    width: toRem(123);
    font-size: toRem(13);
    height: toRem(45);
  }
  .p-history-product-content-left {
    width: 70%;
  }
  .p-history-product-btn-delete {
    width: toRem(36);
    height: toRem(36);
    margin-right: toRem(16);
  }
}

@media (max-width: 600px) {
  .user-history__empty-container {
    height: toRem(252);
    padding-top: toRem(24);
  }
  .user-history__empty-container img {
    margin: 0 auto;
    width: toRem(78);
    height: toRem(78);
  }
  .user-history__empty {
    font-size: toRem(14);
    margin-top: toRem(25);
  }
  .user-history__empty-link {
    font-size: toRem(13);
    margin-top: toRem(8);
  }
  .p-history-product-content-right {
    width: toRem(91);
  }
  .p-history-product-img {
    width: toRem(80);
    height: toRem(75);
  }
  .p-history-product-content-title {
    font-size: toRem(14);
    color: $black-topic;
  }
  .p-history-product-content-price-title {
    font-size: toRem(12);
  }
  .p-history-product-item-main {
    flex-flow: column;
    width: 100%;
  }
  .p-history-product-left {
    width: 100%;
    padding-left: toRem(13);
  }
  .p-history-product-right {
    width: 100%;
    border-bottom: solid toRem(1) $gray-border;
    padding-bottom: toRem(22);
  }
  .p-history-product-desktop {
    display: none;
  }
  .p-history-product-items {
    padding-top: 0;
    padding-right: toRem(3);
    padding-left: toRem(3);
  }
  .p-history-product-item {
    background: $white;
    border-radius: toRem(10);
    margin-bottom: toRem(10);
    box-shadow: 0 toRem(8) toRem(16) $box__shadow;
    padding-top: toRem(29);
    padding-bottom: toRem(10);
  }
  .p-history-product-btn-delete {
    width: toRem(36);
    height: toRem(36);
  }
  .p-history-product-btn {
    background: $yellow;
    color: $white;
    height: toRem(40);
    width: toRem(40);
  }
  .p-history-product-content-left {
    padding-top: toRem(3);
  }
}

@media (max-width: 485px) {
  .p-history-product-content-left {
    width: 73%;
  }
  .p-history-product-btn-delete {
    width: toRem(36);
    height: toRem(36);
  }
  .p-history-product-btn-link {
    font-size: toRem(13);
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
