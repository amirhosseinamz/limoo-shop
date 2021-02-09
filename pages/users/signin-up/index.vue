<template>
    <keep-alive>
        <sign-up-step-one></sign-up-step-one>
    </keep-alive>
</template>

<script>
import SignUpStepOne from "~/components/Auth/SignUpStepOne";
export default {
    layout: "signinup",
    components: {
        SignUpStepOne
    }
};
</script>
