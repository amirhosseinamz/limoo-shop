<template>
    <keep-alive>
        <sign-up-step-two></sign-up-step-two>
    </keep-alive>
</template>

<script>
import SignUpStepTwo from "~/components/Auth/SignUpStepTwo";
export default {
    layout: "signinup",
    components: {
        SignUpStepTwo
    }
};
</script>
