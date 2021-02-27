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
        // console.log("authData", authData);
        const headers = {
            "Content-Type": "application/json",
            "Client-Key": process.env.CLIENT_KEY
        };
        return this.$axios
            .$post(
                process.env.SIGN_UP_API,
                { phone: authData.phone },
                {
                    headers: headers
                }
            )
            .then(result => {
                // console.log(result.response_code);
                if (result.response_code == 2208) {
                    this.$router.push("/users/register/confirm");
                }
            })
            .catch(e => console.log(e));
    },
    confirmAuthUser(vuexContext, authData) {
        const headers = {
            "Content-Type": "application/json",
            "Client-Key": process.env.CLIENT_KEY
        };
        return this.$axios
            .$post(
                process.env.SIGN_UP_OTP_API,
                {
                    phone: authData.userPhoneNumber,
                    activation_code: authData.verifyCode
                },
                {
                    headers: headers
                }
            )
            .then(result => {
                // console.log(result);
                if (result.response_code == 1) {
                    // console.log(result.token);
                    vuexContext.commit("setToken", result.token);
                }
            })
            .catch(e => console.log(e));
    },
    signOutUser(vuexContext, authData) {
        const headers = {
            "Content-Type": "application/json",
            "Client-Key": process.env.CLIENT_KEY,
            Authorization: authData.token
        };
        return this.$axios
            .$delete(process.env.SIGN_OUT_API, {
                headers: headers
            })
            .then(result => {
                if (result.response_code == 1) {
                    // console.log(result);
                    vuexContext.commit("setToken", null);
                    // console.log(state.token);
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
