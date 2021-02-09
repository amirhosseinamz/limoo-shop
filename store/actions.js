export default {
    // in actions we commit with mutations
    userIsAuth(context, payload) {
        context.commit("userIsAuth", payload);
    },
    stateShowModalWellcome(context, payload) {
        context.commit("stateShowModalWellcome", payload);
    }
};
