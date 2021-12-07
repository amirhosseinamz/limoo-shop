<template>
  <div class="product-property-container">
      <div class="header">
        <div class="property-title">
          {{ propertyData.propName }}:
        </div>
        <div class="property-value">
          {{ selectedItemText }}
        </div>
      </div>
    <div class="property-values">
      <div
        class="property-btn"
        ref="propertyButtons"
        v-for="item in propertyData.propValues"
        @click="selectItem"
        :class="{ 'disabled': itemDisabled }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductProperty",
  props: {
    propertyData: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      itemDisabled: false,
      selectedItemText: "",
    };
  },
  methods: {
    selectItem(e) {
      let target = e.target;
      this.removeSelectedItem();
      target.classList.add('selected');
      this.selectedItemText = target.innerText;
    },
    removeSelectedItem() {
      const items = this.$refs.propertyButtons;
      let activeItem;
      for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('selected')) {
          activeItem = items[i];
        }
      }
      activeItem.classList.remove('selected');
    }
  },
  mounted() {
    let _firstItem = this.$refs.propertyButtons[0];
    _firstItem.classList.add('selected');
    this.selectedItemText = _firstItem.innerText;
  }
};
</script>

<style lang="scss" scoped>
  .product-property-container {
    padding-bottom: toRem(16);
    border-bottom: toRem(2) solid $gray-6;
    margin-top: toRem(24);
      .header {
        @extend .align-center;
        .property-title {
          font-size: toRem(16);
          color: $gray-2;
          @include sm {
            font-size: toRem(15);
          }
        }
        .property-value {
          font-size: toRem(16);
          color: $black-topic;
          margin-right: toRem(5);
          @include sm {
            font-size: toRem(15);
          }
        }
      }
    .property-values {
      @extend .align-center;
      margin-top: toRem(8);
      .property-btn {
        padding: toRem(8);
        margin-left: toRem(16);
        background-color: transparent;
        border: toRem(1) solid $gray-6;
        border-radius: toRem(8);
        cursor: pointer;
        font-size: toRem(14);
        color: $gray-2;
        &.selected {
          border: toRem(1) solid $gray;
        }
        &.disabled {
          border: toRem(1) dashed $gray-6;
          .title {
            opacity: 0.5;
          }
        }
      }
    }

  }
</style>
