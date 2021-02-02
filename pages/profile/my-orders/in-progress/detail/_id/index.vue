<template>
    <div class="profile-container">
        <the-profile-side-bar class="desktop-screen" />

        <div class="mobile-screen">
            <div class="mobile-screen__holder">
                <span class="mobile-screen__holder-txt">جزئیات سفارش</span>
                <img
                    @click="goToProfile"
                    class="mobile-screen__holder-arrow"
                    src="/icons/arrow-left.svg"
                />
            </div>
        </div>

        <div class="user-profile__holder">
            <div class="user-profile w-100">
                <div class="user-profile__support d-rtl">
                    <div class="user-profile__top-holder">
                        <span class="user-profile__topic"
                            >سفارش {{ $route.params.id }}</span
                        >
                        <div class="order-factor">
                            <span class="order-factor__title"
                                >دریافت فاکتور</span
                            >
                        </div>
                    </div>
                    <NuxtLink
                        to="/profile"
                        class="user-profile__back-btn"
                    ></NuxtLink>
                </div>
                <hr class="splicer-line" />
                <div class="user-profile__support-contact d-rtl">
                    <div class="order-desktop__holder">55555555555</div>
                </div>
                <!-- ============================ -->
                <div class="user-profile__order-mobile d-rtl">
                    قسمت موبایل
                </div>

                <div class="w-100 user-profile-orders-main flex-column">
                    وضعیت سفارش ها
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

export default {
    components: {
        TheProfileSideBar
        // contentTickets,
        // modalDeleteTicket
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
.user-profile__order-mobile {
    display: none;
}
.order-factor {
    @include display-flex();
    align-self: center;
    height: 64px;
    width: 160px;
    background-color: $white;
    border-right: 1px solid $light-gray;
    margin-right: 24px;
}
.order-factor__title {
    font-size: 16px;
    line-height: 140.62%;
    color: $code-request;
    margin: 19px 0 28px 0;
    text-align: right;
    cursor: pointer;
}
.order-factor__title::before {
    content: "\e812";
    /* border: 1px solid #f00808; */
    @include font-icon__limoo();
    /* @include display-flex(); */
    font-size: 15px;

    color: $code-request;
    /* align-self: center; */
    cursor: pointer;
    margin-right: 16px;
    margin-left: 8px;
}
.user-profile-orders-main {
    background: $white;
    width: 100%;
    min-height: 100px;
    height: fit-content;
    border-radius: 10px;
    box-shadow: 0px 8px 16px $box__shadow;
    margin-top: 16px;
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
        margin-bottom: 36px;
        /* border: 1px solid #0c1f9a; */
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
.user-profile__top-holder {
    @include display-flex();
    height: 100%;
    justify-content: center;
    /* border: 1px solid #f00808; */
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

.order-desktop__holder {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 24px;
    padding: 0 22px;
    /* border: 1px solid #f00808; */
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
    .order-desktop__holder {
        padding: 0 5px;
    }
}

@media (max-width: 960px) {
    .desktop-screen {
        display: none;
    }
    .splicer-line,
    .user-profile__support-contact,
    .user-profile__support {
        display: none;
    }
    /* ================== */

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
    .user-profile__order-mobile {
        @include display-flex();
        flex-direction: column;
        background: $white;
        height: 121px;
        width: 100%;
        padding-right: 11px;
        border-radius: 10px;
        box-shadow: 0px 8px 16px $box__shadow;
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
}

@media (max-width: 350px) {
}

@media (max-width: 320px) {
}
@media (max-width: 280px) {
}
</style>
