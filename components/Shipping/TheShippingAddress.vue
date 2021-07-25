<template>
  <div class="orders-content__main">
    <transition moda="in-out">
      <div id="overlay" v-if="passChangeIsActive">
        <shipping-add-address-modal
          :data-edit-address="dataEditAddress"
          @selected-province="selectedProvince"
          @selected-city="selectedCity"
          @submit-address-add="submitAddressAdd"
          @close-modal="closeModal"
        />
      </div>
    </transition>
    <div class="w-100 flex-wrap" :key="updateChosenAddress">
      <base-accordion
        v-for="data in addressData"
        :key="data.id"
        name="address"
        :text="data.address"
        :value="data.id.toString()"
        :border-active="false"
        :selected="addressData[0].id.toString()"
        class="order-content-item"
        radioClass="accordion-radio"
        description-class="accordion-description"
      >
        <div class="order-detail" :key="updateSelected">
          <div class="order-detail__desktop-holder">
<!--            <div class="order-detail__holder">
                                        <span
                                          @click="pickAddress(data)"
                                          class="card-shape__circle"
                                        >
                                            <span class="card-shape__circle-inner"></span>
                                        </span>
              <span class="order-detail__title">
                                            {{ data.address }}</span
              >
            </div>-->
            <div class="address-detail__user-container">
              <div class="address-detail__user-holder">
                                            <span class="address-detail__user-reciver">{{
                                                data.nameReceiver
                                              }}</span>
                <span class="address-detail__user-phone">{{
                    data.numberReceiver
                  }}</span>
              </div>
              <div
                class="address-detail__three-point__btn order-detail__closer"
                @click="showEditDeleteOption(data)"
              >
                                            <span
                                              class="address-detail__point order-detail__closer"
                                            ></span>
                <span
                  class="address-detail__point order-detail__closer"
                ></span>
                <span
                  class="address-detail__point order-detail__closer"
                ></span>
              </div>
            </div>
            <div
              @click="showEditDeleteOption(data)"
              class="order-detail__btn-holder__mobile"
              :class="{
                                            'order-detail__btn-show': data.selected
                                        }"
            >
              <button
                class="address-detail__btn-delete"
                @click="showModalDeleteOrder(data)"
                name="button"
              >
                حذف
              </button>
              <span class="order-detail__btn-holder__line"></span>
              <button
                @click="editAddress(data)"
                class="address-detail__btn-edit__mobile"
                name="button"
              >
                ویرایش
              </button>
            </div>
          </div>
        </div>

        <div class="order-detail__btns-container">
          <base-button
            @button-clicked="showModalDeleteOrder(data)"
            classes="order-detail__btn-delete"
            base-color="light-gray"
            no-box-shadow
          ></base-button>
          <base-button
            @button-clicked="editAddress(data)"
            classes="address-detail__btn-edit"
            no-box-shadow
            no-hover
            base-color="yellow"
            mode="secondary-inline"
          ></base-button>
        </div>
      </base-accordion>
      <!--                <div
                            :class="{
                                'order-detail__choosed-adress': data.defultAddress
                            }"
                            v-for="data in addressData"
                            :key="data.id"
                            class="w-100 flex-wrap order-content-item"
                        >
                            <div class="order-detail" :key="updateSelected">
                                <div class="order-detail__desktop-holder">
                                    <div class="order-detail__holder">
                                        <span
                                            @click="pickAddress(data)"
                                            class="card-shape__circle"
                                        >
                                            <span class="card-shape__circle-inner"></span>
                                        </span>
                                        <span class="order-detail__title">
                                            {{ data.address }}</span
                                        >
                                    </div>
                                    <div class="address-detail__user-container">
                                        <div class="address-detail__user-holder">
                                            <span class="address-detail__user-reciver">{{
                                                data.nameReceiver
                                            }}</span>
                                            <span class="address-detail__user-phone">{{
                                                data.numberReceiver
                                            }}</span>
                                        </div>
                                        <div
                                            class="address-detail__three-point__btn order-detail__closer"
                                            @click="showEditDeleteOption(data)"
                                        >
                                            <span
                                                class="address-detail__point order-detail__closer"
                                            ></span>
                                            <span
                                                class="address-detail__point order-detail__closer"
                                            ></span>
                                            <span
                                                class="address-detail__point order-detail__closer"
                                            ></span>
                                        </div>
                                    </div>
                                    <div
                                        @click="showEditDeleteOption(data)"
                                        class="order-detail__btn-holder__mobile"
                                        :class="{
                                            'order-detail__btn-show': data.selected
                                        }"
                                    >
                                        <button
                                            class="address-detail__btn-delete"
                                            @click="showModalDeleteOrder(data)"
                                            name="button"
                                        >
                                            حذف
                                        </button>
                                        <span class="order-detail__btn-holder__line"></span>
                                        <button
                                            @click="editAddress(data)"
                                            class="address-detail__btn-edit__mobile"
                                            name="button"
                                        >
                                            ویرایش
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="order-detail__btns-container">
                                &lt;!&ndash; edit btn &ndash;&gt;
                                <base-button
                                    @button-clicked="showModalDeleteOrder(data)"
                                    classes="order-detail__btn-delete"
                                    base-color="light-gray"
                                    no-box-shadow
                                ></base-button>
                                <base-button
                                    @button-clicked="editAddress(data)"
                                    classes="address-detail__btn-edit"
                                    no-box-shadow
                                    no-hover
                                    base-color="yellow"
                                    mode="secondary-inline"
                                ></base-button>
                            </div>
                        </div>-->
    </div>
  </div>
</template>
<script>
import shippingAddAddressModal from "./shippingAddAddressModal.vue";

export default {
  components: {
    shippingAddAddressModal,
  },
  data() {
    return {
      passChangeIsActive: false,
      updateSelected: 0,
      dataEditAddress: {},
      modalEditSelected: {
        id: null,
      },
    };
  },
  computed: {
    addressData() {
      return this.$store.getters["shipping/shipping/addressData"];
    },
    updateChosenAddress() {
      return this.$store.getters["shipping/shipping/updateChosenAddress"];
    },
    allProvince() {
      return this.$store.getters["shipping/shipping/allProvince"];
    },
    allCities() {
      return this.$store.getters["shipping/shipping/allCities"];
    },
    formData() {
      return this.$store.getters["shipping/shipping/formData"];
    },
    profilePhoneNumber() {
      return this.$store.getters["shipping/shipping/profilePhoneNumber"];
    },
  },
  created() {
    document.addEventListener("click", this.checkCloseDropDown);
  },

  destroyed() {
    document.removeEventListener("click", this.documentClick);
  },
  methods: {
    selectedProvince(data) {
      this.$emit("selected-province", data);
    },
    addAddress() {
      this.dataEditAddress = {};
      this.passChangeIsActive = !this.passChangeIsActive;
    },
    selectedCity(data) {
      this.$emit("selected-city", data);
    },
    submitAddressAdd(data) {
      // بر اساس آیدی تغیین می شود که حالت ویرایش است یا خیر //

      let stateEditAdd = "";
      if (typeof this.dataEditAddress.id == "undefined") {
        stateEditAdd = "add";
      } else {
        stateEditAdd = "edit";
      }

      this.passChangeIsActive = false;
      this.$emit("submit-address-add", data, stateEditAdd);
      if (stateEditAdd == "edit") {
        this.showEditDeleteOption(data);
      }
    },
    closeModal() {
      this.dataEditAddress = {};
      this.passChangeIsActive = false;
    },

    editAddress(data) {
      this.dataEditAddress = data;
      this.passChangeIsActive = true;
    },
    //
    checkCloseDropDown(e) {
      // هر جایی به غیر از باکس دراپ دان کلیک شود در صورتی که دراپ دان باز باشد بسته می شود //

      // چک کردت این که روی دراپ دان کلیک شده یا خیر //
      function findAncestor(el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls)) ;
        return el;
      }

      if (findAncestor(e.target, "order-detail__closer") == null) {
        if (this.modalEditSelected.id) {
          this.showEditDeleteOption(this.modalEditSelected.id);
        }
      }
    },
    pickAddress(data) {
      this.addressData.map(content => {
        if (content.id == data.id) {
          this.$store.dispatch("shipping/shipping/changeDefaultAddress", [content, true]);
          // if we want open one paragraph in time
        } else {
          this.$store.dispatch("shipping/shipping/changeDefaultAddress", [content, false]);
        }
      });
      this.$store.dispatch("shipping/shipping/updateChosenAddress");
    },
    showModalDeleteOrder(data) {
      this.$emit("event-show-modal-delete-order", data);
    },
    addOrderToCart(data) {
      this.$emit("add-more-order-to-card", data);
    },
    minusOrderFromCart(data) {
      this.$emit("minus-order-from-card", data);
    },
    showModalEditAddress(data) {
    },
    showEditDeleteOption(data) {
      console.log("aldkfsd");
      this.addressData.map(content => {
        if (content.id == data.id) {
          content.selected = !content.selected;

          // if we want open one paragraph in time
        } else {
          content.selected = false;
        }
        if (!this.modalEditSelected.id) {
          this.modalEditSelected.id = data.id;
        } else if (this.modalEditSelected.id) {
          this.modalEditSelected.id = null;
        }
      });
      this.updateSelected++;
    },
  },
};
</script>
<style lang="scss" scoped>

#overlay {
  position: fixed;
  @include display-flex();
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: $overlay__profile;
  top: 0;
  right: 0;
}

.v-leave-from {
  opacity: 0.5;
}

.v-leave-active {
  transition: all 300ms ease-in;
}

.v-leave-to {
  opacity: 0;
}

.order-detail__choosed-adress .card-shape__circle {
  background-color: $yellow;
}

.order-detail__choosed-adress .address-detail__user-container {
  @include display-flex();
}

.card-shape__circle {
  @include display-flex();
  justify-content: center;
  align-items: center;
  width: toRem(19);
  height: toRem(19);
  border-radius: 50%;
  background-color: $light-gray;
  margin: toRem(26) toRem(16) toRem(24) 0;
  cursor: pointer;
  /* background-color: $light-gray; */
}

.card-shape__circle-inner {
  width: toRem(9.5);
  height: toRem(9.5);
  border-radius: 50%;
  background-color: $white;
  cursor: pointer;
}

/* .orders-content__main {
    border: 1px solid red;
} */
.order-content-item {
  height: fit-content;
  margin-bottom: toRem(8);
}

.order-detail {
  height: 70px;
  width: 100%;
  /* border-bottom: 1px solid $gray-border; */
}

.order-detail__desktop-holder {
  @include display-flex();
  flex-direction: column;
}

.address-detail__user-container {
  @include display-flex();
  flex-direction: row;
  margin-right: toRem(22);
  margin-top: toRem(20);
  justify-content: space-between;
}

.address-detail__user-holder {
  @include display-flex();
  flex-direction: row;
}

.address-detail__three-point__btn {
  display: none;
}

.address-detail__user-reciver,
.address-detail__user-phone {
  font-size: toRem(14);
  line-height: 140.62%;
  text-align: right;
  color: $black-topic;
  margin-left: 24px;
}

.address-detail__user-phone::after {
  @include font-icon__limoo();
  content: "\e81f";
  font-size: toRem(14);
  color: $gray;
  margin-right: toRem(24);
  margin-left: toRem(8);
}

.address-detail__user-reciver::before {
  @include font-icon__limoo();
  content: "\e823";
  font-size: toRem(14);
  color: $gray;
  margin-left: toRem(8);
}

.address-detail__user-phone {
  border-right: toRem(1) solid $light-gray;
}

.order-detail__holder {
  @include display-flex();
  flex-direction: row;
  height: fit-content;
}

.order-detail__title {
  width: 80%;
  font-size: toRem(16);
  line-height: 140.62%;
  text-align: right;
  color: $black-topic;
  margin: toRem(24) toRem(8) toRem(24) 0;
  height: fit-content;
}

.order-detail__content-holder {
  @include display-flex();
  flex-direction: column;
  height: toRem(91);
  padding-right: toRem(16);
  border-right: toRem(2) solid $gray-border;
}

.order-detail__btns-container {
  @include display-flex();
  flex-direction: row-reverse;
  align-items: flex-end;
  width: 100%;
}

.order-detail__btn-delete {
  width: toRem(37);
  height: toRem(37);
}

.order-detail__btn-delete::before {
  @include font-icon__limoo();
  content: "\e826";
  font-size: toRem(14);
  color: $gray-3;
}

.address-detail__btn-edit {
  width: toRem(37);
  height: toRem(37);
  margin-left: 0.625rem;
}

.address-detail__btn-edit::before {
  @include font-icon__limoo();
  content: "\e80e";
  font-size: toRem(14);
  color: $white;
}

.address-detail__btn-delete,
.address-detail__btn-edit__mobile {
  display: none;
}

.order-detail__choosed-adress {
  min-height: toRem(140);
}

.order-detail__choosed-adress .order-detail__btns-container {
  @include display-flex();
}

@media (max-width: 960px) {
  .order-content-item::v-deep {
    .accordion-description {
      order: 1;
    }
    .accordion-radio {
      order: 2;
      font-size: toRem(14);
      align-items: flex-start!important;
    }
  }
  .order-detail__btn-holder__mobile {
    @include display-flex();
    flex-direction: column;
    justify-content: space-between;
    background-color: $white;
    box-shadow: 0 toRem(20) toRem(24) $box__shadow;
    border-radius: toRem(10);
    width: toRem(154);
    height: toRem(82);
    position: absolute;
    margin-top: toRem(20);
    left: toRem(33);
    display: none;
  }
  .order-detail__btn-holder__line {
    width: 100%;
    display: none;
    border-top: toRem(1) solid $gray-border;
  }
  .order-detail__btn-show {
    display: block;
  }
  .address-detail__btn-delete,
  .address-detail__btn-edit__mobile {
    @include display-flex();
    background-color: transparent;
    font-family: inherit;
    /* width: 100%; */
    font-size: toRem(14);
    color: $gray;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 140.62%;
    text-align: right;
    margin: toRem(12) toRem(12) toRem(10) 0;
  }
  .address-detail__btn-edit__mobile {
    margin: toRem(10) toRem(12) toRem(10) 0;
  }
  .address-detail__three-point__btn {
    @include display-flex();
    flex-direction: column;
    margin: toRem(15) 0 toRem(13) toRem(16);
    cursor: pointer;
  }
  .address-detail__point {
    width: toRem(4);
    height: toRem(4);
    margin-bottom: toRem(2);
    background-color: $gray;
    border-radius: 50%;
  }
  .card-shape__circle {
    width: toRem(17);
    height: toRem(17);
    margin: toRem(17) toRem(9) toRem(24) 0;
  }
  .card-shape__circle-inner {
    width: toRem(7.5);
    height: toRem(7.5);
  }
  .order-detail__holder {
    border-top: toRem(1) solid $gray-border;
  }
  .address-detail__user-container {
    margin-top: toRem(-15);
    margin-right: 0;
    border-bottom: toRem(1) solid $gray-6;
  }
  .address-detail__user-reciver,
  .address-detail__user-phone {
    margin-top: toRem(15);
    margin-bottom: toRem(15);
    margin-left: toRem(8);
  }
  .address-detail__user-phone::after {
    margin-right: toRem(8);
    margin-left: toRem(4);
  }
  .address-detail__user-reciver::before {
    margin-left: toRem(4);
  }
  .order-content-item {
    min-height: fit-content;
    margin-bottom: toRem(8);
  }
  .order-detail__content-holder {
    display: none;
  }
  .order-detail {
    min-height: toRem(50);
    height: fit-content;
  }

  .order-detail__title {
    font-size: toRem(14);
    margin: toRem(16) toRem(8) toRem(16) toRem(19);
  }

  .order-detail__choosed-adress .order-detail__btns-container {
    display: none;
  }
  .order-detail__btns-container {
    display: none;
  }
  .order-detail__btn-delete {
    width: toRem(36);
    height: toRem(36);
  }

  .order-detail__btn-delete::before {
    font-size: toRem(14);
  }
  .order-detail__choosed-adress {
    min-height: toRem(133);
    padding-bottom: 0;
  }
  .order-detail__choosed-adress .order-detail__btn-holder__line {
    @include display-flex();
  }
}

@media (max-width: 280px) {
  .address-detail__user-reciver,
  .address-detail__user-phone {
    font-size: toRem(12);
    margin-left: toRem(5);
  }
  .address-detail__user-phone::after {
    margin-right: toRem(4);
    font-size: toRem(12);
  }
  .address-detail__user-reciver::before {
    margin-left: toRem(4);
    font-size: toRem(12);
  }
  .order-detail__title {
    font-size: toRem(14);
    margin: toRem(20) toRem(6) toRem(16) toRem(19);
  }
}

</style>
