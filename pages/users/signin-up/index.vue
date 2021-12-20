<template>
  <keep-alive>
    <sign-up-step-one @onSubmit="onSubmit"></sign-up-step-one>
  </keep-alive>
</template>

<script>
import SignUpStepOne from "~/components/Auth/SignUpStepOne";
export default {
  layout: "signinup",
  // middleware: "signUpPageGuard",
  components: {
    SignUpStepOne,
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    onSubmit(phone) {
      this.isLoading = true;
        this.$store.dispatch("authentication/authentication/signIn", {
          phone: phone,
        })
      .then( () => {
        this.$router.push("/users/register/confirm");
      });
      this.isLoading = false;
    },
  },
};
</script>
