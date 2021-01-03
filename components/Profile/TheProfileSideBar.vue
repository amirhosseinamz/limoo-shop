<template>
    <div class="container">
        <the-user-info />
        <div class="profile-sidebar"></div>
    </div>
</template>
<script>
import TheUserInfo from "~/components/Profile/TheUserInfo.vue";
export default {
    components: {}
};
</script>
<style lang="scss" scoped>
.container {
    margin: 166px 16px 50px 30px;
    width: 100%;
    max-width: 329px;
    min-height: min-content;
    height: max-content;
    @include display-flex();
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: center; */
    /* align-items: flex-end; */
    /* text-align: center; */
    /* border: 3px solid red; */
}

.profile-sidebar {
    width: 100%;
    height: 803px;
    background: $white;
    box-shadow: 0px 8px 16px $box__shadow;
    border-radius: 10px;
}
@media (max-width: 960px) {
    .container {
        width: 100%;
        max-width: 960px;
        margin: 63px 0 16px 0;
    }
    .profile-sidebar {
        background: transparent;
        border-radius: 0;
    }
}
</style>
