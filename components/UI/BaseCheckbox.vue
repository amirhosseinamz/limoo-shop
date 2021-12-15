<template>
  <div class="checkbox-wrapper" :class="`${mode} ${active ? 'active' : ''}`">
    <label class="container" :class="mode">
      <input @change="valueChanged" type="checkbox" :name="name" v-model="checked" :value="val">
      <span class="checkmark"></span>
    </label>
    <span v-if="title" class="title">
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: {
    name: {
      type: String,
      require: true
    },
    val: {
      type: String,
      require: true
    },
    mode: {
      type: String,
      require: false,
      default: ""
    },
    title: {
      type: String,
      require: false,
      default: ""
    },
    value: {
      type: [String, Array],
      require: false,
      default: ""
    },
    active:{
      type: Boolean,
      require: false,
      default:false
    }
  },
  data() {
    return {
      checkedProxy: false,
      isActive: false,
    };
  },
  methods: {
    valueChanged(e) {
      this.getActiveInput(e);
      this.$emit('input', this.checkedProxy)
    },
    getActiveInput(e) {
        this.isActive = e.target.checked;
    }
  },
  computed: {
    checked: {
      get () {
        return this.value
      },
      set (val) {
        this.checkedProxy = val
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.checkbox-wrapper {
  @extend .centered;
  .container {
    position: relative;
    width: toRem(32);
    height: toRem(32);
    background-color: $gray-5;
    display: inline-block;
    border-radius: 50%;
    cursor: pointer;


    input {
      position: absolute;
      width: 0;
      height: 0;
      top: 0;
      right: 0;
      opacity: 0;
      &:checked {
        & ~ .checkmark {
          box-shadow: inset 0 0 0 toRem(8) $orange;
          background-color: $white;
        }
      }
    }

    .checkmark {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      border-radius: 50%;
    }
    &.square {
      width: toRem(18);
      height: toRem(18);
      border-radius: toRem(5);
      border: toRem(1) solid $gray-4;
      background-color: $white;

      input {
        &:checked {
          & ~ .checkmark {
            background-color: $orange;
            @extend .centered;
            padding-top: 10%;
            top: toRem(-1);
            right: toRem(-1);
            width: toRem(18);
            height: toRem(18);
            border-radius: toRem(5);

            &::before {
              @include font-icon__limoo();
              font-size: toRem(6);
              content: "\e82b";
              color: $white;
            }
          }
        }
      }
    }
  }
  &.square {
    .title {
      font-size: toRem(14);
      margin-right: toRem(8);
      color: $gray-3;
    }
    &.active {
      .title {
        color: $black-topic;
      }
    }
  }

}

</style>
