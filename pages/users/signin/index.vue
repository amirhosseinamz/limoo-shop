<template>
    <keep-alive>
        <sign-in-step-one></sign-in-step-one>
    </keep-alive>
</template>

<script>
import SignInStepOne from "~/components/Auth/SignInStepOne";
export default {
  middleware: "isAuthenticated",
  layout: "signinup",
    components: {
        SignInStepOne
    }
};
</script>
