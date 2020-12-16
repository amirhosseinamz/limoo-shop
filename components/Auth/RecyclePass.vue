<template>
    <div class="signup-container">
        <div class="card">
            <div class="signup-close-btn">
                <button @click="nextPage" class="app-signup-close-btn">
                    <img src="../../static/next.svg" />
                </button>
            </div>

            <div class="card-body">
                <form @submit.prevent="pressed">
                    <div class="form-group">
                        <p class="txt-header">بازیابی رمز عبور</p>
                        <p class="txt-content">
                            .لطفا شماره موبایل خود را وارد کنید
                        </p>
                        <div class="input-section">
                            <div
                                :style="
                                    phone
                                        ? 'border:1px solid #515151'
                                        : 'border:1px solid #bdbdbd'
                                "
                                :class="[
                                    wrongInput
                                        ? 'input-holder-wrong'
                                        : 'input-holder'
                                ]"
                            >
                                <input
                                    class="form-control"
                                    :class="[
                                        wrongInput
                                            ? 'signup-input-wrong'
                                            : 'signup-input'
                                    ]"
                                    @click="[(wrongInput = false)]"
                                    type="tel"
                                    maxlength="11"
                                    placeholder="شماره موبایل..."
                                    v-model.trim="phone"
                                /><button
                                    @click="
                                        [(wrongInput = false), (phone = '')]
                                    "
                                    type="button"
                                    :style="
                                        phone
                                            ? 'visibility: visible'
                                            : 'visibility: hidden'
                                    "
                                    :class="[
                                        wrongInput
                                            ? 'clear-input-wrong'
                                            : 'clear-input'
                                    ]"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                        <p
                            class="err-text"
                            :style="
                                wrongInput
                                    ? 'visibility: visible'
                                    : 'visibility: hidden'
                            "
                        >
                            !شماره وارد شده صحیح نیست
                        </p>
                    </div>

                    <div class="btn-control">
                        <button
                            @click="goToNextStepofRecyclePass"
                            class="signup-btn"
                            type="submit"
                        >
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
            phone: "",
            storePhone: "",
            wrongInput: false
        };
    },
    computed: {
        PhoneNumberPicker() {
            this.storePhone = this.$store.getters.PhoneNumberPicker;
        }
    },
    methods: {
        changeRTL() {
            this.$vuetify.rtl = true;
        },
        goToNextStepofRecyclePass() {
            const condition = this.phone.match(/\d/g);

            if (
                this.phone == "" ||
                this.phone == String ||
                condition.length < 11 ||
                condition.length > 11
            ) {
                this.wrongInput = true;
            } else if (condition.length === 11) {
                this.wrongInput = false;
                this.$store.commit("PhoneNumber", { value: this.phone });
                if (this.phone == this.storePhone) {
                    this.$store.commit("walkInSignUpcomponents", {
                        value: "stepTwo"
                    });
                } else {
                    this.$store.commit("walkInSignIncomponents", {
                        value: "recyclePassStepTwo"
                    });
                }
            }

            // pattern="[0-9]{4}[0-9]{3}[0-9]{4}"
        },

        pressed() {
            const condition = this.phone.match(/\d/g);

            if (
                this.phone == "" ||
                this.phone == String ||
                condition.length < 11 ||
                condition.length > 11
            ) {
                this.wrongInput = true;
            } else if (condition.length === 11) {
                this.wrongInput = false;
                this.$store.commit("PhoneNumber", { value: this.phone });
                if (this.phone == this.storePhone) {
                    this.$store.commit("walkInSignUpcomponents", {
                        value: "stepTwo"
                    });
                } else {
                    this.$store.commit("walkInSignIncomponents", {
                        value: "recyclePassStepTwo"
                    });
                }
            }
        },
        changeRTL() {
            this.$vuetify.rtl = true;
        },
        nextPage() {
            this.$store.commit("walkInSignIncomponents", { value: "stepOne" });
            //   this.$router.push("/signin");
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
.signup-input-wrong,
.signup-input {
    margin-right: 24px;
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

.signup-close-btn {
    display: flex;
    justify-content: flex-start;
    width: 30px;
    height: 30px;
    margin-top: 24px;
}
.form-control {
    direction: rtl;
    font-family: IRANYekanWeb;
}
.signup-btn {
    margin-bottom: 126px;
}
.err-text {
    font-family: IRANYekanWeb;
    font-size: 13px;
    text-align: right;
    color: #ed0b26;
    line-height: 140.62%;
    margin-right: 90px;
    margin-bottom: 18px;
    /* visibility: hidden; */
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
@media screen and (max-width: 540px) {
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

    .signup-input-wrong {
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
    .input-holder-wrong {
        margin-right: 16px;
        margin-left: 16px;
        width: 328px;
        height: 60px;
        margin-bottom: 8px;
    }
    .signup-btn {
        margin-top: 15px;
        width: 328px;
        margin-bottom: 184px;
    }
    .txt-header {
        font-size: 20px;
        line-height: 140.62%;
        width: 328px;
        margin: 120px 16px 33px 16px;
    }
    .txt-content {
        width: 328px;
        margin-right: 16px;
        margin-left: 16px;
    }
    .err-text {
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
    .signup-input-wrong {
        margin-right: 10px;
        margin-left: 10px;
        width: 280px;
        margin-bottom: 42px;
    }
    .input-holder {
        margin-right: 10px;
        margin-left: 10px;
        padding: 0;
        width: 280px;
        height: 60px;
        margin-bottom: 8px;
    }
    .input-holder-wrong {
        margin-right: 10px;
        margin-left: 10px;

        width: 280px;
        height: 60px;
        margin-bottom: 8px;
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
}
@media screen and (max-width: 321px) and (min-width: 299px) {
    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
@media screen and (max-width: 280px) {
    .signup-input,
    .signup-input-wrong {
        margin-right: 5px;
        margin-left: 5px;
        width: 270px;
        margin-bottom: 42px;
        padding-right: 16px;
    }
    .input-holder {
        margin-right: 5px;
        margin-left: 5px;
        width: 270px;
        margin-bottom: 8px;
        padding-right: 0;
    }
    .input-holder-wrong {
        margin-right: 5px;
        margin-left: 5px;
        width: 270px;
        margin-bottom: 8px;
        padding-right: 0;
    }
    .signup-btn {
        width: 270px;
    }
    .txt-header {
        font-size: 20px;
        line-height: 140.62%;
        width: 270px;
        margin-right: 15px;
    }
    .txt-content {
        width: 270px;
        margin-right: 15px;
    }
}
</style>
