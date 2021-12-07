const state = () => ({
  ordersData: [
    {
      id: 1,
      title:
        "اپل واچ سری 1 آلومینیوم آبی با بند اسپرت سیلیکون آبی",
      img: "/img/apple-watch-1.png",
      orderPrice: "113،000،000",
      orderPriceOff: "223،000",
      count: 2
    },
    {
      id: 2,
      title:
        "اپل واچ سری 2 آلومینیوم قرمز با بند اسپرت سیلیکون قرمز",
      img: "/img/apple-watch-2.png",
      orderPrice: "143،000،000",
      orderPriceOff: "123،000",
      count: 1
    },
    {
      id: 3,
      title:
        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
      img: "/img/apple-watch-3.png",
      orderPrice: "103،000،000",
      orderPriceOff: "323،000",
      count: 1
    },
    {
      id: 4,
      title:
        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
      img: "/img/apple-watch-3.png",
      orderPrice: "103،000،000",
      orderPriceOff: "323،000",
      count: 1
    },
    {
      id: 5,
      title:
        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
      img: "/img/apple-watch-3.png",
      orderPrice: "103،000،000",
      orderPriceOff: "323،000",
      count: 1
    },
    {
      id: 6,
      title:
        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
      img: "/img/apple-watch-3.png",
      orderPrice: "103،000،000",
      orderPriceOff: "323،000",
      count: 1
    },
    {
      id: 7,
      title:
        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
      img: "/img/apple-watch-3.png",
      orderPrice: "103،000،000",
      orderPriceOff: "323،000",
      count: 1
    },
    {
      id: 8,
      title:
        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
      img: "/img/apple-watch-3.png",
      orderPrice: "103،000،000",
      orderPriceOff: "323،000",
      count: 1
    },
    {
      id: 9,
      title:
        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
      img: "/img/apple-watch-3.png",
      orderPrice: "103،000،000",
      orderPriceOff: "323،000",
      count: 1
    },
    {
      id: 10,
      title:
        "اپل واچ سری 3 آلومینیوم زرد با بند اسپرت سیلیکون زرد",
      img: "/img/apple-watch-3.png",
      orderPrice: "103،000،000",
      orderPriceOff: "323،000",
      count: 1
    },
  ],
  detailPrice          : {
    price               : 12000,
    totalDiscount       : 142250,
    submitDeliveryPrice : 'رایگان',
    totalPrice          : 2587000,
  }
})
const getters = {
  ordersData(state) {
    return state.ordersData;
  },
  detailPrice(state) {
    return state.detailPrice;
  }
}
const mutations = {
  btnDeleteOrder(state, payload) {
    state.ordersData.splice(payload, 1);
  },
  addOrderToCard(state, payload) {
    let item = state.ordersData.find(item => item.id === payload);
    item.count++;
    console.log(item.count);
  },
  minusOrderFromCard(state, payload) {
    let item = state.ordersData.find(item => item.id === payload);
    item.count--;
    console.log(item.count);
  },
  updateDetailPrice(state, payload) {
    state.detailPrice = payload;
  }
}
const actions = {
  btnDeleteOrder(context, payload) {
    let indexDeleteOrderData = -1;

    context.getters.ordersData.map((content, index) => {
      if (content.id === payload.id) {
        indexDeleteOrderData = index;
      }
    });
    context.commit('btnDeleteOrder', indexDeleteOrderData);
  },
  addOrderToCard(context, payload) {
    context.getters.ordersData.map(content => {
      if (content.id === payload.id) {
        context.commit('addOrderToCard', content.id);
      }
    });
  },
  minusOrderFromCard(context, payload) {
    context.getters.ordersData.map(content => {
      if (content.id === payload.id) {
        context.commit('minusOrderFromCard', content.id);
      }
    });
  },
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
