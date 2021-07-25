<template>
  <div>
    <header class="button-tabs">
      <ul :class="tabsClass">
        <slot name="names"></slot>
      </ul>
    </header>
    <section class="tabs-content">
      <slot name="content"></slot>
    </section>
  </div>
</template>

<script>
import ButtonTabContent from "./ButtonTabContent";

export default {
  name: "BaseButtonTabs",
  props: {
    selected: {
      type: String,
      require: true
    },
    disables: {
      type: Array,
      require: false,
      default: () => {
        return []
      }
    },
    tabsClass: {
      type: String,
      require: false,
      default: ""
    },
    tabsItemClass: {
      type: String,
      require: false,
      default: ""
    }
  },
  components: { ButtonTabContent },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.button-tabs {
  display: flex;
  height: 100%;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    height: 100%;

    li {
      @extend .align-center;
      &.active {
        button {
          color: $gray-2;
          border: toRem(2) solid $orange;
        }
      }
      button {
        font-family: inherit;
      }
    }
    /*li {
      color: $gray-3;
      height: 100%;
      align-items: center;
      display: flex;
      padding: 0 toRem(24);
      cursor: pointer;

      &.active {
        color: #212121;
        position: relative;
      }
    }*/
  }
}
</style>
