<template>
  <div class="product__single w-100">
    <div class="product__single-category w-100">

    </div>

    <div class="product__single-content w-100">

      <div class="product__single-right">
        <div class="product--single__right-content">
          <productPic @active-item-slider-nav="activeItemSliderNav" :product-slider="productSlider"></productPic>
        </div>
      </div>

      <div class="product__single-left">

        <div class="product__data-content w-100">
          <div class="product__single-top w-100">
            <h3 class="product__top-title">مک بوک پرو 16 اینچ با تاچ بار مدل 9102 مک بوک پرو 16 اینچ رتینا با تاچ بار
              مدل 2019 طرح جدید</h3>
            <h3 class="product__top-brand">Apple AirPods Max- Sliver - MGYJ3</h3>
          </div>

          <sliderSingleProduct :products="productSliderMobile"></sliderSingleProduct>
          <productDetail :product-data="productData"></productDetail>
          <product-colors class="product-colors w-100"></product-colors>
          <product-warranty class="product-warranty w-100"></product-warranty>
          <product-specification></product-specification>

        </div>
      </div>
    </div>
    <div class="tab--content product__single-content w-100">
      <base-tabs
        :tabs="tabsNames"
        :selected="selected"
        @change-tab="tabChanged"
        class="tabs w-100"
        tabs-item-class="tabs__item tabs__item-title"
        tabs-class="tabs-navigator tabs__main"
      >
        <tab-content :name="tabsNames[0]" :isSelected="selected === tabsNames[0]">
          <full-presentation class="show--tab"></full-presentation>
        </tab-content>

        <tab-content :name="tabsNames[1]" :isSelected="selected === tabsNames[1]">
          <detail-technical
            :product-data="productDetailTechnical"
          ></detail-technical>
        </tab-content>
      </base-tabs>


    </div>


    <div class="tab--content product__single-content w-100 tab--comment">
      <comment-question-main
        :comment-data="commentData"
        :product-data="productData"
        @more-comment="moreComment"
        @more-comment-mobile="moreCommentMobile"
        @submit-data="submitData"
      ></comment-question-main>
    </div>


  </div>
</template>
<script>
import productPic from "./productPic";
import productDetail from "./productDetail";
import sliderSingleProduct from "./sliderSingleProduct";
import commentQuestionMain from "./commentQuestionMain";
import FullPresentation from "./fullPresentation";
import DetailTechnical from "./detailTechnical";
import ProductColors from "./ProductColors";
import ProductWarranty from "./ProductWarranty";
import ProductSpecification from "./ProductSpecification";


export default {
  props: {
    productData: { type: [Object, Array], default: [] },
    productSliderMobile: { type: [Object, Array], default: [] },
    productSlider: { type: [Object, Array], default: [] },
    productDetailTechnical: { type: [Object, Array], default: [] },
    commentData: { type: [Object, Array], default: [] },

  },

  components: {
    ProductSpecification,
    ProductWarranty,
    ProductColors,
    DetailTechnical,
    FullPresentation,
    productPic,
    productDetail,
    sliderSingleProduct,
    commentQuestionMain,
  },

  data() {
    return {
      tabsNames: ["معرفی کامل محصول", "مشخصات فنی محصول"],
      selected: "معرفی کامل محصول",
    };
  },
  methods: {
    tabChanged(val) {
      this.selected = val;
    },
    activeItemSliderNav(data) {
      this.$emit("active-item-slider-nav", data);
    },

    moreComment(page) {
      this.$emit("more-comment", page);
    },

    moreCommentMobile() {
      this.$emit("more-comment-mobile");
    },

    submitData(data) {
      this.$emit("submit-data", data);
    },

  },
  mounted() {
    //console.log(window.innerWidth);
  }
};
</script>

<style lang="scss" scoped>
.tabs__main {
  width: 100%;
  @include display-flex();
  align-items: flex-start;
  border-bottom: solid toRem(1) $gray-border;
}
.tabs__item {
  margin-left: toRem(70);
}
.tabs__item-title {
  font-size: toRem(18);
}

.product__single {
  margin-top: toRem(160);
}

.product__single-category {
  @include display-flex();
  align-items: flex-start;
}

.product__single-content {
  @include display-flex();
  align-items: flex-start;
  background: $white;
  padding-bottom: toRem(22);
  padding-top: toRem(22);
  margin-bottom: toRem(19);
  flex-wrap: wrap;
  padding-right: toRem(16);
  border-radius: toRem(10);
}

.product__single-right {
  width: 39.6%;
  @include display-flex();
  align-items: flex-start;
}

.product__single-left {
  width: 60%;
  @include display-flex();
  align-items: flex-start;
}

.product__top-title {
  margin-bottom: toRem(8);
  font-size: toRem(24);
  line-height: toRem(42.75);
  color: $black;
  font-weight: 400;
  width: 95%;
}

.product__top-brand {
  color: $gray;
  font-weight: 400;
  font-size: toRem(13);
}

.product__data-content {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: toRem(30);
  padding-right: toRem(24);
  padding-left: toRem(24);
}

.product__single-top {
  width: 100%;
}

.product--single__right-content {
  width: 100%;
  border: solid toRem(1) $gray-border;
  border-radius: toRem(10);
}
.tab--content::v-deep {
  padding: 0 toRem(24);
  .tabs-navigator {
    height: toRem(70);
  }
  .tabs__content {
    position: static;
  }
}

.tab--content:first-child {
  padding: 0 toRem(24);
}
.tab--content:nth-child(2) {
  padding: toRem(24) 0;
}
.product-colors {
  margin-bottom: toRem(24);
}
.product-warranty {
  margin-bottom: toRem(40);
}

@include lg {
  .product__top-title {
    font-size: toRem(17);
  }
  .product__single-right {
    width: 30%;
  }
  .product__single-left {
    width: 70%;
  }
}

@include md {
  .product__single {
    margin-top: toRem(8);
  }
  .product__top-title {
    font-size: toRem(14);
  }
}

@include sm {
  .tab--content::v-deep {
    .tabs__main {
      display: none;
    }
  }
  .product__single-right {
    display: none;
  }
  .product__single-left {
    width: 100%;
  }
  .product__data-content {
    padding-right: 0;
    padding-left: 0;
    display: inline;
  }
  .product__single-content {
    padding: toRem(8) toRem(11);
    margin-bottom: 0;
  }
  .product__top-title {
    line-height: toRem(28);
    margin-bottom: toRem(2);
  }
  .tab--content {
    padding: 0 toRem(8);
    margin-bottom: toRem(8);
  }
  .tab--content:last-of-type {
    margin-bottom: 0;
  }
  .tab--comment {
    padding-right: 0;
    padding-left: 0;
  }
}
@include xs {
  .product-warranty {
    margin-bottom: toRem(16);
  }
}

</style>
