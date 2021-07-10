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
  currentProduct: {},

})
const getters = {
  ticketsData (state) {
    return state.ticketsData
  },
  formData (state) {
    return state.formData
  },
  currentProduct (state) {
    return state.currentProduct
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
