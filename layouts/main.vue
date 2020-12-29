<template>
    <div>
        <the-header />
        <Nuxt />
    </div>
</template>

<script>
import TheHeader from "~/components/Navigation/TheHeader.vue";
export default {
    components: {
        TheHeader
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
