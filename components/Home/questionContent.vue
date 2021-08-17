<template>
  <div  class="w-100 productContent productContent__question">

      <div class="productContent__items w-100 ">
            <div class="productContent__left">
              <questions :title="title" :more-text="moreText"></questions>
              <div class="w-100 productContent__sliderMore">
                  <nuxt-link class="productContent__moreItem" to="/">
                    {{moreText}}
                    <span class=" productContent__moreIcon mobile-inprogress__arrow"></span>
                  </nuxt-link>
              </div>
            </div>
      </div>

  </div>
</template>

<script>
import questions from './questions';


export default {
    components: {
      questions,
    },

    props: {
      title         : { type: String, default: '' },
      moreText      : { type: String, default: '' },

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
  margin-bottom: 40px;
  background: $white;
  border-radius: 12px;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.03);
  border-radius: 10px;
}
.productContent__items{
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
  padding-top: 24px;
  padding-bottom:0px;
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
  display: none;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-left: 13px;
}
.productContent__moreItem{
  font-size: 13px;
  color: $gray;
  border-bottom: none;
  text-decoration: none;
  @include display-flex();
  align-items: center;
}
.productContent__moreIcon{
  @include display-flex();
  margin-right: 6px;
}
.mobile-inprogress__arrow::after {
    content: "\e801";
    @include font-icon__limoo();
    font-size: 12px;
    margin-top: 1px;
}



@media (max-width: 1450px) {

}

@media (max-width: 1220px) {

}

@media (max-width: 960px) {
  .productContent__right{
    width: 100%;
    padding-right: 11px;
    padding-left: 11px;
  }
  .productContent__left{
    width: 100%;
    margin-top: 0px;
  }
  .productContent{
    height: auto;
  }
  .productContent__sliderMore{
    margin-top: 34px;
  }
  .productContent__items{
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .productContent{
    margin-top: 40px;
  }


}

@media (max-width: 600px) {

}

@media (max-width: 485px) {
  .productContent__sliderMore{
    display: flex;
  }
  .productContent{
    margin-bottom: 0px;
    margin-top: 8px;
  }
}

@media (max-width: 350px) {

}

@media (max-width: 320px) {

}


</style>
