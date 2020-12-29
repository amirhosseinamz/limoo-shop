<template>
    <div class="container">
        <!-- <img src="/logos/limoo-logo1.png" alt="" />
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
        <img src="/logos/limoo-logo1.png" alt="" /> -->
        <div class="container-nav">
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
/* body {
    overflow: hidden;
} */
.container {
    margin: 0 auto;
    width: 200px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.container-nav {
    margin: 0 auto;
    width: 200px;
    min-height: 100px;
    display: flex;
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
</style>
