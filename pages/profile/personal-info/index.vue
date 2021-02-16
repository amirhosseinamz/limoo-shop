<template>
    <div class="profile-container">
        <transition mode="in-out">
            <div id="overlay" v-if="passChangeIsActive">
                <The-profile-pass-modal />
            </div>
        </transition>
        <the-profile-side-bar class="desktop-screen" />
        <div class="mobile-screen">
            <div class="mobile-screen__holder">
                <span class="mobile-screen__holder-txt">اطلاعات حساب شخصی</span>
                <span
                    @click="goToProfile"
                    class="mobile-screen__holder-arrow"
                ></span>
            </div>
        </div>
        <div class="user-profile__holder">
            <div class="user-profile">
                <span class="user-profile__topic">اطلاعات حساب شخصی</span>
                <div class="user-profile__userpic">
                    <img
                        class="user-info__profile__imgholder-default"
                        src="/icons/profile-holder.svg"
                    />
                    <span class="user-profile__changepic-btn"
                        >تغییر عکس کاربری</span
                    >
                </div>
                <hr class="splicer-line" />
                <!-- =============== -->
                <form>
                    <div class="user-profile__container">
                        <div class="user-profile__info" dir="rtl">
                            <div class="user-profile__info-name">
                                <section>
                                    <label for="name">نام:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="کیمیا خانوم"
                                    />
                                </section>
                                <section>
                                    <label for="family">نام خانوادگی:</label>
                                    <input
                                        type="text"
                                        id="family"
                                        placeholder="طلایی مطلق"
                                    />
                                </section>
                            </div>
                            <!--/// email section is ignored in version alpha ///-->
                            <!-- <div class="user-profile__info-email">ایمیل</div> -->
                            <!-- ================================================ -->
                            <div class="user-profile__info-phone">
                                <label for="phoneNumber">شماره همراه:</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    maxlength="11"
                                    v-model="phoneNumber"
                                    required
                                    disabled
                                />
                            </div>
                            <div class="user-profile__info-birthday">
                                <client-only>
                                    <the-date-dropdown
                                        default="1373.11.17"
                                        min="1300"
                                        max="1387"
                                        v-model="selectedDate"
                                    />
                                </client-only>
                                <!-- <the-birthday /> -->
                            </div>
                            <div class="user-profile__info-nationalcode">
                                <label for="nationalcode">کد ملی:</label>
                                <input
                                    :class="{ err__input: msg.nationalcode }"
                                    type="text"
                                    id="nationalcode"
                                    maxlength="10"
                                    placeholder="0475749590"
                                    v-model="nationalcode"
                                    required
                                />
                                <span
                                    class="user-profile__alert"
                                    v-if="msg.nationalcode"
                                    >{{ msg.nationalcode }}</span
                                >

                                <!-- کد ملی وارد شده صحیح نیست! -->
                            </div>
                            <div class="user-profile__info-pass">
                                <label for="pass"
                                    >رمز عبور:<span>*</span></label
                                >
                                <!-- <div class="pass-holder"> -->
                                <input
                                    @click="passChange"
                                    :type="passwordFieldType"
                                    value="********"
                                    id="pass"
                                />
                                <!-- <button
                                        @click="switchVisibility"
                                        type="button"
                                        class="clear-input"
                                        aria-label="Close"
                                    >
                                        <img
                                            :style="
                                                passwordFieldType === 'password'
                                                    ? 'display: block'
                                                    : 'display: none'
                                            "
                                            src="/icons/eye-profile-close.svg"
                                        />
                                        <img
                                            :style="
                                                passwordFieldType === 'text'
                                                    ? 'display: block'
                                                    : 'display: none'
                                            "
                                            src="/icons/eye-profile.svg"
                                        />
                                    </button> -->
                                <!-- </div> -->
                            </div>
                        </div>
                        <div class="user-profile__btn-holder">
                            <button class="user-profile__btn" type="submit">
                                ثبت تغییرات
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import TheProfilePassModal from "~/components/Profile/PersonalInfo/TheProfilePassModal.vue";

import TheDateDropdown from "~/components/Profile/PersonalInfo/TheDateDropdown.vue";
export default {
    middleware: "authentication",
    components: {
        TheProfileSideBar,
        TheProfilePassModal,
        TheDateDropdown
    },
    data() {
        return {
            passwordFieldType: "password",
            // passFocusIsActive: false,
            passChangeIsActive: false,
            msg: [],
            nationalcode: "",
            // later we get it from store (in talk with back-end)
            phoneNumber: "09120121023",
            selectedDate: ""
        };
    },
    watch: {
        nationalcode(value) {
            this.nationalcode = value;
            this.validateNationalcode(value);
        },
        selectedDate() {
            console.log(this.selectedDate);
        }
    },
    methods: {
        goToProfile() {
            this.$router.push("/profile");
        },
        // passFocus() {
        //     this.passFocusIsActive = !this.passFocusIsActive;
        // },
        passChange() {
            this.passChangeIsActive = !this.passChangeIsActive;
        },
        switchVisibility() {
            this.passwordFieldType =
                this.passwordFieldType === "password" ? "text" : "password";
        },
        validateNationalcode(value) {
            let difference = 10 - value.length;
            if (/\D/.test(value)) {
                this.msg["nationalcode"] = "کد ملی نمی تواند شامل حروف باشد!";
            } else if (value.length == 0) {
                this.msg["nationalcode"] = "";
                // } else if (value.length < 10) {
                //     this.msg["nationalcode"] =
                //         "کد ملی باید 10 رقم باشد! " +
                //         difference +
                //         " رقم باقی مانده.";
            } else {
                this.msg["nationalcode"] = "";
            }
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
}
/* .v-enter-from {
    opacity: 0;
}
.v-enter-active {
    transition: all 200ms ease-out;
}
.v-enter-to {
    opacity: 0.5;
} */
.v-leave-from {
    opacity: 0.5;
}
.v-leave-active {
    transition: all 300ms ease-in;
}
.v-leave-to {
    opacity: 0;
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

.user-info__profile__imgholder-default {
    width: 140px;
    height: 140px;
    /* border: 1px solid red; */
    border-radius: 50%;
    background-color: $gray-border;
}
.user-profile__changepic-btn {
    color: $code-request;
    font-size: 18px;
    line-height: 140.62%;
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
    &__userpic {
        /* border: 1px solid gray; */
        @include display-flex();
        flex-direction: column;
        align-items: center;
        margin-top: 23px;
        height: 162px;
        width: 162px;
    }
    &__container {
        @include display-flex();
        flex-direction: column;
        width: 100%;
        min-height: 500px;
        height: max-content;
        /* border: 1px solid rgb(11, 27, 201); */
        padding: 0 90px;
    }
    &__info {
        @include display-flex();
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        /* border: 0.1px solid red; */
        margin: 0 auto;
        margin-top: 50px;
        min-height: 395px;
        height: max-content;
        min-width: 700px;
        max-width: 875px;
        &-name,
        &-email,
        &-phone,
        &-birthday,
        &-nationalcode,
        &-pass {
            width: 390px;
            height: 100px;
            /* background: rgb(220, 232, 228); */
            /* border: 0.1px solid red; */
        }
        &-name {
            background: $white;
            @include display-flex();
            flex-direction: row;
            justify-content: space-between;
        }
        &-phone,
        &-pass,
        &-name > section,
        &-nationalcode {
            background: $white;
            @include display-flex();
            flex-direction: column;
        }
        &-name > section > label,
        &-nationalcode > label,
        &-pass > label,
        &-phone > label {
            font-size: 16px;
            line-height: 140.62%;
            text-align: right;
            margin-bottom: 16px;
        }
        &-pass > label > span {
            color: $alert-red;
            margin-right: 3px;
        }
        #name,
        #family,
        &-phone > input,
        &-nationalcode > input {
            font-family: inherit;
            font-size: 16px;
            height: 52px;
            border: 1px solid $input-border;
            box-shadow: 0px 4px 4px $gray-border;
            border-radius: 15px;
            color: $gray;
            outline: none;
            padding: 16px;
        }
        /* &-pass > .pass-holder {
            @include display-flex();
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border: 1px solid $input-border;
            box-shadow: 0px 4px 4px $gray-border;
            border-radius: 15px;
            height: 52px;
        } */
        &-pass > input {
            /* flex-grow: 1; */
            border: 1px solid $input-border;
            box-shadow: 0px 4px 4px $gray-border;
            border-radius: 15px;
            height: 52px;
            font-family: inherit;
            font-size: 16px;
            height: 52px;
            /* border: none; */
            /* background: transparent; */
            border-radius: 15px;
            color: $gray;
            outline: none;
            padding: 16px;
        }
        /* .pass-holder__active {
            border-color: $black;
        } */
        #name:focus,
        #family:focus,
        &-pass > input:focus,
        &-nationalcode > input:focus {
            border-color: $black;
        }
        .err__input {
            /* we use this class when user input is wrong
            so in this situation_ !important _is not so much bad */
            border-color: $alert-red !important;
            /*background: $alert-red__bg;
            color: $alert-red;  */
        }
        #name {
            width: 157px;
        }
        #family {
            width: 208px;
        }
        /* &-email,
        &-birthday,
        &-pass {

        } */
    }
    &__alert {
        margin-top: 4px;
        color: $alert-red;
        text-align: right;
        font-size: 14px;
        line-height: 140.62%;
    }
    &__btn {
        margin: 0 auto 48px auto;
        height: 57px;
        width: 270px;
        background: $btn__green;
        color: $white;
        font-size: 18px;
        font-family: inherit;
        line-height: 140.62%;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
        outline: none;
        border: none;
    }
}
.splicer-line {
    display: none;
}
@media (max-width: 1450px) {
    .user-profile {
        &__info {
            &-name,
            &-email,
            &-phone,
            &-birthday,
            &-nationalcode,
            &-pass {
                width: 360px;
            }
        }
        &__container {
            padding: 0 50px;
        }
        #name {
            width: 137px;
        }
        #family {
            width: 178px;
        }
    }
}
@media (max-width: 1220px) {
    .user-profile {
        &__info {
            &-name,
            &-email,
            &-phone,
            &-birthday,
            &-nationalcode,
            &-pass {
                width: 340px;
            }
        }
        &__container {
            padding: 0 20px;
        }
    }
}
@media (max-width: 960px) {
    #overlay {
        background: $overlay__profile-mobile;
    }
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
    .user-info__profile__imgholder-default {
        width: 100px;
        height: 100px;
    }
    .user-profile__changepic-btn {
        font-size: 14px;
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
        &__info {
            @include display-flex();
            flex-direction: row-reverse;
            flex-wrap: wrap;
            justify-content: space-between;
            /* border: 1px solid red; */
            margin-top: 50px;
            /* height: 500px; */
            min-width: 100%;
            &-name,
            &-email,
            &-phone,
            &-birthday,
            &-nationalcode,
            &-pass {
                width: 100%;
                height: 90px;
                margin: 0 24px 24px 24px;
            }
            &-phone {
                order: 1;
            }
            &-email {
                order: 2;
            }
            &-nationalcode {
                order: 3;
            }
            &-birthday {
                order: 4;
            }
            &-pass {
                order: 5;
            }
            &-name > section > label,
            &-nationalcode > label,
            &-pass > label,
            &-phone > label {
                font-size: 14px;
            }
            #name,
            #family,
            &-nationalcode > input,
            &-pass > input,
            &-phone > input {
                font-size: 13px;
                height: 46px;
                padding: 14px 16px;
            }
        }
        &__container {
            padding: 0;
        }
        &__btn {
            font-size: 16px;
            margin: 0 0 47px 0;
            align-self: center;
            font-weight: 500;
            width: 100%;
            &-holder {
                padding: 0 11px;
            }
        }
        &__alert {
            font-size: 13px;
        }
        #name {
            width: 120px;
        }
        #family {
            width: 142px;
        }
    }

    .splicer-line {
        display: block;
        width: 100%;
        border: none;
        border-top: 1px solid $gray-border;
    }
}
@media (max-width: 350px) {
    .user-profile {
        #name {
            width: 110px;
            padding: 13px;
        }
        #family {
            width: 135px;
            padding: 13px;
        }
    }
}
@media (max-width: 280px) {
    .user-profile {
        #name {
            width: 105px;
            padding: 10px;
        }
        #family {
            width: 110px;
            padding: 10px;
        }
    }
}
</style>
