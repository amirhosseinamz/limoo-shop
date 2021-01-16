<template>
  <modal
    id="p-profile-favorite-modal"
    class="p-profile-favorite-modal d-rtl"
    size="800px"
    :show.sync="show"
    :footer="false"
  >
    <div class="w-100 p-profile-favorite-wrapper flex-wrap align-items-start flex-column ">
        <h3 class="p-profile-favorite-title w-100 justify-content-center">این محصول از لسیت حذف شود?</h3>

        <div class="p-profile-favorite-btns w-100 justify-content-center">
          <button @click="DeleteFavorite" type="button" name="button" class="p-product-btn  p-favorite-product-btn-modal-delete cursor-pointer  ">
            حذف
          </button>
          <button  @click="modalClose" type="button" name="button" class="p-product-btn  cursor-pointer p-favorite-product-btn-modal-cancel  ">
            انصراف
          </button>
        </div>

    </div>

  </modal>
</template>

<script>

export default {
    props: {
      active           : { type: [Boolean, Number], default: false },
      currentFavorite  : { type: Object, default: {} },
    },

    components: {

    },

    computed: {
      show: {
            set(val) {
              this.$emit('update:active', !!val)
            },
            get() {
              return !!this.active
            }
        },
    },

    methods: {
      DeleteFavorite(){
        this.$emit('btn-delete-favorite',this.currentFavorite);
      },

      modalClose(){
        this.show = false;
      },

    },


};
</script>

<style lang="scss" scoped>
  .p-profile-favorite-wrapper{
    @include display-flex();
  }
  .p-profile-favorite-btns{
    @include display-flex();
    margin-top: 55px;
    margin-bottom: 5px;
  }
  .p-profile-favorite-title{
    @include display-flex();
    margin-top: 11px;
    font-size: 21px;
    font-weight: 400 !important;
  }
  .p-favorite-product-btn-modal-delete {
    background: $yellow;
    margin-left: 16px;
    color: $white;
  }
  .p-favorite-product-btn-modal-cancel {
    background: $light_gray;
    margin-left: 0;
    border-color: $light_gray;
    color: $gray;
  }
  .p-favorite-product-btn-modal-cancel:hover{
    background: #E0E0E0;
    color: #828282;
  }
  .p-favorite-product-btn{
    width: 130px;
  }

  @media (max-width: 768px) {
    .p-profile-favorite-title{
      font-size: 16px;
    }
    .p-product-btn{
      width: 130px;
      height: 41px;
    }
  }

  @media (max-width: 460px) {
    .p-product-btn{
      width: 116px;
      height: 38px;
    }
  }



</style>
