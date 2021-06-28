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
        'light-gray'
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
        'time'
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
  font-size: 16px;
  border-radius: 10px;

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
  width: 74px;
  height: 74px;
  @include display-flex();
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: $white;
}

/**********Circle**********/

/*Primary*/

.btn-circle.primary {
  width: 77px;
  height: 77px;
  background-color: $green;

  &:hover {
    box-shadow: inset 100px 100px 4px rgba(0, 0, 0, 0.25);
  }
  &.disabled {
    background-color: $light-gray;
    color: $color-gray;
  }
}

/*Secondary*/

.btn-circle.secondary {
  width: 74px;
  height: 74px;
  background-color: transparent;
  border: 3px solid $green;
  color: $green;

  &:hover {
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  &.disabled {
    color: $light-gray;
    border: 3px solid $light-gray;
  }
}

/****************Green******************/

/*Primary*/

.btn.green.primary {
  background-color: $green;
  color: white;
  border: none;

  &:hover {
    box-shadow: 3px 7px 11px -2px #00000040;
    mix-blend-mode: normal;
  }
  &.disabled {
    background: $color-gray !important;
  }
  &.disabled:hover {
    box-shadow: none !important;
    cursor: default !important;
  }
}

/*Secondary*/

.btn.green.secondary {
  background-color: transparent;
  color: $green;
  border: 2px solid $green;

  &:hover {
    border: 2px solid $green--answer;
    color: $green--answer;
  }
  &.disabled {
    color: $color-gray !important;
    border: 2px solid $color-gray !important;
  }
  &.disabled:hover {
    box-shadow: none !important;
    cursor: default !important;
  }
}

/*Subtle*/

.btn.green.subtle {
  background-color: transparent;
  color: $green;
  border: 2px solid #AAFFC6;

  &:hover {
    border: 2px solid $icon--green;
    color: $green--answer;
  }
  &.disabled {
    color: $color-gray !important;
    border: 2px solid #e0e0e0 !important;
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
    box-shadow: inset 100px 100px 0 rgba(0, 0, 0, 0.1);
    mix-blend-mode: normal;
  }
}

/*Secondary*/

.btn.yellow.secondary,
.btn.yellow.secondary-outline {
  background-color: transparent;
  color: $orange;
  border: 2px solid $orange-3;
}

.btn.yellow.secondary-outline:hover {
  background-color: $orange;
  border: 2px solid $orange;
  color: $white;
}

.btn.yellow.secondary:hover {
  border: 2px solid $orange;
  color: $orange-2;
}

.btn.yellow.secondary,
.btn.yellow.secondary-inline,
.btn.yellow.secondary-inline.no-hover:hover{
  background-color: $orange;
  color: $white;
  border: 2px solid $orange;
}

.btn.yellow.secondary-inline:hover {
  background-color: $white;
  border: 2px solid $orange;
  color: $orange;
}

/*Subtle*/

.btn.yellow.subtle {
  background-color: transparent;
  color: $orange;
  border: 2px solid $orange-4;
}

.btn.yellow.subtle:hover {
  color: $orange;
  border: 2px solid $orange-2;
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
  border: 2px solid $gray;
}


/*****************Light Gray****************/

.btn.light-gray {
  background-color: $light-gray;
  border: none;
}


/*************Light********************/
.btn.light {
  color: $color_discount;
  background: $border-gray-bg;
  border: none;

  &.time {
    color: $gray;
  }
}

/*************White********************/

.btn.white {
  background-color: $white;
  border: 2px solid $light-gray;
  color: $gray;
}
</style>
