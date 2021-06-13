<template>
  <button
    :id="sizeButton"
    :class="stateValue"
    @click="btnClick"
    class="button"
    type="button"
  >
    <img
      v-if="showInsideIconButtonText"
      :class="classNameIconButton"
      class="button__icon"
      :src="iconAddress"
      alt=""
    />
    <h3 :class="classNameTextButton" class="button__text">
      {{ text }}
    </h3>
    <div v-if="showLoading" class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: { type: [String], default: "" },
    iconAddress: { type: [String], default: "" },
    showInsideIconButtonText: { type: [Boolean], default: false },
    classNameTextButton: { type: [String], default: "" },
    classNameIconButton: { type: [String], default: "" },
    showLoading: { type: [Boolean], default: false },
    size: { type: [String], default: "small" },
    state: { type: [String], default: "primary" },
  },

  data() {
    return {
      sizeButton: "",
      stateValue: "",
    };
  },

  created() {
    this.checkState();
  },

  methods: {
    btnClick() {
      this.$emit("btn-click");
    },

    checkSize(state) {
      switch (this.size) {
        case "small":
          this.sizeButton = `button__small--${state}`;
          break;

        case "larg":
          this.sizeButton = `button__larg--${state}`;
          break;

        case "medium":
          this.sizeButton = `medium__primary--${state}`;
          break;

        default:
          break;
      }
    },

    checkState() {
      switch (this.state) {
        case "primary":
          this.stateValue = "state--primary";
          this.checkSize("primary");
          break;

        case "secondary":
          this.stateValue = "state-secondary";
          this.checkSize("secondary");
          break;

        case "stroke":
          this.stateValue = "state--stroke";
          this.checkSize("stroke");
          break;

        case "other":
          this.stateValue = "state--other";
          this.checkSize("other");
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  margin-left: 21px;
  background: $btn__green;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 20px;
  padding-left: 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-family: inherit;
  width: 207px;
  height: 47px;
  @include display-flex();
  align-items: center;
  cursor: pointer;
  justify-content: center;
}
.button__text {
  font-size: 16px;
  color: $white;
  font-weight: 400;
  font-family: inherit;
  margin-right: 10px;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 27px;
  height: 27px;
  margin-right: auto;
  margin-left: auto;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 27px;
  height: 27px;
  margin: 0;
  border: 3px solid #fff;
  border-radius: 100%;
  -webkit-animation: lds-ring-data-v-ad283bfc 1.2s cubic-bezier(0.5, 0, 0.5, 1)
    infinite;
  animation: lds-ring-data-v-ad283bfc 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

// state primary//
#button__larg--primary {
  width: 463px;
  height: 58px;
  background: $yellow;
}
#button__medium--primary {
  width: 130px;
  height: 52px;
  background: $yellow;
}
#button__small--primary {
  width: 130px;
  height: 47px;
  background: $yellow;
}

// state secondary//
#button__medium--secondary {
  width: 270px;
  height: 57px;
  background: $btn__green;
}
#button__larg--secondary {
  width: 395px;
  height: 57px;
  background: $btn__green;
}

// primary
// secondary
// stroke
// other

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
