<template>
  <label class="switch" @click="changeChecked">
    <input type="checkbox" v-model="value">
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  name: "BaseToggle",
  props: {
  },
  data () {
    return {
      value: false
    }
  },
   methods: {
     changeChecked () {
       this.$emit('input-changed', !this.value)
     }
   }
};
</script>

<style lang="scss" scoped>

.switch {
  position: relative;
  display: inline-block;
  width: toRem(54);
  height: toRem(29);
  border-radius: toRem(40);

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
      & + .slider {
        background-color: $orange;
      }
      & + .slider::before {
        -webkit-transform: translateX(toRem(23));
        -ms-transform: translateX(toRem(23));
        transform: translateX(toRem(23));
      }
    }
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $gray-5;
    -webkit-transition: .4s;
    transition: .4s;

    &::before {
      position: absolute;
      content: "";
      height: toRem(25);
      width: toRem(26.38);
      left: toRem(2);
      bottom: toRem(2);
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    &.round {
      border-radius: 2.125rem;
      &::before {
        border-radius: 50%;
      }
    }
  }
}
</style>
