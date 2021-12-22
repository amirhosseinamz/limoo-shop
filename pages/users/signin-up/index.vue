<template>
  <keep-alive>
    <sign-up-step-one @onSubmit="onSubmit"></sign-up-step-one>
  </keep-alive>
</template>

<script>
import SignUpStepOne from "~/components/Auth/SignUpStepOne";
export default {
  layout: "signinup",
  middleware: "isAuthenticated",
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

      this.isLoading = false;
    },
  },
};
</script>
