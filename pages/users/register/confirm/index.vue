<template>
  <div>
    <sign-up-step-two
      :confirm-code="confirmCodeIsWrong"
      @confirmed="onConfirm"
    ></sign-up-step-two>
  </div>
</template>

<script>
import SignUpStepTwo from "~/components/Auth/SignUpStepTwo";
import WellcomeSignUp from "~/components/Auth/WellcomeSignUp.vue";
export default {
  layout: "signinup",
  // middleware: "confirmPageGuard",
  middleware: "isAuthenticated",
  components: {
    SignUpStepTwo,
    WellcomeSignUp,
  },
  data() {
    return {
      showModalWellcome: false,
      confirmCodeIsWrong: false,
    };
  },
  methods: {
    onConfirm(verifyCode) {
      this.$store.dispatch('authentication/authentication/confirmCode', {
        activationCode: verifyCode,
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
