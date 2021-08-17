const state = () => ({
  formData: {
    phoneNumber: "09120121023",
    passwordShowModal: "AB6565656509",
    name: "مهدی",
    family: "دادور",
  },
})
const getters = {
  formData(state) {
    return state.formData;
  }
}
const mutations = {

}
const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
