<template>
    <div class="profile-container">
        <the-profile-side-bar />
        <div class="user-profile">
            <div
                v-show="userHistory !== 0"
                class="user-profile__lastseen-product"
            >
                <h3 class="user-profile__list-title">
                    آخرین محصولاتی که مشاهده کردید
                </h3>
                <!--  -->
                <the-user-history
                    @event-show-modal-delete-history="
                        eventShowModalDeleteHistory
                    "
                    :history-data="historyData"
                ></the-user-history>
                <!--  -->
                <nuxt-link
                    class="user-profile__continue-list__btn"
                    to="/profile/user-history"
                    >ادامه لیست بازدیدهای اخیر</nuxt-link
                >
            </div>
            <div class="user-profile__fav-product">
                <h3 class="user-profile__list-title">لیست علاقه مندی شما</h3>
                <!--  -->
                <favorite-product
                    @event-show-modal-delete-favorite="
                        eventShowModalDeleteFavorite
                    "
                    :favorite-data="favoriteData"
                ></favorite-product>
                <!--  -->
                <nuxt-link
                    v-show="userFavorite !== 0"
                    class="user-profile__continue-list__btn"
                    to="/profile/favorites"
                    >ادامه لیست علاقه مندی شما</nuxt-link
                >
            </div>
            <div class="user-profile__last-orders">
                <h3 class="user-profile__list-title">آخرین سفارش های شما</h3>
                <!--  -->
                <the-last-orders-list
                    :table-data="tableData"
                ></the-last-orders-list>
                <!--  -->
                <span
                    class="p-list-product-line"
                    v-show="userOrdersList !== 0"
                ></span>
                <nuxt-link
                    v-show="userOrdersList !== 0"
                    class="user-profile__continue-orderslist__btn"
                    to="/profile/my-orders/in-progress"
                    >ادامه لیست سفارش ها</nuxt-link
                >
            </div>
            <!--  -->
            <TheModalDeleteUserHistory
                :active.sync="showModalDeleteHistory"
                :current-history="currentHistory"
                @btn-delete-history="btnDeleteHistory"
            />
            <!--  -->
            <modalDeleteFav
                :active.sync="showModalDeleteFavorite"
                :current-favorite="currentFavorite"
                @btn-delete-favorite="btnDeleteFavorite"
            />
            <!--  -->
        </div>
    </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import TheUserHistory from "~/components/Profile/UserHistory/TheUserHistory.vue";
import TheModalDeleteUserHistory from "~/components/Profile/UserHistory/TheModalDeleteUserHistory.vue";
import favoriteProduct from "~/components/Profile/Favorites/favoriteProduct.vue";
import modalDeleteFav from "~/components/Profile/Favorites/modalDeleteFav.vue";
import TheLastOrdersList from "~/components/Profile/TheLastOrdersList.vue";

export default {
    middleware  : "authentication",
    layout      : "removeFooterMobile",
    components: {
        TheProfileSideBar,
        TheUserHistory,
        TheModalDeleteUserHistory,
        favoriteProduct,
        modalDeleteFav,
        TheLastOrdersList
    },
    data() {
        return {
            showModalDeleteHistory: false,
            showModalDeleteFavorite: false,
            userHistory: -1,
            userFavorite: -1,
            userOrdersList: -1,
            historyData: [
                // {
                //     id: 1,
                //     title: "Fake",
                //     img: "/img/apple-watch-1.png"
                // },
                // {
                //     id: 2,
                //     title: "Fake",
                //     img: "/img/apple-watch-2.png"
                // },
                // {
                //     id: 3,
                //     title: "Fake",
                //     img: "/img/apple-watch-3.png"
                // }
            ],
            favoriteData: [
                // {
                //     id: 1,
                //     title: "Fake",
                //     img: "../img/phone.jpg"
                // },
                // {
                //     id: 2,
                //     title: "Fake",
                //     img: "../img/phoneApple.jpg"
                // },
                // {
                //     id: 3,
                //     title: "Fake",
                //     img:
                //         "../img/apple-watch-series-6-blue-aluminium-case-with-deep-navy-sport-band-16.jpg"
                // }
            ],
            tableData: [
                // {
                //     id: 1,
                //     orderCode: "6861457M",
                //     orderDate: "1399/11/17",
                //     orderPrice: "123،000",
                //     orderSituation: "در حال پردازش"
                // },
                // {
                //     id: 2,
                //     orderCode: "6861457L",
                //     orderDate: "1399/04/05",
                //     orderPrice: "850،000",
                //     orderSituation: "تحویل داده شده"
                // },
                // {
                //     id: 3,
                //     orderCode: "6861457N",
                //     orderDate: "1399/03/05",
                //     orderPrice: "250،000",
                //     orderSituation: "تحویل داده شده"
                // }
            ],
            currentFavorite: {},
            currentHistory: {}
        };
    },
    created() {
        this.userHistory = Object.values(this.historyData).length;
        this.userFavorite = Object.values(this.favoriteData).length;
        this.userOrdersList = Object.values(this.tableData).length;
    },

    methods: {
        eventShowModalDeleteHistory(data) {
            this.showModalDeleteHistory = true;
            this.currentHistory = data;
        },

        btnDeleteHistory(data) {
            const removeHistory = () => {
                let indexDeleteHistoryData = -1;

                this.historyData.map((content, index) => {
                    if (content.id == data.id) {
                        indexDeleteHistoryData = index;
                    }
                });

                this.historyData.splice(indexDeleteHistoryData, 1);
            };

            removeHistory();
            this.showModalDeleteHistory = false;

            // request //
        },
        eventShowModalDeleteFavorite(data) {
            this.showModalDeleteFavorite = true;
            this.currentFavorite = data;
        },

        btnDeleteFavorite(data) {
            const removeFavorite = () => {
                let indexDeleteFavoriteData = -1;

                this.favoriteData.map((content, index) => {
                    if (content.id == data.id) {
                        indexDeleteFavoriteData = index;
                    }
                });

                this.favoriteData.splice(indexDeleteFavoriteData, 1);
            };

            removeFavorite();
            this.showModalDeleteFavorite = false;

            // request //
        }
    }
};
</script>

<style lang="scss" scoped>
.profile-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    min-height: 100vh;
    @include display-flex();
    flex-direction: row-reverse;
}
.user-profile {
    margin: 166px 0 50px 17px;
    width: 100%;
    height: fit-content;
    @include display-flex();
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* align-items: flex-end; */
    text-align: center;
    /* border: 1px solid red; */
}
.user-profile__lastseen-product,
.user-profile__fav-product,
.user-profile__last-orders {
    @include display-flex();
    flex-direction: column;
    height: fit-content;
    width: 100%;
    background-color: $white;
    border-radius: 10px;
    box-shadow: 0px 8px 16px $box__shadow;
    margin-bottom: 38px;
}
.user-profile__list-title {
    color: $black-topic;
    text-align: right;
    line-height: 140.62%;
    font-weight: 400;
    font-size: 18px;
    margin: 24px 24px 0 0;
}
.user-profile__continue-list__btn,
.user-profile__continue-orderslist__btn {
    width: fit-content;
    text-decoration: none;
    color: $gray;
    font-size: 18px;
    line-height: 140.62%;
    margin: 14px auto 38px auto;
}
.user-profile__continue-orderslist__btn {
    margin: 38px auto 38px auto;
}
.p-list-product-line {
    @include display-flex();
    background: $border-gray-bg;
    width: 95%;
    margin: 0 auto;
    height: 1px;
}
@media (max-width: 960px) {
    .profile-container {
        margin: 0 auto;
        width: 100%;
        @include display-flex();
        flex-direction: column;
        margin-bottom: 58px;
    }
    .user-profile {
        display: none;
        /* margin: 16px 0 0 0; */
    }
}
@media (max-width: 1220px) {
    .user-profile__list-title {
        font-size: 16px;
    }
    .user-profile__continue-list__btn {
        font-size: 16px;
        margin: 10px auto 34px auto;
    }
    .user-profile__continue-orderslist__btn {
        font-size: 16px;
        margin: 34px auto 34px auto;
    }
}
</style>
