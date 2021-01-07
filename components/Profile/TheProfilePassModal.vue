<template>
    <div
        class="modal modal-animation__open"
        :class="{ 'modal-animation__close': modalClose }"
        dir="rtl"
    >
        <img
            @click="closeModalDesktop"
            class="modal__close-cross"
            src="/icons/close.svg"
        />
        <img
            @click="closeModalMobile"
            class="modal__close-line"
            src="/icons/line.svg"
        />
        <span class="modal__title">تغییر رمز عبور</span>
        <hr class="splicer-line" />
        <form @submit.prevent="">
            <div class="pass__holder">
                <label for="pass">رمز عبور قدیم:<span>*</span></label>
                <div class="pass__old">
                    <input :type="oldPassType" value="159746446" id="pass" />
                    <button
                        @click="switchVisibilityOldpass"
                        type="button"
                        class="clear-input"
                        aria-label="Close"
                    >
                        <img
                            :style="
                                oldPassType === 'password'
                                    ? 'display: block'
                                    : 'display: none'
                            "
                            src="/icons/eye-profile-close.svg"
                        />
                        <img
                            :style="
                                oldPassType === 'text'
                                    ? 'display: block'
                                    : 'display: none'
                            "
                            src="/icons/eye-profile.svg"
                        />
                    </button>
                </div>
            </div>
            <div class="pass__holder">
                <label for="newpass">رمز عبور جدید:<span>*</span></label>
                <div class="pass__new">
                    <input :type="newPassType" id="newpass" />
                    <button
                        @click="switchVisibilityNewPass"
                        type="button"
                        class="clear-input"
                        aria-label="Close"
                    >
                        <img
                            :style="
                                newPassType === 'password'
                                    ? 'display: block'
                                    : 'display: none'
                            "
                            src="/icons/eye-profile-close.svg"
                        />
                        <img
                            :style="
                                newPassType === 'text'
                                    ? 'display: block'
                                    : 'display: none'
                            "
                            src="/icons/eye-profile.svg"
                        />
                    </button>
                </div>
            </div>
            <div class="pass__holder pass__repeat">
                <label for="newpass">تکرار رمز عبور جدید:<span>*</span></label>
                <div class="pass__new-repeat">
                    <input :type="newPassType" id="newpass" />
                    <button
                        @click="switchVisibilityNewPassRepeat"
                        type="button"
                        class="clear-input"
                        aria-label="Close"
                    >
                        <img
                            :style="
                                newPassRepeatType === 'password'
                                    ? 'display: block'
                                    : 'display: none'
                            "
                            src="/icons/eye-profile-close.svg"
                        />
                        <img
                            :style="
                                newPassRepeatType === 'text'
                                    ? 'display: block'
                                    : 'display: none'
                            "
                            src="/icons/eye-profile.svg"
                        />
                    </button>
                </div>
            </div>
            <button @click="closeModalMobile" class="pass__submitbtn">
                ثبت تغییرات
            </button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            modalClose: false,
            oldPassType: "password",
            newPassType: "password",
            newPassRepeatType: "password"
        };
    },
    methods: {
        closeModalMobile() {
            this.modalClose = true;
            setTimeout(() => {
                this.$parent.passChange();
            }, 280);
        },
        closeModalDesktop() {
            this.$parent.passChange();
        },
        switchVisibilityOldpass() {
            this.oldPassType =
                this.oldPassType === "password" ? "text" : "password";
        },
        switchVisibilityNewPass() {
            this.newPassType =
                this.newPassType === "password" ? "text" : "password";
        },
        switchVisibilityNewPassRepeat() {
            this.newPassRepeatType =
                this.newPassRepeatType === "password" ? "text" : "password";
        }
    }
};
</script>
<style lang="scss" scoped>
.modal {
    @include display-flex();
    flex-direction: column;
    align-items: center;
    width: 642px;
    height: 524px;
    background: $white;
    box-shadow: 0px 8px 16px $box__shadow;
    border-radius: 15px;
    &__close-cross {
        align-self: flex-end;
        width: 30px;
        height: 30px;
        margin-top: 24px;
        margin-left: 24px;
        cursor: pointer;
    }
    &__close-line {
        display: none;
        align-self: center;
        margin-top: 24px;
    }
    &__title {
        display: none;
    }
    form {
        @include display-flex();
        flex-direction: column;
        align-items: center;
    }
    .pass__holder {
        height: 88px;
        width: 390px;
        margin-bottom: 35px;
        label {
            font-size: 16px;
            line-height: 140.62%;
            span {
                color: $red;
                margin-right: 3px;
            }
        }
    }
    .pass__repeat {
        margin-bottom: 42px;
    }
    .pass__old,
    .pass__new,
    .pass__new-repeat {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 52px;
        flex-grow: 1;
        background: $white;
        border: 1px solid $input-border;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px $gray-border;
        border-radius: 15px;
        margin-top: 15px;
    }
    .pass__old > input,
    .pass__new > input,
    .pass__new-repeat > input {
        height: 52px;
        flex-grow: 1;
        background: transparent;
        /* border: 1px solid red; */
        padding: 16px;
        line-height: 140.62%;
        border: none;
        border-radius: 15px;
        font-family: inherit;
        outline: none;
        /* letter-spacing: 5px; */
        font-size: 16px;
    }
    .pass__submitbtn {
        align-self: center;
        margin-bottom: 40px;
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
@media (max-width: 960px) {
    .modal-animation__open {
        animation: modalOpen 600ms linear;
    }
    @keyframes modalOpen {
        0% {
            transform: translate(0, 579px);
        }
        100% {
            transform: translate(0, 0);
        }
    }
    .modal-animation__close {
        animation: modalClose 600ms linear;
    }
    @keyframes modalClose {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(0, 579px);
        }
    }
    .modal {
        align-self: flex-end;
        position: absolute;
        width: 100%;
        height: 570px;
        background: $white;
        box-shadow: 0px 20px 24px $overlay__profile-mobile;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        &__close-cross {
            display: none;
        }
        &__close-line {
            display: block;
            align-self: center;
            margin-top: 24px;
        }
        &__title {
            display: block;
            font-size: 14px;
            line-height: 140.62%;
            color: $gray;
            margin-top: 24px;
            text-align: center;
        }
        /* form {
            margin-top: 5px;
        } */
        .pass__holder {
            height: 80px;
            width: 84vw;
            margin-bottom: 35px;
            label {
                font-size: 14px;
            }
        }

        .pass__old,
        .pass__new,
        .pass__new-repeat {
            @include display-flex();
            height: 46px;
        }
        .pass__old > input,
        .pass__new > input,
        .pass__new-repeat > input {
            height: 46px;
            width: 200px;
        }
        .pass__submitbtn {
            width: 91vw;
            margin-bottom: 47px;
        }
    }
    .clear-input > img {
        width: 17px;
        height: 15px;
    }
    .splicer-line {
        display: block;
        width: 95%;
        border: none;
        margin: 16px 5px;
        border-top: 1px solid $gray-border;
        margin-bottom: 35px;
    }
}
@media screen and (max-width: 320px) {
    .modal-animation__open {
        animation: modalOpen 600ms linear;
    }
    @keyframes modalOpen {
        0% {
            transform: translate(0, 470px);
        }
        100% {
            transform: translate(0, 0);
        }
    }
    .modal-animation__close {
        animation: modalClose 600ms linear;
    }
    @keyframes modalClose {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(0, 470px);
        }
    }
    .modal {
        height: 470px;
        &__close-line {
            margin-top: 20px;
        }
        &__title {
            margin-top: 20px;
        }
        .pass__holder {
            height: 70px;
            width: 84vw;
            margin-bottom: 25px;
        }
        .pass__old,
        .pass__new,
        .pass__new-repeat {
            @include display-flex();
            height: 40px;
        }
        .pass__old > input,
        .pass__new > input,
        .pass__new-repeat > input {
            height: 40px;
            width: 200px;
        }
        .pass__submitbtn {
            width: 91vw;
            margin-bottom: 37px;
        }
    }
    .splicer-line {
        margin-bottom: 25px;
    }
}
</style>
