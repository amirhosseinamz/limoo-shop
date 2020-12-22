<template>
    <keep-alive>
        <component :is="signUpLoader"></component>
    </keep-alive>
</template>

<script>
import stepOne from "~/components/Auth/SignUpStepOne";
import stepTwo from "~/components/Auth/SignUpStepTwo";
import wellcome from "~/components/Auth/WellcomeSignUp";

export default {
    components: {
        stepOne,
        stepTwo,
        wellcome
    },
    computed: {
        signUpLoader() {
            return this.$store.getters.signUpPicker;
        }
    }
};
</script>

<style lang="scss" scoped></style>
