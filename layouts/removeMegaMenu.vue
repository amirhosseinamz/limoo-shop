<template>
  <div>
    <the-header />
    <Nuxt />
    <theFooter></theFooter>
  </div>
</template>

<script>
import TheHeader from "~/components/Navigation/TheHeader.vue";
import TheFooter from "../components/Navigation/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter,
  },

  data() {
    return {
    }
  },

  created() {
    // تعیین زبان صفحه //
    this.currentLanguage();
  },

  watch: {

  },

  methods: {
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

</style>
