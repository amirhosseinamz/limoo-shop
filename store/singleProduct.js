const state = () => ({
    hidenBodyScroll : false,
});

const getters = {

};

const mutations = {
    showHidenBodyScroll(state, data) {
      state.hidenBodyScroll = data;
    },




};

const actions = {
    
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
