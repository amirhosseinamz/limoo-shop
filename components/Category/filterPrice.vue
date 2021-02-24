<template>
  <div :class="{'active--box':openBox}" class="w-100 modal-filter__box">
        <div @click="toggleBox" class="modal-filter__box-title w-100">
          <h3 class="modal-filter__box-text">{{title}}</h3>
          <!-- <span class="modal-filter__box-arrow"></span> -->
          <img class="modal-filter__box-arrow" src="/icons/arrow-down.svg" alt="">
        </div>

        <div class="modal-filter__box-content w-100">
                  <div class="modal-filter__box-items w-100">
                            <div class="modal-filter__box-item">
                                  <div class="w-100 modal-filter__box-slider" >

                                      <div class="w-100 modal-filter__box-price">
                                            <div class="modal-filter__box-from">
                                                <h3 class="modal-filter__box-titlePrice">از</h3>
                                                <div class="modal-filter__box-value">
                                                  <h3 class="modal-filter__box-data">{{lastUpdateValueRenge.addCamaFromPrice}}</h3>
                                                </div>
                                            </div>
                                            <div class="modal-filter__box-from box--to">
                                                <h3 class="modal-filter__box-titlePrice">تا</h3>
                                                <div class="modal-filter__box-value">
                                                  <h3 class="modal-filter__box-data">{{lastUpdateValueRenge.addCamaToPrice}}</h3>
                                                </div>
                                            </div>
                                            <h3 class="modal-filter__box-unit">تومان</h3>
                                      </div>

                                        <div class="modal-filter__box-renge">
                                              <vue-slider
                                              v-model="value"
                                              :max="minMax.max"
                                              :min="minMax.min"
                                              ref="slider"
                                              @change="changeSliderRenge"
                                              height="23px"
                                              width="99%"
                                              dotSize="24"
                                              direction="rtl"
                                              padding="7px 0px"

                                              >
                                              <template v-slot:dot="{ value, focus }">
                                                <img src="/icons/renge-circle.svg" :class="['renge-circle custom-dot', { focus }]"></img>
                                              </template>
                                            </vue-slider>
                                        </div>

                                      </div>
                            </div>
                  </div>
        </div>

  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import '~/assets/styles/_slider_range_price.scss'
import addCamaPrice from "~/modules/addCamaPrice.js";


export default {
  props: {
    // categorySuggestion  : { type: [Object,Array], default: [] },
    openDefaultBox  : { type: Boolean, default: false },
    title           : { type: String, default: '' },
    minMax          : { type: Object, default: {} },
    fromToRenge     : { type: Object, default: {} },
  },

  components: {
    VueSlider,
  },

  data() {
    return {
      openBox              : false,
      value                : [this.fromToRenge.from, this.fromToRenge.to],
      lastUpdateValueRenge : {
        addCamaFromPrice : '',
        addCamaToPrice   : '',
      },
    }
  },

  watch: {

  },

  mounted() {
    const minMax = [this.fromToRenge.from, this.fromToRenge.to];

    if (this.openDefaultBox) {
      this.openBox = true;
    }
    else {
      this.openBox = false;
    }

    this.addCamaPrice(minMax)
    this.$emit("last-update-slider-renge",minMax);
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

    addCamaPrice(data){
      let lastUpdateRenge = {};
      data.map((content,index)=>{
        if (index == 0) {
          lastUpdateRenge.addCamaFromPrice = addCamaPrice(content);
        }

        if (index == 1) {
          lastUpdateRenge.addCamaToPrice = addCamaPrice(content);
        }
      })

      this.lastUpdateValueRenge = lastUpdateRenge;
    },

    changeSliderRenge(value, index){
      this.addCamaPrice(value);
      this.$emit("last-update-slider-renge",value);
    }

  },

};
</script>

<style lang="scss" scoped>
.modal-filter__box{
  width: 98%;
  margin-right: auto;
  margin-left: auto;
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
  margin-top: 6px;
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
  margin-top: 3px;
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


.renge-circle{
  pointer-events: none;
}
.modal-filter__box-price{
  @include display-flex();
  align-items: center;
  width: 100%;
}
.modal-filter__box-from{
  @include display-flex();
  align-items: center;
  margin-left: 11px;
}
.modal-filter__box-from:last-of-type{
  margin-left: 0;
}
.modal-filter__box-titlePrice{
  font-size: 16px;
  color: $gray;
  margin-left: 14px;
  font-weight: 400;
}
.modal-filter__box-value{
  background: $flash_white;
  width: 99px;
  height: 30px;
  justify-content: center;
  @include display-flex();
  align-items: center;
  border-radius: 100px;
}
.modal-filter__box-unit{
  font-weight: 300;
  color: $gray;
  font-size: 14px;
  margin-right: 14px;
}
.modal-filter__box-data{
  font-weight: 400;
  font-size: 16px;
  color: $color-price;
}
.modal-filter__box-renge{
  margin-top: 19px;
}


@media (max-width: 420px) {
  .modal-filter__box-renge{
    margin-top: 12px;
  }
  .modal-filter__box-text{
    font-size: 14px;
  }
  .modal-filter__box-title{
    align-items: flex-start;
  }
  .modal-filter__box-value{
    width: 90px;
  }
  .modal-filter__box-titlePrice{
    font-size: 14px;
  }
  .modal-filter__box-unit{
    font-size: 13px;
    margin-right: 6px;
  }
  .modal-filter__filter-tools{
    margin-top: 16px;
  }
  .modal-filter__box-price{
    justify-content: center;
  }
  .modal-filter__box-data{
    font-size: 13px;
  }


}

@media (max-width: 350px) {
  .modal-filter__box-items{
    overflow-x: auto;
    flex-shrink: 0;
    height: 72px;
    @include display-flex();
  }
}



</style>
