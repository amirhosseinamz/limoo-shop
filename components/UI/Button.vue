<template>
  <button @click="btnClick" class="button" type="button">
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
  name: "Buttons",
  props: {
    text: { type: [String], default: "" },
    iconAddress: { type: [String], default: "" },
    showInsideIconButtonText: { type: [Boolean], default: false },
    classNameTextButton: { type: [String], default: "" },
    classNameIconButton: { type: [String], default: "" },
    showLoading: { type: [Boolean], default: false },
  },

  methods: {
    btnClick() {
      this.$emit("btn-click");
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
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
