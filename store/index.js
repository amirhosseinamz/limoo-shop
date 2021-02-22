import Vuex from "vuex";
// import { createStore } from "./../.nuxt/store";
// import { createStore } from "vuex";
import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";
import category from "./modules/category/index.js";




//it should be callable by nuxt which will be executed on the server to setup the store
const createStore = () => {
    /* if we returned an object instead of the function then all users of our app would actually
  get the same instance because on the server in node where does runs. if we have plain object
  stored well then we always get that object for every connected user. if we have a function
  that returns and you store as this does then every new user recives his owen store*/
    return new Vuex.Store({
        // namespaced: true, // tell vuex now the entire module shuld be kind of deatached from the rest of the store
        state: {
            signUp: "stepOne",
            signIn: "stepOne",
            phone: "",
            password: "",
            userAuth: false,
            showModalWellcome: false
        },

        mutations: rootMutations,
        actions: rootActions,
        getters: rootGetters,
        modules : {
          category,
        }
    });
};
export default createStore;
