<template>
    <div>
          <div :class="{'active--blur':activeBlur}" class="page__content w-100">
              <the-header />
              <Nuxt />
              <the-mobile-mega-menu />

              <theFooter ></theFooter>

          </div>

          <div class="w-100 modal-content">
            <modal-filter
            :active.sync="activeModal"
            @status-show-modal="statusShowModal"
            ></modal-filter>

            <modal-sort
            :active.sync="activeModalSort"
            @status-show-modal="showSort"
            ></modal-sort>
          </div>
    </div>
</template>

<script>
import TheHeader from "~/components/Navigation/TheHeader.vue";
import TheMobileMegaMenu from "~/components/Navigation/TheMobileMegaMenu.vue";
import theFooter from "~/components/Navigation/theFooter.vue";
import modalFilter from '~/components/Category/modalFilter';
import modalSort from '~/components/Category/modalSort';


export default {
    components: {
        TheHeader,
        TheMobileMegaMenu,
        theFooter,
        modalFilter,
        modalSort,
    },
    data() {
      return {
        activeModal         : false,
        activeModalSort     : false,
        activeBlur          : false,
        removeFooter        : false,
        removeSpecialFooter : false,
      }
    },

    watch: {
      '$store.state.category.showModal'(status) {
        this.activeModal     = status;
        this.activeBlur      = status;

        if (status) {
          document.body.style.overflow =  'hidden';
        }
        else {
          document.body.style.overflow =  '';
        }

      },

      '$store.state.category.showModalSort'(status) {
        this.activeModalSort = status;
        this.activeBlur      = status;

        if (status) {
          document.body.style.overflow =  'hidden';
        }
        else {
          document.body.style.overflow =  '';
        }
      },

      '$route' (to, from){
       },

       '$store.state.singleProduct.hidenBodyScroll'(status){
          if (status) {
             document.body.style.overflow =  'hidden';
          }
          else {
             document.body.style.overflow =  '';
          }
       },

    },

    created() {
      // تعیین زبان صفحه //
      this.currentLanguage();
    },

    mounted() {
    },

    methods: {

      statusShowModal(data) {
        // this.$store.state.category.showModal         = data;
        this.$store.commit('category/updateStateModals',{showModal:data})
      },

      showSort(data){
        // this.$store.state.category.showModalSort     = data;
        this.$store.commit('category/updateStateModals',{showModalSort:data})
      },

      currentLanguage(){
        const language = 'fa-IR';
        this.$store.commit("currentLanguage", language);
      }

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
