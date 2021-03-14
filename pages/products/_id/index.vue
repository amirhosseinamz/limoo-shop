<template>
    <div class="page-home w-100 d-rtl flex-column">
      <div class="mobile-screen w-100">
          <div class="mobile-screen__holder">
              <div class="w-100 screen__holder-data">
                <span class="mobile-screen__holder-txt">آدرس های شما</span>
                <span class="icon-location"></span>
              </div>
              <!-- <img
                  class="mobile-screen__holder-arrow"
                  src="/icons/arrow-left.svg"
              /> -->
          </div>
      </div>

      <contentSingleProduct></contentSingleProduct>

    </div>
</template>
<script>
import contentSingleProduct from "./contentSingleProduct.vue";


export default {
    components: {
      contentSingleProduct,
    },

    data() {
        return {

        };
    },

    watch: {

    },

    created() {

    },

    mounted() {
      // this.updateProduct++;
    },

    methods: {

    }
};
</script>

<style lang="scss" scoped>
.mobile-screen {
    display: none;
    direction: ltr;
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
  width: 1381px;
  margin-right: auto;
  margin-left: auto;
}
.icon-location::after {
    content: '\e817';
    @include font-icon__limoo();
    font-size: 16px;
    margin-top: 1px;
    color: $color_festival;
}
.screen__holder-data{
  @include display-flex();
  justify-content: flex-end;
  padding-right: 18.5px;
  padding-left: 18.5px;
  align-items: center;
  height: 100%;
}


@media (max-width: 1450px) {
  .page-home{
    padding-right: 26px;
    padding-left: 26px;
    width: 100%;
  }
  .page__home-wrapper-main{
    padding-right: 26px;
    padding-left: 26px;
  }

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
            height: 33px;
            background: $white;
            margin-top: 47px;
            &-txt {
                font-size: 13px;
                line-height: 140.62%;
                margin-right: 6.5px;
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
    .mobile-screen__holder-arrow{
      display: none;
    }

}

@media (max-width: 600px) {

}

@media (max-width: 485px) {
  .page__home-wrapper-main{
    padding-right: 10px;
    padding-left: 10px;
  }
}

@media (max-width: 350px) {

}

@media (max-width: 320px) {

}

</style>
