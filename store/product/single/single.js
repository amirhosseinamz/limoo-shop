import { getTextByTextKey } from "../../../modules/splitPartJsonResource";

const state = () => ({
  radioBtnData: [
    {
      id: 1,
      title: "پیشنهاد می کنم",
      checked: true,
      value: 1,
    },
    {
      id: 2,
      title: "پیشنهاد نمی کنم",
      checked: false,
      value: 2,
    },
    {
      id: 3,
      title: "نظری ندارم",
      checked: false,
      value: 3,
    },
  ],
  closeModalAddComment: 0,
})
const getters = {
  radioBtnData (state) {
    return state.radioBtnData
  },
  closeModalAddComment(state) {
    return state.closeModalAddComment
  }
}
const mutations = {
  increaseCloseModalAddComment (state) {
    state.closeModalAddComment++
  }
}
const actions = {
  increaseCloseModalAddComment (context) {
    context.commit('increaseCloseModalAddComment')
  },
  changeRadioBtnData (context, payload) {
    const theItem = context.getters.radioBtnData
    if (theItem.id === 1) {
      theItem.title = getTextByTextKey("product_customer_feedback")
      theItem.mobileTitle = getTextByTextKey("product_comment_mobile_title")
    } else if (theItem.id === 2) {
      theItem.title = getTextByTextKey("product_question_answer")
      theItem.mobileTitle = getTextByTextKey("product_question_answer")
    }

  },
  changeRadioBtnDataActivation (context, payload) {
    const theItem = context.getters.radioBtnData.find(item => item.id === payload)
    theItem.checked = !!theItem;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
