<template>
    <div>
        <!-- <div id="overlay" v-if="showModalWellcome">
            <wellcome-sign-up></wellcome-sign-up>
        </div> -->
        <sign-up-step-two @onConfirm="onConfirm"></sign-up-step-two>
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
            showModalWellcome: false,
            userPhoneNumber: ""
        };
    },
    mounted() {
        this.userPhoneNumber = this.$store.getters.PhoneNumberPicker;
    },
    methods: {
        onConfirm(verifyCode) {
            // console.log(phone);
            const headers = {
                "Content-Type": "application/json",
                "Client-Key": "4FDD6981-C063-46E1-BBE9-D88D2B889EB3"
            };
            this.$axios
                .$post(
                    "https://unison-dev.parsdata.net/auth/signin/otp",
                    {
                        phone: this.userPhoneNumber,
                        activation_code: verifyCode
                    },
                    {
                        headers: headers
                    }
                )
                .then(result => {
                    console.log(result);
                    if (result.response_code == 1) {
                        this.$store.dispatch({
                            type: "stateShowModalWellcome",
                            value: true
                        });
                        this.$store.dispatch({
                            type: "userIsAuth",
                            value: true
                        });
                        this.$router.replace("/");
                        this.$store.commit("PhoneNumber", { value: "" });
                        console.log(result.token);
                        window.localStorage.setItem("token", result.token);
                    }
                })
                .catch(e => console.log(e));
        }
    }
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
