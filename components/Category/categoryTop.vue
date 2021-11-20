<template>
  <div class="w-100">
    <div class="products__top w-100">
      <div class="w-100 products__filter-main">
        <div class="products__top-title w-100 products__top-desktop">
          <h3 class="products__top-text">موبایل اندرویدی</h3>
        </div>
<!--        <base-carousel :items-to-show="3"></base-carousel>-->

        <div class="products__filter-btns w-100 ">
          <base-button no-box-shadow classes="products__filter-btn" @button-clicked="showBoxFilter">
            <span class="filter-search-icon"></span>
            {{ getTextByTextKey('category_filter_text') }}
          </base-button>

          <base-button no-box-shadow classes="products__filter-btn" base-color="dark" @button-clicked="showModalSort">
            <span class="arrow-down-icon"></span>
            {{ getTextByTextKey('category_btn_new') }}
          </base-button>

        </div>

        <div class="products__top-title w-100 products__top-mobile">
          <h3 class="products__top-text">موبایل اندرویدی</h3>
        </div>
      </div>

      <div class="products__suggestions w-100">
          <base-button
            :class="[{ 'products__suggestions-active': data.active }, 'products__suggestion-item']"
            @button-clicked="activeSuggestion(data)"
            v-for="data in allCategorySuggestion"
            :key="data.id"
            base-color="white"
            mode="product"
          >
          <h3 class="products__suggestion-title">{{ data.title }}</h3>
        </base-button>
      </div>
    </div>
    <!--      Filter Modal-->
    <transition name="backdrop-scale">
      <div class="backdrop" :class="{ 'active--blur': activeBlur }" v-if="showFilterModal" @click="modalFilterClose"></div>
    </transition>
    <transition name="scale">
      <modal-filter
        v-if="showFilterModal"
        @close-modal="modalFilterClose"
      ></modal-filter>
    </transition>

    <!--      Filter Modal-->
    <transition name="backdrop-scale">
      <div class="backdrop" :class="{ 'active--blur': activeBlur }" v-if="showSortModal" @click="modalSortClose"></div>
    </transition>
    <transition name="scale">
      <modal-sort
        v-if="showSortModal"
        @close-modal="modalSortClose"
      ></modal-sort>
    </transition>
  </div>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import buttonFilter from "~/components/UI/buttonFilter";
import Button from "~/components/UI/Button";
import ModalFilter from "./modalFilter";
import ModalSort from "./modalSort";
import BaseCarousel from "../UI/BaseCarousel/BaseCarousel";




export default {
  props: {
  },

  components: {
    BaseCarousel,
    ModalSort,
    ModalFilter,
    buttonFilter,
    Button,
  },
  data() {
    return {
      disabledTab: true,
      allCategorySuggestion: [],
      selectedTab: 'limoo',
      activeItem_1: true,
      activeItem_2: false,
      checkboxValues: [],
      showFilterModal: false,
      showSortModal: false,
      activeBlur: false,

    };
  },
  computed: {
    categorySuggestion() {
      return this.$store.getters["category/category/categorySuggestion"];
    },

  },

  watch: {
    categorySuggestion(data) {
      this.allCategorySuggestion = data;
    },
    showFilterModal(val) {
      this.activeBlur = !!val;
    },
    showSortModal(val) {
      this.activeBlur = !!val;
    }
  },

  mounted() {
    if (this.categorySuggestion.length !== 0) {
      this.allCategorySuggestion = this.categorySuggestion;
    }
  },

  methods: {
    goGo(val) {
      console.log(this.checkboxValues);
    },
    modalFilterClose() {
      this.showFilterModal = false;
    },
    modalSortClose() {
      this.showSortModal = false;
    },
    selectTab(e, name) {
      this.selectedTab = name
      if (name === 'limoo') {
        this.activeItem_2 = false
        this.activeItem_1 = true
      } else if (name === 'seller') {
        this.activeItem_1 = false
        this.activeItem_2 = true
      }

    },
    activeSuggestion(data) {
      let updateCategorySuggestion = [];
      this.allCategorySuggestion.map((content) => {
        if (content.id === data.id) {
          content.active = true;
          this.$emit("active-cat-suggestion", content);
        } else {
          content.active = false;
        }

        updateCategorySuggestion = [...updateCategorySuggestion, content];
      });

      this.allCategorySuggestion = updateCategorySuggestion;
    },

    showBoxFilter() {
      this.showFilterModal = true;
      this.$emit("show-box-filter");
    },

    showModalSort() {
      this.showSortModal = true;
      this.$emit("show-modal-sort");
    },

    getTextByTextKey,
  },
};
</script>

<style lang="scss" scoped>


@include scale-modal-animation();
@include backdrop-scale-animation();

.backdrop {
  @extend .modal-backdrop;
  background: rgba(81,81,81,.6);
}

.active--blur {
  filter: blur(toRem(2));
  overflow: hidden;
}

.button-tabs {
  li {
    &.active {
      button {
        border: toRem(2) solid $orange;
      }
    }
  }
}
.buttons__example {
  margin-bottom: toRem(100);
}
.products__filter-btns {
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
}
.products__top {
  background: $white;
  padding-top: toRem(24);
  padding-right: toRem(24);
  padding-left: toRem(24);
  border-top-right-radius: toRem(10);
  border-top-left-radius: toRem(10);
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.products__filter-btn {
  justify-content: start!important;
  margin-left: 1.3125rem;
  font-family: inherit;
  width: toRem(207);
  height: toRem(47);
  .filter-search-icon {
    margin: 0 1rem 0 0.6rem;
    &::before {
      content: "\e840";
      @include font-icon__limoo();
      font-size: toRem(20);
      color: white;
    }
  }
  .arrow-down-icon {
    margin: 0 1rem 0 0.6rem;

    &::before {
      content: "\e83f";
      @include font-icon__limoo();
      font-size: toRem(20);
      color: white;
    }
  }
}
.products__filter-btn:last-of-type {
  margin-left: 0;
}
.btn--filter-gray {
  background: $dark_gray;
}
.products__filter-text {
  font-size: toRem(16);
  color: $white;
  font-weight: 400;
  font-family: inherit;
  margin-right: toRem(10);
}
.products__top-text {
  font-size: toRem(18);
  color: $dark_gray;
  font-weight: 400;
  font-family: inherit;
}
.products__top-title {
  padding-bottom: toRem(24);
}
.products__suggestions {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: toRem(30);
}
.products__suggestion-item {
  font-family: inherit;
  padding: 0.8125rem 1.875rem;
  margin-left: 0.5rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
}
.products__suggestion-item:last-of-type {
  margin-left: 0;
}
.products__suggestion-title {
  color: $gray;
  font-size: toRem(13);
  font-weight: 300;
}
.products__suggestions-active {
  background: $light-yellow!important;
  border-color: $light-yellow!important;
}
.products__suggestions-active .products__suggestion-title {
  color: $white!important;
}
.products__top-mobile {
  display: none;
}
@include sm {

  .products__filter-btn {
    width: 47%;
    margin-left: 4.5%;
    .filter-search-icon {
      &::before {
        font-size: toRem(18);
      }
    }
    .arrow-down-icon {
      &::before {
        font-size: toRem(18);
      }
    }
  }
}

@include xs {
  .products__filter-main {
    padding-right: toRem(8);
    padding-left: toRem(8);
  }
  .products__suggestion-item {
    flex-shrink: 0;
    padding: toRem(6) toRem(12);
  }
  .products__suggestions {
    overflow: auto;
    flex-flow: row;
    padding-bottom: toRem(12);
    margin-top: toRem(22);
    padding-right: 0;
  }
  .products__filter-btn {
    width: 48%;
    height: toRem(36);
    margin-left: 3.5%;
    font-size: toRem(14)!important;
    .filter-search-icon {
      margin: 0 0.8rem 0 0.6rem;
      &::before {
        font-size: toRem(15);
      }
    }
    .arrow-down-icon {
      margin: 0 0.8rem 0 0.6rem;
      &::before {
        font-size: toRem(15);
      }
    }
  }
  .products__suggestions {
    padding-right: toRem(8);
  }
  .products__top-desktop {
    display: none;
  }
  .products__top-mobile {
    @include display-flex();
  }
  .products__top-title {
    padding-top: toRem(26);
    padding-bottom: 0;
  }
  .products__top-text {
    font-size: toRem(14);
  }
  .products__top {
    padding-right: 0;
    padding-left: 0;
    padding-top: 0;
  }
}

@include xxs {
  .products__filter-btn {
    padding-right: toRem(8);
    padding-left: toRem(8);
    font-size: toRem(13)!important;

    img {
      margin: 0 0.1rem 0 0.6rem;
      height: toRem(17);
    }
  }
}
</style>
