<template>
    <keep-alive>
        <sign-up-step-one @onSubmit="onSubmit"></sign-up-step-one>
    </keep-alive>
</template>

<script>
import SignUpStepOne from "~/components/Auth/SignUpStepOne";
export default {
    layout: "signinup",
    components: {
        SignUpStepOne
    },
    methods: {
        onSubmit(phone) {
            // console.log(phone);
            const headers = {
                "Content-Type": "application/json",
                "Client-Key": "4FDD6981-C063-46E1-BBE9-D88D2B889EB3"
            };
            this.$axios
                .$post(
                    "https://unison-dev.parsdata.net/auth/signin",
                    { phone },
                    {
                        headers: headers
                    }
                )
                .then(result => {
                    console.log(result.response_code);
                    if (result.response_code == 2208) {
                        this.$router.push("/users/register/confirm");
                    }
                })
                .catch(e => console.log(e));
        }
    }
};
</script>
