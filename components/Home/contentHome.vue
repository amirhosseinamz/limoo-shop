<template>
  <div class="w-100 page__home-wrapper-main">
        <div class="page__home-introduction-main w-100">
            <introduction-items></introduction-items>
            <product-content></product-content>
            <banner-items></banner-items>
            <banner-2-items></banner-2-items>
            <banner-3-items></banner-3-items>
        </div>


  </div>
</template>

<script>
import introductionItems from './introductionItems';
import bannerItems from './bannerItems';
import banner2Items from './banner2Items';
import banner3Items from './banner3Items';
import productContent from './productContent';


export default {
    props: {
      // allProvince           : { type: [Object,Array], default: [] },
    },

    components: {
      introductionItems,
      bannerItems,
      banner2Items,
      banner3Items,
      productContent,
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


  @media (max-width: 960px) {
    .page__home-wrapper-main{
      margin-top: 16px;
    }
  }

  @media (max-width: 1220px) {

  }

  @media (max-width: 1024px) {

  }

  @media (max-width: 960px) {

  }

  @media (max-width: 600px) {

  }


</style>
