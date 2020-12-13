<template>
    <div class="signup-container">
        <div class="card">
            <div class="signin-next-btn">
                <button @click="nextPage" class="app-signin-next-btn">
                    <img src="../../static/next.svg" />
                </button>
                <div
                    class="success-message"
                    :class="[newCodeSent ? 'message-animation' : '']"
                >
                    <img class="success-icon" src="../../static/success.svg" />
                    <p dir="rtl" class="success-txt">کد جدید ارسال شد!</p>
                </div>
                <div
                    class="alert-message "
                    :class="[timerPassed ? 'message-animation' : '']"
                >
                    <img class="alert-icon " src="../../static/alarm.svg" />
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
                            <div class="input-holder">
                                <input
                                    class="signup-input form-control"
                                    type="text"
                                    v-model="verifyCode"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div class="timer-holder">
                        <p class="timer"><span>02:45</span> ارسال مجدد کد</p>
                        <p class="code-request">درخواست ارسال مجدد کد</p>
                    </div>
                    <div class="btn-control">
                        <button class="signup-btn" type="submit">
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
            newCodeSent: false
        };
    },
    methods: {
        pressed() {
            // talk to server
            return (this.newCodeSent = !this.newCodeSent);
        },
        changeRTL() {
            this.$vuetify.rtl = true;
        },
        nextPage() {
            // go to ...
            this.$store.commit("walkInSignUpcomponents", { value: "stepOne" });
        }
    }
};
</script>

<style scoped>
.success-message {
    display: flex;
    flex-direction: row-reverse;
    width: 463px;
    height: 58px;
    background-color: #1fdc6b;
    margin: 44px 90px 0px 89px;
    border-radius: 10px;
    position: absolute;
    opacity: 0;
    /* display: none; */
    /* add .message-animation when we want to show it */
}

.alert-message {
    display: flex;
    flex-direction: row-reverse;
    width: 463px;
    height: 58px;
    background-color: #ed0b26;
    margin: 44px 90px 0px 89px;
    border-radius: 10px;
    position: absolute;
    opacity: 0;
    /* z-index: 1; */
    /* display: none; */
    /* add .message-animation when we want to show it */
}
/* add this animation to messages when we want to show them */
/* animation-timing-function: linear; */
.message-animation {
    animation: cssAnimation 5s forwards;
    animation-timing-function: linear;
}
@keyframes cssAnimation {
    0% {
        opacity: 0;
        transform: translate(0%, -140%);
    }
    20% {
        opacity: 0.4;
        transform: translate(0%, -50%);
    }
    30% {
        opacity: 0.5;
        transform: translate(0%, -10%);
    }
    40% {
        opacity: 1;
        transform: translate(0%, 0%);
    }
    50% {
        opacity: 1;
        transform: translate(0%, 0%);
    }
    60% {
        opacity: 1;
        transform: translate(0%, 0%);
    }
    70% {
        opacity: 0.5;
        transform: translate(0%, -10%);
    }
    80% {
        opacity: 0.4;
        transform: translate(0%, -50%);
    }
    100% {
        opacity: 0;
        transform: translate(0%, -140%);
    }
}

.signup-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 642px;
    height: 524px;
    background-color: #ffffff;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.03);
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
.signin-next-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.app-signin-next-btn {
    margin: 24px 11.5px 0 24px;
    width: 13.5px;
    height: 24px;
}
.success-txt {
    font-weight: 500;
    font-size: 16px;
    line-height: 140.62%;
    margin-right: 8px;
    text-align: right;
    margin-top: 17px;
    color: #ffffff;
}
.alert-txt {
    font-weight: 500;
    font-size: 16px;
    line-height: 140.62%;
    margin-right: 8px;
    text-align: right;
    margin-top: 17px;
    color: #ffffff;
}
.form-control {
    direction: rtl;
    font-family: IRANYekanWeb;
}
.timer-holder {
    display: flex;
    justify-content: flex-end;
}
.timer {
    font-size: 14px;
    line-height: 140.62%;
    color: #828282;
    margin-right: 90px;
}
.code-request {
    font-weight: 500;
    font-size: 13px;
    line-height: 140.62%;
    text-align: right;
    color: #47a7ff;
    margin-right: 90px;
    display: none;
}
.btn-control {
    display: flex;
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
    margin: 37px 90px 33px 0;
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
    text-align: center;
}
.signup-btn {
    margin-top: 32px;
    margin-bottom: 144px;
}

@media screen and (max-width: 540px) {
    /* .app-signin-next-btn {
    display: none;
  } */
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
        margin-top: 32px;
    }
    .txt-header {
        font-size: 20px;
        line-height: 140.62%;
        width: 328px;
        margin-right: 16px;
        margin-left: 16px;
    }
    .txt-content {
        width: 328px;
        margin-right: 16px;
        margin-left: 16px;
    }
    .timer {
        margin-right: 16px;
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
