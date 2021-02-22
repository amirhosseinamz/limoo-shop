<template>
  <div :class="{'active--box':openBox}" class="w-100 modal-filter__box">
        <div @click="toggleBox" class="modal-filter__box-title w-100">
          <h3 class="modal-filter__box-text">انتخاب برند</h3>
          <!-- <span class="modal-filter__box-arrow"></span> -->
          <img class="modal-filter__box-arrow" src="/icons/arrow-down.svg" alt="">
        </div>

        <div class="modal-filter__box-content w-100">
                <div class="modal-filter__box-items w-100">
                      <div class="modal-filter__box-item">
                        <h3>dsad</h3>
                      </div>
                </div>
        </div>

  </div>
</template>

<script>


export default {
  props: {
    // categorySuggestion  : { type: [Object,Array], default: [] },
    openDefaultBox  : { type: Boolean, default: false },
  },

  components: {
  },

  data() {
    return {
      openBox : false,
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
    }

  },

};
</script>

<style lang="scss" scoped>
.modal-filter__box{
  width: 100%;
  background: $white;
  padding-top: 13px;
  padding-bottom: 13px;
  border:solid 1px $chinese_white;
  @include display-flex();
  align-items: flex-start;
  border-radius: 10px;
  padding-right: 16px;
  padding-left: 16px;
  flex-wrap: wrap;
  max-height: 51px;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  overflow: hidden;
}
.modal-filter__box-content{
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 16px;
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
}
.modal-filter__box-title{
  @include display-flex();
  align-items: center;
  cursor: pointer;
}
.active--box .modal-filter__box-arrow{
  transform:rotate(-180deg);
  transition  : all .3s ease-in-out;
}
.active--box {
  max-height: 1000px;
  transition: max-height 1s ease-in-out;
}


</style>
