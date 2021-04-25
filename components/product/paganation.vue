<template>
    <div class="w-100">
          <div class="w-100">
            <no-ssr>
                <paginate
                :page-count="20"
                :click-handler="updatePaganation"
                :prev-text=" '<span class=icon-paganation></span>' "
                :next-text=" '<span class=icon-paganation></span>' "
                :container-class="'category__product-pagination pagination'">
              </paginate>
            </no-ssr>
          </div>

    </div>
</template>

<script>
import '~/assets/styles/plugins/_paganation.scss'


export default {
  props: {
    // categorySuggestion         : { type: [Object,Array], default: [] },
  },

  components: {
  },

  data() {
    return {
      page         : 1,
      setPage      : 1,
    }
  },

  watch: {

  },

  mounted() {
  },

  methods: {
    updatePaganation(data){
      this.$emit('last-update-page',data);
    },

  },

};
</script>

<style lang="scss" scoped>
.category__product-pagination{
  margin-top: 63px;
  margin-bottom: 40px;
}


@media (max-width: 1220px) {

}

@media (max-width: 1024px) {

}

@media (max-width: 960px) {

}

@media (max-width: 600px) {
  .category__product-pagination{
    display: none;
  }

}

@media (max-width: 485px) {

}


</style>
