<template>
  <div class="w-100">
    <div class="products__top w-100">
      <div class="w-100 products__filter-main">
        <div class="products__top-title w-100 products__top-desktop">
          <h3 class="products__top-text">موبایل اندرویدی</h3>
        </div>

        <div class="products__filter-btns w-100 ">
          <Button
            state="initial"
            :show-inside-icon-button-text="true"
            class-name-text-button=""
            class-name-icon-button=""
            :text="getTextByTextKey('category_filter_text')"
            icon-address="/icons/filter_search_icon.svg"
            class="products__filter-btn"
            @btn-click="showBoxFilter"
          ></Button>
          <!-- 
          <Button
            state="initial"
            :show-inside-icon-button-text="false"
            :show-loading="true"
            class-name-text-button=""
            class-name-icon-button=""
            text=""
            icon-address="/icons/filter_search_icon.svg"
            class="products__filter-btn"
            @btn-click="showBoxFilter"
          ></Button> -->

          <Button
            state="initial"
            :show-inside-icon-button-text="true"
            class-name-text-button=""
            class-name-icon-button=""
            :text="getTextByTextKey('category_btn_new')"
            icon-address="/icons/arrow-filter.svg"
            class="products__filter-btn btn--filter-gray"
            @btn-click="showModalSort"
          ></Button>
        </div>

        <div class="products__top-title w-100 products__top-mobile">
          <h3 class="products__top-text">موبایل اندرویدی</h3>
        </div>
      </div>

      <div class="products__suggestions w-100">
        <div
          :class="{ 'products__suggestions-active': data.active }"
          @click="activeSuggestion(data)"
          v-for="data in allCategorySuggestion"
          :key="data.id"
          class="products__suggestion-item "
        >
          <h3 class="products__suggestion-title">{{ data.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import Button from "~/components/UI/Button";

export default {
  props: {
    categorySuggestion: { type: [Object, Array], default: [] },
    defaultSelectedSuggestion: { type: Object, default: {} },
  },

  components: {
    Button,
  },

  data() {
    return {
      allCategorySuggestion: [],
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
  margin-left: 21px;
  background: $btn__green;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 20px;
  padding-left: 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-family: inherit;
  width: 207px;
  height: 47px;
  @include display-flex();
  align-items: center;
  cursor: pointer;
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
  border-radius: 10px;
  border: solid 1px $light-gray;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-right: 30px;
  padding-left: 30px;
  margin-left: 8px;
  cursor: pointer;
  margin-bottom: 8px;
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
  background: $light-yellow;
  border-color: $light-yellow;
}
.products__suggestions-active .products__suggestion-title {
  color: $white;
}
.products__top-mobile {
  display: none;
}

.products__filter-main::v-deep {
  .button__text {
    @extend .products__filter-text;
  }
  .button__icon {
    @extend .products__filter-icon;
  }
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
  }
  .products__filter-text {
    font-size: 14px;
  }
  .products__filter-icon {
    height: 17px;
  }
  .btn--filter-gray .products__filter-icon {
    height: 19px;
  }
  .products__filter-text {
    margin-right: 6px;
  }
  .products__suggestions {
    padding-right: 8px;
  }
  .btn--filter-gray {
    background: $gray;
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
  }
  .products__filter-text {
    font-size: 13px;
  }
  .btn--filter-gray .products__filter-icon {
    height: 17px;
  }
}
</style>
