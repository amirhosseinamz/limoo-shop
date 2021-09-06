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
      <color-item class="color-item" v-for="item in colorsData" :key="item.id" :background-color="item.color" @item-selected="colorSelected">
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
  },
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
          color: "purple",
          name: "بنفش",
        },
        {
          id: 3,
          color: "green",
          name: "سبز",
        },
        {
          id: 4,
          color: "red",
          name: "قرمز",
        },
        {
          id: 5,
          color: "green",
          name: "سبز",
        },
        {
          id: 6,
          color: "purple",
          name: "بنفش",
        },
        {
          id: 7,
          color: "purple",
          name: "بنفش",
        },
        {
          id: 8,
          color: "green",
          name: "سبز",
        },
        {
          id: 9,
          color: "red",
          name: "قرمز",
        },
      ],
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    titleText() {
      if (this.windowWidth > 520) {
        return "انتخاب رنگ محصول";
      } else {
        return "رنگ مورد نظر را انتخاب کنید";
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    colorSelected(backgroundColor) {
      this.$emit('color-selected', backgroundColor);
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
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
      @extend .d-flex;
      flex-wrap: wrap;
      margin-bottom: toRem(42);
      padding-right: toRem(24);
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
        justify-content: center;
        padding-bottom: toRem(60);
        .color-item {
          margin-left: toRem(16);
          margin-bottom: toRem(24);
        }
      }
    }
  }
}
@include xxs {
  .modal-body {
    padding-right: toRem(15);
    padding-left: toRem(15);
  }
}

</style>

