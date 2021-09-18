<template>
  <div class="container" :class="{ 'open': isOpen }">
    <div class="title-section" @click="toggleDropdown">
      <label class="radio-input">
        <input class="accordion-radio-inputs" type="radio" :name="name" :value="eachValue" v-model="activeValue" @change="inputChange">
        <span class="mark-accordion"></span>
      </label>
      <span class="dropdown-title">
        <slot name="title"></slot>
      </span>
      <span class="arrow-icon"></span>
    </div>
    <br>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownAccordion",
  props: {
    open: {
      type: Boolean,
      require: false,
      default: false
    },
    name: {
      type: String,
      require: true
    },
    selected: {
      type: String,
      require: true,
    },
    eachValue: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      isOpen: true,
      activeValue: ""
    }
  },
  methods: {
    toggleDropdown () {
      this.isOpen = !this.isOpen
    },
    inputChange() {
      // Sends the active value to the parent
      this.$emit('input-change', this.activeValue);
      //console.log(this.activeValue);
    }
  },
  mounted() {
    this.isOpen = this.open;
    this.activeValue = this.selected;
  }
};
</script>

<style lang="scss" scoped>
.container {
  @extend .d-flex;
  max-height: toRem(50);
  border: toRem(1) solid $gray-5;
  border-radius: toRem(10);
  flex-wrap: wrap;
  overflow: hidden;
  padding: 0.8125rem 1rem;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  cursor: pointer;


  &.open {
    max-height: 20rem;
    transition: max-height 1s ease-in-out;

    .arrow-icon {
      transform: rotate(-180deg);
    }
  }

  .radio-input {
    position: relative;
    width: toRem(17);
    min-width: toRem(17);
    height: toRem(17);
    margin-left: toRem(8);
    background-color: $white;
    box-shadow: inset 0 0 0 toRem(4.25) $gray-5;
    display: inline-flex;
    align-items: center;
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
        & ~ .mark-accordion {
          box-shadow: inset 0 0 0 toRem(4.25) $orange;
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
  .title-section {
    @extend .align-center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    .dropdown-title {
      font-size: toRem(16);
      color: $black-topic;
      @include xs {
        font-size: toRem(14);
      }
      @include xxs {
        font-size: toRem(13);
      }
    }

    .arrow-icon {
      height: toRem(18);
      transition: all 0.3s ease-in-out;
      margin-right: auto;
      @extend .d-flex;
      &::before {
        content: "\e800";
        @include font-icon__arrow();
        font-size: toRem(18);
        color: $gray;
        cursor: pointer;
      }
    }

  }
  .content {
    width: 100%;
    margin-top: 1rem;
  }
}
</style>
