const state = () => ({
  ticketsData: [
    {
      id: 1,
      ticketTitle: "ثبت نشدن عکس پروفایل",
      state: "acceptting",
      question:
        "متاسفانه پس از بارها تلاش کردن موفق به ثبت عکس پروفایل کاربری در سایت لیمو نشدم لطفا راهنمایی بفرمایید.",
      answer: "",
      QA: [{ id: 1 }, { id: 2 }],
    },
    {
      id: 2,
      ticketTitle: "ثبت نشدن ایمیل کاربری من",
      state: "accepted",
      question:
        "متاسفانه پس از بارها تلاش کردن موفق به ثبت ایمیل کاربری در سایت لیمو نشدم لطفا راهنمایی بفرمایید.",
      answer:
        " با سلام کاربر گرامی تیکت شما را بررسی کردیم و نتیجه به این شرح است.",
    },
  ],
  formData: {
    ticketTitle: "",
    question: "",
  },

})
const getters = {
  ticketsData (state) {
    return state.ticketsData
  },
  formData (state) {
    return state.formData
  },
}
const mutations = {
  btnDeleteProduct(state, payload) {
    state.ticketsData.splice(payload, 1);
  },
  editTicket(state, payload) {
    state.ticketsData[payload.index] = payload.data;
  },
  addTicket(state, payload) {
    state.ticketsData.push(payload);
  }
}
const actions = {
  btnDeleteProduct(context, payload) {
    let indexDelete = -1;

    context.getters.ticketsData.map((content, index) => {
      if (content.id === payload.id) {
        indexDelete = index;
      }
    });
    context.commit('btnDeleteProduct', indexDelete);
  },
  editTicket(context, payload) {
    context.getters.ticketsData.map((content, i) => {
      if (content.id === payload.id) {
        context.commit('editTicket', { index: i, data: payload });
      }
    });
  },
  addTicket(context, payload) {
    context.commit('addTicket', payload);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
