const state = () => ({
  detailPrice  : {
    price               : 12000,
    totalDiscount       : 142250,
    submitDeliveryPrice : 'رایگان',
    totalPrice          : 2587000,
  },
  paymentGateway : [
    {
      id    : 1,
      title : 'آسان پرداخت',
      value: 'asanPardakht'
    },
    {
      id    : 2,
      title : 'کیف پول دایور',
      value: 'diver'
    },
    {
      id    : 3,
      title : 'بانک ملت',
      value: 'mellat'
    },
  ],
})
const getters = {
  detailPrice(state) {
    return state.detailPrice;
  },
  paymentGateway(state) {
    return state.paymentGateway;
  }
}
const mutations = {
  updateDetailPrice(state, payload) {
    state.detailPrice = payload;
  }
}
const actions = {
  updateDetailPrice(context, payload) {
    context.commit('updateDetailPrice', payload);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
