<template>
  <div :class="{'active--box':openBox}" class="w-100 modal-filter__box">
    <div @click="toggleBox" class="modal-filter__box-title w-100">
      <h3 class="modal-filter__box-text">{{ title }}</h3>
      <span class="modal-filter__box-arrow"></span>
      <!-- <img class="modal-filter__box-arrow" src="/icons/arrow-down.svg" alt=""> -->
    </div>

    <div class="modal-filter__box-content w-100">
      <div class="modal-filter__box-items w-100">
        <div class="modal-filter__box-item">
          <div class="w-100 modal-filter__box-slider">

            <div class="w-100 modal-filter__box-price">
              <div class="modal-filter__box-from">
                <h3 class="modal-filter__box-titlePrice">از</h3>
                <input ref="fromInput" @keyup="fromPrice" v-model="lastUpdateValueRange.addCommaFromPrice"
                       type="text" class="modal-filter__box-value modal-filter__box-data">
              </div>
              <div class="modal-filter__box-from box--to">
                <h3 class="modal-filter__box-titlePrice">تا</h3>
                <input ref="toInput" @keyup="toPrice" v-model="lastUpdateValueRange.addCommaToPrice"
                       type="text" class="modal-filter__box-value modal-filter__box-data">
              </div>
              <h3 class="modal-filter__box-unit">تومان</h3>
            </div>

            <div class="modal-filter__box-renge" :key="updateRange">
              <base-range-slider-multiple
              class="multiple-range-slider"
              :min="minMax.min"
              :max="minMax.max"
              :first-value="fromValue"
              :second-value="toValue"
              @selector-changed="changeSliderRange"
              @selector-moved="selectorMoved"
            ></base-range-slider-multiple>

            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import "vue-slider-component/theme/antd.css";
import "~/assets/styles/_slider_range_price.scss";
import addCommaPrice from "~/modules/addCamaPrice.js";


export default {
  props: {
    // categorySuggestion  : { type: [Object,Array], default: [] },
    openDefaultBox: { type: Boolean, default: false },
    title: { type: String, default: "" },
    minMax: { type: Object, default: {} },
    fromToRange: { type: Object, default: {} },
  },

  data() {
    return {
      openBox: false,
      fromValue: 30000,
      toValue: 80000,
      lastUpdateValueRange: {
        addCommaFromPrice: "",
        addCommaToPrice: "",
      },
      updateRange: 0,
      changeInputRange: true,
      timeout: null,
      isChange: false
    };
  },

  mounted() {
    const minMax = [this.fromValue, this.toValue];
    this.openBox = this.openDefaultBox;
    this.addCommaPrice(minMax);
    this.$emit("last-update-slider-range", minMax);
  },

  methods: {
    toggleBox() {
      this.openBox = !this.openBox;
    },

    addCommaPrice(data) {
      let lastUpdateRange = {};
      data.map((content, index) => {
        if (index === 0) {
          lastUpdateRange.addCommaFromPrice = addCommaPrice(Math.trunc(content));
        }

        if (index === 1) {
          lastUpdateRange.addCommaToPrice = addCommaPrice(Math.trunc(content));
        }
      });

      this.lastUpdateValueRange = lastUpdateRange;
    },

    changeSliderRange(value, isChanged) {
      if (isChanged) {
        this.fromValue = parseInt(value[1])
        this.toValue = parseInt(value[0])
      } else {
        this.fromValue = parseInt(value[0])
        this.toValue = parseInt(value[1])
      }

      if (this.changeInputRange) {
        this.addCommaPrice(value);
        this.$emit("last-update-slider-range", value);
      } else {
        this.changeInputRange = true;
      }
    },
    selectorMoved (val) {
      if (this.changeInputRange) {
        this.addCommaPrice(val);
        this.$emit("last-update-slider-range", val);
      } else {
        this.changeInputRange = true;
      }
    },

    removeCommaTyping(e) {
      const value = e.target.value.split(",");
      let removeComma = "";
      value.map((content) => {
        removeComma += content;
      });

      return removeComma;
    },

    fromPrice(e) {
      clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
        const removedFromComma = this.removeCommaTyping(e);
        let removedToComma = ""
        const toValue = this.$refs.toInput.value.split(",")
        toValue.map((content) => {
          removedToComma += content
        })
        this.toValue = parseInt(removedToComma)
        this.lastUpdateValueRange.addCommaFromPrice = addCommaPrice(removedFromComma);
        this.updateInputChangeRangeFrom(e, removedFromComma);
      },1000)

    },

    toPrice(e) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
        const removedToComma = this.removeCommaTyping(e);
        let removedFromComma = ""
        const fromValue = this.$refs.fromInput.value.split(",")
        fromValue.map((content) => {
          removedFromComma += content
        })
        this.fromValue = parseInt(removedFromComma)
        this.lastUpdateValueRange.addCommaToPrice = addCommaPrice(removedToComma);
        this.updateInputChangeRangeTo(e, removedToComma);
      },1000)

    },

    updateInputChangeRangeFrom(e, valueRangeRemoveComma) {
      if (valueRangeRemoveComma < this.minMax.min) {
        this.fromValue = this.minMax.min;
      } else {
        this.fromValue = parseInt(valueRangeRemoveComma);
      }
      this.changeInputRange = false;
      this.$emit("last-update-slider-range", [parseInt(this.fromValue), parseInt(this.toValue)]);
      this.updateRange++;
    },
    updateInputChangeRangeTo (e, valueRangeRemoveComma) {
      if (valueRangeRemoveComma > this.minMax.max) {
        this.toValue = this.minMax.max;
      } else {
        this.toValue = parseInt(valueRangeRemoveComma);
      }
      this.changeInputRange = false;
      this.$emit("last-update-slider-range", [parseInt(this.fromValue), parseInt(this.toValue)]);
      this.updateRange++;

    }

  },

};
</script>

<style lang="scss" scoped>
.modal-filter__box {
  width: 98%;
  margin-right: auto;
  margin-left: auto;
  background: $white;
  padding-top: 13px;
  padding-bottom: 13px;
  border: solid 1px $chinese_white;
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

.modal-filter__box-content {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 16px;
}

.modal-filter__box-text {
  font-size: 16px;
  color: $dark_gray;
  font-weight: 400;
  flex-grow: 1;
  @include display-flex();
}

.modal-filter__box-arrow::before {
  content: "\e800";
  @include font-icon__arrow();
  font-size: 18px;
  color: $gray;
  cursor: pointer;
}

.modal-filter__box-arrow {
  height: 18px;
  transition: all .3s ease-in-out;
  margin-top: 3px;
}

.modal-filter__box-title {
  @include display-flex();
  align-items: center;
  cursor: pointer;
}

.active--box .modal-filter__box-arrow {
  transform: rotate(-180deg);
  transition: all .3s ease-in-out;
}

.active--box {
  max-height: 1000px;
  transition: max-height 1s ease-in-out;
}


.renge-circle {
  pointer-events: none;
}

.multiple-range-slider {
  margin-top: toRem(26);
}

.modal-filter__box-price {
  @include display-flex();
  align-items: center;
  width: 100%;
}

.modal-filter__box-from {
  @include display-flex();
  align-items: center;
  margin-left: 11px;
}

.modal-filter__box-from:last-of-type {
  margin-left: 0;
}

.modal-filter__box-titlePrice {
  font-size: 16px;
  color: $gray;
  margin-left: 14px;
  font-weight: 400;
}

.modal-filter__box-value {
  background: $flash_white;
  border: 1px solid $flash_white;
  width: 99px;
  height: 30px;
  justify-content: center;
  @include display-flex();
  align-items: center;
  border-radius: 100px;
  outline: none;
  font-family: inherit;
  text-align: center;
  direction: ltr;
}

.modal-filter__box-unit {
  font-weight: 300;
  color: $gray;
  font-size: 14px;
  margin-right: toRem(6);
}

.modal-filter__box-data {
  font-weight: 400;
  font-size: 16px;
  color: $color-price;
}

.modal-filter__box-renge {
  margin-top: 19px;
}


@media (max-width: 420px) {
  .modal-filter__box-renge {
    margin-top: 12px;
    display: none;
  }
  .modal-filter__box-text {
    font-size: 14px;
  }
  .modal-filter__box-title {
    align-items: flex-start;
  }
  .modal-filter__box-value {
    width: 90px;
  }
  .modal-filter__box-titlePrice {
    font-size: 14px;
  }
  .modal-filter__box-unit {
    font-size: 13px;
    margin-right: 6px;
  }
  .modal-filter__filter-tools {
    margin-top: 16px;
  }
  .modal-filter__box-price {
    justify-content: center;
  }
  .modal-filter__box-data {
    font-size: 13px;
  }
  .modal-filter__box-renge {
    display: none;
  }


}

@media (max-width: 350px) {
  // .modal-filter__box-items{
  //   overflow-x: auto;
  //   flex-shrink: 0;
  //   height: 72px;
  //   @include display-flex();
  // }
}


</style>
