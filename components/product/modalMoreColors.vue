<template>
  <base-modal
    class="modal-container"
    :mode="modalMode"
    modal-class="modal"
    @close-modal="closeModal"
  >
    <div class="w-100 p-modal-header">

      <div class="p-modal-header-desktop w-100">
        <div class="w-100 p-modal-header-top-main">
          <div class="p-modal-header-top align-items-center">
            <h3 class="p-modal-header-top-title">
              {{ titleText }}
            </h3>
          </div>
          <div class="p-modal-header-close ">
            <base-button
              @button-clicked="closeModal"
              classes="p-modal-header-close-icon"
              base-color="white"
              mode="close">
            </base-button>
          </div>
        </div>
        <span class="p-modal-header-line"></span>
      </div>
    </div>
    <div class="modal-body">
      <color-item class="color-item"
        :class="'modal-items'+ modalItems"
        v-for="(item, index) in remainingColorsData" :key="item.id"
        :preview-colors="[`${item.color}`]"
        @item-selected="colorSelected(index)">
        {{ item.name }}
      </color-item>
    </div>

  </base-modal>
</template>

<script>
import ColorItem from "./ColorItem";
export default {
  components: { ColorItem },
  props: {
    modalMode: { type: String, require: true },
    remainingColorsData: { type: Array, require: true }
  },
  data() {
    return {
      windowWidth: 0,
      modalItems: "9ce71d78-1c1e-448f-991d-b9e936f944e8",
    };
  },
  computed: {
    titleText() {
      if (this.windowWidth > 520) {
        return "انتخاب رنگ محصول";
      } else {
        return "رنگ مورد نظر را انتخاب کنید";
      }
    },
    colorsData() {
      return this.$store.getters["product/single/single/colorsData"];
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    colorSelected(index) {
      this.$emit('color-selected', index);
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
};
</script>

<style lang="scss" scoped>
.modal-container::v-deep {
  .modal {
    width: toRem(642);
    background: $white;
    box-shadow: 0 toRem(8) toRem(16) $box__shadow;
    border-radius: toRem(15);

    &__close-icon {
      content: "\e807";
      @include font-icon__limoo();
      font-size: toRem(28);
    }

    .p-modal-header-icon {
      @include display-flex();
    }

    .p-modal-header-close-icon {
      margin-left: 0;
    }

    .p-modal-header-top {
      flex-grow: 1;
      @include display-flex();
    }

    .p-modal-header-top-title {
      color: $black;
      font-size: toRem(18);
      font-weight: 500;
    }

    .p-modal-header {
      padding-right: toRem(24);
      padding-left: toRem(24);
    }

    .p-modal-content {
      @include display-flex();
    }

    .p-modal-content-items {
      @include display-flex();
    }

    .p-modal-header-line {
      width: 90%;
      height: toRem(1);
      background: $gray-border;
      @include display-flex();
      margin: toRem(2) 0 toRem(38);
    }

    .p-modal-header-top-main {
      @include display-flex();
      align-items: center;
      padding-top: toRem(20);
      padding-bottom: toRem(11);
    }


    .p-modal-header-close-icon {
      &.close {
        &::before {
          font-size: toRem(28);
          color: $gray-4;
        }
      }
    }
    .modal-body {
      @extend .justify-center;
      flex-wrap: wrap;
      margin-bottom: toRem(42);
      padding-right: toRem(24);
      max-height: toRem(380);
      overflow-y: auto;
      justify-content: flex-start;
      .color-item {
        margin-left: toRem(8);
        margin-bottom: toRem(16);
      }
    }
  }
}
@include sm {
  .modal-container::v-deep {
    .modal {
      width: toRem(514);
    }
  }
}

@include xs {
  .modal-container::v-deep {
    .modal {
      .p-modal-header-close-icon {
        display: none;
      }
      .p-modal-header-line {
        display: none;
      }
      .p-modal-header-top {
        justify-content: center;
      }
      .p-modal-header-top-main {
        padding-bottom: toRem(60);
      }
      .p-modal-header-top-title {
        font-size: toRem(16);
        color: $gray-3;
      }
      .modal-body {
        padding-bottom: toRem(10);
        padding-right: toRem(30);
        max-height: toRem(350);
        overflow-y: scroll;
        justify-content: flex-start;
        .color-item {
          margin-bottom: toRem(24);
          width: 45%;
          font-size: toRem(13);
        }
      }
    }
  }
}
@include xxs {
  .modal-container::v-deep {
    .modal {
      .modal-body {
        padding-right: toRem(15);
        padding-left: toRem(15);
        .color-item {
          margin-bottom: toRem(24);
          margin-right: auto;
          margin-left: auto;
          width: 90%;
          font-size: toRem(14);
        }
      }
    }
  }

}

</style>

