<template>
  <div class="w-100 page__home-wrapper-main">
        <div class="page__home-introduction-main w-100">
            <introduction-items></introduction-items>

            <product-content
              :products="products"
              :status-show-counter-down="true"
              name-element-find-slider="productContent__mainSlider1"
              remove-margin-top=""
              :title="{title:'',href:'',titleVisit:''}"
             ></product-content>

            <product-cat
             :all-category="allCategory"
             name-element-find-slider="productContent__mainCat1"
             :title="{title:'دسته بندی محصولات' , href:'#' , titleVisit:'',sliderItemHref:'category' }"
             ></product-cat>

            <product-vertical-content :products="allProductVertical" ></product-vertical-content>

            <banner-items></banner-items>

            <product-content
            :products="products"
            :status-show-counter-down="false"
            name-element-find-slider="productContent__mainSlider2"
            remove-margin-top="productContent__updateMargin"
            :title="{title:'موبایل تستی 2',href:'test',titleVisit:'پر فروش ترین محصولات'}"
            ></product-content>

            <product-content
            :products="products"
            :status-show-counter-down="false"
            name-element-find-slider="productContent__mainSlider3"
            remove-margin-top="productContent__updateMargin"
            :title="{title:'تستی 3',href:'test',titleVisit:'پر فروش ترین محصولات'}"
            ></product-content>

            <question-content
            :all-question="allQuestion"
            ></question-content>

            <banner-2-items></banner-2-items>

            <banner-3-items></banner-3-items>

            <product-cat
             :all-category="allBrand"
             name-element-find-slider="productContent__mainCat2"
             change-style            ="productContent__catChangeStyle"
            :title="{title:'برند های لیمویی' ,  href:'#' ,titleVisit:'لیست برتر برند های در لیمو',sliderItemHref:'brand'}"
            ></product-cat>

            <brand-introduction-content :products="brandIntroduction"></brand-introduction-content>


        </div>
  </div>
</template>

<script>
import introductionItems from './introductionItems';
import bannerItems from './bannerItems';
import banner2Items from './banner2Items';
import banner3Items from './banner3Items';
import productContent from './productContent';
import productCat from './productCat';
import productVerticalContent from './productVerticalContent';
import questions from './questions';
import questionContent from './questionContent';
import brandIntroductionContent from './brandIntroductionContent';


export default {
    props: {
      products             : { type: [Object,Array], default: [] },
      allCategory          : { type: [Object,Array], default: [] },
      allProductVertical   : { type: [Object,Array], default: [] },
      allBrand             : { type: [Object,Array], default: [] },
      brandIntroduction    : { type: [Object,Array], default: [] },
      allQuestion          : { type: [Object,Array], default: [] },

    },

    components: {
      introductionItems,
      bannerItems,
      banner2Items,
      banner3Items,
      productContent,
      productCat,
      productVerticalContent,
      questions,
      questionContent,
      brandIntroductionContent,
    },

    data() {
      return {
      }
    },

    components: {

    },

    computed: {

    },

    methods: {

    },

};
</script>

<style lang="scss" scoped>
  .page__home-wrapper-main{
    margin-top: 175px;
  }

  @media (max-width: 1220px) {

  }

  @media (max-width: 1024px) {

  }

  @media (max-width: 960px) {
    .page__home-wrapper-main{
      margin-top: 8px;
    }
  }

  @media (max-width: 600px) {

  }

  @media (max-width: 485px) {
    .page__home-wrapper-main{
      margin-top: 8px;
    }
  }


</style>
