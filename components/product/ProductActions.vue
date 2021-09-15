<template>
  <div class="actions-container">
    <div class="action-item category">
      دسته: موبایل
    </div>
    <div class="action-item action share">
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
    <div class="action-item action compare">
      <span class="icon"></span>
      مقایسه
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductActions",
  data() {
    return {
      isFavorite: false
    }
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    }
  }
};
</script>

<style lang="scss" scoped>
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
          @include xs {
            display: none;
          }
        }
      }
    }
  }
</style>
