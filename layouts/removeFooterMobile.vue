<template>
    <div>
        <the-header />
        <Nuxt />
        <the-mobile-mega-menu />
        <div class="w-100 remove--footer">
          <theFooter ></theFooter>
        </div>
    </div>
</template>

<script>
import TheHeader from "~/components/Navigation/TheHeader.vue";
import TheMobileMegaMenu from "~/components/Navigation/TheMobileMegaMenu.vue";
import theFooter from "~/components/Navigation/TheFooter.vue";


export default {
    components: {
        TheHeader,
        TheMobileMegaMenu,
        theFooter,
    },

    data() {
      return {
      }
    },

    created() {
      // تعیین زبان صفحه //
      this.currentLanguage();
    },

    watch: {

    },

    methods: {
      currentLanguage(){
        const language = 'fa-IR';
        this.$store.commit("currentLanguage", language);
      }

    },

};
</script>
<style lang="scss">
* {
    box-sizing: border-box;
}
body {
    font-family: "IRANYekan";
    background: $overlay;
}
.active--blur{
  filter: blur(toRem(2));
  overflow: hidden;
}

@include md {
  .remove--footer{
    display: none;
  }
}

</style>
