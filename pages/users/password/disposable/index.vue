<template>
    <keep-alive>
        <sign-in-step-two></sign-in-step-two>
    </keep-alive>
</template>

<script>
import SignInStepTwo from "~/components/Auth/SignInStepTwo";
export default {
    layout: "signinup",
    components: {
        SignInStepTwo
    }
};
</script>