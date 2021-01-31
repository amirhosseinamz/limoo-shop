<template>
    <div class="profile-container">
        <the-profile-side-bar class="desktop-screen" />

        <div class="mobile-screen">
            <div class="mobile-screen__holder">
                <span class="mobile-screen__holder-txt">پشتیبانی لیمو</span>
                <img
                    @click="goToProfile"
                    class="mobile-screen__holder-arrow"
                    src="/icons/arrow-left.svg"
                />
            </div>
        </div>
        <!-- ----- -->
        <div class="support__navbar-mobile d-rtl">
            <div
                :class="{ 'item-active': sendTicket }"
                class="support-nav__mobile-items"
            >
                <NuxtLink
                    @click="goToSupport('sendTicket')"
                    to="/profile/support/ticket"
                    >تماس و تیکت</NuxtLink
                >
                <span class="bottomLine-mobile"></span>
            </div>
            <div
                :class="{ 'item-active': faqPart }"
                class="support-nav__mobile-items support-nav__mobile-faq"
            >
                <NuxtLink
                    @click="goToSupport('faqPart')"
                    to="/profile/support/faq"
                    >سوالات متداول</NuxtLink
                >
                <span class="bottomLine-mobile"></span>
            </div>
        </div>
        <!-- ----- -->
        <div class="user-profile__holder">
            <div class="user-profile w-100">
                <div class="user-profile__support d-rtl">
                    <span class="user-profile__topic">پشتیبانی لیمو</span>
                    <NuxtLink
                        to="/profile"
                        class="user-profile__back-btn"
                    ></NuxtLink>
                </div>
                <hr class="splicer-line" />
                <div class="user-profile__support-contact d-rtl">
                    <h4 class="support-contact__title">
                        راه های ارتباطی مستقیم با پشتیبانی لیمو
                    </h4>
                    <div class="support-contact__holder">
                        <h4 class="support-contact__description">
                            شما با استفاده از راه های ارتباطی درج شده می توانید
                            به صورت شبانه روزی با پشتیبانی سایت لیمو در ارتباط
                            باشید و برای حل مشکلات خود اقدام نمایید.
                        </h4>
                        <div class="support-contact__left">
                            <div class="support-contact__mail">
                                <h4 class="support-contact__mail-title">
                                    پست الکترونیکی:
                                </h4>
                                <span class="support-contact__mail-limoo"
                                    >Limooport@limoo.com</span
                                >
                            </div>
                            <div class="support-contact__call">
                                <h4 class="support-contact__call-title">
                                    شماره پشتیبانی:
                                </h4>
                                <span class="support-contact__call-limoo">
                                    0215862
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ============================ -->
                <div class="user-profile__support-mobile d-rtl">
                    <h4 class="support-contact__mobile-title">
                        راه های ارتباطی مستقیم با پشتیبانی لیمو
                    </h4>
                    <div class="support-contact__call">
                        <h4 class="support-contact__call-title">
                            شماره پشتیبانی:
                        </h4>
                        <span class="support-contact__call-limoo">
                            0215862
                        </span>
                    </div>
                    <div class="support-contact__mail">
                        <h4 class="support-contact__mail-title">
                            پست الکترونیکی:
                        </h4>
                        <span class="support-contact__mail-limoo"
                            >Limooport@limoo.com</span
                        >
                    </div>
                </div>
                <div class="support__navbar-desktop d-rtl">
                    <div
                        :class="{ 'item-active': sendTicket }"
                        class="support-nav__items"
                    >
                        <NuxtLink
                            @click="goToSupport('sendTicket')"
                            to="/profile/support/ticket"
                            >ارسال تیکت</NuxtLink
                        >
                        <span class="bottomLine"></span>
                    </div>
                    <div
                        :class="{ 'item-active': faqPart }"
                        class="support-nav__items support-nav__faq"
                    >
                        <NuxtLink
                            @click="goToSupport('faqPart')"
                            to="/profile/support/faq"
                            >سوالات متداول</NuxtLink
                        >
                        <span class="bottomLine"></span>
                    </div>
                </div>
                <div class="w-100 user-profile-adresses-main flex-column">
                    <!-- <contentTickets
                        :adress-data="adressesData"
                        :all-province="allProvince"
                        :all-citys="allCitys"
                        :form-data="formData"
                        :profile-phone-number="profilePhoneNumber"
                        @show-modal-delete-product="showModalDeleteProduct"
                        @selected-province="selectedProvince"
                        @selected-city="selectedCity"
                        @submit-address-add="submitAddressAdd"
                    ></contentTickets> -->
                </div>
            </div>
        </div>

        <!-- <modalDeleteTicket
            :active.sync="statusShowModalDeleteProduct"
            :current-product="currentProduct"
            @btn-delete-modal="btnDeleteProduct"
        /> -->
    </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import contentTickets from "~/components/Profile/Support/ticket/contentTickets.vue";
import modalDeleteTicket from "~/components/Profile/Support/ticket/modalDeleteTicket.vue";

export default {
    components: {
        TheProfileSideBar,
        contentTickets,
        modalDeleteTicket
    },

    data() {
        return {
            sendTicket: false,
            faqPart: false,
            adressesData: [
                {
                    id: 1,
                    address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 1",
                    province: "تهران",
                    city: "جنت آباد",
                    codePoste: "90",
                    nameReceiver: "test",
                    numberReceiver: "10",
                    QA: [{ id: 1 }, { id: 2 }]
                },
                {
                    id: 2,
                    address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 2",
                    province: "قم",
                    city: "قم",
                    codePoste: "2",
                    nameReceiver: "test",
                    numberReceiver: "10"
                },
                {
                    id: 3,
                    address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 3",
                    province: "قم",
                    city: "قم",
                    codePoste: "3",
                    nameReceiver: "test",
                    numberReceiver: "10"
                }
            ],
            currentProduct: {},
            statusShowModalDeleteProduct: false,
            allProvince: [
                {
                    id: 1,
                    title: "تهران",
                    selected: false
                },
                {
                    id: 2,
                    title: "قم",
                    selected: false
                }
            ],
            allCitys: [
                {
                    id: 1,
                    parent_id: 2,
                    title: "قم",
                    selected: false
                },
                {
                    id: 2,
                    parent_id: 1,
                    title: "جنت آباد",
                    selected: false
                }
            ],
            formData: {
                province: "",
                city: "",
                codePoste: "",
                nameReceiver: "",
                numberReceiver: "",
                address: ""
            },
            updateAddress: 0,
            profilePhoneNumber: "09198814783"
        };
    },

    watch: {},

    mounted() {
        const curentRoute = this.$route.path;
        // const activeTab = this.$route.query.activeTab;
        if (curentRoute == "/profile/support/faq") {
            this.faqPart = true;
            // this.delivered = false;
            // this.returned = false;
            // this.canceled = false;
        }
    },

    methods: {
        goToProfile() {
            this.$router.push("/profile");
        },
        goToSupport(page) {
            if (page == "sendTicket") {
                this.$router.push("/profile/support/ticket");
                this.sendTicket = true;
            } else if (page == "faqPart") {
                this.$router.push("/profile/support/faq");
                this.faqPart = true;
            }
        },
        btnDeleteProduct(data) {
            const removeFavorite = () => {
                let indexDelete = -1;

                this.adressesData.map((content, index) => {
                    if (content.id == data.id) {
                        indexDelete = index;
                    }
                });

                this.adressesData.splice(indexDelete, 1);
            };

            removeFavorite();
            this.statusShowModalDeleteProduct = false;

            // request //
        },

        showModalDeleteProduct(data) {
            this.currentProduct = data;
            this.statusShowModalDeleteProduct = true;
        },

        selectedProvince(data) {
            // console.log(data,'selectedProvince');
        },

        selectedCity(data) {
            // console.log(data,'selectedCitys');
        },

        submitAddressAdd(data, state) {
            this.updateAddress++;
            let findIndex = 0;

            const faceUpdatePage = () => {
                this.adressesData.map((content, i) => {
                    if (content.id == data.id) {
                        this.adressesData[i] = data;
                    }
                });
            };

            // بعد از اتصال به بک این قسمت حذف شود //
            if (state == "edit") {
                faceUpdatePage();
            } else {
                data.id = 20 + this.updateAddress;
                this.adressesData.push(data);
            }

            // send data server //
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
}

.mobile-screen,
.user-profile__support-mobileو .support__navbar-mobile {
    display: none;
}
.user-profile-adresses-main {
    background: transparent;
}
.profile-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    min-height: 100vh;
    display: flex;
    flex-direction: row-reverse;
}
.user-profile__holder {
    margin: 166px 0 50px 17px;
    width: 100%;
    min-height: 100vh;
    height: max-content;
    /* border: 5px solid #2f0404; */
}
.user-profile {
    width: 100%;

    height: max-content;
    @include display-flex();
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    text-align: center;
    /* background: $white; */
    border-radius: 10px;
    box-shadow: 0px 8px 16px $box__shadow;
    /* border: 1px solid #f00808; */
    &__support {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background: $white;
        width: 100%;
        height: 96px;
        /* border: 1px solid #f00808; */
    }
    &__support-contact {
        @include display-flex();
        flex-direction: column;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background: $white;
        width: 100%;
        height: 200px;
    }
    &__topic {
        font-size: 18px;
        line-height: 140.62%;
        color: $black-topic;
        align-self: flex-end;
        margin-top: 37px;
        margin-right: 25px;
        margin-bottom: 38px;
    }
    &__back-btn {
        text-decoration: none;
        /* border: 1px solid #f00808; */
        @include display-flex();
        flex-direction: row;
        border-right: 1px solid $light-gray;
        height: 64px;
        margin-left: 26px;
        margin-bottom: 16px;
        cursor: initial;
    }
    &__back-btn::after {
        content: "\e801";
        /* border: 1px solid #f00808; */
        @include font-icon__limoo();
        @include display-flex();
        font-size: 15px;
        padding: 4px;
        color: $input-border;
        align-self: center;
        cursor: pointer;
        margin-right: 16px;
    }
}
.support__navbar-desktop {
    @include display-flex();
    flex-direction: row;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: $white;
    box-shadow: 0px 8px 16px $box__shadow;
    z-index: 1;
    padding: 0 57px;
    margin-top: 24px;
    width: 100%;
    height: 83px;
}
.support-nav__items {
    @include display-flex();
    flex-direction: column;
    justify-content: space-between;
    margin-top: 31px;
}
.support-nav__faq {
    margin-right: 143px;
}
.support-nav__items a {
    color: $gray;
    text-decoration: none;
    font-size: 18px;
    line-height: 140.62%;
}
.item-active {
    & a {
        color: $black-topic;
    }
    .bottomLine {
        align-self: center;
        background-color: $yellow;
        height: 5px;
        width: 170%;
        margin-top: 20px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
}
.support-contact__title {
    font-weight: 400;
    text-align: right;
    margin-top: 24px;
    margin-right: 22px;
}
.support-contact__holder {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 24px;
    padding: 0 22px;
    /* border: 1px solid #f00808; */
}
.support-contact__description {
    font-weight: 400;
    color: $gray;
    width: 48%;
    padding-top: 4px;
    text-align: right;
    line-height: 180.62%;
    /* border: 1px solid #3608f0; */
}
.support-contact__left {
    @include display-flex();
    flex-direction: column;
    border-right: 1px solid $light-gray;
    padding: 4px 30px 0 0;
    align-self: center;
    height: 89px;
    width: 48%;
    /* border: 1px solid #3608f0; */
}
.support-contact__mail,
.support-contact__call {
    @include display-flex();
    flex-direction: row;
}
.support-contact__call {
    margin-top: 27px;
}
.support-contact__mail-title::before {
    @include font-icon__limoo();
    content: "\e81a";
    font-size: 18px;
    vertical-align: middle;
    margin-left: 8px;
}
.support-contact__call-title::before {
    @include font-icon__limoo();
    content: "\e81f";
    font-size: 18px;
    vertical-align: middle;
    margin-left: 8px;
}
.support-contact__mail-title,
.support-contact__call-title {
    font-weight: 400;
    color: $gray;
    line-height: 140.62%;
}
.support-contact__mail-limoo,
.support-contact__call-limoo {
    line-height: 140.62%;
    font-size: 16px;
    margin-right: 8px;
}
.splicer-line {
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid $light-gray;
}
.user-profile__topic {
    text-align: right;
}

@media (max-width: 1450px) {
}

@media (max-width: 1220px) {
    .support-contact__holder {
        padding: 0 5px;
    }
    .support-contact__left {
        padding-right: 5px;
        width: 49%;
    }
    .support-contact__mail-title,
    .support-contact__mail-title::before,
    .support-contact__call-title,
    .support-contact__call-title::before {
        font-size: 13px;
    }
    .support-contact__mail-limoo,
    .support-contact__call-limoo {
        font-size: 15px;
        margin-right: 2px;
    }
    .support-contact__description {
        font-size: 15px;
        width: 49%;
    }
}

@media (max-width: 960px) {
    .desktop-screen,
    .support__navbar-desktop {
        display: none;
    }
    .splicer-line,
    .user-profile__support-contact,
    .user-profile__support {
        display: none;
    }
    /* ================== */
    .support__navbar-mobile {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        background-color: $white;
        box-shadow: 0px 8px 16px $box__shadow;
        border-top: 1px solid $light-gray;
        padding: 0 170px;
        width: 100%;
        height: 54px;
    }
    .support-nav__mobile-items {
        @include display-flex();
        flex-direction: column;
        justify-content: space-between;
        margin-top: 14px;
    }
    /* .support-nav__faq {
    margin-right: 143px;
} */
    .support-nav__mobile-items a {
        color: $gray;
        text-decoration: none;
        font-size: 14px;
        line-height: 140.62%;
    }
    .item-active {
        & a {
            color: $black-topic;
        }
        .bottomLine-mobile {
            align-self: center;
            background-color: $yellow;
            height: 4px;
            width: 150%;
            margin-top: 15px;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        }
    }
    /* ============= */
    .user-profile__support-mobile {
        @include display-flex();
        flex-direction: column;
        background: $white;
        height: 121px;
        width: 100%;
        padding-right: 11px;
        border-radius: 10px;
        box-shadow: 0px 8px 16px $box__shadow;
    }
    .support-contact__mobile-title {
        font-weight: 400;
        font-size: 14px;
        text-align: right;
        margin-top: 19px;
    }
    .support-contact__call,
    .support-contact__mail {
        margin-top: 16px;
    }
    .support-contact__mail {
        margin-bottom: 16px;
    }
    .support-contact__mail-title,
    .support-contact__mail-title::before,
    .support-contact__call-title,
    .support-contact__call-title::before {
        font-size: 14px;
    }
    .support-contact__mail-limoo,
    .support-contact__call-limoo {
        font-size: 14px;
        margin-right: 4px;
    }
    .mobile-screen {
        display: block;
        &__holder {
            @include display-flex();
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            height: 56px;
            background: $white;
            margin-top: 47px;
            &-txt {
                font-size: 14px;
                line-height: 140.62%;
                margin-right: 16px;
                color: $black-topic;
            }
            &-arrow {
                margin-left: 16px;
            }
        }
    }
    .profile-container {
        @include display-flex();
        flex-direction: column;
        margin-bottom: 58px;
    }
    .user-profile__holder {
        margin: 8px 0;
        padding: 0 5px;
    }
    .user-profile {
        &__topic {
            display: none;
        }
    }
}

@media (max-width: 600px) {
    .user-profile {
        background: none;
        border: none;
        box-shadow: none;
    }
    .support__navbar-mobile {
        padding: 0 41px;
    }
}

@media (max-width: 350px) {
}

@media (max-width: 320px) {
}
@media (max-width: 280px) {
    .support-contact__mobile-title {
        font-size: 13px;
    }
    .support-contact__mail-title,
    .support-contact__mail-title::before,
    .support-contact__call-title,
    .support-contact__call-title::before {
        font-size: 12px;
    }
    .support-contact__mail-limoo,
    .support-contact__call-limoo {
        font-size: 12px;
    }
}
</style>
