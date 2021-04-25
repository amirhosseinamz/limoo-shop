<template>
    <keep-alive>
        <recycle-pass-step-two></recycle-pass-step-two>
    </keep-alive>
</template>

<script>
import RecyclePassStepTwo from "~/components/Auth/RecyclePassSteptwo";
export default {
    layout: "signinup",
    components: {
        RecyclePassStepTwo
    }
};
</script>
