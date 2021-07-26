<template>
  <div class="container" :class="{ 'open': isOpen }">
    <div class="title-section" @click="toggleDropdown">
      <span class="dropdown-title">
        {{ title }}
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
  name: "SlidingDropDown",
  props: {
    title: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      isOpen: true
    }
  },
  methods: {
    toggleDropdown () {
      this.isOpen = !this.isOpen
    }
  }
};
</script>

<style lang="scss" scoped>
  .container {
    @extend .d-flex;
    max-height: toRem(50);
    border: toRem(1) solid $gray-5;
    border-radius: toRem(10);
    color: $gray-2;
    flex-wrap: wrap;
    overflow: hidden;
    padding: 0.8125rem 1rem;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);


    &.open {
      max-height: 20rem;
      transition: max-height 1s ease-in-out;

      .arrow-icon {
        transform: rotate(-180deg);
      }
    }


    .title-section {
      @extend .align-center;
      justify-content: space-between;
      width: 100%;
      height: 100%;

      .arrow-icon {
        height: toRem(18);
        transition: all 0.3s ease-in-out;
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
