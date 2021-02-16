<template>
    <div class="p-tickets-content-main w-100 flex-column flex-wrap  d-rtl">
        <transition moda="in-out">
            <div id="overlay" v-if="passChangeIsActive">
                <add-ticket-modal
                    :form-data-original="formData"
                    :data-edit-ticket="dataEditTicket"
                    @submit-ticket-add="submitTicketAdd"
                    @close-modal="closeModal"
                />
            </div>
        </transition>
        <transition moda="in-out">
            <div id="ansoverlay" v-if="sendAnswerToTicket">
                <send-ans-ticket-modal
                    :form-data-original="formData"
                    :data-edit-ticket="dataEditTicket"
                    @submit-ticket-add="submitTicketAdd"
                    @close-modal="closeModal"
                />
            </div>
        </transition>
        <div class="w-100 flex-wrap p-tickets-content-btn-add-main">
            <button
                @click="addTicket"
                type="submit"
                class=" btn-change p-tickets-content-btn-data"
            >
                ارسال درخواست جدید
            </button>
            <span class="p-ticket__topic">درخواست های شما</span>
        </div>

        <div class="w-100 flex-wrap">
            <div
                v-for="data in ticketData"
                :key="data.id"
                class="w-100 flex-wrap p-tickets-content-item"
            >
                <div
                    class="flex-wrap w-100 p-ticketss-content-wrapper align-items-start"
                >
                    <div class="d-flex align-items-start w-100">
                        <div class="w-100 flex-wrap  p-tickets-content-header">
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
                            class="w-100 flex-column p-tickets-content-data-main"
                        >
                            <div
                                class="w-100 flex-wrap  p-tickets-content-data-wrapper"
                            >
                                <div class="w-100 p-tickets-content-data">
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
                                    class="p-tickets-content-data-btns w-100 justify-content-end"
                                >
                                    <div class="p-favorite-product-btn-main">
                                        <button
                                            @click="editTicket(data)"
                                            type="button"
                                            class="p-product-btn cursor-pointer p-ticket-content-btn-edit"
                                            name="button"
                                        ></button>
                                        <button
                                            @click="
                                                showModalDeleteProduct(data)
                                            "
                                            class="p-favorite-product-btn-delete cursor-pointer  p-tickets-content-btn-delete"
                                            name="button"
                                        ></button>
                                    </div>
                                    <button
                                        v-show="data.answer"
                                        @click="sendAnswer"
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
import sendAnsTicketModal from "./sendAnsTicketModal.vue";

export default {
    props: {
        ticketData: { type: [Object, Array], default: {} },
        formData: { type: [Object, Array], default: {} }
    },
    components: {
        addTicketModal,
        sendAnsTicketModal
    },
    data() {
        return {
            passChangeIsActive: false,
            sendAnswerToTicket: false,
            dataEditTicket: {}
        };
    },

    components: {},

    computed: {},

    methods: {
        showModalDeleteProduct(data) {
            this.$emit("show-modal-delete-product", data);
        },

        addTicket() {
            this.dataEditTicket = {};
            this.passChangeIsActive = !this.passChangeIsActive;
        },

        selectedProvince(data) {
            this.$emit("selected-province", data);
        },

        selectedCity(data) {
            this.$emit("selected-city", data);
        },

        submitTicketAdd(data) {
            // بر اساس آیدی تغیین می شود که حالت ویرایش است یا خیر //

            let stateEditAdd = "";
            if (typeof this.dataEditTicket.id == "undefined") {
                stateEditAdd = "add";
            } else {
                stateEditAdd = "edit";
            }

            this.passChangeIsActive = false;
            this.$emit("submit-ticket-add", data, stateEditAdd);
        },

        closeModal() {
            this.dataEditTicket = {};
            this.passChangeIsActive = false;
            this.sendAnswerToTicket = false;
        },

        editTicket(data) {
            this.dataEditTicket = data;
            this.passChangeIsActive = true;
        },
        sendAnswer(data) {
            this.sendAnswerToTicket = true;
        }
    }
};
</script>

<style lang="scss" scoped>
#overlay,
#ansoverlay {
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
.p-tickets-content-main {
    /* padding-right: 21px;
    padding-left: 21px; */
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: $white;

    padding: 0 24px 19px 24px;
}
.p-tickets-content-btn-add-main {
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
.p-tickets-content-btn-data {
    margin: 38px 14px 0 0;
    font-size: 16px;
    height: 57px;
    width: 270px;
    color: $yellow;
    background: $white;
    border: 2px solid $yellow;
    box-shadow: 0px 8px 16px $box__shadow;
}
.p-tickets-content-btn-data:hover {
    color: $white;
    background: $yellow;
}
.p-tickets-content-item {
    @include display-flex();
    border: 1px solid $light-gray;
    border-radius: 10px;
    height: fit-content;
    min-height: 247px;
    margin-bottom: 16px;
    /* border: 1px solid red; */
}
.p-tickets-content-header {
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
.p-tickets-content-data {
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
.p-tickets-content-data-btns {
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
.p-ticketss-content-wrapper {
    @include display-flex();
}
.p-tickets-content-data-main {
    @include display-flex();
}

.p-favorite-product-btn-delete::before {
    @include font-icon__limoo();
    font-size: 16px;
    content: "\e826";
    color: $input-border;
}

.p-tickets-content-data-wrapper {
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
    .p-tickets-content-main {
        border-radius: 10px;
        padding: 0 11px 18px 11px;
    }
    .p-tickets-content-btn-add-main {
        height: 130px;
        /* background: $white; */
        margin-top: 8px;
    }
    .p-tickets-content-btn-data {
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
    .ticket__send-answer {
        font-size: 14px;
        width: 149px;
    }
}

@media (max-width: 600px) {
    .p-tickets-content-header {
        /* flex-flow: column; */
        padding-right: 8px;
        padding-left: 8px;
        min-height: 55px;
        height: fit-content;
        background: $white;
    }
    .p-tickets-content-item {
        background: $white;
        min-height: fit-content;
        margin-bottom: 8px;
    }
    .p-tickets-content-data-btns {
        padding-left: 8px;
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
    .p-tickets-content-data {
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
    .p-tickets-content-btn-delete {
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
    .p-tickets-content-data-wrapper {
        min-height: 166px;
    }
    .p-favorite-product-btn-main {
        margin-bottom: 0;
    }
    .p-tickets-content-item:last-of-type {
        margin-bottom: 0;
    }
}
@media (max-width: 280px) {
    .p-tickets-content-btn-data {
        width: 200px;
    }
    .p-tickets-content-main {
        padding: 0 0 18px 0;
    }
}
</style>
