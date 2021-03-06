<template>
  <div :class="{'active--box':openBox}" class="w-100 modal-filter__box margin--top">
        <div @click="toggleBox" class="modal-filter__box-title w-100">
          <h3 class="modal-filter__box-text">{{title}}</h3>
          <!-- <span class="modal-filter__box-arrow"></span> -->
          <img class="modal-filter__box-arrow" src="/icons/arrow-down.svg" alt="">
        </div>

        <div class="modal-filter__box-content w-100">
                  <div class="modal-filter__box-items w-100">
                            <div  v-for="(data,index) in checkBoxData" :key="data.id" class="modal-filter__box-item">
                                <label @change="addChecked($event,data)" class="container">
                                  <input v-model="data.checked" type="checkbox">
                                  <span class="checkmark"></span>
                                  <h3 class="modal-filter__checkbox-title">{{data.title}}</h3>
                                </label>
                            </div>
                  </div>
        </div>

  </div>
</template>

<script>


export default {
  props: {
    openDefaultBox  : { type: Boolean, default: false },
    title           : { type: String, default: '' },
    checkBoxData    : { type: [Array,Object], default: [] },
  },

  components: {
  },

  data() {
    return {
      openBox              : false,
      checkedBrand         : [],
      lastChecked          : [],
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
      if (this.openBox) {
        this.openBox = false;
      }
      else {
        this.openBox = true;
      }
    },

    addChecked(e,data){
      this.$emit('checked-brand-filter',data);
    },


  },

};
</script>

<style lang="scss" scoped>
.modal-filter__box{
  width: 98%;
  margin-right: auto;
  margin-left: auto;
  background: $white;
  padding-bottom: 15px;
  // padding-top: 13px;
  // padding-right: 16px;
  // padding-left: 16px;
  border:solid 1px $chinese_white;
  @include display-flex();
  align-items: flex-start;
  border-radius: 10px;
  flex-wrap: wrap;
  max-height: 51px;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  overflow: hidden;
  margin-top: 6px;
}
.modal-filter__box-content{
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 4px;
  padding-right: 16px;
  padding-left: 16px;
}
.modal-filter__box-text{
  font-size: 16px;
  color: $dark_gray;
  font-weight: 400;
  flex-grow: 1;
  @include display-flex();
}
.modal-filter__box-arrow::before {
  content: "\e801";
  @include font-icon__limoo();
  font-size: 13px;
  color: $gray;
  cursor: pointer;
}
.modal-filter__box-arrow{
  height:19px;
  transition  : all .3s ease-in-out;
  margin-top: 3px;
}
.modal-filter__box-title{
  @include display-flex();
  align-items: center;
  cursor: pointer;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 13px;
  padding-bottom: 13px;
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
  margin-bottom: 26px;
}
.modal-filter__box-item:last-of-type{
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
  top: 0;
  right: 0;
  height: 18px;
  width: 18px;
  border:solid 1px $color-gray;
  border-radius: 5px;
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
  left: 4px;
  top: 5px;
  content: "\e82b";
  @include font-icon__limoo();
  font-size: 6px;
  color: $white;
}
.modal-filter__checkbox-title{
  font-size: 14px;
  color: $gray;
  font-weight: 400;
  margin-right:28px;
}
.margin--top{
  margin-top: 24px;
}



@media (max-width: 485px) {
  .modal-filter__box-text{
    font-size: 14px;
  }
}

@media (max-width: 350px) {

}



</style>
