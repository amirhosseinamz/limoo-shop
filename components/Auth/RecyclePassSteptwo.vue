<template>
  <div class="signup-container">
    <div class="card">
      <div class="signin-next-btn">
        <button @click="nextPage" class="app-signin-next-btn">
          <img src="../../static/next.svg" />
        </button>
        <div class="success-message">
          <img class="success-icon" src="../../static/success.svg" />
          <p dir="rtl" class="success-txt">رمز با موفقیت تغییر کرد!</p>
        </div>
      </div>

      <div class="card-body">
        <form @submit.prevent="pressed">
          <div class="form-group">
            <p class="txt-header">بازیابی رمز عبور</p>
            <p dir="rtl" class="txt-content">
              لطفا کد تایید را وارد کنید!
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
      wrongInput: false
    };
  },
  methods: {
    // goToNextStepofSignUp() {
    //   if (this.phone.match(/\d/g).length === 11) {
    //     this.wrongInput = false;
    //     this.$store.commit("PhoneNumber", { value: this.phone });
    //     this.$store.commit("walkInSignUpcomponents", { value: "stepTwo" });
    //   } else {
    //     this.wrongInput = true;
    //   }
    // this.$router.push("/");
    // pattern="[0-9]{4}[0-9]{3}[0-9]{4}"
    // },

    pressed() {
      // talk to server
      this.$store.commit("walkInSignIncomponents", { value: "PassChange" });
    },
    changeRTL() {
      this.$vuetify.rtl = true;
    },
    nextPage() {
      // go to ...
      // this.$store.commit("walkInSignUpcomponents", { value: "stepTwo" });
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
}
@keyframes cssAnimation {
  0% {
    opacity: 0;
    transform: translate(0%, -140%);
  }
  10% {
    opacity: 0;
    transform: translate(0%, -100%);
  }
  20% {
    opacity: 0.25;
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
    opacity: 0.25;
    transform: translate(0%, -50%);
  }
  90% {
    opacity: 0;
    transform: translate(0%, -100%);
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
  padding: 0;
  text-align: center;
}
.signup-btn {
  margin-top: 32px;
  margin-bottom: 144px;
}
.google-signup-btn {
  display: none;
}
@media screen and (max-width: 600px) {
  .app-signin-next-btn {
    display: none;
  }
  .google-signup-btn {
    display: block;
  }
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
    margin-bottom: 107px;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 328px;
    margin: 183px 16px 24px 16px;
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
  .card {
    padding-right: 0;
  }
  .success-message {
    width: 270px;
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
