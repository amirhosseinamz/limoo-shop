<template>
  <div class="pagination-container">
    <ul>
      <li class="right-arrow" @click="goToFirst"></li>
      <li
        class="pagination-items"
        v-for="item in length"
        @click="selectItem"
        :key="item"
      >
        {{ item }}
      </li>
      <li class="left-arrow" @click="goToLast"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BasePagination",
  data() {
    return {
      pageNumber: 1,
      length: 80,
      showedItemsLength: 9
    };
  },
  watch: {
    pageNumber(val) {
      this.$emit('pageChanged')
      this.changeActive(val - 1);
      this.showItems();
    },
  },
  methods: {
    changeActive(index) {
      const _items = document.querySelectorAll(".pagination-items");
      for (let i = 0; i < _items.length; i++) {
        _items[i].classList.remove("active");
      }
      _items[index].classList.add("active");
    },
    selectItem(e) {
      this.pageNumber = parseInt(e.target.innerHTML);
      const _items = document.querySelectorAll(".pagination-items");
      for (let i = 0; i < _items.length; i++) {
        _items[i].classList.remove("active");
      }
      e.target.classList.add("active");
    },
    goToFirst() {
      this.pageNumber = 1;
    },
    goToLast() {
      this.pageNumber = this.length
    },
    showItems () {
      let _min = this.pageNumber - Math.floor(this.showedItemsLength/2); // choose numbers before selected number
      if (_min <= 1) { _min = 1; }
      let _max = this.pageNumber + Math.floor(this.showedItemsLength/2); // choose numbers after selected number
      if (_max >= this.length) { _max = this.length; }
      const _period = []
      const _items = document.querySelectorAll(".pagination-items");
      for (let i = 0; i < _items.length; i++) {
        _items[i].style.display = "none";
      }
      for (let i = _min; i <= _max; i++) {
        _period.push(_items[i-1]);
      }
      for (let i = 0; i < _period.length; i++) {
        _period[i].style.display = "flex";
      }
    }
  },
  mounted() {
    const _items = document.querySelectorAll(".pagination-items");
    _items[0].classList.add("active");
    this.showItems();
  },
};
</script>

<style lang="scss" scoped>
.pagination-container {
  width: 100%;
  margin-top: toRem(48);
  @extend .centered;

  ul {
    list-style: none;
    @extend .centered;

    li {
      width: toRem(45);
      height: toRem(45);
      border-radius: toRem(13);
      color: $gray-3;
      margin: 0 toRem(4);
      cursor: pointer;
      @extend .centered;

      &.left-arrow {
        color: #72809D;
        font-size: toRem(13);
        background: $white;
        border: toRem(1) solid $gray-5;

        &::before {
          content: "\e801";
          @include font-icon__limoo();
        }
        &::after {
          content: "\e801";
          @include font-icon__limoo();
        }
      }

      &.right-arrow {
        color: #72809D;
        font-size: toRem(13);
        background: $white;
        border: toRem(1) solid $gray-5;

        &::before {
          content: "\e801";
          @include font-icon__limoo();
          transform: rotate(180deg);
        }
        &::after {
          content: "\e801";
          @include font-icon__limoo();
          transform: rotate(180deg);
        }
      }

      &.pagination-items {
        background-color: $gray-6;

        &.active {
          background-color: $gray-3;
          color: $white;
        }
      }
    }
  }
}
</style>
