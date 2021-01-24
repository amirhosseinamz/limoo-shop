<template>
  <div class="w-100 page__home-wrapper-main">
        <div class="page__home-introduction-main w-100">
            <introduction-items></introduction-items>
        </div>

        <div class="w-100 page__home-products-main">
          <h3>fsf</h3>
        </div>
  </div>
</template>

<script>
import introductionItems from './introductionItems';


export default {
    props: {
      // allProvince           : { type: [Object,Array], default: [] },
    },

    components: {
      introductionItems,
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
    margin-top: 170px;
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
