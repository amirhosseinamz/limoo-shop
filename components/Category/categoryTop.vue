<template>
  <div class="w-100">
    <div class="products__top w-100">
      <div class="w-100 products__filter-main">
        <div class="products__top-title w-100 products__top-desktop">
          <h3 class="products__top-text">موبایل اندرویدی</h3>
        </div>
        <div class="products__filter-btns w-100 ">
          <base-button no-box-shadow classes="products__filter-btn" @button-clicked="showBoxFilter">
            <img src="/icons/filter_search_icon.svg" alt="filter">
            {{ getTextByTextKey('category_filter_text') }}
          </base-button>

          <base-button no-box-shadow classes="products__filter-btn" base-color="dark" @button-clicked="showModalSort">
            <img src="/icons/arrow-filter.svg" alt="news">
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
  </div>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import buttonFilter from "~/components/UI/buttonFilter";
import Button from "~/components/UI/Button";

export default {
  props: {
    categorySuggestion: { type: [Object, Array], default: [] },
    defaultSelectedSuggestion: { type: Object, default: {} },
  },

  components: {
    buttonFilter,
    Button,
  },
  data() {
    return {
      disabledTab: true,
      allCategorySuggestion: [],
      tabsName: ['مرجوع شده', 'لغو شده'],
      selected: 'مرجوع شده'
    };
  },

  watch: {
    categorySuggestion(data) {
      this.allCategorySuggestion = data;
    },
  },

  mounted() {
    if (this.categorySuggestion.length != 0) {
      this.allCategorySuggestion = this.categorySuggestion;
    }
  },

  methods: {
    tabChanged (val) {
      this.selected = val
    },
    activeSuggestion(data) {
      let updateCategorySuggestion = [];
      this.allCategorySuggestion.map((content) => {
        if (content.id == data.id) {
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
      this.$emit("show-box-filter");
    },

    showModalSort() {
      this.$emit("show-modal-sort");
    },

    getTextByTextKey,
  },
};
</script>

<style lang="scss" scoped>
.buttons__example {
  margin-bottom: 100px;
}
.products__filter-btns {
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
}
.products__top {
  background: $white;
  padding-top: 24px;
  padding-right: 24px;
  padding-left: 24px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.products__filter-btn {
  justify-content: start!important;
  margin-left: 1.3125rem;
  font-family: inherit;
  width: 207px;
  height: 47px;

  img {
    margin: 0 1rem 0 0.6rem;
  }
}
.products__filter-btn:last-of-type {
  margin-left: 0;
}
.btn--filter-gray {
  background: $dark_gray;
}
.products__filter-text {
  font-size: 16px;
  color: $white;
  font-weight: 400;
  font-family: inherit;
  margin-right: 10px;
}
.products__top-text {
  font-size: 18px;
  color: $dark_gray;
  font-weight: 400;
  font-family: inherit;
}
.products__top-title {
  padding-bottom: 24px;
}
.products__suggestions {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 30px;
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
  font-size: 13px;
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

@media (max-width: 1220px) {
}

@media (max-width: 1024px) {
}

@media (max-width: 960px) {
}

@media (max-width: 600px) {
  .products__filter-btn {
    width: 47%;
    margin-left: 4.5%;
  }
}

@media (max-width: 485px) {
  .products__filter-main {
    padding-right: 8px;
    padding-left: 8px;
  }
  .products__suggestion-item {
    padding-top: 6px;
    padding-bottom: 6px;
    flex-shrink: 0;
    padding-right: 12px;
    padding-left: 12px;
  }
  .products__suggestions {
    overflow: auto;
    flex-flow: row;
    padding-bottom: 12px;
    margin-top: 22px;
    padding-right: 0px;
  }
  .products__filter-btn {
    width: 48%;
    height: 36px;
    margin-left: 3.5%;
    font-size: 14px!important;
    img {
      margin: 0 0.3rem 0 0.6rem;
      height: 19px;
    }
  }
  .products__suggestions {
    padding-right: 8px;
  }
  .products__top-desktop {
    display: none;
  }
  .products__top-mobile {
    @include display-flex();
  }
  .products__top-title {
    padding-top: 26px;
    padding-bottom: 0;
  }
  .products__top-text {
    font-size: 14px;
  }
  .products__top {
    padding-right: 0;
    padding-left: 0;
    padding-top: 0;
  }
}

@media (max-width: 330px) {
  .products__filter-btn {
    padding-right: 8px;
    padding-left: 8px;
    font-size: 13px!important;

    img {
      margin: 0 0.1rem 0 0.6rem;
      height: 17px;
    }
  }
}
</style>
