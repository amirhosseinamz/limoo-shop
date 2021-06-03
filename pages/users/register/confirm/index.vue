<template>
  <div>
    <!-- <div id="overlay" v-if="showModalWellcome">
            <wellcome-sign-up></wellcome-sign-up>
        </div> -->
    <sign-up-step-two
      :confirm-code="confirmCodeIsWrong"
      @onConfirm="onConfirm"
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
      userPhoneNumber: "",
      confirmCodeIsWrong: false,
    };
  },
  mounted() {
    this.userPhoneNumber = this.$store.getters.PhoneNumberPicker;
  },
  methods: {
    onConfirm(verifyCode) {
      // console.log(phone);
      this.$store
        .dispatch("authUser/confirmAuthUser", {
          userPhoneNumber: this.userPhoneNumber,
          verifyCode: verifyCode,
        })
        .then(() => {
          const token = this.$store.getters["authUser/getToken"];
          // console.log(token);
          if (Boolean(token)) {
            this.$store.dispatch({
              type: "stateShowModalWellcome",
              value: true,
            });
            this.$store.dispatch({
              type: "userIsAuth",
              value: true,
            });
            this.$router.replace("/");
            this.$store.commit("PhoneNumber", { value: "" });
          } else if (!Boolean(token)) {
            this.confirmCodeIsWrong = true;
            setTimeout(() => {
              this.confirmCodeIsWrong = false;
            }, 5000);
          }
        });
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
