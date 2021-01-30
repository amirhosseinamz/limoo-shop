export default {
    // in actions we commit with mutations
    userIsAuth(context, payload) {
        context.commit("userIsAuth", payload);
    }
};
