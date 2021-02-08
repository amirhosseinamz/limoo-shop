<template>
    <div>
        <!-- <div id="overlay" v-if="showModalWellcome">
            <wellcome-sign-up></wellcome-sign-up>
        </div> -->
        <sign-up-step-two></sign-up-step-two>
    </div>
</template>

<script>
import SignUpStepTwo from "~/components/Auth/SignUpStepTwo";
import WellcomeSignUp from "~/components/Auth/WellcomeSignUp.vue";
export default {
    layout: "signinup",
    components: {
        SignUpStepTwo,
        WellcomeSignUp
    },
    data() {
        return {
            showModalWellcome: false
        };
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
#overlay {
    position: fixed; /* Sit on top of the page content */
    @include display-flex();
    justify-content: center;
    align-items: center;
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    z-index: 1;
    background: $white;
}
@media screen and (max-width: 700px) {
    #overlay {
        position: fixed; /* Sit on top of the page content */
        @include display-flex();
        justify-content: center;
        align-items: center;
        width: 100%; /* Full width (cover the whole page) */
        height: 100%; /* Full height (cover the whole page) */
        background: $main-bg;
    }
}
</style>
