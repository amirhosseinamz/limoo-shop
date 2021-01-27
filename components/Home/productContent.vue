<template>
  <div class="w-100 productContent">

      <div class="productContent__items w-100">
            <div class="productContent__right">
              <counter-down></counter-down>
            </div>

            <div class="productContent__left">
              <product-slider :products="products"></product-slider>
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
}
.productContent__right{
  width: 246px;
  @include display-flex();
  align-items: flex-start;
}


</style>
