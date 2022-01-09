const state = () => ({
  formData: {
    phoneNumber: "09120121023",
    passwordShowModal: "AB6565656509",
    email: "kimia.talaee73@gmail.com" ,
    nationalcode: "004757495969" ,
    name: "",
    family: "",
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
