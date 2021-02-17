<template>
  <div class="w-100 content">
        <div class="content__main ">
            <category-selected :category="category" ></category-selected>
            <div class="content__bg w-100">
                  <div class="w-100 content__wrapper">
                      <category-top
                      :category-suggestion="categorySuggestion"
                      :default-selected-suggestion="defaultSelectedSuggestion"
                      @active-cat-suggestion="activeCatSuggestion"
                      ></category-top>

                      <category-products :category-products="categoryProducts"></category-products>
                  </div>
            </div>
        </div>
  </div>
</template>

<script>
import categorySelected from './categorySelected';
import categoryProducts from './categoryProducts';
import categoryTop from './categoryTop';


export default {
    props: {
      category                   : { type: [Object,Array], default: [] },
      categorySuggestion         : { type: [Object,Array], default: [] },
      defaultSelectedSuggestion  : { type: Object, default: {} },
      categoryProducts           : { type: [Object,Array], default: [] },
    },

    components: {
      categorySelected,
      categoryProducts,
      categoryTop,
    },

    data() {
      return {
      }
    },

    methods: {
      activeCatSuggestion(data){
        this.$emit('active-cat-suggestion',data);
      }
    },

};
</script>

<style lang="scss" scoped>
.content{
  margin-top: 135px;
}
.content__bg{
  background: $white;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 24px;
  padding-left: 24px;
  height: 1566px;
  margin-bottom: 72px;
  border-radius: 10px;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.content__main {
  flex-wrap: wrap;
  flex-flow: column;
  @include display-flex();
}
.content__wrapper{
  flex-wrap: wrap;
  @include display-flex();
  align-items: flex-start;
}


@media (max-width: 1220px) {

}

@media (max-width: 1024px) {

}

@media (max-width: 960px) {
  .content{
    margin-top: 8px;
  }
}

@media (max-width: 600px) {

}

@media (max-width: 485px) {

}


</style>
