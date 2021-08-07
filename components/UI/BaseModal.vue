<template>
  <div class="modal-container" :class="mode">
    <transition :name="'backdrop-'+mode">
      <div v-show="localShowModal && showBackDrop" @click="backdropClose" class="backdrop" :class="backdropClass"></div>
    </transition>
    <transition :name="mode">
      <dialog open v-show="localShowModal" :class="[{'open-modal': localShowModal},mode, modalClass]">
        <section class="h-100 w-100">
          <div class="phone-line-handler" v-show="mode === 'phone'" @click="closeModal">
            <span></span>
          </div>
          <slot></slot>
        </section>
      </dialog>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    showModal: {
      type: Boolean,
      require: false,
      default: true,
    },
    showBackDrop: {
      type: Boolean,
      require: false,
      default: true,
    },
    closable: {
      type: Boolean,
      require: false,
      default: true,
    },
    mode: {
      type: String,
      require: false,
      default: "delete",
    },
    modalClass: {
      type: String,
      require: false,
      default: "",
    },
    backdropClass: {
      type: String,
      require: false,
      default: "",
    },
    closableFromBackdrop: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  data() {
    return {
      localShowModal: false,
    };
  },
  methods: {
    backdropClose() {
      if (!this.closableFromBackdrop) {
        return;
      }
      this.localShowModal = false;
      this.$emit("close-from-backdrop");
    },
    closeModal() {
      this.localShowModal = false;
      this.$emit("phone-modal-closed");
    },
  },
  watch: {
    showModal(val) {
      this.localShowModal = val;
    },
    localShowModal(val) {
      const body = document.querySelector("body");
      if (val) {
        body.style.overflowY = "hidden";
      } else {
        body.style.overflowY = "";
      }
    }
  },
  mounted() {
    this.localShowModal = this.showModal;

  },

};
</script>

<style lang="scss" scoped>
.modal-container {
  height: 100%;
  width: 100%;
  @extend .centered;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1999;
  pointer-events: none;

  &.right-side {
    left: unset;
    right: 0;
  }

  &.phone {
    align-items: flex-end;
  }
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(196, 196, 196, 0.5);
    z-index: 2000;
    pointer-events: auto;
  }

  dialog {
    position: fixed;
    z-index: 2005;
    border-radius: toRem(12);
    border: none;
    padding: 0;
    overflow: hidden;
    background-color: white;
    @extend .centered;
    margin: 0 auto;
    pointer-events: auto;

    &.delete {
      //top: 38vh;
    }

    &.form,
    &.rate{
      //top: 50%;
      //transform: translateY(-50%);
    }
    &.full-screen {
      width: 100%;
      height: 100%;
      top: 0;
      border-radius: 0;
    }

    &.phone {
      width: 100%;
      //transform: translateY(-100%);
      //top: 100%;
      border-radius: toRem(30) toRem(30) 0 0;
      box-shadow: rgb(196, 196, 196, 0.7) 0 toRem(20) toRem(24);

      .phone-line-handler {
        @extend .justify-center;
        width: 100%;
        margin-top: toRem(21);

        span {
          //background: url("../../static/icons/line.svg") no-repeat;
          display: inline-block;
          width: toRem(31);
          height: toRem(3);
          background-color: $gray-3;
        }
      }
    }

  }

  @media (min-width: 576px) {
    dialog {
      &.delete {
        max-width: toRem(417);
        margin: 1.75rem auto;
      }
    }
  }

  /*Delete && Scale Modal && RightSide*/

  .delete-leave-to,
  .delete-enter,
  .scale-leave-to,
  .scale-enter,
  .right-side-enter,
  .right-side-leave-to {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  .delete-enter-active,
  .delete-leave-active,
  .scale-enter-active,
  .scale-leave-active,
  .right-side-enter-active,
  .right-side-leave-active {
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.17, 1.84);
  }

  /*Form*/

  .form-enter-active,
  .form-leave-active,
  .backdrop-form-enter-active,
  .backdrop-form-leave-active {
    transition: opacity 0.4s;
  }

  .form-leave-to,
  .backdrop-form-leave-to {
    opacity: 0;
  }

  /*Rate*/

  .rate-enter-active,
  .rate-leave-active,
  .full-screen-enter-active,
  .full-screen-leave-active{
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.17, 1.84);
  }

  .rate-leave-to,
  .rate-enter,
  .full-screen-leave-to,
  .full-screen-enter {
    opacity: 0;
    transform: scale(0.5);
  }

  /*BackDrops*/
  .backdrop-phone-enter,
  .backdrop-phone-leave-to,
  .backdrop-rate-enter,
  .backdrop-rate-leave-to,
  .backdrop-right-side-enter,
  .backdrop-right-side-leave-to {
    opacity: 0;
  }

  .backdrop-rate-enter-active,
  .backdrop-rate-leave-active,
  .backdrop-phone-enter-active,
  .backdrop-phone-leave-active,
  .backdrop-right-side-enter-active,
  .backdrop-right-side-leave-active {
    transition: opacity 0.4s linear;
  }

  .backdrop-phone-enter-to,
  .backdrop-phone-leave-from,
  .backdrop-rate-enter-to,
  .backdrop-rate-leave-from,
  .backdrop-right-side-enter-to,
  .backdrop-right-side-leave-from {
    opacity: 1;
  }

  /*Phone*/

  .phone-enter-active {
    animation: modalOpen 0.6s linear;
  }

  .phone-leave-active {
    animation: modalClose 0.6s linear;
  }


  @keyframes modalOpen {
    0% {
      transform: translateY(0);
      top: 100%;
    }
    100% {
      transform: translateY(-100%);
      top: 100%;
    }
  }
  @keyframes modalClose {
    0% {
      transform: translateY(-100%);
      top: 100%;
    }
    100% {
      transform: translateY(0);
      top: 100%;
    }
  }
}


</style>
