<template>
  <button v-if="!link"
          :class="[{'disabled': disabled, 'block': block, 'no-box-shadow': noBoxShadow, 'no-hover': noHover, 'no-radius': noRadius},mode, baseColor, type, classes]"
          @click="buttonClicked"
          :style="{width: width, height: height}"
          :type="buttonType"
  >
    <slot></slot>
  </button>
  <nuxt-link v-else
             :to="to"
             :class="[{'disabled': disabled, 'block': block, 'no-box-shadow': noBoxShadow, 'no-radius': noRadius}, mode, baseColor, type, classes]"
             @click="buttonClicked"
             :style="{width: width, height: height}"
  >
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      require: false,
      default: false,
    },
    to: {
      type: String,
      require: false,
      default: "/",
    },
    baseColor: {
      type: String,
      require: false,
      default: "green",
      validator: (value) => [
        'green',
        'yellow',
        'white',
        'light',
        'gray',
        'light-gray',
        'red',
        'dark'
      ].includes(value.toLowerCase())
    },
    mode: {
      type: String,
      require: false,
      default: "primary",
      validator: (value) => [
        'primary',
        'secondary',
        'secondary-outline',
        'secondary-inline',
        'subtle',
        'text',
        'time',
        'product',
        'close',
        'stepper'
      ].includes(value.toLowerCase())
    },
    type: {
      type: String,
      require: false,
      default: "btn",
      validator: (value) => [
        'btn',
        'btn-circle'
      ].includes(value.toLowerCase())
    },
    disabled: {
      type: Boolean,
      require: false,
      default: false,
    },
    block: {
      type: Boolean,
      require: false,
      default: false,
    },
    noBoxShadow: {
      type: Boolean,
      require: false,
      default: false,
    },
    noHover: {
      type: Boolean,
      require: false,
      default: false
    },
    noRadius: {
      type: Boolean,
      require: false,
      default: false
    },
    width: {
      type: String,
      require: false,
      default: "",
    },
    height: {
      type: String,
      require: false,
      default: "",
    },
    classes: {
      type: String,
      require: false,
      default: "",
    },
    buttonType: {
      type: String,
      require: false,
      default: "button"
    }
  },
  methods: {
    buttonClicked() {
      this.$emit("button-clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.btn {
  @include display-flex();
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: toRem(16);
  border-radius: toRem(10);
  font-family: inherit;

  &.no-box-shadow:hover {
    box-shadow: none !important;
  }
  &.block {
    width: 100%;
  }
  &.no-radius {
    border-radius: 0!important;
  }
}
.btn-circle {
  border-radius: 100% !important;
  width: toRem(74);
  height: toRem(74);
  @include display-flex();
  align-items: center;
  justify-content: center;
  font-size: toRem(16);
  color: $white;
}

/**********Circle**********/

/*Primary*/

.btn-circle.primary {
  width: toRem(77);
  height: toRem(77);
  background-color: $green;

  &.disabled {
    background-color: $light-gray;
    color: $color-gray;
  }
}

/*Secondary*/

.btn-circle.secondary {
  width: toRem(74);
  height: toRem(74);
  background-color: transparent;
  border: toRem(3) solid $green;
  color: $green;

  &.disabled {
    color: $light-gray;
    border: toRem(3) solid $light-gray;
  }
}

/****************Green******************/

/*Primary*/

.btn.green.primary {
  background-color: $green;
  color: white;
  border: none;
  //transition: all 0.2s ease-out;

  &.disabled {
    background: $color-gray;
  }
  &:hover {
    box-shadow: toRem(3) toRem(7) toRem(11) toRem(-2) rgba(0, 0, 0, 0.25);
  }
  &:focus {
    box-shadow: 0 0 0 toRem(5) $green-6;

  }
}

/*Secondary*/

.btn.green.secondary {
  background-color: transparent;
  color: $green;
  border: toRem(2) solid $green;

  &:hover {
    border: toRem(2) solid $green--answer;
    color: $green--answer;
  }
  &.disabled {
    color: $color-gray;
    border: toRem(2) solid $color-gray;
  }
}

/*Subtle*/

.btn.green.subtle {
  background-color: transparent;
  color: $green;
  border: toRem(2) solid #AAFFC6;

  &:hover {
    border: toRem(2) solid $icon--green;
    color: $green--answer;
  }
  &.disabled {
    color: $color-gray !important;
    border: toRem(2) solid #e0e0e0 !important;
  }
}

/*Text*/


.btn.green.text {
  background-color: transparent;
  border: none;
  color: $green;

  &:hover {
    color: $green--answer;
  }
  &.disabled {
    color: $color-gray !important;
  }
  &.disabled:hover {
    cursor: default !important;
  }
}

/****************Yellow******************/


/*Primary*/

.btn.yellow.primary {
  background-color: $orange;
  color: white;
  border: none;

  &:hover {
    box-shadow: inset toRem(100) toRem(100) 0 rgba(0, 0, 0, 0.1);
    mix-blend-mode: normal;
  }
}

/*Secondary*/

.btn.yellow.secondary,
.btn.yellow.secondary-outline {
  background-color: transparent;
  color: $orange;
  border: toRem(2) solid $orange-3;
}

.btn.yellow.secondary:hover {
  border: toRem(2) solid $orange;
  color: $orange-2;
}

.btn.yellow.secondary,
.btn.yellow.secondary-inline,
.btn.yellow.secondary-inline.no-hover:hover{
  background-color: $orange;
  color: $white;
  border: toRem(2) solid $orange;
}

.btn.yellow.secondary-inline:hover {
  background-color: $white;
  border: toRem(2) solid $orange;
  color: $orange;
}

/*Subtle*/

.btn.yellow.subtle {
  background-color: transparent;
  color: $orange;
  border: toRem(2) solid $orange-4;
}

.btn.yellow.subtle:hover {
  color: $orange;
  border: toRem(2) solid $orange-2;
}

/*Text*/


.btn.yellow.text {
  background-color: transparent;
  border: none;
  color: $orange;
}

.btn.yellow.text:hover {
  color: $orange-2;
}

/****************Gray******************/

.btn.gray.secondary {
  color: $gray;
  border: toRem(2) solid $gray;
}


/*****************Light Gray****************/

.btn.light-gray {
  background-color: $gray-5;
  color: $gray-3;
  border: none;
}


/*************Light********************/
.btn.light {
  color: $color_discount;
  background: $gray-5;
  border: none;

  &.time {
    color: $gray;
  }
  &.stepper {
    color: $gray-2;
    &.disabled {
      background-color: $gray-6;
      color: $gray-4;
    }
  }
}

/*************White********************/

.btn.white {
  background-color: $white;
  border: toRem(2) solid $light-gray;
  color: $gray;
  &.product {
    border: toRem(1) solid $gray-5;
    color: $gray-3;
  }
  &.close {
    border: none;
    background-color: transparent;
    &::before {
      content: "\e807";
      @include font-icon__limoo();
      color: $gray;
    }
  }
}

/*************Red********************/

.btn.red {
  &.secondary-outline {
    border: toRem(1) solid $red-color;
    color: $red-color;
    background-color: transparent;
  }
}

/*************Red********************/

.btn.dark {
  &.primary {
    background-color: $gray-3;
    color: white;
    border: none;
  }
}
</style>
