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
        TheMobileMegaMenu
    }
};
</script>
<style lang="scss">
* {
    box-sizing: border-box;
}
body {
    font-family: "IRANYekan";
    background-color: $main-bg;
}
</style>
