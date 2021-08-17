const state = () => ({
  commentsData: [
    {
      id: 1,
      commentTitle: "این سری از اپل واچ از سری قبلش خیلی بهتر شده!",
      state: "accepted",
      idea: "good",
      productTitle: "اپل واچ سری 6 آتومینیوم آبی بند اسپرت سیلیکون آبی1",
      img: "/img/apple-watch-1.png",
      description:
        "این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت، حتما این کالارو خریداری کنید! این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت حتما این کالا رو خریداری کنید.",
      commentTime: "1 ساعت پیش",
      rate: 4.5,
    },
    {
      id: 2,
      commentTitle: "واقعا نمیدونم چرا ایده جدید ندارن روی این محصول!",
      state: "accepted",
      idea: "bad",
      productTitle: "اپل واچ سری 6 آتومینیوم آبی بند اسپرت سیلیکون آبی2",
      img: "/img/apple-watch-2.png",
      description:
        "این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت، حتما این کالارو خریداری کنید! این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت حتما این کالا رو خریداری کنید.",
      commentTime: "1 روز پیش",
      rate: 3.6,
    }
  ],
})
const getters = {
  commentsData(state) {
    return state.commentsData;
  }
}
const mutations = {
  btnDeleteComment(state, payload) {
    state.commentsData.splice(payload, 1);
  },
  showMoreDescription(state, payload) {
    payload.selected = !payload.selected;
  }
}
const actions = {
  btnDeleteComment(context, payload) {
    let indexDelete = -1;

    context.getters.commentsData.map((content, index) => {
      if (content.id === payload.id) {
        indexDelete = index;
      }
    });

    context.commit('btnDeleteComment', indexDelete);
  },
  showMoreDescription(context, payload) {
    context.getters.commentsData.map((content) => {
      if (content.id === payload.id) {
        context.commit('showMoreDescription', content);
      }
    });
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
