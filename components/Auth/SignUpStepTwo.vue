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
            <p class="txt-header">تایید شماره همراه</p>
            <p class="txt-content">
              کد ارسال شده به شماره <span>09120121023</span> را وارد کنید
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
          </div>
          <div class="btn-control">
            <button
              @click="goToNextStepofSignUp"
              class="signup-btn"
              type="submit"
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
      wrongInput: false
    };
  },
  methods: {
    goToNextStepofSignUp() {
      if (this.phone.match(/\d/g).length === 11) {
        this.wrongInput = false;
        this.$store.commit("PhoneNumber", { value: this.phone });
        this.$store.commit("walkInSignUpcomponents", { value: "stepTwo" });
      } else {
        this.wrongInput = true;
      }

      // pattern="[0-9]{4}[0-9]{3}[0-9]{4}"
    },

    pressed() {},
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

.signin-next-btn {
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

@media screen and (max-width: 600px) {
  .min-display {
    display: block;
  }
  .desk-display {
    display: none;
  }
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
