<template>
    <div class="signup-container">
        <div class="card">
            <div>
                <button @click="nextPage" class="app-signin-next-btn"></button>
                <div
                    class="success-message"
                    :class="{ 'success-message-animation': newCodeSent }"
                >
                    <img class="success-icon" src="/icons/success.svg" />
                    <p dir="rtl" class="success-txt">کد جدید ارسال شد!</p>
                </div>
                <div
                    class="alert-message "
                    :class="{ 'alert-message-animation': timerPassed }"
                >
                    <img class="alert-icon " src="/icons/alarm.svg" />
                    <p dir="rtl" class="alert-txt">
                        کد منقضی شد، لطفا کد جدید درخواست کنید!
                    </p>
                </div>
            </div>
            <div class="card-body">
                <form @submit.prevent="pressed">
                    <div class="form-group">
                        <p class="txt-header">تایید شماره همراه</p>
                        <p dir="rtl" class="txt-content">
                            کد ارسال شده به شماره <span>09120121023</span> را
                            وارد کنید.
                        </p>
                        <div class="input-section">
                            <div
                                class="input-holder"
                                :style="
                                    verifyCode || isActive
                                        ? 'border:1px solid #515151'
                                        : 'border:1px solid #bdbdbd'
                                "
                            >
                                <input
                                    @click="[(isActive = true)]"
                                    class="signup-input form-control"
                                    type="number"
                                    oninput="if(value.length>4)value=value.slice(0,4)"
                                    v-model="verifyCode"
                                    maxlength="4"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div class="timer-holder">
                        <p class="timer"><span>02:45</span> ارسال مجدد کد</p>
                        <p @click="animate" class="code-request">
                            درخواست ارسال مجدد کد
                        </p>
                    </div>
                    <div class="btn-control">
                        <button
                            class="signup-btn"
                            type="submit"
                            @click="showWellcomeModal"
                        >
                            تایید
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            verifyCode: "",
            timerPassed: false,
            newCodeSent: false,
            isActive: false
        };
    },
    methods: {
        animate() {
            console.log(this.verifyCode);
            this.newCodeSent = true;
            setTimeout(() => {
                this.newCodeSent = false;
            }, 5000);
        },
        pressed() {
            // talk to server
        },

        nextPage() {
            // go to .../users/signin-up
            this.$router.push("/users/signin-up");
            // this.$store.commit("walkInSignUpcomponents", { value: "stepOne" });
        },
        showWellcomeModal() {
            this.$store.dispatch({
                type: "stateShowModalWellcome",
                value: true
            });

            this.$router.push("/");
        }
    }
};
</script>

<style lang="scss" scoped>
.success-message {
    @include display-flex();
    flex-direction: row-reverse;
    width: 463px;
    height: 58px;
    background-color: $alert-massage__green;
    margin: 8px 90px 0px 89px;
    border-radius: 10px;
    position: absolute;
    opacity: 0;
    /* add .message-animation when we want to show it */
}

.alert-message {
    @include display-flex();
    flex-direction: row-reverse;
    width: 463px;
    height: 58px;
    background-color: $alert-red;
    margin: 44px 90px 0px 89px;
    border-radius: 10px;
    position: absolute;
    opacity: 0;
    /* add .message-animation when we want to show it */
}
/* add this animation to messages when we want to show them */
.success-message-animation {
    animation: cssAnimation 1000ms 2 alternate;
}
.alert-message-animation {
    animation: cssAnimation 2000ms 2 alternate;
}

@keyframes cssAnimation {
    0% {
        opacity: 0;
        transform: translate(0%, -170%);
    }
    70% {
        opacity: 1;
        transform: translate(0%, -60%);
    }
    80% {
        opacity: 1;
        transform: translate(0%, -60%);
    }
    90% {
        opacity: 1;
        transform: translate(0%, -60%);
    }
    100% {
        opacity: 1;
        transform: translate(0%, -60%);
    }
}

.signup-container {
    height: 100vh;
    @include display-flex();
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.card {
    @include display-flex();
    flex-direction: column;
    justify-content: space-around;
    width: 642px;
    height: 524px;
    background-color: $white;
    box-shadow: 0px 8px 16px $box__shadow;
    border-radius: 15px;
}
.success-icon {
    width: 24px;
    height: 24px;
    margin-right: 18px;
    margin-top: 17px;
}
.alert-icon {
    width: 24px;
    height: 24px;
    margin-right: 18px;
    margin-top: 17px;
}
.app-signin-next-btn {
    @include display-flex();
    margin: 24px 11.5px 0 24px;
    width: 13.5px;
    height: 24px;
    cursor: pointer;
}
.app-signin-next-btn::before {
    content: "\e801";
    @include font-icon__limoo();
    font-size: 25px;
    color: $black-icon;
}
.success-txt {
    font-weight: 500;
    font-size: 16px;
    line-height: 140.62%;
    margin-right: 8px;
    text-align: right;
    margin-top: 17px;
    color: $white;
}
.alert-txt {
    font-weight: 500;
    font-size: 16px;
    line-height: 140.62%;
    margin-right: 8px;
    text-align: right;
    margin-top: 17px;
    color: $white;
}
.form-control {
    direction: rtl;
    font-family: inherit;
}
.timer-holder {
    @include display-flex();
    justify-content: flex-end;
}
.timer {
    font-size: 14px;
    line-height: 140.62%;
    color: $gray;
    margin-right: 90px;
    display: none;
}
.code-request {
    font-weight: 500;
    font-size: 13px;
    line-height: 140.62%;
    text-align: right;
    color: $code-request;
    margin-right: 90px;
    cursor: pointer;
}
.btn-control {
    @include display-flex();
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.min-display {
    display: none;
}
.txt-header {
    font-size: 24px;
    line-height: 33.75px;
    font-weight: 400;
    text-align: right;
    margin: 77px 90px 33px 0;
}
.txt-content {
    font-size: 16px;
    line-height: 22.5px;
    font-weight: 318;
    text-align: right;
    margin-bottom: 25px;
    margin-right: 90px;
}
.signup-input {
    color: $code;
    text-align: center;
    text-align: -moz-center;
    font-size: 20px;
    max-width: 461px;
    letter-spacing: 0.7em;
}
.signup-btn {
    margin-top: 14px;
    margin-bottom: 126px;
}

@media screen and (max-width: 540px) {
    @keyframes cssAnimation {
        0% {
            opacity: 0;
            transform: translate(0%, -170%);
        }
        70% {
            opacity: 1;
            transform: translate(0%, -80%);
        }
        80% {
            opacity: 1;
            transform: translate(0%, -80%);
        }
        90% {
            opacity: 1;
            transform: translate(0%, -80%);
        }
        100% {
            opacity: 1;
            transform: translate(0%, -80%);
        }
    }
    .success-message {
        width: 328px;
        height: 56px;
        margin: 16px 16px 0px 16px;
    }
    .alert-message {
        width: 328px;
        height: 72px;
        margin: 16px 16px 0px 16px;
    }
    .alert-txt {
        font-size: 14px;
        padding-left: 50px;
    }
    .success-txt {
        font-size: 14px;
        margin-top: 20px;
    }
    .card {
        width: auto;
        height: 100vh;
        border-radius: 0;
    }
    .signup-input {
        margin-right: 16px;
        margin-left: 16px;
        width: 328px;
        height: 60px;
        margin-bottom: 8px;
    }
    .input-holder {
        margin-right: 16px;
        margin-left: 16px;
        padding: 0;
        width: 328px;
        height: 60px;
        margin-bottom: 8px;
    }

    .signup-btn {
        width: 328px;
        margin-top: 38px;
        margin-bottom: 184px;
    }
    .txt-header {
        font-size: 20px;
        line-height: 140.62%;
        width: 328px;
        margin: 128px 16px 24px 16px;
    }
    .txt-content {
        width: 328px;
        font-size: 14px;
        margin-right: 16px;
        margin-left: 16px;
    }
    .timer {
        margin-right: 16px;
    }
    .code-request {
        margin-right: 16px;
    }
}
@media screen and (max-width: 321px) and (min-width: 299px) {
    .card {
        @include display-flex();
        flex-direction: column;
        justify-content: space-between;
    }
}
@media screen and (max-width: 350px) {
    .success-message {
        width: 280px;
    }
    .alert-message {
        width: 280px;
    }
    .signup-input {
        margin-right: 10px;
        margin-left: 10px;
        width: 280px;
        margin-bottom: 42px;
    }
    .input-holder {
        width: 280px;
    }
    .signup-btn {
        width: 280px;
    }
    .txt-header {
        font-size: 20px;
        line-height: 140.62%;
        width: 280px;
        margin-right: 10px;
    }
    .txt-content {
        width: 280px;
        margin-right: 10px;
    }
    .signup-limoo-logo {
        margin-top: 0;
    }
}
@media screen and (max-width: 280px) {
    .success-message {
        width: 270px;
    }
    .alert-message {
        width: 270px;
        height: 60px;
        margin-right: 5px;
    }
    .alert-txt {
        padding-left: 30px;
    }
    .signup-input {
        margin-right: 5px;
        margin-left: 5px;
        width: 270px;
        margin-bottom: 42px;
    }
    .input-holder {
        width: 270px;
        margin-right: 10px;
    }
    .signup-btn {
        width: 270px;
    }
    .txt-header {
        font-size: 20px;
        line-height: 140.62%;
        width: 270px;
        margin-right: 5px;
    }
    .txt-content {
        width: 270px;
        margin-right: 5px;
    }
    .signup-limoo-logo {
        margin-top: 0.2rem;
    }
}
</style>
