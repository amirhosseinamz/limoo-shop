<template>
    <div class="page-home w-100 d-rtl">
      <content-home></content-home>
    </div>
</template>
<script>
import contentHome from "~/components/Home/contentHome.vue";
import '~/assets/styles/plugins/flickity.min.css';
import '~/assets/styles/_slider_home.scss';


export default {
    components: {
      contentHome,
    },

    data() {
        return {

        };
    },

    watch: {

    },

    mounted() {

    },

    methods: {

    }
};
</script>

<style lang="scss" scoped>
.mobile-screen {
    display: none;
}
.profile-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    min-height: 100vh;
    display: flex;
    flex-direction: row-reverse;
}
.page__home-introduction-main{
  @include display-flex();
  align-items: flex-start;
}
.page-home{
  @include display-flex();
  align-items: flex-start;
  padding-right: 30px;
  padding-left: 30px;
}





@media (max-width: 1450px) {

}

@media (max-width: 1220px) {

}

@media (max-width: 960px) {
    .desktop-screen {
        display: none;
    }
    .mobile-screen {
        display: block;
        &__holder {
            @include display-flex();
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            height: 56px;
            background: $white;
            margin-top: 47px;
            &-txt {
                font-size: 14px;
                line-height: 140.62%;
                margin-right: 16px;
                color: $black-topic;
            }
            &-arrow {
                margin-left: 16px;
            }
        }
    }
    .profile-container {
        @include display-flex();
        flex-direction: column;
        margin-bottom: 58px;
    }
    .user-profile__holder {
        margin: 8px 0;
        padding: 0 5px;
    }
    .user-profile {
        &__topic {
            display: none;
        }
    }


}

@media (max-width: 600px) {

}


@media (max-width: 350px) {

}

@media (max-width: 320px) {

}

</style>
