<template>
  <div :class="changeStyle" class="w-100 productContent">

      <div class="productContent__items w-100">
        <product-cat-content :all-category="allCategory" :name-element-find-slider="nameElementFindSlider" :title="title"></product-cat-content>
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
      allCategory             : { type: [Object,Array], default: [] },
      nameElementFindSlider   : { type: String, default: '' },
      changeStyle             : { type: String, default: '' },
      title                   : { type: Object, default: {} },
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
.productContent__catChangeStyle{
  margin-bottom: 40px;
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
  .productContent__catChangeStyle{
    display: none;
  }
  .productContent{
    margin-top: 8px;
  }
  .productContent__catChangeStyle{
    margin-bottom: 8px;
    margin-top: 8px;
  }

}

@media (max-width: 350px) {

}

@media (max-width: 320px) {

}


</style>
