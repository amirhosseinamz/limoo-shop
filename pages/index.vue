<template>
    <div class="container">
        <img src="/limoo-logo1.png" alt="" />
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

<style>
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
    color: black;
}
.nav-btn {
    border: 0;
    background: transparent;
    font-family: "IRANYekanWeb";
    font-size: 16px;
}
.nav-items:hover {
    text-decoration: none;
    color: rgb(255, 255, 255);
}
.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
