<template>
  <div class="color-item-container" @click="selectItem">
    <span v-if="colorPreview" @click="selectItemFromChild" class="color-preview" :class="backgroundColor"></span>
    <span @click="selectItemFromChild" class="color-name">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "ColorItem",
  props: {
    backgroundColor: {
      type: String,
      require: true,
    },
    colorPreview: {
      type: Boolean,
      require: false,
      default: true
    },
    selectable: {
      type: Boolean,
      require: false,
      default: true
    }
  },
  methods: {
    selectItem(e, targetFromChild) {
      e.stopPropagation();
      let target;
      if (targetFromChild) {
        target = targetFromChild;
      } else {
        target = e.target;
      }
      if (this.selectable) {
        this.removeSelectedItem();
        target.classList.add('selected');
        this.$emit('item-selected', this.backgroundColor);
      }
      this.$emit('item-clicked');
    },
    selectItemFromChild (e) {
      this.selectItem(e, e.target.parentElement);
    },
    removeSelectedItem() {
      const activeItem = document.querySelector('.color-item-container.selected');
      if (activeItem) {
        activeItem.classList.remove('selected');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .color-item-container {
    border: toRem(1) solid $gray-6;
    border-radius: toRem(10);
    padding: toRem(7) toRem(11) toRem(7) toRem(16);
    @extend .align-center;
    cursor: pointer;

    &.selected {
      border: toRem(1) solid $gray-2;
    }

    .color-preview {
      width: toRem(16);
      height: toRem(16);
      border-radius: 50%;
      margin-left: toRem(4);
      &.red {
        background-color: $product-red-color;
      }
      &.green {
        background-color: $product-green-color;
      }
      &.purple {
        background-color: $product-purple-color;
      }
    }
    .color-name {
      font-size: toRem(16);
      color: $gray-3;
      @include md {
        font-size: toRem(14);
      }
      @include xs {
        font-size: toRem(15);
      }
      @include xxs {
        font-size: toRem(14);
      }
    }
  }
</style>
