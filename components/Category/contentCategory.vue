<template>
  <div class="w-100 content">
    <div class="content__main " ref="contentMain">
      <category-selected :category="category"></category-selected>
      <div class=" w-100">
        <div class="w-100 content__wrapper">
          <category-top
            :category-suggestion="categorySuggestion"
            :default-selected-suggestion="defaultSelectedSuggestion"
            @active-cat-suggestion="activeCatSuggestion"
            @show-box-filter="showBoxFilter"
            @show-modal-sort="showModalSort"
          ></category-top>
          <div class="content__bg w-100">
            <category-products
              :category-product-mobile="categoryProductMobile"
              :category-products="categoryProducts"
              @update-infinite-cat-mobile="updateInfiniteCatMobile"
            ></category-products>
<!--            <paganation-cat></paganation-cat>-->
            <base-pagination @pageChanged="pageChanged"></base-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categorySelected from "./categorySelected";
import categoryProducts from "./categoryProducts";
import categoryTop from "./categoryTop";
import paganationCat from "./paganationCat";

export default {
  props: {
    category: { type: [Object, Array], default: [] },
    categorySuggestion: { type: [Object, Array], default: [] },
    defaultSelectedSuggestion: { type: Object, default: {} },
    categoryProducts: { type: [Object, Array], default: [] },
    categoryProductMobile: { type: [Object, Array], default: [] },
  },

  components: {
    categorySelected,
    categoryProducts,
    categoryTop,
    paganationCat,
  },

  data() {
    return {
      showModalFilter: false,
    };
  },

  methods: {
    pageChanged () {
      this.$refs.contentMain.scrollIntoView({behavior: 'smooth'})
    },
    activeCatSuggestion(data) {
      this.$emit("active-cat-suggestion", data);
    },

    updateInfiniteCatMobile(data) {
      this.$emit("update-infinite-cat-mobile", data);
    },

    showBoxFilter() {
      // this.$store.state.category.showModal         = true;
      // this.$store.state.category.submitFliterModal = false;
      this.$store.commit("category/updateStateModals", {
        showModal: true,
        submitFliterModal: false,
      });
    },

    showModalSort() {
      // this.$store.state.category.showModalSort     = true;
      // this.$store.state.category.submitSortModal   = false;
      this.$store.commit("category/updateStateModals", {
        showModalSort: true,
        submitSortModal: false,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 135px;
}
.content__bg {
  background: $white;
  // padding-top: 24px;
  padding-bottom: 72px;
  padding-right: 24px;
  padding-left: 24px;
  margin-bottom: 72px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.content__main {
  flex-wrap: wrap;
  flex-flow: column;
  @include display-flex();
}
.content__wrapper {
  flex-wrap: wrap;
  @include display-flex();
  align-items: flex-start;
}

@media (max-width: 1220px) {
}

@media (max-width: 1024px) {
}

@media (max-width: 960px) {
  .content {
    margin-top: 0px;
  }
  .content__main {
    margin-top: 45px;
  }
}

@media (max-width: 600px) {
}

@media (max-width: 485px) {
  .content__bg {
    padding-right: 8px;
    padding-left: 8px;
    padding-bottom: 0;
  }
  .productContent__sliderWrapper {
    margin-top: 4px;
  }
  .content__main {
    margin-top: 55px;
  }
}
</style>
