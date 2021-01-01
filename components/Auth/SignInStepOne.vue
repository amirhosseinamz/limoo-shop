<template>
    <div class="signin-container">
        <div class="card">
            <div class="signin-next-btn">
                <button @click="previousPage" class="app-signin-next-btn">
                    <img src="/icons/next.svg" />
                </button>
            </div>

            <div class="card-body">
                <form @submit.prevent="pressed">
                    <div class="form-group">
                        <p class="txt-header">کلمه عبور</p>
                        <p dir="rtl" class="txt-content">
                            شما عضو هستید لطفا برای ورود کلمه عبور خود را وارد
                            کنید.
                        </p>
                        <div class="input-section">
                            <div
                                class="input-holder"
                                :style="
                                    password || isActive
                                        ? 'border:1px solid #515151'
                                        : 'border:1px solid #bdbdbd'
                                "
                            >
                                <input
                                    @click="[(isActive = true)]"
                                    class="signin-input form-control"
                                    :type="passwordFieldType"
                                    placeholder="کلمه عبور..."
                                    v-model="password"
                                    required
                                />
                                <button
                                    @click="switchVisibility"
                                    type="button"
                                    class="
                                            clear-input
                                    "
                                    aria-label="Close"
                                >
                                    <img
                                        :style="
                                            passwordFieldType === 'password'
                                                ? 'display: block'
                                                : 'display: none'
                                        "
                                        src="/icons/closeEye.svg"
                                    />
                                    <img
                                        :style="
                                            passwordFieldType === 'text'
                                                ? 'display: block'
                                                : 'display: none'
                                        "
                                        src="/icons/openEye.svg"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="btn-control">
                        <button class="signin-btn" type="submit">
                            ادامه
                        </button>
                    </div>
                    <div class="forget-pass-section">
                        <p @click="forgetPass" class="forget-pass">
                            فراموشی رمز عبور
                            <img class="arrow" src="/icons/arrow.svg" />
                        </p>

                        <p @click="disposablePass" class="disposable-pass">
                            ورود با رمز عبور یکبار مصرف
                            <img class="arrow" src="/icons/arrow.svg" />
                        </p>
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
            password: "",
            isActive: false
        };
    },
    methods: {
        pressed() {
            this.$store.commit("passHolder", { value: this.password });
            console.log(this.password);
        },
        switchVisibility() {
            this.passwordFieldType =
                this.passwordFieldType === "password" ? "text" : "password";
        },
        forgetPass() {
            // send request to disposablePass
            this.$store.commit("walkInSignIncomponents", {
                value: "recyclePass"
            });
        },
        disposablePass() {
            // send request to disposablePass
            this.$store.commit("walkInSignIncomponents", { value: "stepTwo" });
        },
        previousPage() {
            // go to ...
            this.$router.push("/signup");
        }
    }
};
</script>

<style lang="scss" scoped>
.signin-container {
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
    box-shadow: 0px 8px 16px $auth-box__shadow;
    border-radius: 15px;
}

.signin-next-btn {
    @include display-flex();
    justify-content: flex-start;
    width: 30px;
    height: 30px;
    margin-top: 32px;
}
.form-control {
    direction: rtl;
    font-family: inherit;
}
.err-text {
    font-family: inherit;
    font-size: 13px;
    text-align: right;
    color: $alert-red;
    line-height: 140.62%;
    margin-right: 90px;
    margin-bottom: 29px;
}
.btn-control {
    @include display-flex();
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.txt-header {
    font-size: 24px;
    line-height: 33.75px;
    font-weight: 400;
    text-align: right;
    margin: 37px 90px 33px 15px;
}
.txt-content {
    font-size: 16px;
    line-height: 22.5px;
    font-weight: 318;
    text-align: right;
    margin-bottom: 25px;
    margin-right: 90px;
}
.signin-btn {
    margin-top: 32px;
}
.signin-input {
    padding-right: 24px;
}
.forget-pass-section {
    @include display-flex();
    flex-direction: column;
    align-items: flex-end;
}
.forget-pass {
    color: $code-request;
    font-weight: 500;
    font-size: 14px;
    line-height: 140.62%;
    margin: 24px 90px 16px 0;
    cursor: pointer;
}
.arrow {
    margin-left: 8px;
    cursor: pointer;
}
.disposable-pass {
    color: $code-request;
    font-weight: 500;
    font-size: 14px;
    line-height: 140.62%;
    margin: 0 90px 86px 0;
    cursor: pointer;
}

@media screen and (max-width: 540px) {
    .card {
        width: auto;
        height: 100vh;
        border-radius: 0;
        padding-right: 5px;
    }
    .signin-input {
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

    .signin-btn {
        width: 328px;
        margin-top: 30px;
    }
    .txt-header {
        font-size: 20px;
        line-height: 140.62%;
        width: 328px;
        margin: 100px 16px 33px 16px;
    }
    .txt-content {
        width: 328px;
        font-size: 14px;
        margin-bottom: 15px;
        margin-right: 16px;
        margin-left: 16px;
    }
    .forget-pass {
        font-size: 13px;
        margin: 16px 16px 16px 0;
    }
    .disposable-pass {
        font-size: 13px;
        margin: 0 16px 143px 0;
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
    .signin-input {
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
    .signin-btn {
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
    .signin-input {
        margin-right: 5px;
        margin-left: 5px;
        width: 270px;
        margin-bottom: 42px;
    }
    .input-holder {
        margin-right: 10px;
        margin-left: 10px;
        padding: 0;
        width: 270px;
        height: 60px;
        margin-bottom: 8px;
    }
    .signin-btn {
        width: 270px;
    }
    .txt-header {
        font-size: 20px;
        line-height: 140.62%;
        width: 270px;
        margin-right: 10px;
    }
    .txt-content {
        width: 270px;
        margin-right: 10px;
    }
    .signup-limoo-logo {
        margin-top: 0.2rem;
    }
}
</style>
