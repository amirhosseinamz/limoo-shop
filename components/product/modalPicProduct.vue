<template>
  <base-modal
    class="modal-container d-rtl"
    modal-class="modal d-rtl product--single__modal"
    mode="scale"
    @close-modal="modalClose"
  >
    <div class="w-100  product__modal">
      <div class="w-100 product__modal-text">
        <div class="w-100 product__modal-top">
          <h3 class="product__modal-title">
            {{ getTextByTextKey("product_pic_text") }}
          </h3>
          <span @click="modalClose" class="product__modal-close"></span>
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
  </base-modal>

</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    showModal: { type: [Boolean, Number], default: false },
    productSlider: { type: [Object, Array], default: [] },
    imageSelected: { type: Object, default: {} },
  },

  components: {},

  data() {
    return {
      productSliderData: [],
    };
  },
  mounted() {

  },
  watch: {
    showModal: {
      deep: true,
      handler(val) {
        if (val) {
          setTimeout(() => {
            this.flickityOptions();
          }, 100);
          this.activePicSelected(this.imageSelected);
        }
      },
      immediate: true,
    }
  },

  methods: {
    getTextByTextKey,
    modalClose() {
      this.$emit('close-modal');
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
            if (content.id === getIdCurrentImg) {
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
.modal-container::v-deep {
  .modal {
    width: toRem(1083);
    padding: 0.5rem 1.5rem;
    .product__modal {
      width: 100%;
      flex-wrap: wrap;
      align-items: flex-start;
      @include display-flex();
      padding-bottom: 38px;
    }
    .main-carousel {
      //@extend .d-flex;
    }
    .product__modal-close::after {
      content: "\e807";
      @include font-icon__limoo();
      font-size: toRem(30);
      color: $color-gray;
      cursor: pointer;
    }
    .product__modal-close {
      width: toRem(30);
      height: toRem(30);
      cursor: pointer;
    }
    .product__modal-text {
      @include display-flex();
      align-items: center;
      flex-wrap: wrap;
    }
    .product__modal-title {
      font-size: toRem(18);
      color: $black;
      font-weight: 400;
      flex-grow: 1;
      min-height: toRem(27);
    }
    .product__modal {
      padding-top: toRem(24);
    }
    .product__modal-line {
      margin-bottom: toRem(24);
      margin-top: toRem(16);
    }
    .product__modal-line {
      background: $gray-border;
      width: 100%;
      height: toRem(1);
      @include display-flex();
    }
    .product__modal-top {
      @include display-flex();
      align-items: flex-start;
    }
    .product__modal-item {
      @include display-flex();
      align-content: center;
      border: solid toRem(1) $light-gray;
      border-radius: toRem(10);
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
      //width: toRem(514);
      height: toRem(514);
      margin-right: auto;
      margin-left: auto;
      padding: toRem(11);
    }
    .carousel-cell {
      width: toRem(87);
      height: toRem(87);
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
  }
}


@include xl {
  .modal-container::v-deep {
    .modal {
      width: 900px;
      .product--modal_pic-item {
        height: 400px;
      }
    }
  }
}
@include md {
  .modal-container::v-deep {
    .modal {
      width: 760px;
    }
  }
}

@include sm {
  .modal-container::v-deep {
    .modal {
      .p-profile-history-title {
        font-size: toRem(16);
      }
      .p-product-btn {
        width: toRem(130);
        height: toRem(41);
      }
    }
  }

}

@include xs {
  .modal-container::v-deep {
    .modal {
      .p-product-btn {
        width: toRem(116);
        height: toRem(38);
      }
    }
  }

}
</style>
