<template>
  <div class="w-100 productContent">

      <div class="productContent__items w-100">
            <div class="productContent__right">
              <counter-down></counter-down>
            </div>

            <div class="productContent__left">
              <product-slider :products="products"></product-slider>
              <div class="w-100 productContent__sliderMore">
                  <nuxt-link class="productContent__moreItem" to="/">
                    لیست کامل محصولات
                    <span class="icon-arrow productContent__moreIcon"></span>
                  </nuxt-link>
              </div>
            </div>
      </div>

  </div>
</template>

<script>
import counterDown from './counterDown';
import productSlider from './productSlider';


export default {
    components: {
      counterDown,
      productSlider,
    },

    props: {
      products   : { type: [Object,Array], default: [] },
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
  margin-top: 40px;
  background: $white;
  border-radius: 12px;
  height: 387px;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.productContent__items{
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
  padding-top: 38px;
  padding-bottom: 38px;
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
  @include display-flex();
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-left: 23px;
}
.productContent__moreItem{
  font-size: 13px;
  color: $gray;
  border-bottom: none;
  text-decoration: none;
}
.productContent__moreIcon{
  @include display-flex();
  width: 10px;
  height: 11px;
}




@media (max-width: 1450px) {

}

@media (max-width: 1220px) {

}

@media (max-width: 960px) {
  .productContent{
    margin-top: 7.48px;
  }
}

@media (max-width: 600px) {

}

@media (max-width: 460px) {

}

@media (max-width: 350px) {

}

@media (max-width: 320px) {

}


</style>
