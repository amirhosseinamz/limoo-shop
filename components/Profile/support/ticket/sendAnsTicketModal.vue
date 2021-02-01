<template>
    <div
        class="modal modal-animation__open"
        :class="{ 'modal-animation__close': modalClose }"
        dir="rtl"
    >
        <div class="w-100 p-ticket-modal-header">
            <div class="w-100 p-modal-header-mobile">
                <div
                    class="w-100 d-flex justify-content-center p-modal-header-icon"
                >
                    <span
                        class="modal__close-line"
                        @click="closeModalMobile"
                    ></span>
                </div>
                <span class="p-modal-header-top-title-mobile"
                    >ارسال درخواست</span
                >
            </div>

            <div class="p-modal-header-desktop w-100 flex-column">
                <div class="w-100 p-modal-header-top-main">
                    <div class="p-modal-header-top align-items-center">
                        <h3 class="p-modal-header-top-title">
                            پاسخ شما:
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

        <form
            @submit.prevent=""
            class="w-100 p-modal_wrapper align-items-start"
        >
            <div class="p-modal-content w-100 align-items-start flex-wrap">
                <div class="w-100 p-modal-content-items flex-wrap">
                    <div
                        :class="{
                            'p-modal-show_error': showErrorValidationNameReceiver
                        }"
                        class="p-modal-wrapper-item "
                    >
                        <h3 class="p-modal-wrapper__description-title">
                            پاسخ شما:
                        </h3>
                        <textarea
                            @keyup="updateNameReceiver"
                            v-model="formData.userAnswer"
                            maxlength="500"
                            type="text"
                            class="p-input-style__description"
                        />
                        <span class="pass__alert ">{{
                            validationNameReceiverMsg
                        }}</span>
                    </div>
                </div>
            </div>

            <div
                class="p-profile-favorite-btns w-100 justify-content-center p-modal-btns"
            >
                <button
                    @click="submitAddressAdd"
                    type="button"
                    name="button"
                    class="btn__send-ticket"
                >
                    ارسال
                </button>
                <button
                    @click="eventCloseModal"
                    type="button"
                    name="button"
                    class="btn__cancel-ticket"
                >
                    انصراف
                </button>
            </div>
        </form>
    </div>
</template>
<script>
// import "~/assets/styles/_adresses.scss";

export default {
    props: {
        formDataOriginal: { type: [Object, Array], default: {} },
        dataEditAddress: { type: Object, default: {} }
    },
    components: {},
    data() {
        return {
            modalClose: false,
            msg: [],
            valueProvince: {},
            valueCitys: {},
            formData: {},
            showErrorValidationAddress: false,
            showErrorValidationNumberReceiver: false,
            showErrorValidationNameReceiver: false,
            errorValidationNumberReceiverMsg: "عدد مجاز است",
            validationNameReceiverMsg: "معتبر نیست",
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
        isNotEmpty(str) {
            var pattern = /\S+/;
            return pattern.test(str); // returns a boolean
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
            if (value != "") {
                if (this.isNotEmpty(value)) {
                    this.showErrorValidationNameReceiver = false;
                }
                if (value.length == 500) {
                    this.showErrorValidationNameReceiver = true;
                    this.validationNameReceiverMsg = "بیش از حد مجاز";
                }
            } else {
                this.showErrorValidationNameReceiver = false;
            }
        },
        updateAddress(e, submitValue) {
            const value = e.target.value;

            if (value != "") {
                if (this.isNotEmpty(value)) {
                    this.showErrorValidationAddress = false;
                }
                if (value.length == 200) {
                    this.showErrorValidationAddress = true;
                    this.errorValidationNumberAddress = "بیش از حد مجاز";
                }
            } else {
                this.showErrorValidationAddress = false;
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
                if (this.formData.userAnswer == "") {
                    this.showErrorValidationNameReceiver = true;
                    this.validationNameReceiverMsg = "معتبر نیست";
                }
                this.checkShowErrorCityProvince();
                // this.updateNameReceiver('',this.formData.nameReceiver);
            };

            checkEmptyForm();

            // در صورت داشتن ارور اجرا می شود //
            if (this.showErrorValidationNameReceiver) {
                checkVerifiSubmitForm = false;
            }

            return checkVerifiSubmitForm;
        },

        submitAddressAdd() {
            const checkVerifiSubmitForm = this.checkErrorForm();

            // در صورتی که اروی برای نمایش نباشد ارسال می شود //
            if (checkVerifiSubmitForm) {
                this.$emit("submit-address-add", this.formData);
            }
        },
        eventCloseModal() {
            this.$emit("close-modal");
        }
    }
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
    &__close-line {
        display: none;
        align-self: center;
        margin-top: 24px;
    }

    form {
        @include display-flex();
        flex-direction: column;
        align-items: center;
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
    padding-top: 42px;
}
.p-modal-wrapper-item {
    width: 100%;
    height: 224px;
}

.p-modal-wrapper__description-title {
    display: none;
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
.p-modal-address {
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
    padding-top: 116px;
}
/* .p-modal-address{
  // height: 109px;
} */
.p-modal-show_error .pass__alert {
    visibility: inherit;
}
.p-modal-show_error .p-input-style__description {
    border: solid 1px $red !important;
}
.p-input-style__description {
    @include display-flex();
    width: 100%;
    height: 226px;
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
        height: 224px;
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
        &__close-line {
            display: block;
            align-self: center;
            margin-top: 24px;
        }

        .pass__alert {
            font-size: 13px;
            padding-right: 7px;
        }
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

    .p-modal-wrapper__description-title {
        display: block;
        color: $black-topic;
    }
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
        padding-top: 14px;
        height: fit-content;
    }
    .splicer-line {
        margin-bottom: 0;
        margin-top: 20px;
    }

    .p-modal-header-top-title {
        font-size: 14px;
        color: $gray;
    }

    .p-modal-btns {
        padding-top: 130px;
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

    .p-modal-btns {
        padding-top: 100px;
    }
    .btn__send-ticket,
    .btn__cancel-ticket {
        width: 100px !important;
        font-size: 13px !important;
    }
}

@media screen and (max-width: 280px) {
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
}
</style>
