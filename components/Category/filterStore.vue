<template>
    <div  class="w-100 modal-filter__store margin--top">

          <div :class="{'active--box':openBox}"  class="w-100 modal-filter__box ">
                <div @click="toggleBox" class="modal-filter__box-title w-100">
                  <h3 class="modal-filter__box-text">{{title}}</h3>
                  <!-- <span class="modal-filter__box-arrow"></span> -->
                  <img class="modal-filter__box-arrow" src="/icons/arrow-down.svg" alt="">
                </div>

                <div class="modal-filter__box-content w-100">
                    <div class="modal-filter__box-items w-100">
                        <div  v-for="data in checkBoxData" :key="data.id" class="modal-filter__box-item">
                            <label @change="addChecked($event,data)" class="container">
                              <input :checked="data.checked" type="checkbox">
                              <span class="checkmark"></span>
                              <h3 class="modal-filter__checkbox-title">{{data.title}}</h3>
                            </label>
                        </div>
                  </div>
                </div>
          </div>
    </div>

</template>

<script>


export default {
  props: {
    openDefaultBox              : { type: Boolean, default: false },
    title                       : { type: String, default: '' },
    selectBoxSelectetInitial    : { type: String, default: '' },
    checkBoxData                : { type: [Array,Object], default: [] },
  },

  components: {
  },

  data() {
    return {
      openBox              : false,

    }
  },

  watch: {

  },

  mounted() {
    if (this.openDefaultBox) {
      this.openBox = true;
    }
    else {
      this.openBox = false;
    }

  },

  methods: {
    toggleBox(){
      this.openBox = !this.openBox;
    },

    addChecked(e,data){
      data.checked  = e.target.checked;
      this.$emit('checked-brand-filter',this.checkBoxData);
    },

  },

};
</script>

<style lang="scss" scoped>
.modal-filter__box{
  margin-right: auto;
  margin-left: auto;
  background: $white;
  padding-bottom: toRem(15);
  border:solid 1px $chinese_white;
  @include display-flex();
  align-items: flex-start;
  border-radius: toRem(10);
  flex-wrap: wrap;
  max-height: toRem(51);
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  overflow: hidden;
  margin-top: toRem(6);
}
.modal-filter__box-content{
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  padding-right: toRem(16);
  padding-left: toRem(16);
  padding-top: toRem(4);
}
.modal-filter__box-text{
  font-size: toRem(16);
  color: $dark_gray;
  font-weight: 400;
  flex-grow: 1;
  @include display-flex();
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
  max-height: toRem(1000);
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
  margin-right: toRem(28);
}
.margin--top{
  margin-top: toRem(24);
}
.store--text{
  margin-bottom: toRem(16);
  margin-right: toRem(4);
}
.modal-filter__store{
  width: 98%;
  margin-right: auto;
  margin-left: auto;
}



@include xs {
  .modal-filter__box-text{
    font-size: toRem(14);
  }
  .store--text{
    font-size: toRem(14);
    margin-bottom: toRem(8);
  }
}




</style>
