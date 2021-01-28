<template>
    <div class="profile-container">
        <the-profile-side-bar class="desktop-screen" />

        <div class="mobile-screen">
            <div class="mobile-screen__holder">
                <span class="mobile-screen__holder-txt">نقد و نظرات من</span>
                <span
                    @click="goToProfile"
                    class="mobile-screen__holder-arrow"
                ></span>
            </div>
        </div>

        <div class="user-profile__holder">
            <div class="user-profile w-100">
                <span class="user-profile__topic">نقد و نظرات من</span>
                <hr class="splicer-line" />
                <div class="w-100 user-profile-adresses-main flex-column">
                    <contentComments
                        :comments-data="commentsData"
                        @show-modal-delete-product="showModalDeleteProduct"
                    ></contentComments>
                </div>
            </div>
        </div>

        <modalDeleteComment
            :active.sync="statusShowModalDeleteProduct"
            :current-product="currentProduct"
            @btn-delete-modal="btnDeleteProduct"
        />
    </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import contentComments from "~/components/Profile/Comments/contentComments.vue";
import modalDeleteComment from "~/components/Profile/Comments/modalDeleteComment.vue";

export default {
    components: {
        TheProfileSideBar,
        contentComments,
        modalDeleteComment
    },

    data() {
        return {
            commentsData: [
                {
                    id: 1,
                    commentTitle:
                        "این سری از اپل واچ از سری قبلش خیلی بهتر شده!",
                    state: "accepted",
                    idea: "good",
                    productTitle:
                        "اپل واچ سری 6 آتومینیوم آبی بند اسپرت سیلیکون آبی1",
                    img: "/img/apple-watch-1.png",
                    description:
                        "این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت، حتما این کالارو خریداری کنید! این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت حتما این کالا رو خریداری کنید.",
                    commentTime: "1 ساعت پیش",
                    rate: 4.5
                },
                {
                    id: 2,
                    commentTitle:
                        "واقعا نمیدونم چرا ایده جدید ندارن روی این محصول!",
                    state: "accepted",
                    idea: "bad",
                    productTitle:
                        "اپل واچ سری 6 آتومینیوم آبی بند اسپرت سیلیکون آبی2",
                    img: "/img/apple-watch-2.png",
                    description:
                        "این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت، حتما این کالارو خریداری کنید! این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت حتما این کالا رو خریداری کنید.",

                    commentTime: "1 روز پیش",
                    rate: 3.6
                },
                {
                    id: 3,
                    commentTitle: "همین الان به دستم رسید به نظر جذابه!",
                    state: "acceptting",
                    idea: "mid",
                    productTitle:
                        "اپل واچ سری 6 آتومینیوم آبی بند اسپرت سیلیکون آبی3",
                    img: "/img/apple-watch-3.png",
                    description:
                        "این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت، حتما این کالارو خریداری کنید! این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت حتما این کالا رو خریداری کنید.",

                    commentTime: "دقایقی قبل",
                    rate: 2.3
                }
            ],
            currentProduct: {},
            statusShowModalDeleteProduct: false
        };
    },

    watch: {},

    mounted() {},

    methods: {
        goToProfile() {
            this.$router.push("/profile");
        },

        btnDeleteProduct(data) {
            const removeFavorite = () => {
                let indexDelete = -1;

                this.commentsData.map((content, index) => {
                    if (content.id == data.id) {
                        indexDelete = index;
                    }
                });

                this.commentsData.splice(indexDelete, 1);
            };

            removeFavorite();
            this.statusShowModalDeleteProduct = false;

            // request //
        },

        showModalDeleteProduct(data) {
            this.currentProduct = data;
            this.statusShowModalDeleteProduct = true;
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
        margin: 23px 25px 34px 0;
    }
}
.splicer-line {
    display: none;
}
.user-profile__topic {
    text-align: right;
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
</style>
