<template>
  <div class="actions-container">
    <div class="action-item category">
      دسته: موبایل
    </div>
    <div class="action-item action share" @click="showShareModal">
      <span class="icon"></span>
      اشتراک گذاری
    </div>
    <div class="action-item action favorite" @click="toggleFavorite" :class="{ 'selected': isFavorite }">
      <span class="icon"></span>
      علاقمندی
    </div>
    <div class="action-item action discount">
      <span class="icon"></span>
      اطلاع از تخفیف
    </div>
    <div class="action-item action compare" @click="goToCompare">
      <span class="icon"></span>
      مقایسه
    </div>
    <transition name="backdrop-form">
      <div class="backdrop" v-if="shareModalIsOpen" @click="closeShareModal"></div>
    </transition>
    <transition :name="shareModalMode">
      <modal-share-product
        v-if="shareModalIsOpen"
        :modal-mode="shareModalMode"
        @close-modal="closeShareModal"
      ></modal-share-product>
    </transition>
  </div>
</template>

<script>
import ModalShareProduct from "./ModalShareProduct";
export default {
  name: "ProductActions",
  components: { ModalShareProduct },
  props: {
    shareModalMode: { type: String, require: true }
  },
  data() {
    return {
      isFavorite: false,
      shareModalIsOpen: false,
      windowWidth: 0
    }
  },
  computed: {
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
    showShareModal() {
      this.shareModalIsOpen = true;
    },
    closeShareModal() {
      this.shareModalIsOpen = false;
    },
    goToCompare() {
      this.$router.push('/product/comparison');
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
};
</script>

<style lang="scss" scoped>
@include form-modal-animation();
@include backdrop-form-modal-animation();

.backdrop {
  @extend .modal-backdrop;
  background-color: $overlay--profile;
}
  .actions-container {
    @extend .align-center;
    flex-wrap: wrap;

    .action-item {
      padding: toRem(9);
      border-radius: toRem(10);
      margin-left: toRem(16);
      margin-top: toRem(16);
      font-size: toRem(14);
      white-space: nowrap;
      cursor: pointer;
      &:last-child {
        margin-left: 0;
      }

      &.category {
        background-color: $gray-6;
        color: $gray-3;
        @include xs {
          display: none;
        }
      }
      &.action {
        background-color: transparent;
        border: toRem(1) solid $gray-6;
        color: $gray-3;
        .icon {
          &::before {
            margin-left: toRem(1);
            @include font-icon__limoo();
            font-size: toRem(14);
          }
        }
        &.share {
          .icon {
            &::before {
              content: "\e832";
            }
          }
        }
        &.favorite {
          transition: color 0.2s ease-out;
          .icon {
            &::before {
              transition: color 0.2s ease-out;
              content: "\e816";
            }
          }
          &.selected {
            .icon {
              &::before {
                color: $red-color;
              }
            }
          }
          @include xs {
            &.selected {
               color: $red-color;
            }
          }
        }
        &.discount {
          .icon {
            &::before {
              content: "\e81e";
            }
          }
          &.selected {
            .icon {
              &::before {
                color: $color-blue;
              }
            }
          }
          @include xs {
            margin-left: 0;
          }
        }
        &.compare {
          .icon {
            &::before {
              content: "\e80b";
            }
          }
          @include lg {
            display: none;
          }
        }
      }
    }
  }
</style>
