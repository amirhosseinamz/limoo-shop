<template>
  <div class="accordion-radio-button-wrapper" @click.self="buttonClicked($event, 'button')">
    <div class="" @click.self="buttonClicked($event, 'button')" :class="radioClass+ ' accordion-display'">
      <label class="container">
        <input ref="radioInput" class="accordion-radio-inputs" @change="valueChanged" type="radio" :name="name"
               v-model="values" :value="value" :checked="checked">
        <span class="mark-accordion"></span>
      </label>
      <span v-if="text" class="text" :class="textClass" @click.self="buttonClicked($event, 'span')">
      {{ text }}
    </span>
    </div>
    <div class="accordion-description" :class="descriptionClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseAccordion",
  props: {
    name: {
      type: String,
      require: true,
    },
    value: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: false,
    },
    checked: {
      type: Boolean,
      require: false,
    },
    selected: {
      type: String,
      require: false,
      default: "",
    },
    textClass: {
      type: String,
      require: false,
      default: "",
    },
    borderActive: {
      type: Boolean,
      require: false,
      default: true,
    },
    radioClass: {
      type: String,
      require: false,
      default: ""
    },
    descriptionClass: {
      type: String,
      require: false,
      default: ""
    }

  },
  data() {
    return {
      values: "",
    };
  },
  mounted() {
    if (this.selected) {
      this.values = this.selected;
      this.valueChanged();
    }
    this.showDescription();

  },
  methods: {
    valueChanged() {
      const inputs = document.querySelectorAll(".accordion-radio-inputs");
      if (this.borderActive) {
        const selectedWrapper = document.querySelector("input:checked").parentElement.parentElement.parentElement;
        //remove active border from other inputs
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].parentElement.parentElement.parentElement.classList.remove("active");
        }
        //add active border to selected input
        selectedWrapper.classList.add("active");
      }
      this.showDescription();
      this.$emit("value-changed");
    },
    showDescription() {
      const inputs = document.querySelectorAll(".accordion-radio-inputs");
      const descriptions = document.querySelectorAll(".accordion-description");
      let selectedInput;
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === this.values) {
          selectedInput = inputs[i];
        }
      }
      for (let y = 0; y < descriptions.length; y++) {
        descriptions[y].classList.remove("display-block");
      }
      const theDescription = selectedInput.parentElement.parentElement.parentElement.querySelector(".accordion-description");
      theDescription.classList.add("display-block");
    },
    buttonClicked(e, tag) {
      if (tag === "button") {
        //if user clicked on button
        const theInput = e.currentTarget.querySelector(".accordion-radio-inputs")
        this.values = theInput.value;
        theInput.checked = true;
      } else if (tag === "span") {
        // if user clicked on text of button
        const theInput = e.currentTarget.parentElement.parentElement.querySelector(".accordion-radio-inputs")
        this.values = theInput.value;
        theInput.checked = true;
      }
      this.valueChanged();
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion-radio-button-wrapper {
  border: toRem(1) solid $gray-5;
  border-radius: toRem(10);
  min-width: toRem(163);
  padding: 1.2rem 1.2rem;
  margin-top: toRem(10);
  display: flex;
  flex-flow: column;

  .accordion-display {
    align-items: center;
    @include display-flex();
  }
  &.active {
    border: toRem(1) solid $orange;
  }

  .container {
    position: relative;
    width: toRem(18);
    min-width: toRem(18);
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
        & ~ .mark-accordion {
          box-shadow: inset 0 0 0 toRem(5) $orange;
          background-color: $white;
        }
      }
    }

    .mark-accordion {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      border-radius: 50%;
    }
  }

  .text {
    margin-right: toRem(5);
  }

  .accordion-description {
    display: none;
  }

  .display-block {
    display: block;
  }
}
</style>
