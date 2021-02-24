<template>
    <div>
          <div :class="{'active--blur':activeModal}" class="page__content w-100">
              <the-header />
              <Nuxt />
              <the-mobile-mega-menu />
              <theFooter></theFooter>
          </div>

          <div class="w-100 modal-content">
            <modal-filter
            :active.sync="activeModal"
            @status-show-modal="statusShowModal"
            ></modal-filter>
          </div>
    </div>
</template>

<script>
import TheHeader from "~/components/Navigation/TheHeader.vue";
import TheMobileMegaMenu from "~/components/Navigation/TheMobileMegaMenu.vue";
import theFooter from "~/components/Navigation/theFooter.vue";
import modalFilter from '~/components/Category/modalFilter';

export default {
    components: {
        TheHeader,
        TheMobileMegaMenu,
        theFooter,
        modalFilter,
    },
    data() {
      return {
        activeModal: false,
      }
    },

    watch: {
      '$store.state.category.showModal'(data) {
        this.activeModal = data;
      },

      // ارسال در خواست به سرور برای فیلتر کردن آپزشن های انتخابی //
      '$store.state.category.submitFliterModal'(submited) {
        if (submited) {
          this.submitData()
        }
      },

    },

    methods: {
      statusShowModal(data) {
        this.$store.state.category.showModal         = data;
      },

      submitData(){
        const getLastUpdate =  this.$store.state.category.submitDataFilterModal;

        setTimeout( () =>{
          this.activeModal = false;
        }, 2000);

        console.log(getLastUpdate);
      },

    },

};
</script>
<style lang="scss">
* {
    box-sizing: border-box;
}
body {
    font-family: "IRANYekan";
    background: $overlay;
}
.active--blur{
  filter: blur(2px);
  overflow: hidden;
}

</style>
