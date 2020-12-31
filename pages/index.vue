<template>
    <div class="container">
        <div class="main-page">
            <img class="home-icon" src="/icons/home.svg" alt="" />
            <img src="/logos/limoo-logo1.png" alt="" />
            <img src="/logos/limoo-logo1.png" alt="" />
            <img src="/logos/limoo-logo1.png" alt="" />
            <img src="/logos/limoo-logo1.png" alt="" />
            <img src="/logos/limoo-logo1.png" alt="" />
            <img src="/logos/limoo-logo1.png" alt="" />
            <img src="/logos/limoo-logo1.png" alt="" />
            <img src="/logos/limoo-logo1.png" alt="" />
            <img src="/logos/limoo-logo1.png" alt="" />
            <img src="/logos/limoo-logo1.png" alt="" />
            <img src="/logos/limoo-logo1.png" alt="" />
            <img src="/logos/limoo-logo1.png" alt="" />
            <img src="/logos/limoo-logo1.png" alt="" />

            <button @click="goToSignUp" class="nav-btn">
                <nuxt-link class="nav-items" to="/signup">ثبت نام</nuxt-link>
            </button>
            <button @click="goToSignIn" class="nav-btn">
                <nuxt-link class="nav-items" to="/signin">ورود</nuxt-link>
            </button>

            <!-- <nuxt-link class="nav-items" to="/signin">ورود کاربر</nuxt-link> -->
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goToSignUp() {
            this.$store.commit("walkInSignUpcomponents", { value: "stepOne" });
        },
        goToSignIn() {
            this.$store.commit("walkInSignIncomponents", { value: "stepOne" });
        }
    }
};
</script>

<style lang="scss">
body {
    overflow-x: hidden;
}
.home-icon {
    width: 70px;
    color: yellow;
}
.container {
    margin: 0 auto;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.main-page {
    margin-top: 135px;
    width: 200px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}
.nav-items {
    text-decoration: none;
    color: $black;
}
.nav-btn {
    border: 0;
    background: transparent;
    font-family: inherit;
    font-size: 16px;
}
.nav-items:hover {
    text-decoration: none;
    color: $white;
}
@media (max-width: 960px) {
    .main-page {
        margin-top: 47px;
        margin-bottom: 60px;
    }
}
</style>
