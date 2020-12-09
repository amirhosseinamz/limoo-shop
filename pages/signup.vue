<template>
  <keep-alive>
    <component :is="signUpLoader"></component>
  </keep-alive>
</template>

<script>
import stepOne from "@/components/Auth/SignUpStepOne";
import stepTwo from "@/components/Auth/SignUpStepTwo";

export default {
  components: {
    stepOne,
    stepTwo
  },
  computed: {
    signUpLoader() {
      return this.$store.getters.signUpPicker;
    }
  }
};
</script>

<style scoped></style>
