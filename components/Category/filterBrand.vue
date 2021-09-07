<template>
  <sliding-drop-down title="انتخاب برند" class="modal-filter__box margin--top" :open="false">
    <div class="modal-filter__box-content w-100">
      <div class="modal-filter__box-items w-100">
        <base-checkbox
          class="brand-checkbox"
          name="name"
          val="first"
          mode="square"
          v-model="checkboxValues"
          title="دنیس تریکو"
        ></base-checkbox>
        <base-checkbox
          class="brand-checkbox"
          name="name"
          val="sec"
          mode="square"
          v-model="checkboxValues"
          title="دنیس تریکو"
        ></base-checkbox>
        <base-checkbox
          class="brand-checkbox"
          name="name"
          val="third"
          mode="square"
          v-model="checkboxValues"
          title="دنیس تریکو"
        ></base-checkbox>
      </div>
    </div>
  </sliding-drop-down>
</template>

<script>


export default {
  props: {
    title: { type: String, default: "" },
  },

  components: {
  },

  data() {
    return {
      openBox              : false,
      checkedBrand         : [],
      lastChecked          : [],
      checkboxValues: []
    }
  },

  mounted() {
    this.openBox = !!this.openDefaultBox;
  },

  methods: {
    toggleBox(){
      this.openBox = !this.openBox;
    },

    addChecked(e,data){
      this.$emit('checked-brand-filter',data);
    },


  },

};
</script>

<style lang="scss" scoped>
.modal-filter__box::v-deep {
  width: 98%;
  margin-top: toRem(6);
  .dropdown-title {
    font-size: toRem(16);
  }
}
.modal-filter__box-content {
  margin-top: -1.5rem
}
.modal-filter__box-text{
  font-size: toRem(16);
  color: $dark_gray;
  font-weight: 400;
  flex-grow: 1;
  @include display-flex();
}
.modal-filter__box-items {
  @extend .d-flex;
  flex-flow: column;
  align-items: flex-start;

  .brand-checkbox {
    margin-bottom: toRem(20);
  }
  .brand-checkbox:last-child {
    margin-bottom: toRem(6);
  }
}
.modal-filter__box-arrow::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: toRem(13);
  color: $gray;
  cursor: pointer;
}
.modal-filter__box-arrow{
  height: toRem(19);
  transition  : all .3s ease-in-out;
  margin-top: toRem(3);
}
.modal-filter__box-title{
  @include display-flex();
  align-items: center;
  cursor: pointer;
  padding: toRem(13) toRem(16);
}
.active--box .modal-filter__box-arrow{
  transform:rotate(-180deg);
  transition  : all .3s ease-in-out;
}
.active--box {
  max-height: 1000px;
  transition: max-height 1s ease-in-out;
}
.modal-filter__box-item{
  margin-bottom: toRem(26);
}
.modal-filter__box-item:last-of-type{
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
  top: 0;
  right: 0;
  height: toRem(18);
  width: toRem(18);
  border:solid toRem(1) $color-gray;
  border-radius: toRem(5);
}
.container input:checked ~ .checkmark {
  background-color: $yellow;
  border-color: $yellow;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container input:checked ~ .modal-filter__checkbox-title {
  color: $black-topic;
}
.container .checkmark:after {
  left: toRem(4);
  top: toRem(5);
  content: "\e82b";
  @include font-icon__limoo();
  font-size: toRem(6);
  color: $white;
}
.modal-filter__checkbox-title{
  font-size: toRem(14);
  color: $gray;
  font-weight: 400;
  margin-right:toRem(28);
}
.margin--top{
  margin-top: toRem(24);
}

@include xs {
  .modal-filter__box-text{
    font-size: toRem(14);
  }
}




</style>
