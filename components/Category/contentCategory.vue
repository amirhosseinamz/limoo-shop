<template>
  <div class="w-100 content">
    <div class="content__main " ref="contentMain">
      <category-selected :category="category"></category-selected>
      <div class=" w-100">
        <div class="w-100 content__wrapper">
          <category-top
            @active-cat-suggestion="activeCatSuggestion"
            @show-box-filter="showBoxFilter"
            @show-modal-sort="showModalSort"
          ></category-top>
          <div class="content__bg w-100">
            <category-products
              @update-infinite-cat-mobile="updateInfiniteCatMobile"
            ></category-products>
            <base-pagination class="category-pagination" @pageChanged="pageChanged"></base-pagination>
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

export default {
  props: {
    category: { type: [Object, Array], default: [] },
  },

  components: {
    categorySelected,
    categoryProducts,
    categoryTop,
  },

  data() {
    return {
      showModalFilter: false,
    };
  },

  methods: {
    pageChanged() {
      this.$refs.contentMain.scrollIntoView({ behavior: "smooth" });
    },
    activeCatSuggestion(data) {
      this.$emit("active-cat-suggestion", data);
    },

    updateInfiniteCatMobile(data) {
      this.$emit("update-infinite-cat-mobile", data);
    },

    showBoxFilter() {
      this.$store.commit("category/updateStateModals", {
        showModal: true,
        submitFliterModal: false,
      });
    },

    showModalSort() {
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
  margin-top: toRem(135);
}

.content__bg {
  background: $white;
  padding-bottom: toRem(72);
  padding-right: toRem(24);
  padding-left: toRem(24);
  margin-bottom: toRem(72);
  border-bottom-left-radius: toRem(10);
  border-bottom-right-radius: toRem(10);
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


@include md {
  .content {
    margin-top: 0;
  }
  .content__main {
    margin-top: toRem(45);
  }
  .category-pagination::v-deep {
    &.pagination-container {
      display: none;
    }
  }
}


@include xs {
  .content__bg {
    padding-right: toRem(8);
    padding-left: toRem(8);
    padding-bottom: 0;
  }
  .productContent__sliderWrapper {
    margin-top: toRem(4);
  }
  .content__main {
    margin-top: toRem(55);
  }
}
</style>
