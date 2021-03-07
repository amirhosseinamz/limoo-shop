<template>
  <div class="w-100 productContent">

      <div class="productContent__items w-100">
            <div class="productContent__left">

                  <div class="w-100 product__vertical-main">
                        <product-vertical2 :products="products" :title="title"></product-vertical2>
                  </div>

                  <div class="w-100">
                      <div class="w-100 productContent__sliderMore">
                        <nuxt-link class="productContent__moreItem" :to="title.href">
                          لیست کامل محصولات
                          <span class=" productContent__moreIcon mobile-inprogress__arrow"></span>
                        </nuxt-link>
                      </div>
                  </div>

            </div>
      </div>

  </div>
</template>

<script>
import productVertical2 from './productVertical2';


export default {
    components: {
      productVertical2,
    },

    props: {
      products   : { type: [Object,Array], default: [] },
      title      : { type: Object, default: {} },
    },

    data() {
      return {
      }
    },

    mounted() {
    },

    computed: {

    },

    methods: {

    },

};
</script>

<style lang="scss" scoped>
.productContent{
  background: $white;
  border-radius: 12px;
  // height: 401px;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 40px;

}
.productContent__items{
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
  padding-top: 24px;
  padding-bottom: 24px;
}
.productContent__left{
  flex-grow: 1;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.productContent__right{
  width: 246px;
  @include display-flex();
  align-items: flex-start;
}
.productContent__sliderMore{
  align-items: flex-start;
  display: none;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-left: 13px;
}
.productContent__moreItem{
  font-size: 13px;
  color: $gray;
  border-bottom: none;
  text-decoration: none;
  @include display-flex();
  align-items: center;
}
.productContent__moreIcon{
  @include display-flex();
  margin-right: 6px;
}
.mobile-inprogress__arrow::after {
    content: "\e801";
    @include font-icon__limoo();
    font-size: 12px;
    margin-top: 1px;
}
.productContent__desktop{
  @include display-flex();
}
.productContent__mobile{
  display: none;
}
.product__vertical-left .productContent{
  margin-bottom: 0 !important;
  margin-top: 0 !important;
}

@media (max-width: 1450px) {

}

@media (max-width: 1220px) {

}

@media (max-width: 960px) {
  .productContent__right{
    width: 100%;
    padding-right: 11px;
    padding-left: 11px;
  }
  .productContent__left{
    width: 100%;
  }
  .productContent__desktop{
    display: none;
  }
  .productContent__mobile{
    @include display-flex();
  }
  .productContent{
    height: auto;
  }
  .productContent__sliderMore{
    margin-top: 25px;
  }
  .productContent__items{
    padding-top: 16px;
    padding-bottom: 16px;
  }



}

@media (max-width: 860px) {
}

@media (max-width: 485px) {
  .productContent__sliderMore{
    display: flex;
  }
  .productContent{
    margin-bottom: 8px;
    margin-top: 8px;
  }

}

@media (max-width: 350px) {

}

@media (max-width: 320px) {

}


</style>
