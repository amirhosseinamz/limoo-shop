<template>
    <div class="container">
        <Nuxt />
    </div>
</template>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
.container {
    font-family: "IRANYekan";
    background: $main-bg;
    overflow-x: hidden;
}
@media screen and (max-width: 700px) {
    .container {
        background: $white;
    }
}
</style>
