const state = () => ({
    showModal             : false,
    submitFliterModal     : false,
    submitDataFilterModal : {
      lastUpdateSliderRenge   : [],
      lastUpdateCheckBox      : {
        // checkBoxStore : [],
        // checkBoxBrand : [],
      }
    },
    showModalSort       : false,
    submitSortModal     : false,
    lastUpdateSortModal : [],
    staticDataLanguage  : {},
});

const getters = {

};

const mutations = {
    updateStateFilterModal(state, data) {
        state.submitDataFilterModal.lastUpdateCheckBox[data.key]    = data.getAllCheckBox;
    },

    updateStateModals(state, data) {
      for (let key in data) {
        state[key] = data[key]
      }
    },

    updateStateSortModal(state, data) {
      state.updateStateSortModal = data;
    },

    updateSliderRenge(state, data) {
      state.submitDataFilterModal.lastUpdateSliderRenge = data;
    },

    staticDataLanguage(state, data){
      state.staticDataLanguage = data;
    }




};

const actions = {
    // updateStateCategory({ commit }, payload) {
    //   commit('updateStateMutation', {
    //     payload,
    //   })
    // },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
