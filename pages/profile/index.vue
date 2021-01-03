<template>
    <div class="profile-container">
        <the-profile-side-bar />
        <div class="user-profile"></div>
    </div>
</template>
<script>
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
export default {
    components: {
        TheProfileSideBar
    }
};
</script>

<style lang="scss" scoped>
.profile-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    min-height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    /* justify-content: center;
    align-items: center; */
    /* align-items: flex-end; */
    /* text-align: center; */
}
.user-profile {
    margin: 166px 0 50px 17px;
    width: 100%;
    min-height: 100vh;
    height: max-content;
    /* max-width: 1048px; */
    /* min-height: 100vh; */
    @include display-flex();
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* align-items: flex-end; */
    text-align: center;
    border: 1px solid gray;
}
@media (max-width: 960px) {
    .profile-container {
        margin: 0 auto;
        width: 100%;
        /* max-width: 960px; */
        /* min-height: 100vh; */
        @include display-flex();
        flex-direction: column;
        /* justify-content: center;
        align-items: center; */
        /* align-items: flex-end; */
        /* text-align: center; */
        margin-bottom: 58px;
    }
    .user-profile {
        margin: 16px 0 0 0;
    }
}
</style>
