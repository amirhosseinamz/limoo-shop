<template>
    <div class="container">
        <div class="err-txt" dir="rtl">
            خطایی رخ داده!
        </div>
        <nuxt-link class="nav-items" to="/">بازگشت به صفحه اصلی</nuxt-link>
    </div>
</template>

<style scoped>
body {
    overflow: hidden;
}
.container {
    margin: 0 auto;
    width: 400px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.err-txt {
    font-size: 30px;
    font-weight: 700;
    width: 400px;
}
.nav-items {
    text-decoration: none;
    color: black;
}
.nav-items:hover {
    text-decoration: none;
    color: rgb(255, 255, 255);
}
</style>
