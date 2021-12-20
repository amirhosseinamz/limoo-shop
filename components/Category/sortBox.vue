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
    filterData : { type: [Object,Array], default: [] },
  },
  mounted() {
    console.log(this.sortData);
  },

  methods: {
    activeRadio($event,data){
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
    padding-right: toRem(18);
    padding-left: toRem(18);
    box-shadow: 0 toRem(8) toRem(16) rgba(17, 17, 17, 0.03);
    margin-bottom: 16px;
  }
  .modal-sort__title{
    color: $gray;
    font-size: toRem(16);
    font-weight: 300;
    margin-right: toRem(30);
  }
  .modal-sort__item:last-of-type{
    margin-bottom: 0;
  }
  // check box style //
  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: toRem(22);
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
    top: toRem(3);
    right: 0;
    height: toRem(17);
    width: toRem(17);
    border:solid toRem(5) $color-gray;
    border-radius: toRem(100);
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

  @include xs {
    .modal-sort__item{
      border:none!important;
      box-shadow: none;
      margin-bottom: toRem(39);
      height: toRem(24)!important;
    }
    .modal-sort__items{
      padding-right: toRem(24);
      padding-left: toRem(24);
    }
    .modal-sort__title{
      font-size: toRem(14);
    }
    .checkmark{
      top: toRem(1);
    }
  }



</style>
