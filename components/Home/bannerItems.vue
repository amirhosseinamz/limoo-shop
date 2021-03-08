<template>
  <div class="w-100 bannerItems">
      <div class="bannerItems__item">
        <NuxtLink class="w-100 h-100 d-flex" to="/profile"  >
          <img class="bannerItems__itemPic h-100" src="/img/picWatch.svg" alt="">
        </NuxtLink>
      </div>
      <div class="bannerItems__item">
        <NuxtLink class="w-100 h-100 d-flex" to="/profile"  >
          <img class="bannerItems__itemPic h-100" src="/img/picPhone2.svg" alt="">
        </NuxtLink>
      </div>
      <div class="bannerItems__item">
        <NuxtLink class="w-100 h-100 d-flex" to="/profile"  >
          <img class="bannerItems__itemPic h-100" src="/img/picPhone2.svg" alt="">
        </NuxtLink>
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
    margin-top: 40px;
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

  @media (max-width: 960px) {
    
  }

  @media (max-width: 485px) {
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
        margin-bottom: 8px;
      }
  }


  // @media (max-width: 420px) {
  //   .bannerItems__item{
  //     max-height: 180px;
  //   }
  // }
  //
  // @media (max-width: 360px) {
  //   .bannerItems__item{
  //     max-height: 184px;
  //   }
  // }




</style>
