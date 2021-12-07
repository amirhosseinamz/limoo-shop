<template>
  <div class="color-item-container" @click="selectItem" :class="{ 'selected': selected }">
    <span v-for="preview in previewColors" v-if="colorPreview" class="color-preview" :style="{ backgroundColor: preview }"></span>
    <span class="color-name">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "ColorItem",
  props: {
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
    selected: {
      type: Boolean,
      require: false,
      default: false
    },
    previewColors: {
      type: Array,
      require: false,
    }
  },
  data() {
    return {
      previewColor: null,
    };
  },
  methods: {
    selectItem(e) {
      e.stopPropagation();
      if (this.selectable) {
        this.$emit('item-selected');
      }
      this.$emit('item-clicked');
    },
  },
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
      margin-left: toRem(-7);
      pointer-events: none;
    }
    .color-name {
      font-size: toRem(14);
      color: $gray-3;
      white-space: nowrap;
      pointer-events: none;
      margin-right: toRem(12);
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

</style>
