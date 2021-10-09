<template>
  <div class="w-100 content">
    <div class="content__main ">
      <base-breadcrumb class="breadcrumb" :breadcrumb-data="breadcrumbData"></base-breadcrumb>
      <div class=" w-100">
        <div class="w-100 content__wrapper">
          <div class="content__bg w-100 compare-slider">
            <compare-slider
              @slider-changed="compareSliderChanged"
              :move-direction="specificationSliderData.direction"
              :another-slider-counter="specificationSliderData.slideCounter"
              :modal-products="products"
            ></compare-slider>
          </div>
<!--          <div class="content__bg w-100">-->
<!--            <comparison-product :products="products"></comparison-product>-->
<!--          </div>-->

          <div class="content__bg w-100 specifications">
            <product-specification
                  @slider-changed="specificationSliderChanged"
                  :move-direction="compareSliderData.direction"
                  :another-slider-counter="compareSliderData.slideCounter"
            ></product-specification>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comparisonProduct from "~/components/Comparison/comparisonProduct.vue";
import CompareSlider from "./CompareSlider";
import ProductSpecification from "../Comparison/ProductSpecification";

export default {
  props: {
    products: { type: [Object, Array], default: [] },
  },

  components: {
    ProductSpecification,
    CompareSlider,
    comparisonProduct,
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
        direction: null,
        slideCounter: 0,
      },
      specificationSliderData: {
        direction: null,
        slideCounter: 0,
      }
    };
  },
  methods: {
    compareSliderChanged(sliderData) {
      this.compareSliderData.direction = sliderData.direction;
      if (sliderData.direction === "next") {
        this.compareSliderData.slideCounter++;
      } else {
        this.compareSliderData.slideCounter--;
      }
    },
    specificationSliderChanged(sliderData) {
      this.specificationSliderData.direction = sliderData.direction;
      if (sliderData.direction === "next") {
        this.specificationSliderData.slideCounter++;
      } else {
        this.specificationSliderData.slideCounter--;
      }
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
