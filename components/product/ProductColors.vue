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
    <div class="product-colors-title">
      <span class="title-name">رنگ: </span>
      <span class="color-name">
        {{ colorName }}
      </span>
    </div>
    <div class="desktop-display">
      <div
        class="img-box"
        @click="selectColorItem($event, item.exist)"
        @mouseover="hoverColorName(item.name, item.exist)"
        @mouseout="unHoverColorName"
        :data-color="item.name"
        :class="['color-item-'+colorItemUUID, { 'disabled': !item.exist }]"
        v-for="item in firstNthOfColors(5)"
        :key="item.id"
      >
        <img :src="item.image" :alt="item.name">
      </div>
      <div class="more-colors" @click="showMoreColors">
        <span class="more-colors-icon"></span>
        <span class="more-icon-text">
        رنگ های بیشتر
      </span>
      </div>
    </div>
    <div class="mobile-display">
      <color-item class="more-colors" :preview-colors="firstFourOfColorsNames" :selectable="false"
                  @item-clicked="showMoreColors">
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
      windowWidth: 0,
      showModal: false,
      moreColorsBackground: "green",
      colorItemUUID: "98a46b71-02ce-4586-9c51-e2f41dd64323",
      colorName: "",
      hoverImageBox: false,
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
    colorsData() {
      return this.$store.getters["product/single/single/colorsData"];
    },
    firstFourOfColorsNames() {
      let _colors = [];
      for (let i = 0; i < 4; i++) {
        _colors.push(this.colorsData[i].color);
      }
      return _colors;
    },

  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    firstNthOfColors(length) {
      return this.colorsData.slice(0, length);
    },
    selectColorItem(e, itemExist) {
      if (itemExist) {
        const active = document.querySelector(".color-item-" + this.colorItemUUID + ".selected");
        if (active) {
          active.classList.remove("selected");
        }
        e.target.classList.add("selected");
      }
    },
    hoverColorName(colorName, itemExist) {
      if (itemExist) {
        this.colorName = colorName;
      }
    },
    unHoverColorName() {
      const active = document.querySelector(".color-item-" + this.colorItemUUID + ".selected");
      this.colorName = active.getAttribute("data-color");

    },
    closeModal() {
      this.showModal = false;
    },
    showMoreColors() {
      this.showModal = true;
    },
    colorSelected() {
      //this.moreColorsBackground = backgroundColor;
      //this.$store.dispatch("product/single/single/changeColorArrayElements");
      this.showModal = false;
      setTimeout(() => {
        document.querySelector(".color-item-" + this.colorItemUUID).classList.add("selected");
      }, 1);
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    let firstColor = document.querySelector(".color-item-" + this.colorItemUUID);
    firstColor.classList.add("selected");
    this.colorName = firstColor.getAttribute("data-color");
  },
};
</script>

<style lang="scss" scoped>
$colorItemUUID: "98a46b71-02ce-4586-9c51-e2f41dd64323";
@include phone-modal-animation();
@include form-modal-animation();
@include backdrop-form-modal-animation();
.product-colors-container {
  @extend .d-flex;
  flex-wrap: nowrap;
  flex-direction: column;
  border-bottom: toRem(2) solid $gray-6;
  padding-bottom: toRem(16);

  .backdrop {
    @extend .modal-backdrop;
    background-color: $overlay--profile;
  }

  .product-colors-title {
    @extend .align-center;
    margin-bottom: toRem(8);

    .title-name {
      font-size: toRem(16);
      line-height: 190%;
      margin-left: toRem(5);
      color: $gray-2;
    }

    .color-name {
      font-size: toRem(16);
      color: $black-topic;
    }
  }


  .desktop-display {
    @extend .d-flex;
    flex-wrap: wrap;

    .img-box {
      width: toRem(51);
      height: toRem(51);
      border-radius: toRem(8);
      padding: toRem(6);
      margin-left: toRem(8);
      border: toRem(1) solid $gray-6;
      cursor: pointer;

      &.selected {
        border: toRem(1) solid $gray;
      }

      &.disabled {
        border: toRem(1) dashed $gray-6;

        img {
          opacity: 0.5;
        }
      }

      img {
        max-width: toRem(39);
        max-height: toRem(39);
        pointer-events: none;
      }
    }

    .colors {
      @extend .d-flex;

      .color-item-#{$colorItemUUID} {
        margin-left: toRem(8);
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
      @extend .align-center;
      margin-top: toRem(8);
      cursor: pointer;
      border: toRem(1) solid $gray-6;
      border-radius: toRem(10);

      &-icon {
        margin-left: toRem(5);
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

      .more-icon-text {
        font-size: toRem(14);
      }
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

@include xxs {
  .product-colors-container {
    .mobile-display {
      .more-icon-text {
        font-size: toRem(13);
      }
    }
  }
}

</style>
