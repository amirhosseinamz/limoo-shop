<template>
  <div class="pass-container">
    <div class="card">
      <div class="signin-next-btn">
        <button @click="nextPage" class="app-signin-next-btn"></button>
        <div
          class="success-message"
          :class="{ 'message-animation': passChenged }"
        >
          <img class="success-icon" src="/icons/success.svg" />
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
              <div
                class="input-holder"
                :style="
                  password || passIsActive
                    ? 'border:1px solid #515151'
                    : 'border:1px solid #bdbdbd'
                "
              >
                <input
                  @click="[(passIsActive = true)]"
                  class="signup-input form-control"
                  :type="passwordFieldType"
                  placeholder="کلمه عبور..."
                  v-model="password"
                  maxlength="32"
                  required
                />
                <button
                  @click="switchVisibility"
                  type="button"
                  class="clear-input"
                  aria-label="Close"
                >
                  <span
                    :style="
                      passwordFieldType === 'password'
                        ? 'display: block'
                        : 'display: none'
                    "
                    class="signin__close-eye"
                  ></span>
                  <span
                    :style="
                      passwordFieldType === 'text'
                        ? 'display: block'
                        : 'display: none'
                    "
                    class="signin__open-eye"
                  ></span>
                </button>
              </div>
            </div>
            <p dir="rtl" class="txt-content">
              تکرار رمز عبور جدید
            </p>
            <div class="input-section">
              <div
                class="input-holder-verify"
                :style="
                  passwordVerify || verifyPassIsActive
                    ? 'border:1px solid #515151'
                    : 'border:1px solid #bdbdbd'
                "
              >
                <input
                  @click="[(verifyPassIsActive = true)]"
                  class="signup-input form-control"
                  :type="passwordFieldTypeVerify"
                  placeholder="کلمه عبور..."
                  v-model="passwordVerify"
                  maxlength="32"
                  required
                />
                <button
                  @click="switchVisibilityVerify"
                  type="button"
                  class="clear-input"
                  aria-label="Close"
                >
                  <span
                    :style="
                      passwordFieldTypeVerify === 'password'
                        ? 'display: block'
                        : 'display: none'
                    "
                    class="signin__close-eye"
                  ></span>
                  <span
                    :style="
                      passwordFieldTypeVerify === 'text'
                        ? 'display: block'
                        : 'display: none'
                    "
                    class="signin__open-eye"
                  ></span>
                </button>
              </div>
            </div>
          </div>

          <div class="btn-control">
            <button
              class="signup-btn desk-display"
              :class="{ 'success-pss-btn': passChenged }"
              type="submit"
              dir="rtl"
            >
              {{ passChenged ? "با موفقیت تغییر کرد..." : "ادامه" }}
            </button>
            <button class="signup-btn min-display" type="submit">
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
      passChenged: false,
      passIsActive: false,
      verifyPassIsActive: false,
    };
  },
  methods: {
    pressed() {
      // this.$store.commit("passHolder", { value: this.password });
      // console.log(this.password);
      //* move to another method later
      this.passChenged = true;
      setTimeout(() => {
        this.passChenged = false;
      }, 2000);
      //*==========================
    },
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    switchVisibilityVerify() {
      this.passwordFieldTypeVerify =
        this.passwordFieldTypeVerify === "password" ? "text" : "password";
    },
    nextPage() {
      // go to ...
      // this.$router.push("/users/password/forget/confirm");
      this.$emit("btn-go-back-recycle-pass-step-two");
    },
  },
};
</script>

<style lang="scss" scoped>
.pass-container {
  /* height: 100vh; */
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
.success-txt {
  font-weight: 500;
  font-size: 16px;
  line-height: 140.62%;
  margin-right: 8px;
  text-align: right;
  margin-top: 17px;
  color: $white;
}
.signin-next-btn {
  @include display-flex();
  justify-content: flex-start;
  width: 30px;
  height: 30px;
  margin-top: 24px;
}
.app-signin-next-btn::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: 24px;
  color: $black-icon;
}
.signin__close-eye::before {
  content: "\e810";
  @include font-icon__limoo();
  font-size: 20px;
  color: $gray;
  vertical-align: middle;
}
.signin__close-eye,
.signin__open-eye {
  margin-bottom: 2px;
}
.signin__open-eye::before {
  content: "\e811";
  @include font-icon__limoo();
  font-size: 20px;
  color: $gray;
  vertical-align: middle;
}
.input-holder {
  margin-bottom: 38px;
}
.input-holder-verify {
  margin-bottom: 42px;
}
.form-control {
  direction: rtl;
  font-family: inherit;
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
.success-pss-btn {
  background: $alert-massage__green;
}
.signup-input {
  padding-right: 24px;
}

.min-display {
  display: none;
}
.desk-display {
  display: block;
}
@media screen and (max-width: 600px) {
  .app-signin-next-btn {
    visibility: hidden;
  }
  .min-display {
    display: block;
  }
  .desk-display {
    display: none;
  }
}
@media screen and (max-width: 540px) {
  .success-message {
    @include display-flex();
    flex-direction: row-reverse;
    width: 463px;
    height: 58px;
    background-color: $alert-massage__green;
    margin: 44px 90px 0px 89px;
    border-radius: 10px;
    position: absolute;
    opacity: 0;
    /* add .message-animation when we want to show them */
  }

  /* add this animation to messages when we want to show them */
  .message-animation {
    animation: cssAnimation 1000ms 2 alternate;
  }
  @keyframes cssAnimation {
    0% {
      opacity: 0;
      transform: translate(0%, -100%);
    }
    70% {
      opacity: 1;
      transform: translate(0%, -20%);
    }
    80% {
      opacity: 1;
      transform: translate(0%, -20%);
    }
    90% {
      opacity: 1;
      transform: translate(0%, -20%);
    }
    100% {
      opacity: 1;
      transform: translate(0%, -20%);
    }
  }
  .card {
    width: auto;
    height: 100vh;
    border-radius: 0;
    padding-right: 1px;
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
    margin-bottom: 24px;
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
    margin-top: 6px;
    margin-bottom: 132px;
  }
  .txt-header {
    font-size: 20px;
    line-height: 140.62%;
    width: 328px;
    margin-top: 100px;
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
    margin-right: 15px;
    margin-left: 15px;
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
    margin-right: 5px;
    margin-left: 5px;
    padding: 0 10px 0 0;
    width: 270px;
    height: 60px;
    margin-bottom: 8px;
  }
  .input-holder-verify {
    margin-right: 15px;
    padding: 0 10px 0 0;
    margin-left: 15px;
    width: 270px;
  }
  .signup-btn {
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
