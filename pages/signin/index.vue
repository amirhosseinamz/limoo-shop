<template>
    <keep-alive>
        <component :is="signInLoader"></component>
    </keep-alive>
</template>

<script>
import stepOne from "~/components/Auth/SignInStepOne";
import stepTwo from "~/components/Auth/SignInStepTwo";
import recyclePass from "~/components/Auth/RecyclePass";
import recyclePassStepTwo from "~/components/Auth/RecyclePassSteptwo";
import PassChange from "~/components/Auth/PassChange";

export default {
    layout: "signinup",
    components: {
        stepOne,
        stepTwo,
        recyclePass,
        recyclePassStepTwo,
        PassChange
    },
    computed: {
        signInLoader() {
            return this.$store.getters.signInPicker;
        }
    }
};
</script>

<style lang="scss" scoped></style>
