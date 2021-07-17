<template>
  <div>
    <label class="container">
      <input type="checkbox" name="ali" v-model="values" value="first" checked>
      <span class="checkmark"></span>
    </label>
    <label class="container">
      <input type="checkbox" name="ali" v-model="values" value="second">
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  data() {
    return {
      values: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: toRem(32);
  height: toRem(32);
  background-color: $gray-5;
  margin-right: 30rem;
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
}
</style>
