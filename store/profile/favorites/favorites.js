const state = () => ({
  favoriteData: [
    {
      id: 1,
      title: "Fake",
      img: "../img/phone.jpg",
    },
    {
      id: 2,
      title: "Fake",
      img: "../img/phoneApple.jpg",
    },
    {
      id: 3,
      title: "Fake",
      img:
        "../img/apple-watch-series-6-blue-aluminium-case-with-deep-navy-sport-band-16.jpg",
    },
    {
      id: 4,
      title: "Fake",
      img: "/img/apple-watch-5.png",
    },
    {
      id: 5,
      title: "Fake",
      img: "/img/apple-watch-1.png",
    },
    {
      id: 6,
      title: "Fake",
      img: "/img/apple-watch-3.png",
    },
    {
      id: 7,
      title: "Fake",
      img: "/img/apple-watch-5.png",
    },
  ],
})
const getters = {
  favoriteData(state) {
    return state.favoriteData;
  }
}
const mutations = {
  btnDeleteFavorite(state, payload) {
    state.favoriteData.splice(payload, 1);
  }
}
const actions = {
  btnDeleteFavorite(context, payload) {
    let indexDeleteFavoriteData = -1;

    context.getters.favoriteData.map((content, index) => {
      if (content.id === payload.id) {
        indexDeleteFavoriteData = index;
      }
    });

    context.commit('btnDeleteFavorite', indexDeleteFavoriteData);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
