<template>
  <pagination
    @paginate="myCallback"
    v-model="page"
    :options="{chunk:4,edgeNavigation:false}"
    :per-page="5"
     :records="30"
     ref="nextChunk"
   />
</template>

<script>
import pagination from 'vue-pagination-2';
import '~/assets/styles/plugins/_paganation.scss'

export default {
  props: {
    // categorySuggestion         : { type: [Object,Array], default: [] },
  },

  components: {
    pagination,
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
    myCallback(data){
    },

    nextChunk(data){
      console.log(data,'next');
    }

  },

};
</script>

<style lang="scss" scoped>
.VuePagination  {
  margin-top: 64px;
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

}


</style>
