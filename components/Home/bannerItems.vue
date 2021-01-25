<template>
  <div class="w-100 bannerItems">
      <div class="bannerItems__item">
          <img class="bannerItems__itemPic h-100" src="/img/picWatch.svg" alt="">
      </div>
      <div class="bannerItems__item">
          <img class="bannerItems__itemPic h-100" src="/img/picPhone2.svg" alt="">
      </div>
      <div class="bannerItems__item">
          <img class="bannerItems__itemPic h-100" src="/img/picPhone2.svg" alt="">
      </div>
  </div>
</template>

<script>


export default {
    components: {
    },

    props: {
      // allProvince           : { type: [Object,Array], default: [] },
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
  .bannerItems{
    width: 100%;
    @include display-flex();
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 36px;
  }
  .bannerItems__item{
    margin-left: 1.1%;
    width: 32.5%;
    height: 244px;
    @include display-flex();
  }
  .bannerItems__item:last-of-type{
    margin-left: 0;
  }
  .bannerItems__itemPic{
    width: 100%;
    height: 100%;
    border-radius: 14px;
  }


  @media (max-width: 1220px) {
    .bannerItems__item{
      max-height: 244px;
      height: auto;
    }
  }



</style>
