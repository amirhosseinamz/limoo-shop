const state = () => ({
  adressesData: [
    {
      id: 1,
      address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 1",
      province: "تهران",
      city: "جنت آباد",
      codePoste: "90",
      nameReceiver: "test",
      numberReceiver: "10",
      QA: [{ id: 1 }, { id: 2 }],
    },
    {
      id: 2,
      address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 2",
      province: "قم",
      city: "قم",
      codePoste: "2",
      nameReceiver: "test",
      numberReceiver: "10",
    },
    {
      id: 3,
      address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 3",
      province: "قم",
      city: "قم",
      codePoste: "3",
      nameReceiver: "test",
      numberReceiver: "10",
    },
  ],
  allProvince: [
    {
      id: 1,
      title: "تهران",
      selected: false,
    },
    {
      id: 2,
      title: "قم",
      selected: false,
    },
  ],
  allCities: [
    {
      id: 1,
      parent_id: 2,
      title: "قم",
      selected: false,
    },
    {
      id: 2,
      parent_id: 1,
      title: "جنت آباد",
      selected: false,
    },
  ],
  currentProduct: {},
  statusShowModalDeleteProduct: false,
  formData: {
    province: "",
    city: "",
    codePoste: "",
    nameReceiver: "",
    numberReceiver: "",
    address: "",
  },
  updateAddress: 0,
  profilePhoneNumber: "09198814783",
})
const getters = {
  adressesData (state) {
    return state.adressesData
  },
  allProvince (state) {
    return state.allProvince
  },
  allCities (state) {
    return state.allCities
  }
}
const mutations = {}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
