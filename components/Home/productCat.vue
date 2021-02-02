<template>
  <div class="w-100 productContent">

      <div class="productContent__items w-100">
        <product-cat-content :all-category="allCategory"></product-cat-content>
      </div>

  </div>
</template>

<script>
import productCatContent from './productCatContent';


export default {
    components: {
      productCatContent,
    },

    props: {
      allCategory   : { type: [Object,Array], default: [] },
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
  height: 281px;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.productContent__items{
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
  padding-top: 0px;
  padding-bottom: 0px;
  height: 100%;
}







@media (max-width: 1450px) {

}

@media (max-width: 1220px) {

}

@media (max-width: 960px) {

}

@media (max-width: 600px) {

}

@media (max-width: 485px) {
  .productContent{
    margin-top: 8px;
  }
  .productContent{
    height: 231px;
  }
}

@media (max-width: 350px) {

}

@media (max-width: 320px) {

}


</style>
