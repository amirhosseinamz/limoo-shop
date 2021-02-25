const state = () => ({
    token: null
});

const mutations = {
    setToken(state, token) {
        state.token = token;
    }
};
const actions = {
    signInUpUser(vuexContext, authData) {
        console.log("authData", authData);
        const headers = {
            "Content-Type": "application/json",
            "Client-Key": "4FDD6981-C063-46E1-BBE9-D88D2B889EB3"
        };
        return this.$axios
            .$post(
                "https://unison-dev.parsdata.net/auth/signin",
                { phone: authData.phone },
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
    },
    confirmAuthUser(vuexContext, authData) {
        const headers = {
            "Content-Type": "application/json",
            "Client-Key": "4FDD6981-C063-46E1-BBE9-D88D2B889EB3"
        };
        return this.$axios
            .$post(
                "https://unison-dev.parsdata.net/auth/signin/otp",
                {
                    phone: authData.userPhoneNumber,
                    activation_code: authData.verifyCode
                },
                {
                    headers: headers
                }
            )
            .then(result => {
                console.log(result);
                if (result.response_code == 1) {
                    console.log(result.token);
                    vuexContext.commit("setToken", result.token);
                }
            })
            .catch(e => console.log(e));
    },
    signOutUser(vuexContext, authData) {
        const headers = {
            "Content-Type": "application/json",
            "Client-Key": "4FDD6981-C063-46E1-BBE9-D88D2B889EB3",
            Authorization: authData.token
        };
        return this.$axios
            .$delete(
                "https://unison-dev.parsdata.net/auth/signout",

                {
                    headers: headers
                }
            )
            .then(result => {
                if (result.response_code == 1) {
                    console.log(result);
                    console.log(state.token);
                    vuexContext.commit("setToken", null);
                }
            })
            .catch(e => console.log(e));
    }
};

const getters = {
    getToken(state) {
        return state.token;
    }
};
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
