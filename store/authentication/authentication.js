import axios from "axios";

const state = () => ({
  activationCode: "",
  userPhoneNumber: "",
  activationCodeIsValid: null,
  showWellcomeModal: false,
  errorMessage: "",
});
const getters = {
  activationCode(state) {
    return state.activationCode;
  },
  userPhoneNumber(state) {
    return state.userPhoneNumber;
  },
  activationCodeIsValid(state) {
    return state.activationCodeIsValid;
  },
  showWellcomeModal(state) {
    return state.showWellcomeModal;
  },
  errorMessage(state) {
    return state.errorMessage;
  }
};
const mutations = {
  signIn(state, payload) {
    state.activationCode = payload.activationCode;
    state.userPhoneNumber = payload.userPhoneNumber;
  },
  activationCodeValidation(state, payload) {
    state.activationCodeIsValid = payload;
  },
  setToken(state, payload) {
    state.token = payload;
  },
  toggleWellcomeModal(state, payload) {
    state.showWellcomeModal = payload;
  },
  setError(state, payload) {
    state.errorMessage = payload.error;
  },
  clearError(state) {
    state.errorMessage = "";
  }
};
const actions = {
  async signIn(context, payload) {
    const response = await this.$api.apiCall.post(
      process.env.BASE_URL + "unison/auth/signin",
      {
        engine: (url, option) =>
          axios.post(url, option.body, { headers: option.headers }),
        body: {
          phone: payload.phone,
        },
        disableToken: true,
        method: "POST",
      },
    );
    if (response) {
      console.log(response.data);
      if (response.data.response_code === 2208) {
        const mutationPayload = {
          activationCode: response.data.activation_code,
          userPhoneNumber: payload.phone,
        };
        context.commit("signIn", mutationPayload);
        if (payload.from !== "modal") {
          await this.$router.push("/users/register/confirm");
        }
        return response.data;

      } else {
        return response.data.response_message;
      }
    }
  },
  async confirmCode(context, payload) {
    const enteredActivationCode = payload.activationCode;
    const response = await this.$api.apiCall.post(
      process.env.BASE_URL + "unison/auth/signin/otp",
      {
        engine: (url, option) =>
          axios.post(url, option.body, { headers: option.headers }),
        body: {
          phone: context.getters.userPhoneNumber,
          activation_code: parseInt(enteredActivationCode),
        },
        disableToken: true,
        method: "POST",
      },
    );

    if (response) {
      console.log(response.data);
      if (response.data.response_code === 1) {
        localStorage.setItem("token", response.data.token);
        if (payload.from !== "modal") {
          let _temp = sessionStorage.getItem("previousRoute");
          if (_temp) {
            await this.$router.replace(_temp);
          } else {
            await this.$router.replace("/");
            context.commit("toggleWellcomeModal", true);
          }
        } else {
          await this.$router.replace('/profile');
        }

        sessionStorage.removeItem("previousRoute");

      } else {
        context.commit('setError', {
          error: response.data.response_message,
        })
      }
    }

  },
  async signOut(context) {
    await this.$api.apiCall.delete(process.env.BASE_URL + "unison/auth/signout", {
      engine: (url, option) => axios.delete(url, { headers: option.headers }),
      method: "DELETE",
      disableToken: false,
    });

    localStorage.removeItem("token");
    //this.$router.replace('/');
  },
  toggleWellcomeModal(context, payload) {
    context.commit("toggleWellcomeModal", payload);
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
