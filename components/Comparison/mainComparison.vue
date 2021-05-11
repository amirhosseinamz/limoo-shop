<template>
  <div class="w-100 content">
    <div class="content__main ">
      <!-- <category-selected :category="category"></category-selected> -->
      <div class=" w-100">
        <div class="w-100 content__wrapper">
          <!-- <category-top
              :category-suggestion="categorySuggestion"
              :default-selected-suggestion="defaultSelectedSuggestion"
              @active-cat-suggestion="activeCatSuggestion"
              @show-box-filter="showBoxFilter"
              @show-modal-sort="showModalSort"
            ></category-top> -->

          <div class="content__bg w-100">
            <comparison-product :products="products"></comparison-product>
          </div>

          <div class="content__bg w-100">
            <detail-technical
              :detail-technical="detailTechnical"
            ></detail-technical>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comparisonProduct from "~/components/Comparison/comparisonProduct.vue";
import detailTechnical from "~/components/Comparison/detailTechnical.vue";

export default {
  props: {
    products: { type: [Object, Array], default: [] },
    detailTechnical: { type: [Object, Array], default: [] },
  },

  components: {
    comparisonProduct,
    detailTechnical,
  },

  data() {
    return {
      showModalFilter: false,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 135px;
}
.content__bg {
  background: $white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 24px;
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
