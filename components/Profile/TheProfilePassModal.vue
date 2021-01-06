<template>
    <div class="modal" dir="rtl">
        <img
            @click="closeModal"
            class="modal__close-cross"
            src="/icons/close.svg"
        />
        <img
            @click="closeModal"
            class="modal__close-line"
            src="/icons/line.svg"
        />
        <span class="modal__title">تغییر رمز عبور</span>
        <hr class="splicer-line" />
        <form>
            <div class="pass__holder pass__old"></div>
            <div class="pass__holder pass__new"></div>
            <div class="pass__holder pass__new-repeat"></div>
            <button class="pass__submitbtn">ثبت تغییرات</button>
        </form>
    </div>
</template>
<script>
export default {
    methods: {
        closeModal() {
            this.$parent.passChange();
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
        background: rgb(218, 230, 205);
        margin-bottom: 38px;
    }
    .pass__submitbtn {
        align-self: center;
        margin-top: 4px;
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
    .modal {
        @include display-flex();
        flex-direction: column;
        align-items: center;
        align-self: flex-end;
        width: 100%;
        height: 579px;
        background: $white;
        box-shadow: 0px 20px 24px rgba(17, 17, 17, 0.06);
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        &__close-cross {
            display: none;
            align-self: flex-end;
            width: 30px;
            height: 30px;
            margin-top: 24px;
            margin-left: 24px;
            cursor: pointer;
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
        .pass__holder {
            height: 80px;
            width: 84vw;
        }
        .pass__submitbtn {
            font-size: 16px;
            width: 91vw;
        }
    }
    .splicer-line {
        display: block;
        width: 95%;
        border: none;
        margin: 16px 5px;
        border-top: 1px solid $gray-border;
    }
}
</style>
