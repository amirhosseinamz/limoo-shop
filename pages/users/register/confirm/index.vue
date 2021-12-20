<template>
  <div>
    <sign-up-step-two
      :confirm-code="confirmCodeIsWrong"
      @confirmed="onConfirm"
      :error="errorMessage"
    ></sign-up-step-two>
  </div>
</template>

<script>
import SignUpStepTwo from "~/components/Auth/SignUpStepTwo";
import WellcomeSignUp from "~/components/Auth/WellcomeSignUp.vue";
export default {
  layout: "signinup",
  // middleware: "confirmPageGuard",
  components: {
    SignUpStepTwo,
    WellcomeSignUp,
  },
  data() {
    return {
      showModalWellcome: false,
      confirmCodeIsWrong: false,
      errorMessage: "",
    };
  },
  methods: {
    onConfirm(verifyCode) {
      this.$store.dispatch('authentication/authentication/confirmCode', {
        activationCode: verifyCode,
      }).then((res) => {
        if (res) {
          this.errorMessage = res;
        }
        this.$router.push("/");
      });
      this.errorMessage = "";

      // this.$store
      //   .dispatch("authUser/confirmAuthUser", {
      //     userPhoneNumber: this.userPhoneNumber,
      //     verifyCode: verifyCode,
      //   })
      //   .then(() => {
      //     const token = this.$store.getters["authUser/getToken"];
      //     if (Boolean(token)) {
      //       this.$store.dispatch({
      //         type: "stateShowModalWellcome",
      //         value: true,
      //       });
      //       this.$store.dispatch({
      //         type: "userIsAuth",
      //         value: true,
      //       });
      //       this.$router.replace("/");
      //       this.$store.commit("PhoneNumber", { value: "" });
      //     } else if (!Boolean(token)) {
      //       this.confirmCodeIsWrong = true;
      //       setTimeout(() => {
      //         this.confirmCodeIsWrong = false;
      //       }, 5000);
      //     }
      //   });
    },
  },
};
</script>
<style lang="scss" scoped>
#overlay {
  position: fixed; /* Sit on top of the page content */
  @include display-flex();
  justify-content: center;
  align-items: center;
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  z-index: 1;
  background: $white;
}
@media screen and (max-width: 700px) {
  #overlay {
    position: fixed; /* Sit on top of the page content */
    @include display-flex();
    justify-content: center;
    align-items: center;
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    background: $main-bg;
  }
}
</style>
