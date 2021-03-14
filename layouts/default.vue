<template>
    <div>
          <div :class="{'active--blur':activeBlur}" class="page__content w-100">
              <the-header />
              <Nuxt />
              <the-mobile-mega-menu />
              <div :class="{'remove--footer':removeFooter}" class="w-100">
                <theFooter ></theFooter>
              </div>
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
        activeModal      : false,
        activeModalSort  : false,
        activeBlur       : false,
        removeFooter     : false,
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

    },

    mounted() {

      if (this.$route.name == 'profile') {
        this.removeFooter = true;
      }
      else {
        this.removeFooter = false;
      }

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

@media (max-width: 960px) {
  .remove--footer{
    display: none;
  }
}



</style>
