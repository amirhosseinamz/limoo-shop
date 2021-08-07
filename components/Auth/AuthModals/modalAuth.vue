<template>
  <base-modal
    class="modal-container"
    modal-class="modal p-profile-favorite-modal"
    :show-modal="show"
    mode="scale"
  >
    <modalSignUpStepOne
      @btn-close-modal="modalClose"
      @btn-go-to-signup-step-two="gotoSignUpStepTwo"
      @btn-go-to-signin-step-one="gotoSignInStepone"
      v-if="SignUpStepOne"
    />
    <modalSignUpStepTwo
      @btn-go-back-signup-step-one="gotoSignUpStepOne"
      @event-show-modal-wellcome="showWellcomeModal"
      v-else-if="SignUpStepTwo"
    />
    <modalSignInStepOne
      @btn-go-back-signup-step-one="gotoSignUpStepOne"
      @btn-go-to-signin-step-two="gotoSignInSteptwo"
      @btn-go-to-recycle-pass="goToRecyclePass"
      v-else-if="SignInStepone"
    />
    <modalSignInStepTwo
      @btn-go-back-signin-step-one="gotoSignInStepone"
      v-else-if="SignInSteptwo"
    />
    <modalRecyclePass
      @btn-go-back-signin-step-one="gotoSignInStepone"
      @btn-go-back-recycle-pass-step-two="goToRecyclePassStepTwo"
      v-else-if="RecyclePass"
    />
    <modalRecyclePassStepTwo
      @btn-go-back-recycle-pass="goToRecyclePass"
      @btn-go-to-pass-change="goToPassChange"
      v-else-if="RecyclePassStepTwo"
    />
    <modalPassChange
      @btn-go-back-recycle-pass-step-two="goToRecyclePassStepTwo"
      v-else-if="PassChange"
    />
    <!--  -->
  </base-modal>
</template>

<script>
import modalSignUpStepOne from "~/components/Auth/AuthModals/modalSignUpStepOne";
import modalSignUpStepTwo from "~/components/Auth/AuthModals/modalSignUpStepTwo";
import modalSignInStepOne from "~/components/Auth/AuthModals/modalSignInStepOne";
import modalSignInStepTwo from "~/components/Auth/AuthModals/modalSignInStepTwo";
import modalRecyclePass from "~/components/Auth/AuthModals/modalRecyclePass";
import modalRecyclePassStepTwo from "~/components/Auth/AuthModals/modalRecyclePassSteptwo";
import modalPassChange from "~/components/Auth/AuthModals/modalPassChange";
export default {
  props: {
    active: { type: [Boolean, Number], default: false },
  },
  data() {
    return {
      SignUpStepOne: true,
      SignUpStepTwo: false,
      SignInStepone: false,
      SignInSteptwo: false,
      RecyclePass: false,
      RecyclePassStepTwo: false,
      PassChange: false,
    };
  },
  components: {
    modalSignUpStepOne,
    modalSignUpStepTwo,
    modalSignInStepOne,
    modalSignInStepTwo,
    modalRecyclePass,
    modalRecyclePassStepTwo,
    modalPassChange,
  },

  computed: {
    show: {
      set(val) {
        this.$emit("update:active", !!val);
      },
      get() {
        return !!this.active;
      },
    },
  },

  mounted() {},

  methods: {
    modalClose() {
      this.show = false;
    },
    showWellcomeModal() {
      this.$emit("event-show-modal-wellcome");
      this.gotoSignUpStepOne();
    },
    gotoSignUpStepTwo() {
      this.SignUpStepOne = false;
      this.SignUpStepTwo = true;
    },
    gotoSignUpStepOne() {
      this.SignUpStepOne = true;
      this.SignUpStepTwo = false;
      this.SignInStepone = false;
    },
    gotoSignInStepone() {
      this.SignUpStepOne = false;
      this.SignInSteptwo = false;
      this.RecyclePass = false;
      this.SignInStepone = true;
    },
    gotoSignInSteptwo() {
      this.SignInStepone = false;
      this.SignInSteptwo = true;
    },

    goToRecyclePass() {
      this.SignInStepone = false;
      this.RecyclePassStepTwo = false;
      this.RecyclePass = true;
    },

    goToRecyclePassStepTwo() {
      this.RecyclePass = false;
      this.PassChange = false;
      this.RecyclePassStepTwo = true;
    },
    goToPassChange() {
      this.RecyclePassStepTwo = false;
      this.PassChange = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-body {
  position: relative;
  padding: 0 !important;
  font-size: 12px;
}

@media (max-width: 768px) {
}

@media (max-width: 460px) {
}
</style>
