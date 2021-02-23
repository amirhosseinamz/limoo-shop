<template>
    <modal
        id="modal-filter"
        class="modal-filter d-rtl"
        size="800px"
        :show.sync="show"
        :footer="false"
    >
        <div class="modal-filter__main">
                      <div class="modal-filter__close-item w-100">
                            <div class="w-100 modal-filter__item ">
                                <h3 class="modal-filter__item-title">جستجوی پیشرفته</h3>
                                <div @click="modalClose" class="modal-filter__item-left">
                                  <span class="modal-filter__item-close"></span>
                                </div>
                                <div class="modal-filter__line"></div>
                            </div>
                      </div>

                      <div class="w-100 modal-filter__filter-tools">

                            <filter-toggle-active-btn></filter-toggle-active-btn>

                            <filter-price
                             :open-default-box="true"
                             :title="'حدود قیمت'"
                             :minMax="{min:0,max:5000}"
                             :from-to-renge="{from:1000,to:3000}"
                             @last-update-slider-renge="lastUpdateSliderRenge"

                             ></filter-price>

                             <!-- <filter-price
                              :open-default-box="true"
                              :data="{}"
                              :title="'انتخاب برند'"

                              ></filter-price> -->


                      </div>
        </div>
    </modal>
</template>

<script>
import '~/assets/styles/_modal_filter_category.scss'
import filterPrice from './filterPrice';
import filterToggleActiveBtn from './filterToggleActiveBtn';


export default {
    props: {
        active: { type: [Boolean, Number], default: false },
        // currentProduct: { type: Object, default: {} }
    },

    components: {
      filterPrice,
      filterToggleActiveBtn,
    },


    computed: {
        show: {
            set(val) {
                this.$emit("update:active", !!val);
            },
            get() {
                return !!this.active;
            }
        }
    },

    watch: {
      active(data) {
        this.$emit('status-show-modal',data);
      },
    },

    methods: {
        modalClose() {
            this.show = false;
        },

        lastUpdateSliderRenge(data){
          console.log(data);
        }


    }
};
</script>

<style lang="scss" scoped>
.modal-filter__main{
  width: 100%;
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
  padding-right: 18px;
  padding-left: 18px;
  padding-top: 30px;
}
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
.modal-filter__item-close::before {
  content: "\e807";
  @include font-icon__limoo();
  font-size: 22px;
  color: $gray;
  cursor: pointer;
}
.modal-filter__close-item{
  @include display-flex();
  align-items: flex-start;
}
.modal-filter__item-left{
  flex-grow: 1;
  @include display-flex();
  justify-content: flex-end;
}
// .modal-filter__filter-tools{
//   margin-top: 47px;
// }
.modal-filter__line{
  height: 1px;
  width: 100%;
  @include display-flex();
  margin-top: 20px;
  margin-bottom: 18px;
  background: $flash_white;
}




@media (max-width: 768px) {

}

@media (max-width: 485px) {
  .modal-filter__item-title{
    font-size: 14px;
    align-items: flex-start;
  }
  .modal-filter__filter-tools{
    margin-top: 0;
  }

}

</style>
