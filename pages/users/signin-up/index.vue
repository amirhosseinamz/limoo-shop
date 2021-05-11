<template>
  <keep-alive>
    <sign-up-step-one @onSubmit="onSubmit"></sign-up-step-one>
  </keep-alive>
</template>

<script>
import SignUpStepOne from "~/components/Auth/SignUpStepOne";
export default {
  layout: "signinup",
  middleware: "signUpPageGuard",
  components: {
    SignUpStepOne,
  },
  methods: {
    onSubmit(phone) {
      // console.log(phone);
      this.$store.dispatch("authUser/signInUpUser", {
        phone: phone,
      });
    },
  },
};
</script>
