<template>
    <div class="p-comments-content-main w-100 flex-column flex-wrap  d-rtl">
        <transition moda="in-out">
            <div id="overlay" v-if="passChangeIsActive">
                <add-address-modal
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

        <!-- <div class="w-100 flex-wrap p-adresses-content-btn-add-main p-adresses-content-item-desktop">
          <button @click="addAddress" type="submit" class=" btn-change p-adresses-content-btn-data">
              افزودن آدرس جدید
          </button>
      </div> -->

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
                        <div
                            class="w-100 flex-wrap  p-comments-content-header "
                        >
                            <div class="p-comments__header-holder">
                                <span class="p-comments__title">
                                    {{ data.commentTitle }}
                                </span>
                                <div class="p-comments-idea__title">
                                    <span
                                        v-show="data.idea == 'good'"
                                        class="ideas-title idea-good"
                                        >پیشنهاد میکنم خریداری کنید</span
                                    >
                                    <span
                                        v-show="data.idea == 'bad'"
                                        class="ideas-title idea-bad"
                                        >از خرید این محصول راضی نیستم</span
                                    >
                                    <span
                                        v-show="data.idea == 'mid'"
                                        class="ideas-title idea-mid"
                                        >فعلا تجربه کافی نداشتم</span
                                    >
                                    <div class="p-comments__state-mobile">
                                        <div
                                            v-show="data.state == 'accepted'"
                                            class="p-comments__state-accepted"
                                        >
                                            <span
                                                class="p-comments__state-accepted__icon"
                                            ></span>
                                            <span
                                                class="p-comments__state-accepted__title"
                                                >تایید شده</span
                                            >
                                        </div>
                                        <div
                                            v-show="data.state == 'acceptting'"
                                            class="p-comments__state-acceptting"
                                        >
                                            <span
                                                class="p-comments__state-acceptting__icon"
                                            ></span>
                                            <span
                                                class="p-comments__state-acceptting__title"
                                                >در انتظار تایید</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-comments__state-desktop">
                                <div
                                    v-show="data.state == 'accepted'"
                                    class="p-comments__state-accepted"
                                >
                                    <span
                                        class="p-comments__state-accepted__icon"
                                    ></span>
                                    <span
                                        class="p-comments__state-accepted__title"
                                        >تایید شده</span
                                    >
                                </div>
                                <div
                                    v-show="data.state == 'acceptting'"
                                    class="p-comments__state-acceptting"
                                >
                                    <span
                                        class="p-comments__state-acceptting__icon"
                                    ></span>
                                    <span
                                        class="p-comments__state-acceptting__title"
                                        >در انتظار تایید</span
                                    >
                                </div>
                            </div>

                            <!-- <div
                                class=" p-address-content-header-item align-items-center p-adresses-content-item-mobile"
                            >
                                <img
                                    class="p-address-content-header-icon"
                                    src="/icons/location_adress_yellow.svg"
                                    alt=""
                                />
                                <h3
                                    class="p-address-content-header-item-title"
                                >
                                    {{ data.address }}
                                </h3>
                            </div> -->

                            <!-- <div
                                class=" p-address-content-header-item align-items-center"
                            >
                                <img
                                    class="p-address-content-header-icon"
                                    src="/icons/profile_adress.svg"
                                    alt=""
                                />
                                <h3
                                    class="p-address-content-header-item-title"
                                >
                                    شروین پیکارجو
                                </h3>
                            </div> -->

                            <!-- <div
                                class=" p-address-content-header-item align-items-center"
                            >
                                <img
                                    class="p-address-content-header-icon"
                                    src="/icons/location_adress.svg"
                                    alt=""
                                />
                                <h3
                                    class="p-address-content-header-item-title"
                                >
                                    {{ data.province }}
                                </h3>
                            </div> -->

                            <!-- <div
                                class=" p-address-content-header-item align-items-center"
                            >
                                <img
                                    class="p-address-content-header-icon"
                                    src="/icons/call_adress.svg"
                                    alt=""
                                />
                                <h3
                                    class="p-address-content-header-item-title"
                                >
                                    {{ data.numberReceiver }}
                                </h3>
                            </div> -->

                            <!-- <div
                                class=" p-address-content-header-item align-items-center"
                            >
                                <img
                                    class="p-address-content-header-icon"
                                    src="/icons/message.svg"
                                    alt=""
                                />
                                <h3
                                    class="p-address-content-header-item-title"
                                >
                                    {{ data.codePoste }}
                                </h3>
                            </div> -->
                        </div>
                        <!-- ==================================================================================== -->
                        <div
                            class="w-100 flex-column p-adresses-content-data-main"
                        >
                            <div
                                class="w-100 flex-wrap  p-adresses-content-data-wrapper"
                            >
                                <div
                                    class="p-adresses-content-item-desktop w-100 p-adresses-content-data flex-wrap align-items-start"
                                >
                                    <div
                                        class="w-100 p-adresses-content-text-main text-right"
                                    >
                                        <h3
                                            class="p-adresses-content-text-data w-100"
                                        >
                                            {{ data.address }}
                                        </h3>
                                    </div>
                                </div>
                                <div
                                    class="p-adresses-content-data-btns w-100 justify-content-end"
                                >
                                    <div class="p-favorite-product-btn-main">
                                        <button
                                            type="button"
                                            class="p-product-btn cursor-pointer p-adresses-content-btn-edit"
                                            name="button"
                                        >
                                            <span
                                                @click="editAddress(data)"
                                                class="p-favorite-product-btn-link p-adresses-content-item-desktop"
                                                >ویرایش</span
                                            >
                                            <span
                                                @click="editAddress(data)"
                                                class="p-favorite-product-btn-link p-adresses-content-item-mobile "
                                            >
                                                <img
                                                    class="p-adresses-content-edit-icon"
                                                    src="/icons/icon-edit.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </button>
                                        <button
                                            @click="
                                                showModalDeleteProduct(data)
                                            "
                                            class="p-favorite-product-btn-delete cursor-pointer  p-adresses-content-btn-delete"
                                            name="button"
                                        >
                                            <span
                                                class="p-favorite-product-item-icon-delete"
                                            ></span>
                                        </button>
                                    </div>
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
import addAddressModal from "./addAddressModal.vue";

export default {
    props: {
        allProvince: { type: [Object, Array], default: [] },
        allCitys: { type: [Object, Array], default: [] },
        adressData: { type: [Object, Array], default: {} },
        formData: { type: [Object, Array], default: {} },
        profilePhoneNumber: { type: [Number, String], default: "" }
    },
    components: {
        addAddressModal
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
// #overlay {
//     position: absolute; /* Sit on top of the page content */
//     @include display-flex();
//     justify-content: center;
//     align-items: center;
//     width: 100%; /* Full width (cover the whole page) */
//     height: 100%; /* Full height (cover the whole page) */
//     /* transition: opacity 200ms ease-out; */
//     /* top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0; */
//     z-index: 1;
//     background: $overlay__profile;
//     top: 120px;
//     right: 0;
// }
.p-comments-content-main {
    padding-right: 24px;
    padding-left: 24px;
}
.p-adresses-content-btn-add-main {
    @include display-flex();
}
.p-adresses-content-btn-data {
    margin-top: 45px;
    margin-bottom: 38px;
    font-size: 16px;
}
.p-adresses-content-item {
    @include display-flex();
    border: 1px solid $light-gray;
    border-radius: 10px;
    height: 241px;
    margin-bottom: 24px;
}
/* ============================== */
.p-comments-content-header {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    padding-right: 26px;
    padding-left: 26px;
    /* border: 1px solid red; */
}
.p-comments__header-holder {
    @include display-flex();
    flex-direction: column;
}
.p-comments__title {
    /* border: 1px solid blue; */
    @include display-flex();
    justify-self: flex-start;
    font-size: 16px;
    font-family: inherit;
    line-height: 140.62%;
    color: $black-topic;
    margin-top: 16px;
}
.p-comments-idea__title {
    /* border: 1px solid green; */
    @include display-flex();
    justify-self: flex-start;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 16px;
}
.ideas-title {
    font-size: 16px;
    font-family: inherit;
    line-height: 140.62%;
}
.idea-good {
    color: $btn__green;
}
.idea-bad {
    color: $red-logout;
}
.idea-mid {
    color: $code-request;
}
.p-comments__state-desktop {
    /* border: 1px solid black; */
    margin: auto 0;
}
.p-comments__state-mobile {
    display: none;
}
.p-comments__state-accepted,
.p-comments__state-acceptting {
    @include display-flex();
    flex-direction: row;
}
.p-comments__state-accepted__title,
.p-comments__state-acceptting__title {
    font-size: 14px;
    line-height: 140.62%;
    color: $gray;
}
.p-comments__state-accepted__icon {
    @include display-flex();
    align-self: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 3px solid $light__blue;
    background-color: $code-request;
    margin-left: 11px;
}
.p-comments__state-accepted__icon::before {
    margin: auto;
    @include font-icon__limoo();
    font-size: 6px;
    content: "\e82b";
    color: $white;
}
.p-comments__state-acceptting__icon {
    @include display-flex();
    align-self: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 3px solid #fff5d9;
    background-color: $yellow;
    margin-left: 11px;
}
/* =========================== */
.p-favorite-product-item-icon-delete::before {
    @include font-icon__limoo();
    font-size: 16px;
    content: "\e826";
    color: $input-border;
}
.p-comments-content-header {
    background: $white;
    border-bottom: 1px solid $light-gray;
    height: 86px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.p-comments-content-header-icon {
    width: 23px;
    height: 23px;
}
.p-comments-content-header-item {
    @include display-flex();
    margin-left: 85px;
}
.p-comments-content-header-item-title {
    font-family: inherit;
    font-size: 16px;
    margin-right: 10px;
    color: $black-topic;
    font-weight: 400;
    text-align: right;
}
.p-adresses-content-data {
    @include display-flex();
    padding-right: 27px;
    padding-left: 27px;
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
    padding-left: 16px;
    height: 83px;
    align-items: flex-end;
}
.p-adresses-content-btn-edit {
    width: 130px;
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
.p-comments-content-header-item-desktop {
    align-items: flex-start;
}
.p-adresses-content-item-mobile {
    display: none;
}

.p-adresses-content-data-wrapper {
    height: 167px;
    @include display-flex();
    align-content: flex-start;
}
.p-favorite-product-btn-main {
    margin-bottom: 37px;
}

@media (max-width: 1220px) {
    .p-comments-content-header-item {
        margin-left: 10%;
    }
    .p-comments-content-header-item:last-of-type {
        margin-left: 0;
    }
}

@media (max-width: 1024px) {
    .p-comments-content-header-item {
        margin-left: 6%;
    }
}

@media (max-width: 960px) {
    .p-comments-content-header-item {
        margin-left: 10%;
    }
    .p-comments-content-main {
        padding: 0;
    }
}

@media (max-width: 600px) {
    .p-comments__state-desktop {
        display: none;
    }
    .p-comments__state-mobile {
        display: block;
    }
    .p-comments__title,
    .ideas-title,
    .p-comments__state-acceptting__title,
    .p-comments__state-accepted__title {
        font-size: 13px;
    }
    .p-comments-content-header {
        flex-flow: column;
        height: auto;
        background: $white;
        padding-right: 11px;
        padding-left: 19px;
    }
    .p-adresses-content-item {
        background: $white;
        height: auto;
        margin-bottom: 8px;
    }
    .p-comments-content-header-item {
        margin-left: 0;
        width: 100%;
        margin-top: 19px;
    }
    .p-comments-content-header-item-title {
        font-size: 14px;
    }
    .p-adresses-content-text-data {
        font-size: 14px;
    }
    .p-adresses-content-data-btns {
        margin-bottom: 16px;
        margin-top: 26px;
        height: auto;
    }
    .p-favorite-product-btn-delete {
        width: 37px;
        height: 37px;
    }
    .p-adresses-content-btn-edit {
        background: $yellow;
        border-radius: 10px;
        height: 36px;
        width: 36px;
    }
    .p-adresses-content-btn-delete {
        margin-right: 16px;
    }
    .p-comments-content-header-icon {
        width: 18px;
        height: 18px;
    }
    .p-adresses-content-item-desktop {
        display: none;
    }
    .p-adresses-content-item-mobile {
        display: flex;
    }
    .p-adresses-content-text-main {
        margin-bottom: 0;
    }
    .p-adresses-content-data-wrapper {
        height: auto;
    }
    .p-favorite-product-btn-main {
        margin-bottom: 0;
    }
    .p-adresses-content-item:last-of-type {
        margin-bottom: 0;
    }
}
</style>
