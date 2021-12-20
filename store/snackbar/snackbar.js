
export const state = () => ({
 snackbarData: {
   show: false,
   message: "",
   mode: "",
   position: ""
 },
});

export const getters = {
  snackbarData(state) {
    return state.snackbarData;
  }
};

export const mutations = {
  showSnackbar(state, payload) {

  }
};
export const actions = {
  showSnackbar(context, payload) {
    context.commit('showSnackbar');
  }
};
