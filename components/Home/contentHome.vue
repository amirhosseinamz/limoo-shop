<template>
  <div class="w-100 page__home-wrapper-main">
    <div class="page__home-introduction-main w-100">

      <introduction-items
        :title="{sliderItemHref:'category' }"
        :left-slider-header-img="leftSliderHeaderImg"

      ></introduction-items>

      <product-content
        :status-show-counter-down="true"
        name-element-find-slider="productContent__mainSlider1"
        remove-margin-top=""
        :more-text="getTextByTextKey('home_category_all')"
        :title="{title:'',href:'',titleVisit:'',sliderItemHref:'product'}"
      ></product-content>


      <product-cat
        name-element-find-slider="productContent__mainCat1"
        :more-text="getTextByTextKey('home_category_all')"
        :title="{title:getTextByTextKey('home_category_title') , href:'catHref' , titleVisit:'',sliderItemHref:'category' , sliderItemHref:'product1'}"
      ></product-cat>

      <product-vertical-content
        :more-text="getTextByTextKey('home_complete_list_products')"
        :title="{title:'موبایل اندرویدی' , href:'verticalAll' , titleVisit:'',sliderItemHref:'category' , sliderItemHref:'product-vertical'}"
      ></product-vertical-content>

      <banner-items
        :banner-category="bannerCategory"
      ></banner-items>

      <product-content
        :status-show-counter-down="false"
        name-element-find-slider="productContent__mainSlider2"
        remove-margin-top="productContent__updateMargin"
        :more-text="getTextByTextKey('home_complete_list_products')"
        :title="{title:'موبایل تستی 2',href:'test',titleVisit:'پر فروش ترین محصولات' , sliderItemHref:'product2'}"
      ></product-content>

      <product-content
        :status-show-counter-down="false"
        name-element-find-slider="productContent__mainSlider3"
        remove-margin-top="productContent__updateMargin"
        :more-text="getTextByTextKey('home_complete_list_products')"
        :title="{title:'تستی 3',href:'test',titleVisit:'پر فروش ترین محصولات' , sliderItemHref:'product3'}"
      ></product-content>

      <banner-2-items :banner-vertical-product="bannerVerticalProduct"></banner-2-items>

      <div class="w-100 product__vertical-main">
        <div class="product__vertical-right">
          <product-vertical-2-content
            :description-show="false"
            :more-text="getTextByTextKey('home_complete_list_products')"
            :title="{title:'موبایل اندرویدی' , href:'verticalAll' , titleVisit:'تجهیزات پخت و پز ایرانی 1',sliderItemHref:'category' , sliderItemHref:'product-vertical'}"
          ></product-vertical-2-content>
        </div>

        <div class="product__vertical-left">
          <product-vertical-2-content
            :description-show="false"
            :more-text="getTextByTextKey('home_complete_list_products')"
            :title="{title:'موبایل اندرویدی' , href:'verticalAll' , titleVisit:'تجهیزات پخت و پز ایرانی 2',sliderItemHref:'category' , sliderItemHref:'product-vertical'}"
          ></product-vertical-2-content>
        </div>
      </div>

      <banner-3-items :banner-blog="bannerBlog"></banner-3-items>


      <product-content
        :status-show-counter-down="false"
        name-element-find-slider="productContent__mainSlider10"
        remove-margin-top="productContent__updateMargin"
        :more-text="getTextByTextKey('home_complete_list_products')"
        :title="{title:'موبایل تستی 2',href:'test',titleVisit:'پر فروش ترین محصولات' , sliderItemHref:'product2'}"
      ></product-content>


      <blog-content
        :status-show-counter-down="false"
        :more-text="getTextByTextKey('home_blog_all')"
        :more-single-item-text="getTextByTextKey('home_blog_single_more')"
        name-element-find-slider="productContent__mainSliderBlog"
        :title="{title:getTextByTextKey('home_blog_title'),href:'test',titleVisit:getTextByTextKey('home_blog_description'), sliderItemHref:'blog'}"
      ></blog-content>

      <!-- the brand slider -->
      <product-cat
        name-element-find-slider="productContent__mainCat2"
        change-style="productContent__catChangeStyle"
        :more-text="getTextByTextKey('home_brand_all')"
        :title="{title:getTextByTextKey('home_brand_title') ,  href:'#' , titleVisit:getTextByTextKey('home_brand_description') , sliderItemHref:'brand'}"
      ></product-cat>


      <div class="w-100 product__vertical-main product__vertical-desktop">
        <div class="product__vertical-right">
          <product-vertical-2-content
            :more-text="getTextByTextKey('home_complete_list_products')"
            :description-show="true"
            :title="{title:'موبایل اندرویدی' , href:'verticalAll' , titleVisit:'تجهیزات پخت و پز ایرانی 1',sliderItemHref:'category' , sliderItemHref:'product-vertical'}"
          ></product-vertical-2-content>
        </div>

        <div class="product__vertical-left">
          <product-vertical-2-content
            :more-text="getTextByTextKey('home_complete_list_products')"
            :description-show="true"
            :title="{title:'موبایل اندرویدی' , href:'verticalAll' , titleVisit:'تجهیزات پخت و پز ایرانی 2',sliderItemHref:'category' , sliderItemHref:'product-vertical'}"
          ></product-vertical-2-content>
        </div>
      </div>

      <question-content
        :more-text="getTextByTextKey('home_question_all')"
        :title="getTextByTextKey('home_question_title')"
      ></question-content>


      <brand-introduction-content></brand-introduction-content>


    </div>
  </div>
</template>

<script>
import introductionItems from "./introductionItems";
import bannerItems from "./bannerItems";
import banner2Items from "./banner2Items";
import banner3Items from "./banner3Items";
import productContent from "./productContent";
import productCat from "./productCat";
import productVerticalContent from "./productVerticalContent";
import questions from "./questions";
import questionContent from "./questionContent";
import brandIntroductionContent from "./brandIntroductionContent";
import blogContent from "./blogContent";
import productVertical2Content from "./productVertical2Content";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";


export default {
  props: {
    leftSliderHeaderImg: { type: [Object, Array], default: [] },
    bannerCategory: { type: [Object, Array], default: [] },
    bannerVerticalProduct: { type: [Object, Array], default: [] },
    bannerBlog: { type: [Object, Array], default: [] },
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
    blogContent,
    productVertical2Content,
  },

  methods: {
    getTextByTextKey,
  },

};
</script>

<style lang="scss" scoped>
.page__home-wrapper-main {
  margin-top: toRem(175);
}

.product__vertical-main {
  @include display-flex();
  align-items: flex-start;
}

.product__vertical-right {
  margin-left: toRem(30);
}


@media (max-width: 985px) {
  .product__vertical-desktop {
    display: none;
  }
}

@include md {
  .page__home-wrapper-main {
    margin-top: 8px;
  }
  .product__vertical-main {
    flex-flow: column;
  }
  .product__vertical-right {
    margin-left: 0px;
  }

}

@media (max-width: 485px) {
  .page__home-wrapper-main {
    margin-top: 8px;
  }
}


</style>
