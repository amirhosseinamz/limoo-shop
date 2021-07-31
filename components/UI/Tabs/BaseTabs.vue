<template>
  <div>
    <header class="tabs">
      <ul :class="tabsClass">
        <li v-for="(tab, index) in tabs" :key="index" @click="changeTab(tab)"
        :class="[{ 'active': tab === selected }, tabsItemClass]"
        >
          {{ tab }}
          <span :class="{'length': !!length}">
            {{ length }}
          </span>
        </li>
      </ul>
    </header>
    <section class="tabs-content">
      <slot></slot>
    </section>
  </div>
</template>

<script>
import TabContent from "./TabContent";

export default {
  name: "Tabs",
  props: {
    tabs: {
      type: Array,
      require: true
    },
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
    },
    length: {
      type: String,
      require: false,
      default: ""
    }
  },
  components: { TabContent },
  methods: {
    changeTab (tab) {
      if (this.disables.includes(tab)) {
        return
      } else {
        this.$emit('change-tab', tab)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .tabs {
    display: flex;
    height: 100%;

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      height: 100%;

      li {
        color: $gray-3;
        height: 100%;
        align-items: center;
        display: flex;
        padding: 0 toRem(24);
        cursor: pointer;

        .length {
          display: none;
        }

        &.active {
          color: #212121;
          position: relative;
          &::before {
            content: " ";
            position: absolute;
            width: 100%;
            height: toRem(5);
            bottom: toRem(-1);
            left: 0;
            background-color: #ffcc40;
            border-top-right-radius: toRem(5);
            border-top-left-radius: toRem(5);
          }
          .length {
            @include display-flex();
            align-items: center;
            justify-content: center;
            width: toRem(24);
            height: toRem(24);
            background-color: $bg-libht__red;
            color: $red-color;
            margin-right: toRem(6.4);
            border-radius: 100%;
          }
        }
      }
    }
  }
</style>
