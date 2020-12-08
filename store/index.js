import Vuex from "vuex";
// import { createStore } from "./../.nuxt/store";
// import { createStore } from "vuex";

//it should be callable by nuxt which will be executed on the server to setup the store
const createStore = () => {
  /* if we returned an object instead of the function then all users of our app would actually 
  get the same instance because on the server in node where does runs. if we have plain object
  stored well then we always get that object for every connected user. if we have a function 
  that returns and you store as this does then every new user recives his owen store*/
  return new Vuex.Store({
    state: {
      signUp: "StepOne",
      phone: "09140121023"
    },
    mutations: {
      walkInSignUpcomponents(state, payload) {
        state.signUp = payload.value;
      },
      PhoneNumber(state, inputPhone) {
        state.phone = inputPhone.value;
      }
    },
    actions: {
      // in actions we commit with mutations
    },
    getters: {
      signUpPicker(state) {
        return state.signUp;
      },
      PhoneNumberPicker(state) {
        return state.phone;
      }
    }
  });
};
export default createStore;
