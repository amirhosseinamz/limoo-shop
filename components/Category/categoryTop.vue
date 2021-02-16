<template>
  <div class="w-100">

    <div class="products__top w-100">

          <div class="products__top-title w-100 ">
            <h3 class="products__top-text">موبایل اندرویدی</h3>
          </div>

        <div class="products__filter-btns w-100 ">
            <button class="products__filter-btn" type="button">
              <img class="products__filter-icon" src="/icons/filter_search_icon.svg" alt="">
              <h3 class="products__filter-text">فیلتر جستجو</h3>
            </button>
            <button class="products__filter-btn btn--filter-gray" type="button">
              <img class="products__filter-icon" src="/icons/arrow-filter.svg" alt="">
              <h3 class="products__filter-text">جدید ترین ها</h3>
            </button>
        </div>

        <div class="products__suggestions w-100">
            <div :class="{'products__suggestions-active' : data.active}" @click="activeSuggestion(data)" v-for="data in allCategorySuggestion" :key="data.id" class="products__suggestion-item ">
              <h3 class="products__suggestion-title">{{data.title}}</h3>
            </div>
        </div>

    </div>

  </div>
</template>

<script>

export default {
  props: {
    categorySuggestion         : { type: [Object,Array], default: [] },
    defaultSelectedSuggestion  : { type: Object, default: {} },
  },

  components: {
  },

  data() {
    return {
      allCategorySuggestion : [],
    }
  },

  watch: {
    categorySuggestion(data) {
      this.allCategorySuggestion = data;
    },
  },

  mounted() {
    if (this.categorySuggestion.length != 0) {
      this.allCategorySuggestion = this.categorySuggestion;
    }
  },

  methods: {
    activeSuggestion(data){
      let updateCategorySuggestion = [];
      this.allCategorySuggestion.map((content)=>{
        if (content.id == data.id) {
          content.active             = true;
          this.$emit('active-cat-suggestion',content);
        }
        else {
          content.active = false;
        }

        updateCategorySuggestion = [...updateCategorySuggestion,content];
      })

      this.allCategorySuggestion = updateCategorySuggestion;
    }
  },

};
</script>

<style lang="scss" scoped>
.products__filter-btns{
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
}
.products__filter-btn{
  margin-left: 21px;
  background: $btn__green;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 20px;
  padding-left: 20px;
  border:none;
  border-radius: 10px;
  outline: none;
  font-family: inherit;
  width: 207px;
  height: 47px;
  @include display-flex();
  align-items: center;
  cursor: pointer;
}
.btn--filter-gray{
  background: $dark_gray;
}
.products__filter-text{
  font-size: 16px;
  color: $white;
  font-weight: 400;
  font-family: inherit;
  margin-right: 10px;
}
.products__top-text{
  font-size: 18px;
  color: $dark_gray;
  font-weight: 400;
  font-family: inherit;
}
.products__top-title{
  margin-bottom: 24px;
}
.products__suggestions {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 30px;
}
.products__suggestion-item{
  font-family: inherit;
  border-radius: 10px;
  border:solid 1px $light-gray;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-right: 30px;
  padding-left: 30px;
  margin-left: 8px;
  cursor: pointer;
}
.products__suggestion-item:last-of-type{
  margin-left: 0;
}
.products__suggestion-title{
  color: $gray;
  font-size: 13px;
  font-weight: 300;
}
.products__suggestions-active{
  background   : $light-yellow;
  border-color : $light-yellow;
}
.products__suggestions-active .products__suggestion-title{
  color: $white;
}



@media (max-width: 1220px) {

}

@media (max-width: 1024px) {

}

@media (max-width: 960px) {

}

@media (max-width: 600px) {

}

@media (max-width: 485px) {

}


</style>
