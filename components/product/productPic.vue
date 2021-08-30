<template>
  <div class="w-100 product__pic">
    <div class="w-100 product__pic-main">
      <img
        @click="showModal(productSlider[0])"
        class="product__pic-item"
        :src="productSlider[0].image"
        alt=""
      />
    </div>

    <span class="product__line"></span>

    <div class="product__pic-content w-100" :key="updateLimitedProduct">
      <div
        @click="showModal(data)"
        :class="{ 'active--pic': data.lastItemLimitedProduct }"
        v-for="(data, index) in productSlider"
        v-if="data.show && index !== 0"
        :key="data.id"
        class="product__pic-items"
      >
        <div class="product__pic-box">
          <img class="product__pic-data" :src="data.image" alt="" />

          <div class="w-100 product--pic__circle-main">
            <span class="product__pic-circle"></span>
            <span class="product__pic-circle"></span>
            <span class="product__pic-circle"></span>
          </div>
        </div>
        <span class="product--pic_data-line"></span>
      </div>
    </div>

<!--    Pics Modal-->
    <transition name="backdrop-scale">
      <div class="backdrop" v-if="showModalPic" @click="modalClose"></div>
    </transition>
    <transition :name="modalAnimation">
      <modal-pic-product
        v-if="showModalPic"
        :show-modal="showModalPic"
        :product-slider="productSlider"
        :image-selected="imageSelected"
        @active-item-slider-nav="activeItemSliderNav"
        @close-modal="modalClose"
      ></modal-pic-product>
    </transition>
  </div>
</template>
<script>
import modalPicProduct from "./modalPicProduct";

export default {
  props: {
    productSlider: { type: [Object, Array], default: [] },
  },
  components: {
    modalPicProduct,
  },
  computed: {
    modalAnimation() {
      return "scale";
    },
  },
  data() {
    return {
      showModalPic: false,
      productLimitedShow: [],
      imageSelected: {},
      updateLimitedProduct: 0,
      windowWidth: 0
    };
  },

  watch: {},

  created() {},

  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.limitedProduct();
  },

  methods: {
    modalClose() {
      this.showModalPic = false;
    },
    limitedProduct() {
      this.productSlider.map((content, index) => {
        content.show = false;
        content.lastItemLimitedProduct = false;

        if (index <= 4) {
          content.show = true;
        }

        if (index === 4) {
          content.lastItemLimitedProduct = true;
        }
      });

      this.updateLimitedProduct++;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    showModal(data) {
      this.imageSelected = data;
      this.showModalPic = true;
    },

    activeItemSliderNav(data) {
      this.imageSelected = data;
      this.$emit("active-item-slider-nav", data);
    },
  },
};
</script>

<style lang="scss" scoped>
@include scale-modal-animation();
@include backdrop-scale-animation();

.backdrop {
  @extend .modal-backdrop;
  background-color: $overlay--profile;
}
.product__pic {
  @include display-flex();
  align-items: flex-start;
  justify-content: center;
  padding-top: toRem(16);
  flex-wrap: wrap;
}
.product__pic-main {
  width: 514px;
  height: 514px;
  @include display-flex();
}
.product__line {
  width: 100%;
  height: 1px;
  background: $gray-border;
  margin-top: toRem(16);
  margin-right: 8px;
  margin-left: 8px;
}
.product__pic-item {
  width: 100%;
  height: 514px;
  border-radius: 15px;
  @include display-flex();
  cursor: pointer;
}
.product__pic-content {
  @include display-flex();
  align-items: flex-start;
  padding: toRem(16);
  justify-content: center;
}
.product__pic-box {
  border: solid 1px $white;
  width: 122px;
  height: 122px;
  border-radius: 10px;
  @include display-flex();
  align-items: flex-start;
  cursor: pointer;
  position: relative;
}
.active--pic .product__pic-box {
  border-color: $gray-border;
}
.active--pic .product__pic-data {
  filter: blur(4px);
}
.product__pic-data {
  width: 100%;
  height: 120px;
  padding: 4px;
}
.product--pic_data-line {
  margin-left: 4.5px;
  margin-right: 4.5px;
  background: $gray-border;
  border-radius: 8px;
  width: 1px;
  @include display-flex();
  right: -9px;
  position: absolute;
  top: 16%;
  height: 74%;
}
.product__pic-items {
  @include display-flex();
  align-items: center;
  position: relative;
  margin-left: 9px;
}
.product__pic-items:last-of-type {
  margin-left: 0;
}
.product__pic-items:nth-child(1) .product--pic_data-line {
  opacity: 0;
  pointer-events: none;
}
.product--pic__circle-main {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: none;
}
.product__pic-circle {
  width: 7px;
  height: 7px;
  background: $white;
  @include display-flex();
  border-radius: 1000px;
  margin-left: 7px;
}
.active--pic .product--pic__circle-main {
  @include display-flex();
}

@include xl {
  .product__pic-item {
    height: auto;
    width: 100%;
  }
  .product__pic-box {
    width: auto;
    height: auto;
  }
  .product__pic-main {
    width: auto;
    height: auto;
  }
  .product__pic-data {
    height: auto;
  }
}
</style>
