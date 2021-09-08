<template>
    <div class="dropdown-container" :class="{ 'open': isOpen }" ref="dropdown">
      <div class="backdrop" v-show="isOpen"  @click="toggleDropdown"></div>
      <div class="box" @click="toggleDropdown">
        <span class="arrow-down-icon right-side"></span>
        <span class="selected-item">
        {{ selectedWarranty }}
      </span>
      </div>
      <div class="content" v-show="isOpen">
        <ul>
          <li v-for="item in warrantyData" :key="item.id" @click="selectItem(item.id)" class="warranty-item"
              :class="{ 'selected': item.name === selectedWarranty }">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "WarrantyDropdown",
  data() {
    return {
      selectedWarranty: "18 ماه گارانتی شرکت مجاز مشترک",
      isOpen: false,
    };
  },
  computed: {
    warrantyData() {
      return this.$store.getters["product/single/single/warrantyData"];
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectItem(itemId) {
      let selectedItem = this.warrantyData.find(item => item.id === itemId);
      this.selectedWarranty = selectedItem.name;
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-container {
  width: toRem(306);
  max-height: toRem(45);
  @extend .align-center;
  flex-wrap: wrap;
  border: toRem(1) solid $gray-5;
  border-radius: toRem(10);
  font-size: toRem(16);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  z-index: 50;

  .backdrop {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 40;
    background-color: transparent;
    cursor: auto;
  }

  .box {
    @extend .align-center;
    width: 100%;
    height: 100%;
    z-index: 50;
  }

  .content {
    position: relative;
    background-color: $white;
    width: 100%;
    border-radius: toRem(10);
    @extend .align-center;
    flex-direction: column;
    max-height: toRem(140);
    overflow-y: scroll;
    z-index: 50;
  }

  ul {
    margin: 0;
    list-style: none;
    width: 100%;
    padding: 0 toRem(19) 0 0;

    li {
      height: toRem(47);
      border-bottom: toRem(1) solid $gray-5;
      @extend .align-center;
      width: 92%;
      color: $gray-2;
      padding-right: toRem(11);

      &:last-child {
        border: none;
      }

      &:first-child {
        border-top: toRem(1) solid $gray-5;
      }

      &.selected {
        color: $code-request;
      }
    }
  }

  &.open {
    animation-name: dropdown;
    animation-duration: 0.5s;
    max-height: fit-content;
    box-shadow: 0 toRem(20) toRem(24) rgba(17, 17, 17, 0.06);
  }
  @keyframes dropdown {
    0% {
      max-height: toRem(45);
      box-shadow: none;
    }
    100% {
      max-height: toRem(200);
      box-shadow: 0 toRem(20) toRem(24) rgba(17, 17, 17, 0.06);
    }
  }
  .arrow-down-icon {
    width: 10%;

    &::before {
      content: "\e841";
      @include font-icon__limoo();
      font-size: toRem(8);
      color: $gray-4;
      padding-left: toRem(7);
      padding-right: toRem(11);
    }
  }

  .selected-item {
    width: 90%;
    height: toRem(45);
    color: $gray-3;
    @extend .align-center;
  }
}

@include xs {
  .dropdown-container {
    width: 100%;
    flex-direction: row-reverse;
    font-size: toRem(14);

    .box {
      flex-direction: inherit;
    }

    &.open {
      ul {
        li {
          padding-right: toRem(3);
        }
      }
    }

    .arrow-down-icon {
      @include display-flex();
      align-items: center;
      justify-content: flex-end;

      &::before {
        padding-left: toRem(11);
      }

    }

    .selected-item {
      padding-right: toRem(20);
    }

  }
}
@include xxs {
  .dropdown-container {
    font-size: toRem(13);
    .arrow-down-icon {
      &::before {
        font-size: toRem(7);
      }
    }
  }

}
</style>
