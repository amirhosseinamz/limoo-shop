<template>
  <div class="w-100 content">
    <div class="content__main ">
      <!-- <category-selected :category="category"></category-selected> -->
      <base-breadcrumb class="breadcrumb" :breadcrumb-data="breadcrumbData"></base-breadcrumb>
      <div class=" w-100">
        <div class="w-100 content__wrapper">
          <!-- <category-top
              :category-suggestion="categorySuggestion"
              :default-selected-suggestion="defaultSelectedSuggestion"
              @active-cat-suggestion="activeCatSuggestion"
              @show-box-filter="showBoxFilter"
              @show-modal-sort="showModalSort"
            ></category-top> -->

          <div class="content__bg w-100 compare-slider">
            <compare-slider
              :left-value="specificationSliderData.leftValue"
              @slider-changed="compareSliderChanged"
              :move-direction="specificationSliderData.direction"
              :previous-left="specificationSliderData.previousLeftValue"
              :next-button-show="specificationSliderData.nextButtonShow"
              :previous-button-show="specificationSliderData.previousButtonShow"
            ></compare-slider>
          </div>
<!--          <div class="content__bg w-100">-->
<!--            <comparison-product :products="products"></comparison-product>-->
<!--          </div>-->

          <div class="content__bg w-100 specifications">
            <product-specification
                  :left-value="compareSliderData.leftValue"
                  @slider-changed="specificationSliderChanged"
                  :move-direction="compareSliderData.direction"
                  :previous-left="compareSliderData.previousLeftValue"
                  :next-button-show="compareSliderData.nextButtonShow"
                  :previous-button-show="compareSliderData.previousButtonShow"
            ></product-specification>
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
import CompareSlider from "./CompareSlider";
import ProductSpecification from "../Comparison/ProductSpecification";

export default {
  props: {
    products: { type: [Object, Array], default: [] },
    detailTechnical: { type: [Object, Array], default: [] },
  },

  components: {
    ProductSpecification,
    CompareSlider,
    comparisonProduct,
    detailTechnical,
  },

  data() {
    return {
      showModalFilter: false,
      breadcrumbData: [
        {
          id: 1,
          pathName: "لیمو"
        },
        {
          id: 2,
          pathName: "دسته کالاها",
        },
        {
          id: 3,
          pathName: "لوازم جانبی موبایل"
        }
      ],
      compareSliderData: {
        leftValue: null,
        direction: null,
        previousLeftValue: null,
        nextButtonShow: null,
        previousButtonShow: null,
        movePercent: null
      },
      specificationSliderData: {
        leftValue: null,
        direction: null,
        previousLeftValue: null,
        nextButtonShow: null,
        previousButtonShow: null,
        movePercent: null,
      }
    };
  },
  methods: {
    compareSliderChanged(sliderData) {
      this.compareSliderData.leftValue = sliderData.left;
      this.compareSliderData.direction = sliderData.direction;
      if (sliderData.previousLeft) {
        this.compareSliderData.previousLeftValue = sliderData.previousLeft;
      }
      this.compareSliderData.nextButtonShow = sliderData.nextButtonDisplay;
      this.compareSliderData.previousButtonShow = sliderData.previousButtonDisplay;

    },
    specificationSliderChanged(sliderData) {
      this.specificationSliderData.leftValue = sliderData.left;
      this.specificationSliderData.direction = sliderData.direction;
      if (sliderData.previousLeft) {
        this.specificationSliderData.previousLeftValue = sliderData.previousLeft;
      }
      this.specificationSliderData.nextButtonShow = sliderData.nextButtonDisplay;
      this.specificationSliderData.previousButtonShow = sliderData.previousButtonDisplay;



      this.compareSliderData.leftValue = sliderData.left;
      this.compareSliderData.direction = sliderData.direction;
      if (sliderData.previousLeft) {
        this.compareSliderData.previousLeftValue = sliderData.previousLeft;
      }
      this.compareSliderData.nextButtonShow = sliderData.nextButtonDisplay;
      this.compareSliderData.previousButtonShow = sliderData.previousButtonDisplay;

    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 135px;
}
.content__bg {
  background: $white;
  border-radius: toRem(10);
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: toRem(24);
  padding-top: toRem(20);


  &.compare-slider {
    min-width: toRem(965);
    padding: 0;
  }
  &.specifications {
    padding: toRem(24) toRem(24) 0;
    min-width: toRem(965);
  }
}
.content__main {
  flex-wrap: wrap;
  flex-flow: column;
  @include display-flex();
  .breadcrumb {
    margin-top: toRem(16);
    margin-bottom: toRem(16);
  }
}
.content__wrapper {
  min-width: toRem(960);
  flex-wrap: wrap;
  @include display-flex();
  align-items: flex-start;
}

@include md {
  .content {
    margin-top: 0px;
  }
  .content__main {
    margin-top: 45px;
  }
}


</style>
