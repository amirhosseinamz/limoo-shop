<template>
  <div class="container">
    <ul class="steps-list">
      <li :style="{ width: itemWidth(item) }" v-for="item in length" :class="{ 'active': activeClass(item) }">
        <div class="line"></div>
        <span class="circle">
          <span class="title">
          {{ itemNames[item-1] }}
        </span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BaseSteps",
  props: {
    length: {
      type: Number,
      require: true
    },
    activesLength: {
      type: Number,
      require: true
    },
    itemNames: {
      type: Array,
      require: true
    }
  },
  methods: {
    activeClass (item) {
      return item <= this.activesLength;
    },
    itemWidth (item) {
      if (item === 1) {
        return '0'
      } else {
        return 100/(this.length - 1) + '%'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .container {
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .line {
          height: toRem(3);
          background-color: $gray-5;
        }
        .circle {
          position: absolute;
          display: flex;
          justify-content: center;
          left: 0;
          width: toRem(26);
          height: toRem(26);
          border-radius: 50%;
          background-color: $gray-5;
        }
        .title {
          position: absolute;
          top: toRem(30);
          display: flex;
          width: toRem(150);
          justify-content: center;
        }
        &.active {
          .line {
            background-color: $green-2;
          }
          .circle {
            background-color: $green-2;
          }
        }
        &:first-child {
          width: 0;
        }
      }
    }
  }
</style>
