<template>
    <div class="w-100">
          <div class="w-100">
              <paginate
              :page-count="20"
              :click-handler="functionName"
              :prev-text=" '<span class=icon-paganation></span>' "
              :next-text=" '<span class=icon-paganation></span>' "
              :container-class="'category__product-pagination pagination'">
            </paginate>
          </div>

    </div>
</template>

<script>
import '~/assets/styles/plugins/_paganation.scss'
import Paginate from 'vuejs-paginate'


export default {
  props: {
    // categorySuggestion         : { type: [Object,Array], default: [] },
  },

  components: {
    Paginate,
  },

  data() {
    return {
      page : 1,
      setPage : 1
    }
  },

  watch: {

  },

  mounted() {

  },

  methods: {
    functionName(data){
    },

  },

};
</script>

<style lang="scss" scoped>
.category__product-pagination{
  margin-top: 63px;
}


@media (max-width: 1220px) {

}

@media (max-width: 1024px) {

}

@media (max-width: 960px) {

}

@media (max-width: 600px) {

}

@media (max-width: 485px) {
  .category__product-pagination{
    display: none;
  }

}


</style>
