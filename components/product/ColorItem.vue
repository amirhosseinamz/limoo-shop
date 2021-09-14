<template>
  <div class="color-item-container" @click="selectItem" :class="{ 'selected': selected }">
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
    },
    index: {
      type: Number,
      require: false
    },
    selected: {
      type: Boolean,
      require: false,
      default: false
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
        this.$emit('item-selected', this.backgroundColor, this.index);
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
    height: toRem(38);
    border-radius: toRem(10);
    padding: toRem(11) toRem(11) toRem(11) toRem(16);
    @extend .align-center;
    cursor: pointer;
    @include xs {
      padding: toRem(11) toRem(4) toRem(11) toRem(16);
    }
    @include xxs {
      padding: toRem(11) toRem(11) toRem(11) toRem(16);
    }

    &.selected {
      border: toRem(1) solid $gray-2;
    }

    .color-preview {
      width: toRem(16);
      height: toRem(16);
      min-width: toRem(16);
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
      &.blue {
        background-color: #1199ff;
      }
      &.yellow {
        background-color: yellow;
      }
    }
    .color-name {
      font-size: toRem(14);
      color: $gray-3;
      white-space: nowrap;
      @include md {
        font-size: toRem(14);
      }
      @include xs {
        font-size: toRem(12);
      }
      @include xxs {
        font-size: toRem(14);
      }
    }
  }
  @include xxs {
    .color-item-container {
      .color-preview {
        margin-left: toRem(8);
      }
    }
  }
</style>
