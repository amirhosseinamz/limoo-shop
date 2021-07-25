<template>
    <sliding-drop-down :title="title" class="modal-filter__box">
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
              :width="rangeSliderWidth"
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
    </sliding-drop-down>
</template>

<script>
import "vue-slider-component/theme/antd.css";
import "~/assets/styles/_slider_range_price.scss";
import addCommaPrice from "~/modules/addCamaPrice.js";
import SlidingDropDown from "../UI/SlidingDropDown";


export default {
  components: { SlidingDropDown },
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
      isChange: false,
      windowWidth: 0
    };
  },
  watch: {
    windowWidth (val) {
      this.windowWidth = val
      console.log(val);
    }
  },
  computed: {
    rangeSliderWidth () {
      if (this.windowWidth > 421) {
        return '307'
      } else {
        return '270'
      }
    }
  },

  mounted() {
    const minMax = [this.fromValue, this.toValue];
    this.openBox = this.openDefaultBox;
    this.addCommaPrice(minMax);
    this.$emit("last-update-slider-range", minMax);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
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
      } else if (valueRangeRemoveComma > this.minMax.max) {
        this.fromValue = this.minMax.max;
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
      } else if (valueRangeRemoveComma < this.minMax.min) {
        this.toValue = this.minMax.min
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
.modal-filter__box::v-deep {
  width: 98%;
  margin-top: toRem(6);
  .dropdown-title {
    font-size: toRem(16);
  }
}

.modal-filter__box-content {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: toRem(16);
}
.active--box {
  max-height: toRem(1000);
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
  margin-left: toRem(11);
}

.modal-filter__box-from:last-of-type {
  margin-left: 0;
}

.modal-filter__box-titlePrice {
  font-size: toRem(16);
  color: $gray;
  margin-left: toRem(14);
  font-weight: 400;
}

.modal-filter__box-value {
  background: $flash_white;
  border: toRem(1) solid $flash_white;
  width: toRem(99);
  height: toRem(30);
  justify-content: center;
  @include display-flex();
  align-items: center;
  border-radius: toRem(100);
  outline: none;
  font-family: inherit;
  text-align: center;
  direction: ltr;
}

.modal-filter__box-unit {
  font-weight: 300;
  color: $gray;
  font-size: toRem(14);
  margin-right: toRem(6);
}

.modal-filter__box-data {
  font-weight: 400;
  font-size: toRem(16);
  color: $color-price;
}

.modal-filter__box-renge {
  margin-top: toRem(19);
  display: flex;
  justify-content: center;
}


@media (max-width: 420px) {
  .modal-filter__box-renge {
   margin: 0;
  }
  .modal-filter__box::v-deep {
    .dropdown-title {
      font-size: toRem(14);
    }
  }
  .modal-filter__box-value {
    width: toRem(90);
  }
  .modal-filter__box-titlePrice {
    font-size: toRem(14);
    margin-left: toRem(8);
  }
  .modal-filter__box-unit {
    font-size: toRem(13);
    margin-right: toRem(6);
  }
  .modal-filter__filter-tools {
    margin-top: toRem(16);
  }
  .modal-filter__box-price {
    justify-content: center;
  }
  .modal-filter__box-data {
    font-size: toRem(13);
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
