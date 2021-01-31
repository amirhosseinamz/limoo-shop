<template>
    <div class="p-adresses-content-main w-100 flex-column flex-wrap  d-rtl">
        <transition moda="in-out">
            <div id="overlay" v-if="passChangeIsActive">
                <add-ticket-modal
                    :all-province="allProvince"
                    :all-citys="allCitys"
                    :form-data-original="formData"
                    :data-edit-address="dataEditAddress"
                    :profile-phone-number="profilePhoneNumber"
                    @selected-province="selectedProvince"
                    @selected-city="selectedCity"
                    @submit-address-add="submitAddressAdd"
                    @close-modal="closeModal"
                />
            </div>
        </transition>

        <div class="w-100 flex-wrap p-adresses-content-btn-add-main">
            <button
                @click="addAddress"
                type="submit"
                class=" btn-change p-adresses-content-btn-data"
            >
                ارسال درخواست جدید
            </button>
            <span class="p-ticket__topic">درخواست های شما</span>
        </div>

        <div class="w-100 flex-wrap p-adresses-content-items">
            <div
                v-for="data in adressData"
                :key="data.id"
                class="w-100 flex-wrap p-adresses-content-item"
            >
                <div
                    class="flex-wrap w-100 p-adresses-content-wrapper align-items-start"
                >
                    <div class="d-flex align-items-start w-100">
                        <div class="w-100 flex-wrap  p-adresses-content-header">
                            <!-- ======================== -->
                            <div class="ticket__title">
                                {{ data.ticketTitle }}
                            </div>
                            <!-- ----- -->
                            <div class="p-tickets__state">
                                <div
                                    v-show="data.state == 'accepted'"
                                    class="p-tickets__state-accepted"
                                >
                                    <span
                                        class="p-tickets__state-accepted__icon"
                                    ></span>
                                    <span
                                        class="p-tickets__state-accepted__title"
                                        >تایید شده</span
                                    >
                                </div>
                                <div
                                    v-show="data.state == 'acceptting'"
                                    class="p-tickets__state-acceptting"
                                >
                                    <span
                                        class="p-tickets__state-acceptting__icon"
                                    ></span>
                                    <span
                                        class="p-tickets__state-acceptting__title"
                                        >در انتظار تایید</span
                                    >
                                </div>
                            </div>
                            <!-- ----- -->
                        </div>

                        <div
                            class="w-100 flex-column p-adresses-content-data-main"
                        >
                            <div
                                class="w-100 flex-wrap  p-adresses-content-data-wrapper"
                            >
                                <div class="w-100 p-adresses-content-data">
                                    <div class="ticket-content__question">
                                        {{ data.question }}
                                    </div>
                                    <div
                                        v-show="data.answer"
                                        class="ticket-content__answer"
                                    >
                                        پاسخ: {{ data.answer }}
                                    </div>
                                </div>
                                <div
                                    class="p-adresses-content-data-btns w-100 justify-content-end"
                                >
                                    <div class="p-favorite-product-btn-main">
                                        <button
                                            @click="editAddress(data)"
                                            type="button"
                                            class="p-product-btn cursor-pointer p-ticket-content-btn-edit"
                                            name="button"
                                        ></button>
                                        <button
                                            @click="
                                                showModalDeleteProduct(data)
                                            "
                                            class="p-favorite-product-btn-delete cursor-pointer  p-adresses-content-btn-delete"
                                            name="button"
                                        ></button>
                                    </div>
                                    <button
                                        v-show="data.answer"
                                        class="ticket__send-answer"
                                    >
                                        ارسال پاسخ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import addTicketModal from "./addTicketModal.vue";

export default {
    props: {
        allProvince: { type: [Object, Array], default: [] },
        allCitys: { type: [Object, Array], default: [] },
        adressData: { type: [Object, Array], default: {} },
        formData: { type: [Object, Array], default: {} },
        profilePhoneNumber: { type: [Number, String], default: "" }
    },
    components: {
        addTicketModal
    },
    data() {
        return {
            passChangeIsActive: false,
            dataEditAddress: {}
        };
    },

    components: {},

    computed: {},

    methods: {
        showModalDeleteProduct(data) {
            this.$emit("show-modal-delete-product", data);
        },

        addAddress() {
            this.dataEditAddress = {};
            this.passChangeIsActive = !this.passChangeIsActive;
        },

        selectedProvince(data) {
            this.$emit("selected-province", data);
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
        },

        closeModal() {
            this.dataEditAddress = {};
            this.passChangeIsActive = false;
        },

        editAddress(data) {
            this.dataEditAddress = data;
            this.passChangeIsActive = true;
        }
    }
};
</script>

<style lang="scss" scoped>
#overlay {
    position: fixed; /* Sit on top of the page content */
    @include display-flex();
    justify-content: center;
    align-items: center;
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    /* transition: opacity 200ms ease-out; */
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
    z-index: 1;
    background: $overlay__profile;
    top: 0;
    right: 0;
}

.p-adresses-content-main {
    /* padding-right: 21px;
    padding-left: 21px; */
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: $white;

    padding: 0 24px 19px 24px;
}
.p-adresses-content-btn-add-main {
    @include display-flex();
    flex-direction: column;
    /* border: 1px solid red; */
    height: 168px;
}
.p-ticket__topic {
    font-size: 18px;
    line-height: 140.62%;
    text-align: right;
    margin-right: 1px;
    margin-top: 28px;
}
.p-adresses-content-btn-data {
    margin: 38px 14px 0 0;
    font-size: 16px;
    height: 57px;
    width: 270px;
    color: $yellow;
    background: $white;
    border: 2px solid $yellow;
    box-shadow: 0px 8px 16px $box__shadow;
}
.p-adresses-content-btn-data:hover {
    color: $white;
    background: $yellow;
}
.p-adresses-content-item {
    @include display-flex();
    border: 1px solid $light-gray;
    border-radius: 10px;
    height: fit-content;
    min-height: 247px;
    margin-bottom: 16px;
    /* border: 1px solid red; */
}
.p-adresses-content-header {
    @include display-flex();
    justify-content: space-between;
    align-items: center;
    padding-right: 16px;
    padding-left: 24px;
    border-bottom: 1px solid $light-gray;
    height: 70px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.ticket__title {
    font-size: 16px;
    line-height: 140.62%;
    color: $red-logout;
    text-align: right;
}
.p-tickets__state {
    margin: auto 0;
}
.p-tickets__state-accepted,
.p-tickets__state-acceptting {
    @include display-flex();
    flex-direction: row;
}
.p-tickets__state-accepted__title,
.p-tickets__state-acceptting__title {
    font-size: 14px;
    line-height: 140.62%;
    color: $gray;
}
.p-tickets__state-accepted__icon {
    @include display-flex();
    align-self: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 3px solid $light__blue;
    background-color: $code-request;
    margin-left: 11px;
}
.p-tickets__state-accepted__icon::before {
    margin: auto;
    @include font-icon__limoo();
    font-size: 6px;
    content: "\e82b";
    color: $white;
}
.p-tickets__state-acceptting__icon {
    @include display-flex();
    align-self: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 3px solid $border__yellow;
    background-color: $yellow;
    margin-left: 11px;
}
.p-adresses-content-data {
    @include display-flex();
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 16px;
    padding-left: 16px;
}
.ticket-content__question {
    text-align: right;
    margin-top: 24px;
    font-size: 16px;
    line-height: 140.62%;
    color: $black-topic;
}
.ticket-content__answer {
    text-align: right;
    margin-top: 24px;
    font-size: 16px;
    line-height: 140.62%;
    color: $green__answer;
}
.p-adresses-content-text-data {
    font-family: inherit;
    font-size: 16px;
    color: $black-topic;
    font-weight: 400;
}
.p-adresses-content-text-main {
    @include display-flex();
    margin-top: 25px;
    margin-bottom: 36px;
}
.p-adresses-content-data-btns {
    @include display-flex();
    flex-direction: row-reverse;
    justify-content: flex-start;
    padding-left: 24px;
    height: 85px;
    align-items: flex-start;
    margin-top: 25px;
    /* border: 1px solid red; */
}
.ticket__send-answer {
    border: none;
    font-family: inherit;
    font-size: 16px;
    height: 47px;
    width: 130px;
    background-color: $yellow;
    color: $white;
    border-radius: 10px;
    margin-left: 24px;
    cursor: pointer;
}
.ticket__send-answer:hover {
    background-color: $white;
    color: $yellow;
    border: 2px solid $yellow;
}
.p-ticket-content-btn-edit::before {
    @include font-icon__limoo();
    font-size: 16px;
    content: "\e80e";
    color: $yellow;
}
.p-ticket-content-btn-edit:hover::before {
    color: $white;
}
.p-ticket-content-btn-edit {
    /* background: $yellow; */
    border: 2px solid $yellow;
    border-radius: 10px;
    height: 47px;
    width: 47px;
}
.p-adresses-content-wrapper {
    @include display-flex();
}
.p-adresses-content-data-main {
    @include display-flex();
}
.p-adresses-content-edit-icon {
    width: 16px;
    height: 16px;
}
.p-favorite-product-btn-delete::before {
    @include font-icon__limoo();
    font-size: 16px;
    content: "\e826";
    color: $input-border;
}

.p-adresses-content-data-wrapper {
    height: fit-content;
    min-height: 177px;
    @include display-flex();
    align-content: space-between;
    /* border: 1px solid blue; */
}
.p-favorite-product-btn-main {
    margin-bottom: 34px;
}

@media (max-width: 1220px) {
}

@media (max-width: 1024px) {
}

@media (max-width: 960px) {
    .p-adresses-content-main {
        border-radius: 10px;
        padding: 0 11px 18px 11px;
    }
    .p-adresses-content-btn-add-main {
        height: 130px;
        /* background: $white; */
        margin-top: 8px;
    }
    .p-adresses-content-btn-data {
        margin: 24px auto 0 auto;
        height: 47px;
        width: 259px;
        border: 2px solid $yellow;
    }
    .p-ticket__topic {
        font-size: 14px;
        margin-right: 0;
        margin-top: 24px;
        margin-bottom: 14px;
    }
}

@media (max-width: 600px) {
    .p-adresses-content-header {
        /* flex-flow: column; */
        padding-right: 8px;
        padding-left: 8px;
        min-height: 55px;
        height: fit-content;
        background: $white;
    }
    .p-adresses-content-item {
        background: $white;
        min-height: fit-content;
        margin-bottom: 8px;
    }

    .p-adresses-content-text-data {
        font-size: 14px;
    }
    .p-adresses-content-data-btns {
        margin-bottom: 0;
        margin-top: 35px;
        height: 63px;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid $gray-border;
    }
    .ticket__title {
        font-size: 13px;
    }

    .ticket__send-answer {
        width: 149px;
        margin-right: 8px;
    }
    .ticket-content__question {
        text-align: justify;
        margin-top: 8px;
        font-size: 14px;
    }
    .ticket-content__answer {
        text-align: justify;
        margin-top: 16px;
        font-size: 14px;
    }
    .p-adresses-content-data {
        padding-right: 8px;
        padding-left: 40px;
    }
    .p-favorite-product-btn-delete {
        width: 37px;
        height: 37px;
    }
    .p-tickets__state-accepted__title,
    .p-tickets__state-acceptting__title {
        font-size: 13px;
    }
    .p-tickets__state-accepted__icon {
        margin-left: 8px;
    }
    .p-tickets__state-accepted__icon::before {
        font-size: 5px;
    }
    .p-tickets__state-acceptting__icon {
        margin-left: 8px;
    }
    .p-adresses-content-btn-delete {
        margin-right: 16px;
    }
    .p-ticket-content-btn-edit {
        background: $yellow;
        height: 36px;
        width: 36px;
    }
    .p-ticket-content-btn-edit:hover {
        background: $white;
    }
    .p-ticket-content-btn-edit::before {
        font-size: 14px;
        color: $white;
    }
    .p-ticket-content-btn-edit:hover::before {
        color: $yellow;
    }
    .p-adresses-content-text-main {
        margin-bottom: 0;
    }
    /* .p-adresses-content-data-wrapper {
        height: auto;
    } */
    .p-adresses-content-data-wrapper {
        min-height: 166px;
    }
    .p-favorite-product-btn-main {
        margin-bottom: 0;
    }
    .p-adresses-content-item:last-of-type {
        margin-bottom: 0;
    }
}
@media (max-width: 280px) {
    .p-adresses-content-btn-data {
        width: 200px;
    }
    .p-adresses-content-main {
        padding: 0 0 18px 0;
    }
}
</style>
