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
    props: {
      category  : { type: [Object,Array], default: [] },
    },
};
</script>

<style lang="scss" scoped>
  .category{
    @include display-flex();
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: toRem(20);
    margin-bottom: toRem(20);
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
    font-size: toRem(12);
    color: $color_category;
    font-weight: 300;
  }
  .category--arrow::after {
    content: "\e801";
    @include font-icon__limoo();
    font-size: toRem(9);
    margin-top: toRem(1);
    color: $color-gray;
  }
  .category__icon{
    @include display-flex();
    margin-right: toRem(7);
    margin-left: toRem(5);
  }
  .category__item:last-of-type .category__icon{
    display: none;
  }

  @include xs {
    .category{
      background: $white;
      margin:0;
      padding: toRem(8) toRem(14) toRem(17);
      border-top-right-radius: toRem(10);
      border-top-left-radius: toRem(10);
    }
    .category__title{
      font-size: toRem(10);
    }
  }



</style>
