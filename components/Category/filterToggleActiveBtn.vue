<template>
  <div class="w-100  modal-filter__filter-btn">
        <div class="w-100 modal-filter__item ">
          <h3 class="modal-filter__item-title tools--title">کالا های موجود</h3>
          <div class="modal-filter__btn">
            <div class="switch">
              <input id="switch-1" type="checkbox" class="switch-input" />
              <label for="switch-1" class="switch-label"></label>
            </div>
          </div>
          <span class="modal-filter__line"></span>
        </div>

        <div class="w-100 modal-filter__item ">
          <h3 class="modal-filter__item-title tools--title">ارسال رایگان</h3>
          <div class="modal-filter__btn">
            <div class="switch">
              <input id="switch-2" type="checkbox" class="switch-input" />
              <label for="switch-2" class="switch-label"></label>
            </div>
          </div>
          <span class="modal-filter__line"></span>
        </div>

        <div class="w-100 modal-filter__item ">
          <h3 class="modal-filter__item-title tools--title">آماده است</h3>
          <div class="modal-filter__btn">
            <div class="switch">
              <input id="switch-3" type="checkbox" class="switch-input" />
              <label for="switch-3" class="switch-label"></label>
            </div>
          </div>
          <span class="modal-filter__line"></span>
        </div>
  </div>
</template>

<script>


export default {
  props: {
    // categorySuggestion  : { type: [Object,Array], default: [] },
  },

  components: {
  },

  data() {
    return {
    }
  },

  watch: {

  },

  mounted() {

  },

  methods: {


  },

};
</script>

<style lang="scss" scoped>
.modal-filter__item{
  width: 100%;
  @include display-flex();
  flex-wrap: wrap;
  align-items: center;
}
.modal-filter__item-title{
  font-size: 16px;
  color: $dark_gray;
  font-weight: 300;
}
.tools--title{
  font-size: 16px;
}
.modal-filter__btn{
  flex-grow: 1;
  @include display-flex();
  justify-content: flex-end;
  .switch {
    position: relative;
    display: inline-block;
  }
  .switch-input {
    display: none;
  }
  .switch-label {
    display: block;
    width: 54px;
    height: 29px;
    text-indent: -150%;
    clip: rect(0 0 0 0);
    color: transparent;
    user-select: none;
  }
  .switch-label::before,
  .switch-label::after {
    content: "";
    display: block;
    position: absolute;
    cursor: pointer;
  }
  .switch-label::before {
    width: 100%;
    height: 100%;
    background-color: $chinese_white;
    border-radius: 9999em;
    -webkit-transition: background-color 0.25s ease;
    transition: background-color 0.25s ease;
  }
  .switch-label::after {
    left: 0;
    top: 1.5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
    -webkit-transition: left 0.25s ease;
    transition: left 0.25s ease;
  }
  .switch-input:checked + .switch-label::before {
    background-color: $orange_btn_filter;
  }
  .switch-input:checked + .switch-label::after {
    left: 27px;
  }

}
.modal-filter__line{
  height: 1px;
  width: 100%;
  @include display-flex();
  margin-top: 20px;
  margin-bottom: 18px;
  background: $flash_white;
}


</style>
