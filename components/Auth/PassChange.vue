<template>
    <div class="signup-container">
        <div class="card">
            <div class="signin-next-btn">
                <button @click="nextPage" class="app-signin-next-btn">
                    <img src="../../static/next.svg" />
                </button>
                <div
                    class="success-message"
                    :class="[passChenged ? 'message-animation' : '']"
                >
                    <img class="success-icon" src="../../static/success.svg" />
                    <p dir="rtl" class="success-txt">
                        رمز با موفقیت تغییر کرد!
                    </p>
                </div>
            </div>

            <div class="card-body">
                <form @submit.prevent="pressed">
                    <div class="form-group">
                        <p class="txt-header">تغییر رمز عبور</p>
                        <p dir="rtl" class="txt-content">
                            رمز عبور جدید
                        </p>
                        <div class="input-section">
                            <div class="input-holder">
                                <input
                                    class="signup-input form-control"
                                    :type="passwordFieldType"
                                    placeholder="کلمه عبور..."
                                    v-model="password"
                                    required
                                />
                                <button
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
                                        src="../../static/closeEye.svg"
                                    />
                                    <img
                                        :style="
                                            passwordFieldType === 'text'
                                                ? 'display: block'
                                                : 'display: none'
                                        "
                                        src="../../static/openEye.svg"
                                    />
                                </button>
                            </div>
                        </div>
                        <p dir="rtl" class="txt-content">
                            تکرار رمز عبور جدید
                        </p>
                        <div class="input-section">
                            <div class="input-holder-verify">
                                <input
                                    class="signup-input form-control"
                                    :type="passwordFieldTypeVerify"
                                    placeholder="کلمه عبور..."
                                    v-model="passwordVerify"
                                    required
                                />
                                <button
                                    @click="switchVisibilityVerify"
                                    type="button"
                                    class="clear-input"
                                    aria-label="Close"
                                >
                                    <img
                                        :style="
                                            passwordFieldTypeVerify ===
                                            'password'
                                                ? 'display: block'
                                                : 'display: none'
                                        "
                                        src="../../static/closeEye.svg"
                                    />
                                    <img
                                        :style="
                                            passwordFieldTypeVerify === 'text'
                                                ? 'display: block'
                                                : 'display: none'
                                        "
                                        src="../../static/openEye.svg"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="btn-control">
                        <button class="signup-btn" type="submit">
                            ادامه
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
            passwordFieldType: "password",
            passwordFieldTypeVerify: "password",
            password: "",
            passwordVerify: "",
            passChenged: false
        };
    },
    methods: {
        pressed() {
            this.$store.commit("passHolder", { value: this.password });
            console.log(this.password);
            this.passChenged = !this.passChenged;
        },
        switchVisibility() {
            this.passwordFieldType =
                this.passwordFieldType === "password" ? "text" : "password";
        },
        switchVisibilityVerify() {
            this.passwordFieldTypeVerify =
                this.passwordFieldTypeVerify === "password"
                    ? "text"
                    : "password";
        },
        nextPage() {
            // go to ...
            this.$store.commit("walkInSignIncomponents", {
                value: "recyclePassStepTwo"
            });
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
    /* add .message-animation when we want to show them */
}

/* add this animation to messages when we want to show them */
.message-animation {
    animation: cssAnimation 5s forwards;
    animation-timing-function: linear;
}
@keyframes cssAnimation {
    0% {
        opacity: 0;
        transform: translate(0%, -160%);
    }
    10% {
        opacity: 0;
        transform: translate(0%, -100%);
    }
    20% {
        opacity: 0.25;
        transform: translate(0%, -90%);
    }
    30% {
        opacity: 0.5;
        transform: translate(0%, -80%);
    }
    40% {
        opacity: 1;
        transform: translate(0%, -70%);
    }
    50% {
        opacity: 1;
        transform: translate(0%, -70%);
    }
    60% {
        opacity: 1;
        transform: translate(0%, -70%);
    }
    70% {
        opacity: 0.5;
        transform: translate(0%, -70%);
    }
    80% {
        opacity: 0.4;
        transform: translate(0%, -90%);
    }
    90% {
        opacity: 0.25;
        transform: translate(0%, -100%);
    }
    100% {
        opacity: 0;
        transform: translate(0%, -160%);
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
.success-txt {
    font-weight: 500;
    font-size: 16px;
    line-height: 140.62%;
    margin-right: 8px;
    text-align: right;
    margin-top: 17px;
    color: #ffffff;
}
.signin-next-btn {
    display: flex;
    justify-content: flex-start;
    width: 30px;
    height: 30px;
    margin-top: 24px;
}
.input-holder {
    margin-bottom: 38px;
}
.input-holder-verify {
    margin-bottom: 42px;
}
.form-control {
    direction: rtl;
    font-family: IRANYekanWeb;
}
.btn-control {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.txt-header {
    font-size: 24px;
    line-height: 33.75px;
    font-weight: 400;
    text-align: right;
    margin: 8px 90px 38px 15px;
}
.txt-content {
    font-size: 16px;
    line-height: 22.5px;
    font-weight: 318;
    text-align: right;
    margin-bottom: 24px;
    margin-right: 90px;
}
.signup-btn {
    margin-bottom: 56px;
}
.arrow {
    margin-left: 8px;
}
.disposable-pass {
    color: #47a7ff;
    font-weight: 500;
    font-size: 14px;
    line-height: 140.62%;
    margin: 0 90px 86px 0;
}
@media screen and (max-width: 600px) {
    .app-signin-next-btn {
        visibility: hidden;
    }
}
@media screen and (max-width: 540px) {
    .card {
        width: auto;
        height: 100vh;
        border-radius: 0;
        padding-right: 5px;
    }
    .success-message {
        width: 328px;
        height: 56px;
        margin: 16px 16px 0px 16px;
    }
    .success-txt {
        font-size: 14px;
        margin-top: 20px;
    }
    .signup-input {
        margin-right: 16px;
        margin-left: 16px;
        padding-right: 0px;
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
    .input-holder-verify {
        margin-right: 16px;
        margin-left: 16px;
        padding: 0;
        width: 328px;
        height: 60px;
    }
    .signup-btn {
        width: 328px;
        margin-top: 30px;
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
        font-size: 14px;
        margin-bottom: 15px;
        margin-right: 16px;
        margin-left: 16px;
    }
    .disposable-pass {
        font-size: 13px;
        margin: 0 32px 86px 0;
    }
    .arrow {
        display: none;
    }
    .signup-limoo-logo {
        margin-top: 0.5rem;
    }
}
@media screen and (max-width: 350px) {
    .card {
        padding-right: 0px;
    }
    .success-message {
        width: 280px;
    }
    .signup-input {
        margin-right: 10px;
        margin-left: 10px;
        width: 280px;
        margin-bottom: 42px;
    }
    .input-holder {
        margin-right: 16px;
        margin-left: 16px;
        padding: 0;
        width: 280px;
        height: 60px;
        margin-bottom: 8px;
    }
    .input-holder-verify {
        width: 280px;
    }
    .signup-btn {
        width: 280px;
    }
    .txt-header {
        font-size: 20px;
        line-height: 140.62%;
        width: 280px;
        margin: 37px 10px 20px 10px;
    }
    .txt-content {
        width: 280px;
        margin-right: 20px;
    }
    .signup-limoo-logo {
        margin-top: 0;
    }
}
@media screen and (max-width: 280px) {
    .card {
        margin-right: 0px;
    }
    .success-message {
        width: 270px;
    }
    .signup-input {
        margin-right: 5px;
        margin-left: 5px;
        width: 270px;
        margin-bottom: 42px;
    }
    .input-holder {
        margin-right: 16px;
        margin-left: 16px;
        padding: 0;
        width: 270px;
        height: 60px;
        margin-bottom: 8px;
    }
    .input-holder-verify {
        margin-right: 16px;
        margin-left: 16px;
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
