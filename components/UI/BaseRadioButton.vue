<template>
  <div class="radio-button-wrapper" :class="{ 'button': button }" @click.self="buttonClicked($event, 'button')">
    <label class="container">
      <input ref="radioInput" class="base-radio-inputs" @change="valueChanged" type="radio" :name="name" v-model="values" :value="value" :checked="checked">
      <span class="mark" :class="{ 'scale': scale }"></span>
    </label>
    <span v-if="title" class="title" :class="titleClass" @click.self="buttonClicked($event, 'span')">
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  name: "BaseRadioButton",
  props: {
    name: {
      type: String,
      require: true,
    },
    value: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: false,
    },
    checked: {
      type: Boolean,
      require: false
    },
    button: {
      type: Boolean,
      require: false,
      default: false
    },
    selected: {
      type: String,
      require: false,
      default: ''
    },
    titleClass: {
      type: String,
      require: false,
      default: ''
    },
    scale: {
      type: Boolean,
      require: false,
      default: false
    },
    borderActive: {
      type: Boolean,
      require: false,
      default: true
    }
  },
  data() {
    return {
      values: ''
    };
  },
  mounted() {
    if (this.selected) {
      this.values = this.selected
      this.valueChanged()
    }
  },
  methods: {
    valueChanged() {
      if (this.button && this.borderActive) {
        const inputs = document.querySelectorAll('.base-radio-inputs')
        const selectedWrapper = document.querySelector('input:checked').parentElement.parentElement
        //remove active border from other inputs
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].parentElement.parentElement.classList.remove('active')
        }
        //add active border to selected input
        selectedWrapper.classList.add('active')
      }
      this.$emit("value-changed");
    },
    buttonClicked (e, tag) {
      if (this.button) {
        if (tag === 'button') {
          //if user clicked on button
          console.log(e.currentTarget.querySelector('.base-radio-inputs'));
          this.values = e.currentTarget.querySelector('.base-radio-inputs').value
          e.currentTarget.querySelector('.base-radio-inputs').checked = true
        } else if (tag === 'span') {
          // if user clicked on text of button
          this.values = e.currentTarget.parentElement.querySelector('.base-radio-inputs').value
          e.currentTarget.parentElement.querySelector('.base-radio-inputs').checked = true
        }

        this.valueChanged()
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.radio-button-wrapper {
  display: flex;
  align-items: center;
  &.button {
    display: inline-flex;
    border: toRem(1) solid $gray-4;
    border-radius: toRem(15);
    min-width: toRem(163);
    height: toRem(52);
    padding-right: toRem(16);

    &.active {
      border: toRem(1) solid $orange;
    }
  }
  .container {
    position: relative;
    width: toRem(18);
    height: toRem(18);
    background-color: $white;
    box-shadow: inset 0 0 0 toRem(5) $gray-5;
    display: inline-flex;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    white-space: nowrap;

    input {
      position: absolute;
      width: 0;
      height: 0;
      top: 0;
      right: 0;
      opacity: 0;

      &:checked {
        & ~ .mark {
          box-shadow: inset 0 0 0 toRem(5) $orange;
          background-color: $white;
          &.scale {
            transform: scale(1.1);
          }
        }
      }
    }

    .mark {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      border-radius: 50%;
    }
  }

  .title {
    margin-right: toRem(5);
  }
}
</style>
