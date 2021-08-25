<template>
  <base-modal
    class="modal-container"
    modal-class="p-profile-favorite-modal d-rtl modal"
    @close-modal="modalClose"
  >
    <div
      class="w-100 p-profile-favorite-wrapper flex-wrap align-items-start flex-column "
    >
      <h3 class="p-profile-favorite-title w-100 justify-content-center">
        این محصول از لیست حذف شود؟
      </h3>

      <div class="p-profile-favorite-btns w-100 justify-content-center">
        <base-button
          @button-clicked="DeleteFavorite"
          classes="p-product-btn p-favorite-product-btn-modal-delete"
          base-color="yellow"
          no-box-shadow
        >
          حذف
        </base-button>
        <base-button
          @button-clicked="modalClose"
          classes="p-product-btn p-favorite-product-btn-modal-cancel"
          no-box-shadow
          base-color="light-gray"
        >
          انصراف
        </base-button>
      </div>
    </div>
  </base-modal>
</template>

<script>
export default {
    props: {
        currentFavorite: { type: Object, default: {} }
    },
    methods: {
        DeleteFavorite() {
            this.$emit("btn-delete-favorite", this.currentFavorite);
        },

        modalClose() {
            this.$emit('close-modal');
        }
    }
};
</script>

<style lang="scss" scoped>
.modal-container::v-deep {
  .modal {
    width: toRem(372);
    height: toRem(182);

    .p-profile-favorite-title {
      @include display-flex();
      margin-top: toRem(11);
      font-size: toRem(20);
      font-weight: 400;
    }
  }
}
.p-profile-favorite-wrapper {
  @include display-flex();
  padding: 1rem;
}
.p-profile-favorite-btns {
  @include display-flex();
  margin-top: toRem(55);
  margin-bottom: toRem(5);
}

.p-favorite-product-btn-modal-delete {
  margin-left: 1rem;
}
.p-favorite-product-btn-modal-cancel {
  margin-left: 0;
}
.p-favorite-product-btn {
  width: toRem(130);
}
.p-product-btn {
  width: toRem(150);
  height: toRem(47);
  font-family: inherit;
  transition: all 120ms ease-in;
}

@include sm {
  .modal-container::v-deep {
    .modal {
      width: toRem(340);
      height: toRem(167);

      .p-profile-favorite-title {
        font-size: toRem(18);
      }
    }
  }
  .p-profile-favorite-title {
    font-size: toRem(16);
  }
  .p-product-btn {
    width: toRem(140);
    height: toRem(45);
  }
}

@include xs {
  .modal-container::v-deep {
    .modal {
      width: toRem(318);
      height: toRem(156);

      .p-profile-favorite-title {
        font-size: toRem(16);
        @include display-flex();
        justify-content: flex-start;
        padding-right: toRem(9);
      }
    }
  }
  .p-profile-favorite-btns {
    margin-top: toRem(48);
  }
  .p-product-btn {
    width: toRem(130);
    height: toRem(41.7);
  }
}
@include xxs {
  .modal-container::v-deep {
    .modal {
      width: toRem(270);
      height: toRem(156);

      .p-profile-favorite-title {
        font-size: toRem(16);
      }
    }
  }
}
</style>
