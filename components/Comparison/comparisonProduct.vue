<template>
  <div class="w-100 comparison__product">
    <div class="comparison__product-right">
      <div class="comparison__product-main">
        <h3 class="product__right-title">مقایسه محصولات</h3>
        <h3 class="product__right-description">
          محصولات مورد نظرتون رو اضافه کنید و به مقایسه بپردازید.
        </h3>
      </div>
    </div>
    <div class="comparison__product-left">
      <div class="comparison__product-slider">
        <product-slider :products="products"></product-slider>
      </div>
      <div class="comparison__product-add">
        <div class="product__add-main">
          <div @click="showAddProductComparison" class="product__add-data">
            <span class="product__add-icon"></span>
            <h3 class="product__add-title">افزودن محصول دیگر</h3>
          </div>
        </div>
      </div>
    </div>

    <transition name="backdrop-delete">
      <div class="backdrop" v-if="showModalAddProduct" @click="closeAddProductModal"></div>
    </transition>
    <transition name="delete">
      <modal-add-product-comparison
        v-if="showModalAddProduct"
        @close-modal="closeAddProductModal"
        :modal-mode="modalMode"
        :products="products"
      ></modal-add-product-comparison>
    </transition>
  </div>
</template>

<script>
import productSlider from "./productSlider";
import modalAddProductComparison from "~/components/Comparison/modalAddProductComparison";

export default {
  props: {
    products: { type: [Object, Array], default: [] },
  },

  components: {
    productSlider,
    modalAddProductComparison,
  },

  data() {
    return {
      showModalAddProduct: false,
      windowWidth: 0
    };
  },
  computed: {
    modalMode() {
      if (this.windowWidth > 520) {
        return "delete";
      } else {
        return "full-screen";
      }
    }
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  methods: {
    showAddProductComparison() {
      this.showModalAddProduct = true;
    },
    closeAddProductModal() {
      this.showModalAddProduct = false;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
};
</script>

<style lang="scss" scoped>
@include backdrop-delete-modal-animation();
@include delete-modal-animation();

.backdrop {
  @extend .modal-backdrop;
  background-color: $overlay--profile;
}
.comparison__product-main {
  @include display-flex();
  flex-wrap: wrap;
  width: 100%;
}
.comparison__product {
  @include display-flex();
  height: 340px;
}
.comparison__product-right {
  width: 275px;
  padding-right: 24px;
  padding-left: 30px;
  @include display-flex();
  flex-wrap: wrap;
  align-items: center;
  border-left: solid 1px $gray-border;
}
.comparison__product-add {
  width: 275px;
  @include display-flex();
  align-items: center;
  justify-content: center;
}
.comparison__product-left {
  flex-grow: 1;
  @include display-flex();
  align-items: center;
}
.comparison__product-slider {
  flex-grow: 1;
}
.product__right-description {
  font-weight: 300;
  font-size: 14px;
  line-height: 2.3em;
}
.product__right-title {
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 18px;
}
.product__right-title {
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 18px;
}
.product__add-title {
  margin-top: 17px;
  color: $color-blue;
  font-size: 14px;
  font-weight: 300;
}
.product__add-main {
  @include display-flex();
  width: 100%;
  justify-content: center;
}
.product__add-data {
  @include display-flex();
  align-items: center;
  flex-flow: column;
  cursor: pointer;
}
.product__add-icon {
  &::before {
    content: "\e86b";
    @include font-icon__limoo();
    font-size: toRem(50);
    color: $color-blue;
  }
}
</style>
