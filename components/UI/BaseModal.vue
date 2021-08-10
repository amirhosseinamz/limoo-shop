<template>
  <div class="modal-container" :class="mode">
    <transition :name="mode">
      <dialog open :class="[mode, modalClass]">
        <section class="h-100 w-100">
          <div class="phone-line-handler" v-show="mode === 'phone'" @click="closeModal('line')">
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
      //localShowModal: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    }
  },
  mounted() {
    const body = document.querySelector("body");
    body.style.overflowY = "hidden";
  },
  destroyed() {
    const body = document.querySelector("body");
    body.style.overflowY = "";
  }

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
  z-index: 2001;
  pointer-events: none;

  &.right-side {
    left: unset;
    right: 0;
  }

  &.phone {
    align-items: flex-end;
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

  .right-side-enter,
  .right-side-leave-to {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  .right-side-enter-active,
  .right-side-leave-active {
    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.17, 1.84);
  }


}


</style>
