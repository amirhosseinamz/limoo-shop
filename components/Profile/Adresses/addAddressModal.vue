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
        <span class="modal__title">افزودن آدرس جدید</span>
        <hr class="splicer-line" />
        <form @submit.prevent="" class="w-100">
          <h3>dsd</h3>

            <button @click="submitChangePass" class="pass__submitbtn">
                ثبت تغییرات
            </button>
        </form>
    </div>
</template>
<script>
// import customeDropDown from '../../../modules/customeDropDown';

export default {
  components: {
    // customeDropDown,
  },
    data() {
        return {
            modalClose: false,
            msg: [],
        };
    },
    watch: {

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

        submitChangePass() {

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
        margin-bottom: 35px;
        width: 45%;
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
    .pass__alert {
        margin-top: 4px;
        color: $alert-red;
        text-align: right;
        font-size: 14px;
        line-height: 140.62%;
    }
}
.splicer-line {
    display: none;
}
.p-modal-city_provence{
  @include display-flex();
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
        .pass__alert {
            font-size: 13px;
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
            label {
                font-size: 13px;
            }
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
            margin-top: 15px;
        }
    }
    .splicer-line {
        margin-bottom: 17px;
    }
}
</style>
