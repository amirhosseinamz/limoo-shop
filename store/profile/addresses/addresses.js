const state = () => ({
  addressesData: [
    {
      id: 1,
      address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 1",
      province: "تهران",
      city: "جنت آباد",
      codePoste: "90",
      nameReceiver: "test",
      numberReceiver: "10",
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
  formData: {
    province: "",
    city: "",
    codePoste: "",
    nameReceiver: " ",
    numberReceiver: "",
    address: "",
  },
  dataEditAddress: {},
})
const getters = {
  addressesData(state) {
    return state.addressesData;
  },
  allProvince(state) {
    return state.allProvince;
  },
  allCities(state) {
    return state.allCities;
  },
  formData(state) {
    return state.formData;
  },
  dataEditAddress(state) {
    return state.dataEditAddress;
  }
}
const mutations = {
  btnDeleteAddress(state, payload) {
    state.addressesData.splice(payload, 1);
  },
  editAddress(state, payload) {
    const index = payload[0];
    const incomeData = payload[1];
    state.addressesData[index] = incomeData;
  },
  addAddress(state, payload) {
    state.addressesData.push(payload);
  },
  emptyDataEditAddress(state) {
    state.dataEditAddress = {};
  },
  fillDataEditAddress(state, payload) {
    state.dataEditAddress = payload;
  }
}
const actions = {
  btnDeleteAddress(context, payload) {
    let indexDelete = -1;
    context.getters.addressesData.map((content, index) => {
      if (content.id === payload.id) {
        indexDelete = index;
      }
    });
    context.commit('btnDeleteAddress', indexDelete);
  },
  editAddress(context, payload) {
    context.commit('editAddress', payload);
  },
  addAddress(context, payload) {
    context.commit('addAddress', payload);
  },
  emptyDataEditAddress(context) {
    context.commit('emptyDataEditAddress');
  },
  fillDataEditAddress(context, payload) {
    context.commit('fillDataEditAddress', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
