<template>
    <div>
            <the-header />
            <Nuxt />
            <the-mobile-mega-menu />
    </div>
</template>

<script>
import TheHeader from "~/components/Navigation/TheHeader.vue";
import TheMobileMegaMenu from "~/components/Navigation/TheMobileMegaMenu.vue";


export default {
    components: {
        TheHeader,
        TheMobileMegaMenu,
    },
    data() {
      return {
      }
    },

    watch: {

    },

    created() {
      // تعیین زبان صفحه //
      this.currentLanguage();
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
  filter: blur(2px);
  overflow: hidden;
}

</style>
