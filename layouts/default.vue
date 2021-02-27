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
      }
    },

    watch: {
      '$store.state.category.showModal'(data) {
        this.activeModal = data;
      },

      '$store.state.category.showModalSort'(data) {
        this.activeModalSort = data;
      },

    },

    methods: {
      statusShowModal(data) {
        this.$store.state.category.showModal         = data;
      },

      showSort(data){
        this.$store.state.category.showModalSort     = data;
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
