<template>
  <div class="w-100 bannerItems">
      <div class="bannerItems__item">
        <NuxtLink class="w-100 h-100 d-flex" to="/profile"  >
          <img class="bannerItems__itemPic h-100" src="/img/09e2e4e3ba102806e2a9ce0bb750c149484c2015_1611135172.jpg" alt="">
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
    margin-top: 36px;
    margin-bottom: 36px;
  }
  .bannerItems__item{
    width: 100%;
    height: 200px;
    @include display-flex();
  }
  .bannerItems__itemPic{
    width: 100%;
    height: 100%;
    border-radius: 14px;
  }


  @media (max-width: 960px) {
    .bannerItems{
      margin-bottom: 0;
    }
  }

  @media (max-width: 460px) {
    .bannerItems{
      display: none;
    }
  }



</style>
