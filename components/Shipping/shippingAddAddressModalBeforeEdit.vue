<template>
    <div
        class="modal modal-animation__open"
        :class="{ 'modal-animation__close': modalClose }"
        dir="rtl"
    >
        <div class="w-100 p-modal-header">
            <div class="w-100 p-modal-header-mobile">
                <div
                    class="w-100 d-flex justify-content-center p-modal-header-icon"
                >
                    <img
                        @click="closeModalDesktop"
                        class="modal__close-cross"
                        src="/icons/close.svg"
                    />
                    <img
                        @click="closeModalMobile"
                        class="modal__close-line"
                        src="/icons/line.svg"
                    />
                </div>

                <div class="p-modal-header-top align-items-center">
                    <img
                        @click="closeModalMobile"
                        class="p-modal-header-icon-location"
                        src="/icons/location_adress.svg"
                    />
                    <span class="p-modal-header-top-title"
                        >افزودن آدرس جدید</span
                    >
                </div>

                <hr class="splicer-line" />
            </div>

            <div class="p-modal-header-desktop w-100 flex-column">
                <div class="w-100 p-modal-header-top-main">
                    <div class="p-modal-header-top align-items-center">
                        <img
                            class="p-modal-header-icon-location"
                            src="/icons/location_adress.svg"
                        />
                        <h3 class="p-modal-header-top-title">
                            افزودن آدرس جدید
                        </h3>
                    </div>
                    <div class="p-modal-header-close ">
                        <img
                            @click="closeModalDesktop"
                            class="modal__close-cross p-modal-header-close-icon"
                            src="/icons/close_modal_address.svg"
                        />
                    </div>
                </div>
                <span class="splicer-line p-modal-header-line"></span>
            </div>
        </div>

        <form
            @submit.prevent=""
            class="w-100 p-modal_wrapper align-items-start"
        >
            <div class="p-modal-content w-100 align-items-start flex-wrap">
                <div
                    :class="{
                        'p-modal-show_error': showErrorValidationAddress
                    }"
                    class="w-100 p-modal-address"
                >
                    <h3 class="p-modal-wrapper-province_city-title">
                        نشانی پستی دقیق :
                    </h3>
                    <input
                        maxlength="65"
                        @keyup="updateAddress"
                        v-model="formData.address"
                        type="text"
                        class="p-modal-address-input p-input-style__default "
                    />
                    <span class="pass__alert ">{{
                        errorValidationNumberAddress
                    }}</span>
                </div>

                <div class="w-100 p-modal-content-items flex-wrap">
                    <div
                        :class="{
                            'p-modal-show_error': showErrorValidationProvince
                        }"
                        class="p-modal-wrapper-item flex-wrap "
                        :key="initialValueProvince"
                    >
                        <h3 class="p-modal-wrapper-province_city-title">
                            انتخاب استان:
                        </h3>
                        <customeDropDown
                            :options="allProvince"
                            :initial-value="initialValueProvince"
                            label="title"
                            className="p-modal-select-box-province_city"
                            @last-update="selectedProvince"
                        ></customeDropDown>
                        <!-- <span class="pass__alert p-modal-validation-desktop">استان خود را انتخاب کنید</span> -->
                        <span class="pass__alert ">انتخاب استان</span>
                    </div>
                    <div
                        :class="{
                            'p-modal-show_error': showErrorValidationCity
                        }"
                        class="p-modal-wrapper-item"
                    >
                        <h3 class="p-modal-wrapper-province_city-title">
                            انتخاب شهر :
                        </h3>
                        <customeDropDown
                            :options="allCitys"
                            :initial-value="initialValueCity"
                            label="title"
                            className="p-modal-select-box-province_city"
                            @last-update="selectedCity"
                        ></customeDropDown>
                        <!-- <span class="pass__alert p-modal-validation-desktop">لطفا شهر خود را انتخاب کنید</span> -->
                        <span class="pass__alert">انتخاب شهر</span>
                    </div>
                    <div
                        :class="{
                            'p-modal-show_error': showErrorValidationCodePoste
                        }"
                        class="p-modal-wrapper-item p-margin-left-0"
                    >
                        <h3
                            class="p-modal-wrapper-province_city-title p-modal-header-mobile"
                        >
                            کد پستی :
                        </h3>
                        <h3
                            class="p-modal-wrapper-province_city-title p-modal-header-desktop"
                        >
                            کد پستی (اختیاری) :
                        </h3>
                        <input
                            @keyup="updateCodePoste"
                            v-model="formData.codePoste"
                            maxlength="10"
                            type="text"
                            class="p-modal-item-input p-input-style__default"
                        />
                        <span class="pass__alert ">{{
                            validationCodePosteMsg
                        }}</span>
                    </div>
                    <div
                        :class="{
                            'p-modal-show_error': showErrorValidationNameReceiver
                        }"
                        class="p-modal-wrapper-item "
                    >
                        <h3 class="p-modal-wrapper-province_city-title">
                            نام گیرنده:
                        </h3>
                        <input
                            @keyup="updateNameReceiver"
                            v-model="formData.nameReceiver"
                            maxlength="34"
                            type="text"
                            class="p-modal-item-input p-input-style__default"
                        />
                        <span class="pass__alert ">{{
                            validationNameReceiverMsg
                        }}</span>
                        <!-- <span class="pass__alert  p-modal-validation-mobile">اشتباه است</span> -->
                    </div>

                    <div
                        :class="{
                            'p-modal-show_error': showErrorValidationNumberReceiver
                        }"
                        class="p-modal-wrapper-item"
                    >
                        <h3 class="p-modal-wrapper-province_city-title">
                            شماره گیرنده :
                        </h3>
                        <input
                            @keyup="UpdateNumberReceiver"
                            v-model="formData.numberReceiver"
                            maxlength="11"
                            type="text"
                            class="p-modal-item-input  p-input-style__default"
                        />
                        <span class="pass__alert ">{{
                            errorValidationNumberReceiverMsg
                        }}</span>
                        <!-- <span class="pass__alert  p-modal-validation-mobile">اشتباه است</span> -->
                    </div>
                </div>
            </div>

            <div
                class="p-profile-favorite-btns w-100 justify-content-center p-modal-btns"
            >
                  <base-button
                    @button-clicked="submitAddressAdd"
                    classes="p-product-btn p-favorite-product-btn-modal-delete"
                    base-color="yellow"
                    no-box-shadow
                  >
                   {{ getTextByTextKey("public_submit") }}
                </base-button>
                  <base-button
                    @button-clicked="closeModalMobile"
                    classes="p-product-btn p-favorite-product-btn-modal-cancel"
                    no-box-shadow
                    base-color="light-gray"
                  >
                    {{ getTextByTextKey("public_back") }}
                </base-button>
            </div>
        </form>
    </div>
</template>
<script>
import customeDropDown from "~/modules/customeDropDown.vue";
import { getTextByTextKey } from "../../modules/splitPartJsonResource";
import "~/assets/styles/_adresses.scss";

export default {
    props: {
        allProvince: { type: [Object, Array], default: [] },
        allCitys: { type: [Object, Array], default: [] },
        formDataOriginal: { type: [Object, Array], default: {} },
        dataEditAddress: { type: Object, default: {} },
        profilePhoneNumber: { type: [Number, String], default: "" }
    },
    components: {
        customeDropDown
    },
    data() {
        return {
            modalClose: false,
            msg: [],
            valueProvince: {},
            valueCitys: {},
            formData: {},
            initialValueProvince: "",
            initialValueCity: "",
            showErrorValidationAddress: false,
            showErrorValidationNumberReceiver: false,
            showErrorValidationNameReceiver: false,
            showErrorValidationCodePoste: false,
            showErrorValidationCity: false,
            showErrorValidationProvince: false,
            errorValidationNumberReceiverMsg: "عدد مجاز است",
            validationNameReceiverMsg: "معتبر نیست",
            validationCodePosteMsg: "معتبر نیست",
            errorValidationNumberAddress: "عدد مجاز است"
        };
    },

    watch: {
        dataEditAddress(data) {}
    },

    created() {
        // پس از کلیک روی ویرایش آدرس کاندیشن زیر اجرا می شود //
        if (typeof this.dataEditAddress.id != "undefined") {
            for (let key in this.dataEditAddress) {
                this.formData[key] = this.dataEditAddress[key];
            }

            this.initialValueProvince = this.formData.province;
            this.initialValueCity = this.formData.city;
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
        isEmailAddress(str) {
            var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return pattern.test(str); // returns a boolean
        },

        isNotEmpty(str) {
            var pattern = /\S+/;
            return pattern.test(str); // returns a boolean
        },

        isNumber(str) {
            var pattern = /^\d+$/;
            return pattern.test(str); // returns a boolean
        },

        isSame(str1, str2) {
            return str1 === str2;
        },

        updateCodePoste(e, submitValue) {
            const value = e.target.value;

            // در صورت خالی نبودن اجرا می شود //
            if (this.isNotEmpty(value)) {
                // در صورتی که مقدار نوشته شده عدد بود اجرا می شود //
                if (this.isNumber(value)) {
                    if (value.length == 11) {
                        this.showErrorValidationCodePoste = true;
                        this.validationCodePosteMsg = "بیش از حد مجاز";
                    } else {
                        this.validationCodePosteMsg = "معتبر نیست";
                        this.showErrorValidationCodePoste = false;
                    }
                } else {
                    this.validationCodePosteMsg = "معتبر نیست";
                    this.showErrorValidationCodePoste = true;
                }
            } else {
                this.showErrorValidationCodePoste = false;
            }
        },

        checkHasString(value) {
            let num = value;
            let digits = num.toString().split("");
            let realDigits = digits.map(Number);
            let checkStringNumberStatus = false;
            let counterCheckLenNumber = -1;
            let inValid = /\s/;

            realDigits.map((t, i) => {
                if (isNaN(t)) {
                    counterCheckLenNumber++;
                }
            });

            if (realDigits.length - 1 == counterCheckLenNumber) {
                checkStringNumberStatus = true;
            }

            // در صورتی که کاربر مقدار نوشته شده اش فاصله داشته باشد اجرا می شود //
            if (inValid.test(value)) {
                checkStringNumberStatus = true;
            }

            return checkStringNumberStatus;
        },

        updateNameReceiver(e, submitValue) {
            const value = e.target.value;

            // در صورت خالی نبودن اجرا می شود //
            if (this.isNotEmpty(value)) {
                // فقط باید مقدار مورد نظر حروف باشد که اجرا شود //
                if (this.checkHasString(value)) {
                    this.showErrorValidationNameReceiver = false;
                    if (value.length == 35) {
                        this.validationNameReceiverMsg = "بیش از حد مجاز";
                        this.showErrorValidationNameReceiver = true;
                    }
                } else {
                    this.validationNameReceiverMsg = "معتبر نیست";
                    this.showErrorValidationNameReceiver = true;
                }
            } else {
                this.showErrorValidationNameReceiver = false;
            }
        },

        UpdateNumberReceiver(e, submitValue) {
            const value = e.target.value;

            if (this.isNotEmpty(value)) {
                if (this.isNumber(value)) {
                    if (value.length == 12) {
                        this.errorValidationNumberReceiverMsg =
                            "بیش از حد مجاز";
                        this.showErrorValidationNumberReceiver = true;
                    } else {
                        this.showErrorValidationNumberReceiver = false;
                    }

                    // if (value.length < 11) {
                    //   this.errorValidationNumberReceiverMsg = 'بیش از حد مجاز';
                    //   this.showErrorValidationNumberReceiver  = true;
                    // }
                } else {
                    this.errorValidationNumberReceiverMsg = "معتبر نیست";
                    this.showErrorValidationNumberReceiver = true;
                }
            } else {
                this.showErrorValidationNumberReceiver = false;
            }
        },

        updateAddress(e, submitValue) {
            const value = e.target.value;

            if (value != "") {
                if (this.isNotEmpty(value)) {
                    this.showErrorValidationAddress = false;
                }

                if (value.length == 65) {
                    this.showErrorValidationAddress = true;
                    this.errorValidationNumberAddress = "بیش از حد مجاز";
                }
            } else {
                this.showErrorValidationAddress = false;
            }
        },

        closeModalMobile() {
            this.modalClose = true;
            setTimeout(() => {
                this.$emit("close-modal");
            }, 280);
        },

        closeModalDesktop() {
            this.$emit("close-modal");
        },

        checkValidFormData() {},

        checkShowErrorCityProvince() {
            if (this.formData.province == "") {
                this.showErrorValidationProvince = true;
            } else {
                this.showErrorValidationProvince = false;
            }

            if (this.formData.city == "") {
                this.showErrorValidationCity = true;
            } else {
                this.showErrorValidationCity = false;
            }
        },

        checkErrorForm() {
            let checkVerifiSubmitForm = true;

            const checkEmptyForm = () => {
                if (this.formData.address == "") {
                    this.showErrorValidationAddress = true;
                    this.errorValidationNumberAddress = "معتبر نیست";
                }

                // if (this.formData.nameReceiver.length != 11) {
                //   this.validationNameReceiverMsg       = 'اشتباه است';
                //   this.showErrorValidationNameReceiver = true;
                // }

                if (this.formData.nameReceiver == "") {
                    this.showErrorValidationNameReceiver = true;
                    this.validationNameReceiverMsg = "معتبر نیست";
                }

                if (this.formData.numberReceiver == "") {
                    this.showErrorValidationNumberReceiver = true;
                    this.errorValidationNumberReceiverMsg = "معتبر نیست";
                }

                if (this.formData.numberReceiver.length != 11) {
                    this.showErrorValidationNumberReceiver = true;
                    this.errorValidationNumberReceiverMsg = "معتبر نیست";
                }

                if (this.formData.numberReceiver.length > 11) {
                    this.showErrorValidationNumberReceiver = true;
                    this.errorValidationNumberReceiverMsg = "بیش از حد مجاز";
                }

                if (this.formData.codePoste != "") {
                    if (this.formData.codePoste.length != 10) {
                        this.showErrorValidationCodePoste = true;
                        this.validationCodePosteMsg = "معتبر نیست";
                    }
                }

                if (this.formData.codePoste.length == 11) {
                    this.showErrorValidationCodePoste = true;
                    this.validationCodePosteMsg = "بیش از حد مجاز";
                }

                this.checkShowErrorCityProvince();
                // this.updateNameReceiver('',this.formData.nameReceiver);
            };

            checkEmptyForm();

            // در صورت داشتن ارور اجرا می شود //
            if (
                this.showErrorValidationAddress ||
                this.showErrorValidationNumberReceiver ||
                this.showErrorValidationNameReceiver ||
                this.showErrorValidationCodePoste ||
                this.showErrorValidationCity ||
                this.showErrorValidationProvince
            ) {
                checkVerifiSubmitForm = false;
            }

            return checkVerifiSubmitForm;
        },

        submitAddressAdd() {
            const checkVerifiSubmitForm = this.checkErrorForm();

            // در صورتی که اروی برای نمایش نباشد ارسال می شود //
            if (checkVerifiSubmitForm) {
                this.modalClose = true;
                setTimeout(() => {
                    this.$emit("submit-address-add", this.formData);
                }, 280);
            }
        },

        selectedProvince(value, allData) {
            this.formData.province = value;
            this.formData.selectedProvinceAllProperty = allData;
            this.showErrorValidationProvince = false;
            this.$emit("selected-province", allData);
        },

        selectedCity(value, allData) {
            this.formData.city = value;
            this.formData.selectedCityAllProperty = allData;
            this.showErrorValidationCity = false;
            this.$emit("selected-city", allData);
        },
      getTextByTextKey,
    }
};
</script>
<style lang="scss" scoped>
.p-modal-header-icon {
    @include display-flex();
}
.modal {
    @include display-flex();
    flex-direction: column;
    align-items: center;
    width: 982px;
    height: 623px;
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
    margin-left: 0;
}
.p-modal_wrapper {
    padding-right: 191px;
    padding-left: 191px;
    @include display-flex();
    padding-top: 51px;
}
.p-modal-wrapper-item {
    width: 175px;
    margin-left: 37px;
    margin-bottom: 11px;
}
.p-modal-wrapper-item:last-of-type {
    margin-left: 0;
}
.p-modal-wrapper-province_city-title {
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
    color: $black;
    text-align: right;
    padding-right: 7px;
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
    margin-right: 11.5px;
}
.p-modal-header {
    padding-right: 41px;
    padding-left: 41px;
}
.p-modal-content {
    @include display-flex();
}
.p-modal-content-items {
    @include display-flex();
}
.p-modal-address-input {
    width: 100%;
}
.p-modal-address {
    margin-bottom: 19px;
}
.p-modal-header-line {
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    height: 1px;
    background: $gray-border;
    @include display-flex();
    margin-top: 2px;
}
.p-modal-header-top-main {
    @include display-flex();
}
.p-modal-header-top {
    padding-top: 11px;
}
.p-modal-btns {
    padding-top: 49px;
    /* border: 1px solid red; */
    @include display-flex();
}
/* .p-modal-address{
  // height: 109px;
} */
.p-modal-show_error .pass__alert {
    visibility: inherit;
}
.p-modal-show_error .p-modal-item-input {
    border: solid 1px $red !important;
}
.p-modal-validation-mobile {
    display: none !important;
}
.p-input-style__default:focus {
    border: solid 1px $black;
}
.p-product-btn {
  width: 150px;
  height: 47px;
  font-family: inherit;
  transition: all 120ms ease-in;
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
        height: 723px;
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
    .p-modal-wrapper-province_city-title {
        font-size: 14px;
    }
    .p-modal-wrapper-item {
        width: 43%;
        margin-left: 13%;
        margin-bottom: 4px;
    }
    .p-modal-wrapper-item:nth-child(2n) {
        margin-left: 0;
    }
    .p-modal-wrapper-item:nth-child(3n) {
        margin-left: 13%;
    }
    .p-input-style__default {
        width: 100%;
    }
    .p-modal_wrapper {
        padding-right: 32px;
        padding-left: 32px;
        padding-top: 24px;
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
    .p-modal-header-top {
        padding-top: 32px;
    }
    .p-modal-btns {
        padding-top: 55px;
    }
}

@media (max-width: 540px) {
    .modal {
        height: 688px;
    }
    .p-modal-btns {
        padding-top: 25px;
    }
}

@media screen and (max-width: 485px) {
    .p-product-btn {
        width: 47%;
        margin-left: 0;
    }
    .p-favorite-product-btn-modal-delete {
        margin-left: 4%;
    }
    .p-favorite-product-btn-modal-cancel {
        margin-left: 0;
    }
    .p-modal-btns {
        padding-top: 9px;
    }
    .modal {
        height: 617px;
    }
    .p-modal-address {
        margin-bottom: 6px;
    }
    .p-modal_wrapper {
        padding-right: 29px;
        padding-left: 29px;
    }
    .p-modal-wrapper-item {
        margin-bottom: 6px;
    }
    .modal .pass__alert {
        height: 20px;
    }
    .splicer-line {
        margin-top: 16px;
    }
    .p-modal-header-top {
        padding-top: 33px;
    }
    .p-input-style__default {
        height: 46px;
    }
    .p-modal-wrapper-item {
        margin-bottom: 0;
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
    .modal {
        height: 536px;
    }
    .p-modal_wrapper {
        padding-top: 0;
    }
    .p-modal-header-top {
        padding-top: 16px;
    }
    .p-modal-btns {
        padding-top: 9px;
    }
    .p-modal-wrapper-province_city-title {
        margin-bottom: 8px;
    }
    .p-modal-address {
        margin-bottom: 0;
    }
    .p-modal-wrapper-item {
        margin-bottom: 1px;
    }
}

@media screen and (max-width: 280px) {
    .modal {
        height: 617px;
    }
    .p-modal-wrapper-province_city-title {
        margin-bottom: 11px;
    }
    .p-favorite-product-btn-modal-delete {
        margin-left: 3%;
    }
    .p-modal_wrapper {
        padding-top: 24px;
    }
    .splicer-line {
        margin-top: 17px;
        margin-bottom: 0px;
    }
    .p-modal-wrapper-item {
        margin-bottom: 6px;
    }
    .p-modal-wrapper-province_city-title {
        margin-bottom: 16px;
    }
}
</style>
