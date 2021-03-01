<template>
  <div class="w-100 category" >
        <div class="category__wrapper w-100">
                <div class="w-100 category__items">
                      <div v-for="data in category" :key="data.id" class="category__item">
                          <h3 class="category__title">{{data.title}}</h3>
                          <span class="category__icon category--arrow"></span>
                      </div>
                </div>
        </div>
  </div>
</template>

<script>


export default {
    components: {
    },

    props: {
      category  : { type: [Object,Array], default: [] },
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
  .category{
    @include display-flex();
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .category__wrapper{
    @include display-flex();
  }
  .category__items{
    @include display-flex();
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .category__item{
    @include display-flex();
    align-items: center;
    justify-content: center;
  }
  .category__title{
    font-size: 12px;
    color: $color_category;
    font-weight: 300;
  }
  .category--arrow::after {
    content: "\e801";
    @include font-icon__limoo();
    font-size: 9px;
    margin-top: 1px;
    color: $color-gray;
  }
  .category__icon{
    @include display-flex();
    margin-right: 7px;
    margin-left: 5px;
  }
  .category__item:last-of-type .category__icon{
    display: none;
  }

  @media (max-width: 960px) {

  }

  @media (max-width: 485px) {
    .category{
      background: $white;
      margin:0;
      padding-top: 8px;
      padding-bottom: 17px;
      padding-right: 14px;
      padding-left: 14px;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
    .category__title{
      font-size: 10px;
    }
  }



</style>
