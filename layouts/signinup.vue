<template>
  <div class="container">
    <Nuxt />
  </div>
</template>
<script>
export default {
  components: {},

  data() {
    return {};
  },

  created() {
    // تعیین زبان صفحه //
    this.currentLanguage();
  },

  watch: {},

  methods: {
    currentLanguage() {
      const language = "fa-IR";
      this.$store.commit("currentLanguage", language);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.container {
  font-family: "IRANYekan";
  background: $main-bg;
  overflow-x: hidden;
}
@include xs {
  .container {
    background: $white;
  }
}
</style>
