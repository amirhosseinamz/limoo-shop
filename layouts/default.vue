<template>
  <div>
    <div class="page__content w-100">
      <the-header />
      <Nuxt />
      <the-mobile-mega-menu />

      <theFooter></theFooter>
    </div>

  </div>
</template>

<script>
import TheHeader from "~/components/Navigation/TheHeader.vue";
import TheMobileMegaMenu from "~/components/Navigation/TheMobileMegaMenu.vue";
import theFooter from "~/components/Navigation/TheFooter.vue";
import modalFilter from "~/components/Category/modalFilter";
import modalSort from "~/components/Category/modalSort";

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
      activeModalSort: false,
      activeBlur: false,
      removeFooter: false,
      removeSpecialFooter: false,
      windowWidth: 0,
      showFilterModal: false,
      showSortModal: false
    };
  },

  watch: {
    "$store.state.category.showModal"(status) {
      this.activeBlur = status;
      this.showFilterModal = status;

      if (status) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },

    "$store.state.category.showModalSort"(status) {
      this.activeModalSort = status;
      this.showSortModal = status;
      this.activeBlur = status;

      if (status) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },

    $route(to, from) {},

    "$store.state.singleProduct.hidenBodyScroll"(status) {
      if (status) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },

  created() {
    // تعیین زبان صفحه //
    this.currentLanguage();
  },

  mounted() {},

  computed: {
    modalAnimation() {
      if (this.windowWidth > 420) {
        return "right-side";
      } else {
        return "full-screen";
      }
    },
  },

  methods: {
    /*statusShowModal(data) {
      this.showFilterModal = true;
      // this.$store.state.category.showModal         = data;
      this.$store.commit("category/updateStateModals", { showModal: data });
    },*/
    modalFilterClose() {
      this.showFilterModal = false;
    },
    modalSortClose() {
      this.showSortModal = false;
    },

    showSort(data) {
      this.showSortModal = true;
      // this.$store.state.category.showModalSort     = data;
      this.$store.commit("category/updateStateModals", { showModalSort: data });
    },

    currentLanguage() {
      const language = "fa-IR";
      this.$store.commit("currentLanguage", language);
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
.active--blur {
  filter: blur(2px);
  overflow: hidden;
}
</style>
