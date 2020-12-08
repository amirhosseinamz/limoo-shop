<template>
  <keep-alive>
    <component :is="signUpLoader"></component>
  </keep-alive>
</template>

<script>
import StepOne from "@/components/Auth/SignUpStepOne";
import StepTwo from "@/components/Auth/SignUpStepTwo";

export default {
  components: {
    StepOne,
    StepTwo
  },
  computed: {
    signUpLoader() {
      return this.$store.getters.signUpPicker;
    }
  }
};
</script>

<style scoped></style>
