<template>
  <div class="product-colors-container">
    <transition name="backdrop-form">
      <div class="backdrop" v-if="showModal" @click="closeModal"></div>
    </transition>
    <transition :name="modalAnimation">
      <modal-more-colors
        v-if="showModal"
        :modal-mode="modalAnimation"
        @close-modal="closeModal"
        @color-selected="colorSelected"
      ></modal-more-colors>
    </transition>
    <span class="title">رنگ: </span>
    <div class="desktop-display">
      <div class="colors">
        <color-item class="color-item" v-for="item in colorsData" :key="item.id" :background-color="item.color">
          {{ item.name }}
        </color-item>
      </div>
      <color-item class="more-colors" :color-preview="false" :selectable="false" @item-clicked="showMoreColors">
        <span class="more-colors-icon"></span>
        <span class="more-icon-text">
        رنگ های بیشتر
      </span>
      </color-item>
    </div>
    <div class="mobile-display">
      <color-item class="more-colors" :background-color="moreColorsBackground" :selectable="false" @item-clicked="showMoreColors">
        <span class="more-colors-icon"></span>
        <span class="more-icon-text">
        7 رنگ موجود است
        </span>
      </color-item>
    </div>
  </div>
</template>

<script>
import ColorItem from "./ColorItem";
import ModalMoreColors from "./modalMoreColors";

export default {
  name: "productColors",
  components: { ModalMoreColors, ColorItem },
  data() {
    return {
      colorsData: [
        {
          id: 1,
          color: "red",
          name: "قرمز",
        },
        {
          id: 2,
          color: "green",
          name: "سبز",
        },
        {
          id: 3,
          color: "purple",
          name: "بنفش",
        },
      ],
      windowWidth: 0,
      showModal: false,
      moreColorsBackground: "green",
    };
  },
  computed: {
    modalAnimation() {
      if (this.windowWidth > 520) {
        return "form";
      } else {
        return "phone";
      }
    },
  },
  methods: {
    handleResize() {
      this.windowWidth = window.outerWidth;
    },
    closeModal() {
      this.showModal = false;
    },
    showMoreColors() {
      this.showModal = true;
    },
    colorSelected(backgroundColor) {
      this.moreColorsBackground = backgroundColor;
      this.showModal = false;
    }
  },
  mounted() {
    // setTimeout(() => {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
      console.log(window.outerWidth);
    // }, 1000)
  },
};
</script>

<style lang="scss" scoped>
@include phone-modal-animation();
@include form-modal-animation();
@include backdrop-form-modal-animation();
.product-colors-container {
  @extend .d-flex;
  flex-wrap: nowrap;
  .backdrop {
    @extend .modal-backdrop;
    background-color: $overlay--profile;
  }
  .title {
    font-size: toRem(16);
    line-height: 190%;
    margin-left: toRem(32);
    color: $gray-2;
  }


  .desktop-display {
    @extend .d-flex;
    flex-wrap: wrap;

    .colors {
      @extend .d-flex;

      .color-item {
        margin-left: toRem(8);
        width: toRem(100);
        height: toRem(40);
        padding: 0 toRem(6) 0 toRem(10);
        margin-bottom: toRem(10);
      }
    }

    .more-colors {
      color: $gray-3;
      font-size: toRem(14);
      width: toRem(128);
      height: toRem(40);
      padding: 0 toRem(6) 0 toRem(10);
      max-width: unset;
      &-icon {
        &::before {
          content: "\e822";
          @include font-icon__limoo;
          font-size: toRem(13);
        }
      }
    }

    .more-colors::v-deep {
      .color-name {
        font-size: toRem(14);
      }
    }
  }

  .mobile-display {
    display: none;
  }
}

@include md {
  .product-colors-container {
    .desktop-display {
      .more-colors::v-deep {
        .color-name {
          font-size: toRem(13);
        }
      }
    }
  }
  .more-colors {
    &-icon {
      &::before {
        font-size: toRem(12);
      }
    }
  }
}

@include sm {
  .product-colors-container {
    margin-top: toRem(50);
  }
}

@include xs {
  .product-colors-container {
    display: block;

    .title {
      line-height: 0;
    }

    .desktop-display {
      display: none;
    }

    .mobile-display {
      @include display-flex();
      margin-top: toRem(8);

    }

    .more-colors::v-deep {
      &.color-item-container {
        width: 100%;
        height: toRem(45);
        border: toRem(1) solid $gray-5;
        color: $gray-3;
        max-width: unset;
      }
    }
  }
}

</style>
