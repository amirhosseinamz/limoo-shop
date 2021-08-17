<template>
  <div class="w-100 modal-sort__items">
        <div class="modal-filter__box-title w-100">
          <h3 class="modal-filter__box-text">{{title}}</h3>
        </div>

        <div class="w-100 modal-sort__content">

          <base-radio-button
            name="payment"
            class="modal-sort__item w-100"
            title-class="radio-title"
            v-for="data in sortData"
            :key="data.id"
            :value="data.value"
            :title="data.title"
            :border-active="false"
            button
          ></base-radio-button>
        </div>

  </div>
</template>

<script>


export default {
  props: {
    title : { type: String, default: '' },
    sortData : { type: [Object,Array], default: [] },
  },
  mounted() {
    console.log(this.sortData);
  },

  methods: {
    activeRadio($event,data){

      // this.sortData.map((content,index)=>{
      //   if (content.id == data.id) {
      //     content.selected = true;
      //   }
      //   else {
      //     content.selected = false;
      //   }
      // })

      console.log($event.target.checked);


      this.$emit("active-radio",data)
    },

  },

};
</script>

<style lang="scss" scoped>
  .modal-sort__items{
    color: $gray-3;
    font-size: toRem(16);
    padding-right: toRem(60);
    padding-left: toRem(60);
  }
  .modal-sort__item{
    @include display-flex();
    padding-right: 18px;
    padding-left: 18px;
    box-shadow: 0 8px 16px rgba(17, 17, 17, 0.03);
    margin-bottom: 16px;
  }
  .modal-sort__title{
    color: $gray;
    font-size: 16px;
    font-weight: 300;
    margin-right: 30px;
  }
  .modal-sort__item:last-of-type{
    margin-bottom: 0;
  }
  // check box style //
  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 3px;
    right: 0;
    height: 17px;
    width: 17px;
    border:solid 5px $color-gray;
    border-radius: 100px;
  }
  .container input[type="radio"]:checked ~ .checkmark {
    border-color: $yellow;
  }
  .container input:checked ~ .checkmark {
    border-color: $yellow;
  }
  .container input[type="radio"]:checked ~ .checkmark {
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  .container input[type="radio"]:checked ~ .checkmark:after {
    display: block;
  }
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  @media (max-width: 485px) {
    .modal-sort__item{
      border:none!important;
      box-shadow: none;
      margin-bottom: 39px;
      height: 24px!important;
    }
    .modal-sort__items{
      padding-right: 24px;
      padding-left: 24px;
    }
    .modal-sort__title{
      font-size: 14px;
    }
    .checkmark{
      top: 1px;
    }


  }



</style>
