<template>
  <div class="w-100 page__home-wrapper-main">
        <div class="page__home-introduction-main w-100">
            <introduction-items
             :introduction-product="introductionProduct"
             :title="{sliderItemHref:'category' }"
             :left-slider-header-img="leftSliderHeaderImg"

             ></introduction-items>

            <product-content
              :products="products"
              :status-show-counter-down="true"
              name-element-find-slider="productContent__mainSlider1"
              remove-margin-top=""
              :title="{title:'',href:'',titleVisit:'',sliderItemHref:'product'}"
             ></product-content>

            <product-cat
             :all-category="allCategory"
             name-element-find-slider="productContent__mainCat1"
             :title="{title:'دسته بندی محصولات' , href:'catHref' , titleVisit:'',sliderItemHref:'category' , sliderItemHref:'product1'}"
             ></product-cat>

            <product-vertical-content
             :products="allProductVertical"
             :title="{title:'موبایل اندرویدی' , href:'verticalAll' , titleVisit:'',sliderItemHref:'category' , sliderItemHref:'product-vertical'}"
              ></product-vertical-content>

            <banner-items
            :banner-category="bannerCategory"
            ></banner-items>

            <product-content
            :products="products"
            :status-show-counter-down="false"
            name-element-find-slider="productContent__mainSlider2"
            remove-margin-top="productContent__updateMargin"
            :title="{title:'موبایل تستی 2',href:'test',titleVisit:'پر فروش ترین محصولات' , sliderItemHref:'product2'}"
            ></product-content>

            <product-content
            :products="products"
            :status-show-counter-down="false"
            name-element-find-slider="productContent__mainSlider3"
            remove-margin-top="productContent__updateMargin"
            :title="{title:'تستی 3',href:'test',titleVisit:'پر فروش ترین محصولات' , sliderItemHref:'product3'}"
            ></product-content>

            <banner-2-items :banner-vertical-product="bannerVerticalProduct"></banner-2-items>

            <div class="w-100 product__vertical-main">
                <div class="product__vertical-right">
                  <product-vertical-2-content
                  :products="allProductMultiVertical"
                  :description-show="false"
                  :title="{title:'موبایل اندرویدی' , href:'verticalAll' , titleVisit:'تجهیزات پخت و پز ایرانی 1',sliderItemHref:'category' , sliderItemHref:'product-vertical'}"
                  ></product-vertical-2-content>
                </div>

                <div class="product__vertical-left">
                  <product-vertical-2-content
                  :products="allProductMultiVertical"
                  :description-show="false"
                  :title="{title:'موبایل اندرویدی' , href:'verticalAll' , titleVisit:'تجهیزات پخت و پز ایرانی 2',sliderItemHref:'category' , sliderItemHref:'product-vertical'}"
                  ></product-vertical-2-content>
                </div>
            </div>

            <banner-3-items :banner-blog="bannerBlog"></banner-3-items>


            <product-content
            :products="products"
            :status-show-counter-down="false"
            name-element-find-slider="productContent__mainSlider10"
            remove-margin-top="productContent__updateMargin"
            :title="{title:'موبایل تستی 2',href:'test',titleVisit:'پر فروش ترین محصولات' , sliderItemHref:'product2'}"
            ></product-content>

            <blog-content
            :products="allBlogProduct"
            :status-show-counter-down="false"
            name-element-find-slider="productContent__mainSliderBlog"
            :title="{title:'بلاگ لیمو',href:'test',titleVisit:'آخرین رویداد های اپل' , sliderItemHref:'blog'}"
            ></blog-content>

            <product-cat
             :all-category="allBrand"
             name-element-find-slider="productContent__mainCat2"
             change-style            ="productContent__catChangeStyle"
            :title="{title:'برند های لیمویی' ,  href:'#' ,titleVisit:'لیست برتر برند های در لیمو',sliderItemHref:'brand'}"
            ></product-cat>

            <div class="w-100 product__vertical-main product__vertical-desktop">
                <div class="product__vertical-right">
                    <product-vertical-2-content
                    :products="allProductVerticalDescription"
                    :description-show="true"
                    :title="{title:'موبایل اندرویدی' , href:'verticalAll' , titleVisit:'تجهیزات پخت و پز ایرانی 1',sliderItemHref:'category' , sliderItemHref:'product-vertical'}"
                    ></product-vertical-2-content>
                </div>

                <div class="product__vertical-left">
                  <product-vertical-2-content
                  :products="allProductVerticalDescription"
                  :description-show="true"
                  :title="{title:'موبایل اندرویدی' , href:'verticalAll' , titleVisit:'تجهیزات پخت و پز ایرانی 2',sliderItemHref:'category' , sliderItemHref:'product-vertical'}"
                  ></product-vertical-2-content>
                </div>
            </div>

            <question-content
            :all-question="allQuestion"
            ></question-content>


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
import blogContent from './blogContent';
import productVertical2Content from './productVertical2Content';


export default {
    props: {
      products                       : { type: [Object,Array], default: [] },
      allCategory                    : { type: [Object,Array], default: [] },
      allProductVertical             : { type: [Object,Array], default: [] },
      allBrand                       : { type: [Object,Array], default: [] },
      brandIntroduction              : { type: [Object,Array], default: [] },
      allQuestion                    : { type: [Object,Array], default: [] },
      allBlogProduct                 : { type: [Object,Array], default: [] },
      introductionProduct            : { type: [Object,Array], default: [] },
      allProductMultiVertical        : { type: [Object,Array], default: [] },
      allProductVerticalDescription  : { type: [Object,Array], default: [] },
      leftSliderHeaderImg            : { type: [Object,Array], default: [] },
      bannerCategory                 : { type: [Object,Array], default: [] },
      bannerVerticalProduct          : { type: [Object,Array], default: [] },
      bannerBlog                     : { type: [Object,Array], default: [] },
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
  .product__vertical-main{
    @include display-flex();
    align-items: flex-start;
  }
  .product__vertical-right{
    margin-left: 30px;
  }


  @media (max-width: 1220px) {

  }

  @media (max-width: 1024px) {

  }

  @media (max-width: 985px) {
    .product__vertical-desktop{
      display: none;
    }
  }

  @media (max-width: 960px) {
    .page__home-wrapper-main{
      margin-top: 8px;
    }
    .product__vertical-main{
      flex-flow: column;
    }
    .product__vertical-right{
      margin-left: 0px;
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
