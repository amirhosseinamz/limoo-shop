<template>
  <div>
    <div id="listingTable"></div>
    <div @click="prevPage" id="btn_prev">Prev</div>
    <div @click="nextPage" id="btn_next">Next</div>
    page: <span id="page"></span>

  </div>
</template>

<script>


export default {
  props: {
    // categorySuggestion         : { type: [Object,Array], default: [] },
  },

  components: {
  },

  data() {
    return {

      current_page    : 1,
     records_per_page : 15,
     total             : 20,

    }
  },

  watch: {

  },

  mounted() {



    // changePage(1);

  },

  methods: {
    numPages(){
      return Math.ceil(this.total / this.records_per_page);
    },

     prevPage()
    {
        if (this.current_page > 1) {
            this.current_page--;
            this.changePage(this.current_page);
        }
    },

     nextPage()
    {
        if (this.current_page < this.numPages()) {
            this.current_page++;
            this.changePage(this.current_page);
        }
    },



       changePage(page)
        {
            var btn_next = document.getElementById("btn_next");
            var btn_prev = document.getElementById("btn_prev");
            var listing_table = document.getElementById("listingTable");
            var page_span = document.getElementById("page");

            // Validate page
            if (this.page < 1) this.page = 1;
            if (this.page > this.numPages()) this.page = this.numPages();

            listing_table.innerHTML = "";


            page_span.innerHTML = page;

            if (this.page == 1) {
                btn_prev.style.visibility = "hidden";
            } else {
                btn_prev.style.visibility = "visible";
            }

            if (this.page == this.numPages()) {
                btn_next.style.visibility = "hidden";
            } else {
                btn_next.style.visibility = "visible";
            }
        },

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
