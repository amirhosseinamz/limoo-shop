<template>
  <div class="w-100 bannerItems">
      <div class="bannerItems__item">
        <NuxtLink class="w-100 h-100  d-flex" to="/profile"  >
          <img class="bannerItems__itemPic h-100" src="/img/picCover3.jpg" alt="">
        </NuxtLink class="w-100 h-100" to="/profile"  >
      </div>
      <div class="bannerItems__item">
        <NuxtLink class="w-100 h-100 d-flex" to="/profile"  >
          <img class="bannerItems__itemPic h-100" src="/img/WkYmcxWLn35eA5YEPl3dDpzXjmLCvu4PGGA5HFYA.jpg" alt="">
        </NuxtLink class="w-100 h-100" to="/profile"  >
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
  .d-flex{
    display: flex;
  }
  .bannerItems{
    width: 100%;
    @include display-flex();
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 36px;
  }
  .bannerItems__item{
    margin-left: 2%;
    width: 49%;
    height: 368px;
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
    .introduction__leftitem2{
      height: 267px;
    }
    .bannerItems__item{
      max-height: 368px;
      height: auto;
    }
  }

  @media (max-width: 960px) {
    .bannerItems{
      margin-top: 36px;
    }
  }

  @media (max-width: 485px) {
    .bannerItems{
      margin-bottom: 0;
      margin-top: 8px;
    }
    .bannerItems__item{
      display: none;
      width: 100%;
      margin-left: 0;
      max-height: auto;
    }
    .bannerItems__item:first-child{
      display: flex;
    }
    .bannerItems{
      margin-top: 8px;
    }
  }


  // @media (max-width: 420px) {
  //   .bannerItems__item{
  //     height: 180px;
  //   }
  // }




</style>
