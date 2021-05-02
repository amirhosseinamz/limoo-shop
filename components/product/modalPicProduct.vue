<template>
  <modal
    class="d-rtl product--single__modal"
    size="1083px"
    :show.sync="show"
    :footer="false"
  >
    <div class="w-100  product__modal">
      <div class="w-100 product__modal-text">
        <div class="w-100 product__modal-top">
          <h3 class="product__modal-title">
            {{ getTextByTextKey("product_pic_text") }}
          </h3>
          <!-- <span class="product__modal-close"></span> -->
          <img
            @click="modalClose"
            src="/icons/closeModalProduct.svg"
            class="product__modal-close"
            alt=""
          />
        </div>
        <span class="product__modal-line"></span>
      </div>

      <div class="w-100 product__modal-container">
        <div class="w-100 product__modal-pic">
          <div class="product__modal-item w-100">
            <img
              class="product--modal_pic-item"
              :src="imageSelected.image"
              alt=""
            />
          </div>
        </div>

        <div class="w-100 product--modal_pic-all">
          <div class=" main-carousel w-100 product_modal-main">
            <div
              :class="{ active: data.active }"
              v-for="data in productSlider"
              :key="data.id"
              class="carousel-cell "
            >
              <img
                :data-id="data.id"
                class="carousel-pic"
                :src="data.image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import "~/assets/styles/_modal_single_product.scss";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    active: { type: [Boolean, Number], default: false },
    productSlider: { type: [Object, Array], default: [] },
    imageSelected: { type: Object, default: {} },
  },

  components: {},

  data() {
    return {
      productSliderData: [],
    };
  },

  computed: {
    show: {
      set(val) {
        this.$emit("update:active", !!val);
      },
      get() {
        return !!this.active;
      },
    },
  },

  watch: {
    active(showModal) {
      if (showModal) {
        setTimeout(() => {
          this.flickityOptions();
        }, 10);
        this.activePicSelected(this.imageSelected);
      }
    },
  },

  mounted() {},

  methods: {
    getTextByTextKey,
    modalClose() {
      this.show = false;
    },

    flickityOptions() {
      let Flickity = require("flickity");
      let sliderOptions = new Flickity(".main-carousel", {
        accessibility: true,
        adaptiveHeight: true,
        rightToLeft: true,
        cellAlign: "right",
        imagesLoaded: true,
        wrapAround: false,
        contain: true,
        // prevNextButtons : false,
        // autoPlay        : true, // advance cells every 3 seconds
        // autoPlay: 1500 // {Number}
        // freeScroll      : true,
        pageDots: false,
        groupCells: true,
        fade: false,
      });

      sliderOptions.on(
        "staticClick",
        (event, pointer, cellElement, cellIndex) => {
          const getIdCurrentImg = event.target.getAttribute("data-id");

          this.productSlider.map((content) => {
            if (content.id == getIdCurrentImg) {
              this.activePicSelected(content);
            }
          });
        }
      );
    },

    activePicSelected(data) {
      this.$emit("active-item-slider-nav", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.product__modal {
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  @include display-flex();
}
.product__modal-close::after {
  @include display-flex();
  content: "\e801";
  @include font-icon__limoo();
  font-size: 12px;
}
.product__modal-close {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.product__modal-text {
  @include display-flex();
  align-items: center;
  flex-wrap: wrap;
}
.product__modal-title {
  font-size: 18px;
  color: $black;
  font-weight: 400;
  flex-grow: 1;
  min-height: 27px;
}
.product__modal {
  padding-top: 24px;
}
.product__modal-line {
  margin-bottom: 24px;
  margin-top: 16px;
}
.product__modal-line {
  background: $gray-border;
  width: 100%;
  height: 1px;
  @include display-flex();
}
.product__modal-top {
  @include display-flex();
  align-items: flex-start;
}
.product__modal-item {
  @include display-flex();
  align-content: center;
  border: solid 1px $light-gray;
  border-radius: 10px;
}
.product__modal-container {
  padding-right: 50px;
  padding-left: 50px;
  width: 100%;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.product--modal_pic-item {
  width: 514px;
  height: 514px;
  margin-right: auto;
  margin-left: auto;
  padding: 11px;
}
.carousel-cell {
  width: 87px;
  height: 87px;
  border: solid 1px $light-gray;
  margin-left: 7px;
  border-radius: 10px;
  cursor: pointer;
}
.carousel-pic {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.product_modal-main {
  padding-top: 24px;
}
.active {
  border-color: $black-topic;
}

@media (max-width: 768px) {
  .p-profile-history-title {
    font-size: 16px;
  }
  .p-product-btn {
    width: 130px;
    height: 41px;
  }
}

@media (max-width: 460px) {
  .p-product-btn {
    width: 116px;
    height: 38px;
  }
}
</style>
