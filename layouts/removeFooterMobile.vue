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
import theFooter from "~/components/Navigation/theFooter.vue";


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

    watch: {

    },

    methods: {

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

@media (max-width: 960px) {
  .remove--footer{
    display: none;
  }
}

</style>
