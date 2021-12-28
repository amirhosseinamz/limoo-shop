<template>
    <div class="dropdown" :class="{ 'open': optionsShown }" v-if="options" ref="dropdown">
      <!-- Dropdown Input -->
      <div class="dropdown-title"
           :disabled="disabled"
           @click="showOptions"
      >
        <div class="display">
          <div class="selected-item">
            {{ selectedItem }}
          </div>
          <div class="arrow">
            <span class="icon"></span>
          </div>
        </div>

      </div>

      <!-- Dropdown Menu -->
      <div class="dropdown-content" :class="{ 'show': optionsShown }"
           v-show="optionsShown">
        <div class="search-box w-100">
          <input type="text" class="w-100"
                 @keyup="keyMonitor"
                 v-model="searchFilter"
          >
        </div>
        <div class="dropdown-items">
          <div
            class="dropdown-item"
            ref="dropdownItem"
            @click="selectOption(option)"
            v-for="(option, index) in filteredOptions"
            :key="index">
            {{ option || "-" }}
          </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
  name: "Dropdown",
  template: "Dropdown",
  props: {
    name: {
      type: String,
      required: false,
      default: "dropdown",
      note: "Input name",
    },
    options: {
      type: Array,
      required: true,
      default: [],
      note: "Options of dropdown. An array of options with id and name",
    },
    placeholder: {
      type: String,
      required: false,
      default: "Please select an option",
      note: "Placeholder of dropdown",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
      note: "Disable the dropdown",
    },
    maxItem: {
      type: Number,
      required: false,
      default: 150,
      note: "Max items showing",
    },
    defaultValue: {
      type: String,
      required: false
    },
  },
  data() {
    return {
      selected: '',
      optionsShown: false,
      searchFilter: "",
    };
  },
  created() {
    this.$emit("selected", this.selected);
  },
  computed: {
    filteredOptions() {
      const filtered = [];
      const regOption = new RegExp(this.searchFilter, "ig");
      for (const option of this.options) {
        if (this.searchFilter.length < 1 || option.match(regOption)) {
          if (filtered.length < this.maxItem) filtered.push(option);
        }
      }
      return filtered;
    },
    selectedItem() {
      if (this.selected) {
        return this.selected;
      } else {
        return this.placeholder;
      }
    }
  },
  methods: {
    selectOption(option) {
      this.selected = option;
      this.optionsShown = false;
      this.searchFilter = this.selected;
      this.$emit("selected", this.selected);
    },
    showOptions() {
      if (!this.disabled) {
        this.searchFilter = "";
        this.optionsShown = !this.optionsShown;
      }
    },
    exit() {
      if (!this.selected) {
        this.selected = '';
        this.searchFilter = "";
      } else {
        this.searchFilter = this.selected;
      }
      this.$emit("selected", this.selected);
      this.optionsShown = false;
    },
    // Selecting when pressing Enter
    keyMonitor(event) {
      if (event.key === "Enter" && this.filteredOptions[0])
        this.selectOption(this.filteredOptions[0]);
    },
    clickOutside(e) {
      let ignoreClickOnMeElement = this.$refs.dropdown;
      let isClickInsideElement = ignoreClickOnMeElement.contains(e.target);
      if (!isClickInsideElement) {
        this.optionsShown = false;
      }
    }
  },
  watch: {
    searchFilter() {
      if (this.filteredOptions.length === 0) {
        if (!this.selected) {
          this.selected = '';
        }
      } else {
        //this.selected = this.filteredOptions[0];
      }
      this.$emit("filter", this.searchFilter);
    },
  },
  mounted() {
    if (this.defaultValue && this.options.includes(this.defaultValue)) {
      this.selected = this.defaultValue;
    }
    document.addEventListener('click', this.clickOutside)
  }
};
</script>


<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: block;
  border: toRem(1) solid $gray-4;
  border-radius: toRem(15);
  color: $gray-3;
  height: toRem(52);
  box-shadow: 0 toRem(4) toRem(4) 0 $gray-6;
  &.open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none;
    .arrow {
      transform: rotate(180deg);
    }
  }
  &-backdrop {
    background-color: transparent;
    z-index: 1400;
  }


  &-title {
    cursor: pointer;
    display: block;
    font-size: toRem(16);
    width: inherit;
    height: inherit;
    border-radius: inherit;
    padding: toRem(12) 0 toRem(11) toRem(11);
    @include md {
      font-size: toRem(14);
    }
    @include xs {
      font-size: toRem(13);
    }
    .display {
      @extend .align-center;
      width: 100%;
      height: 100%;
      justify-content: flex-end;
      .selected-item {
        @extend .centered;
        font-size: toRem(16);
        color: $gray-3;
        border-left: toRem(1) solid $gray-5;
        width: 100%;
        @include md {
          font-size: toRem(14);
        }
        @include xs {
          font-size: toRem(13);
        }
      }
      .arrow {
        @extend .centered;
        margin-right: toRem(7);
        .icon {
          &::before {
            content: "\e841";
            color: $gray-4;
            @include font-icon__limoo();
            font-size: toRem(8);
          }
        }
      }
    }
  }

  .dropdown-content {
    position: relative;
    top: toRem(-1);
    right: toRem(-1);
    width: inherit;
    background-color: $white;
    z-index: 1;
    padding: 0 toRem(5) toRem(8) toRem(5);
    border-bottom-right-radius: toRem(15);
    border-bottom-left-radius: toRem(15);
    border: toRem(1) solid $gray-4;
    border-top: none;
    overflow: auto;
    display: none;
    &.show {
      display: block;
    }
    input {
      border-radius: toRem(4);
      border: toRem(1) solid $gray-6;
      height: toRem(37);
      width: 100%;
      margin-bottom: toRem(6);
      padding-right: toRem(14);
      color: $gray-3;
      font-size: toRem(16);
      font-family: inherit;
      &:focus {
        outline: none;
      }
      @include md {
        font-size: toRem(14);
      }
      @include xs {
        font-size: toRem(13);
      }
    }
    .dropdown-items {
      max-height: toRem(150);
      overflow: auto;
      .dropdown-item {
        @extend .centered;
        color: $gray-3;
        height: toRem(40);
        font-size: 1rem;
        text-decoration: none;
        cursor: pointer;
        &:hover {
          background-color: $gray-6;
        }
        @include md {
          font-size: toRem(14);
        }
        @include xs {
          font-size: toRem(13);
        }
      }
    }


  }

}
::-webkit-scrollbar {
  width: toRem(6);
  position: absolute;
  scrollbar-width: thin;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: toRem(10);
  position: absolute;
  scrollbar-width: thin;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $scrollbar-gray;
  border-radius: toRem(6);
  position: absolute;
}
</style>
