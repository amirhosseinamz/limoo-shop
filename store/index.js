/* if we returned an object instead of the function then all users of our app would actually
  get the same instance because on the server in node where does runs. if we have plain object
  stored well then we always get that object for every connected user. if we have a function
  that returns and you store as this does then every new user recives his owen store*/
import addCommaPrice from "~/modules/addCamaPrice.js";
export const state = () => ({
  signUp: "stepOne",
  signIn: "stepOne",
  phone: "",
  // password: "",
  userAuth: true,
  showModalWellcome: false,
  language: "",
  isShowSnackbar: false,
});

export const getters = {
  signUpPicker(state) {
    return state.signUp;
  },
  signInPicker(state) {
    return state.signIn;
  },
  PhoneNumberPicker(state) {
    return state.phone;
  },
  CurentRoute(state) {
    return state.CurentRoute;
  },
  stateShowModalWellcome(state) {
    return state.showModalWellcome;
  },
  userIsAuth(state) {
    return state.userAuth;
  },
  snackbarData(state) {
    return state.snackbarData;
  },
  isShowSnackbar(state) {
    return state.isShowSnackbar;
  }

};

export const mutations = {
  walkInSignUpcomponents(state, payload) {
    state.signUp = payload.value;
  },
  walkInSignIncomponents(state, payload) {
    state.signIn = payload.value;
  },
  PhoneNumber(state, inputPhone) {
    state.phone = inputPhone.value;
  },
  passHolder(state) {
    return state.password;
  },
  userIsAuth(state, payload) {
    state.userAuth = payload.value;
  },
  stateShowModalWellcome(state, payload) {
    state.showModalWellcome = payload.value;
    // console.log("showModalWellcome in store is", payload.value);
  },
  currentLanguage(state, payload) {
    state.language = payload;
  },

};
export const actions = {
  userIsAuth(context, payload) {
    context.commit("userIsAuth", payload);
  },
  stateShowModalWellcome(context, payload) {
    context.commit("stateShowModalWellcome", payload);
  },


};
