<template>
    <div class="orders-content__main">
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
        <div class="w-100 flex-wrap" :key="updateChoosedAddress">
            <div
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
                    <!-- edit btn -->
                    <button
                        @click="showModalDeleteOrder(data)"
                        class="order-detail__btn-delete"
                        name="button"
                    ></button>
                    <button
                        @click="editAddress(data)"
                        class="address-detail__btn-edit"
                        name="button"
                    ></button>
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
        addressData: { type: [Object, Array], default: {} },
        formData: { type: [Object, Array], default: {} },
        profilePhoneNumber: { type: [Number, String], default: "" }
    },
    components: {
        addAddressModal
    },
    data() {
        return {
            passChangeIsActive: false,
            updateSelected: 0,
            dataEditAddress: {},
            modalEditSelected: {
                id: null
            },
            updateChoosedAddress: 0
        };
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
                while ((el = el.parentElement) && !el.classList.contains(cls));
                return el;
            }

            if (findAncestor(e.target, "order-detail__closer") == null) {
                // console.log(this.modalEditSelected.id);
                if (this.modalEditSelected.id) {
                    this.showEditDeleteOption(this.modalEditSelected.id);
                }
            }
        },
        pickAddress(data) {
            this.addressData.map(content => {
                if (content.id == data.id) {
                    content.defultAddress = true;

                    // if we want open one paragraph in time
                } else {
                    content.defultAddress = false;
                }
            });
            this.updateChoosedAddress++;
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
        showModalEditAddress(data) {},
        showEditDeleteOption(data) {
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
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: $light-gray;
    margin: 26px 16px 24px 0;
    cursor: pointer;
    /* background-color: $light-gray; */
}
.card-shape__circle-inner {
    width: 9.5px;
    height: 9.5px;
    border-radius: 50%;
    background-color: $white;
    cursor: pointer;
}
/* .orders-content__main {
    border: 1px solid red;
} */
.order-content-item {
    @include display-flex();
    flex-direction: column;
    border-radius: 10px;
    height: fit-content;
    min-height: 70px;
    margin-bottom: 8px;
    border: 1px solid $light-gray;
}
.order-detail {
    height: 70px;
    width: 100%;
    /* border-bottom: 1px solid $gray-border; */
}

.order-detail__desktop-holder {
    @include display-flex();
    flex-direction: column;
    /* border: 1px solid red; */
}
.address-detail__user-container {
    @include display-flex();
    flex-direction: row;
    margin-right: 42px;
    justify-content: space-between;
    display: none;
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
    font-size: 14px;
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
    margin-left: 24px;
}
.address-detail__user-phone::after {
    @include font-icon__limoo();
    content: "\e81f";
    font-size: 14px;
    color: $gray;
    margin-right: 24px;
    margin-left: 8px;
}
.address-detail__user-reciver::before {
    @include font-icon__limoo();
    content: "\e823";
    font-size: 14px;
    color: $gray;
    margin-left: 8px;
}
.address-detail__user-phone {
    border-right: 1px solid $light-gray;
}
.order-detail__holder {
    @include display-flex();
    flex-direction: row;
    height: fit-content;
}
.order-detail__title {
    width: 80%;
    font-size: 16px;
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
    margin: 24px 8px 24px 0;
    height: fit-content;
}
.order-detail__content-holder {
    @include display-flex();
    flex-direction: column;
    height: 91px;
    padding-right: 16px;
    border-right: 2px solid $gray-border;
}

.order-detail__btns-container {
    @include display-flex();
    flex-direction: row-reverse;
    align-items: flex-end;
    width: 100%;
    height: 77px;
    /* border: 1px solid red; */
    padding-left: 16px;
    display: none;
}
.order-detail__btn-delete {
    width: 37px;
    height: 37px;
    background-color: $light-gray;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-bottom: 16px;
}
.order-detail__btn-delete::before {
    @include font-icon__limoo();
    content: "\e826";
    font-size: 14px;
    color: $gray;
}
.address-detail__btn-edit {
    width: 37px;
    height: 37px;
    background-color: $yellow;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    margin-bottom: 16px;
}
.address-detail__btn-edit::before {
    @include font-icon__limoo();
    content: "\e80e";
    font-size: 14px;
    color: $white;
}
.address-detail__btn-delete,
.address-detail__btn-edit__mobile {
    display: none;
}
.order-detail__choosed-adress {
    min-height: 140px;
}
.order-detail__choosed-adress .order-detail__btns-container {
    @include display-flex();
}
@media (max-width: 960px) {
    .order-detail__btn-holder__mobile {
        @include display-flex();
        flex-direction: column;
        justify-content: space-between;
        background-color: $white;
        box-shadow: 0px 20px 24px $box__shadow;
        border-radius: 10px;
        width: 154px;
        height: 82px;
        position: absolute;
        margin-top: 20px;
        left: 33px;
        display: none;
        /* border: 1px solid blue; */
    }
    .order-detail__btn-holder__line {
        width: 100%;
        display: none;
        border-top: 1px solid $gray-border;
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
        font-size: 14px;
        color: $gray;
        border: none;
        box-sizing: border-box;
        cursor: pointer;
        line-height: 140.62%;
        text-align: right;
        margin: 12px 12px 10px 0;
    }
    .address-detail__btn-edit__mobile {
        margin: 10px 12px 10px 0;
    }
    .address-detail__three-point__btn {
        @include display-flex();
        flex-direction: column;
        margin: 15px 0 13px 16px;
        cursor: pointer;
    }
    .address-detail__point {
        width: 4px;
        height: 4px;
        margin-bottom: 2px;
        background-color: $gray;
        border-radius: 50%;
    }
    .card-shape__circle {
        width: 17px;
        height: 17px;
        margin: 17px 9px 24px 0;
        /* background-color: $light-gray; */
    }
    .card-shape__circle-inner {
        width: 7.5px;
        height: 7.5px;
    }
    .order-detail__holder {
        border-top: 1px solid $gray-border;
    }
    .address-detail__user-container {
        order: -1;
        margin-right: 10px;
    }
    .address-detail__user-reciver,
    .address-detail__user-phone {
        margin-top: 15px;
        margin-bottom: 15px;
        margin-left: 8px;
    }
    .address-detail__user-phone::after {
        margin-right: 8px;
        margin-left: 4px;
    }
    .address-detail__user-reciver::before {
        margin-left: 4px;
    }
    .order-content-item {
        min-height: fit-content;
        /* padding-bottom: 16px; */
        margin-bottom: 8px;
    }
    .order-detail__content-holder {
        display: none;
    }
    .order-detail {
        min-height: 50px;
        height: fit-content;
    }

    .order-detail__title {
        font-size: 14px;
        margin: 16px 8px 16px 19px;
    }

    .order-detail__choosed-adress .order-detail__btns-container {
        display: none;
    }
    .order-detail__btns-container {
        display: none;
    }
    .order-detail__btn-delete {
        width: 36px;
        height: 36px;
    }

    .order-detail__btn-delete::before {
        font-size: 14px;
    }
    .order-detail__choosed-adress {
        min-height: 133px;
        padding-bottom: 0;
    }
    .order-detail__choosed-adress .order-detail__btn-holder__line {
        @include display-flex();
    }
}
@media (max-width: 280px) {
    .address-detail__user-reciver,
    .address-detail__user-phone {
        font-size: 12px;
        margin-left: 5px;
    }
    .address-detail__user-phone::after {
        margin-right: 4px;
        font-size: 12px;
    }
    .address-detail__user-reciver::before {
        margin-left: 4px;
        font-size: 12px;
    }
    .order-detail__title {
        font-size: 14px;
        margin: 20px 6px 16px 19px;
    }
}
</style>
