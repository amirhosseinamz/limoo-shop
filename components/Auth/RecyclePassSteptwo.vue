<template>
    <div class="signup-container">
        <div class="card">
            <div class="signin-next-btn">
                <button @click="nextPage" class="app-signin-next-btn">
                    <img src="../../static/next.svg" />
                </button>
            </div>

            <div class="card-body">
                <form @submit.prevent="pressed">
                    <div class="form-group">
                        <p class="txt-header">بازیابی رمز عبور</p>
                        <p dir="rtl" class="txt-content">
                            لطفا کد تایید را وارد کنید!
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
                            ادامه
                        </button>
                        <button class="google-signup-btn" type="submit">
                            ورود با حساب گوگل
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
            wrongInput: false,
            isActive: false
        };
    },
    methods: {
        pressed() {
            // talk to server
            this.$store.commit("walkInSignIncomponents", {
                value: "PassChange"
            });
        },
        changeRTL() {
            this.$vuetify.rtl = true;
        },
        nextPage() {
            // go to ...
            this.$store.commit("walkInSignIncomponents", {
                value: "recyclePass"
            });
        }
    }
};
</script>

<style scoped>
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
    justify-content: space-around;
    width: 642px;
    height: 524px;
    background-color: #ffffff;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.03);
    border-radius: 15px;
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
    margin: 63px 90px 33px 0;
}
.txt-content {
    font-size: 16px;
    line-height: 22.5px;
    font-weight: 318;
    text-align: right;
    margin: 5px 90px 16px 0;
}
.signup-input {
    padding: 0;
    text-align: center;
    letter-spacing: 0.7rem;
    font-size: 20px;
}
.signup-btn {
    margin-top: 14px;
    margin-bottom: 148px;
}
.google-signup-btn {
    display: none;
}
@media screen and (max-width: 600px) {
    .google-signup-btn {
        display: block;
    }
}
@media screen and (max-width: 540px) {
    .alert-txt {
        font-size: 14px;
        padding-left: 50px;
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
        margin-bottom: 107px;
    }
    .txt-header {
        font-size: 20px;
        line-height: 140.62%;
        width: 328px;
        margin: 120px 16px 24px 16px;
    }
    .txt-content {
        width: 328px;
        font-size: 14px;
        margin-bottom: 17px;
        margin-right: 16px;
        margin-left: 16px;
    }
    .timer {
        margin-right: 16px;
    }
}
@media screen and (max-width: 350px) {
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
@media screen and (max-width: 321px) and (min-width: 299px) {
    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
@media screen and (max-width: 280px) {
    .card {
        padding-right: 0;
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
