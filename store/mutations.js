export default {
    walkInSignUpcomponents(state, payload) {
        state.signUp = payload.value;
    },
    walkInSignIncomponents(state, payload) {
        state.signIn = payload.value;
    },
    PhoneNumber(state, inputPhone) {
        state.phone = inputPhone.value;
    },
    passHolder(state) {
        return state.password;
    },
    userIsAuth(state, payload) {
        state.userAuth = payload.value;
    },
    stateShowModalWellcome(state, payload) {
        state.showModalWellcome = payload.value;
        console.log("store say hi", payload.value);
    }
};
