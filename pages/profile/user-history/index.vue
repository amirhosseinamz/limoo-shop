<template>
    <div class="profile-container">
        <the-profile-side-bar class="desktop-screen" />

        <div class="mobile-screen">
            <div class="mobile-screen__holder">
                <span class="mobile-screen__holder-txt"
                    >آخرین محصولات دیده شده</span
                >
                <span
                    @click="goToProfile"
                    class="mobile-screen__holder-arrow"
                ></span>
            </div>
        </div>

        <div class="user-profile__holder">
            <div class="user-profile">
                <span class="user-profile__topic"
                    >آخرین محصولاتی که مشاهده کردید</span
                >
                <hr class="splicer-line" />

                <the-user-history
                    @event-show-modal-delete-history="
                        eventShowModalDeleteHistory
                    "
                    :history-data="historyData"
                ></the-user-history>
            </div>
        </div>
      <transition name="backdrop-delete">
        <div class="backdrop" v-if="showModal"></div>
      </transition>
      <transition name="delete">
        <TheModalDeleteUserHistory
          v-if="showModal"
          @close-modal="modalClose"
          :current-history="currentHistory"
          @btn-delete-history="btnDeleteHistory"
        />
      </transition>


    </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import TheUserHistory from "~/components/Profile/UserHistory/TheUserHistory.vue";
import TheModalDeleteUserHistory from "~/components/Profile/UserHistory/TheModalDeleteUserHistory.vue";

export default {
    middleware: "authentication",
    layout      : "removeFooterMobile",
    components: {
        TheProfileSideBar,
        TheUserHistory,
        TheModalDeleteUserHistory
    },

    data() {
        return {
            showModal: false,
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
                // },
                // {
                //     id: 4,
                //     title: "Fake",
                //     img: "/img/apple-watch-4.png"
                // },
                // {
                //     id: 5,
                //     title: "Fake",
                //     img: "/img/apple-watch-5.png"
                // },
                // {
                //     id: 6,
                //     title: "Fake",
                //     img: "/img/apple-watch-5.png"
                // },
                // {
                //     id: 7,
                //     title: "Fake",
                //     img: "/img/apple-watch-2.png"
                // },
                // {
                //     id: 8,
                //     title: "Fake",
                //     img: "/img/apple-watch-5.png"
                // }
            ],
            currentHistory: {}
        };
    },

    watch: {},

    mounted() {},

    methods: {
        goToProfile() {
            this.$router.push("/profile");
        },
        modalCLose() {
            this.showModal = false;
        },

        eventShowModalDeleteHistory(data) {
            this.showModal = true;
            this.currentHistory = data;
        },

        btnDeleteHistory(data) {
            const removeHistory = () => {
                let indexDeleteHistoryData = -1;

                this.historyData.map((content, index) => {
                    if (content.id === data.id) {
                        indexDeleteHistoryData = index;
                    }
                });

                this.historyData.splice(indexDeleteHistoryData, 1);
            };

            removeHistory();
            this.showModal = false;

            // request //
        }
    }
};
</script>

<style lang="scss" scoped>
@include delete-modal-animation();
@include backdrop-delete-modal-animation();

.backdrop {
  @extend .modal-backdrop;
  background-color: $overlay--profile;
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
@include md {
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
        padding: 0 toRem(5);
    }
}
</style>
