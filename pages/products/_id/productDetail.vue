<template>
  <div class="product__property w-100">
        <div class="product__property-items w-100">
                  <div class="product__property-item">
                          <div class="product__property-content">
                               <h3 class="product__property-title">حافظه:</h3>
                               <h3 class="product__property-detail">1 ترابایت</h3>
                          </div>
                          <div class="product__property-content">
                               <h3 class="product__property-title">سیستم عامل:</h3>
                               <h3 class="product__property-detail">مک اواس</h3>
                          </div>
                          <div class="product__property-content">
                               <h3 class="product__property-title">وزن:</h3>
                               <h3 class="product__property-detail">2kg</h3>
                          </div>
                  </div>

                  <div class="product__property-item">
                          <div class="product__property-content">
                               <h3 class="product__property-title">تراشه :</h3>
                               <h3 class="product__property-detail">intel</h3>
                          </div>
                          <div class="product__property-content">
                               <h3 class="product__property-title">صفحه نمایش:</h3>
                               <h3 class="product__property-detail">true ton</h3>
                          </div>
                          <div class="product__property-content">
                               <h3 class="product__property-title">باتری:</h3>
                               <h3 class="product__property-detail">100 وات</h3>
                          </div>
                  </div>

                  <div class="product__property-item">
                          <div class="product__property-content">
                               <h3 class="product__property-title">حافظه:</h3>
                               <h3 class="product__property-detail">1 ترابایت</h3>
                          </div>
                          <div class="product__property-content">
                               <h3 class="product__property-title">سیستم عامل:</h3>
                               <h3 class="product__property-detail">مک اواس</h3>
                          </div>
                          <div class="product__property-content">
                               <h3 class="product__property-title">وزن:</h3>
                               <h3 class="product__property-detail">2kg</h3>
                          </div>
                  </div>
        </div>
  </div>
</template>

<script>
// import contentHome from "~/components/Home/contentHome.vue";


export default {
    components: {
      // contentHome,
    },

    data() {
        return {

        };
    },

    watch: {

    },

    created() {

    },

    mounted() {
    },

    methods: {

    }
};
</script>

<style lang="scss" scoped>
  .product__property{
    margin-top: 45px;
    margin-bottom: 54px;
    @include display-flex();
    align-items: flex-start;
  }
  .product__property-items{
    @include display-flex();
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .product__property-item{
    @include display-flex();
    align-items: flex-start;
    flex-flow: column;
    border-left: solid 1px $gray-border;
    padding-right: 28px;
    width: 32%;
    padding-top: 11px;
    padding-bottom: 11px;
  }
  .product__property-item:nth-child(1){
    padding-right: 0px;
  }
  .product__property-item:last-of-type{
    margin-left: 0;
    border-left: none;
  }
  .product__property-content{
    @include display-flex();
    align-items: flex-start;
    width: 100%;
    margin-bottom: 22px;
  }
  .product__property-content:last-of-type{
    margin-bottom: 0;
  }
  .product__property-detail{
    font-size: 14px;
    font-weight: 400;
    margin-right: 6px;
    color: $color_discount;
  }
  .product__property-title{
    font-size: 14px;
    font-weight: 400;
    color: $gray;
  }


</style>
