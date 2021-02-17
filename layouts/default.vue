<template>
    <div>
        <the-header />
        <Nuxt />
        <the-mobile-mega-menu />
        <theFooter></theFooter>
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
        theFooter
    }
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
</style>
