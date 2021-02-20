<template>
    <div class="profile-container">
        <!-- <transition moda="in-out">
            <div id="overlay" v-if="passChangeIsActive">
                <The-profile-pass-modal />
            </div>
        </transition> -->

        <the-profile-side-bar class="desktop-screen" />

        <div class="mobile-screen">
            <div class="mobile-screen__holder">
                <span class="mobile-screen__holder-txt"
                    >لیست علاقه مندی شما</span
                >
                <span
                    @click="goToProfile"
                    class="mobile-screen__holder-arrow"
                ></span>
            </div>
        </div>

        <div class="user-profile__holder">
            <div class="user-profile">
                <span class="user-profile__topic">لیست علاقه مندی شما</span>
                <hr class="splicer-line" />

                <favorite-product
                    @event-show-modal-delete-favorite="
                        eventShowModalDeleteFavorite
                    "
                    :favorite-data="favoriteData"
                ></favorite-product>
            </div>
        </div>

        <modalDeleteFav
            :active.sync="showModalDeleteFavorite"
            :current-favorite="currentFavorite"
            @btn-delete-favorite="btnDeleteFavorite"
        />
    </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import favoriteProduct from "~/components/Profile/Favorites/favoriteProduct.vue";
import modalDeleteFav from "~/components/Profile/Favorites/modalDeleteFav.vue";

export default {
    middleware: "authentication",
    components: {
        TheProfileSideBar,
        favoriteProduct,
        modalDeleteFav
    },

    data() {
        return {
            showModalDeleteFavorite: false,
            favoriteData: [
                {
                    id: 1,
                    title: "Fake",
                    img: "../img/phone.jpg"
                },
                {
                    id: 2,
                    title: "Fake",
                    img: "../img/phoneApple.jpg"
                },
                {
                    id: 3,
                    title: "Fake",
                    img:
                        "../img/apple-watch-series-6-blue-aluminium-case-with-deep-navy-sport-band-16.jpg"
                },
                {
                    id: 4,
                    title: "Fake",
                    img: "/img/apple-watch-5.png"
                },
                {
                    id: 5,
                    title: "Fake",
                    img: "/img/apple-watch-1.png"
                },
                {
                    id: 6,
                    title: "Fake",
                    img: "/img/apple-watch-3.png"
                },
                {
                    id: 7,
                    title: "Fake",
                    img: "/img/apple-watch-5.png"
                }
            ],
            currentFavorite: {}
        };
    },

    watch: {},

    mounted() {},

    methods: {
        goToProfile() {
            this.$router.push("/profile");
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

.mobile-screen {
    display: none;
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
    background: $white;
    border-radius: 10px;
    box-shadow: 0px 8px 16px $box__shadow;
    /* border: 1px solid #f00808; */
    &__topic {
        font-size: 18px;
        line-height: 140.62%;
        color: $black-topic;
        align-self: flex-end;
        margin-top: 23px;
        margin-right: 25px;
    }
}
.splicer-line {
    display: none;
}
@media (max-width: 1450px) {
}
@media (max-width: 1220px) {
}
@media (max-width: 960px) {
    .desktop-screen {
        display: none;
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
            &-arrow::before {
                content: "\e801";
                @include font-icon__limoo();
                font-size: 14px;
                color: $input-border;
                margin-right: 4px;
                margin-left: 8px;
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
        padding: 0 16px;
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
    .user-profile__holder {
        padding: 0 5px;
    }
}

@media (max-width: 350px) {
}

@media (max-width: 320px) {
}
</style>
